import React, { useEffect, useState } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

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
      <h2 className="section-title">Experience</h2>
      <div className="underline"></div>
      <div className="container">
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={animKey + "-" + index}
              className={`experience-card animate-fade-in experience-card-animated`}
            >
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-meta">
                  <span className="experience-info">
                    <Building2 size={16} className="icon" /> {exp.company}
                  </span>
                  <span className="experience-info">
                    <Calendar size={16} className="icon" /> {exp.duration}
                  </span>
                  <span className="experience-info">
                    <MapPin size={16} className="icon" /> {exp.location}
                  </span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-skills">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="experience-skill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="timeline-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
