import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to AL Official Group</h1>
        <p className="text-gray-600 mb-8">
          This is the home page of your application. Navigate using the sidebar and explore the features.
        </p>
        <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
