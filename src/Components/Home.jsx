import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
// import "./HomePage.css"; // Custom CSS

const HomePage = () => {
  const navigate = useNavigate();
  const [offers, setOffers] = useState([]);
  const [location, setLocation] = useState("Jaipur");
  const [showCities, setShowCities] = useState(false);
  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  // Fetch offers from backend
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get("https://last-wruj.onrender.com/offers");
        setOffers(response.data);
      } catch (error) {
        console.error("Error fetching offers", error);
      }
    };

    fetchOffers();
  }, []);

  const features = [
    { icon: "🌟", text: "High Performance" },
    { icon: "🔒", text: "Secure Booking" },
    { icon: "🚗", text: "Wide Range of Cars" },
    { icon: "💬", text: "24/7 Support" },
  ];

  const additionalFeatures = [
    {
      icon: "🛠️",
      title: "Maintenance",
      description: "Regularly serviced and maintained vehicles.",
    },
    {
      icon: "🏆",
      title: "Award Winning",
      description: "Top-rated service in the industry.",
    },
    {
      icon: "📈",
      title: "Growth",
      description: "Expanding network of locations.",
    },
    {
      icon: "💳",
      title: "Flexible Payments",
      description: "Multiple payment options available.",
    },
  ];

  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      comment:
        "Excellent service and friendly staff. The car was in perfect condition!",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment:
        "Great experience. The booking process was smooth and the car was clean.",
    },
    {
      name: "Michael Johnson",
      rating: 5,
      comment:
        "Highly recommend! The rates are competitive and the support is top-notch.",
    },
    {
      name: "Emily Davis",
      rating: 3,
      comment:
        "Good service, but there were some delays in the pickup. Overall, satisfied.",
    },
  ];

  const cities = ["Jaipur", "Delhi", "Mumbai", "Bangalore"];

  const toggleCityDropdown = () => setShowCities(!showCities);

  const handleCityClick = (city) => {
    setLocation(city);
    setShowCities(false);
  };

  const offerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true,
  };

  const featureSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const additionalFeatureSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const reviewSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-500 flex flex-col items-center w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="bg-white text-indigo-800 py-4 w-full text-center rounded-b-xl shadow-lg">
        <h1 className="text-3xl font-bold">ARCH RENTALS</h1>
        <p className="text-lg">SELF DRIVE CARS</p>
      </div>

      {/* Search Section */}
      <div className="bg-white w-11/12 max-w-md my-6 p-8 rounded-xl shadow-lg space-y-6">
        <div className="relative p-4 border border-gray-300 rounded-lg">
          <p className="text-gray-600 text-lg flex items-center">
            <FaLocationDot className="mr-2" /> Location
          </p>
          <h2
            className="font-bold text-2xl cursor-pointer text-indigo-600"
            onClick={toggleCityDropdown}
          >
            {location}
          </h2>

          {showCities && (
            <div className="absolute left-0 right-0 top-16 bg-white border border-gray-300 rounded-lg shadow-lg z-10 w-full">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-indigo-100 cursor-pointer text-gray-800 text-left"
                  onClick={() => handleCityClick(city)}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="text-center border border-gray-300 rounded-xl p-4">
            <p className="text-gray-600">Pick-up date</p>
            <DatePicker
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
              showTimeSelect
              dateFormat="dd MMMM yyyy, h:mm aa"
              className="font-bold text-center w-full bg-white cursor-pointer"
            />
          </div>

          <div className="text-center border border-gray-300 rounded-lg p-4">
            <p className="text-gray-600">Return date</p>
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              showTimeSelect
              dateFormat="dd MMMM yyyy, h:mm aa"
              minDate={new Date(pickupDate.getTime() + 24 * 60 * 60 * 1000)}
              className="font-bold text-center w-full bg-white rounded-lg py-1 cursor-pointer"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/car")}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 ease-in-out w-full"
          >
            Search
          </button>
        </div>
      </div>

      {/* Offer Section */}
      <div className=" w-11/12 max-w-md p-6 rounded-xl shadow-lg mb-6 bg-white">
        <h2 className="text-xl font-bold mb-4">Trending Offers</h2>
        <Slider {...offerSettings}>
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg flex justify-between "
            >
              <img className="rounded-lg" src={offer.img} alt="Offer" />
              <div className="ml-4">
                <h3 className="font-bold ">{offer.title}</h3>
                <p>
                  Use Code:{" "}
                  <span className="font-bold text-indigo-500">{offer.code}</span>
                </p>
                <p className="text-sm text-gray-600">{offer.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Feature Section */}
      <div className="bg-white w-11/12 max-w-md p-6 rounded-xl shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Features</h2>
        <Slider {...featureSettings}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 border border-gray-300 rounded-lg"
              style={{ width: "250px", margin: "0 auto" }}
            >
              <div className="text-indigo-600 text-3xl">{feature.icon}</div>
              <div className="text-indigo-600">
                <p className="font-bold">{feature.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Additional Features Section */}
      <div className="bg-white w-11/12 max-w-md p-6 rounded-xl shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Additional Features</h2>
        <Slider {...additionalFeatureSettings}>
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 border border-gray-300 rounded-lg"
              style={{ width: "250px", margin: "0 auto" }}
            >
              <div className="text-indigo-600 text-3xl">{feature.icon}</div>
              <div className="text-indigo-600">
                <h3 className="font-bold">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Review Section */}
      <div className="bg-white w-11/12 max-w-md p-6 rounded-xl shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
        <Slider {...reviewSettings}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-4 border border-gray-300 rounded-lg"
              style={{ width: "250px", margin: "0 auto" }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-yellow-500 text-2xl">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </span>
                <span className="font-bold">{review.name}</span>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePage;
