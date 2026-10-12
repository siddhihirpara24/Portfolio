import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CareerJourney from './components/CareerJourney';
import DevOpsSection from './components/DevOpsSection';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import SocialSection from './components/SocialSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app-root">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <CareerJourney />
        <DevOpsSection />
        <Projects />
        <Education />
        <Certifications />
        <ResumeSection />
        <SocialSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
