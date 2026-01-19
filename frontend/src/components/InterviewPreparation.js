import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';

function InterviewPreparation() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header>
        <h1>Interview Preparation</h1>
        <p>Prepare for technical interviews</p>
      </header>
      <div className="grid-container">
        <div className="grid-item">
          <h3>DSA</h3>
          <button className="btn sub-btn" onClick={() => navigate('/interview-preparation/dsa')}>View</button>
        </div>
        <div className="grid-item">
          <h3>DBMS</h3>
          <button className="btn sub-btn" onClick={() => navigate('/interview-preparation/dbms')}>View</button>
        </div>
        <div className="grid-item">
          <h3>SQL</h3>
          <button className="btn sub-btn" onClick={() => navigate('/interview-preparation/sql')}>View</button>
        </div>
        <div className="grid-item">
          <h3>Computer Network</h3>
          <button className="btn sub-btn" onClick={() => navigate('/interview-preparation/computer-network')}>View</button>
        </div>
        <div className="grid-item">
          <h3>Operating System</h3>
          <button className="btn sub-btn" onClick={() => navigate('/interview-preparation/os')}>View</button>
        </div>
        <div className="grid-item">
          <h3>OOPS</h3>
          <button className="btn sub-btn" onClick={() => navigate('/interview-preparation/oops')}>View</button>
        </div>
        <div className="grid-item">
          <h3>System Design</h3>
          <button className="btn sub-btn" onClick={() => navigate('/interview-preparation/lld')}>View</button>
        </div>
        <div className="grid-item">
          <h3>LeetCode</h3>
          <button className="btn sub-btn" onClick={() => navigate('/interview-preparation/leetcode')}>View</button>
        </div>
        <div className="grid-item">
          <h3>Projects</h3>
          <button className="btn sub-btn" onClick={() => navigate('/interview-preparation/projects')}>View</button>
        </div>
        <div className="grid-item">
          <h3>Interview Questions</h3>
          <button className="btn sub-btn" onClick={() => navigate('/interview-preparation/interview-questions')}>View</button>
        </div>
        <div className="grid-item">
          <h3>Puzzles</h3>
          <button className="btn sub-btn" onClick={() => navigate('/interview-preparation/puzzles')}>View</button>
        </div>
      </div>
    </div>
  );
}

export default InterviewPreparation;
