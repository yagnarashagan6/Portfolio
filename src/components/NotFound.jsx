import React from 'react';
import Lottie from 'lottie-react';
import { Home } from 'lucide-react';
import animationData from '../assets/404_robot_animation.json'; // Make sure this file exists

const NotFound = () => {
  const handleGoHome = () => {
    window.location.pathname = '/';
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-gradient-to-br from-gray-900 to-slate-900 text-white px-4">
      {/* Fullscreen Lottie Animation */}
      <div className="w-full max-w-3xl h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] flex items-center justify-center">
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Centered Go Home Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleGoHome}
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-75"
          aria-label="Go back to home page"
        >
          <Home size={20} className="mr-2" />
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
