import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';
import { trackLinkClick, sortLinksByClicks } from '../utils/linkTracker';

function YouTubeEducational() {
  const navigate = useNavigate();
  const [channels, setChannels] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [channelName, setChannelName] = useState('');
  const [channelLink, setChannelLink] = useState('');

  useEffect(() => {
    const savedChannels = localStorage.getItem('youtubeEducational');
    if (savedChannels) {
      setChannels(sortLinksByClicks(JSON.parse(savedChannels), 'youtubeEducational'));
    } else {
      const defaultChannels = [
        { id: 1, name: 'Educational Content', link: 'https://www.youtube.com/watch?v=Mc026dwhkBg' },
        { id: 2, name: 'Playlist', link: 'https://www.youtube.com/playlist?list=PLMCXHnjXnTnvQVh7WsgZ8SurU1O2v_UM7' }
      ];
      setChannels(defaultChannels);
      localStorage.setItem('youtubeEducational', JSON.stringify(defaultChannels));
    }
  }, []);

  const handleAddChannel = () => {
    if (channelName && channelLink) {
      const newChannel = {
        id: Date.now(),
        name: channelName,
        link: channelLink
      };
      const updatedChannels = [...channels, newChannel];
      setChannels(updatedChannels);
      localStorage.setItem('youtubeEducational', JSON.stringify(updatedChannels));
      setChannelName('');
      setChannelLink('');
      setShowForm(false);
    }
  };

  const handleDeleteChannel = (id) => {
    const updatedChannels = channels.filter(channel => channel.id !== id);
    setChannels(updatedChannels);
    localStorage.setItem('youtubeEducational', JSON.stringify(updatedChannels));
  };

  const handleReset = () => {
    const defaultChannels = [
      { id: 1, name: 'Educational Content', link: 'https://www.youtube.com/watch?v=Mc026dwhkBg' },
      { id: 2, name: 'Playlist', link: 'https://www.youtube.com/playlist?list=PLMCXHnjXnTnvQVh7WsgZ8SurU1O2v_UM7' }
    ];
    setChannels(defaultChannels);
    localStorage.setItem('youtubeEducational', JSON.stringify(defaultChannels));
  };

  const getFavicon = (url) => {
    try {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } catch {
      return '';
    }
  };

  const getYouTubeThumbnail = (url) => {
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname.includes('youtube.com') || urlObj.hostname.includes('youtu.be')) {
        const videoId = urlObj.searchParams.get('v') || urlObj.pathname.split('/').pop();
        if (videoId && !url.includes('playlist')) return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
      }
      return '';
    } catch {
      return '';
    }
  };

  const handleOpenLink = (channel) => {
    trackLinkClick(channel.id, 'youtubeEducational');
    const sorted = sortLinksByClicks(channels, 'youtubeEducational');
    setChannels(sorted);
    window.open(channel.link, '_blank');
  };

  const handleSeeDetails = (channel) => {
    navigate('/company-details', { state: { company: channel } });
  };

  return (
    <div className="home-container">
      <header>
        <h1>Educational YouTube Channels</h1>
        <p>Learning and Educational Content</p>
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Channel'}
        </button>
        <button className="btn" onClick={handleReset} style={{marginLeft: '10px'}}>
          Reset to Default
        </button>
      </header>
      
      {showForm && (
        <div className="form-container">
          <input
            type="text"
            placeholder="Channel Name"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
          />
          <input
            type="url"
            placeholder="Channel Link"
            value={channelLink}
            onChange={(e) => setChannelLink(e.target.value)}
          />
          <button className="btn" onClick={handleAddChannel}>
            Save Channel
          </button>
        </div>
      )}
      
      <div className="youtube-grid">
        {channels.map((channel) => (
          <div key={channel.id} className="grid-item">
            {getYouTubeThumbnail(channel.link) && (
              <img src={getYouTubeThumbnail(channel.link)} alt="" style={{width: '100%', borderRadius: '12px', marginBottom: '15px'}} />
            )}
            <h3>
              {channel.link && <img src={getFavicon(channel.link)} alt="" />}
              {channel.name}
            </h3>
            <div className="sub-grid">
              <button className="btn sub-btn" onClick={() => handleOpenLink(channel)}>
                Open Link
              </button>
              <button className="btn sub-btn" onClick={() => handleSeeDetails(channel)}>
                See Details
              </button>
            </div>
            <button className="btn delete-btn" onClick={() => handleDeleteChannel(channel.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YouTubeEducational;
