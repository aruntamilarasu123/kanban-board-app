import React, { useState } from 'react';

const RunModel = () => {
  const [toggle, setToggle] = useState(false);

  const chngimg = () => {
    setToggle(prev => !prev);
  };

  return (
    <nav className="py-4 w-full bg-white shadow-sm transition-all duration-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <label className="inline-flex items-center cursor-pointer select-none">
            <input
              type="checkbox"
              onChange={chngimg}
              className="sr-only peer"
            />
            <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-indigo-600 transition-colors"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform peer-checked:translate-x-6 transition-transform"></div>
          </label>

          <img
            id="imgplus"
            src={toggle ? '/bento/feature.png' : '/bento/product.png'}
            alt="Feature/Product"
            className="w-40 max-w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </nav>
  );
};

export default RunModel;
