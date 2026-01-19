import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/government.css';

function GovExamCentral() {
  const navigate = useNavigate();

  const subjects = [
    { id: 1, name: 'Official Page', route: '/government-exam/central/official' },
    { id: 2, name: 'YouTube', route: '/government-exam/central/youtube' },
    { id: 3, name: 'Maths', route: '/government-exam/central/maths' },
    { id: 4, name: 'Science', route: '/government-exam/central/science' },
    { id: 5, name: 'Social Science', route: '/government-exam/central/social-science' },
    { id: 6, name: 'English', route: '/government-exam/central/english' },
    { id: 7, name: 'Tamil', route: '/government-exam/central/tamil' },
    { id: 8, name: 'Biology', route: '/government-exam/central/biology' },
    { id: 9, name: 'Physics', route: '/government-exam/central/physics' },
    { id: 10, name: 'Chemistry', route: '/government-exam/central/chemistry' },
    { id: 11, name: 'Current Affairs', route: '/government-exam/central/current-affairs' },
    { id: 12, name: 'Newspaper', route: '/government-exam/central/newspaper' },
    { id: 13, name: 'GK', route: '/government-exam/central/gk' },
    { id: 14, name: 'GK - Tamil Nadu', route: '/government-exam/central/gk-tamilnadu' },
    { id: 15, name: 'Mock Test', route: '/government-exam/central/mock-test' }
  ];

  return (
    <div className="gov-container">
      <header>
        <h1>Central Government Exams</h1>
        <p>Central Government Job Examinations - Subject Resources</p>
      </header>
      
      <div className="gov-grid">
        {subjects.map((subject) => (
          <div key={subject.id} className="gov-item">
            <h3>{subject.name}</h3>
            <button className="btn" onClick={() => navigate(subject.route)}>
              View Resources
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GovExamCentral;
