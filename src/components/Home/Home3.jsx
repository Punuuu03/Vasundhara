import React from 'react';

// Importing images for cards
import treeImage from '../../assets/tree.png'; 
import awarenessImage from '../../assets/awareness.png';
import seedBankImage from '../../assets/seedbank.png';
import sustainableImage from '../../assets/sustainable.png';

const OurServices = () => {
  return (
    <section className="py-16 bg-[#F6F6F6] px-6 md:px-12">
      {/* Title Section */}
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Our Services
      </h2>

      <div className="text-center text-gray-700 mb-8 px-4">
        <p className="text-lg md:text-xl">
          We promote sustainability through tree plantation drives, environmental awareness programs, tree planting initiatives in schools, and maintaining a robust seed bank. Join us in growing a greener future!
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 mx-auto max-w-screen-xl">
        {/* Tree Plantation Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <img
            src={treeImage}
            alt="Tree Plantation"
            className="w-48 h-48 rounded-full border-4 border-green-500 mb-4"
          />
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 text-center mb-4">Tree Plantation</h3>
            <p className="text-gray-700 text-center">
              Tree plantation is vital for restoring ecosystems, improving air quality, and ensuring a sustainable future.
            </p>
          </div>
        </div>

        {/* Awareness Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <img
            src={awarenessImage}
            alt="Awareness"
            className="w-48 h-48 rounded-full border-4 border-green-500 mb-4"
          />
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 text-center mb-4">Awareness</h3>
            <p className="text-gray-700 text-center">
              We conduct environmental awareness programs to inform communities about the importance of sustainability.
            </p>
          </div>
        </div>

        {/* Seed Bank Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <img
            src={seedBankImage}
            alt="Seed Bank"
            className="w-48 h-48 rounded-full border-4 border-green-500 mb-4"
          />
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 text-center mb-4">Seed Bank</h3>
            <p className="text-gray-700 text-center">
              We maintain a robust seed bank to preserve native plant species and ensure their availability for future restoration projects.
            </p>
          </div>
        </div>

        {/* Sustainable Future Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <div className="w-48 h-48 rounded-full border-4 border-green-500 mb-4">
            <img
              src={sustainableImage}
              alt="Sustainable Future"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 text-center mb-4">Sustainable Future</h3>
            <p className="text-gray-700 text-center">
              Join us in promoting sustainability and making a positive impact on the environment through various green initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
