import React, { useEffect, useRef } from "react";
import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import "./App.css"; // Import CSS

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleAnimation = () => {
      const section = sectionRef.current;
      if (!section) return;
      const icons = section.querySelectorAll(".animate-fade-in");
      icons.forEach((icon) => {
        icon.classList.remove("animate-fade-in");
        // Force reflow
        void icon.offsetWidth;
        icon.classList.add("animate-fade-in");
      });
    };

    // Intersection Observer to trigger animation when section is in view
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="overall-section" id="skills" ref={sectionRef}>
      <h2 className="skills-title">Skills & Expertise</h2>
      <div className="underline"></div>
      <div className="circle-container">
        {/* Eyes */}
        <div className="smiley-eyes">
          <span
            className="skill-icon animate-fade-in"
            style={{ animationDelay: "0s" }}
          >
            <FaPython size={64} className="python-eye" />
          </span>
          <span
            className="skill-icon animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            <FaJava size={64} className="java-eye" />
          </span>
        </div>

        {/* Nose */}
        <div className="smiley-nose">
          <span
            className="skill-icon animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <FaReact size={64} className="react-nose" />
          </span>
        </div>

        {/* Mouth */}
        <div className="smiley-mouth">
          <span
            className="skill-icon animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <SiOpenai size={64} className="prompt-mouth-icon" />
          </span>
          <div
            className="dual-icon animate-fade-in"
            style={{ animationDelay: "0.65s" }}
          >
            <FaHtml5 size={64} className="html-mouth" />
            <FaCss3Alt size={64} className="css-mouth" />
          </div>
          <span
            className="skill-icon animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <FaDatabase size={64} className="mysql-mouth-icon" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
