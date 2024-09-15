import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCar, FaCalendar, FaUser } from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <nav className="bg-white p-4 shadow-md flex justify-around items-center w-full max-w-lg mx-auto sticky bottom-0">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `cursor-pointer p-2 rounded-full ${
            isActive || activeIcon === 'home' ? 'text-blue-500' : 'text-gray-500'
          }`
        }
        onClick={() => handleIconClick('home')}
      >
        <FaHome />
      </NavLink>
      <NavLink
        to="/car"
        className={({ isActive }) =>
          `cursor-pointer p-2 rounded-full ${
            isActive || activeIcon === 'car' ? 'text-blue-500' : 'text-gray-500'
          }`
        }
        onClick={() => handleIconClick('car')}
      >
        <FaCar />
      </NavLink>
      <NavLink
        to="/support"
        className={({ isActive }) =>
          `cursor-pointer p-2 rounded-full ${
            isActive || activeIcon === 'calendar' ? 'text-blue-500' : 'text-gray-500'
          }`
        }
        onClick={() => handleIconClick('calendar')}
      >
        <MdOutlineSupportAgent />
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `cursor-pointer p-2 rounded-full ${
            isActive || activeIcon === 'user' ? 'text-blue-500' : 'text-gray-500'
          }`
        }
        onClick={() => handleIconClick('user')}
      >
        <FaUser />
      </NavLink>
    </nav>
  );
};

export default Navbar;
