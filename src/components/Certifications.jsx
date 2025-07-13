import React, { useEffect, useState } from "react";
import { Award, Calendar as Calender } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Python Programming",
      issuer: "NPTEL",
      date: "2024",
      description:
        "Mastered Python programming through a comprehensive course covering fundamentals to advanced concepts, including data structures, algorithms, and object-oriented programming.",
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "Simplilearn",
      date: "2024",
      description:
        "Gained expertise in cloud computing principles, services (IaaS, PaaS, SaaS), and deployment models (public, private, hybrid).",
    },
    {
      title: "SQL Database Management",
      issuer: "SkillRack",
      date: "2023",
      description:
        "Developed proficiency in database design, complex SQL queries, and efficient data management techniques.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState("slide-in");
  const [cardAnim, setCardAnim] = useState("feature-center-in");

  // Handle navigation with transition
  const goTo = (idx) => {
    if (idx === current) return;
    setTransition(idx > current ? "slide-out-left" : "slide-out-right");
    setTimeout(() => {
      setCurrent(idx);
      setTransition("slide-in");
      setCardAnim("");
      setTimeout(() => setCardAnim("feature-center-in"), 10);
    }, 600); // match CSS transition duration
  };

  useEffect(() => {
    const section = document.getElementById("certifications");
    if (!section) {
      setCardAnim("feature-center-in");
      return;
    }
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCardAnim("");
          setTimeout(() => setCardAnim("feature-center-in"), 10);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="overall-section" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="underline"></div>
      <div className={`certification-transition-wrapper ${transition}`}>
        <div className={`certification-card ${cardAnim}`}>
          <div className="certification-icon">
            <Award size={36} />
          </div>
          <div className="certification-details">
            <h3 className="certification-title">
              {certifications[current].title}
            </h3>
            <div className="certification-meta">
              <span className="certification-issuer">
                {certifications[current].issuer}
              </span>
              <span className="certification-date">
                <Calender size={22} className="calendar-icon" />
                {certifications[current].date}
              </span>
            </div>
            <p className="certification-description">
              {certifications[current].description}
            </p>
          </div>
        </div>
      </div>
      {/* Navigation indicators */}
      <div
        className="underline-indicators"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 48,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          zIndex: 20,
        }}
      >
        {certifications.map((_, idx) => (
          <span
            key={idx}
            className="underline"
            style={{
              cursor: "pointer",
              background:
                idx === current
                  ? "linear-gradient(90deg,#7c3aed,#ec4899)"
                  : "#e5e7eb",
              opacity: idx === current ? 1 : 0.5,
            }}
            onClick={() => goTo(idx)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
