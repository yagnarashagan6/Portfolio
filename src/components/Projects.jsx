import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "EduGen AI",
      description:
        "A personalized learning platform with an intelligent chatbot that adapts to individual learning styles and provides customized educational content.",
      tech: ["React.js", "Firebase", "OpenRouter API", "CSS"],
      features: [
        "AI-powered personalized learning paths",
        "Interactive chatbot for student queries",
        "Real-time progress tracking",
        "Adaptive content delivery",
      ],
      github: "https://github.com/yagnarashagan6",
      demo: "https://edugen-ai-zeta.vercel.app/",
    },
    {
      title: "Stock Production Predictor",
      description:
        "A real-time machine learning tool that predicts manufacturing output based on historical data and current market conditions.",
      tech: ["Python", "HTML", "CSS"],
      features: [
        "Real-time prediction algorithms",
        "Interactive data visualization",
        "Historical trend analysis",
        "Market condition integration",
      ],
      github: "https://github.com/yagnarashagan6",
      demo: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState("next");
  const currentProject = projects[currentIndex];

  const handleToggle = () => {
    setIsTransitioning(true);
    setDirection(currentIndex === 0 ? "next" : "prev");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setIsTransitioning(false);
    }, 400); // Duration matches CSS animation
  };

  return (
    <section className="overall-section" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="underline"></div>

        <div
          className={`project-transition-wrapper ${
            isTransitioning
              ? direction === "next"
                ? "slide-next"
                : "slide-prev"
              : ""
          }`}
        >
          <h3 className="project-title">{currentProject.title}</h3>
          <p className="project-description">{currentProject.description}</p>

          <div className="project-features">
            <h4>Key Features</h4>
            <ul className="features-list">
              {currentProject.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-tech">
            {currentProject.tech.map((tech, idx) => (
              <span key={idx} className="project-tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-links">
            <a
              href={currentProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href={currentProject.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button"
            >
              <ExternalLink size={20} /> Live Demo
            </a>
          </div>
        </div>

        <div className="toggle-button-wrapper">
          <button className="toggle-button" onClick={handleToggle}>
            {currentIndex === 0 ? "Next Project" : "Previous Project"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
