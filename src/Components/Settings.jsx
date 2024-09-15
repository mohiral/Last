import React from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();  // To navigate between pages

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-500 min-h-screen p-6 w-full max-w-lg mx-auto">
      <div className="bg-indigo-700 text-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>

      <div className="mt-6 max-w-lg mx-auto grid grid-cols-1 gap-4">
        {/* Button for Change Name */}
        <button
          onClick={() => navigate('/change-name')}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left"
        >
          Change Name
        </button>

        {/* Button for About */}
        <button
          onClick={() => navigate('/about')}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left"
        >
          About
        </button>

        {/* Button for Terms and Conditions */}
        <button
          onClick={() => navigate('/terms-and-conditions')}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left"
        >
          Terms and Conditions
        </button>

        {/* Button for Rates */}
        <button
          onClick={() => navigate('/rates')}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left"
        >
          Rates
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
