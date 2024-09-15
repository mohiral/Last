import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog, FaFileAlt, FaHandsHelping, FaShareAlt, FaQuestionCircle } from 'react-icons/fa';

const ProfilePage = () => {

    const handleShareClick = () => {
        if (navigator.share) {
          navigator.share({
            title: "Shree Shyam Packers and Movers - Your Trusted Moving Partner",
            text: "Experience a seamless and stress-free relocation with Shree Shyam Packers and Movers. Our professional team is dedicated to providing top-notch packing and moving services, ensuring the safe and timely delivery of your belongings. Whether you're moving locally or across the country, trust us to handle your move with care and expertise. Discover why countless customers choose us for their relocation needs.",
            url: window.location.href
          }).then(() => {
            console.log('Link shared successfully.');
          }).catch((error) => {
            console.error('Error sharing link:', error);
          });
        } else {
          console.log('Web Share API not supported.');
        }
      };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-500 min-h-screen p-6 flex flex-col items-center w-full max-w-lg mx-auto">
      {/* Profile Section */}
      <div className="bg-white rounded-full p-4 mb-4">
        <div className="bg-indigo-700 rounded-full p-8">
          {/* Profile Icon (Replace with Image if needed) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-16 h-16 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white  mb-6">Tarun AL</h3>

      {/* Profile Options */}
      <div className="bg-white rounded-lg shadow-md w-full max-w-sm">
        <div className="flex flex-col space-y-4 p-4">
          {/* Settings */}
          <Link to="/settings" className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg">
            <FaCog className="text-indigo-700" size={20} />
            <span className="font-medium">Settings</span>
          </Link>

          {/* My Documents */}
          <Link to="/documents" className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg">
            <FaFileAlt className="text-indigo-700" size={20} />
            <span className="font-medium">My Documents</span>
          </Link>

          {/* Support */}
          {/* <Link to="/support" className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg">
            <FaHandsHelping className="text-indigo-700" size={20} />
            <span className="font-medium">Support</span>
          </Link> */}

          {/* Share */}
          <Link className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg"  onClick={handleShareClick}>
            <FaShareAlt className="text-indigo-700" size={20} />
            <span className="font-medium">Share</span>
          </Link>

          {/* FAQ */}
          <Link to="/faq" className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg">
            <FaQuestionCircle className="text-indigo-700" size={20} />
            <span className="font-medium">FAQ</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
