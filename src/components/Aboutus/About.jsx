import React, { useState } from 'react';
import beforeImage1 from '../../assets/im1.png';
import afterImage1 from '../../assets/im2.png';
import beforeImage2 from '../../assets/im3.png';
import afterImage2 from '../../assets/im4.png';
import beforeImage3 from '../../assets/im5.png';
import afterImage3 from '../../assets/im6.png';

const images = [
  { before: beforeImage1, after: afterImage1 },
  { before: beforeImage2, after: afterImage2 },
  { before: beforeImage3, after: afterImage3 },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image pair
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop to first image when reaching the end
  };

  // Function to go to the previous image pair
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Loop to last image when reaching the start
  };

  return (
    <div className="relative bg-black h-[350px]">
      {/* Section with Before and After Images */}
      <div className="container mx-auto p-6 mb-12">
        {/* Grid Layout for Current Image Pair */}
        <div className="relative flex items-center justify-center space-x-4">
          {/* Before Image */}
          <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            {/* Black overlay with transitions */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg transition-all duration-500"></div>
            <img
              src={images[currentIndex].before}
              alt={`Before Impact ${currentIndex + 1}`}
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform duration-700 ease-in-out scale-95 hover:scale-100"
            />
            <div className="absolute top-0 left-0 bg-opacity-50 bg-black text-white p-4 rounded-lg text-xl font-bold">
              Before Impact
            </div>
          </div>

          {/* After Image */}
          <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            {/* Black overlay with transitions */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg transition-all duration-500"></div>
            <img
              src={images[currentIndex].after}
              alt={`After Impact ${currentIndex + 1}`}
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform duration-700 ease-in-out scale-95 hover:scale-100"
            />
            <div className="absolute top-0 left-0 bg-opacity-50 bg-black text-white p-4 rounded-lg text-xl font-bold">
              After Impact
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 cursor-pointer"
          onClick={prevImage}
        >
          {/* Left Arrow (Angular-style) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-white hover:text-gray-400 transition duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 12H5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19l-7-7 7-7"
            />
          </svg>
        </div>

        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 cursor-pointer"
          onClick={nextImage}
        >
          {/* Right Arrow (Angular-style) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-white hover:text-gray-400 transition duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;
