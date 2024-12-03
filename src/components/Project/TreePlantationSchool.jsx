import React from 'react';
// Import your image correctly from the assets folder
import treeImage from '../../assets/treepl3.png'; // Path to your image

const TreePlantationInSchool = () => {
  return (
    <div className="relative min-h-screen">
      {/* Image Section */}
      <div
        className="w-full h-[600px] bg-center bg-cover"
        style={{ backgroundImage: `url(${treeImage})` }}
      >
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold">Tree Plantation in School</h1>
        </div>
      </div>

      {/* Content Section with #EFEFEF Background */}
      <div className="w-full bg-[#EFEFEF]">
        {/* Container 1: Introduction Section */}
        <div className="mb-12 mx-8 sm:mx-20 px-4">
        <p className="text-lg mb-6 text-justify">
    It enhances students' understanding of nature, fosters responsibility, and promotes teamwork. Planting trees improves air quality, mitigates climate change, and supports biodiversity by creating habitats for wildlife. Additionally, it helps prevent soil erosion and beautifies the school premises, providing shade and a healthier learning environment.
    Engaging in such activities equips students with lifelong eco-friendly values, contributing to a greener planet and instilling a sense of responsibility toward environmental conservation.
  </p>
        </div>

        {/* Container 2: Benefits of Tree Plantation for School Students */}
        <div className="mb-12 mx-8 sm:mx-20 px-4">
          <h3 className="text-2xl font-semibold text-center mb-6">Benefits of Tree Plantation for School Students</h3>
          <ul className="list-disc pl-6 text-lg space-y-4">
            <li><strong>Environmental Awareness:</strong> Tree plantation activities help students understand the importance of conserving nature, educating them on the role trees play in combating climate change, improving air quality, and maintaining ecological balance.</li>
            <li><strong>Practical Learning:</strong> Participating in such activities bridges the gap between theoretical knowledge and real-world applications, making subjects like science and geography more interactive and interesting.</li>
            <li><strong>Responsibility Building:</strong> Taking care of planted trees teaches students to be accountable and responsible for their actions, helping them develop important life skills like patience, perseverance, and empathy.</li>
            <li><strong>Physical and Mental Well-Being:</strong> Spending time outdoors during plantation activities promotes physical activity, reduces screen time, and boosts mental health by lowering stress levels and fostering a connection with nature.</li>
            <li><strong>Teamwork Skills:</strong> Group activities like tree planting encourage collaboration, problem-solving, and communication among students, strengthening their ability to work effectively in teams.</li>
            <li><strong>Lifelong Values:</strong> Tree plantation instills eco-friendly habits and a strong environmental ethic, inspiring students to adopt sustainable practices and contribute to environmental conservation throughout their lives.</li>
            <li><strong>Creative Expression:</strong> Students often engage in planning and designing plantation areas, encouraging creativity and innovative thinking.</li>
            <li><strong>Community Engagement:</strong> Participating in tree plantation drives within or beyond school grounds creates a sense of contribution to the community, fostering pride and civic responsibility.</li>
            <li><strong>Leadership Opportunities:</strong> Organizing plantation drives allows students to take initiative and develop leadership qualities, preparing them for future challenges.</li>
            <li><strong>Aesthetic and Emotional Benefits:</strong> Planting trees beautifies the school campus, creating a serene environment that enhances students' focus, creativity, and overall learning experience.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TreePlantationInSchool;
