import React from 'react';
import Imges1 from '../../assets/volunteer.png'; // Correct image import

const VolunteerForm = () => {
  return (
    <section className="bg-[#f6f6f6] py-12">
      {/* New Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Get Involved: Be a Volunteer</h2>
      </div>

      {/* Combined Div */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row  items-center justify-center"> {/* Flex layout for both form and image */}

          {/* Left Side Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col justify-center items-center w-full lg:w-[600px] h-[650px]">
            <h3 className="text-2xl font-semibold text-center mb-6 text-gray-700">Join Us In Our Green Moment!</h3> {/* Form heading */}
            <form action="#" method="POST" className="w-full">
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="contact" className="block text-lg font-medium text-gray-700">Contact No.</label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  placeholder="Enter Contact Number"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  style={{ backgroundColor: '#073E06' }} // Custom green color
                  className="text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Right Side Image */}
          <div className="bg-white rounded-lg shadow-xl w-full lg:w-[600px] h-[650px] flex justify-center items-center">
            <div className="w-full h-full">
              <img
                src={Imges1} // Correct image import
                alt="Volunteer"
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;
