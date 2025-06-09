import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import EventsSection from '../components/home/EventsSection';
import TeamSection from '../components/home/TeamSection';
import SponsorsSection from '../components/home/SponsorsSection';
import ContactSection from '../components/home/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <TeamSection />
      <SponsorsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;