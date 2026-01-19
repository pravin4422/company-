import React, { useState, useEffect } from 'react';
import '../css/home.css';
import { trackLinkClick, sortLinksByClicks } from '../utils/linkTracker';

function DSA() {
  const [links, setLinks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [linkName, setLinkName] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('dsa');
    if (saved) {
      setLinks(sortLinksByClicks(JSON.parse(saved), 'dsa'));
    } else {
      const defaultLinks = [
        { id: 1, name: 'LeetCode Patterns', url: 'https://blog.algomaster.io/p/15-leetcode-patterns' },
        { id: 2, name: 'AlgoMaster Archive', url: 'https://blog.algomaster.io/archive?sort=top' },
        { id: 3, name: 'DSA Patterns Roadmap', url: 'https://github.com/KushalVijay/DSA-Patterns-Roadmap' }
      ];
      setLinks(defaultLinks);
      localStorage.setItem('dsa', JSON.stringify(defaultLinks));
    }
  }, []);

  const handleAdd = () => {
    if (linkName && linkUrl) {
      const newLink = { id: Date.now(), name: linkName, url: linkUrl };
      const updated = [...links, newLink];
      setLinks(updated);
      localStorage.setItem('dsa', JSON.stringify(updated));
      setLinkName('');
      setLinkUrl('');
      setShowForm(false);
    }
  };

  const handleDelete = (id) => {
    const updated = links.filter(link => link.id !== id);
    setLinks(updated);
    localStorage.setItem('dsa', JSON.stringify(updated));
  };

  const handleReset = () => {
    const defaultLinks = [
      { id: 1, name: 'LeetCode Patterns', url: 'https://blog.algomaster.io/p/15-leetcode-patterns' },
      { id: 2, name: 'AlgoMaster Archive', url: 'https://blog.algomaster.io/archive?sort=top' },
      { id: 3, name: 'DSA Patterns Roadmap', url: 'https://github.com/KushalVijay/DSA-Patterns-Roadmap' }
    ];
    setLinks(defaultLinks);
    localStorage.setItem('dsa', JSON.stringify(defaultLinks));
  };

  const handleOpenLink = (link) => {
    trackLinkClick(link.id, 'dsa');
    const sorted = sortLinksByClicks(links, 'dsa');
    setLinks(sorted);
    window.open(link.url, '_blank');
  };

  return (
    <div className="home-container">
      <header>
        <h1>DSA</h1>
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
      <div className="grid-container">
        {links.map(link => (
          <div key={link.id} className="grid-item">
            <h3>{link.name}</h3>
            <div className="sub-grid">
              <button className="btn sub-btn" onClick={() => handleOpenLink(link)}>Open Link</button>
              <button className="btn delete-btn" onClick={() => handleDelete(link.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DSA;
