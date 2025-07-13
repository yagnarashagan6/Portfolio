import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  // Remove React theme state, use global script for theme switching

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 nav-bar z-50 ${
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "nav-bar-dark"
          : ""
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-white">Yagnarashagan</div>

          {/* Desktop Navigation - only visible on md and up */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex justify-end space-x-10">
              {navItems.slice(0, -1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? window.matchMedia("(prefers-color-scheme: dark)")
                          .matches
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "text-violet-700 border-b-2 border-violet-700"
                      : window.matchMedia("(prefers-color-scheme: dark)")
                          .matches
                      ? "text-blue-200 hover:text-blue-400"
                      : "text-violet-700/80 hover:text-violet-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                activeSection === "contact"
                  ? window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-violet-700 border-b-2 border-violet-700"
                  : window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "text-blue-200 hover:text-blue-400"
                  : "text-violet-700/80 hover:text-violet-700"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Theme Toggle - always visible on mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              className="theme-toggle"
              id="theme-toggle"
              title="Toggles light & dark"
              aria-label="auto"
              aria-live="polite"
              onClick={() => {
                const html = document.documentElement;
                const currentTheme = html.getAttribute("data-theme");
                const newTheme = currentTheme === "dark" ? "light" : "dark";
                html.setAttribute("data-theme", newTheme);
                localStorage.setItem("theme", newTheme);
              }}
            >
              <svg
                className="sun-and-moon"
                aria-hidden="true"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <mask className="moon" id="moon-mask">
                  <rect x="0" y="0" width="100%" height="100%" fill="white" />
                  <circle cx="24" cy="10" r="6" fill="black" />
                </mask>
                <circle
                  className="sun"
                  cx="12"
                  cy="12"
                  r="6"
                  mask="url(#moon-mask)"
                  fill="currentColor"
                />
                <g className="sun-beams" stroke="currentColor">
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </g>
              </svg>
            </button>
            {/* Hamburger only on mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-400 hover:text-blue-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden nav-mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-blue-400 bg-blue-900/10"
                      : "text-blue-200 hover:text-blue-400 hover:bg-blue-900/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 nav-bar z-50 ${navBgColor}`}>
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <div className={`font-bold text-xl ${navTextColor}`}>
            Yagnarashagan
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Main items (right to left) */}
            <div className="flex justify-end space-x-10">
              {navItems.slice(0, -1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? `${navTextColor} border-b-2 ${navActiveColor}`
                      : `${navTextColor}/80 hover:${navTextColor}`
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            {/* Contact item (far right) */}
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                activeSection === "contact"
                  ? `${navTextColor} border-b-2 ${navActiveColor}`
                  : `${navTextColor}/80 hover:${navTextColor}`
              }`}
            >
              Contact
            </button>
            {/* Theme Toggle Button */}
            <button
              className={`ml-4 p-2 rounded-full border border-gray-400 ${navTextColor} bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors`}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle light/dark mode"
              title={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              className={`p-2 ${navTextColor} hover:${navTextColor}/80`}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle light/dark mode"
              title={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${navTextColor} hover:${navTextColor}/80 p-2`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden nav-mobile-menu ${navBgColor}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? `${navTextColor} bg-white/10`
                      : `${navTextColor}/80 hover:${navTextColor} hover:bg-white/10`
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
