import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CarSelectionPage = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null); // Track the selected car
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('https://last-2-mmup.onrender.com/cars'); // Fetch car data
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCars();
  }, []);

  const openModal = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-500 min-h-screen p-4 w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="bg-indigo-700 p-4 text-white">
        <h2 className="text-center text-xl font-semibold">Select Your Car</h2>

        {/* Location, Pick-up, Return Section */}
        <div className="flex justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-gray-200">Location:</span>
            <span>Jaipur</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-200">Pick-up:</span>
            <span>08 Sep 2024</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-200">Return:</span>
            <span>11 Sep 2024</span>
          </div>
        </div>
      </div>

      {/* Cars List */}
      <div className="mt-6 grid grid-cols-1 gap-4">
        {cars.map((car, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <img
                src={car.imgUrl}
                alt={car.name}
                className="w-32 h-20 object-cover rounded-md"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <div className="text-gray-600">{car.type} | {car.fuel}</div>
                <div className="text-gray-600 mb-2">{car.capacity}</div>
              </div>
            </div>

            {/* Price Section with Borders */}
            <div className="grid grid-cols-3 gap-2 mt-4 border-t border-gray-300 pt-4">
              <div className="border rounded-lg p-2">
                <div className="text-gray-700">120kms/day</div>
                <div className="font-bold">₹{car.price[120]}</div>
                <div className="text-gray-500">{car.kms[120]} Free kms</div>
              </div>
              <div className="border rounded-lg p-2">
                <div className="text-gray-700">300kms/day</div>
                <div className="font-bold">₹{car.price[300]}</div>
                <div className="text-gray-500">{car.kms[300]} Free kms</div>
              </div>
              <div className="border rounded-lg p-2">
                <div className="text-gray-700">Unlimited</div>
                <div className="font-bold">₹{car.price.unlimited}</div>
                <div className="text-gray-500">Unlimited kms</div>
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <button
                className="bg-gray-200 text-indigo-700 px-4 py-2 rounded-md"
                onClick={() => openModal(car)} // Open modal with car details
              >
                View Details
              </button>
              <button className="bg-indigo-700 text-white px-4 py-2 rounded-md">
                <Link to='/booking'>
                Book Now

                </Link>
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* Modal Component */}
      {isModalOpen && selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={closeModal} // Close modal on click
            >
              ✕
            </button>
            <h3 className="text-2xl font-semibold mb-4">{selectedCar.name}</h3>
            <img
              src={selectedCar.imgUrl}
              alt={selectedCar.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="text-gray-700 mb-2">
              <strong>Type:</strong> {selectedCar.type}
            </div>
            <div className="text-gray-700 mb-2">
              <strong>Fuel:</strong> {selectedCar.fuel}
            </div>
            <div className="text-gray-700 mb-2">
              <strong>Capacity:</strong> {selectedCar.capacity}
            </div>
            <div className="text-gray-700 mb-4">
              <strong>Description:</strong> {selectedCar.description}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="border rounded-lg p-2">
                <div className="text-gray-700">120kms/day</div>
                <div className="font-bold">₹{selectedCar.price[120]}</div>
                <div className="text-gray-500">
                  {selectedCar.kms[120]} Free kms
                </div>
              </div>
              <div className="border rounded-lg p-2">
                <div className="text-gray-700">300kms/day</div>
                <div className="font-bold">₹{selectedCar.price[300]}</div>
                <div className="text-gray-500">
                  {selectedCar.kms[300]} Free kms
                </div>
              </div>
              <div className="border rounded-lg p-2">
                <div className="text-gray-700">Unlimited</div>
                <div className="font-bold">₹{selectedCar.price.unlimited}</div>
                <div className="text-gray-500">Unlimited kms</div>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <button className="bg-indigo-700 text-white px-4 py-2 rounded-md">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarSelectionPage;
