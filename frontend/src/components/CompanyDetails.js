import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/home.css';

function CompanyDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const company = location.state?.company;
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(company?.name || '');
  const [editedLink, setEditedLink] = useState(company?.link || '');
  const [editedLinkedIn, setEditedLinkedIn] = useState(company?.linkedin || '');

  if (!company) {
    return (
      <div className="home-container">
        <header>
          <h1>Company Details</h1>
          <p>No company data found</p>
          <button className="btn" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </header>
      </div>
    );
  }

  const handleSave = () => {
    const updatedCompany = {
      ...company,
      name: editedName,
      link: editedLink,
      linkedin: editedLinkedIn
    };
    // Update localStorage based on the source
    const storageKey = location.state?.storageKey || 'productBasedCompanies';
    const savedData = localStorage.getItem(storageKey);
    if (savedData) {
      const companies = JSON.parse(savedData);
      const updatedCompanies = companies.map(c => c.id === company.id ? updatedCompany : c);
      localStorage.setItem(storageKey, JSON.stringify(updatedCompanies));
    }
    setIsEditing(false);
    navigate(-1);
  };

  return (
    <div className="home-container">
      <header>
        <h1>{isEditing ? 'Edit Company' : company.name}</h1>
        <p>Company Details</p>
        <button className="btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <button className="btn" onClick={() => setIsEditing(!isEditing)} style={{marginLeft: '10px'}}>
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </header>
      
      {isEditing ? (
        <div className="form-container">
          <input
            type="text"
            placeholder="Company Name"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="url"
            placeholder="Company Website"
            value={editedLink}
            onChange={(e) => setEditedLink(e.target.value)}
          />
          <input
            type="url"
            placeholder="LinkedIn URL"
            value={editedLinkedIn}
            onChange={(e) => setEditedLinkedIn(e.target.value)}
          />
          <button className="btn" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      ) : (
        <div className="details-container">
          <div className="detail-item">
            <h3>Company Name</h3>
            <p>{company.name}</p>
          </div>
          
          <div className="detail-item">
            <h3>Website</h3>
            <p>
              <a href={company.link} target="_blank" rel="noopener noreferrer">
                {company.link}
              </a>
            </p>
          </div>
          
          {company.linkedin && (
            <div className="detail-item">
              <h3>LinkedIn</h3>
              <p>
                <a href={company.linkedin} target="_blank" rel="noopener noreferrer">
                  {company.linkedin}
                </a>
              </p>
            </div>
          )}
          
          <div className="detail-item">
            <h3>Company ID</h3>
            <p>{company.id}</p>
          </div>
          
          <div className="detail-item">
            <h3>Actions</h3>
            <div className="sub-grid">
              <button className="btn sub-btn" onClick={() => window.open(company.link, '_blank')}>
                Visit Website
              </button>
              {company.linkedin && (
                <button className="btn sub-btn" onClick={() => window.open(company.linkedin, '_blank')}>
                  LinkedIn
                </button>
              )}
              <button className="btn sub-btn" onClick={() => navigate(-1)}>
                Back to List
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompanyDetails;