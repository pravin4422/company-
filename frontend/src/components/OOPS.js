import React, { useState, useEffect } from 'react';
import '../css/home.css';

function OOPS() {
  const [links, setLinks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [linkName, setLinkName] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('oops');
    if (saved) {
      setLinks(JSON.parse(saved));
    } else {
      const defaultLinks = [
        { id: 1, name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/java/java-oop-exercises/' },
        { id: 2, name: 'W3Resource', url: 'https://www.w3resource.com/java-exercises/oop/index.php' }
      ];
      setLinks(defaultLinks);
      localStorage.setItem('oops', JSON.stringify(defaultLinks));
    }
  }, []);

  const handleAdd = () => {
    if (linkName && linkUrl) {
      const newLink = { id: Date.now(), name: linkName, url: linkUrl };
      const updated = [...links, newLink];
      setLinks(updated);
      localStorage.setItem('oops', JSON.stringify(updated));
      setLinkName('');
      setLinkUrl('');
      setShowForm(false);
    }
  };

  const handleDelete = (id) => {
    const updated = links.filter(link => link.id !== id);
    setLinks(updated);
    localStorage.setItem('oops', JSON.stringify(updated));
  };

  const handleReset = () => {
    const defaultLinks = [
      { id: 1, name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/java/java-oop-exercises/' },
      { id: 2, name: 'W3Resource', url: 'https://www.w3resource.com/java-exercises/oop/index.php' }
    ];
    setLinks(defaultLinks);
    localStorage.setItem('oops', JSON.stringify(defaultLinks));
  };

  return (
    <div className="home-container">
      <header>
        <h1>OOPS</h1>
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
              <button className="btn sub-btn" onClick={() => window.open(link.url, '_blank')}>Open Link</button>
              <button className="btn delete-btn" onClick={() => handleDelete(link.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OOPS;
