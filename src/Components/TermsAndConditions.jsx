import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-500 min-h-screen p-6 w-full max-w-lg mx-auto">
      <div className="bg-indigo-700 text-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold">Terms and Conditions</h1>
      </div>

      <div className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <p>
          Please read our terms and conditions carefully before using our service. By renting
          a car from us, you agree to abide by the rules and policies mentioned here...
        </p>
        {/* Add actual terms content here */}
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
