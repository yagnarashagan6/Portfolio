import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './components/App.css'; // Global styles
import './styles/theme.css'; // Custom theme styles

// Components
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Certifications from './components/Certifications.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Achievements />
      <Contact />
    </>
  );
}

export default App;
