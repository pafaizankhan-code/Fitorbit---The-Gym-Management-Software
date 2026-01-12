import React, { useState, useEffect } from 'react';
import { 
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  LineChart,
  Target,
  Award,
  Users,
  Dumbbell,
  Heart,
  Zap,
  Clock,
  Calendar,
  Star,
  Trophy,
  Activity,
  Search,
  Filter,
  Download,
  Printer,
  Eye,
  Edit,
  MoreVertical,
  ChevronDown,
  RefreshCw,
  Settings,
  Bell,
  User,
  UserCheck,
  UserX,
  IndianRupee,
  Building,
  MapPin,
  Smartphone,
  Mail,
  Phone,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
  Menu,
  X,
  ChevronsUpDown,
  ArrowUpDown,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon
} from 'lucide-react';

const Performance = () => {
  const [timeRange, setTimeRange] = useState('monthly');
  const [viewMode, setViewMode] = useState('overview');
  const [selectedMetric, setSelectedMetric] = useState('all');
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

  // Performance Metrics
  const performanceMetrics = {
    memberRetention: '92.5%',
    avgAttendance: '88.3%',
    revenueGrowth: '+12.8%',
    memberSatisfaction: '4.7/5.0',
    trainerPerformance: '91.2%',
    equipmentUtilization: '78.5%',
    classOccupancy: '85.4%',
    renewalRate: '87.9%'
  };

  // Key Performance Indicators
  const kpis = [
    {
      id: 1,
      title: 'Member Retention',
      mobileTitle: 'Retention',
      value: '92.5%',
      target: '90%',
      status: 'exceeded',
      trend: '+2.5%',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      id: 2,
      title: 'Revenue Growth',
      mobileTitle: 'Revenue',
      value: '+12.8%',
      target: '+10%',
      status: 'exceeded',
      trend: '+2.8%',
      icon: TrendingUp,
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Member Satisfaction',
      mobileTitle: 'Satisfaction',
      value: '4.7/5.0',
      target: '4.5/5.0',
      status: 'exceeded',
      trend: '+0.2',
      icon: Star,
      color: 'bg-yellow-500'
    },
    {
      id: 4,
      title: 'Trainer Performance',
      mobileTitle: 'Trainers',
      value: '91.2%',
      target: '85%',
      status: 'exceeded',
      trend: '+6.2%',
      icon: Trophy,
      color: 'bg-purple-500'
    }
  ];

  // Performance Trends
  const performanceTrends = isMobile 
    ? [
        { month: 'Jan', retention: 88, attendance: 85, revenue: 78 },
        { month: 'Mar', retention: 90, attendance: 87, revenue: 85 },
        { month: 'May', retention: 92, attendance: 89, revenue: 90 },
        { month: 'Jun', retention: 93, attendance: 90, revenue: 92 }
      ]
    : [
        { month: 'Jan', retention: 88, attendance: 85, revenue: 78, satisfaction: 4.3 },
        { month: 'Feb', retention: 89, attendance: 86, revenue: 82, satisfaction: 4.4 },
        { month: 'Mar', retention: 90, attendance: 87, revenue: 85, satisfaction: 4.5 },
        { month: 'Apr', retention: 91, attendance: 88, revenue: 88, satisfaction: 4.6 },
        { month: 'May', retention: 92, attendance: 89, revenue: 90, satisfaction: 4.6 },
        { month: 'Jun', retention: 93, attendance: 90, revenue: 92, satisfaction: 4.7 }
      ];

  // Trainer Performance
  const trainerPerformance = [
    {
      id: 1,
      name: 'Aarav Sharma',
      mobileName: 'Aarav S.',
      specialization: 'Weight Training',
      rating: 4.8,
      members: 165,
      retention: '94.2%',
      attendance: '92.5%',
      status: 'excellent'
    },
    {
      id: 2,
      name: 'Priya Patel',
      mobileName: 'Priya P.',
      specialization: 'Yoga & Pilates',
      rating: 4.9,
      members: 142,
      retention: '96.1%',
      attendance: '94.3%',
      status: 'excellent'
    },
    {
      id: 3,
      name: 'Rohan Singh',
      mobileName: 'Rohan S.',
      specialization: 'CrossFit',
      rating: 4.7,
      members: 180,
      retention: '91.8%',
      attendance: '89.6%',
      status: 'good'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      mobileName: 'Neha G.',
      specialization: 'Zumba',
      rating: 4.6,
      members: 125,
      retention: '89.4%',
      attendance: '87.2%',
      status: 'good'
    }
  ];

  // Class Performance
  const classPerformance = [
    { class: 'Morning Yoga', mobileClass: 'Yoga', attendance: 92, capacity: 100, rating: 4.8, trend: '+3%' },
    { class: 'Cardio Blast', mobileClass: 'Cardio', attendance: 88, capacity: 100, rating: 4.7, trend: '+2%' },
    { class: 'Weight Training', mobileClass: 'Weights', attendance: 95, capacity: 100, rating: 4.6, trend: '+4%' },
    { class: 'Zumba Dance', mobileClass: 'Zumba', attendance: 96, capacity: 100, rating: 4.9, trend: '+5%' },
    { class: 'CrossFit', mobileClass: 'CrossFit', attendance: 90, capacity: 100, rating: 4.7, trend: '+3%' }
  ];

  // Equipment Utilization
  const equipmentUtilization = [
    { equipment: 'Treadmills', mobileEquipment: 'Treadmill', usage: '82%', maintenance: 'Good', trend: '+5%' },
    { equipment: 'Ellipticals', mobileEquipment: 'Elliptical', usage: '76%', maintenance: 'Good', trend: '+3%' },
    { equipment: 'Weight Machines', mobileEquipment: 'Machines', usage: '89%', maintenance: 'Needs Check', trend: '+7%' },
    { equipment: 'Stationary Bikes', mobileEquipment: 'Bikes', usage: '68%', maintenance: 'Excellent', trend: '+2%' },
    { equipment: 'Free Weights', mobileEquipment: 'Weights', usage: '92%', maintenance: 'Good', trend: '+8%' }
  ];

  // Branch Performance
  const branchPerformance = [
    { branch: 'Mumbai Central', mobileBranch: 'Mumbai', members: 200, revenue: 425000, growth: '+15%', rating: 4.7 },
    { branch: 'Andheri West', mobileBranch: 'Andheri', members: 187, revenue: 395000, growth: '+12%', rating: 4.6 },
    { branch: 'Bandra', mobileBranch: 'Bandra', members: 100, revenue: 210000, growth: '+18%', rating: 4.8 }
  ];

  // Member Feedback Summary
  const feedbackSummary = [
    { category: 'Equipment', mobileCategory: 'Equip', rating: 4.6, trend: '+0.3', responses: 245 },
    { category: 'Trainers', mobileCategory: 'Trainer', rating: 4.8, trend: '+0.4', responses: 198 },
    { category: 'Cleanliness', mobileCategory: 'Clean', rating: 4.7, trend: '+0.2', responses: 187 },
    { category: 'Class Variety', mobileCategory: 'Variety', rating: 4.5, trend: '+0.1', responses: 156 },
    { category: 'Value', mobileCategory: 'Value', rating: 4.4, trend: '+0.2', responses: 178 }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'excellent':
      case 'exceeded':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'good':
      case 'achieved':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'average':
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'poor':
      case 'failed':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTrendIcon = (trend) => {
    if (trend.startsWith('+')) return TrendingUp;
    if (trend.startsWith('-')) return TrendingDown;
    return Activity;
  };

  const formatRevenue = (amount) => {
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
    if (amount >= 1000) return `₹${(amount / 1000).toFixed(0)}K`;
    return `₹${amount}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 sm:mb-6">
          <div>
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">Performance Analytics</h1>
                <p className="text-xs sm:text-sm text-gray-600">Comprehensive insights and metrics for gym performance</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 lg:mt-0">
            <button className="flex items-center space-x-1 sm:space-x-2 bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base">
              <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Refresh</span>
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

        {/* KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {kpis.map(kpi => {
            const Icon = kpi.icon;
            const TrendIcon = getTrendIcon(kpi.trend);
            
            return (
              <div key={kpi.id} className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 ${kpi.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className={`inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(kpi.status)}`}>
                    {isMobile ? 'Exc' : 'exceeded'}
                  </span>
                </div>
                <div className="mb-1">
                  <div className="text-xs sm:text-sm text-gray-600">
                    {isMobile ? kpi.mobileTitle : kpi.title}
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">{kpi.value}</div>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-500">Target: {kpi.target}</span>
                  <div className={`flex items-center ${kpi.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    <TrendIcon className="w-3 h-3 mr-1" />
                    <span>{kpi.trend}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
          <div className="flex overflow-x-auto pb-2">
            {['overview', 'trainers', 'classes', 'equipment', 'branches'].map(tab => (
              <button
                key={tab}
                onClick={() => setViewMode(tab)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium capitalize whitespace-nowrap mr-2 text-xs sm:text-sm ${
                  viewMode === tab
                    ? 'bg-blue-500 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {isMobile ? tab.charAt(0).toUpperCase() : tab}
              </button>
            ))}
          </div>

          <div className="flex gap-2 sm:gap-3 mt-3 lg:mt-0">
            {isMobile ? (
              <button 
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="flex items-center space-x-1 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
              >
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">Filters</span>
              </button>
            ) : (
              <>
                <div className="relative">
                  <select 
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)}
                    className="appearance-none pl-8 sm:pl-10 pr-6 sm:pr-8 py-1.5 sm:py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                  <Calendar className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400 pointer-events-none" />
                </div>

                <div className="relative">
                  <select 
                    value={selectedMetric}
                    onChange={(e) => setSelectedMetric(e.target.value)}
                    className="appearance-none pl-8 sm:pl-10 pr-6 sm:pr-8 py-1.5 sm:py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="all">All Metrics</option>
                    <option value="retention">Retention</option>
                    <option value="attendance">Attendance</option>
                    <option value="revenue">Revenue</option>
                    <option value="satisfaction">Satisfaction</option>
                  </select>
                  <Filter className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400 pointer-events-none" />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mobile Filters Panel */}
        {isMobile && showMobileFilters && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Time Range</label>
                <select 
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Metrics</label>
                <select 
                  value={selectedMetric}
                  onChange={(e) => setSelectedMetric(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="all">All Metrics</option>
                  <option value="retention">Retention</option>
                  <option value="attendance">Attendance</option>
                  <option value="revenue">Revenue</option>
                  <option value="satisfaction">Satisfaction</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Performance Trends Chart */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <LineChart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <h2 className="text-lg sm:text-xl font-bold text-black">Performance Trends</h2>
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Last 6 months</div>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-full">
                {/* Chart */}
                <div className="relative h-48 sm:h-64">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 flex flex-col justify-between text-xs text-gray-500">
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
                  </div>

                  {/* Chart area */}
                  <div className="ml-6 sm:ml-8 h-full flex items-end space-x-2 sm:space-x-4">
                    {performanceTrends.map((month, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div className="w-full flex space-x-0.5 sm:space-x-1 mb-1 sm:mb-2">
                          {/* Retention */}
                          <div 
                            className="flex-1 bg-green-500 rounded-t"
                            style={{ height: `${month.retention * (isMobile ? 0.48 : 0.64)}px` }}
                            title={`Retention: ${month.retention}%`}
                          ></div>
                          {/* Attendance */}
                          <div 
                            className="flex-1 bg-blue-500 rounded-t"
                            style={{ height: `${month.attendance * (isMobile ? 0.48 : 0.64)}px` }}
                            title={`Attendance: ${month.attendance}%`}
                          ></div>
                          {/* Revenue (scaled) */}
                          <div 
                            className="flex-1 bg-purple-500 rounded-t"
                            style={{ height: `${month.revenue * (isMobile ? 0.48 : 0.64)}px` }}
                            title={`Revenue Index: ${month.revenue}`}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-600">{month.month}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="flex justify-center space-x-4 sm:space-x-6 mt-3 sm:mt-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded mr-1 sm:mr-2"></div>
                    <span className="text-xs sm:text-sm text-gray-700">Retention</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded mr-1 sm:mr-2"></div>
                    <span className="text-xs sm:text-sm text-gray-700">Attendance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded mr-1 sm:mr-2"></div>
                    <span className="text-xs sm:text-sm text-gray-700">Revenue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trainer Performance */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <h2 className="text-lg sm:text-xl font-bold text-black">Trainer Performance</h2>
              </div>
              <button className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm font-medium">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Trainer</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Rating</th>
                    {!isMobile && (
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Members</th>
                    )}
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Retention</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Status</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {trainerPerformance.map(trainer => (
                    <tr key={trainer.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                      <td className="py-2 sm:py-3 px-2 sm:px-4">
                        <div className="flex items-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center font-medium text-blue-600 text-xs sm:text-sm mr-2 sm:mr-3">
                            {trainer.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium text-xs sm:text-sm text-black">
                              {isMobile ? trainer.mobileName : trainer.name}
                            </div>
                            {!isMobile && (
                              <div className="text-xs text-gray-500">{trainer.specialization}</div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4">
                        <div className="flex items-center">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current mr-1" />
                          <span className="font-medium text-xs sm:text-sm text-black">{trainer.rating}</span>
                        </div>
                      </td>
                      {!isMobile && (
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <div className="text-xs sm:text-sm text-black">{trainer.members}</div>
                        </td>
                      )}
                      <td className="py-2 sm:py-3 px-2 sm:px-4">
                        <div className="font-medium text-xs sm:text-sm text-black">{trainer.retention}</div>
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4">
                        <span className={`inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium border ${getStatusColor(trainer.status)}`}>
                          {isMobile ? trainer.status.charAt(0).toUpperCase() : trainer.status}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4">
                        <button className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 sm:space-y-6">
          {/* Class Performance */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <h2 className="text-lg sm:text-xl font-bold text-black">Class Performance</h2>
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Attendance</div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {classPerformance.map((cls, index) => {
                const TrendIcon = getTrendIcon(cls.trend);
                
                return (
                  <div key={index} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <div className="font-medium text-xs sm:text-sm text-black">
                        {isMobile ? cls.mobileClass : cls.class}
                      </div>
                      <div className={`flex items-center ${cls.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        <TrendIcon className="w-3 h-3 mr-1" />
                        <span className="text-xs">{cls.trend}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm mb-1 sm:mb-2">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current mr-1" />
                        <span className="text-gray-700">{cls.rating}/5.0</span>
                      </div>
                      <div className="text-gray-700">{cls.attendance}/{cls.capacity}</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                      <div 
                        className="bg-green-500 h-1.5 sm:h-2 rounded-full"
                        style={{ width: `${cls.attendance}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Equipment Utilization */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <h2 className="text-lg sm:text-xl font-bold text-black">Equipment Utilization</h2>
              </div>
              <button className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm font-medium">
                {isMobile ? 'Main' : 'Maintenance'}
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {equipmentUtilization.map((equipment, index) => {
                const TrendIcon = getTrendIcon(equipment.trend);
                
                return (
                  <div key={index} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <div className="font-medium text-xs sm:text-sm text-black">
                        {isMobile ? equipment.mobileEquipment : equipment.equipment}
                      </div>
                      <div className="font-bold text-xs sm:text-sm text-black">{equipment.usage}</div>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm mb-1 sm:mb-2">
                      <span className={`inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded text-xs ${
                        equipment.maintenance === 'Excellent' ? 'bg-green-100 text-green-800' :
                        equipment.maintenance === 'Good' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {isMobile ? equipment.maintenance.charAt(0) : equipment.maintenance}
                      </span>
                      <div className={`flex items-center ${equipment.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        <TrendIcon className="w-3 h-3 mr-1" />
                        <span className="text-xs">{equipment.trend}</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                      <div 
                        className="bg-blue-500 h-1.5 sm:h-2 rounded-full"
                        style={{ width: equipment.usage }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Member Feedback */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <h2 className="text-lg sm:text-xl font-bold text-black">Member Feedback</h2>
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Avg: 4.6/5.0</div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {feedbackSummary.map((feedback, index) => {
                const TrendIcon = getTrendIcon(feedback.trend);
                
                return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="text-xs sm:text-sm text-gray-700">
                      {isMobile ? feedback.mobileCategory : feedback.category}
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                        <span className="text-xs sm:text-sm font-medium text-black ml-1">{feedback.rating}</span>
                      </div>
                      <div className={`flex items-center ${feedback.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        <TrendIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5" />
                        <span className="text-xs">{feedback.trend}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="w-full mt-3 sm:mt-4 border border-blue-500 text-blue-500 py-1.5 sm:py-2 rounded-lg font-medium hover:bg-blue-50 text-sm">
              View All Feedback
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Branch Performance */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Building className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <h2 className="text-lg sm:text-xl font-bold text-black">Branch Performance</h2>
            </div>
            <button className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm font-medium">
              Compare
            </button>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {branchPerformance.map((branch, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <div className="font-medium text-xs sm:text-sm text-black">
                    {isMobile ? branch.mobileBranch : branch.branch}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current mr-1" />
                    <span className="font-medium text-xs sm:text-sm text-black">{branch.rating}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-1 sm:mb-2">
                  <div>
                    <div className="text-xs sm:text-sm text-gray-600">Members</div>
                    <div className="font-bold text-xs sm:text-sm text-black">{branch.members}</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-600">Revenue</div>
                    <div className="font-bold text-xs sm:text-sm text-black flex items-center">
                      <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5" />
                      {formatRevenue(branch.revenue)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Growth</span>
                  <span className={`font-medium ${branch.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {branch.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Summary */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <h2 className="text-lg sm:text-xl font-bold text-black">Performance Summary</h2>
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Current Period</div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="text-center p-3 sm:p-4 border border-gray-200 rounded-lg">
              <div className="text-lg sm:text-2xl font-bold text-green-600">{performanceMetrics.memberRetention}</div>
              <div className="text-xs sm:text-sm text-gray-600">Retention</div>
              <div className="text-[10px] sm:text-xs text-green-600 mt-1">↑ Target: 90%</div>
            </div>
            <div className="text-center p-3 sm:p-4 border border-gray-200 rounded-lg">
              <div className="text-lg sm:text-2xl font-bold text-blue-600">{performanceMetrics.avgAttendance}</div>
              <div className="text-xs sm:text-sm text-gray-600">Attendance</div>
              <div className="text-[10px] sm:text-xs text-green-600 mt-1">↑ From 86.5%</div>
            </div>
            <div className="text-center p-3 sm:p-4 border border-gray-200 rounded-lg">
              <div className="text-lg sm:text-2xl font-bold text-purple-600">{performanceMetrics.revenueGrowth}</div>
              <div className="text-xs sm:text-sm text-gray-600">Revenue</div>
              <div className="text-[10px] sm:text-xs text-green-600 mt-1">↑ From +10.2%</div>
            </div>
            <div className="text-center p-3 sm:p-4 border border-gray-200 rounded-lg">
              <div className="text-lg sm:text-2xl font-bold text-yellow-600">{performanceMetrics.memberSatisfaction}</div>
              <div className="text-xs sm:text-sm text-gray-600">Satisfaction</div>
              <div className="text-[10px] sm:text-xs text-green-600 mt-1">↑ From 4.5/5.0</div>
            </div>
            <div className="text-center p-3 sm:p-4 border border-gray-200 rounded-lg">
              <div className="text-lg sm:text-2xl font-bold text-indigo-600">{performanceMetrics.trainerPerformance}</div>
              <div className="text-xs sm:text-sm text-gray-600">Trainers</div>
              <div className="text-[10px] sm:text-xs text-green-600 mt-1">↑ Target: 85%</div>
            </div>
            <div className="text-center p-3 sm:p-4 border border-gray-200 rounded-lg">
              <div className="text-lg sm:text-2xl font-bold text-orange-600">{performanceMetrics.equipmentUtilization}</div>
              <div className="text-xs sm:text-sm text-gray-600">Equipment</div>
              <div className="text-[10px] sm:text-xs text-green-600 mt-1">↑ From 75.2%</div>
            </div>
            <div className="text-center p-3 sm:p-4 border border-gray-200 rounded-lg">
              <div className="text-lg sm:text-2xl font-bold text-pink-600">{performanceMetrics.classOccupancy}</div>
              <div className="text-xs sm:text-sm text-gray-600">Classes</div>
              <div className="text-[10px] sm:text-xs text-green-600 mt-1">↑ From 82.1%</div>
            </div>
            <div className="text-center p-3 sm:p-4 border border-gray-200 rounded-lg">
              <div className="text-lg sm:text-2xl font-bold text-teal-600">{performanceMetrics.renewalRate}</div>
              <div className="text-xs sm:text-sm text-gray-600">Renewal</div>
              <div className="text-[10px] sm:text-xs text-green-600 mt-1">↑ From 85.3%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;