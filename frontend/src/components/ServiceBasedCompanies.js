import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';
import { trackLinkClick, sortLinksByClicks } from '../utils/linkTracker';

function ServiceBasedCompanies() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [companyLink, setCompanyLink] = useState('');

  useEffect(() => {
    const savedCompanies = localStorage.getItem('serviceBasedCompanies');
    if (savedCompanies) {
      setCompanies(sortLinksByClicks(JSON.parse(savedCompanies), 'serviceBasedCompanies'));
    } else {
      const defaultCompanies = [
        { id: 1, name: 'Infosys', link: 'https://www.infosys.com/careers.html', linkedin: 'https://www.linkedin.com/company/infosys/' },
        { id: 2, name: 'BNP Paribas', link: 'https://group.bnpparibas/en/careers', linkedin: 'https://www.linkedin.com/company/bnp-paribas/' },
        { id: 3, name: 'Deloitte', link: 'https://southasiacareers.deloitte.com/', linkedin: 'https://www.linkedin.com/company/deloitte/' },
        { id: 4, name: 'Softeon', link: 'https://www.softeon.com/company/careers/', linkedin: 'https://www.linkedin.com/company/softeon/' },
        { id: 5, name: 'Ramco', link: 'https://www.ramco.com/careers', linkedin: 'https://www.linkedin.com/company/ramco-systems/' },
        { id: 6, name: 'Mphasis', link: 'https://careers.mphasis.com/', linkedin: 'https://www.linkedin.com/company/mphasis/' },
        { id: 7, name: 'Cognizant', link: 'https://careers.cognizant.com/', linkedin: 'https://www.linkedin.com/company/cognizant/' },
        { id: 8, name: 'Ford Business Solutions', link: 'https://corporate.ford.com/careers.html', linkedin: 'https://www.linkedin.com/company/ford-motor-company/' },
        { id: 9, name: 'Crayon Data', link: 'https://www.crayondata.com/careers', linkedin: 'https://www.linkedin.com/company/crayon-data/' },
        { id: 10, name: 'Bahwan CyberTek', link: 'https://www.bctglobal.com/careers', linkedin: 'https://www.linkedin.com/company/bahwan-cybertek/' },
        { id: 11, name: 'Media.Net', link: 'https://careers.media.net/', linkedin: 'https://www.linkedin.com/company/media.net/' },
        { id: 12, name: 'Bank of America', link: 'https://careers.bankofamerica.com/', linkedin: 'https://www.linkedin.com/company/bank-of-america/' },
        { id: 13, name: 'Zuci Systems', link: 'https://zucisystems.com/careers/', linkedin: 'https://www.linkedin.com/company/zuci-systems/' },
        { id: 14, name: 'Presidio Solutions', link: 'https://www.presidio.com/careers', linkedin: 'https://www.linkedin.com/company/presidio/' },
        { id: 15, name: 'Inflexion Tech', link: 'https://inflexiontech.com/careers/', linkedin: 'https://www.linkedin.com/company/inflexion-tech/' },
        { id: 16, name: 'BNY Mellon', link: 'https://jobs.bnymellon.com/', linkedin: 'https://www.linkedin.com/company/bnyglobal/' },
        { id: 17, name: 'LTIMindtree', link: 'https://www.ltimindtree.com/careers/', linkedin: 'https://www.linkedin.com/company/ltimindtree/' },
        { id: 18, name: 'Quantiphi Analytics', link: 'https://quantiphi.com/careers/', linkedin: 'https://www.linkedin.com/company/quantiphi/' },
        { id: 19, name: 'Bounteous x Accolite', link: 'https://www.bounteous.com/careers', linkedin: 'https://www.linkedin.com/company/bounteous/' },
        { id: 20, name: 'Royal Cyber', link: 'https://www.linkedin.com/company/royal-cyber-inc-/', linkedin: 'https://www.linkedin.com/company/royal-cyber-inc-/' },
        { id: 21, name: 'Federal Bank', link: 'https://www.federalbank.co.in/careers', linkedin: 'https://www.linkedin.com/company/federal-bank-ltd/' },
        { id: 22, name: 'TCS', link: 'https://www.tcs.com/careers', linkedin: 'https://www.linkedin.com/company/tata-consultancy-services/' },
        { id: 23, name: 'Turing', link: 'https://www.turing.com/careers', linkedin: 'https://www.linkedin.com/company/turingcom/' },
        { id: 24, name: 'Reverence Data Solutions', link: 'https://www.linkedin.com/company/reverence-data-company/', linkedin: 'https://www.linkedin.com/company/reverence-data-company/' },
        { id: 25, name: 'Zeetaminds Technologies', link: 'https://www.linkedin.com/company/zeetaminds/', linkedin: 'https://www.linkedin.com/company/zeetaminds/' },
        { id: 26, name: 'Sandhata Technologies', link: 'https://www.linkedin.com/company/sandhata-technologies-limited/', linkedin: 'https://www.linkedin.com/company/sandhata-technologies-limited/' },
        { id: 27, name: 'Mindgate Solutions', link: 'https://www.linkedin.com/company/mindgate-solutions/', linkedin: 'https://www.linkedin.com/company/mindgate-solutions/' },
        { id: 28, name: 'Systhink Technologies', link: 'https://www.linkedin.com/company/systhinktech/', linkedin: 'https://www.linkedin.com/company/systhinktech/' },
        { id: 29, name: 'Akira Consultancy', link: 'https://www.linkedin.com/company/akira-consultancy/', linkedin: 'https://www.linkedin.com/company/akira-consultancy/' },
        { id: 30, name: 'SecureW2', link: 'https://www.linkedin.com/company/securew2/', linkedin: 'https://www.linkedin.com/company/securew2/' },
        { id: 31, name: 'Roboteon India', link: 'https://www.linkedin.com/company/roboteon/', linkedin: 'https://www.linkedin.com/company/roboteon/' },
        { id: 32, name: 'Complyance (Antna)', link: 'https://www.linkedin.com/company/antna/', linkedin: 'https://www.linkedin.com/company/antna/' },
        { id: 33, name: 'Thirdwave Corporation', link: 'https://www.linkedin.com/company/thirdwave-corporation/', linkedin: 'https://www.linkedin.com/company/thirdwave-corporation/' },
        { id: 34, name: 'Aakash Educational Services', link: 'https://www.linkedin.com/company/aakash-educational-services-limited/', linkedin: 'https://www.linkedin.com/company/aakash-educational-services-limited/' },
        { id: 35, name: 'HSBC Technology India', link: 'https://www.hsbc.com/careers/', linkedin: 'https://www.linkedin.com/company/hsbc/' },
        { id: 36, name: 'Athenahealth', link: 'https://www.athenahealth.com/careers/', linkedin: 'https://www.linkedin.com/company/athenahealth/' },
        { id: 37, name: 'Roche Services', link: 'https://careers.roche.com/', linkedin: 'https://www.linkedin.com/company/roche/' },
        { id: 38, name: 'Wipro', link: 'https://careers.wipro.com/', linkedin: 'https://www.linkedin.com/company/wipro/' }
      ];
      setCompanies(defaultCompanies);
      localStorage.setItem('serviceBasedCompanies', JSON.stringify(defaultCompanies));
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
      localStorage.setItem('serviceBasedCompanies', JSON.stringify(updatedCompanies));
      setCompanyName('');
      setCompanyLink('');
      setShowForm(false);
    }
  };

  const handleReset = () => {
    const defaultCompanies = [
      { id: 1, name: 'Infosys', link: 'https://www.infosys.com/careers.html', linkedin: 'https://www.linkedin.com/company/infosys/' },
      { id: 2, name: 'BNP Paribas', link: 'https://group.bnpparibas/en/careers', linkedin: 'https://www.linkedin.com/company/bnp-paribas/' },
      { id: 3, name: 'Deloitte', link: 'https://southasiacareers.deloitte.com/', linkedin: 'https://www.linkedin.com/company/deloitte/' },
      { id: 4, name: 'Softeon', link: 'https://www.softeon.com/company/careers/', linkedin: 'https://www.linkedin.com/company/softeon/' },
      { id: 5, name: 'Ramco', link: 'https://www.ramco.com/careers', linkedin: 'https://www.linkedin.com/company/ramco-systems/' },
      { id: 6, name: 'Mphasis', link: 'https://careers.mphasis.com/', linkedin: 'https://www.linkedin.com/company/mphasis/' },
      { id: 7, name: 'Cognizant', link: 'https://careers.cognizant.com/', linkedin: 'https://www.linkedin.com/company/cognizant/' },
      { id: 8, name: 'Ford Business Solutions', link: 'https://corporate.ford.com/careers.html', linkedin: 'https://www.linkedin.com/company/ford-motor-company/' },
      { id: 9, name: 'Crayon Data', link: 'https://www.crayondata.com/careers/', linkedin: 'https://www.linkedin.com/company/crayon-data/' },
      { id: 10, name: 'Bahwan CyberTek', link: 'https://www.bctglobal.com/careers', linkedin: 'https://www.linkedin.com/company/bahwan-cybertek/' },
      { id: 11, name: 'Media.Net', link: 'https://careers.media.net', linkedin: 'https://www.linkedin.com/company/media.net/' },
      { id: 12, name: 'Bank of America', link: 'https://careers.bankofamerica.com', linkedin: 'https://www.linkedin.com/company/bank-of-america/' },
      { id: 13, name: 'Zuci Systems', link: 'https://zucisystems.com/careers', linkedin: 'https://www.linkedin.com/company/zuci-systems/' },
      { id: 14, name: 'Presidio Solutions', link: 'https://www.presidio.com/careers', linkedin: 'https://www.linkedin.com/company/presidio/' },
      { id: 15, name: 'Inflexion Tech', link: 'https://inflexiontech.com/careers/', linkedin: 'https://www.linkedin.com/company/inflexion-tech/' },
      { id: 16, name: 'BNY Mellon', link: 'https://jobs.bnymellon.com', linkedin: 'https://www.linkedin.com/company/bnyglobal/' },
      { id: 17, name: 'LTIMindtree', link: 'https://www.ltimindtree.com/careers/', linkedin: 'https://www.linkedin.com/company/ltimindtree/' },
      { id: 18, name: 'Quantiphi Analytics', link: 'https://quantiphi.com/careers/', linkedin: 'https://www.linkedin.com/company/quantiphi/' },
      { id: 19, name: 'Bounteous x Accolite', link: 'https://www.bounteous.com/careers', linkedin: 'https://www.linkedin.com/company/bounteous/' },
      { id: 20, name: 'Royal Cyber', link: 'https://www.linkedin.com/company/royal-cyber-inc-/', linkedin: 'https://www.linkedin.com/company/royal-cyber-inc-/' },
      { id: 21, name: 'Federal Bank', link: 'https://www.federalbank.co.in/careers', linkedin: 'https://www.linkedin.com/company/federal-bank-ltd/' },
      { id: 22, name: 'TCS', link: 'https://www.tcs.com/careers', linkedin: 'https://www.linkedin.com/company/tata-consultancy-services/' },
      { id: 23, name: 'Turing', link: 'https://www.turing.com/careers', linkedin: 'https://www.linkedin.com/company/turingcom/' },
      { id: 24, name: 'Reverence Data Solutions', link: 'https://www.linkedin.com/company/reverence-data-company/', linkedin: 'https://www.linkedin.com/company/reverence-data-company/' },
      { id: 25, name: 'Zeetaminds Technologies', link: 'https://www.linkedin.com/company/zeetaminds/', linkedin: 'https://www.linkedin.com/company/zeetaminds/' },
      { id: 26, name: 'Sandhata Technologies', link: 'https://www.linkedin.com/company/sandhata-technologies-limited/', linkedin: 'https://www.linkedin.com/company/sandhata-technologies-limited/' },
      { id: 27, name: 'Mindgate Solutions', link: 'https://www.linkedin.com/company/mindgate-solutions/', linkedin: 'https://www.linkedin.com/company/mindgate-solutions/' },
      { id: 28, name: 'Systhink Technologies', link: 'https://www.linkedin.com/company/systhinktech/', linkedin: 'https://www.linkedin.com/company/systhinktech/' },
      { id: 29, name: 'Akira Consultancy', link: 'https://www.linkedin.com/company/akira-consultancy/', linkedin: 'https://www.linkedin.com/company/akira-consultancy/' },
      { id: 30, name: 'SecureW2', link: 'https://www.linkedin.com/company/securew2/', linkedin: 'https://www.linkedin.com/company/securew2/' },
      { id: 31, name: 'Roboteon India', link: 'https://www.linkedin.com/company/roboteon/', linkedin: 'https://www.linkedin.com/company/roboteon/' },
      { id: 32, name: 'Complyance (Antna)', link: 'https://www.linkedin.com/company/antna/', linkedin: 'https://www.linkedin.com/company/antna/' },
      { id: 33, name: 'Thirdwave Corporation', link: 'https://www.linkedin.com/company/thirdwave-corporation/', linkedin: 'https://www.linkedin.com/company/thirdwave-corporation/' },
      { id: 34, name: 'Aakash Educational Services', link: 'https://www.linkedin.com/company/aakash-educational-services-limited/', linkedin: 'https://www.linkedin.com/company/aakash-educational-services-limited/' },
      { id: 35, name: 'HSBC Technology India', link: 'https://www.hsbc.com/careers', linkedin: 'https://www.linkedin.com/company/hsbc/' },
      { id: 36, name: 'Athenahealth', link: 'https://www.athenahealth.com/careers', linkedin: 'https://www.linkedin.com/company/athenahealth/' },
      { id: 37, name: 'Roche Services', link: 'https://careers.roche.com', linkedin: 'https://www.linkedin.com/company/roche/' },
      { id: 38, name: 'Wipro', link: 'https://careers.wipro.com', linkedin: 'https://www.linkedin.com/company/wipro/' }
    ];
    setCompanies(defaultCompanies);
    localStorage.setItem('serviceBasedCompanies', JSON.stringify(defaultCompanies));
  };

  const handleDeleteCompany = (id) => {
    const updatedCompanies = companies.filter(company => company.id !== id);
    setCompanies(updatedCompanies);
    localStorage.setItem('serviceBasedCompanies', JSON.stringify(updatedCompanies));
  };

  const handleOpenLink = (company) => {
    trackLinkClick(company.id, 'serviceBasedCompanies');
    const sorted = sortLinksByClicks(companies, 'serviceBasedCompanies');
    setCompanies(sorted);
    window.open(company.link, '_blank');
  };

  const handleSeeDetails = (company) => {
    navigate('/company-details', { state: { company, storageKey: 'serviceBasedCompanies' } });
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
        <h1>Service Based Companies</h1>
        <p>On Campus - IT Services & Consulting</p>
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Company'}
        </button>
        <button className="btn" onClick={handleReset} style={{marginLeft: '10px'}}>
          Reset to Default
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
            <h3>
              {company.link && <img src={getFavicon(company.link)} alt="" />}
              {company.name}
            </h3>
            <div className="sub-grid">
              <button className="btn sub-btn" onClick={() => handleOpenLink(company)}>
                Open Link
              </button>
              <button className="btn sub-btn" onClick={() => window.open(company.linkedin || `https://www.linkedin.com/company/${company.name.toLowerCase().replace(/\s+/g, '-')}/jobs`, '_blank')}>
                LinkedIn
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

export default ServiceBasedCompanies;