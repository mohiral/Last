import React from 'react';

const RatesPage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-500 min-h-screen p-6 w-full max-w-lg mx-auto">
      <div className="bg-indigo-700 text-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold">Rates</h1>
      </div>

      <div className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <p>
          Our car rental rates are competitive and transparent. Choose from our various plans
          based on your travel needs. Prices are inclusive of taxes and insurance...
        </p>
        {/* Add actual rate details here */}
      </div>
    </div>
  );
};

export default RatesPage;
