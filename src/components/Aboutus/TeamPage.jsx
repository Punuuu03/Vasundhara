import React from 'react';
import backgroundImage from '../../assets/About/green.png'; // Path to your background image
import teamImage from '../../assets/About/team.png'; // Path to your team photo

const TeamPage = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      {/* Content Section with Background Image */}
      <div
  className="text-center text-white bg-black bg-opacity-50 p-8 -ml-20 -mt-20 rounded-lg w-[1720px] mx-auto"
  style={{
    backgroundImage: `url(${backgroundImage})`, // Applying background to the content section only
    backgroundSize: 'cover',  // You can set this to 'cover' or specify your desired size
    backgroundPosition: 'center center', // Keeps the background centered
  }}
>
  <h2 className="text-4xl font-bold -ml-20  mb-4">Vasundhara Sanstha’s method of working</h2>
  <p className="text-xl mb-4">
    Vasundhara Sanstha’s method of working is from our own experience. We are sons of farmers from rural areas. Plantation is very easy as we have previous farming experience.
  </p>
  <p className="text-xl mb-4">
    If we get reliable financial corporate support, we can transform the environment to create a definite eco-complementary society.
  </p>
  <h3 className="text-2xl font-bold mt-6">#Vasundhara Team</h3>
</div>


      {/* Team Photo Section */}
      <div className="mt-12 text-center">
        <img
          src={teamImage}
          alt="Vasundhara Team"
          className="w-full max-w-4xl mx-auto rounded-lg shadow-lg" // No background image applied here
        />
      </div>
    </section>
  );
};

export default TeamPage;
