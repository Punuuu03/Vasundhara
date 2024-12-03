import React from 'react';
import footerBackground from '../../assets/footer.png'; // Path to your background image
import logo from '../../assets/logo.png'; // Path to your logo

const Footer = () => {
  return (
    <footer
      className="relative bg-cover   bg-center py-8 px-6 text-black"
      style={{
        backgroundImage: `url(${footerBackground})`,
        backgroundSize: 'cover', // Ensures the image covers the container
        backgroundPosition: 'center',
        height: '420px', // Reduced height for the footer
        width: '100%', // Set the width to 100% of the container's width
      }}
    >
      {/* Logo on the left */}
      <div className="absolute top-2 left-4">
        <img src={logo} alt="Vasundhara Logo" className="w-[50px] h-[80px]" />
      </div>

      {/* Footer Content */}
      <div className="max-w-screen-xl mx-auto text-center md:text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Information Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Information</h3>
          <ul>
            <li className="mb-2"><a href="/" className="hover:text-green-400">Home</a></li>
            <li className="mb-2"><a href="/impact" className="hover:text-green-400">Impact</a></li>
            <li className="mb-2"><a href="/faq" className="hover:text-green-400">FAQ</a></li>
            <li className="mb-2"><a href="/about" className="hover:text-green-400">About</a></li>
            <li className="mb-2"><a href="/media" className="hover:text-green-400">Media</a></li>
            <li className="mb-2"><a href="/gallery" className="hover:text-green-400">Gallery</a></li>
            <li className="mb-2"><a href="/tree-in-school" className="hover:text-green-400">Tree in School</a></li>
            <li className="mb-2"><a href="/projects" className="hover:text-green-400">Projects</a></li>
          </ul>
        </div>

        {/* Other Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Other</h3>
          <ul>
            <li className="mb-2"><a href="/get-involved" className="hover:text-green-400">Get Involved</a></li>
            <li className="mb-2"><a href="/tree-plantation" className="hover:text-green-400">Tree Plantation</a></li>
            <li className="mb-2"><a href="/contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Support</h3>
          <ul>
            <li className="mb-2"><a href="/help-center" className="hover:text-green-400">Help Center</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
          <p className="mb-4">
            Vasundhara is committed to conserving nature through reforestation, plant preservation, and sustainable initiatives. Join us in creating a greener, healthier planet for future generations.
          </p>
          <p className="mb-2">Phone: +91 9766539071</p>
          <p className="mb-2">Email: <a href="mailto:support@vasuundhara.com" className="hover:text-green-400">support@vasuundhara.com</a></p>
          <p className="mb-2">Email: <a href="mailto:kishor@vasuundhara.com" className="hover:text-green-400">kishor@vasuundhara.com</a></p>
          <p>Address: Vasundhara Paryavaran Sanvardhan Sanstha - Gat No- 115/4, Dhamane Gaonvathan, Tal- Maval, Dist- Pune – 410506</p>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Vasundhara Paryavaran Sanvardhan Sanstha. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
