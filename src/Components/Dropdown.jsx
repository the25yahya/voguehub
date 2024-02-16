import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Dropdown trigger button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center"
      >
        <p className='mr-3'>Date, new to old</p>
        <FaAngleDown />
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-md z-10 fade-in py-2">
          <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Date, old to new
          </a>
          <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Price, Hight to low
          </a>
          <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Price, low to high
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
