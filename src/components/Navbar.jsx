import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ sidebar }) => {
  return (
    <nav className="py-4 w-full bg-gradient-to-br from-white via-indigo-50 to-indigo-100 shadow-sm transition-all duration-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <Link to="/">
              <img src="KanBan.png" alt="Kanban Logo" className="w-10 h-10 object-contain" />
            </Link>
            <span className="text-2xl font-bold font-mono text-gray-900">
              Kanban Board
            </span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-2 lg:mt-0">
            <Link to="/">
              <button className="bg-white text-indigo-600 border border-indigo-200 rounded-full font-semibold text-sm px-5 py-2.5 shadow-sm hover:bg-indigo-100 transition-all duration-300">
                Home
              </button>
            </Link>
            <Link to="/projects">
              <button className="bg-indigo-600 text-white rounded-full font-semibold text-sm px-5 py-2.5 shadow-md hover:bg-indigo-700 transition-all duration-300">
                Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
