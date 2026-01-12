import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Search,
  Home,
  Users,
  Calendar,
  BarChart,
  Settings,
  Bell,
  Package,
  UserCheck,
  ChevronDown,
  ChevronRight,
  User,
  Database,
  Shield,
  HelpCircle,
  IndianRupee,
  Trophy,
  Dumbbell,
  CreditCard,
  Clock,
  TrendingUp,
  FileBarChart,
  Activity,
  Menu,
  X
} from 'lucide-react';

const Sidebar = ({ isMobile, isSidebarOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [expandedSections, setExpandedSections] = useState({
    members: true,
    finance: false,
    operations: false,
    reports: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Helper function to check active route
  const isActive = (path) => location.pathname === `/ultimate-control/${path}`;

  // Main menu items (with paths)
  const mainMenu = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '', count: null },
  ];

  const memberManagement = [
    { id: 'all_members', label: 'All Members', path: 'members', count: 427 },
    // { id: 'new_members', label: 'New Members', path: 'members/new', count: 24 },
    // { id: 'active_members', label: 'Active Members', path: 'members/active', count: 398 },
    // { id: 'renewals', label: 'Renewals Due', path: 'members/renewals', count: 32 },
  ];

  const financeManagement = [
    { id: 'payments', label: 'All Payments', icon: IndianRupee, path: 'finance/payments', count: '₹4.8L' },
    { id: 'subscriptions', label: 'Subscriptions', icon: CreditCard, path: 'finance/subscriptions', count: 412 },
  ];

  const operations = [
    { id: 'schedule', label: 'Class Schedule', icon: Calendar, path: 'operations/schedule' },
    { id: 'trainers', label: 'Trainers', icon: UserCheck, path: 'operations/trainers' },
    { id: 'workouts', label: 'Workout Plans', icon: Dumbbell, path: 'operations/workouts' },
  ];

  const reports = [
    { id: 'financial', label: 'Financial Reports', icon: FileBarChart, path: 'reports/financial' },
    { id: 'attendance', label: 'Attendance', icon: Activity, path: 'reports/attendance' },
    { id: 'performance', label: 'Gym Performance', icon: Trophy, path: 'reports/performance' },
    // { id: 'member_growth', label: 'Member Growth', icon: TrendingUp, path: 'reports/member-growth' },
  ];

  const system = [
    { id: 'settings', label: 'Settings', icon: Settings, path: 'settings' },
    { id: 'database', label: 'Database', icon: Database, path: 'database' },
    { id: 'security', label: 'Security', icon: Shield, path: 'security' },
    { id: 'help', label: 'Help', icon: HelpCircle, path: 'help' },
  ];

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(`/ultimate-control${path ? '/' + path : ''}`);
    if (isMobile) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        ${isMobile 
          ? `fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out 
             ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
          : 'relative'
        }
        ${isMobile ? 'w-full' : 'w-64'}
        h-screen bg-white border-r border-gray-300 flex flex-col 
      `}>
        
        {/* Mobile Header */}
        {isMobile && (
          <div className="p-4 border-b border-gray-300 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div>
                <h1 className="text-lg font-bold text-black">FitOrbit</h1>
                <p className="text-xs text-gray-600">Management System</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}

        {/* Desktop Header */}
        {!isMobile && (
          <div className="p-5 border-b border-gray-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div>
                  <h1 className="text-lg font-bold text-black">FitOrbit</h1>
                  <p className="text-xs text-gray-600">Management System</p>
                </div>
              </div>
              <div className="relative">
                <button className="p-1.5 hover:bg-gray-100 rounded">
                  <Bell className="w-5 h-5 text-blue-600" />
                </button>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></div>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search members, payments..."
                className="w-full pl-10 pr-3 py-2.5 bg-gray-100 border border-gray-300 rounded text-sm text-black focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto py-4 scrollbar-hide">
          <style jsx>{`
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {/* Main Menu */}
          <div className="mb-3">
            <div className="px-5 mb-3">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">MAIN</h3>
            </div>
            <div className="space-y-1">
              {mainMenu.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center px-5 py-3 ${isMobile ? 'py-2.5' : 'py-2.5'} text-left ${
                    (item.path === '' && location.pathname === '/ultimate-control') || 
                    (item.path && isActive(item.path))
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 text-black'
                  }`}
                >
                  <item.icon className={`${isMobile ? 'w-4 h-4' : 'w-4 h-4'} mr-3 ${
                    (item.path === '' && location.pathname === '/ultimate-control') || 
                    (item.path && isActive(item.path)) 
                      ? 'text-white' : 'text-blue-600'
                  }`} />
                  <span className={`${isMobile ? 'text-sm' : 'text-sm'} font-medium`}>{item.label}</span>
                  {item.count && (
                    <span className={`ml-auto ${isMobile ? 'text-xs' : 'text-xs'} px-2 py-0.5 rounded ${
                      (item.path === '' && location.pathname === '/ultimate-control') || 
                      (item.path && isActive(item.path))
                        ? 'bg-white text-blue-600' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {item.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Member Management */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('members')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Member Management</span>
              </div>
              {expandedSections.members ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.members && (
              <div className="mt-1 space-y-0.5">
                {memberManagement.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full flex items-center justify-between px-5 pl-10 py-2 text-left ${
                      isActive(item.path)
                        ? 'bg-blue-50 border-r-4 border-blue-600' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className={`text-sm ${
                      isActive(item.path) ? 'text-blue-600 font-medium' : 'text-gray-700'
                    }`}>
                      {item.label}
                    </span>
                    {item.count && (
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        isActive(item.path)
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {item.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Finance Management */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('finance')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <IndianRupee className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Finance</span>
              </div>
              {expandedSections.finance ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.finance && (
              <div className="mt-1 space-y-0.5">
                {financeManagement.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full flex items-center justify-between px-5 pl-10 py-2 text-left ${
                      isActive(item.path)
                        ? 'bg-blue-50 border-r-4 border-blue-600' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <item.icon className="w-3.5 h-3.5 mr-3 text-gray-600" />
                      <span className={`text-sm ${
                        isActive(item.path) ? 'text-blue-600 font-medium' : 'text-gray-700'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                    {item.count && (
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        isActive(item.path)
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {item.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Operations */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('operations')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Operations</span>
              </div>
              {expandedSections.operations ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.operations && (
              <div className="mt-1 space-y-0.5">
                {operations.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full flex items-center px-5 pl-10 py-2 text-left ${
                      isActive(item.path)
                        ? 'bg-blue-50 border-r-4 border-blue-600' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-3.5 h-3.5 mr-3 text-gray-600" />
                    <span className={`text-sm ${
                      isActive(item.path) ? 'text-blue-600 font-medium' : 'text-gray-700'
                    }`}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Reports */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('reports')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <BarChart className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Reports</span>
              </div>
              {expandedSections.reports ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.reports && (
              <div className="mt-1 space-y-0.5">
                {reports.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full flex items-center px-5 pl-10 py-2 text-left ${
                      isActive(item.path)
                        ? 'bg-blue-50 border-r-4 border-blue-600' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-3.5 h-3.5 mr-3 text-gray-600" />
                    <span className={`text-sm ${
                      isActive(item.path) ? 'text-blue-600 font-medium' : 'text-gray-700'
                    }`}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* System Section */}
          <div>
            <div className="px-5 mb-3">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">SYSTEM</h3>
            </div>
            <div className="space-y-1">
              {system.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center px-5 py-3 text-left ${
                    isActive(item.path)
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 text-black'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-3 text-blue-600" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* User Profile Footer */}
        <div className="border-t border-gray-300 p-3 bg-white">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-600">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-bold text-black">FitOrbit User</p>
                <p className="text-xs text-gray-600">Gym Owner</p>
              </div>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;