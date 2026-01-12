import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Globe,
  Shield,
  CheckCircle,
  ArrowRight,
  Heart,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black border-t-2 border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold">FitOrbit</h2>
                    <p className="text-gray-600 text-xs sm:text-sm">Gym Management Software</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                  Professional gym management software trusted by 2,500+ fitness centers worldwide.
                  Streamline operations, boost revenue, and deliver exceptional member experiences.
                </p>
              </div>

              {/* Newsletter */}
              <div className="mb-6 sm:mb-8">
                <h3 className="font-bold text-black mb-3 sm:mb-4 text-base sm:text-lg">Stay Updated</h3>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  />
                  <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap text-sm sm:text-base">
                    Subscribe
                  </button>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
                  Get industry insights and product updates
                </p>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-bold text-black mb-4 sm:mb-6 text-base sm:text-lg">Product</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-sm sm:text-base">
                    <ChevronRight size={14} sm:size={16} className="mr-1 sm:mr-2 text-blue-600 flex-shrink-0" />
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-sm sm:text-base">
                    <ChevronRight size={14} sm:size={16} className="mr-1 sm:mr-2 text-blue-600 flex-shrink-0" />
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-sm sm:text-base">
                    <ChevronRight size={14} sm:size={16} className="mr-1 sm:mr-2 text-blue-600 flex-shrink-0" />
                    Free Trial
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-sm sm:text-base">
                    <ChevronRight size={14} sm:size={16} className="mr-1 sm:mr-2 text-blue-600 flex-shrink-0" />
                    API Access
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-sm sm:text-base">
                    <ChevronRight size={14} sm:size={16} className="mr-1 sm:mr-2 text-blue-600 flex-shrink-0" />
                    Mobile Apps
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-bold text-black mb-4 sm:mb-6 text-base sm:text-lg">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-sm sm:text-base">
                    <ChevronRight size={14} sm:size={16} className="mr-1 sm:mr-2 text-blue-600 flex-shrink-0" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-sm sm:text-base">
                    <ChevronRight size={14} sm:size={16} className="mr-1 sm:mr-2 text-blue-600 flex-shrink-0" />
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-sm sm:text-base">
                    <ChevronRight size={14} sm:size={16} className="mr-1 sm:mr-2 text-blue-600 flex-shrink-0" />
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-sm sm:text-base">
                    <ChevronRight size={14} sm:size={16} className="mr-1 sm:mr-2 text-blue-600 flex-shrink-0" />
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-sm sm:text-base">
                    <ChevronRight size={14} sm:size={16} className="mr-1 sm:mr-2 text-blue-600 flex-shrink-0" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-bold text-black mb-4 sm:mb-6 text-base sm:text-lg">Resources</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-sm sm:text-base">
                    <ChevronRight size={14} sm:size={16} className="mr-1 sm:mr-2 text-blue-600 flex-shrink-0" />
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-sm sm:text-base">
                    <ChevronRight size={14} sm:size={16} className="mr-1 sm:mr-2 text-blue-600 flex-shrink-0" />
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-sm sm:text-base">
                    <ChevronRight size={14} sm:size={16} className="mr-1 sm:mr-2 text-blue-600 flex-shrink-0" />
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-sm sm:text-base">
                    <ChevronRight size={14} sm:size={16} className="mr-1 sm:mr-2 text-blue-600 flex-shrink-0" />
                    API Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-sm sm:text-base">
                    <ChevronRight size={14} sm:size={16} className="mr-1 sm:mr-2 text-blue-600 flex-shrink-0" />
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 my-6 sm:my-8 md:my-12"></div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-black mb-3 sm:mb-4 text-base sm:text-lg">Contact Information</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start">
                  <MapPin size={16} sm:size={18} className="text-blue-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">123 Fitness Street, Suite 500<br />San Francisco, CA 94107</span>
                </div>
                <div className="flex items-center">
                  <Phone size={16} sm:size={18} className="text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <a href="tel:+18888888888" className="text-gray-700 hover:text-blue-600 text-sm sm:text-base">+1 (888) 888-8888</a>
                </div>
                <div className="flex items-center">
                  <Mail size={16} sm:size={18} className="text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <a href="mailto:support@fitorbit.com" className="text-gray-700 hover:text-blue-600 text-sm sm:text-base">support@fitorbit.com</a>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-bold text-black mb-3 sm:mb-4 text-base sm:text-lg">Certifications</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center">
                  <Shield size={16} sm:size={18} className="text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">GDPR Compliant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} sm:size={18} className="text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center">
                  <Globe size={16} sm:size={18} className="text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">ISO 27001 Certified</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-black mb-3 sm:mb-4 text-base sm:text-lg">Connect With Us</h4>
              <div className="flex space-x-2 sm:space-x-3 md:space-x-4 mb-4 sm:mb-6">
                <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors flex-shrink-0">
                  <Facebook size={16} sm:size={18} md:size={20} />
                </a>
                <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors flex-shrink-0">
                  <Twitter size={16} sm:size={18} md:size={20} />
                </a>
                <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors flex-shrink-0">
                  <Instagram size={16} sm:size={18} md:size={20} />
                </a>
                <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors flex-shrink-0">
                  <Linkedin size={16} sm:size={18} md:size={20} />
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Globe size={14} sm:size={16} className="mr-1 sm:mr-2 flex-shrink-0" />
                <span className="text-sm">English</span>
                <ChevronRight size={14} sm:size={16} className="ml-1 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-200 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-3 sm:mb-4 md:mb-0">
              <p className="text-gray-600 text-xs sm:text-sm">
                © {currentYear} FitOrbit Inc. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Sitemap</a>
            </div>
          </div>
          
          {/* Made with love */}
          <div className="text-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
            <p className="text-gray-500 text-xs sm:text-sm flex items-center justify-center">
              Made with <Heart size={12} sm:size={14} className="mx-1 text-red-500" /> for fitness professionals worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;