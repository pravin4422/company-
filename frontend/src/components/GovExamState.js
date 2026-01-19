import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/government.css';

function GovExamState() {
  const navigate = useNavigate();

  const subjects = [
    { id: 1, name: 'Official Page', route: '/government-exam/state/official' },
    { id: 2, name: 'YouTube', route: '/government-exam/state/youtube' },
    { id: 3, name: 'Maths', route: '/government-exam/state/maths' },
    { id: 4, name: 'Science', route: '/government-exam/state/science' },
    { id: 5, name: 'Social Science', route: '/government-exam/state/social-science' },
    { id: 6, name: 'English', route: '/government-exam/state/english' },
    { id: 7, name: 'Tamil', route: '/government-exam/state/tamil' },
    { id: 8, name: 'Biology', route: '/government-exam/state/biology' },
    { id: 9, name: 'Physics', route: '/government-exam/state/physics' },
    { id: 10, name: 'Chemistry', route: '/government-exam/state/chemistry' },
    { id: 11, name: 'Current Affairs', route: '/government-exam/state/current-affairs' },
    { id: 12, name: 'Newspaper', route: '/government-exam/state/newspaper' },
    { id: 13, name: 'GK', route: '/government-exam/state/gk' },
    { id: 14, name: 'GK - Tamil Nadu', route: '/government-exam/state/gk-tamilnadu' },
    { id: 15, name: 'Mock Test', route: '/government-exam/state/mock-test' }
  ];

  return (
    <div className="gov-container">
      <header>
        <h1>State Government Exams</h1>
        <p>State Government Job Examinations - Subject Resources</p>
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

export default GovExamState;
