import React, { useState, useEffect } from 'react';
import '../css/government.css';
import { trackLinkClick, sortLinksByClicks } from '../utils/linkTracker';

function GovSubjectPage({ title, storageKey, defaultLinks = [] }) {
  const [links, setLinks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [linkName, setLinkName] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setLinks(sortLinksByClicks(JSON.parse(saved), storageKey));
    } else if (defaultLinks.length > 0) {
      setLinks(defaultLinks);
      localStorage.setItem(storageKey, JSON.stringify(defaultLinks));
    }
  }, [storageKey, defaultLinks]);

  const handleAdd = () => {
    if (linkName && linkUrl) {
      const newLink = { id: Date.now(), name: linkName, url: linkUrl };
      const updated = [...links, newLink];
      setLinks(updated);
      localStorage.setItem(storageKey, JSON.stringify(updated));
      setLinkName('');
      setLinkUrl('');
      setShowForm(false);
    }
  };

  const handleDelete = (id) => {
    const updated = links.filter(link => link.id !== id);
    setLinks(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

  const handleReset = () => {
    if (defaultLinks.length > 0) {
      setLinks(defaultLinks);
      localStorage.setItem(storageKey, JSON.stringify(defaultLinks));
    } else {
      setLinks([]);
      localStorage.setItem(storageKey, JSON.stringify([]));
    }
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
    trackLinkClick(link.id, storageKey);
    const sorted = sortLinksByClicks(links, storageKey);
    setLinks(sorted);
    window.open(link.url, '_blank');
  };

  return (
    <div className="gov-container">
      <header>
        <h1>{title}</h1>
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

export default GovSubjectPage;
