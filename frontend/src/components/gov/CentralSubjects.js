import React from 'react';
import GovSubjectPage from '../GovSubjectPage';

export function CentralYouTube() {
  return <GovSubjectPage title="Central Govt - YouTube" storageKey="central_youtube" />;
}

export function CentralMaths() {
  return <GovSubjectPage title="Central Govt - Maths" storageKey="central_maths" />;
}

export function CentralScience() {
  return <GovSubjectPage title="Central Govt - Science" storageKey="central_science" />;
}

export function CentralSocialScience() {
  return <GovSubjectPage title="Central Govt - Social Science" storageKey="central_social_science" />;
}

export function CentralEnglish() {
  return <GovSubjectPage title="Central Govt - English" storageKey="central_english" />;
}

export function CentralTamil() {
  return <GovSubjectPage title="Central Govt - Tamil" storageKey="central_tamil" />;
}

export function CentralBiology() {
  return <GovSubjectPage title="Central Govt - Biology" storageKey="central_biology" />;
}

export function CentralPhysics() {
  return <GovSubjectPage title="Central Govt - Physics" storageKey="central_physics" />;
}

export function CentralChemistry() {
  return <GovSubjectPage title="Central Govt - Chemistry" storageKey="central_chemistry" />;
}

export function CentralCurrentAffairs() {
  return <GovSubjectPage title="Central Govt - Current Affairs" storageKey="central_current_affairs" />;
}

export function CentralNewspaper() {
  return <GovSubjectPage title="Central Govt - Newspaper" storageKey="central_newspaper" />;
}

export function CentralGK() {
  return <GovSubjectPage title="Central Govt - GK" storageKey="central_gk" />;
}

export function CentralGKTamilNadu() {
  return <GovSubjectPage title="Central Govt - GK Tamil Nadu" storageKey="central_gk_tamilnadu" />;
}

export function CentralMockTest() {
  return <GovSubjectPage title="Central Govt - Mock Test" storageKey="central_mock_test" defaultLinks={[
    { id: 1, name: 'FutureKul', url: 'https://www.futurekul.com/' }
  ]} />;
}
