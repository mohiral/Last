import React, { useState } from "react";

// import img1 from '../assets/pngwing(1).png'
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';


const Slider = ({ onSkip }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    { src: img1, alt: "Car 1" },
    { src: img2, alt: "Car 2" },
    { src: img3, alt: "Car 3" },
    { src: img4, alt: "Car 4" },
  ];

  const handleNext = () => {
    if (slideIndex === images.length - 1) {
      // Trigger the 'Get Started' behavior on the last slide
      onSkip();
    } else {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div className="h-screen">
      <div className="w-full max-w-lg  bg-gradient-to-r from-indigo-600 to-purple-500 p-6 rounded-lg shadow-lg text-center mx-auto">
        {/* Image */}
        <img
          src={images[slideIndex].src}
          alt={images[slideIndex].alt}
          className="mx-auto mb-4 w-full h-auto rounded-xl"
        />

        {/* Slider Heading */}
        {/* <h2 className="text-xl font-semibold mb-4">
          Choose From Our Wide Range of Self-Drive Cars
        </h2> */}

        {/* Dots */}
        <div className="flex justify-center items-center mb-4">
          {images.map((_, index) => (
            <span
              key={index}
              className={`mx-1 w-2 h-2 rounded-full ${
                slideIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>

        {/* Buttons */}
        <div className={`flex ${slideIndex === images.length - 1 ? "justify-center" : "justify-between"}`}>
          {/* Skip Button - Hide on last slide */}
          {slideIndex !== images.length - 1 && (
            <button
              className="bg-gray-200 py-2 px-6 rounded-lg text-gray-700"
              onClick={onSkip}
            >
              Skip
            </button>
          )}

          {/* Conditional 'Next' or 'Get Started' Button */}
          <button
            className={`py-2 px-6 rounded-lg text-white ${
              slideIndex === images.length - 1
                ? "bg-green-600"
                : "bg-blue-600"
            }`}
            onClick={handleNext}
          >
            {slideIndex === images.length - 1 ? "Get Started" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
