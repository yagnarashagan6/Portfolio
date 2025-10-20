import React, { useEffect, useState } from "react";
import { Award, Calendar as Calender } from "lucide-react";
import { motion } from "framer-motion";

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
  const [touchStart, setTouchStart] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);

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

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = Math.abs(currentX - touchStart);
    const deltaY = Math.abs(currentY - touchStartY);
    if (deltaX > deltaY && deltaX > 10) {
      // Horizontal swipe, prevent vertical scroll
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const deltaX = touchStart - touchEnd;
    const threshold = 50; // minimum swipe distance in pixels
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        // swipe left, next card
        goTo((current + 1) % certifications.length);
      } else {
        // swipe right, previous card
        goTo(current === 0 ? certifications.length - 1 : current - 1);
      }
    }
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
      <motion.div
        className="underline"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ originX: 0.5 }}
      ></motion.div>
      <div
        className={`certification-transition-wrapper ${transition}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
      <div className="certification-indicators">
        {certifications.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === current ? "active" : ""}`}
            onClick={() => goTo(index)}
            aria-label={`Go to certification ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
