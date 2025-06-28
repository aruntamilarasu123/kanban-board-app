import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeNav from '../components/HomeNav';

const Home = () => {
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      <HomeNav />

      {/* Fullscreen Modal for Image */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative max-w-5xl w-full mx-auto px-4">
            <img
              src="/proill.png"
              alt="Full Project Illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md shadow-md font-semibold transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center px-6 sm:px-12 lg:px-24 py-20 bg-gradient-to-br from-white via-indigo-50 to-indigo-100 transition-colors duration-300">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16 animate-fade-in-up">

          {/* Text Section */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Welcome to <span className="text-indigo-600">Kanban Board</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 mb-10">
              Manage your work smarter — create new projects on the fly, add tasks, and seamlessly move them across stages like "To Do", "In Progress", and "Done".
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link to="/projects">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300 animate-glow">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section with Hover Overlay */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div
              className="relative w-full max-w-md cursor-pointer group"
              onClick={() => setShowImageModal(true)}
            >
              <img
                src="/proill.png"
                alt="Project management illustration"
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-white text-lg font-medium">
                  Click to view project illustration
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
