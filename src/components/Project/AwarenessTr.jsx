import React from 'react';
import homeImage from '../../assets/aware.png'; // Import the background image properly

function AwarenessTr() {
  return (
    <section className="relative py-16">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={homeImage} // Use the imported background image
          alt="Background"
          className="w-[1920px] h-[787px] object-cover"
          style={{ width: '2000px', height: '600px', top: '100px' }} // Adjust top margin for the image
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-left">
        {/* Left-Aligned Text */}
        <div className="absolute left-8 top-1/4 text-white">
          <p className="text-5xl font-bold mb-6">
          Awareness
          </p>
          
        </div>
      </div>
    </section>
  );
}

export default AwarenessTr;
