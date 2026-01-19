import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';
import { trackLinkClick, sortLinksByClicks } from '../utils/linkTracker';

function ImportantLinksResources() {
  const navigate = useNavigate();
  const [links, setLinks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [linkName, setLinkName] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

  useEffect(() => {
    const savedLinks = localStorage.getItem('importantLinksResources');
    if (savedLinks) {
      setLinks(sortLinksByClicks(JSON.parse(savedLinks), 'importantLinksResources'));
    } else {
      const defaultLinks = [
        { id: 1, name: 'Overleaf', link: 'https://www.overleaf.com/project' },
        { id: 2, name: 'Striver A2Z DSA Sheet', link: 'https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z' },
        { id: 3, name: 'Ashish Pratap Singh GitHub', link: 'https://github.com/ashishps1' },
        { id: 4, name: 'AlgoMaster', link: 'https://algomaster.io/' },
        { id: 5, name: 'Vercel Projects', link: 'https://vercel.com/pravin-s-projects-9942d8e3' },
        { id: 6, name: 'Canva Templates', link: 'https://www.canva.com/templates' },
        { id: 7, name: 'LeetCode Profile', link: 'https://leetcode.com/u/KE6dFDBYGt/' },
        { id: 8, name: 'InterviewBit Practice', link: 'https://www.interviewbit.com/practice/' },
        { id: 9, name: 'GitHub Dashboard', link: 'https://github.com/dashboard' },
        { id: 10, name: 'Company App', link: 'https://company-psi-seven.vercel.app/' },
        { id: 11, name: 'Farmers App', link: 'https://farmers-tu5m.vercel.app/' },
        { id: 12, name: 'NeetCode', link: 'https://neetcode.io/' },
        { id: 13, name: 'CodeCombat', link: 'https://codecombat.com/play' }
      ];
      setLinks(defaultLinks);
      localStorage.setItem('importantLinksResources', JSON.stringify(defaultLinks));
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
      localStorage.setItem('importantLinksResources', JSON.stringify(updatedLinks));
      setLinkName('');
      setLinkUrl('');
      setShowForm(false);
    }
  };

  const handleDeleteLink = (id) => {
    const updatedLinks = links.filter(link => link.id !== id);
    setLinks(updatedLinks);
    localStorage.setItem('importantLinksResources', JSON.stringify(updatedLinks));
  };

  const handleOpenLink = (link) => {
    trackLinkClick(link.id, 'importantLinksResources');
    const sorted = sortLinksByClicks(links, 'importantLinksResources');
    setLinks(sorted);
    window.open(link, '_blank');
  };

  const handleSeeDetails = (link) => {
    navigate('/company-details', { state: { company: link } });
  };

  const handleReset = () => {
    const defaultLinks = [
      { id: 1, name: 'Overleaf', link: 'https://www.overleaf.com/project' },
      { id: 2, name: 'Striver A2Z DSA Sheet', link: 'https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z' },
      { id: 3, name: 'Ashish Pratap Singh GitHub', link: 'https://github.com/ashishps1' },
      { id: 4, name: 'AlgoMaster', link: 'https://algomaster.io/' },
      { id: 5, name: 'Vercel Projects', link: 'https://vercel.com/pravin-s-projects-9942d8e3' },
      { id: 6, name: 'Canva Templates', link: 'https://www.canva.com/templates' },
      { id: 7, name: 'LeetCode Profile', link: 'https://leetcode.com/u/KE6dFDBYGt/' },
      { id: 8, name: 'InterviewBit Practice', link: 'https://www.interviewbit.com/practice/' },
      { id: 9, name: 'GitHub Dashboard', link: 'https://github.com/dashboard' },
      { id: 10, name: 'Company App', link: 'https://company-psi-seven.vercel.app/' },
      { id: 11, name: 'Farmers App', link: 'https://farmers-tu5m.vercel.app/' },
      { id: 12, name: 'NeetCode', link: 'https://neetcode.io/' },
      { id: 13, name: 'CodeCombat', link: 'https://codecombat.com/play' }
    ];
    setLinks(defaultLinks);
    localStorage.setItem('importantLinksResources', JSON.stringify(defaultLinks));
  };

  const getFavicon = (url) => {
    try {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } catch {
      return '';
    }
  };

  return (
    <div className="home-container">
      <header>
        <h1>Resource Links</h1>
        <p>Important Learning Resources and Tools</p>
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Link'}
        </button>
        <button className="btn" onClick={handleReset} style={{marginLeft: '10px'}}>
          Reset to Default
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
            <h3>
              {link.link && <img src={getFavicon(link.link)} alt="" />}
              {link.name}
            </h3>
            <div className="sub-grid">
              <button className="btn sub-btn" onClick={() => handleOpenLink(link.link)}>
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

export default ImportantLinksResources;
