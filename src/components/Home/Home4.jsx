import React from 'react';
import missionImage from '../../assets/mission.png';  // Import the first image
import visionImage from '../../assets/vision.png';    // Import the second image
import backgroundImage from '../../assets/missionbg.png';  // Import the background image

const MissionVision = () => {
  return (
    <section 
      className="relative min-h-screen mb-[-50px] flex flex-col justify-center items-center bg-cover bg-center px-6 md:px-12 text-white"  // Fullscreen and center content
      style={{ 
        backgroundImage: `url(${backgroundImage})`,  // Set the imported image as the background
        backgroundSize: '1700px 1000px',  // Specify the exact size for the background image
        backgroundPosition: 'center',  // Center the background image
        backgroundRepeat: 'no-repeat'  // Prevent repeating the background image
      }}
    >
      <div className="relative z-10 text-center">  {/* Ensure the content is above the background */}
        {/* Title Section */}
        <h2 className="text-4xl mt-10 font-bold mb-8">
          Our Mission & Vision
        </h2>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:ml-[100px]">
            <img
              src={missionImage}
              alt="Mission Image"
              className="w-full md:w-[600px] h-auto rounded-lg shadow-md"  // Adjust image size for mobile
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h3 className="text-3xl font-semibold mb-4">OUR MISSION</h3>
            <ul className="text-lg">
              <li className="mb-4">To plant and grow as many trees to match at least 1 tree per person for the entire population.</li>
              <li className="mb-4">To protect and improve the environment as a valuable asset for the people living in urban & rural areas.</li>
              <li className="mb-4">To protect our people and the environment from harmful effects of radiation and pollution.</li>
            </ul>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="w-full md:w-1/2 p-6">
            <h3 className="text-3xl font-semibold mb-4">OUR VISION</h3>
            <p className="text-lg">
              To become a leader in tree planting services to build a green future for our future generation, provide them with a hospitable environment, and set them free to breathe in clean air by saving Mother Nature through planting more trees.
            </p>
          </div>
          <div className="w-full md:w-1/2 md:ml-12">
            <img
              src={visionImage}
              alt="Vision Image"
              className="w-full md:w-[600px] h-auto rounded-lg shadow-md"  // Adjust image size for mobile
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
