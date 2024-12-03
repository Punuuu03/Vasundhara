import React from 'react';
import homeImage from '../../assets/contact.png'; // Import the background image properly

function Contact() {
  return (
    <>
      {/* Background Image Section */}
      <section className="relative py-16">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={homeImage} // Use the imported background image
            alt="Background"
            className="w-full h-full object-cover"
            style={{ width: '100%', height: '400px', top: '0' }} // Ensure it's properly covering the area
          />
        </div>

        {/* Content Section */}
        <div className="relative z-10 max-w-screen-xl mt-40 mx-auto px-2 text-left">
  {/* Centered Text */}
  <div className="absolute inset-0 flex items-center justify-center text-white"> {/* Using flex to center the text */}
    <h1 className="text-5xl font-extrabold mb-4">Contact us</h1>
  </div>
</div>

      </section>

      

      
    </>
  );
}

export default Contact;
