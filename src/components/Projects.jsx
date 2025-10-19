import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

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
  const currentProject = projects[currentIndex];

  const handleToggle = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section className="overall-section" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="underline"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ originX: 0.5 }}
        ></motion.div>

        <motion.div
          key={currentIndex}
          className="project-transition-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h3
            className="project-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {currentProject.title}
          </motion.h3>
          <motion.p
            className="project-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {currentProject.description}
          </motion.p>

          <motion.div
            className="project-features"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.table
              className="features-table"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <thead>
                <motion.tr
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <th>Key Features</th>
                </motion.tr>
              </thead>
              <tbody>
                {currentProject.features.map((feature, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 + idx * 0.1 }}
                  >
                    <td>{feature}</td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </motion.div>

          <motion.div
            className="project-tech"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            {currentProject.tech.map((tech, idx) => (
              <motion.span
                key={idx}
                className="project-tech-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.6 + idx * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="project-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <motion.a
              href={currentProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} /> GitHub
            </motion.a>
            <motion.a
              href={currentProject.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} /> Live Demo
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="toggle-button-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <motion.button
            className="toggle-button"
            onClick={handleToggle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentIndex === 0 ? "Next Project" : "Previous Project"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
