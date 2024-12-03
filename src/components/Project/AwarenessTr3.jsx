import React from 'react';

// Importing images from the assets folder
import tr1 from '../../assets/a1.png'; 
import tr2 from '../../assets/a2.png'; 
import tr3 from '../../assets/a3.png'; 
import tr4 from '../../assets/a4.png'; 
import tr5 from '../../assets/a5.png'; 
import tr6 from '../../assets/a6.png'; 
import tr7 from '../../assets/a7.png'; 
import tr8 from '../../assets/a8.png'; 

const AwarenessTr3 = () => {
  return (
    <div className="w-full" style={{ backgroundColor: '#EFEFEF' }}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-[80px] mb-[40px] justify-center">
        {/* Image 1 */}
        <div className="transition-transform transform hover:scale-105 duration-300 ease-in-out mx-4">
          <img className="h-[400px] w-full object-cover rounded-lg" src={tr1} alt="Gallery image 1" />
        </div>
        
        {/* Image 2 */}
        <div className="transition-transform transform hover:scale-105 duration-300 ease-in-out mx-4">
          <img className="h-[400px] w-full object-cover rounded-lg" src={tr2} alt="Gallery image 2" />
        </div>
        
        {/* Image 3 */}
        <div className="transition-transform transform hover:scale-105 duration-300 ease-in-out mx-4">
          <img className="h-[400px] w-full object-cover rounded-lg" src={tr3} alt="Gallery image 3" />
        </div>
        
        {/* Image 4 */}
        <div className="transition-transform transform hover:scale-105 duration-300 ease-in-out mx-4">
          <img className="h-[400px] w-full object-cover rounded-lg" src={tr4} alt="Gallery image 4" />
        </div>
        
        {/* Image 5 */}
        <div className="transition-transform transform hover:scale-105 duration-300 ease-in-out mx-4">
          <img className="h-[400px] w-full object-cover rounded-lg" src={tr5} alt="Gallery image 5" />
        </div>
        
        {/* Image 6 */}
        <div className="transition-transform transform hover:scale-105 duration-300 ease-in-out mx-4">
          <img className="h-[400px] w-full object-cover rounded-lg" src={tr6} alt="Gallery image 6" />
        </div>
        
        {/* Image 7 */}
        <div className="transition-transform transform hover:scale-105 duration-300 ease-in-out mx-4">
          <img className="h-[400px] w-full object-cover rounded-lg" src={tr7} alt="Gallery image 7" />
        </div>
        
        {/* Image 8 */}
        <div className="transition-transform transform hover:scale-105 duration-300 ease-in-out mx-4">
          <img className="h-[400px] w-full object-cover rounded-lg" src={tr8} alt="Gallery image 8" />
        </div>
      </div>
    </div>
  );
};

export default AwarenessTr3;
