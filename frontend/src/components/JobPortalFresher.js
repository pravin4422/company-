import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';
import { trackLinkClick, sortLinksByClicks } from '../utils/linkTracker';

function JobPortalFresher() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [jobName, setJobName] = useState('');
  const [jobLink, setJobLink] = useState('');

  useEffect(() => {
    const savedJobs = localStorage.getItem('jobPortalFresher');
    if (savedJobs) {
      setJobs(sortLinksByClicks(JSON.parse(savedJobs), 'jobPortalFresher'));
    } else {
      const defaultJobs = [
        { id: 1, name: 'Naukri', link: 'https://www.naukri.com/mnjuser/homepage' },
        { id: 2, name: 'Indeed', link: 'https://in.indeed.com/?from=gnav-homepage' },
        { id: 3, name: 'QuickHyre', link: 'https://quickhyre.ai/jobs' },
        { id: 4, name: 'TechJapan', link: 'https://hub.techjapan.work/student' }
      ];
      setJobs(defaultJobs);
      localStorage.setItem('jobPortalFresher', JSON.stringify(defaultJobs));
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
      localStorage.setItem('jobPortalFresher', JSON.stringify(updatedJobs));
      setJobName('');
      setJobLink('');
      setShowForm(false);
    }
  };

  const handleDeleteJob = (id) => {
    const updatedJobs = jobs.filter(job => job.id !== id);
    setJobs(updatedJobs);
    localStorage.setItem('jobPortalFresher', JSON.stringify(updatedJobs));
  };

  const handleOpenLink = (job) => {
    trackLinkClick(job.id, 'jobPortalFresher');
    const sorted = sortLinksByClicks(jobs, 'jobPortalFresher');
    setJobs(sorted);
    window.open(job.link, '_blank');
  };

  const handleSeeDetails = (job) => {
    navigate('/company-details', { state: { company: job } });
  };

  const handleReset = () => {
    const defaultJobs = [
      { id: 1, name: 'Naukri', link: 'https://www.naukri.com/mnjuser/homepage' },
      { id: 2, name: 'Indeed', link: 'https://in.indeed.com/?from=gnav-homepage' },
      { id: 3, name: 'QuickHyre', link: 'https://quickhyre.ai/jobs' },
      { id: 4, name: 'TechJapan', link: 'https://hub.techjapan.work/student' }
    ];
    setJobs(defaultJobs);
    localStorage.setItem('jobPortalFresher', JSON.stringify(defaultJobs));
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
        <h1>Fresher Jobs</h1>
        <p>Job Opportunities for Freshers</p>
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Job'}
        </button>
        <button className="btn" onClick={handleReset} style={{marginLeft: '10px'}}>
          Reset to Default
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
            <h3>
              {job.link && <img src={getFavicon(job.link)} alt="" />}
              {job.name}
            </h3>
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

export default JobPortalFresher;
