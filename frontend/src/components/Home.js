import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header>
        <h1>Company MERN App</h1>
        <p>Welcome to your business management platform</p>
      </header>
      
      <div className="grid-container">
        <div className="grid-item">
          <h3>Companies</h3>
          <p>Manage and view all registered companies</p>
          <button className="btn" onClick={() => navigate('/companies')}>
            View Companies
          </button>
        </div>
        
        <div className="grid-item">
          <h3>Off Companies</h3>
          <p>Handle inactive or suspended companies</p>
          <button className="btn" onClick={() => navigate('/off-companies')}>
            View Off Companies
          </button>
        </div>
        
        <div className="grid-item">
          <h3>YouTube Channels</h3>
          <p>Monitor and manage YouTube channels</p>
          <button className="btn" onClick={() => navigate('/youtube-channels')}>
            View Channels
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;