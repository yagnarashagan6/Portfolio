import React, { useState, useEffect } from "react";
import { Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const firstLineFull = "Hi, I'm Yagnarashagan";
  const secondLineFull = "AI & Data Science Enthusiast";
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < firstLineFull.length + secondLineFull.length) {
      const timeout = setTimeout(() => {
        if (index < firstLineFull.length) {
          setFirstLine((prev) => prev + firstLineFull[index]);
        } else {
          setSecondLine(
            (prev) => prev + secondLineFull[index - firstLineFull.length]
          );
        }
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="overall">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1
              className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
              style={{ minHeight: "2.5rem" }}
            >
              {firstLine}
            </h1>
            <h2
              className="text-2xl md:text-4xl font-semibold text-violet-600 leading-tight"
              style={{ minHeight: "2.5rem" }}
            >
              {secondLine}
              {secondLine.length < secondLineFull.length ? (
                <span className="animate-pulse">|</span>
              ) : null}
            </h2>
            <p className="centered-text-large">
              Turning code into creativity with AI
            </p>
            <p className="centered-text-small">
              B.Tech AI & Data Science Student passionate about building
              impactful AI solutions and solving real-world problems through
              innovative technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center resume-social-container">
            <a
              href="YAGNARASHAGAN_Resume.pdf"
              download="Yagnarashagan_Resume.pdf"
              className="resume-btn"
            >
              <Download size={20} />
              Download Resume
            </a>

            <div className="flex gap-4">
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
