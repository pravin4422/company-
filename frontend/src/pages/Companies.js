import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';
import '../css/form.css';

function Companies() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [companies, setCompanies] = useState([
    { id: 1, name: 'IBM', description: 'Technology Solutions Provider', link: 'https://www.ibm.com/careers' },
    { id: 2, name: 'Microsoft', description: 'Cloud & Software Solutions', link: 'https://careers.microsoft.com/' },
    { id: 3, name: 'Amazon', description: 'E-commerce & Cloud Services', link: 'https://www.amazon.jobs/en/search' },
    { id: 4, name: 'Google', description: 'Search & Technology', link: 'https://www.google.com/about/careers/applications/jobs/results' },
    { id: 5, name: 'Meta', description: 'Social Media & VR', link: 'https://www.metacareers.com/' },
    { id: 6, name: 'BNP Paribas', description: 'Banking & Financial Services', link: 'https://group.bnpparibas/en/careers' },
    { id: 7, name: 'Bank of America', description: 'Banking & Investment', link: 'https://careers.bankofamerica.com' },
    { id: 8, name: 'MKS Vision', description: 'Vision Technology', link: 'https://www.mksvision.com/careers' },
    { id: 9, name: 'Softeon', description: 'Supply Chain Solutions', link: 'https://www.softeon.com/company/careers/' },
    { id: 10, name: 'Mindsprint', description: 'Technology Consulting', link: 'https://www.mindsprint.org/careers' },
    { id: 11, name: 'Money Forward', description: 'Financial Technology', link: 'https://recruit.moneyforward.com/en' },
    { id: 12, name: 'Deloitte', description: 'Consulting & Advisory', link: 'https://southasiacareers.deloitte.com/' },
    { id: 13, name: 'Ramco Systems', description: 'Enterprise Software', link: 'https://www.ramco.com/careers' },
    { id: 14, name: 'Baton Systems', description: 'Fintech Solutions', link: 'https://www.batonsystems.com/careers' },
    { id: 15, name: 'Infosys', description: 'IT Services & Consulting', link: 'https://www.infosys.com/careers.html' },
    { id: 16, name: 'Indeed', description: 'Job Search Platform', link: 'https://www.indeed.jobs' },
    { id: 17, name: 'Glassdoor', description: 'Career Community', link: 'https://www.glassdoor.com/Jobs' }
  ]);
  const [formData, setFormData] = useState({ name: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.description) {
      const newCompany = {
        id: companies.length + 1,
        name: formData.name,
        description: formData.description
      };
      setCompanies([...companies, newCompany]);
      setFormData({ name: '', description: '' });
      setShowForm(false);
    }
  };

  return (
    <div className="home-container">
      <h1>Companies</h1>
      <p>Manage all registered companies here</p>
      
      <button className="btn btn-success" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add New Company'}
      </button>
      
      {showForm && (
        <div className="add-company-form">
          <h3>Add New Company</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Company Name:</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
              />
            </div>
            <div className="form-buttons">
              <button type="submit" className="btn btn-success">Add Company</button>
              <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
      
      <div className="grid-container">
        {companies.map(company => (
          <div key={company.id} className="grid-item">
            <h3>{company.name}</h3>
            <p>{company.description}</p>
            {company.link ? (
              <a href={company.link} target="_blank" rel="noopener noreferrer" className="btn">Link</a>
            ) : (
              <button className="btn">Link</button>
            )}
            <button className="btn btn-secondary">Details</button>
          </div>
        ))}
      </div>
      
      <button className="btn btn-secondary" onClick={() => navigate('/')} style={{marginTop: '20px'}}>
        Back to Home
      </button>
    </div>
  );
}

export default Companies;