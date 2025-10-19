import React from "react";
import { Brain, Code, Heart } from "lucide-react";
import image from "../assets/rashagan.jpg"; // Replace with your image path
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="overall-section">
      <div className="container">
        <div className="text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <div className="underline"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p className="des">
                I'm currently pursuing my B.Tech in{" "}
                <strong>Artificial Intelligence & Data Science</strong>
                at Agni College of Technology with a CGPA of{" "}
                <strong>8.51</strong>. My journey in tech is driven by a deep
                fascination with how AI can transform the way we solve complex
                problems.
              </p>
              <p>
                I believe AI isn't just about machines—it's about creating
                meaningful impact. From developing personalized learning
                platforms to building predictive models, I'm passionate about
                turning innovative ideas into reality through code.
              </p>
              <p>
                My expertise spans across <strong>Prompt Engineering</strong>,{" "}
                <strong>Data Analytics</strong>, and building scalable AI
                applications. I thrive on challenges that push the boundaries of
                what's possible with technology.
              </p>
            </div>

            {/* Highlight badges */}
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div className="badge group" whileHover={{ scale: 1.05 }}>
                <Brain
                  className="text-violet-600 group-hover:text-white mr-2"
                  size={20}
                />
                <span className="font-medium text-violet-700 group-hover:text-white">
                  AI Enthusiast
                </span>
              </motion.div>
              <motion.div className="badge group" whileHover={{ scale: 1.05 }}>
                <Code
                  className="text-purple-600 group-hover:text-white mr-2"
                  size={20}
                />
                <span className="font-medium text-purple-700 group-hover:text-white">
                  Full Stack Developer
                </span>
              </motion.div>
              <motion.div className="badge group" whileHover={{ scale: 1.05 }}>
                <Heart
                  className="text-pink-600 group-hover:text-white mr-2"
                  size={20}
                />
                <span className="font-medium text-pink-700 group-hover:text-white">
                  Problem Solver
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card bg-gradient-to-br from-violet-50 to-purple-50 border-3 border-color-red rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-fade-in border border-violet-200 flex flex-col items-center min-h-[420px]">
              <div className="flex flex-col items-center justify-center flex-grow text-center space-y-4">
                <motion.div
                  className="w-32 h-32 rounded-full mx-auto flex items-center justify-center overflow-hidden relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={image}
                    alt="Yagnarashagan C"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Yagnarashagan C
                  </h3>
                  <p className="text-violet-600 font-medium text-lg">
                    AI & Data Science Student
                  </p>
                  <p className="text-gray-600 text-base">
                    Agni College of Technology, Chennai
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-xl font-bold text-violet-600">
                      8.51
                    </div>
                    <div className="text-xs text-gray-600 uppercase">CGPA</div>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col items-center">
                    <div className="text-xl font-bold text-purple-600">
                      2026
                    </div>
                    <div className="text-xs text-gray-600 uppercase">
                      Graduation
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <motion.a
                    href="#projects"
                    className="resume-btn text-sm px-4 py-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    View My Journey
                  </motion.a>
                  <div className="flex gap-2"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
