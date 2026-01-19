import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';
import { trackLinkClick, sortLinksByClicks } from '../utils/linkTracker';

function ProductBasedCompanies() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [companyLink, setCompanyLink] = useState('');

  useEffect(() => {
    const savedCompanies = localStorage.getItem('productBasedCompanies');
    if (savedCompanies) {
      setCompanies(sortLinksByClicks(JSON.parse(savedCompanies), 'productBasedCompanies'));
    } else {
      const defaultCompanies = [
        { id: 1, name: 'Microsoft', link: 'https://careers.microsoft.com/', linkedin: 'https://www.linkedin.com/company/microsoft/' },
        { id: 2, name: 'Amazon', link: 'https://www.amazon.jobs/', linkedin: 'https://www.linkedin.com/company/amazon/' },
        { id: 3, name: 'Google', link: 'https://www.google.com/about/careers/applications/jobs/results', linkedin: 'https://www.linkedin.com/company/google/' },
        { id: 4, name: 'Meta', link: 'https://www.metacareers.com/', linkedin: 'https://www.linkedin.com/company/meta/' },
        { id: 5, name: 'Money Forward', link: 'https://recruit.moneyforward.com/en', linkedin: 'https://www.linkedin.com/company/money-forward/' },
        { id: 6, name: 'Hyundai Motor India', link: 'https://www.hyundai.com/in/en/careers', linkedin: 'https://www.linkedin.com/company/hyundai-motor-india-ltd/' },
        { id: 7, name: 'Bosch Group', link: 'https://www.bosch.in/careers/', linkedin: 'https://www.linkedin.com/company/bosch/' },
        { id: 8, name: 'Motherson Group', link: 'https://careers.motherson.com/en/country/india', linkedin: 'https://www.linkedin.com/company/motherson-electronic-components-pvt-ltd/' },
        { id: 9, name: 'Caterpillar', link: 'https://www.caterpillar.com/en/careers.html', linkedin: 'https://www.linkedin.com/company/caterpillar-inc/' },
        { id: 10, name: 'Digit Insurance', link: 'https://www.godigit.com/careers', linkedin: 'https://www.linkedin.com/company/go-digit-insurance/' },
        { id: 11, name: 'C-DOT', link: 'https://cdot.in/careers.php', linkedin: 'https://www.linkedin.com/company/cdot-india/' },
        { id: 12, name: 'Bimbo Bakeries India', link: 'https://careers.grupobimbo.com/', linkedin: 'https://www.linkedin.com/company/grupo-bimbo/' },
        { id: 13, name: 'Havells India', link: 'https://www.havells.com/en/corporate/careers.html', linkedin: 'https://www.linkedin.com/company/havells-india-ltd/' },
        { id: 14, name: 'Visa', link: 'https://usa.visa.com/careers.html', linkedin: 'https://www.linkedin.com/company/visa/' },
        { id: 15, name: 'Apple', link: 'https://jobs.apple.com/', linkedin: 'https://www.linkedin.com/company/apple/' },
        { id: 16, name: 'IBM', link: 'https://www.ibm.com/careers/', linkedin: 'https://www.linkedin.com/company/ibm/' },
        { id: 17, name: 'NetApp', link: 'https://www.netapp.com/company/careers/', linkedin: 'https://www.linkedin.com/company/netapp/' },
        { id: 18, name: 'Siemens Energy', link: 'https://jobs.siemens-energy.com/', linkedin: 'https://www.linkedin.com/company/siemens-energy/' },
        { id: 19, name: 'KLA', link: 'https://www.kla.com/careers', linkedin: 'https://www.linkedin.com/company/kla/' },
        { id: 20, name: 'Athenahealth', link: 'https://www.athenahealth.com/careers', linkedin: 'https://www.linkedin.com/company/athenahealth/' },
        { id: 21, name: 'Trimble', link: 'https://careers.trimble.com/', linkedin: 'https://www.linkedin.com/company/trimble/' },
        { id: 22, name: 'Roche Services', link: 'https://careers.roche.com', linkedin: 'https://www.linkedin.com/company/roche/' },
        { id: 23, name: 'Foxconn', link: 'https://www.foxconn.com/en-us/careers', linkedin: 'https://www.linkedin.com/company/foxconn/' },
        { id: 24, name: 'Wipro', link: 'https://careers.wipro.com', linkedin: 'https://www.linkedin.com/company/wipro/' },
        { id: 25, name: 'Wex Fintech', link: 'https://www.wexinc.com/careers/', linkedin: 'https://www.linkedin.com/company/wexinc/' },
        { id: 26, name: 'Decathlon', link: 'https://jobs.decathlon.in', linkedin: 'https://www.linkedin.com/company/decathlon/' },
        { id: 27, name: 'MKS Vision', link: 'https://www.mksvision.com/careers', linkedin: 'https://www.linkedin.com/company/mks-vision/' },
        { id: 28, name: 'Aptiv', link: 'https://careers.aptiv.com', linkedin: 'https://www.linkedin.com/company/aptiv/' },
        { id: 29, name: 'Versa Networks', link: 'https://www.versa-networks.com/careers/', linkedin: 'https://www.linkedin.com/company/versa-networks/' }
      ];
      setCompanies(defaultCompanies);
      localStorage.setItem('productBasedCompanies', JSON.stringify(defaultCompanies));
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
      localStorage.setItem('productBasedCompanies', JSON.stringify(updatedCompanies));
      setCompanyName('');
      setCompanyLink('');
      setShowForm(false);
    }
  };

  const handleReset = () => {
    const defaultCompanies = [
      { id: 1, name: 'Microsoft', link: 'https://careers.microsoft.com/', linkedin: 'https://www.linkedin.com/company/microsoft/' },
      { id: 2, name: 'Amazon', link: 'https://www.amazon.jobs', linkedin: 'https://www.linkedin.com/company/amazon/' },
      { id: 3, name: 'Google', link: 'https://www.google.com/about/careers/applications/jobs/results', linkedin: 'https://www.linkedin.com/company/google/' },
      { id: 4, name: 'Meta', link: 'https://www.metacareers.com/', linkedin: 'https://www.linkedin.com/company/meta/' },
      { id: 5, name: 'Money Forward', link: 'https://recruit.moneyforward.com/en', linkedin: 'https://www.linkedin.com/company/money-forward/' },
      { id: 6, name: 'Hyundai Motor India', link: 'https://www.hyundai.com/in/en/careers', linkedin: 'https://www.linkedin.com/company/hyundai-motor-india-ltd/' },
      { id: 7, name: 'Bosch Group', link: 'https://www.bosch.in/careers/', linkedin: 'https://www.linkedin.com/company/bosch/' },
      { id: 8, name: 'Motherson Group', link: 'https://careers.motherson.com/en/country/india', linkedin: 'https://www.linkedin.com/company/motherson-electronic-components-pvt-ltd/' },
      { id: 9, name: 'Caterpillar', link: 'https://www.caterpillar.com/en/careers.html', linkedin: 'https://www.linkedin.com/company/caterpillar-inc/' },
      { id: 10, name: 'Digit Insurance', link: 'https://www.godigit.com/careers', linkedin: 'https://www.linkedin.com/company/go-digit-insurance/' },
      { id: 11, name: 'C-DOT', link: 'https://cdot.in/careers.php', linkedin: 'https://www.linkedin.com/company/cdot-india/' },
      { id: 12, name: 'Bimbo Bakeries India', link: 'https://careers.grupobimbo.com/', linkedin: 'https://www.linkedin.com/company/grupo-bimbo/' },
      { id: 13, name: 'Havells India', link: 'https://www.havells.com/en/corporate/careers.html', linkedin: 'https://www.linkedin.com/company/havells-india-ltd/' },
      { id: 14, name: 'Visa', link: 'https://www.visa.co.in/careers', linkedin: 'https://www.linkedin.com/company/visa/' },
      { id: 15, name: 'Apple', link: 'https://jobs.apple.com', linkedin: 'https://www.linkedin.com/company/apple/' },
      { id: 16, name: 'IBM', link: 'https://www.ibm.com/careers', linkedin: 'https://www.linkedin.com/company/ibm/' },
      { id: 17, name: 'NetApp', link: 'https://jobs.netapp.com', linkedin: 'https://www.linkedin.com/company/netapp/' },
      { id: 18, name: 'Siemens Energy', link: 'https://jobs.siemens-energy.com/', linkedin: 'https://www.linkedin.com/company/siemens-energy/' },
      { id: 19, name: 'KLA', link: 'https://www.kla.com/careers', linkedin: 'https://www.linkedin.com/company/kla/' },
      { id: 20, name: 'Athenahealth', link: 'https://www.athenahealth.com/careers', linkedin: 'https://www.linkedin.com/company/athenahealth/' },
      { id: 21, name: 'Trimble', link: 'https://careers.trimble.com', linkedin: 'https://www.linkedin.com/company/trimble/' },
      { id: 22, name: 'Roche Services', link: 'https://careers.roche.com', linkedin: 'https://www.linkedin.com/company/roche/' },
      { id: 23, name: 'Foxconn', link: 'https://www.foxconn.com/en-us/careers', linkedin: 'https://www.linkedin.com/company/foxconn/' },
      { id: 24, name: 'Wipro', link: 'https://careers.wipro.com', linkedin: 'https://www.linkedin.com/company/wipro/' },
      { id: 25, name: 'Wex Fintech', link: 'https://www.wexinc.com/careers/', linkedin: 'https://www.linkedin.com/company/wexinc/' },
      { id: 26, name: 'Decathlon', link: 'https://jobs.decathlon.in', linkedin: 'https://www.linkedin.com/company/decathlon/' },
      { id: 27, name: 'MKS Vision', link: 'https://www.mksvision.com/careers', linkedin: 'https://www.linkedin.com/company/mks-vision/' },
      { id: 28, name: 'Aptiv', link: 'https://careers.aptiv.com', linkedin: 'https://www.linkedin.com/company/aptiv/' },
      { id: 29, name: 'Versa Networks', link: 'https://www.versa-networks.com/careers/', linkedin: 'https://www.linkedin.com/company/versa-networks/' }
    ];
    setCompanies(defaultCompanies);
    localStorage.setItem('productBasedCompanies', JSON.stringify(defaultCompanies));
  };

  const handleDeleteCompany = (id) => {
    const updatedCompanies = companies.filter(company => company.id !== id);
    setCompanies(updatedCompanies);
    localStorage.setItem('productBasedCompanies', JSON.stringify(updatedCompanies));
  };

  const handleOpenLink = (company) => {
    trackLinkClick(company.id, 'productBasedCompanies');
    const sorted = sortLinksByClicks(companies, 'productBasedCompanies');
    setCompanies(sorted);
    window.open(company.link, '_blank');
  };

  const handleSeeDetails = (company) => {
    navigate('/company-details', { state: { company, storageKey: 'productBasedCompanies' } });
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
        <h1>Product Based Companies</h1>
        <p>On Campus - Product Development Companies</p>
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

export default ProductBasedCompanies;