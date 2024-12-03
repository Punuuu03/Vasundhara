import React from 'react';
import ImageGallery from '../../assets/contact1.png'; // Make sure to verify the correct image path
import Image from '../../assets/contact2.png';

const ContactContent = () => {
  return (
    <section className="bg-[#f6f6f6] py-12 ">
      <div className="mb-8 mt-20 text-center">
  <h2 className="text-3xl font-semibold text-green-800 mb-6">We’d Love to Hear from You!</h2>
  <p className="text-lg mx-auto text-gray-600 max-w-4xl">
    Join hands with Vasundhara in our mission to protect and nurture the planet. Your support—whether through ideas, contributions, or participation—plays a vital role in driving our initiatives. Let’s work together to create a sustainable future for generations to come.
  </p>
</div>

      {/* Combined Div */}
      <div className="max-w-screen-xl mx-auto px-4 mt-20 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center"> {/* Flex layout for both form and image */}

          {/* Right Side Image with Contact Info Overlay */}
          <div className="relative bg-white rounded-2xl shadow-xl w-full lg:w-[600px] h-[650px] flex justify-center items-center"> {/* Added rounded-2xl for curves */}
            <div className="w-full h-full">
              <img
                src={ImageGallery} // Correct image import
                alt="Contact Us"
                className="rounded-2xl shadow-md w-full h-full object-cover" // Added rounded-2xl for the image itself
              />
              {/* Contact Information Overlay */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-6">
                {/* Main Heading with Underline */}
                <h2 className="text-5xl font-semibold   text-center mb-12 -mt-40 border-b-2 border-white pb-2 w-auto">Contact Us</h2>

                {/* Contact Info */}
                <div className="space-y-6 text-center">
                  {/* Email */}
                  <div>
                    <h3 className="text-xl mr-[400px] font-semibold mb-2">Email:</h3>
                    <p className="text-lg">
                      <a href="mailto:support@vasuundhara.com" className="underline">
                        support@vasuundhara.com
                      </a> 
                      <span> / </span>
                      <a href="mailto:kishor@vasuundhara.com" className="underline">
                        kishor@vasuundhara.com
                      </a>
                    </p>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <h3 className="text-xl mr-[320px] font-semibold mb-2">Phone Number:</h3>
                    <p className="text-lg mr-[320px]">+91 9766539071</p>
                  </div>

                  {/* Address */}
                  <div>
                    <h3 className="text-xl mr-[400px] font-semibold mb-2">Address:</h3>
                    <p className="text-lg">
                      Vasundhara Paryavaran Sanvardhan Sanstha - Gat No- 115/4, Dhamane Gaonvathan, Tal- Maval, Dist- Pune – 410506
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center w-full lg:w-[600px] h-[650px] relative"> {/* Added rounded-2xl for curves */}
            <h3 className="text-2xl font-semibold text-center mb-6 text-gray-700">Leave Us a Message</h3> {/* Form heading */}
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
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              <div className="flex justify-center mb-6">
                <button
                  type="submit"
                  style={{ backgroundColor: '#073E06' }} // Custom green color
                  className="text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition duration-300"
                >
                  Send
                </button>
              </div>
            </form>

            {/* Image at Bottom Right */}
            <div className="absolute bottom-4 right-4">
              <img
                src={Image} // Correct image path
                alt="Form Image"
                className="w-[150px] h-[150px] object-cover" // Adjust the size and appearance as per requirement
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactContent;
