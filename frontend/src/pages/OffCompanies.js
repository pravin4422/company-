import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';
import '../css/form.css';

function OffCompanies() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [companies, setCompanies] = useState([
    { id: 1, name: 'Microsoft', description: 'Cloud & Software Solutions', link: 'https://careers.microsoft.com' },
    { id: 2, name: 'Off Company B', description: 'Suspended Marketing Agency', link: '' },
    { id: 3, name: 'Off Company C', description: 'Inactive Financial Services', link: '' }
  ]);
  const [formData, setFormData] = useState({ name: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.description) {
      const newCompany = {
        id: companies.length + 1,
        name: formData.name,
        description: formData.description,
        link: ''
      };
      setCompanies([...companies, newCompany]);
      setFormData({ name: '', description: '' });
      setShowForm(false);
    }
  };

  return (
    <div className="home-container">
      <h1>Off Companies</h1>
      <p>Handle inactive or suspended companies here</p>
      
      <button className="btn btn-success" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add New Off Company'}
      </button>
      
      {showForm && (
        <div className="add-company-form">
          <h3>Add New Off Company</h3>
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

export default OffCompanies;