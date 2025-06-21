import React from 'react';
import { Brain, Code, Heart } from 'lucide-react';
import image from '../assets/rashagan.jpg'; // Replace with your image path

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
        
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <div className="space-y-6">
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                I'm currently pursuing my B.Tech in <strong>Artificial Intelligence & Data Science</strong> 
                at Agni College of Technology with a CGPA of <strong>8.51</strong>. My journey in tech 
                is driven by a deep fascination with how AI can transform the way we solve complex problems.
              </p>
              <p>
                I believe AI isn't just about machines—it's about creating meaningful impact. From 
                developing personalized learning platforms to building predictive models, I'm passionate 
                about turning innovative ideas into reality through code.
              </p>
              <p>
                My expertise spans across <strong>Prompt Engineering</strong>, <strong>Data Analytics</strong>, 
                and building scalable AI applications. I thrive on challenges that push the boundaries 
                of what's possible with technology.
              </p>
            </div>

            {/* Highlight badges */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="badge group">
                <Brain className="text-violet-600 group-hover:text-white mr-2" size={20} />
                <span className="font-medium text-violet-700 group-hover:text-white">AI Enthusiast</span>
              </div>
              <div className="badge group">
                <Code className="text-purple-600 group-hover:text-white mr-2" size={20} />
                <span className="font-medium text-purple-700 group-hover:text-white">Full Stack Developer</span>
              </div>
              <div className="badge group">
                <Heart className="text-pink-600 group-hover:text-white mr-2" size={20} />
                <span className="font-medium text-pink-700 group-hover:text-white">Problem Solver</span>
              </div>
            </div>
          </div>

          {/* Right - Card */}
          <div className="relative">
            <div className="card bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-fade-in border border-violet-200 flex flex-col items-center min-h-[500px]">
              <div className="h-1 bg-gradient-to-r from-violet-600 to-purple-600 mb-6 w-full"></div>
              <div className="flex flex-col items-center justify-center flex-grow text-center space-y-4">
                <div className="w-32 h-32 rounded-full mx-auto flex items-center justify-center overflow-hidden relative group">
                  <img
                    src={image}
                    alt="Yagnarashagan C"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Yagnarashagan C</h3>
                  <p className="text-violet-600 font-medium text-lg">AI & Data Science Student</p>
                  <p className="text-gray-600 text-base">Agni College of Technology, Chennai</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-xl font-bold text-violet-600">8.51</div>
                    <div className="text-xs text-gray-600 uppercase">CGPA</div>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col items-center">
                    <div className="text-xl font-bold text-purple-600">2026</div>
                    <div className="text-xs text-gray-600 uppercase">Graduation</div>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <a href="#projects" className="resume-btn text-sm px-4 py-2">
                    View My Journey
                  </a>
                  <div className="flex gap-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;