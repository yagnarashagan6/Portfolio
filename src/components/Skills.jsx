import React, { useEffect, useRef } from "react";
import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";
import { SiOpenai, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
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
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Expertise
      </motion.h2>
      <motion.div
        className="underline"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ originX: 0.5 }}
      ></motion.div>
      <div className="circle-container">
        {/* Eyes */}
        <div className="smiley-eyes">
          <span
            className="skill-icon animate-fade-in"
            style={{ animationDelay: "0s" }}
          >
            <FaPython size={64} className="python-eye" />
            <p>python</p>
          </span>

          <span
            className="skill-icon animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            <FaJava size={64} className="java-eye" />
            <p>java</p>
          </span>
        </div>

        {/* Nose */}
        <div className="smiley-nose">
          <span
            className="skill-icon animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <FaReact size={64} className="react-nose" />
            <p>react</p>
          </span>
        </div>

        {/* Mouth */}
        <div className="smiley-mouth">
          <span
            className="skill-icon animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="prompt-inline">
              <SiOpenai size={64} className="prompt-mouth-icon" />
              <p className="prompt">AI prompts</p>
            </div>
          </span>
          <div
            className="dual-icon animate-fade-in"
            style={{ animationDelay: "0.65s" }}
          >
            <div className="skill-icon">
              <FaHtml5 size={64} className="html-mouth" />
              <p style={{ fontSize: "10px", color: "#333" }}>HTML</p>
            </div>
            <div className="skill-icon">
              <FaCss3Alt size={64} className="css-mouth" />
              <p style={{ fontSize: "10px", color: "#333" }}>CSS</p>
            </div>
          </div>
          <span
            className="skill-icon animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <SiMysql size={64} className="mysql-mouth-icon" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
