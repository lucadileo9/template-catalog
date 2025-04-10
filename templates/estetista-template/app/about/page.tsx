// templates/estetista-template/app/about/page.tsx

import React from 'react';
import MissionSection from '@estetista/components/molecules/MissionSection';
import AboutSection from '@estetista/components/molecules/AboutSection';
import ValuesSection from '@estetista/components/molecules/ValuesSection';

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <MissionSection />
      <ValuesSection />
       </>
  );
}