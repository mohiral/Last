import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [car, setCar] = useState({
    name: '',
    price120: '',
    price300: '',
    priceUnlimited: '',
    kms120: '',
    kms300: '',
    type: '',
    fuel: '',
    capacity: '',
    imgUrl: '',
  });

  const [cars, setCars] = useState([]);
  const [editingCarId, setEditingCarId] = useState(null); // State for managing which car is being edited

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('https://last-wruj.onrender.com/cars');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };
    fetchCars();
  }, []);

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const carData = {
      name: car.name,
      price: {
        120: parseInt(car.price120),
        300: parseInt(car.price300),
        unlimited: parseInt(car.priceUnlimited),
      },
      kms: {
        120: parseInt(car.kms120),
        300: parseInt(car.kms300),
      },
      type: car.type,
      fuel: car.fuel,
      capacity: car.capacity,
      imgUrl: car.imgUrl,
    };

    try {
      if (editingCarId) {
        // Edit existing car
        const response = await axios.put(`https://last-wruj.onrender.com/cars/${editingCarId}`, carData);
        setCars(cars.map(c => (c._id === editingCarId ? response.data : c)));
        setEditingCarId(null); // Clear editing state
      } else {
        // Add new car
        const response = await axios.post('https://last-wruj.onrender.com/cars', carData);
        setCars([...cars, response.data]);
      }

      alert('Car saved successfully');
      setCar({
        name: '',
        price120: '',
        price300: '',
        priceUnlimited: '',
        kms120: '',
        kms300: '',
        type: '',
        fuel: '',
        capacity: '',
        imgUrl: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (carToEdit) => {
    setCar({
      name: carToEdit.name,
      price120: carToEdit.price[120],
      price300: carToEdit.price[300],
      priceUnlimited: carToEdit.price.unlimited,
      kms120: carToEdit.kms[120],
      kms300: carToEdit.kms[300],
      type: carToEdit.type,
      fuel: carToEdit.fuel,
      capacity: carToEdit.capacity,
      imgUrl: carToEdit.imgUrl,
    });
    setEditingCarId(carToEdit._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://last-wruj.onrender.com/cars/${id}`);
      setCars(cars.filter(car => car._id !== id));
      alert('Car deleted successfully');
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        {editingCarId ? 'Edit Car' : 'Add New Car'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Car Name"
            value={car.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            name="price120"
            placeholder="Price for 120kms/day"
            value={car.price120}
            onChange={handleChange}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            name="price300"
            placeholder="Price for 300kms/day"
            value={car.price300}
            onChange={handleChange}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            name="priceUnlimited"
            placeholder="Price for unlimited kms/day"
            value={car.priceUnlimited}
            onChange={handleChange}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            name="kms120"
            placeholder="Free Kms for 120kms/day"
            value={car.kms120}
            onChange={handleChange}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            name="kms300"
            placeholder="Free Kms for 300kms/day"
            value={car.kms300}
            onChange={handleChange}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="type"
            placeholder="Car Type (Manual/Automatic)"
            value={car.type}
            onChange={handleChange}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="fuel"
            placeholder="Fuel Type (Diesel/Petrol)"
            value={car.fuel}
            onChange={handleChange}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="capacity"
            placeholder="Capacity (e.g., 2 Baggage | 5 Seater)"
            value={car.capacity}
            onChange={handleChange}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="imgUrl"
            placeholder="Image URL"
            value={car.imgUrl}
            onChange={handleChange}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {editingCarId ? 'Update Car' : 'Add Car'}
        </button>
      </form>

      <h2 className="text-2xl font-semibold my-6 text-gray-800">Car List</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3 text-left text-gray-600">Name</th>
              <th className="p-3 text-left text-gray-600">Price (120 kms/day)</th>
              <th className="p-3 text-left text-gray-600">Price (300 kms/day)</th>
              <th className="p-3 text-left text-gray-600">Price (Unlimited kms/day)</th>
              <th className="p-3 text-left text-gray-600">Fuel</th>
              <th className="p-3 text-left text-gray-600">Capacity</th>
              <th className="p-3 text-left text-gray-600">Image</th>
              <th className="p-3 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{car.name}</td>
                <td className="p-3">{car.price[120]}</td>
                <td className="p-3">{car.price[300]}</td>
                <td className="p-3">{car.price.unlimited}</td>
                <td className="p-3">{car.fuel}</td>
                <td className="p-3">{car.capacity}</td>
                <td className="p-3">
                  <img src={car.imgUrl} alt={car.name} className="w-24 h-auto rounded-md" />
                </td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(car)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(car._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
