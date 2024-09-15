import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaUserEdit, FaTachometerAlt, FaLaptop, FaTh, FaKeyboard, FaTable, FaChartBar } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
// import Tarun from 'Tarunn.png'

const Sidebar = ({ isOpen }) => {
  const [isElementsOpen, setIsElementsOpen] = React.useState(false);
  const [isPagesOpen, setIsPagesOpen] = React.useState(false);

  const toggleElements = () => setIsElementsOpen(!isElementsOpen);
  const togglePages = () => setIsPagesOpen(!isPagesOpen);

  return (
    <aside
      className={`bg-gray-800 text-white fixed top-0 left-0 h-full transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      <div className="top-0 left-0 bottom-0 w-64 text-white overflow-y-auto">
        <nav className="flex flex-col h-full">
          <div className="flex items-center px-4 py-3 border-b border-gray-700">
            <Link to="/" className="text-red-500 flex items-center text-lg p-2.5 font-semibold">
              <FaUserEdit className="mr-2" /> AL Official Group
            </Link>
          </div>
          <div className="flex items-center px-4 py-3 border-b border-gray-700">
            <div className="relative">
              <img className="w-10 h-10 rounded-full" src='/Tarunn.png' alt="User" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="ml-3">
              <h6 className="text-sm font-medium">Tarun AL</h6>
              <span className="text-xs">Admin</span>
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <NavLink
              to="/admin/home"
              className={({ isActive }) =>
                `flex items-center px-4 py-4 text-gray-400 hover:text-blue-500 bg-gray-900 border-l-4 ${isActive ? 'text-blue-500 border-blue-500' : 'border-gray-800'
                }`
              }
            >
              <FaTachometerAlt className="mr-2" /> Dashboard
            </NavLink>
            
            <Link
              to="/admin/carr"
              className="flex items-center px-4 py-4 text-gray-400 hover:text-blue-500 bg-gray-900 border-l-4 border-gray-800 hover:border-blue-500"
            >
              <FaTh className="mr-2" /> DataFirst
            </Link>
            {/* <Link
              to="/admin/admin2"
              className="flex items-center px-4 py-4 text-gray-400 hover:text-blue-500 bg-gray-900 border-l-4 border-gray-800 hover:border-blue-500"
            >
              <FaKeyboard className="mr-2" /> Forms
            </Link> */}
            <Link
              to="/admin/homeadmin"
              className="flex items-center px-4 py-4 text-gray-400 hover:text-blue-500 bg-gray-900 border-l-4 border-gray-800 hover:border-blue-500"
            >
              <FaTable className="mr-2" /> DataSecond
            </Link>
            {/* <Link
              to="/admin/admin3"
              className="flex items-center px-4 py-4 text-gray-400 hover:text-blue-500 bg-gray-900 border-l-4 border-gray-800 hover:border-blue-500"
            >
              <FaLaptop className="mr-2" /> DataThird
            </Link>
            <Link
              to="/admin/admin4"
              className="flex items-center px-4 py-4 text-gray-400 hover:text-blue-500 bg-gray-900 border-l-4 border-gray-800 hover:border-blue-500"
            >
              <FaLaptop className="mr-2" /> DataFourth
            </Link>
            <Link
              to="/admin/admin5"
              className="flex items-center px-4 py-4 text-gray-400 hover:text-blue-500 bg-gray-900 border-l-4 border-gray-800 hover:border-blue-500"
            >
              <FaLaptop className="mr-2" /> DataFive
            </Link>
            <Link
              to="/admin/chart"
              className="flex items-center px-4 py-4 text-gray-400 hover:text-blue-500 bg-gray-900 border-l-4 border-gray-800 hover:border-blue-500"
            >
              <FaChartBar className="mr-2" /> Charts
            </Link> */}
            
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
