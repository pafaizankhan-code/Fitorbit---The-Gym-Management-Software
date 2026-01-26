import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home,
  Users,
  CreditCard,
  Calendar,
  IndianRupee,
  UserCheck,
  ReceiptIndianRupee,
  Settings,
  Bell,
  Package,
  ChevronDown,
  ChevronRight,
  User,
  FileText,
  AlertCircle,
  TrendingUp,
  Activity,
  Menu,
  X,
  Search,
  BarChart,
  Receipt,
  Users as UsersIcon,
  FileBarChart,
  Zap,
  ReceiptIndianRupee as MoneyIcon,
  UserPlus,
  Shield,
  HelpCircle,
  Database,
  Dumbbell,  // For Workout
  Apple,     // For Diet
  Percent,   // For Offers & Promotions
  Clock      // ← Added for Class Schedule
} from 'lucide-react';

const Sidebar = ({ isMobile, isSidebarOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [expandedSections, setExpandedSections] = useState({
    dashboard: true,
    leads: false,
    diet: false,        // ← Separated: Diet (default expanded)
    workout: false,     // ← Separated: Workout (default expanded)
    members: false,
    membership: false,
    offers: false,      // ← New for Offers & Promotions
    attendance: false,
    classSchedule: false, // ← New for Class Schedule Management
    payments: false,
    finance: false,     // ← New for Finance Management
    inventory: false,   // ← New for Inventory Management
    staff: false,
    expenses: false,
    reports: false,
    notifications: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Helper function to check active route
  const isActive = (path) => location.pathname === `/ultimate-control/${path}`;

  // Dashboard Submenu
  const dashboardItems = [
    { id: 'dashboard_main', label: 'Dashboard Overview', path: '', count: null },
  ];

  // Leads Management
  const leadsManagement = [
    { id: 'all_leads', label: 'All Leads', path: 'leads/all', count: 150 },
    { id: 'add_lead', label: 'Add New Lead', path: 'leads/add', count: null },
  ];

  // ← Separated: Diet Management
  const dietManagement = [
    { id: 'diet_plans', label: 'Diet Plans', path: 'diet-workout/diet-plans', count: 23 },
    { id: 'add_diet', label: 'Create Diet Plan', path: 'diet-workout/add-diet', count: null },
  ];

  // ← Separated: Workout Management
  const workoutManagement = [
    { id: 'workout_plans', label: 'Workout Plans', path: 'diet-workout/workout-plans', count: 45 },
    { id: 'add_workout', label: 'Create Workout Plan', path: 'diet-workout/add-workout', count: null },
  ];

  // ← New: Finance Management
  const financeManagement = [
    { id: 'manage_invoice', label: 'Manage Invoice', path: 'finance/invoices', count: null },
    { id: 'add_invoices', label: 'Create Invoice', path: 'finance/add-invoices', count: null },
  ];

  // ← New: Inventory Management
  const inventoryManagement = [
    { id: 'manage_products', label: 'Manage Supplements & Products', path: 'inventory/products', count: null },
    { id: 'stock_io', label: 'Stock In / Stock Out', path: 'inventory/stock', count: null },
    { id: 'low_stock', label: 'Low Stock Alerts', path: 'inventory/alerts', count: 3 },
    { id: 'sales_tracking', label: 'Sales Tracking', path: 'inventory/sales', count: null },
  ];

  // ← New: Offers & Promotions
  const offersPromotions = [
    { id: 'create_offers', label: 'Create Offers', path: 'offers/create', count: null },
  ];

  // ← New: Class Schedule Management
  const classScheduleManagement = [
    { id: 'all_schedules', label: 'All Class Schedules', path: 'class-schedule/all', count: 25 },
    { id: 'add_class', label: 'Add New Class', path: 'class-schedule/add', count: null },
    { id: 'calendar_view', label: 'Calendar View', path: 'class-schedule/calendar', count: null }
  ];

  // Member Management
  const memberManagement = [
    { id: 'all_members', label: 'All Members', path: 'members', count: 427 },
    { id: 'add_member', label: 'Add New Member', path: 'members/add', count: null },
  ];

  // Membership & Plans
  const membershipPlans = [
    { id: 'all_plans', label: 'All Plans', path: 'memberships/plans', count: 15 },
    { id: 'create_plan', label: 'Create New Plan', path: 'memberships/create', count: null },
    // { id: 'offers', label: 'Discounts & Offers', path: 'memberships/offers', count: 3 },
  ];

  // Attendance Management
  const attendanceManagement = [
    { id: 'today_attendance', label: "Today's Attendance", path: 'attendance/today', count: '128/427' },
    // { id: 'manual_entry', label: 'Manual Entry', path: 'attendance/manual', count: null },
    // { id: 'qr_scanner', label: 'QR Scanner', path: 'attendance/qr', count: null },
    // { id: 'attendance_reports', label: 'Attendance Reports', path: 'attendance/reports', count: null },
    // { id: 'absent_list', label: 'Absent Members', path: 'attendance/absent', count: 12 },
  ];

  // Payments & Billing
  const paymentsBilling = [
    // { id: 'collect_payment', label: 'Collect Payment', path: 'payments/collect', count: null },
    // { id: 'pending_payments', label: 'Pending Dues', path: 'payments/pending', count: 32 },
    // { id: 'payment_history', label: 'Payment History', path: 'payments/history', count: '₹4.8L' },
    // { id: 'invoices', label: 'Invoices', path: 'payments/invoices', count: 412 },
    // { id: 'partial_payments', label: 'Partial Payments', path: 'payments/partial', count: 18 },
  ];

  // Staff/Trainer Management
  const staffManagement = [
    { id: 'all_staff', label: 'All Staff', path: 'staff/all', count: 12 },
    { id: 'add_staff', label: 'Add Staff', path: 'staff/add', count: null },
    // { id: 'trainers', label: 'Trainers', path: 'staff/trainers', count: 6 },
    // { id: 'receptionists', label: 'Receptionists', path: 'staff/reception', count: 3 },
    { id: 'permissions', label: 'Role Permissions', path: 'staff/permissions', count: null },
    { id: 'salary', label: 'Salary Setup', path: 'staff/salary', count: null },
  ];

  // Expense Management
  const expenseManagement = [
    { id: 'manage_expense', label: 'Manage Expense', path: 'expenses/manage_expense', count: null },
    { id: 'add_expense', label: 'Add Expense', path: 'expenses/add', count: null },
    // { id: 'expense_types', label: 'Expense Types', path: 'expenses/types', count: 8 },
    // { id: 'monthly_expenses', label: 'Monthly Expenses', path: 'expenses/monthly', count: '₹1.2L' },
    // { id: 'rent_utilities', label: 'Rent & Utilities', path: 'expenses/rent', count: null },
    // { id: 'equipment', label: 'Equipment', path: 'expenses/equipment', count: null },
    // { id: 'profit_loss', label: 'Profit & Loss', path: 'expenses/profit-loss', count: null },
  ];

  // Reports & Analytics
  const reportsAnalytics = [
    { id: 'financial_reports', label: 'Financial Reports', path: 'reports/financial', count: null },
    { id: 'attendance_reports', label: 'Attendance Reports', path: 'reports/attendance', count: null },
    { id: 'member_reports', label: 'Member Reports', path: 'reports/members', count: null },
    { id: 'expiry_reports', label: 'Expiry Reports', path: 'reports/expiry', count: 29 },
    { id: 'revenue_graph', label: 'Revenue Graph', path: 'reports/revenue', count: null },
    { id: 'export_reports', label: 'Export Reports', path: 'reports/export', count: null },
  ];

  // Notifications & Reminders
  const notifications = [
    { id: 'all_notifications', label: 'All Notifications', path: 'notifications/all', count: 24 },
    // { id: 'expiry_reminders', label: 'Expiry Reminders', path: 'notifications/expiry', count: 18 },
    // { id: 'payment_reminders', label: 'Payment Reminders', path: 'notifications/payment', count: 32 },
    // { id: 'broadcast', label: 'Broadcast Messages', path: 'notifications/broadcast', count: null },
    // { id: 'whatsapp_sms', label: 'WhatsApp/SMS Setup', path: 'notifications/setup', count: null },
  ];

  // System
  const system = [
    { id: 'settings', label: 'Settings', icon: Settings, path: 'settings' },
    // { id: 'database', label: 'Database Backup', icon: Database, path: 'database' },
    // { id: 'security', label: 'Security', icon: Shield, path: 'security' },
    { id: 'help', label: 'Help & Support', icon: HelpCircle, path: 'help' },
  ];

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(`/ultimate-control${path ? '/' + path : ''}`);
    if (isMobile) {
      onClose();
    }
  };

  // Render count badge
  const renderCount = (count) => {
    if (!count) return null;
    return (
      <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">
        {count}
      </span>
    );
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
                <h1 className="text-lg font-bold text-black">Your Gym Name</h1>
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
                  <h1 className="text-lg font-bold text-black">Your Gym Name </h1>
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
          
          {/* 1️⃣ Dashboard Section */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('dashboard')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <Home className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Dashboard</span>
              </div>
              {expandedSections.dashboard ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.dashboard && (
              <div className="mt-1 space-y-0.5">
                {dashboardItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full flex items-center justify-between px-5 pl-10 py-2 text-left ${
                      (item.path === '' && location.pathname === '/ultimate-control') ||
                      (item.path && isActive(item.path))
                        ? 'bg-blue-50 border-r-4 border-blue-600' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className={`text-sm ${
                      (item.path === '' && location.pathname === '/ultimate-control') ||
                      (item.path && isActive(item.path)) 
                        ? 'text-blue-600 font-medium' : 'text-gray-700'
                    }`}>
                      {item.label}
                    </span>
                    
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 2️⃣ Leads Management */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('leads')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <UserPlus className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Leads Management</span>
              </div>
              {expandedSections.leads ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.leads && (
              <div className="mt-1 space-y-0.5">
                {leadsManagement.map(item => (
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
                    
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ← Separated: 3️⃣ Diet Management */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('diet')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <Apple className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Diet Management</span>
              </div>
              {expandedSections.diet ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.diet && (
              <div className="mt-1 space-y-0.5">
                {dietManagement.map(item => (
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
                    
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ← Separated: 4️⃣ Workout Management */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('workout')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <Dumbbell className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Workout Management</span>
              </div>
              {expandedSections.workout ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.workout && (
              <div className="mt-1 space-y-0.5">
                {workoutManagement.map(item => (
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
                    
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 5️⃣ Member Management */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('members')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <UsersIcon className="w-4 h-4 mr-3 text-blue-600" />
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
                    
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 6️⃣ Membership & Plans */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('membership')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <CreditCard className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Membership & Plans</span>
              </div>
              {expandedSections.membership ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.membership && (
              <div className="mt-1 space-y-0.5">
                {membershipPlans.map(item => (
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
                    
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ← New: Offers & Promotions */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('offers')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <Percent className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Offers & Promotions</span>
              </div>
              {expandedSections.offers ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.offers && (
              <div className="mt-1 space-y-0.5">
                {offersPromotions.map(item => (
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
                    
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 7️⃣ Attendance Management */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('attendance')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Attendance</span>
              </div>
              {expandedSections.attendance ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.attendance && (
              <div className="mt-1 space-y-0.5">
                {attendanceManagement.map(item => (
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
                    
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ← New: 8️⃣ Class Schedule Management */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('classSchedule')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Manage Class Schedule</span>
              </div>
              {expandedSections.classSchedule ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.classSchedule && (
              <div className="mt-1 space-y-0.5">
                {classScheduleManagement.map(item => (
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
                    
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ← New: 9️⃣ Finance Management */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('finance')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <ReceiptIndianRupee className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Finance Management</span>
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

        

          {/* 1️⃣1️⃣ Staff/Trainer Management */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('staff')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <UserCheck className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Staff & Trainers</span>
              </div>
              {expandedSections.staff ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.staff && (
              <div className="mt-1 space-y-0.5">
                {staffManagement.map(item => (
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
                    
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 1️⃣2️⃣ Expense Management */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('expenses')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <ReceiptIndianRupee className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Expense Management</span>
              </div>
              {expandedSections.expenses ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.expenses && (
              <div className="mt-1 space-y-0.5">
                {expenseManagement.map(item => (
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
                    
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 1️⃣3️⃣ Reports & Analytics */}
          {/* <div className="mb-3">
            <button
              onClick={() => toggleSection('reports')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <BarChart className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Reports & Analytics</span>
              </div>
              {expandedSections.reports ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.reports && (
              <div className="mt-1 space-y-0.5">
                {reportsAnalytics.map(item => (
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
                    
                  </button>
                ))}
              </div>
            )}
          </div> */}

          {/* 1️⃣4️⃣ Notifications & Reminders */}
          <div className="mb-3">
            <button
              onClick={() => toggleSection('notifications')}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <Bell className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm font-medium text-black">Notifications</span>
              </div>
              {expandedSections.notifications ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.notifications && (
              <div className="mt-1 space-y-0.5">
                {notifications.map(item => (
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
                  <item.icon className={`w-4 h-4 mr-3 ${isActive(item.path) ? 'text-white' : 'text-blue-600'}`} />
                  <span className={`text-sm font-medium ${isActive(item.path) ? 'text-white' : 'text-black'}`}>
                    {item.label}
                  </span>
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