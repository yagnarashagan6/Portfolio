import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'EduGen AI',
      description: 'A personalized learning platform with an intelligent chatbot that adapts to individual learning styles and provides customized educational content.',
      tech: ['React.js', 'Firebase', 'OpenRouter API', 'CSS'],
      features: [
        'AI-powered personalized learning paths',
        'Interactive chatbot for student queries',
        'Real-time progress tracking',
        'Adaptive content delivery'
      ],
      github: '#',
      demo: '#',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Stock Production Predictor',
      description: 'A real-time machine learning tool that predicts manufacturing output based on historical data and current market conditions.',
      tech: ['Python', 'HTML', 'CSS', 'JavaScript', 'Machine Learning'],
      features: [
        'Real-time prediction algorithms',
        'Interactive data visualization',
        'Historical trend analysis',
        'Market condition integration'
      ],
      github: '#',
      demo: '#',
      gradient: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 pt-16 relative">
      <div className="container max-w-7xl px-6 md:px-12 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-5 pt-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col min-h-[400px] bg-white rounded-xl border-3 border-red-600 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              <div className="p-10 flex flex-col justify-between flex-grow">
                <div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center -mb-2">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>

                  {/* ✅ Moved to left and added spacing to <li> */}
                  <div className="mb-6 text-left">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 ml-5">
                          <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ✅ Changed colors for tech tags */}
                  <div className="mb-10">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-violet-200 to-pink-200 text-purple-800 font-semibold rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-6 mt-auto pb-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                    style={{ background: 'linear-gradient(90deg, #4B5563, #1F2937)' }}
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                    style={{ background: `linear-gradient(90deg, rgb(26, 215, 171), rgb(10, 249, 54))` }}
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
