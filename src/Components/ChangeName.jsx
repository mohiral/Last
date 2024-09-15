import React, { useState } from 'react';

const ChangeNamePage = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name changed to: ${name}`);
  };

  return (
    <div className=" bg-gradient-to-r from-indigo-600 to-purple-500 min-h-screen p-6 w-full max-w-lg mx-auto">
      <div className="bg-indigo-700 text-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold">Change Name</h1>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <label className="block text-gray-700 font-medium">New Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mt-2 border rounded-lg"
          placeholder="Enter your new name"
        />
        <button
          type="submit"
          className="mt-4 bg-indigo-700 text-white px-4 py-2 rounded-md w-full"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ChangeNamePage;
