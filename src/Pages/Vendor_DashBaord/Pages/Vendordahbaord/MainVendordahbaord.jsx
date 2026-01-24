import React, { useState, useRef, useEffect } from 'react';
import { 
  Users,
  IndianRupee,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  LineChart,
  Calendar,
  Clock,
  Dumbbell,
  Heart,
  Award,
  Target,
  Activity,
  Zap,
  Star,
  Bell,
  Settings,
  Search,
  Filter,
  Download,
  Printer,
  Eye,
  Edit,
  MoreVertical,
  ChevronDown,
  RefreshCw,
  Plus,
  ChevronRight,
  User,
  UserCheck,
  UserX,
  Building,
  MapPin,
  Smartphone,
  Mail,
  Package,
  Truck,
  ShoppingCart,
  CreditCard,
  Wallet,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
  ClockIcon,
  CalendarDays,
  CalendarRange,
  Shield,
  Database,
  Server,
  Cpu,
  Network,
  Cloud,
  HardDrive,
  X
} from 'lucide-react';

// Import your components (adjust paths as needed)
// import AddInvoice // Adjust this path
import AddInvoice from '../ManageInvoice/Addinvoices/Addinvoices';
import AddNewLeads from '../AllLeads/AddNewLeads/AddNewLeads';
// import AddNewLeads from '.'; // Adjust this path

