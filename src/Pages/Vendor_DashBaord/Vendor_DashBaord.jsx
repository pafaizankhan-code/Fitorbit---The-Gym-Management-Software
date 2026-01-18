import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import { 
  Bell, 
  Search, 
  ChevronDown, 
  User, 
  Menu, 
  LogOut, 
  Settings, 
  User as UserIcon,
  Shield,
  HelpCircle,
  CreditCard
} from 'lucide-react';
import ScrollToTop from '../../Components/ScrollToTop';

const VendorDashboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const userMenuRef = useRef(null);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // On desktop, sidebar is always open
      if (!mobile) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle sidebar for mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar for mobile
  const closeSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  // Toggle user menu
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  // Handle logout
  const handleLogout = () => {
    // Clear any authentication tokens/sessions here
    localStorage.removeItem('token'); // Example
    // Navigate to home page
    navigate('/');
  };

  // User menu items
  const userMenuItems = [
    { icon: Settings, label: 'Settings', action: () => navigate('/ultimate-control/settings') },
    { icon: Shield, label: 'Security', action: () => navigate('/ultimate-control/security') },
    { icon: HelpCircle, label: 'Help & Support', action: () => navigate('/ultimate-control/help') },
    { 
      icon: LogOut, 
      label: 'Logout', 
      action: handleLogout,
      className: 'text-red-600 hover:text-red-700'
    },
  ];

  return (

   
    <div className="flex h-screen bg-neutral-50 overflow-hidden">
      {/* Desktop Sidebar - Always visible on desktop */}
      {!isMobile && (
        <div className="flex-shrink-0">
          <Sidebar 
            isMobile={isMobile} 
            isSidebarOpen={isSidebarOpen} 
            onClose={closeSidebar}
          />
        </div>
      )}

      {/* Mobile Sidebar - Controlled by state */}
      {isMobile && (
        <Sidebar 
          isMobile={isMobile} 
          isSidebarOpen={isSidebarOpen} 
          onClose={closeSidebar}
        />
      )}

 <ScrollToTop/>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Enhanced Header - Mobile Responsive */}
        <header className="bg-white border-b border-neutral-200 px-4 py-3 md:px-6 md:py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Mobile menu + Page title */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {/* Mobile Menu Button */}
              {isMobile && (
                <button 
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg hover:bg-neutral-100 flex-shrink-0"
                >
                  <Menu className="w-5 h-5 text-neutral-600" />
                </button>
              )}

              {/* Page Title - Single Line */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 truncate">
                    Dashboard Overview
                  </h1>
                  {/* Optional subtitle for larger screens */}
                  <span className="text-xs md:text-sm text-neutral-500 hidden md:inline truncate">
                    - Welcome back!
                  </span>
                </div>
                {/* Mobile subtitle as tooltip */}
                <p className="text-xs text-neutral-500 mt-0.5 truncate md:hidden">
                  Welcome back! Here's what's happening today.
                </p>
              </div>
            </div>

            {/* Right side - Controls */}
            <div className="flex items-center gap-3 md:gap-4 lg:gap-6 flex-shrink-0">
              {/* Mobile Search Button */}
              <button className="md:hidden p-2 rounded-full hover:bg-neutral-100">
                <Search className="w-5 h-5 text-neutral-600" />
              </button>

              {/* Search Bar - Desktop */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4 md:w-5 md:h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-9 pr-4 py-1.5 md:py-2 w-48 lg:w-64 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-neutral-50 text-sm md:text-base"
                />
              </div>

              {/* Notifications */}
              <div className="relative">
                <button className="p-1.5 md:p-2 rounded-full hover:bg-neutral-100 transition-colors relative">
                  <Bell className="w-5 h-5 md:w-6 md:h-6 text-neutral-600" />
                  <span className="absolute top-0.5 right-0.5 md:top-1 md:right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full border border-white"></span>
                </button>
              </div>

              {/* User Profile with Dropdown */}
              <div className="relative" ref={userMenuRef}>
                <button 
                  onClick={toggleUserMenu}
                  className="flex items-center gap-2 md:gap-3 p-1 rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-blue-100 rounded-full flex items-center justify-center border border-blue-200 flex-shrink-0">
                    <User className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-blue-600" />
                  </div>
                  <div className="hidden sm:block text-left">
                    <div className="flex items-center gap-1">
                      <p className="font-medium text-gray-900 text-sm md:text-base truncate max-w-[120px] lg:max-w-[150px]">
                        FitOrbit User
                      </p>
                      <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                        isUserMenuOpen ? 'rotate-180' : ''
                      }`} />
                    </div>
                    <p className="text-xs md:text-sm text-neutral-500 truncate max-w-[120px] lg:max-w-[150px]">
                      Vendor Admin
                    </p>
                  </div>
                  {/* Mobile only dropdown icon */}
                  <ChevronDown className={`sm:hidden w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                    isUserMenuOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-4 w-64 bg-white rounded-lg shadow-lg border border-neutral-200 py-2 z-50 animate-fadeIn">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-neutral-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-200">
                          <UserIcon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">FitOrbit User</p>
                          <p className="text-sm text-neutral-500">fitorbit@example.com</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">
                              Vendor Admin
                            </span>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-neutral-500">Online</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                      {userMenuItems.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            item.action();
                            setIsUserMenuOpen(false);
                          }}
                          className={`w-full flex items-center px-4 py-2.5 text-left hover:bg-neutral-50 transition-colors ${
                            item.className || 'text-gray-700 hover:text-gray-900'
                          }`}
                        >
                          <item.icon className="w-4 h-4 mr-3" />
                          <span className="text-sm">{item.label}</span>
                          {item.label === 'Logout' && (
                            <span className="ml-auto text-xs text-neutral-400">Ctrl+L</span>
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-2 border-t border-neutral-100">
                      <p className="text-xs text-neutral-500">
                        Last login: Today, 10:30 AM
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto m-2">
          <div className="max-w-full">
            <div className="bg-white ">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VendorDashboard;