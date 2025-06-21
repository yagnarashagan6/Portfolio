import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'NPTEL Python Programming',
      issuer: 'NPTEL',
      date: '2024',
      description: 'Comprehensive Python programming course covering fundamentals to advanced concepts.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Cloud Computing Fundamentals',
      issuer: 'Simplilearn',
      date: '2024',
      description: 'Cloud computing principles, services, and deployment models.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'SQL Database Management',
      issuer: 'SkillRack',
      date: '2023',
      description: 'Database design, SQL queries, and data management techniques.',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'C Programming',
      issuer: 'SkillRack',
      date: '2023',
      description: 'Foundational programming concepts and C language mastery.',
      color: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>

        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="certification-card"
              style={{ minHeight: '170px' }}
            >
              {/* Top gradient strip */}
              <div className="card-gradient-strip" style={{ backgroundImage: `linear-gradient(to right, var(--${cert.color.split(' ')[0].replace('from-', '')}), var(--${cert.color.split(' ')[1].replace('to-', '')}))` }}></div>

              {/* Card content */}
              <div className="card-content">
                <div className="card-header-row">
                  <div className="award-icon-box" style={{ backgroundImage: `linear-gradient(to right, var(--${cert.color.split(' ')[0].replace('from-', '')}), var(--${cert.color.split(' ')[1].replace('to-', '')}))` }}>
                    <Award size={28} color="white" />
                  </div>
                  <div className="title-issuer-container">
                    <h3 className="certification-title">{cert.title}</h3>
                    <p className="certification-issuer">{cert.issuer}</p>
                  </div>
                  <div className="certification-date">
                    <Calendar size={18} className="calendar-icon" />
                    {cert.date}
                  </div>
                </div>

                {/* Description */}
                <p className="certification-description">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;