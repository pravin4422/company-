import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';
import { trackLinkClick, sortLinksByClicks } from '../utils/linkTracker';

function JobPortalExperienced() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [jobName, setJobName] = useState('');
  const [jobLink, setJobLink] = useState('');

  useEffect(() => {
    const savedJobs = localStorage.getItem('jobPortalExperienced');
    if (savedJobs) {
      setJobs(sortLinksByClicks(JSON.parse(savedJobs), 'jobPortalExperienced'));
    }
  }, []);

  const handleAddJob = () => {
    if (jobName && jobLink) {
      const newJob = {
        id: Date.now(),
        name: jobName,
        link: jobLink
      };
      const updatedJobs = [...jobs, newJob];
      setJobs(updatedJobs);
      localStorage.setItem('jobPortalExperienced', JSON.stringify(updatedJobs));
      setJobName('');
      setJobLink('');
      setShowForm(false);
    }
  };

  const handleDeleteJob = (id) => {
    const updatedJobs = jobs.filter(job => job.id !== id);
    setJobs(updatedJobs);
    localStorage.setItem('jobPortalExperienced', JSON.stringify(updatedJobs));
  };

  const handleOpenLink = (job) => {
    trackLinkClick(job.id, 'jobPortalExperienced');
    const sorted = sortLinksByClicks(jobs, 'jobPortalExperienced');
    setJobs(sorted);
    window.open(job.link, '_blank');
  };

  const handleSeeDetails = (job) => {
    navigate('/company-details', { state: { company: job } });
  };

  return (
    <div className="home-container">
      <header>
        <h1>Experienced Jobs</h1>
        <p>Job Opportunities for Experienced Professionals</p>
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Job'}
        </button>
      </header>
      
      {showForm && (
        <div className="form-container">
          <input
            type="text"
            placeholder="Job Title"
            value={jobName}
            onChange={(e) => setJobName(e.target.value)}
          />
          <input
            type="url"
            placeholder="Job Link"
            value={jobLink}
            onChange={(e) => setJobLink(e.target.value)}
          />
          <button className="btn" onClick={handleAddJob}>
            Save Job
          </button>
        </div>
      )}
      
      <div className="grid-container">
        {jobs.map((job) => (
          <div key={job.id} className="grid-item">
            <h3>{job.name}</h3>
            <div className="sub-grid">
              <button className="btn sub-btn" onClick={() => handleOpenLink(job)}>
                Open Link
              </button>
              <button className="btn sub-btn" onClick={() => handleSeeDetails(job)}>
                See Details
              </button>
            </div>
            <button className="btn delete-btn" onClick={() => handleDeleteJob(job.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobPortalExperienced;
