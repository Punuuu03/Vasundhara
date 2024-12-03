import React from 'react';
import treeBackgroundImage from '../../assets/treepl2.png'; // Import a background image of trees or nature
import treeVideo from '../../assets/tree-plantation-video.mp4'; // Import the video file

const TreePlantationPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Explicit Width and Height */}
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: `url(${treeBackgroundImage})`,
          height: '800px', // You can set a specific height like 800px
          width: '100%' // Ensure it covers the full width of the page
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-6 text-black pt-32 space-y-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          What Is Tree Plantation?
        </h1>

        {/* Quote Section */}
        <div className="text-xl italic text-center mb-6">
          <p>
            “Trees are sanctuaries. Whoever knows how to speak to them, whoever knows how to listen to them, can learn the truth.”
          </p>
          <span className="block mt-4 text-right font-semibold">– Herman Hesse</span>
        </div>

        {/* Content Section */}
        <div className="text-lg">
          <p className="mb-6">
            If you want to know the reasons for why trees are important, why we need trees, the importance of tree plantation, and why we should plant trees, here we share a brief on the same.
            Trees offer a plethora of benefits. Besides being your conversational buddy, trees help combat climate change and provide various ecological and health benefits. Here's why planting trees is essential:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li>Help combat climate change</li>
            <li>Purify the air</li>
            <li>Provide us with precious oxygen</li>
            <li>Keep the streets and the city cool</li>
            <li>Conserve energy and water</li>
            <li>Prevent water pollution and soil erosion</li>
            <li>Provide food</li>
            <li>Heal as exposure to trees helps alleviate mental and physical fatigue</li>
            <li>Create livelihood opportunities</li>
            <li>Provide shade and habitat for animals/birds/wildlife</li>
            <li>Beautify space</li>
            <li>Provide wood</li>
            <li>Enhance the value of property</li>
          </ul>
        </div>

        {/* Video Section */}
        <div className="w-full flex justify-center mb-4 mt-[500px]">
  <video
    width="80%" // Adjust the video width as needed
    controls
    className="rounded-lg shadow-lg mt-[50px] mb-[50px] border-4 border-solid border-gray-500" // Add border class here
  >
    <source
      src={treeVideo} // Use the imported video source
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</div>

      </div>
    </div>
  );
};

export default TreePlantationPage;
