import React, { useState, useEffect } from 'react';
import { 
  Users,
  UserCheck,
  UserX,
  Clock,
  Calendar,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Target,
  Award,
  Search,
  Filter,
  Download,
  Printer,
  CheckCircle,
  XCircle,
  AlertCircle,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Plus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  QrCode,
  Smartphone,
  MapPin,
  Building,
  Dumbbell,
  Heart,
  Zap,
  Activity,
  FileText,
  Bell,
  Settings,
  RefreshCw,
  User,
  CalendarDays,
  CalendarRange,
  Clock as ClockIcon,
  CalendarClock,
  CalendarX,
  CalendarCheck,
  CalendarHeart,
  Menu,
  X,
  ChevronsUpDown,
  Smartphone as SmartphoneIcon,
  Tablet,
  Monitor
} from 'lucide-react';

const Attendance = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('daily');
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Attendance Statistics
  const attendanceStats = {
    totalMembers: 487,
    presentToday: 342,
    absentToday: 145,
    avgDailyAttendance: 320,
    peakHour: '6:00 PM',
    attendanceRate: '89.3%',
    lateArrivals: 28,
    newCheckins: 15
  };

  // Member List with Attendance Status
  const members = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      membershipId: 'FIT001-RK',
      membership: 'Premium Plus',
      checkinTime: '07:30 AM',
      checkoutTime: '09:15 AM',
      duration: '1h 45m',
      status: 'present',
      trainer: 'Aarav Sharma',
      branch: 'Mumbai Central'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      membershipId: 'FIT002-PS',
      membership: 'Standard',
      checkinTime: '06:45 AM',
      checkoutTime: '08:30 AM',
      duration: '1h 45m',
      status: 'present',
      trainer: 'Neha Patel',
      branch: 'Andheri West'
    },
    {
      id: 3,
      name: 'Amit Patel',
      membershipId: 'FIT003-AP',
      membership: 'Basic',
      checkinTime: null,
      checkoutTime: null,
      duration: null,
      status: 'absent',
      trainer: 'Rohan Singh',
      branch: 'Bandra'
    },
    {
      id: 4,
      name: 'Sneha Verma',
      membershipId: 'FIT004-SV',
      membership: 'Premium Plus',
      checkinTime: '08:15 AM',
      checkoutTime: '10:00 AM',
      duration: '1h 45m',
      status: 'present',
      trainer: 'Aarav Sharma',
      branch: 'Mumbai Central'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      membershipId: 'FIT005-VS',
      membership: 'Standard',
      checkinTime: '09:30 AM',
      checkoutTime: '10:45 AM',
      duration: '1h 15m',
      status: 'present',
      trainer: 'Neha Patel',
      branch: 'Andheri West'
    },
    {
      id: 6,
      name: 'Anjali Reddy',
      membershipId: 'FIT006-AR',
      membership: 'Elite',
      checkinTime: '10:00 AM',
      checkoutTime: '12:00 PM',
      duration: '2h 00m',
      status: 'present',
      trainer: 'Rohan Singh',
      branch: 'Bandra'
    },
    {
      id: 7,
      name: 'Karan Malhotra',
      membershipId: 'FIT007-KM',
      membership: 'Basic',
      checkinTime: '07:00 PM',
      checkoutTime: null,
      duration: 'Current',
      status: 'present',
      trainer: 'Aarav Sharma',
      branch: 'Mumbai Central'
    },
    {
      id: 8,
      name: 'Meera Kapoor',
      membershipId: 'FIT008-MK',
      membership: 'Premium Plus',
      checkinTime: '06:00 PM',
      checkoutTime: '07:30 PM',
      duration: '1h 30m',
      status: 'present',
      trainer: 'Neha Patel',
      branch: 'Andheri West'
    }
  ];

  // Attendance Trends (Weekly)
  const weeklyTrend = [
    { day: 'Mon', present: 345, absent: 142, total: 487 },
    { day: 'Tue', present: 328, absent: 159, total: 487 },
    { day: 'Wed', present: 365, absent: 122, total: 487 },
    { day: 'Thu', present: 312, absent: 175, total: 487 },
    { day: 'Fri', present: 298, absent: 189, total: 487 },
    { day: 'Sat', present: 275, absent: 212, total: 487 },
    { day: 'Sun', present: 210, absent: 277, total: 487 }
  ];

  // Peak Hours
  const peakHours = isMobile 
    ? [
        { hour: '6 AM', count: 45 },
        { hour: '8 AM', count: 112 },
        { hour: '10 AM', count: 45 },
        { hour: '6 PM', count: 124 },
        { hour: '8 PM', count: 45 }
      ]
    : [
        { hour: '6:00 AM', count: 45 },
        { hour: '7:00 AM', count: 89 },
        { hour: '8:00 AM', count: 112 },
        { hour: '9:00 AM', count: 78 },
        { hour: '10:00 AM', count: 45 },
        { hour: '4:00 PM', count: 32 },
        { hour: '5:00 PM', count: 67 },
        { hour: '6:00 PM', count: 124 },
        { hour: '7:00 PM', count: 98 },
        { hour: '8:00 PM', count: 45 }
      ];

  // Trainers Attendance
  const trainerStats = [
    { name: 'Aarav Sharma', members: 165, present: 148, rate: '89.7%' },
    { name: 'Neha Patel', members: 142, present: 128, rate: '90.1%' },
    { name: 'Rohan Singh', members: 180, present: 166, rate: '92.2%' }
  ];

  // Branch-wise Attendance
  const branchStats = [
    { branch: 'Mumbai Central', members: 200, present: 178, rate: '89.0%' },
    { branch: 'Andheri West', members: 187, present: 168, rate: '89.8%' },
    { branch: 'Bandra', members: 100, present: 91, rate: '91.0%' }
  ];

  // Recent Check-ins
  const recentCheckins = [
    { id: 1, name: 'Rahul Verma', time: '2 min ago', method: 'QR Code' },
    { id: 2, name: 'Sonia Gupta', time: '5 min ago', method: 'Mobile Version' },
    { id: 3, name: 'Deepak Joshi', time: '8 min ago', method: 'Biometric' },
    { id: 4, name: 'Priyanka Rao', time: '12 min ago', method: 'QR Code' },
    { id: 5, name: 'Ankit Mehta', time: '15 min ago', method: 'Mobile Version' }
  ];

  const statusColors = {
    present: 'bg-green-100 text-green-800 border-green-200',
    absent: 'bg-red-100 text-red-800 border-red-200',
    late: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  };

  const statusIcons = {
    present: UserCheck,
    absent: UserX,
    late: AlertCircle
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatShortDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDayOfWeek = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const toggleMemberSelection = (id) => {
    setSelectedMembers(prev => 
      prev.includes(id) 
        ? prev.filter(memberId => memberId !== id)
        : [...prev, id]
    );
  };

  const selectAllMembers = () => {
    if (selectedMembers.length === members.length) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(members.map(member => member.id));
    }
  };

  const navigateDate = (direction) => {
    const newDate = new Date(currentDate);
    if (viewMode === 'daily') {
      newDate.setDate(currentDate.getDate() + direction);
    } else if (viewMode === 'weekly') {
      newDate.setDate(currentDate.getDate() + (direction * 7));
    } else {
      newDate.setMonth(currentDate.getMonth() + direction);
    }
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const getPresentCount = () => {
    return members.filter(m => m.status === 'present').length;
  };

  const getAbsentCount = () => {
    return members.filter(m => m.status === 'absent').length;
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 sm:mb-6">
          <div>
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">Attendance Management</h1>
                <p className="text-xs sm:text-sm text-gray-600">Track and manage member attendance in real-time</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 lg:mt-0">
            <button className="flex items-center space-x-1 sm:space-x-2 bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base">
              <QrCode className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">{isMobile ? 'QR Code' : 'Generate QR Code'}</span>
            </button>
            <button className="flex items-center space-x-1 sm:space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Export</span>
            </button>
            {!isMobile && (
              <button className="flex items-center space-x-1 sm:space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                <Printer className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium">Print</span>
              </button>
            )}
          </div>
        </div>

        {/* Attendance Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Present Today</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">{getPresentCount()}</div>
                <div className="text-[10px] sm:text-xs text-green-600">{attendanceStats.attendanceRate} rate</div>
              </div>
              <UserCheck className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Absent Today</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">{getAbsentCount()}</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Out of {members.length} members</div>
              </div>
              <UserX className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Peak Hour</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                  {isMobile ? '6 PM' : attendanceStats.peakHour}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500">Most active time</div>
              </div>
              <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">New Check-ins</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">{attendanceStats.newCheckins}</div>
                <div className="text-[10px] sm:text-xs text-green-600">Today's new entries</div>
              </div>
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => navigateDate(-1)}
                className="p-1.5 sm:p-2 hover:bg-gray-50"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <button
                onClick={goToToday}
                className="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Today
              </button>
              
              <div className="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-black min-w-[140px] sm:min-w-[200px] text-center">
                {isMobile ? formatShortDate(currentDate) : formatDate(currentDate)}
              </div>
              
              <button
                onClick={() => navigateDate(1)}
                className="p-1.5 sm:p-2 hover:bg-gray-50"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {!isMobile && (
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                {['daily', 'weekly', 'monthly'].map(mode => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium capitalize ${
                      viewMode === mode
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-2 sm:gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-black"
              />
            </div>

            {isMobile ? (
              <button 
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="flex items-center space-x-1 px-3 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
              >
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">Filters</span>
              </button>
            ) : (
              <button className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Filters Panel */}
        {isMobile && showMobileFilters && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">View Mode</label>
                <select 
                  value={viewMode}
                  onChange={(e) => setViewMode(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Status</label>
                <select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                  <option value="all">All Status</option>
                  <option value="present">Present</option>
                  <option value="absent">Absent</option>
                  <option value="late">Late</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-gray-200">
          {['overview', 'members', 'reports', 'settings'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-2 sm:py-3 font-medium capitalize border-b-2 -mb-px whitespace-nowrap text-xs sm:text-sm ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Attendance Table */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-4 sm:mb-6">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  <h2 className="text-lg sm:text-xl font-bold text-black">
                    {isMobile ? 'Today' : `Today's Attendance (${getDayOfWeek(currentDate)})`}
                  </h2>
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {getPresentCount()}P • {getAbsentCount()}A
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4">
                      <input
                        type="checkbox"
                        checked={selectedMembers.length === members.length}
                        onChange={selectAllMembers}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 rounded border-gray-300"
                      />
                    </th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Member</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">
                      {isMobile ? 'Check-in' : 'Check-in Time'}
                    </th>
                    {!isMobile && (
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Check-out Time</th>
                    )}
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">
                      {isMobile ? 'Dur' : 'Duration'}
                    </th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Status</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map(member => {
                    const StatusIcon = statusIcons[member.status];
                    const statusColor = statusColors[member.status];
                    
                    return (
                      <tr key={member.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <input
                            type="checkbox"
                            checked={selectedMembers.includes(member.id)}
                            onChange={() => toggleMemberSelection(member.id)}
                            className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 rounded border-gray-300"
                          />
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <div className="flex items-center">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center font-medium text-blue-600 text-xs sm:text-sm mr-2 sm:mr-3">
                              {member.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-medium text-xs sm:text-sm text-black">
                                {isMobile ? member.name.split(' ')[0] : member.name}
                              </div>
                              {!isMobile && (
                                <div className="text-xs text-gray-500">{member.membershipId} • {member.membership}</div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <div className={`font-medium text-xs sm:text-sm ${member.checkinTime ? 'text-black' : 'text-gray-400'}`}>
                            {member.checkinTime || 'Not checked in'}
                          </div>
                          {!isMobile && (
                            <div className="text-xs text-gray-500">{member.branch}</div>
                          )}
                        </td>
                        {!isMobile && (
                          <td className="py-2 sm:py-3 px-2 sm:px-4">
                            <div className={`font-medium text-xs sm:text-sm ${member.checkoutTime ? 'text-black' : 'text-gray-400'}`}>
                              {member.checkoutTime || 'Currently in'}
                            </div>
                          </td>
                        )}
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <div className={`font-medium text-xs sm:text-sm ${member.duration ? 'text-black' : 'text-gray-400'}`}>
                            {member.duration || '-'}
                          </div>
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <span className={`inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium border ${statusColor}`}>
                            <StatusIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 sm:mr-1.5" />
                            {isMobile ? member.status.charAt(0).toUpperCase() : member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            {member.status === 'present' ? (
                              <button className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600">
                                {isMobile ? 'Out' : 'Check Out'}
                              </button>
                            ) : (
                              <button className="px-2 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600">
                                {isMobile ? 'Present' : 'Mark Present'}
                              </button>
                            )}
                            <button className="p-1 sm:p-1.5 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded">
                              <MoreVertical className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Weekly Trend Chart */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <h2 className="text-lg sm:text-xl font-bold text-black">Weekly Attendance Trend</h2>
              </div>
              <button className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm font-medium">
                View Full
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {/* Chart Bars */}
              <div className={`flex items-end ${isMobile ? 'h-32' : 'h-40'} space-x-1 sm:space-x-2`}>
                {weeklyTrend.map((day, index) => {
                  const presentHeight = (day.present / day.total) * 100;
                  const absentHeight = (day.absent / day.total) * 100;
                  
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div className="flex items-end space-x-0.5 sm:space-x-1 w-full justify-center mb-1 sm:mb-2">
                        <div 
                          className={`${isMobile ? 'w-3 sm:w-4' : 'w-6'} bg-green-500 rounded-t`}
                          style={{ height: `${presentHeight}%` }}
                          title={`Present: ${day.present}`}
                        ></div>
                        <div 
                          className={`${isMobile ? 'w-3 sm:w-4' : 'w-6'} bg-red-500 rounded-t`}
                          style={{ height: `${absentHeight}%` }}
                          title={`Absent: ${day.absent}`}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-600">{day.day}</div>
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex justify-center space-x-4 sm:space-x-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded mr-1 sm:mr-2"></div>
                  <span className="text-xs sm:text-sm text-gray-700">Present</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded mr-1 sm:mr-2"></div>
                  <span className="text-xs sm:text-sm text-gray-700">Absent</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4 sm:space-y-6">
          {/* Recent Check-ins */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <h2 className="text-lg sm:text-xl font-bold text-black">Recent Check-ins</h2>
              </div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {recentCheckins.map(checkin => (
                <div key={checkin.id} className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center font-medium text-blue-600 text-xs sm:text-sm mr-2 sm:mr-3">
                      {checkin.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-xs sm:text-sm text-black">
                        {isMobile ? checkin.name.split(' ')[0] : checkin.name}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500">{checkin.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {checkin.method === 'QR Code' && <QrCode className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2" />}
                    {checkin.method === 'Mobile Version' && <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-1 sm:mr-2" />}
                    {checkin.method === 'Biometric' && <UserCheck className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 mr-1 sm:mr-2" />}
                    <span className="text-xs text-gray-600">{isMobile ? checkin.method.charAt(0) : checkin.method}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-3 sm:mt-4 border border-blue-500 text-blue-500 py-1.5 sm:py-2 rounded-lg font-medium hover:bg-blue-50 text-sm">
              View All Activity
            </button>
          </div>

          {/* Peak Hours */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <h2 className="text-lg sm:text-xl font-bold text-black">Peak Hours</h2>
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Today</div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {peakHours.map((hour, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="text-xs sm:text-sm text-gray-700">{hour.hour}</div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className={`${isMobile ? 'w-20' : 'w-32'} bg-gray-200 rounded-full h-1.5 sm:h-2`}>
                      <div 
                        className="bg-blue-500 h-1.5 sm:h-2 rounded-full"
                        style={{ width: `${(hour.count / 124) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-black">{hour.count}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trainer Performance */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <h2 className="text-lg sm:text-xl font-bold text-black">Trainer Performance</h2>
              </div>
              <button className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm font-medium">
                Details
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {trainerStats.map((trainer, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <div className="font-medium text-xs sm:text-sm text-black">
                      {isMobile ? trainer.name.split(' ')[0] : trainer.name}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-green-600">{trainer.rate}</div>
                  </div>
                  <div className="text-xs text-gray-600 mb-1 sm:mb-2">
                    {trainer.present}/{trainer.members} present
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                    <div 
                      className="bg-green-500 h-1.5 sm:h-2 rounded-full"
                      style={{ width: trainer.rate }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button className="flex flex-col items-center justify-center p-2 sm:p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50">
                <QrCode className="w-4 h-4 sm:w-6 sm:h-6 text-blue-500 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-black">QR Scanner</span>
              </button>
              <button className="flex flex-col items-center justify-center p-2 sm:p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50">
                <Bell className="w-4 h-4 sm:w-6 sm:h-6 text-blue-500 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-black">Reminders</span>
              </button>
              <button className="flex flex-col items-center justify-center p-2 sm:p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50">
                <FileText className="w-4 h-4 sm:w-6 sm:h-6 text-blue-500 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-black">Reports</span>
              </button>
              <button className="flex flex-col items-center justify-center p-2 sm:p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50">
                <Settings className="w-4 h-4 sm:w-6 sm:h-6 text-blue-500 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-black">Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-blue-500 text-white p-3 sm:p-6 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs sm:text-sm opacity-90">Total Members</div>
              <div className="text-lg sm:text-2xl font-bold">{attendanceStats.totalMembers}</div>
            </div>
            <Users className="w-6 h-6 sm:w-8 sm:h-8 opacity-90" />
          </div>
        </div>

        <div className="bg-green-500 text-white p-3 sm:p-6 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs sm:text-sm opacity-90">Average Daily</div>
              <div className="text-lg sm:text-2xl font-bold">{attendanceStats.avgDailyAttendance}</div>
            </div>
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 opacity-90" />
          </div>
        </div>

        <div className="bg-purple-500 text-white p-3 sm:p-6 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs sm:text-sm opacity-90">Attendance Rate</div>
              <div className="text-lg sm:text-2xl font-bold">{attendanceStats.attendanceRate}</div>
            </div>
            <Target className="w-6 h-6 sm:w-8 sm:h-8 opacity-90" />
          </div>
        </div>

        <div className="bg-yellow-500 text-white p-3 sm:p-6 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs sm:text-sm opacity-90">Late Arrivals</div>
              <div className="text-lg sm:text-2xl font-bold">{attendanceStats.lateArrivals}</div>
            </div>
            <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 opacity-90" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;