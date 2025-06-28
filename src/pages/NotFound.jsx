import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-10 lg:gap-16 pt-12 lg:pt-44 pb-12 lg:pb-28 px-4 sm:px-6 lg:px-0">
      <div className="relative flex justify-center items-center flex-col" style={{ height: 'calc(550px - 85px)' }}>
        <img src="/404.png" alt="404 Not Found" className="w-64 sm:w-80 md:w-96" />
        <div className="text-center mt-6 max-w-lg px-2">
          <h5 className="text-lg md:text-xl font-medium text-gray-900 mb-2 leading-8">
            <span className="text-indigo-600 font-semibold">Oops!</span> It seems like you've taken a wrong turn
          </h5>
          <p className="text-sm text-gray-500 mb-6">
            We're working to bring it back.
          </p>
          <Link to="/">
            <button className="bg-black text-white rounded-full cursor-pointer font-semibold shadow transition-all duration-500 py-3 px-8 text-sm hover:bg-indigo-700">
              Return to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
