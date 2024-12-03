import React from 'react';

// Import team member photos
import kishorImage from '../../assets/About/kishor.png';  // Replace with actual image path
import sandeepImage from '../../assets/About/sandeep.png';  // Replace with actual image path
import aniketImage from '../../assets/About/aniket.png';  // Replace with actual image path
import ankushImage from '../../assets/About/ankush.png';  // Replace with actual image path
import avinashImage from '../../assets/About/avinash.png';  // Replace with actual image path
import uttamImage from '../../assets/About/uttam.png';  // Replace with actual image path
import backgroundImage from '../../assets/About/bg.png';

const Team = () => {
  return (
    <section
      className="py-16 px-6 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Add your background image path here
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Title Section */}
      <h2 className="text-4xl font-bold mt-[500px] text-center text-black mb-8">
        Team Vasundhara’s Green Guardians
      </h2>

      <div className="text-center text-gray-700 mb-8 px-4">
        <p className="text-lg md:text-xl">
          We are a trusted, independent, and authoritative advocate for the environment.
        </p>
      </div>

      {/* Team Members Section */}
      <div className="flex justify-center gap-6">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center">
          <img
            src={kishorImage}
            alt="Kishor Garade"
            className="w-[200px] h-[200px] object-contain mb-2" // Adjust image size and margin
          />
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center">
          <img
            src={sandeepImage}
            alt="Sandeep Kunjeer"
            className="w-[200px] h-[200px] object-contain mb-2"
          />
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center">
          <img
            src={aniketImage}
            alt="Aniket Kunjeer"
            className="w-[200px] h-[200px] object-contain mb-2"
          />
        </div>

        {/* Team Member 4 */}
        <div className="flex flex-col items-center">
          <img
            src={ankushImage}
            alt="Ankush Bhokase"
            className="w-[200px] h-[200px] object-contain mb-2"
          />
        </div>

        {/* Team Member 5 */}
        <div className="flex flex-col items-center">
          <img
            src={avinashImage}
            alt="Avinash Gopale"
            className="w-[200px] h-[200px] object-contain mb-2"
          />
        </div>

        {/* Team Member 6 */}
        <div className="flex flex-col items-center">
          <img
            src={uttamImage}
            alt="Uttam Shinde"
            className="w-[200px] h-[200px] object-contain mb-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
