import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Companies from './pages/Companies';
import OffCompanies from './pages/OffCompanies';
import YouTubeChannels from './pages/YouTubeChannels';
import OnCampus from './components/OnCampus';
import OffCampus from './components/OffCampus';
import ProductBasedCompanies from './components/ProductBasedCompanies';
import ServiceBasedCompanies from './components/ServiceBasedCompanies';
import CompanyDetails from './components/CompanyDetails';
import OffCompaniesProductBased from './components/OffCompaniesProductBased';
import OffCompaniesServiceBased from './components/OffCompaniesServiceBased';
import YouTubeTech from './components/YouTubeTech';
import YouTubeEducational from './components/YouTubeEducational';
import GovExamCentral from './components/GovExamCentral';
import GovExamState from './components/GovExamState';
import JobPortalFresher from './components/JobPortalFresher';
import JobPortalExperienced from './components/JobPortalExperienced';
import ImportantLinksCareer from './components/ImportantLinksCareer';
import ImportantLinksResources from './components/ImportantLinksResources';
import InterviewPreparation from './components/InterviewPreparation';
import DSA from './components/DSA';
import DBMS from './components/DBMS';
import ComputerNetwork from './components/ComputerNetwork';
import OperatingSystem from './components/OperatingSystem';
import Projects from './components/Projects';
import InterviewQuestions from './components/InterviewQuestions';
import OOPS from './components/OOPS';
import LLD from './components/LLD';
import LeetCode from './components/LeetCode';
import Puzzles from './components/Puzzles';
import SQL from './components/SQL';
import CentralOfficial from './components/gov/CentralOfficial';
import { CentralYouTube, CentralMaths, CentralScience, CentralSocialScience, CentralEnglish, CentralTamil, CentralBiology, CentralPhysics, CentralChemistry, CentralCurrentAffairs, CentralNewspaper, CentralGK, CentralGKTamilNadu, CentralMockTest } from './components/gov/CentralSubjects';
import { StateOfficial, StateYouTube, StateMaths, StateScience, StateSocialScience, StateEnglish, StateTamil, StateBiology, StatePhysics, StateChemistry, StateCurrentAffairs, StateNewspaper, StateGK, StateGKTamilNadu, StateMockTest } from './components/gov/StateSubjects';
import './css/home.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/on-campus" element={<OnCampus />} />
        <Route path="/companies/off-campus" element={<OffCampus />} />
        <Route path="/companies/on-campus/product-based" element={<ProductBasedCompanies />} />
        <Route path="/companies/on-campus/service-based" element={<ServiceBasedCompanies />} />
        <Route path="/company-details" element={<CompanyDetails />} />
        <Route path="/off-companies" element={<OffCompanies />} />
        <Route path="/off-companies/product-based" element={<OffCompaniesProductBased />} />
        <Route path="/off-companies/service-based" element={<OffCompaniesServiceBased />} />
        <Route path="/youtube-channels" element={<YouTubeChannels />} />
        <Route path="/youtube-channels/tech" element={<YouTubeTech />} />
        <Route path="/youtube-channels/educational" element={<YouTubeEducational />} />
        <Route path="/interview-preparation" element={<InterviewPreparation />} />
        <Route path="/interview-preparation/dsa" element={<DSA />} />
        <Route path="/interview-preparation/dbms" element={<DBMS />} />
        <Route path="/interview-preparation/sql" element={<SQL />} />
        <Route path="/interview-preparation/computer-network" element={<ComputerNetwork />} />
        <Route path="/interview-preparation/os" element={<OperatingSystem />} />
        <Route path="/interview-preparation/oops" element={<OOPS />} />
        <Route path="/interview-preparation/lld" element={<LLD />} />
        <Route path="/interview-preparation/leetcode" element={<LeetCode />} />
        <Route path="/interview-preparation/projects" element={<Projects />} />
        <Route path="/interview-preparation/interview-questions" element={<InterviewQuestions />} />
        <Route path="/interview-preparation/puzzles" element={<Puzzles />} />
        <Route path="/government-exam/central" element={<GovExamCentral />} />
        <Route path="/government-exam/central/official" element={<CentralOfficial />} />
        <Route path="/government-exam/central/youtube" element={<CentralYouTube />} />
        <Route path="/government-exam/central/maths" element={<CentralMaths />} />
        <Route path="/government-exam/central/science" element={<CentralScience />} />
        <Route path="/government-exam/central/social-science" element={<CentralSocialScience />} />
        <Route path="/government-exam/central/english" element={<CentralEnglish />} />
        <Route path="/government-exam/central/tamil" element={<CentralTamil />} />
        <Route path="/government-exam/central/biology" element={<CentralBiology />} />
        <Route path="/government-exam/central/physics" element={<CentralPhysics />} />
        <Route path="/government-exam/central/chemistry" element={<CentralChemistry />} />
        <Route path="/government-exam/central/current-affairs" element={<CentralCurrentAffairs />} />
        <Route path="/government-exam/central/newspaper" element={<CentralNewspaper />} />
        <Route path="/government-exam/central/gk" element={<CentralGK />} />
        <Route path="/government-exam/central/gk-tamilnadu" element={<CentralGKTamilNadu />} />
        <Route path="/government-exam/central/mock-test" element={<CentralMockTest />} />
        <Route path="/government-exam/state" element={<GovExamState />} />
        <Route path="/government-exam/state/official" element={<StateOfficial />} />
        <Route path="/government-exam/state/youtube" element={<StateYouTube />} />
        <Route path="/government-exam/state/maths" element={<StateMaths />} />
        <Route path="/government-exam/state/science" element={<StateScience />} />
        <Route path="/government-exam/state/social-science" element={<StateSocialScience />} />
        <Route path="/government-exam/state/english" element={<StateEnglish />} />
        <Route path="/government-exam/state/tamil" element={<StateTamil />} />
        <Route path="/government-exam/state/biology" element={<StateBiology />} />
        <Route path="/government-exam/state/physics" element={<StatePhysics />} />
        <Route path="/government-exam/state/chemistry" element={<StateChemistry />} />
        <Route path="/government-exam/state/current-affairs" element={<StateCurrentAffairs />} />
        <Route path="/government-exam/state/newspaper" element={<StateNewspaper />} />
        <Route path="/government-exam/state/gk" element={<StateGK />} />
        <Route path="/government-exam/state/gk-tamilnadu" element={<StateGKTamilNadu />} />
        <Route path="/government-exam/state/mock-test" element={<StateMockTest />} />
        <Route path="/job-portal/fresher" element={<JobPortalFresher />} />
        <Route path="/job-portal/experienced" element={<JobPortalExperienced />} />
        <Route path="/important-links/career" element={<ImportantLinksCareer />} />
        <Route path="/important-links/resources" element={<ImportantLinksResources />} />
      </Routes>
    </Router>
  );
}

export default App;