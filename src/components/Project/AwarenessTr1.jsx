import React from 'react';

const AwarenessCards = () => {
  return (
    <div className="flex space-x-4 mt-12 justify-center mt-[600px] mb-[100px]">
      {/* Card 1: Understanding the Importance of Tree Plantation */}
      <div className="max-w-sm bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <div className="p-20"> {/* Increased padding */}
          <h3 className="text-xl font-semibold mb-2">Understanding the Importance of Tree Plantation</h3>
          <p className="text-gray-700 text-base">
            Raising awareness involves showcasing how trees support biodiversity by providing habitats for wildlife and maintaining soil quality.
          </p>
        </div>
      </div>

      {/* Card 2: The Need to Protect Ecosystems */}
      <div className="max-w-sm bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <div className="p-20"> {/* Increased padding */}
          <h3 className="text-xl font-semibold mb-2">The Need to Protect Ecosystems</h3>
          <p className="text-gray-700 text-base">
            Awareness campaigns aim to inspire collective action by showing the positive impact of tree plantation on combating climate change and beautifying surroundings.
          </p>
        </div>
      </div>

      {/* Card 3: Inspiring Action Through Knowledge */}
      <div className="max-w-sm bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <div className="p-20"> {/* Increased padding */}
          <h3 className="text-xl font-semibold mb-2">Inspiring Action Through Knowledge</h3>
          <p className="text-gray-700 text-base">
            By spreading this knowledge, people are encouraged to participate in plantation drives, fostering a shared responsibility for a greener future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AwarenessCards;
