import React from 'react';
import homeImage from '../../assets/home.png'; // Import the background image properly


function Home() {
  return (
    
    <section className="relative py-16">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full min-h-screen">
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
            VASUNDHARA <br /> PARYAVARAN SAVRDHAN SANSTHA
          </h1>
          <p className="text-lg font-semibold mb-6">
            Look deep into nature, and you will understand everything better.
          </p>
          
          {/* Logo */}
         
        </div>
      </div>
    </section>
  );
}

export default Home;
