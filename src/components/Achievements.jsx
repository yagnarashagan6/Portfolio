import React from 'react';
import { Trophy, Award, Users, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: '3rd Prize - Project Expo',
      organization: 'Agni College of Technology',
      description: 'Secured third place in the college project exhibition for innovative AI-driven solutions and outstanding presentation.',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      year: '2024'
    },
    {
      title: 'IDE Bootcamp Participant',
      organization: 'AICTE, MIC, Wadhwani Foundation',
      description: 'Selected participant in the prestigious Innovation, Design & Entrepreneurship bootcamp focusing on startup ecosystem and innovation.',
      icon: Award,
      color: 'from-purple-500 to-violet-600',
      year: '2024'
    },
    {
      title: 'Academic Excellence',
      organization: 'Agni College of Technology',
      description: 'Maintaining consistent academic performance with CGPA of 8.51 in AI & Data Science program.',
      icon: Star,
      color: 'from-blue-500 to-indigo-600',
      year: '2022-2025'
    },
    {
      title: 'Leadership & Collaboration',
      organization: 'Various Projects',
      description: 'Demonstrated leadership skills in multiple team projects and collaborative initiatives.',
      icon: Users,
      color: 'from-green-500 to-teal-600',
      year: 'Ongoing'
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements & Recognition</h2>
        
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="achievement-card"
              >
                <div className="card-gradient-strip" style={{ backgroundImage: `linear-gradient(to right, var(--${achievement.color.split(' ')[0].replace('from-', '')}), var(--${achievement.color.split(' ')[1].replace('to-', '')}))` }}></div>

                <div className="card-content">
                  <div className="card-header-row">
                    <div className="icon-box" style={{ backgroundImage: `linear-gradient(to right, var(--${achievement.color.split(' ')[0].replace('from-', '')}), var(--${achievement.color.split(' ')[1].replace('to-', '')}))` }}>
                      <IconComponent size={24} color="white" />
                    </div>
                    <div className="title-info">
                      <h3 className="achievement-title">{achievement.title}</h3>
                      <p className="achievement-organization">{achievement.organization}</p>
                    </div>
                    <span className="achievement-year">{achievement.year}</span>
                  </div>

                  <p className="achievement-description">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;