import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Global styles
import './components/App.css'; 

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements'; // Added Achievements as per your full App.jsx
import Contact from './components/Contact';
import NotFound from './components/NotFound'; // Assuming NotFound.jsx is in the same directory as App.jsx

const App = () => {
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    // Initialize AOS (Animate On Scroll) library
    AOS.init({ duration: 1000, once: true });

    const checkPath = () => {
      // If the path is not the root ('/'), assume it's a 404.
      // Your existing navigation relies on hash fragments (e.g., #about) on the root path.
      if (window.location.pathname !== '/') {
        setIs404(true);
      } else {
        setIs404(false);
      }
    };

    // Check path on initial load
    checkPath();

    // Listen for changes in the URL path (e.g., browser back/forward buttons)
    // Note: pushState/replaceState don't trigger popstate, but direct URL changes or back/forward do.
    window.addEventListener('popstate', checkPath);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('popstate', checkPath);
    };
  }, []); // Run only once on mount

  // Conditionally render the NotFound component or the main app content
  if (is404) {
    return <NotFound />;
  }

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Achievements /> {/* Render Achievements component */}
      <Contact />
    </div>
  );
};

export default App;
