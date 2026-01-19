import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';
import { trackLinkClick, sortLinksByClicks } from '../utils/linkTracker';

function OffCompaniesServiceBased() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [companyLink, setCompanyLink] = useState('');

  useEffect(() => {
    const savedCompanies = localStorage.getItem('offCompaniesServiceBased');
    if (savedCompanies) {
      setCompanies(sortLinksByClicks(JSON.parse(savedCompanies), 'offCompaniesServiceBased'));
    }
  }, []);

  const handleAddCompany = () => {
    if (companyName && companyLink) {
      const newCompany = {
        id: Date.now(),
        name: companyName,
        link: companyLink
      };
      const updatedCompanies = [...companies, newCompany];
      setCompanies(updatedCompanies);
      localStorage.setItem('offCompaniesServiceBased', JSON.stringify(updatedCompanies));
      setCompanyName('');
      setCompanyLink('');
      setShowForm(false);
    }
  };

  const handleDeleteCompany = (id) => {
    const updatedCompanies = companies.filter(company => company.id !== id);
    setCompanies(updatedCompanies);
    localStorage.setItem('offCompaniesServiceBased', JSON.stringify(updatedCompanies));
  };

  const handleOpenLink = (company) => {
    trackLinkClick(company.id, 'offCompaniesServiceBased');
    const sorted = sortLinksByClicks(companies, 'offCompaniesServiceBased');
    setCompanies(sorted);
    window.open(company.link, '_blank');
  };

  const handleSeeDetails = (company) => {
    navigate('/company-details', { state: { company } });
  };

  return (
    <div className="home-container">
      <header>
        <h1>Off Companies - Service Based</h1>
        <p>Inactive Service Based Companies</p>
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Company'}
        </button>
      </header>
      
      {showForm && (
        <div className="form-container">
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <input
            type="url"
            placeholder="Company Link"
            value={companyLink}
            onChange={(e) => setCompanyLink(e.target.value)}
          />
          <button className="btn" onClick={handleAddCompany}>
            Save Company
          </button>
        </div>
      )}
      
      <div className="grid-container">
        {companies.map((company) => (
          <div key={company.id} className="grid-item">
            <h3>{company.name}</h3>
            <div className="sub-grid">
              <button className="btn sub-btn" onClick={() => handleOpenLink(company)}>
                Open Link
              </button>
              <button className="btn sub-btn" onClick={() => handleSeeDetails(company)}>
                See Details
              </button>
            </div>
            <button className="btn delete-btn" onClick={() => handleDeleteCompany(company.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OffCompaniesServiceBased;
