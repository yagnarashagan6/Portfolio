import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Global styles
import "./components/App.css";

// Components
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Services from "./components/Services";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound"; // Assuming NotFound.jsx is in the same directory as App.jsx

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle light/dark mode"
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
        </svg>
      )}
    </button>
  );
};

const App = () => {
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    // Initialize AOS (Animate On Scroll) library
    AOS.init({ duration: 1000, once: true });

    const checkPath = () => {
      // If the path is not the root ('/'), assume it's a 404.
      // Your existing navigation relies on hash fragments (e.g., #about) on the root path.
      if (window.location.pathname !== "/") {
        setIs404(true);
      } else {
        setIs404(false);
      }
    };

    // Check path on initial load
    checkPath();

    // Listen for changes in the URL path (e.g., browser back/forward buttons)
    // Note: pushState/replaceState don't trigger popstate, but direct URL changes or back/forward do.
    window.addEventListener("popstate", checkPath);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("popstate", checkPath);
    };
  }, []); // Run only once on mount

  // Conditionally render the NotFound component or the main app content
  if (is404) {
    return <NotFound />;
  }

  return (
    <div className="App">
      <ThemeToggle />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
