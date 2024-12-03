import React from 'react';

// Import images
import h1 from '../../assets/h1.png'; 
import h2 from '../../assets/h2.png';
import h3 from '../../assets/h3.png';
import h4 from '../../assets/h4.png';
import h5 from '../../assets/h5.png';

const WhatWeStandFor = () => {
  return (
    <section className="mt-[500px] py-16 bg-[#F6F6F6] px-6 md:px-12"> {/* Padding on left and right */}
      {/* Title Section */}
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">
        What We Stand For
      </h2>
      <div className="mt-8 text-center text-gray-700 px-4 md:px-0">
        <p className="text-lg md:text-xl">
          We are a trusted, independent, and authoritative advocate for the environment. 
          We make objective decisions based on the best available scientific evidence and information. 
          We manage our resources effectively and efficiently to deliver value to the public. 
          We regulate in a fair, proportionate, and transparent manner and target those who don’t comply.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center gap-8 mt-12 overflow-x-auto"> {/* Added overflow-x-auto for horizontal scrolling if necessary */}
        {/* Image 1 */}
        <div className="w-full sm:w-1/2 md:w-1/5 flex justify-center animate__animated animate__fadeIn animate__delay-1s">
          <img
            src={h1}
            alt="Independent and Trustworthy"
            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 2 */}
        <div className="w-full sm:w-1/2 md:w-1/5 flex justify-center animate__animated animate__fadeIn animate__delay-2s">
          <img
            src={h2}
            alt="Objective Decisions"
            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 3 */}
        <div className="w-full sm:w-1/2 md:w-1/5 flex justify-center animate__animated animate__fadeIn animate__delay-3s">
          <img
            src={h3}
            alt="Effective Resource Management"
            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 4 */}
        <div className="w-full sm:w-1/2 md:w-1/5 flex justify-center animate__animated animate__fadeIn animate__delay-4s">
          <img
            src={h4}
            alt="Fair and Transparent Regulation"
            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 5 */}
        <div className="w-full sm:w-1/2 md:w-1/5 flex justify-center animate__animated animate__fadeIn animate__delay-5s">
          <img
            src={h5}
            alt="Targeting Non-Compliance"
            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeStandFor; 