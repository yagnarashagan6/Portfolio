import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin } from 'lucide-react';
import '../styles/theme.css'; // Import your custom styles
const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hi, I'm Yagnarashagan – AI & Data Science Enthusiast";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 pt-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              {displayText}
              <span className="animate-pulse text-violet-600">|</span>
            </h1>
            <p className="centered-text-large">
              Turning code into creativity with AI
            </p>
            <p className="centered-text-small">
              B.Tech AI & Data Science Student passionate about building impactful AI solutions 
              and solving real-world problems through innovative technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center resume-social-container">
            <a
              href="yagnarashagan_resume.pdf"
              download="Yagnarashagan_Resume.pdf"
              className="resume-btn"
            >
              <Download size={20} />
              Download Resume
            </a>
            
            <div className="social-icons">
              <a
                href="https://github.com/yagnarashagan6"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/yagnarashagan"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
          {/* Floating gradient balls */}
          <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full opacity-20 animate-pulse hidden lg:block"></div>
          <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-violet-600 rounded-full opacity-20 animate-pulse hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;