import React, { useState } from "react";
import { Menu, X, User, Calendar, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/upscalemedia-transformed (1)-Picsart-AiImageEnhancer.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    {
      label: "Services",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: "Personal Training", href: "#" },
        { label: "Group Classes", href: "#" },
        { label: "Nutrition Coaching", href: "#" },
        { label: "Membership Plans", href: "#" },
      ],
    },
    { label: "Schedule", href: "#" },
    { label: "Trainers", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="bg-[#FDFDFD] sticky  top-0 z-99 shadow-sm border-b border-gray-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left Side - Logo */}
          <div className="flex items-center">
           <div className="flex items-center space-x-3">
  <Link to="/" className="flex items-center">
    <img
      src={logo}
      alt="Logo"
      className="h-8 sm:h-16 md:h-16 w-auto object-contain"
    />
  </Link>
</div>

          </div>

          {/* Right Side - Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Phone - Desktop */}

            {/* Login Button - Now visible on all devices */}
            <Link to="/login">
              <button className="flex items-center px-3 sm:px-4 py-2 sm:py-2.5 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors text-sm sm:text-base">
                <User size={16} sm:size={18} className="mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Member Login</span>
                <span className="xs:hidden">Login</span>
              </button>
            </Link>

            {/* Book Now Button */}
            <Link to={"/book-demo"}>
              <button className="flex items-center px-3 sm:px-5 py-2 sm:py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-sm text-sm sm:text-base">
                <Calendar size={16} sm:size={18} className="mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Book Now</span>
                <span className="xs:hidden">Book Demo</span>
              </button>
            </Link>

            {/* Mobile Menu Button - Removed since we don't need it anymore */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
