import React from 'react';
import beforeAfterImage from '../../assets/About/after.png';
import backgroundImage from '../../assets/About/before.png';
import leftTreeImage from '../../assets/About/l1.png';  // Left tree image
import rightTreeImage from '../../assets/About/l2.png'; // Right tree image
import rightTree from '../../assets/About/r2.png';
import leftTree from '../../assets/About/r1.png';


const About1 = () => {
  return (
    <div className="relative bg-white"> {/* Set the background color to white */}
      {/* Content Wrapper */}
      <div className="container mx-auto p-6 text-black relative z-10"> {/* Increased container width */}
        <h1 className="text-4xl font-bold text-center mb-12">
          United for a Greener Tomorrow
        </h1>

        {/* Section with Before and After Images (Same Content) */}
        <div className="relative flex items-center justify-center gap-20 mb-12"> {/* Added gap between images */}
          
          {/* Before Image */}
          <div className="relative lg:w-1/3 xl:w-[500px] z-10">
            <img
              src={backgroundImage} // Before image
              alt="Before Impact"
              className="h-[500px] rounded-lg shadow-lg"
            />
            
            {/* Right Tree Image - Positioned behind the After image */}
            <div className="absolute right-[-50px]  z-0">
              <img
                src={leftTreeImage} // Right tree image
                alt="Right Tree"
                className="w-[150px] mt-[-200px] h-[200px] ml-10 mr-10 object-cover"
              />
            </div>
             {/* Right Tree Image - Positioned behind the After image */}
             <div className="absolute left-[-50px]  z-0">
              <img
                src={leftTree } // Right tree image
                alt="left Tree"
                className="w-[100px] mt-[-180px] h-[180px] ml-10 object-cover"
              />
            </div>

            {/* Content on Before Image */}
            <div className="absolute inset-0 p-4">
              <h2 className="text-xl font-bold mb-2">Challenges Faced:</h2>
              <ul className="list-disc pl-6 text-lg">
                <li>Rapid deforestation and declining green cover in local areas.</li>
                <li>Lack of awareness about the importance of trees and environmental conservation.</li>
                <li>Minimal community participation in reforestation or sustainable practices.</li>
                <li>Schools and institutions without active involvement in ecological initiatives.</li>
                <li>No structured efforts to preserve native seeds or promote biodiversity.</li>
              </ul>
            </div>
          </div>

          {/* After Image */}
          <div className="relative md:w-1/2 lg:w-1/3 xl:w-[500px] z-10">
            <img
              src={beforeAfterImage} // After image
              alt="After Impact"
              className="w-[900px]  h-[500px] rounded-lg shadow-lg"
            />
            
            {/* Right Tree Image - Positioned behind the After image */}
            <div className="absolute right-[-50px]  z-0">
              <img
                src={rightTree} // Right tree image
                alt="Right Tree"
                className="w-[150px] mt-[-180px] h-[200px] mr-10 object-cover"
              />
            </div>
             {/* Right Tree Image - Positioned behind the After image */}
             <div className="absolute left-[-50px]  z-0">
              <img
                src={rightTreeImage} // Right tree image
                alt="left Tree"
                 className="w-[100px] mt-[-160px] h-[100px] ml-10 mb-[200px] object-cover"
              />
            </div>

            {/* Content on After Image */}
            <div className="absolute inset-0 p-4">
              <h2 className="text-xl font-bold mb-2">Achievements:</h2>
              <ul className="list-disc pl-6 text-lg">
                <li>Thousands of trees planted, rejuvenating barren lands and improving air quality.</li>
                <li>Increased environmental awareness through workshops, campaigns, and school programs.</li>
                <li>Active community involvement in maintaining green spaces and adopting sustainable practices.</li>
                <li>Schools integrated into tree plantation and eco-awareness projects, fostering future advocates.</li>
                <li>Establishment of seed banks to preserve native plant species and ensure long-term ecological balance.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
