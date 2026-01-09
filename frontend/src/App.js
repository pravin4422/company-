import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Companies from './pages/Companies';
import OffCompanies from './pages/OffCompanies';
import YouTubeChannels from './pages/YouTubeChannels';
import './css/home.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/off-companies" element={<OffCompanies />} />
        <Route path="/youtube-channels" element={<YouTubeChannels />} />
      </Routes>
    </Router>
  );
}

export default App;