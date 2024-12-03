import React from 'react';
import homeImage from '../../assets/About/aboutus.png'; // Import the background image properly

function About() {
  return (
    <section className="relative py-16">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full ">
        <img
          src={homeImage} // Use the imported background image
          alt="Background"
          className="w-full h-full object-cover"
          style={{ width: '2000px', height: '600px', top: '100px' }} // Set specific size and position
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-left">
        {/* Left-Aligned Text */}
        <div className="absolute left-8 top-1/4 text-white">
          <h1 className="text-5xl font-extrabold mb-4">
            About Us
          </h1>
          <p className="text-2xl font-semibold mb-6">
            United for a Greener Tomorrow
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
