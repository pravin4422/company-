import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';
import { trackLinkClick, sortLinksByClicks } from '../utils/linkTracker';

function ImportantLinksCareer() {
  const navigate = useNavigate();
  const [links, setLinks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [linkName, setLinkName] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

  useEffect(() => {
    const savedLinks = localStorage.getItem('importantLinksCareer');
    if (savedLinks) {
      setLinks(sortLinksByClicks(JSON.parse(savedLinks), 'importantLinksCareer'));
    }
  }, []);

  const handleAddLink = () => {
    if (linkName && linkUrl) {
      const newLink = {
        id: Date.now(),
        name: linkName,
        link: linkUrl
      };
      const updatedLinks = [...links, newLink];
      setLinks(updatedLinks);
      localStorage.setItem('importantLinksCareer', JSON.stringify(updatedLinks));
      setLinkName('');
      setLinkUrl('');
      setShowForm(false);
    }
  };

  const handleDeleteLink = (id) => {
    const updatedLinks = links.filter(link => link.id !== id);
    setLinks(updatedLinks);
    localStorage.setItem('importantLinksCareer', JSON.stringify(updatedLinks));
  };

  const handleOpenLink = (linkItem) => {
    trackLinkClick(linkItem.id, 'importantLinksCareer');
    const sorted = sortLinksByClicks(links, 'importantLinksCareer');
    setLinks(sorted);
    window.open(linkItem.link, '_blank');
  };

  const handleSeeDetails = (link) => {
    navigate('/company-details', { state: { company: link } });
  };

  return (
    <div className="home-container">
      <header>
        <h1>Career Links</h1>
        <p>Important Career Resources and Links</p>
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Link'}
        </button>
      </header>
      
      {showForm && (
        <div className="form-container">
          <input
            type="text"
            placeholder="Link Name"
            value={linkName}
            onChange={(e) => setLinkName(e.target.value)}
          />
          <input
            type="url"
            placeholder="URL"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
          />
          <button className="btn" onClick={handleAddLink}>
            Save Link
          </button>
        </div>
      )}
      
      <div className="grid-container">
        {links.map((link) => (
          <div key={link.id} className="grid-item">
            <h3>{link.name}</h3>
            <div className="sub-grid">
              <button className="btn sub-btn" onClick={() => handleOpenLink(link)}>
                Open Link
              </button>
              <button className="btn sub-btn" onClick={() => handleSeeDetails(link)}>
                See Details
              </button>
            </div>
            <button className="btn delete-btn" onClick={() => handleDeleteLink(link.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImportantLinksCareer;
