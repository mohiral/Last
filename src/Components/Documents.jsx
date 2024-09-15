import React from 'react';

const DocumentsPage = () => {
  const documents = [
    { name: 'Aadhar Front' },
    { name: 'Aadhar Back' },
    { name: 'PAN Card' },
    { name: 'Driving License Front' },
    { name: 'Driving License Back' },
  ];

  return (
    <div className=" bg-gradient-to-r from-indigo-600 to-purple-500 min-h-screen p-6 w-full max-w-lg mx-auto">
      <div className="bg-indigo-700 text-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold">Upload Your Documents</h1>
        <p className="mt-2">Please upload the following documents for verification.</p>
      </div>

      {/* Documents List */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 max-w-4xl mx-auto">
        {documents.map((document, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
          >
            <div className="text-xl font-medium text-gray-700 mb-4">{document.name}</div>
            <button className="bg-indigo-700 text-white px-4 py-2 rounded-md">
              Upload
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsPage;