const MainVendordahbaord = () => {
  const [timeRange, setTimeRange] = useState('thisMonth');
  const [activeView, setActiveView] = useState('overview');
  const [selectedMetrics, setSelectedMetrics] = useState(['revenue', 'members', 'attendance']);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);
  const sliderRef = useRef(null);

  // Dashboard Statistics
  const dashboardStats = {
    totalMembers: 487,
    activeMembers: 432,
    monthlyRevenue: 845000,
    pendingPayments: 185000,
    avgAttendance: 88.3,
    equipmentValue: 3250000,
    staffCount: 24,
    renewalRate: 92.5,
    memberGrowth: 8.2,
    revenueGrowth: 12.8,
    classOccupancy: 85.4,
    equipmentUtilization: 78.5
  };

  // Revenue Trend
  const revenueTrend = [
    { month: 'Jan', revenue: 720000, expenses: 285000 },
    { month: 'Feb', revenue: 780000, expenses: 295000 },
    { month: 'Mar', revenue: 820000, expenses: 305000 },
    { month: 'Apr', revenue: 840000, expenses: 310000 },
    { month: 'May', revenue: 860000, expenses: 315000 },
    { month: 'Jun', revenue: 845000, expenses: 325000 }
  ];

  // Member Demographics
  const memberDemographics = [
    { ageGroup: '18-25', count: 125, percentage: 25.7 },
    { ageGroup: '26-35', count: 198, percentage: 40.7 },
    { ageGroup: '36-45', count: 112, percentage: 23.0 },
    { ageGroup: '46+', count: 52, percentage: 10.6 }
  ];

  // Membership Types
  const membershipTypes = [
    { type: 'Premium Plus', count: 89, revenue: 3560000, color: 'bg-blue-500' },
    { type: 'Elite', count: 67, revenue: 4020000, color: 'bg-purple-500' },
    { type: 'Standard', count: 245, revenue: 5880000, color: 'bg-green-500' },
    { type: 'Basic', count: 86, revenue: 1290000, color: 'bg-gray-500' }
  ];

  // Recent Activities
  const recentActivities = [
    { id: 1, member: 'Rajesh Kumar', action: 'Joined Premium Plus', time: '2 hours ago', type: 'membership' },
    { id: 2, member: 'Priya Sharma', action: 'Paid ₹24,000', time: '3 hours ago', type: 'payment' },
    { id: 3, member: 'Amit Patel', action: 'Checked in for Yoga', time: '4 hours ago', type: 'attendance' },
    { id: 4, member: 'Sneha Verma', action: 'Renewed Membership', time: '5 hours ago', type: 'renewal' },
    { id: 5, member: 'Vikram Singh', action: 'Booked Personal Training', time: '6 hours ago', type: 'booking' }
  ];

  // Top Performing Trainers
  const topTrainers = [
    { name: 'Aarav Sharma', rating: 4.8, members: 165, retention: '94.2%', specialty: 'Weight Training' },
    { name: 'Priya Patel', rating: 4.9, members: 142, retention: '96.1%', specialty: 'Yoga' },
    { name: 'Rohan Singh', rating: 4.7, members: 180, retention: '91.8%', specialty: 'CrossFit' },
    { name: 'Neha Gupta', rating: 4.6, members: 125, retention: '89.4%', specialty: 'Zumba' }
  ];

  // Equipment Status
  const equipmentStatus = [
    { equipment: 'Treadmills', total: 12, operational: 10, utilization: '82%' },
    { equipment: 'Ellipticals', total: 8, operational: 7, utilization: '76%' },
    { equipment: 'Weight Machines', total: 25, operational: 23, utilization: '89%' },
    { equipment: 'Stationary Bikes', total: 15, operational: 14, utilization: '68%' }
  ];

  // Upcoming Renewals
  const upcomingRenewals = [
    { member: 'Karan Malhotra', plan: 'Basic', amount: 15000, dueDate: 'Tomorrow' },
    { member: 'Meera Kapoor', plan: 'Premium Plus', amount: 27000, dueDate: 'In 2 days' },
    { member: 'Suresh Gupta', plan: 'Standard', amount: 18000, dueDate: 'In 3 days' },
    { member: 'Anjali Reddy', plan: 'Elite', amount: 60000, dueDate: 'In 5 days' }
  ];

  // System Health
  const systemHealth = [
    { service: 'Database', status: 'healthy', uptime: '99.9%', icon: Database },
    { service: 'Payments', status: 'healthy', uptime: '99.8%', icon: CreditCard },
    { service: 'Attendance', status: 'healthy', uptime: '99.7%', icon: UserCheck },
    { service: 'API', status: 'warning', uptime: '98.5%', icon: Server }
  ];

  // Handle click outside slider
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sliderRef.current && !sliderRef.current.contains(event.target) && 
          !event.target.closest('.open-slider-btn')) {
        closeSlider();
      }
    };

    if (isSliderOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSliderOpen]);

  // Open slider with specific component
  const openSlider = (component) => {
    setActiveComponent(component);
    setIsSliderOpen(true);
    // Prevent body scroll when slider is open
    document.body.style.overflow = 'hidden';
  };

  // Close slider
  const closeSlider = () => {
    setIsSliderOpen(false);
    setActiveComponent(null);
    // Restore body scroll
    document.body.style.overflow = 'auto';
  };

  // Render component based on activeComponent state
  const renderComponent = () => {
    switch (activeComponent) {
      case 'invoice':
        return <AddInvoice onClose={closeSlider} />;
      case 'leads':
        return <AddNewLeads onClose={closeSlider} />;
      default:
        return null;
    }
  };

  // Get slider title
  const getSliderTitle = () => {
    switch (activeComponent) {
      case 'invoice':
        return 'Create New Invoice';
      case 'leads':
        return 'Add New Lead';
      default:
        return '';
    }
  };

  // Get slider icon
  const getSliderIcon = () => {
    switch (activeComponent) {
      case 'invoice':
        return FileText;
      case 'leads':
        return Users;
      default:
        return FileText;
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatCompactCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(1)}K`;
    }
    return `₹${amount}`;
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'healthy':
      case 'operational':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getActivityIcon = (type) => {
    switch(type) {
      case 'membership': return User;
      case 'payment': return IndianRupee;
      case 'attendance': return UserCheck;
      case 'renewal': return RefreshCw;
      case 'booking': return Calendar;
      default: return Activity;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 md:mb-6">
          {/* Left side - Title & subtitle */}
          <div className="lg:mb-0">
            <div className="flex items-center mb-2">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-black">FitOrbit Dashboard</h1>
                <p className="text-gray-600 text-sm md:text-base">Gym Name • Your Location</p>
              </div>
            </div>
          </div>

          {/* Right side - Action buttons */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {/* Create Invoice Button */}
            <button 
              onClick={() => openSlider('invoice')}
              className="open-slider-btn inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition font-medium text-sm md:text-base shadow-sm"
            >
              <FileText className="w-4 h-4 mr-2" />
              Create Invoice
            </button>

            {/* Add Lead Button */}
            <button 
              onClick={() => openSlider('leads')}
              className="open-slider-btn inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition font-medium text-sm md:text-base shadow-sm"
            >
              <Users className="w-4 h-4 mr-2" />
              Add Lead
            </button>
          </div>
        </div>

       

      </div>

    

    

      {/* Right Slider Overlay */}
{isSliderOpen && (
  <div
    className="
      fixed inset-0 
      bg-black bg-opacity-20 
      z-50 
      transition-opacity 
      duration-500 
      ease-out
    "
  >
    <div
      ref={sliderRef}
      className={`
        fixed inset-y-0 right-0
        w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-[70%] 2xl:w-[65%]
        bg-white shadow-2xl
        transform transition-transform
        duration-500 ease-out
        ${isSliderOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      {/* Header - Sticky */}
      <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-neutral-200 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-50">
            {(() => {
              const Icon = getSliderIcon();
              return <Icon className="w-5 h-5 text-blue-600" />;
            })()}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {getSliderTitle()}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              {activeComponent === 'invoice'
                ? 'Create and send new invoice'
                : 'Add new lead to the system'}
            </p>
          </div>
        </div>

        <button
          onClick={closeSlider}
          className="
            p-2 rounded-full 
            hover:bg-neutral-100 
            active:bg-neutral-200 
            transition-colors duration-200
          "
          aria-label="Close slider"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Scrollable Content Area */}
      <div className="h-[calc(100vh-64px)] overflow-y-auto overscroll-contain">
        <div className="md:p-3 p-1">
          {renderComponent()}
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default MainVendordahbaord;