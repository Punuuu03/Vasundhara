import React, { useState } from "react";

// Importing local images with 'seed' naming
import seed1 from '../../assets/s1.png';
import seed2 from '../../assets/s2.png';
import seed3 from '../../assets/s3.png';
import seed4 from '../../assets/s4.png';
import seed5 from '../../assets/s5.png';
import seed6 from '../../assets/s6.png';
import seed7 from '../../assets/s7.png';
import seed8 from '../../assets/s8.png';
import seed9 from '../../assets/s9.png';
import seed10 from '../../assets/s10.png';
import seed11 from '../../assets/s11.png';
import seed12 from '../../assets/s12.png';

const ImageGallery = () => {
  const [imageGalleryOpened, setImageGalleryOpened] = useState(false);
  const [imageGalleryActiveUrl, setImageGalleryActiveUrl] = useState(null);
  const [imageGalleryImageIndex, setImageGalleryImageIndex] = useState(null);

  // Array of imported 'seed' images
  const imageGalleryPhotos = [
    seed1,
    seed2,
    seed3,
    seed4,
    seed5,
    seed6,
    seed7,
    seed8,
    seed9,
    seed10,
    seed11,
    seed12,
  ];

  const imageGalleryOpen = (event) => {
    const index = event.target.dataset.index;
    setImageGalleryActiveUrl(event.target.src);
    setImageGalleryImageIndex(index);
    setImageGalleryOpened(true);
  };

  const imageGalleryClose = () => {
    setImageGalleryOpened(false);
    setTimeout(() => setImageGalleryActiveUrl(null), 300);
  };

  const imageGalleryNext = () => {
    let nextIndex =
      imageGalleryImageIndex === imageGalleryPhotos.length
        ? 1
        : parseInt(imageGalleryImageIndex) + 1;
    setImageGalleryImageIndex(nextIndex);
    setImageGalleryActiveUrl(imageGalleryPhotos[nextIndex - 1]);
  };

  const imageGalleryPrev = () => {
    let prevIndex =
      imageGalleryImageIndex === 1
        ? imageGalleryPhotos.length
        : parseInt(imageGalleryImageIndex) - 1;
    setImageGalleryImageIndex(prevIndex);
    setImageGalleryActiveUrl(imageGalleryPhotos[prevIndex - 1]);
  };

  return (
    <main>
      {/* Image Gallery Section */}
      <section>
        <div
          className="w-full h-full select-none"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") imageGalleryNext();
            if (e.key === "ArrowLeft") imageGalleryPrev();
          }}
          tabIndex="0"
        >
          <div className="max-w-7xl mx-auto duration-1000 delay-300  mt-[50px] mb-[50px] opacity-100 select-none ease animate-fade-in-view">
            {/* Image Gallery Thumbnails with 4 images per row */}
            <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4">
              {imageGalleryPhotos.map((src, index) => (
                <li key={index}>
                  <img
                    src={src}
                    alt={`photo gallery image ${index + 1}`}
                    data-index={index + 1}
                    onClick={imageGalleryOpen}
                    className="object-cover select-none w-full h-auto bg-gray-300 rounded cursor-pointer aspect-[5/6] sm:aspect-[4/5] lg:aspect-[2/3] xl:aspect-[3/4] transition-transform duration-200 hover:scale-105"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Full-screen Image Modal with Blur Effect */}
          {imageGalleryOpened && (
            <div
              className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-90 select-none cursor-zoom-out"
              onClick={imageGalleryClose}
            >
              <div className="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
                {/* Previous Image Button */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    imageGalleryPrev();
                  }}
                  className="absolute left-0 flex items-center justify-center text-white translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>

                {/* Modal Container with Dark Background */}
                <div className="relative w-full h-full max-w-3xl bg-gray-800 rounded-lg overflow-hidden shadow-lg px-10 py-4">
                  <img
                    src={imageGalleryActiveUrl}
                    alt=""
                    className="object-contain object-center w-full max-h-[80vh] select-none cursor-zoom-out transition-all duration-300 mx-10"
                  />
                </div>

                {/* Next Image Button */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    imageGalleryNext();
                  }}
                  className="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ImageGallery;
