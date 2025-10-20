import React, { useEffect, useState } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Nokia Networks Solutions Intern",
      company: "Nokia Networks And Solutions",
      duration: "January 2025 - Present",
      location: "Chennai, India",
      description:
        "Gaining hands-on experience in telecommunications and network infrastructure. Working with cutting-edge telecom technologies and exploring AI applications in network optimization and infrastructure management.",
      skills: ["Telecommunications", "Network Infrastructure"],
    },
  ];

  // Animation key to force re-mount on navigation
  const [animKey, setAnimKey] = useState(Date.now());

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#experience") {
        setAnimKey(Date.now());
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section className="overall-section" id="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="underline"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ originX: 0.5 }}
        ></motion.div>
        <motion.div
          className="experience-timeline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={animKey + "-" + index}
              className="experience-card experience-card-animated"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            >
              <div className="experience-content">
                <motion.h3
                  className="experience-title"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                >
                  {exp.title}
                </motion.h3>
                <motion.div
                  className="experience-meta"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.2 }}
                >
                  <span className="experience-info">
                    <Building2 size={16} className="icon" /> {exp.company}
                  </span>
                  <span className="experience-info">
                    <Calendar size={16} className="icon" /> {exp.duration}
                  </span>
                  <span className="experience-info">
                    <MapPin size={16} className="icon" /> {exp.location}
                  </span>
                </motion.div>
                <motion.p
                  className="experience-description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.2 }}
                >
                  {exp.description}
                </motion.p>
                <motion.div
                  className="experience-skills"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.2 }}
                >
                  {exp.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="experience-skill"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 1.5 + index * 0.2 + idx * 0.1,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
              {index < experiences.length - 1 && (
                <div className="timeline-connector"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
