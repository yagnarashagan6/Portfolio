import React from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Network Solutions Intern',
      company: 'Nokia Solutions and Networks',
      duration: 'January 2025 - Present',
      location: 'Chennai, India',
      description:
        'Gaining hands-on experience in telecommunications and network infrastructure. Working with cutting-edge telecom technologies and exploring AI applications in network optimization and infrastructure management.',
      skills: [
        'Telecommunications',
        'Network Infrastructure',
        'AI in Telecom',
        'Problem Solving'
      ],
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      {/* Changed className here to "container" for proper centering */}
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-4 border-red-500"
            >
             <div className="p-10 min-h-[200px]">
  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{exp.title}</h3>

      {/* Wrap content below h3 in a div and apply mt-6 */}
      <div className="mt-8">
        <div className="space-x-5 mb-6 flex items-center">
          <Building2 className="text-violet-600" size={20} />
          <span className="text-lg font-semibold text-violet-600">{exp.company}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 mb-6">
          <div className="flex items-center space-x-4">
            <Calendar size={16} />
            <span>{exp.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={16} />
            <span>{exp.location}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <p className="text-gray-600 leading-relaxed mb-8">{exp.description}</p>

  <div>
    <h4 className="font-semibold space-x-4 text-gray-800 mb-3">Key Areas:</h4>
    <div className="flex flex-wrap gap-2">
      {exp.skills.map((skill, idx) => (
        <span
          key={idx}
          className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;