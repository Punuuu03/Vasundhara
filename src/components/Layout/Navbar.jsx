import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"; // Import the logo image

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for the "About Us" dropdown
  const [isHovered, setIsHovered] = useState(false); // State for the "Project" dropdown
  const [isSubHovered, setIsSubHovered] = useState(false); // State for the "Tree Plantation in School" sub-dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle

  // Handle hover events for the desktop dropdowns
  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  // Handle hover events for the "Choose Day" dropdown
  const handleDaySelectorMouseEnter = () => setIsHovered(true);
  const handleDaySelectorMouseLeave = () => setIsHovered(false);

  // Handle hover events for the "Tree Plantation in School" sub-dropdown
  const handleSubDropdownMouseEnter = () => setIsSubHovered(true);
  const handleSubDropdownMouseLeave = () => setIsSubHovered(false);

   // Handle hover events for the "Project" dropdown
   const handleProjectHover = () => setIsHovered(true);
   const handleProjectLeave = () => setIsHovered(false);
 
   // Handle hover events for the "Tree Plantation in School" sub-dropdown
   const handleSubDropdownHover = () => setIsSubHovered(true);
   const handleSubDropdownLeave = () => setIsSubHovered(false)

   const handleSubMenuClick = () => setIsSubMenuOpen(!isSubMenuOpen);
   

  return (
    <header className="relative">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo} // Use the imported logo image
            alt="Logo"
            className="w-12 h-auto" // Adjust logo size
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 flex-grow justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center text-gray-700 font-bold ${isActive ? 'text-blue-700 border-b-2 border-blue-700' : 'hover:text-blue-700 border-b-2 border-transparent'}`}
          >
            Home
          </NavLink>

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `relative flex items-center text-gray-700 font-bold ${isActive ? 'text-blue-700 border-b-2 border-blue-700' : 'hover:text-blue-700 border-b-2 border-transparent'}`}
            >
              About Us
            </NavLink>

            <div
              className={`absolute z-50 flex w-40 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl ${dropdownOpen ? "visible" : "invisible"}`}
            >
              <NavLink
                to="/about"
                onClick={() => setDropdownOpen(false)} // Close dropdown on click
                className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
              >
                Impact
              </NavLink>
              <NavLink
                to="/media"
                onClick={() => setDropdownOpen(false)} // Close dropdown on click
                className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
              >
                Media
              </NavLink>
            </div>
          </div>

          {/* Project Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleDaySelectorMouseEnter}
            onMouseLeave={handleDaySelectorMouseLeave}
          >
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `relative flex items-center text-gray-700 font-bold ${isActive ? 'text-blue-700 border-b-2 border-blue-700' : 'hover:text-blue-700 border-b-2 border-transparent'}`}
            >
              Project
            </NavLink>

            <div
              className={`absolute z-50 flex w-40 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl ${isHovered ? "visible" : "invisible"}`}
            >
              <NavLink
                to="/treeplantation"
                onClick={() => setIsHovered(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
              >
                Tree Plantation
              </NavLink>

              {/* Sub-dropdown under "Tree Plantation in School" */}
              <div
                className="relative"
                onMouseEnter={handleSubDropdownMouseEnter}
                onMouseLeave={handleSubDropdownMouseLeave}
              >
                <NavLink
                  to="/treeplantationschool"
                  onClick={() => setIsHovered(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                >
                  Tree Plantation in School
                </NavLink>

                {/* Sub-dropdown */}
                <div
                  className={`absolute left-40 top-0 z-50 w-40 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl ${isSubHovered ? "visible" : "invisible"}`}
                >
                  <NavLink
                    to="/awareness"
                    onClick={() => setIsSubHovered(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                  >
                    Awareness
                  </NavLink>
                  <NavLink
                    to="/seedbank"
                    onClick={() => setIsSubHovered(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                  >
                    Seed Bank
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <NavLink
            to="/volunteerForm"
            className={({ isActive }) =>
              `flex items-center text-gray-700 font-bold ${isActive ? 'text-blue-700 border-b-2 border-blue-700' : 'hover:text-blue-700 border-b-2 border-transparent'}`}
          >
            Get Involved
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `flex items-center text-gray-700 font-bold ${isActive ? 'text-blue-700 border-b-2 border-blue-700' : 'hover:text-blue-700 border-b-2 border-transparent'}`}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center text-gray-700 font-bold ${isActive ? 'text-blue-700 border-b-2 border-blue-700' : 'hover:text-blue-700 border-b-2 border-transparent'}`}
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="fas fa-bars text-2xl"></i> {/* Hamburger Icon */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100 text-center">
          <NavLink
            to="/"
            className="block py-2 px-4 text-gray-700 hover:bg-blue-700 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <div className="relative">
            <NavLink
              to="/aboutus"
              className="block py-2 px-4 text-gray-700 hover:bg-blue-700 hover:text-white"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              About Us
            </NavLink>
            {dropdownOpen && (
              <div className="flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl">
                <NavLink
                  to="/about"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                  onClick={() => setDropdownOpen(false)}
                >
                  Impact
                </NavLink>
                <NavLink
                  to="/media"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                  onClick={() => setDropdownOpen(false)}
                >
                  Media
                </NavLink>
              </div>
            )}
          </div>
          <div className="relative">
            <NavLink
              to="/project"
              className="block py-2 px-4 text-gray-700 hover:bg-blue-700 hover:text-white"
              // onClick={() => setIsHovered(!isHovered)}
              onMouseEnter={handleProjectHover}
        onMouseLeave={handleProjectLeave}
            >
              Project
            </NavLink>
            {isHovered && (
              <div className="flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl">
                <NavLink
                  to="/treeplantation"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                  onClick={() => setIsHovered(false)}
                >
                  Tree Plantation
                </NavLink>
                <div
                  className="relative"
                  onClick={() => setIsSubHovered(!isSubHovered)}
                >
                  {/* <NavLink
                    to="/treeplantationschool"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                    // onClick={() => setIsHovered(false)}
                    // onClick={() => setIsSubMenuOpen(!isSubMenuOpen)} // Toggle sub-menu visibility on click
                    onClick={handleSubMenuClick}

                  >
                    Tree Plantation in School
                  </NavLink>
                  {isSubHovered && (
                    <div className="flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl">
                      <NavLink
                        to="/awareness"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                        onMouseEnter={handleSubDropdownHover}
                onMouseLeave={handleSubDropdownLeave}
                        
                      >
                        Awareness
                      </NavLink>
                      <NavLink
                        to="/seedbank"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                      >
                        Seed Bank
                      </NavLink>
                    </div>
                  )} */}
                  <NavLink
  to="/treeplantationschool"
  className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
  onClick={handleSubMenuClick} // Toggle the sub-menu visibility on click
>
  Tree Plantation in School
</NavLink>

{/* Sub-menu for Tree Plantation in School */}
{isSubMenuOpen && (
  <div className="flex flex-row bg-gray-700 py-1 px-4 text-gray-800 shadow-xl">
    <NavLink
      to="/awareness"
      className="block  px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
      onMouseEnter={handleSubDropdownHover} // Handle hover state when entering
      // onMouseLeave={handleSubDropdownLeave}  // Handle hover state when leaving
    >
      Awareness
    </NavLink>
    <NavLink
      to="/seedbank"
      className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
    >
      Seed Bank
    </NavLink>
  </div>
)}

                </div>
              </div>
            )}
          </div>
          <NavLink
            to="/volunteerForm"
            className="block py-2 px-4 text-gray-700 hover:bg-blue-700 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Involved
          </NavLink>
          <NavLink
            to="/gallery"
            className="block py-2 px-4 text-gray-700 hover:bg-blue-700 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className="block py-2 px-4 text-gray-700 hover:bg-blue-700 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}

      {/* Social Media Icons */}
      <div className="flex space-x-6 items-center mt-4 md:mt-0">
        <a
          href="https://www.facebook.com/groups/1508618786223797/?ref=share"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-700"
        >
          <i className="fab fa-facebook-f text-xl"></i> {/* Facebook Icon */}
        </a>
        <a
          href="https://www.youtube.com/channel/UC5Uq2yrUJ5_LpPVoIhkrLIA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-700"
        >
          <i className="fab fa-youtube text-xl"></i> {/* YouTube Icon */}
        </a>
        <a
          href="https://www.linkedin.com/in/vasuundhara-organization-a51365259/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-700"
        >
          <i className="fab fa-linkedin text-xl"></i> {/* LinkedIn Icon */}
        </a>
      </div>
    </header>
  );
};

export default Navbar;
