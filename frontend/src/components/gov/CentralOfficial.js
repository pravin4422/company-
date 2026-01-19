import React, { useState, useEffect } from 'react';
import '../../css/government.css';
import { trackLinkClick, sortLinksByClicks } from '../../utils/linkTracker';

function CentralOfficial() {
  const [links, setLinks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [linkName, setLinkName] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('central_official');
    if (saved) {
      setLinks(sortLinksByClicks(JSON.parse(saved), 'central_official'));
    } else {
      const defaultLinks = [
        { id: 1, name: 'RRB Apply', url: 'https://www.rrbapply.gov.in/#/auth/landing' },
        { id: 2, name: 'SSC Portal', url: 'https://ssc.gov.in/candidate-portal/dashboard' },
        { id: 3, name: 'Hindustan Jobs', url: 'https://hindustanjobs.net/' },
        { id: 4, name: 'TNPSC Exams', url: 'https://apply.tnpscexams.in/secure?app_id=UElZMDAwMDAwMQ%3D%3D' },
        { id: 5, name: 'UGC NET', url: 'https://ugcnet.nta.nic.in/' }
      ];
      setLinks(defaultLinks);
      localStorage.setItem('central_official', JSON.stringify(defaultLinks));
    }
  }, []);

  const handleAdd = () => {
    if (linkName && linkUrl) {
      const newLink = { id: Date.now(), name: linkName, url: linkUrl };
      const updated = [...links, newLink];
      setLinks(updated);
      localStorage.setItem('central_official', JSON.stringify(updated));
      setLinkName('');
      setLinkUrl('');
      setShowForm(false);
    }
  };

  const handleDelete = (id) => {
    const updated = links.filter(link => link.id !== id);
    setLinks(updated);
    localStorage.setItem('central_official', JSON.stringify(updated));
  };

  const handleReset = () => {
    const defaultLinks = [
      { id: 1, name: 'RRB Apply', url: 'https://www.rrbapply.gov.in/#/auth/landing' },
      { id: 2, name: 'SSC Portal', url: 'https://ssc.gov.in/candidate-portal/dashboard' },
      { id: 3, name: 'Hindustan Jobs', url: 'https://hindustanjobs.net/' },
      { id: 4, name: 'TNPSC Exams', url: 'https://apply.tnpscexams.in/secure?app_id=UElZMDAwMDAwMQ%3D%3D' },
      { id: 5, name: 'UGC NET', url: 'https://ugcnet.nta.nic.in/' }
    ];
    setLinks(defaultLinks);
    localStorage.setItem('central_official', JSON.stringify(defaultLinks));
  };

  const getFavicon = (url) => {
    try {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } catch {
      return '';
    }
  };

  const handleOpenLink = (link) => {
    trackLinkClick(link.id, 'central_official');
    const sorted = sortLinksByClicks(links, 'central_official');
    setLinks(sorted);
    window.open(link.url, '_blank');
  };

  const getWebsiteScreenshot = (url) => {
    try {
      return `https://api.screenshotmachine.com?key=demo&url=${encodeURIComponent(url)}&dimension=1024x768`;
    } catch {
      return '';
    }
  };

  return (
    <div className="gov-container">
      <header>
        <h1>Central Govt - Official Page</h1>
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Link'}
        </button>
        <button className="btn" onClick={handleReset} style={{marginLeft: '10px'}}>
          Reset to Default
        </button>
      </header>
      {showForm && (
        <div className="form-container">
          <input type="text" placeholder="Link Name" value={linkName} onChange={(e) => setLinkName(e.target.value)} />
          <input type="url" placeholder="URL" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} />
          <button className="btn" onClick={handleAdd}>Save</button>
        </div>
      )}
      <div className="gov-grid">
        {links.map(link => (
          <div key={link.id} className="gov-item">
            <h3>
              {link.url && <img src={getFavicon(link.url)} alt="" />}
              {link.name}
            </h3>
            <div className="gov-actions">
              <button className="btn sub-btn" onClick={() => handleOpenLink(link)}>Open Link</button>
              <button className="btn delete-btn" onClick={() => handleDelete(link.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CentralOfficial;
