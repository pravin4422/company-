import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';

function OffCampus() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header>
        <h1>Off Campus Companies</h1>
        <p>Off campus recruitment opportunities</p>
      </header>
      
      <div className="grid-container">
        <div className="grid-item">
          <h3>Product Based Companies</h3>
          <p>Companies focused on product development</p>
          <button className="btn" onClick={() => navigate('/companies/off-campus/product-based')}>
            View Product Companies
          </button>
        </div>
        
        <div className="grid-item">
          <h3>Service Based Companies</h3>
          <p>Companies providing IT services and consulting</p>
          <button className="btn" onClick={() => navigate('/companies/off-campus/service-based')}>
            View Service Companies
          </button>
        </div>
      </div>
    </div>
  );
}

export default OffCampus;