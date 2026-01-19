import React from 'react';
import GovSubjectPage from '../GovSubjectPage';

export function StateOfficial() {
  const defaultLinks = [
    { id: 1, name: 'TNPSC Exams', url: 'https://apply.tnpscexams.in/secure?app_id=UElZMDAwMDAwMQ%3D%3D' }
  ];
  return <GovSubjectPage title="State Govt - Official Page" storageKey="state_official" defaultLinks={defaultLinks} />;
}

export function StateYouTube() {
  return <GovSubjectPage title="State Govt - YouTube" storageKey="state_youtube" />;
}

export function StateMaths() {
  return <GovSubjectPage title="State Govt - Maths" storageKey="state_maths" />;
}

export function StateScience() {
  return <GovSubjectPage title="State Govt - Science" storageKey="state_science" />;
}

export function StateSocialScience() {
  return <GovSubjectPage title="State Govt - Social Science" storageKey="state_social_science" />;
}

export function StateEnglish() {
  return <GovSubjectPage title="State Govt - English" storageKey="state_english" />;
}

export function StateTamil() {
  return <GovSubjectPage title="State Govt - Tamil" storageKey="state_tamil" />;
}

export function StateBiology() {
  return <GovSubjectPage title="State Govt - Biology" storageKey="state_biology" />;
}

export function StatePhysics() {
  return <GovSubjectPage title="State Govt - Physics" storageKey="state_physics" />;
}

export function StateChemistry() {
  return <GovSubjectPage title="State Govt - Chemistry" storageKey="state_chemistry" />;
}

export function StateCurrentAffairs() {
  return <GovSubjectPage title="State Govt - Current Affairs" storageKey="state_current_affairs" />;
}

export function StateNewspaper() {
  return <GovSubjectPage title="State Govt - Newspaper" storageKey="state_newspaper" />;
}

export function StateGK() {
  return <GovSubjectPage title="State Govt - GK" storageKey="state_gk" />;
}

export function StateGKTamilNadu() {
  return <GovSubjectPage title="State Govt - GK Tamil Nadu" storageKey="state_gk_tamilnadu" />;
}

export function StateMockTest() {
  return <GovSubjectPage title="State Govt - Mock Test" storageKey="state_mock_test" />;
}
