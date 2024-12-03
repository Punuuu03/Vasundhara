import React from 'react';

// Importing images from the assets folder
import tr1 from '../../assets/tr1.png'; 
import tr2 from '../../assets/tr2.png'; 
import tr3 from '../../assets/tr3.png'; 
import tr4 from '../../assets/tr4.png'; 
import tr5 from '../../assets/tr5.png'; 
import tr6 from '../../assets/tr6.png'; 
import tr7 from '../../assets/tr7.png'; 
import tr8 from '../../assets/tr8.png'; 

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[20px] -mt-40 mb-[40px]">
      <div className="transition-transform transform hover:scale-105 duration-500 ease-in-out hover:shadow-lg hover:border-2 hover:border-blue-500 rounded-lg">
        <img className="h-[400px] w-full object-cover rounded-lg" src={tr1} alt="Gallery image 1" />
      </div>
      <div className="transition-transform transform hover:scale-105 duration-500 ease-in-out hover:shadow-lg hover:border-2 hover:border-blue-500 rounded-lg">
        <img className="h-[400px] w-full object-cover rounded-lg" src={tr2} alt="Gallery image 2" />
      </div>
      <div className="transition-transform transform hover:scale-105 duration-500 ease-in-out hover:shadow-lg hover:border-2 hover:border-blue-500 rounded-lg">
        <img className="h-[400px] w-full object-cover rounded-lg" src={tr3} alt="Gallery image 3" />
      </div>
      <div className="transition-transform transform hover:scale-105 duration-500 ease-in-out hover:shadow-lg hover:border-2 hover:border-blue-500 rounded-lg">
        <img className="h-[400px] w-full object-cover rounded-lg" src={tr4} alt="Gallery image 4" />
      </div>
      <div className="transition-transform transform hover:scale-105 duration-500 ease-in-out hover:shadow-lg hover:border-2 hover:border-blue-500 rounded-lg">
        <img className="h-[400px] w-full object-cover rounded-lg" src={tr5} alt="Gallery image 5" />
      </div>
      <div className="transition-transform transform hover:scale-105 duration-500 ease-in-out hover:shadow-lg hover:border-2 hover:border-blue-500 rounded-lg">
        <img className="h-[400px] w-full object-cover rounded-lg" src={tr6} alt="Gallery image 6" />
      </div>
      <div className="transition-transform transform hover:scale-105 duration-500 ease-in-out hover:shadow-lg hover:border-2 hover:border-blue-500 rounded-lg">
        <img className="h-[400px] w-full object-cover rounded-lg" src={tr7} alt="Gallery image 7" />
      </div>
      <div className="transition-transform transform hover:scale-105 duration-500 ease-in-out hover:shadow-lg hover:border-2 hover:border-blue-500 rounded-lg">
        <img className="h-[400px] w-full object-cover rounded-lg" src={tr8} alt="Gallery image 8" />
      </div>
    </div>
  );
};

export default ImageGallery;
