import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'Java', level: 85, color: 'from-orange-500 to-red-500' },
    { name: 'React.js', level: 80, color: 'from-cyan-500 to-blue-500' },
    { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-pink-500' },
    { name: 'MySQL', level: 75, color: 'from-blue-600 to-indigo-600' },
    { name: 'Prompt Engineering', level: 95, color: 'from-violet-500 to-purple-600' },
  ];

  const softSkills = [
    'Leadership',
    'Communication',
    'Problem Solving',
    'Team Collaboration',
    'Critical Thinking',
    'Adaptability',
    'Project Management',
    'Innovation',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Skills & Expertise
          </h2>
        </div>

        <div className="bg-white p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="soft-skill-card border border-violet-200"
                  >
                    <span className="font-medium text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;