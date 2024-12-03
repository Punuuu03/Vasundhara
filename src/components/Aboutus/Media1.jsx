import React, { useState } from 'react';

// Import images
import n1Image from '../../assets/n1.png';
import n2Image from '../../assets/n2.png';
import n3Image from '../../assets/n3.png';
import n4Image from '../../assets/n4.png';
import brandyImage from '../../assets/n4.png'; // Assuming brandyImage should be n4Image (correct if different)

const ProductGrid = () => {
  // State to control the modal visibility and the selected image
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the modal and set the selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="bg-[#f6f6f6] -mt-5 ">
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 w-full h-full">

          {/* Wine Section */}
          <div className="col-span-2  sm:col-span-1 md:col-span-2 bg-gray-50 md:h-[500px] flex flex-col">
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow border-2 border-black"
              onClick={() => openModal(n1Image)}
            >
              <img 
                src={n1Image} 
                alt="Wines" 
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 group-hover:brightness-110 group-hover:blur-sm transition-all duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </a>
          </div>

          {/* Gin Section */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <a
              href="#"
              className="group relative flex h-60 flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 border-2 border-black"
              onClick={() => openModal(n2Image)}
            >
              <img 
                src={n2Image} 
                alt="Gin" 
                className="absolute inset-0 h-[400px] w-[600px] object-cover group-hover:scale-110 group-hover:brightness-110 group-hover:blur-sm transition-all duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </a>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              
              {/* Whiskey Section */}
              <a
                href="#"
                className="group relative flex h-60 flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 border-2 border-black"
                onClick={() => openModal(n3Image)}
              >
                <img 
                  src={n3Image} 
                  alt="Whiskey" 
                  className="absolute inset-0 h-[250px] w-[750px] object-cover group-hover:scale-110 group-hover:brightness-110 group-hover:blur-sm transition-all duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </a>
              {/* Vodka Section */}
            </div>
          </div>

          {/* Brandy Section */}
          <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow border-2 border-black"
              onClick={() => openModal(brandyImage)}
            >
              <img 
                src={brandyImage} 
                alt="Brandy" 
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 group-hover:brightness-110 group-hover:blur-sm transition-all duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Modal to display the selected image */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg">
            <button 
              className="absolute top-0 right-0 p-2 text-white bg-black rounded-full"
              onClick={closeModal}
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Large View" 
              className="max-w-[90vw] max-h-[90vh] object-contain" 
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
