import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaEnvelope, FaBell, FaUserEdit } from 'react-icons/fa';
// import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
  const [openMenu, setOpenMenu] = React.useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <nav className="bg-gray-800 text-white flex items-center justify-between p-4 sticky top-0 z-10">
      <button
        className="text-white focus:outline-none"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>
      {!isSidebarOpen && (
        <Link to="/" className="text-red-500 flex items-center text-lg font-semibold ml-4">
          <FaUserEdit className="mr-2" /> AL Official Group
        </Link>
      )}
      {/* <form className={`hidden md:flex items-center ml-4 ${isSidebarOpen ? 'ml-0' : 'ml-4'}`}>
        <input
          type="search"
          placeholder="Search"
          className="bg-gray-700 border-0 text-white p-2 rounded-lg"
        />
      </form> */}
      <div className="flex items-center space-x-4">
        {/* Messages Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-2"
            onClick={() => toggleMenu('messages')}
          >
            <FaEnvelope />
            <span className="hidden lg:inline">Message</span>
          </button>
          {openMenu === 'messages' && (
            <div className="absolute right-0 mt-2 w-64 bg-gray-700 border border-gray-600 rounded-lg shadow-lg">
              <Link to="#" className="block px-4 py-2 hover:bg-gray-600">
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full" src="img/user.jpg" alt="" />
                  <div className="ml-2">
                    <h6 className="font-normal mb-0">Tarun sent you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </Link>
              <hr className="border-gray-600" />
              <Link to="#" className="block px-4 py-2 text-center hover:bg-gray-600">See all messages</Link>
            </div>
          )}
        </div>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-2"
            onClick={() => toggleMenu('notifications')}
          >
            <FaBell />
            <span className="hidden lg:inline">Notification</span>
          </button>
          {openMenu === 'notifications' && (
            <div className="absolute right-0 mt-2 w-64 bg-gray-700 border border-gray-600 rounded-lg shadow-lg">
              <Link to="#" className="block px-4 py-2 hover:bg-gray-600">
                <h6 className="font-normal mb-0">Profile updated</h6>
                <small>15 minutes ago</small>
              </Link>
              <hr className="border-gray-600" />
              <Link to="#" className="block px-4 py-2 hover:bg-gray-600">New user added</Link>
              <hr className="border-gray-600" />
              <Link to="#" className="block px-4 py-2 hover:bg-gray-600">Password changed</Link>
              <hr className="border-gray-600" />
              <Link to="#" className="block px-4 py-2 text-center hover:bg-gray-600">See all notifications</Link>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-2"
            onClick={() => toggleMenu('profile')}
          >
            <img className="w-10 h-10 rounded-full" src="/Tarunn.png" alt="" />
            <span className="hidden lg:inline">Tarun AL</span>
          </button>
          {openMenu === 'profile' && (
            <div className="absolute right-0 mt-2 w-64 bg-gray-700 border border-gray-600 rounded-lg shadow-lg">
              <Link to="#" className="block px-4 py-2 hover:bg-gray-600">My Profile</Link>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-600">Settings</Link>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-600">Log Out</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
