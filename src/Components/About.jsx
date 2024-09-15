import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-500 min-h-screen p-6 w-full max-w-lg mx-auto">
      <div className="bg-indigo-700 text-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold">About Us</h1>
      </div>

      <div className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <p>
          Welcome to our car rental service. We provide affordable and reliable car rentals for
          all your travel needs. Our mission is to offer seamless and hassle-free experiences.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
