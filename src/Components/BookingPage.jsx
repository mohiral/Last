import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookingPage = ({ selectedCar = {} }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    pickUpLocation: 'Jaipur', // Default value
    pickUpDate: '',
    pickUpTime: '',
    returnDate: '',
    returnTime: '',
    pricingPlan: '120', // Default pricing plan
    extras: {
      insurance: false,
      driver: false,
    },
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        extras: { ...formData.extras, [name]: checked },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend me booking data send karne ka logic yaha ayega
    console.log(formData);
    alert('Booking Successful!');
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-500 p-4 min-h-screen flex items-center justify-center  w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Book {selectedCar.name || 'Car'}</h2>

        {/* User Information */}
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        {/* Pick-up and Return Information */}
        <div className="mb-4">
          <label className="block text-gray-700">Pick-up Date</label>
          <input
            type="date"
            name="pickUpDate"
            value={formData.pickUpDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Pick-up Time</label>
          <input
            type="time"
            name="pickUpTime"
            value={formData.pickUpTime}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Return Date</label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Return Time</label>
          <input
            type="time"
            name="returnTime"
            value={formData.returnTime}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        {/* Pricing Plan */}
        <div className="mb-4">
          <label className="block text-gray-700">Select Pricing Plan</label>
          <select
            name="pricingPlan"
            value={formData.pricingPlan}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="120">120 kms/day - ₹{selectedCar.price?.[120] || 'N/A'}</option>
            <option value="300">300 kms/day - ₹{selectedCar.price?.[300] || 'N/A'}</option>
            <option value="unlimited">Unlimited kms - ₹{selectedCar.price?.unlimited || 'N/A'}</option>
          </select>
        </div>

        {/* Extra Services */}
        <div className="mb-4">
          <label className="block text-gray-700">Extra Services</label>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="insurance"
              checked={formData.extras.insurance}
              onChange={handleChange}
              className="mr-2"
            />
            <label>Insurance</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="driver"
              checked={formData.extras.driver}
              onChange={handleChange}
              className="mr-2"
            />
            <label>Driver Service</label>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-4">
          <label className="block text-gray-700">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="netbanking">Netbanking</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-indigo-700 text-white px-4 py-2 rounded-md w-full"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

BookingPage.propTypes = {
  selectedCar: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.shape({
      120: PropTypes.number,
      300: PropTypes.number,
      unlimited: PropTypes.number,
    }),
  }),
};

export default BookingPage;
