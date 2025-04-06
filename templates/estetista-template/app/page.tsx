// templates/estetista-template/app/page.tsx

import React from 'react';
import Hero from '@estetista/components/molecules/Hero';
import Testimonial from '@estetista/components/molecules/Testimonial';
import MeetOutTeam from '@estetista/components/molecules/MeetOutTeam';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Testimonial />
      <MeetOutTeam  />
    </>
  );
}