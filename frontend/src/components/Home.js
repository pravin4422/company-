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
          <div className="sub-grid">
            <button className="btn sub-btn" onClick={() => navigate('/companies/on-campus')}>
              On Campus
            </button>
            <button className="btn sub-btn" onClick={() => navigate('/companies/off-campus')}>
              Off Campus
            </button>
          </div>
        </div>
        
        <div className="grid-item">
          <h3>Interview Preparation</h3>
          <p>Prepare for technical and HR interviews</p>
          <div className="sub-grid">
            <button className="btn sub-btn" onClick={() => navigate('/interview-preparation')}>
              Start Preparation
            </button>
          </div>
        </div>
        
        <div className="grid-item">
          <h3>YouTube Channels</h3>
          <p>Monitor and manage YouTube channels</p>
          <div className="sub-grid">
            <button className="btn sub-btn" onClick={() => navigate('/youtube-channels/tech')}>
              Tech Channels
            </button>
            <button className="btn sub-btn" onClick={() => navigate('/youtube-channels/educational')}>
              Educational
            </button>
          </div>
        </div>
        
        <div className="grid-item">
          <h3>Government Exam</h3>
          <p>Access government exam information and resources</p>
          <div className="sub-grid">
            <button className="btn sub-btn" onClick={() => navigate('/government-exam/central')}>
              Central Govt
            </button>
            <button className="btn sub-btn" onClick={() => navigate('/government-exam/state')}>
              State Govt
            </button>
          </div>
        </div>
        
        <div className="grid-item">
          <h3>Job Portal</h3>
          <p>Browse and manage job opportunities</p>
          <div className="sub-grid">
            <button className="btn sub-btn" onClick={() => navigate('/job-portal/fresher')}>
              Fresher Jobs
            </button>
            <button className="btn sub-btn" onClick={() => navigate('/job-portal/experienced')}>
              Experienced
            </button>
          </div>
        </div>
        
        <div className="grid-item">
          <h3>Important Links</h3>
          <p>Quick access to essential resources and links</p>
          <div className="sub-grid">
            <button className="btn sub-btn" onClick={() => navigate('/important-links/career')}>
              Career Links
            </button>
            <button className="btn sub-btn" onClick={() => navigate('/important-links/resources')}>
              Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;