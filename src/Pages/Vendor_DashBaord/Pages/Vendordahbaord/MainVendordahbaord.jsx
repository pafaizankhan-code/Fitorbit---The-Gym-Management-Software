import React, { useState } from 'react';
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
  HardDrive
} from 'lucide-react';

const MainVendordahbaord = () => {
  const [timeRange, setTimeRange] = useState('thisMonth');
  const [activeView, setActiveView] = useState('overview');
  const [selectedMetrics, setSelectedMetrics] = useState(['revenue', 'members', 'attendance']);

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
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 md:mb-6">
          <div className="mb-4 lg:mb-0">
            <div className="flex items-center mb-2">
             
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-black">FitOrbit Dashboard</h1>
                <p className="text-gray-600 text-sm md:text-base">Fitness Empire • Mumbai Central</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3">
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              <Plus className="w-4 h-4" />
              <span className="font-medium">Quick Action</span>
            </button>
            <button className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              <Download className="w-4 h-4" />
              <span className="font-medium">Export</span>
            </button>
            <button className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              <Printer className="w-4 h-4" />
              <span className="font-medium">Print</span>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-3 md:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs md:text-sm text-gray-600">Total Members</div>
                <div className="text-lg md:text-2xl font-bold text-black">{dashboardStats.totalMembers}</div>
                <div className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +{dashboardStats.memberGrowth}% growth
                </div>
              </div>
              <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 md:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs md:text-sm text-gray-600">Monthly Revenue</div>
                <div className="text-lg md:text-2xl font-bold text-black">
                  {formatCompactCurrency(dashboardStats.monthlyRevenue)}
                </div>
                <div className="text-xs text-green-600">+{dashboardStats.revenueGrowth}% from last month</div>
              </div>
              <IndianRupee className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 md:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs md:text-sm text-gray-600">Avg. Attendance</div>
                <div className="text-lg md:text-2xl font-bold text-black">{dashboardStats.avgAttendance}%</div>
                <div className="text-xs text-gray-500">Daily average</div>
              </div>
              <Activity className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 md:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs md:text-sm text-gray-600">Renewal Rate</div>
                <div className="text-lg md:text-2xl font-bold text-black">{dashboardStats.renewalRate}%</div>
                <div className="text-xs text-green-600">Member retention</div>
              </div>
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 md:gap-4">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {['overview', 'finance', 'members', 'operations', 'analytics'].map(view => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium capitalize text-sm ${
                  activeView === view
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {view}
              </button>
            ))}
          </div>

          <div className="flex gap-2 md:gap-3">
            <div className="relative">
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="appearance-none pl-9 pr-6 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm w-full"
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <button className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              <Filter className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          {/* Revenue Chart */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
              <div className="flex items-center space-x-3 mb-2 md:mb-0">
                <LineChart className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg md:text-xl font-bold text-black">Revenue vs Expenses</h2>
              </div>
              <div className="text-sm text-gray-600">Last 6 months</div>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-full">
                <div className="relative h-48 md:h-56">
                  {/* Y-axis */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500">
                    <span>₹10L</span>
                    <span>₹7.5L</span>
                    <span>₹5L</span>
                    <span>₹2.5L</span>
                    <span>₹0</span>
                  </div>

                  {/* Chart */}
                  <div className="ml-8 h-full flex items-end space-x-2 md:space-x-4">
                    {revenueTrend.map((month, index) => {
                      const revenueHeight = (month.revenue / 1000000) * 100;
                      const expenseHeight = (month.expenses / 1000000) * 100;
                      
                      return (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div className="flex items-end space-x-1 w-full justify-center mb-2">
                            <div 
                              className="w-3 md:w-4 bg-green-500 rounded-t"
                              style={{ height: `${revenueHeight}%` }}
                              title={`Revenue: ${formatCurrency(month.revenue)}`}
                            ></div>
                            <div 
                              className="w-3 md:w-4 bg-red-500 rounded-t"
                              style={{ height: `${expenseHeight}%` }}
                              title={`Expenses: ${formatCurrency(month.expenses)}`}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-600">{month.month}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Legend */}
                <div className="flex justify-center space-x-4 md:space-x-6 mt-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                    <span className="text-sm text-gray-700">Revenue</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
                    <span className="text-sm text-gray-700">Expenses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Membership Distribution */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <div className="flex items-center space-x-3">
                <PieChart className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg md:text-xl font-bold text-black">Membership Distribution</h2>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Details
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Pie Chart Visualization */}
              <div className="relative h-48 md:h-56 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  {/* Pie segments */}
                  <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-purple-500" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-green-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-gray-500" style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}></div>
                  
                  {/* Center */}
                  <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-black">487</div>
                      <div className="text-xs text-gray-600">Total</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Distribution Details */}
              <div className="space-y-3 md:space-y-4">
                {membershipTypes.map((type, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded mr-3 ${type.color}`}></div>
                      <div>
                        <div className="font-medium text-black text-sm md:text-base">{type.type}</div>
                        <div className="text-xs text-gray-500">{type.count} members</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-black text-sm md:text-base">{formatCompactCurrency(type.revenue)}</div>
                      <div className="text-xs text-gray-500">Revenue</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 md:space-y-6">
          {/* Recent Activities */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <div className="flex items-center space-x-3">
                <Activity className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg md:text-xl font-bold text-black">Recent Activities</h2>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>

            <div className="space-y-3">
              {recentActivities.map(activity => {
                const Icon = getActivityIcon(activity.type);
                
                return (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-black text-sm md:text-base">{activity.member}</div>
                      <div className="text-xs text-gray-600 truncate">{activity.action}</div>
                    </div>
                    <div className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</div>
                  </div>
                );
              })}
            </div>

            <button className="w-full mt-4 border border-blue-600 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 text-sm">
              View All Activities
            </button>
          </div>

          {/* System Health */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg md:text-xl font-bold text-black">System Health</h2>
              </div>
              <div className="text-sm text-green-600">All systems normal</div>
            </div>

            <div className="space-y-3">
              {systemHealth.map((service, index) => {
                const Icon = service.icon;
                
                return (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <Icon className="w-5 h-5 text-gray-600 mr-3" />
                      <div>
                        <div className="font-medium text-black text-sm md:text-base">{service.service}</div>
                        <div className="text-xs text-gray-500">Uptime: {service.uptime}</div>
                      </div>
                    </div>
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Top Trainers */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg md:text-xl font-bold text-black">Top Trainers</h2>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {topTrainers.map((trainer, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-medium text-blue-600 mr-3">
                    {trainer.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-black text-sm md:text-base">{trainer.name}</div>
                    <div className="text-xs text-gray-500">{trainer.specialty}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium text-black ml-1">{trainer.rating}</span>
                  </div>
                  <div className="text-xs text-gray-500">{trainer.retention} retention</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Status */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <div className="flex items-center space-x-3">
              <Dumbbell className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg md:text-xl font-bold text-black">Equipment Status</h2>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Maintenance
            </button>
          </div>

          <div className="space-y-3">
            {equipmentStatus.map((equipment, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium text-black text-sm md:text-base">{equipment.equipment}</div>
                  <div className="text-xs text-gray-600">{equipment.operational}/{equipment.total}</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: equipment.utilization }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Utilization: {equipment.utilization}</span>
                  <span>{equipment.operational} operational</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Renewals */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg md:text-xl font-bold text-black">Upcoming Renewals</h2>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Send Reminders
            </button>
          </div>

          <div className="space-y-3">
            {upcomingRenewals.map((renewal, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <div className="font-medium text-black text-sm md:text-base">{renewal.member}</div>
                  <div className="text-xs text-gray-500">{renewal.plan}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-black text-sm md:text-base flex items-center justify-end">
                    <IndianRupee className="w-4 h-4 mr-1" />
                    {renewal.amount.toLocaleString('en-IN')}
                  </div>
                  <div className="text-xs text-yellow-600">{renewal.dueDate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Member Demographics */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg md:text-xl font-bold text-black">Member Demographics</h2>
            </div>
            <div className="text-sm text-gray-600">Age Groups</div>
          </div>

          <div className="space-y-3">
            {memberDemographics.map((demo, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium text-black text-sm md:text-base">{demo.ageGroup}</div>
                  <div className="text-sm font-bold text-black">{demo.percentage}%</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${demo.percentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{demo.count} members</span>
                  <span>{demo.percentage}% of total</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Metrics Bar */}
      <div className="mt-4 md:mt-6 bg-white rounded-2xl border border-gray-200 p-4 md:p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="text-center p-3 border border-gray-200 rounded-lg">
            <div className="text-lg md:text-xl font-bold text-blue-600">{dashboardStats.staffCount}</div>
            <div className="text-xs md:text-sm text-gray-600">Staff Members</div>
          </div>
          <div className="text-center p-3 border border-gray-200 rounded-lg">
            <div className="text-lg md:text-xl font-bold text-green-600">{dashboardStats.classOccupancy}%</div>
            <div className="text-xs md:text-sm text-gray-600">Class Occupancy</div>
          </div>
          <div className="text-center p-3 border border-gray-200 rounded-lg">
            <div className="text-lg md:text-xl font-bold text-purple-600">{dashboardStats.equipmentUtilization}%</div>
            <div className="text-xs md:text-sm text-gray-600">Equipment Usage</div>
          </div>
          <div className="text-center p-3 border border-gray-200 rounded-lg">
            <div className="text-lg md:text-xl font-bold text-orange-600">{formatCompactCurrency(dashboardStats.equipmentValue)}</div>
            <div className="text-xs md:text-sm text-gray-600">Equipment Value</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVendordahbaord;