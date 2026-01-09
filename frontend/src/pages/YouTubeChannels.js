import React from 'react';
import { useNavigate } from 'react-router-dom';

function YouTubeChannels() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>YouTube Channels</h1>
      <p>Monitor and manage YouTube channels here</p>
      <button className="btn btn-secondary" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}

export default YouTubeChannels;