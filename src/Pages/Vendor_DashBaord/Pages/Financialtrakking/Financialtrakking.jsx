import React, { useState, useEffect } from 'react';
import { 
  IndianRupee,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  LineChart,
  DollarSign,
  CreditCard,
  Wallet,
  Banknote,
  Calendar,
  Download,
  Printer,
  Filter,
  Search,
  Eye,
  Edit,
  Trash2,
  MoreVertical,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  XCircle,
  Clock,
  Users,
  Target,
  Award,
  RefreshCw,
  FileText,
  Receipt,
  Calculator,
  Percent,
  Tag,
  Shield,
  Database,
  Upload,
  QrCode,
  Smartphone,
  Building,
  MapPin,
  Phone,
  Mail,
  User,
  Star,
  Bell,
  Settings,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  CalendarDays,
  CalendarRange,
  Menu,
  X,
  ChevronsUpDown,
  ArrowUpDown,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon
} from 'lucide-react';

const FinancialTracking = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('thisMonth');
  const [selectedTransactions, setSelectedTransactions] = useState([]);
  const [viewMode, setViewMode] = useState('list');
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

  // Financial Overview Data
  const financialStats = {
    totalRevenue: 1845000,
    monthlyRevenue: 845000,
    pendingPayments: 185000,
    collectedPayments: 660000,
    expenses: 325000,
    netProfit: 520000,
    growthRate: 12.5,
    memberGrowth: 8.2
  };

  // Revenue Breakdown
  const revenueBreakdown = [
    { category: 'Memberships', amount: 720000, percentage: 85, color: 'bg-blue-500' },
    { category: 'Personal Training', amount: 85000, percentage: 10, color: 'bg-green-500' },
    { category: 'Supplements', amount: 25000, percentage: 3, color: 'bg-purple-500' },
    { category: 'Other Services', amount: 15000, percentage: 2, color: 'bg-yellow-500' }
  ];

  // Expense Breakdown
  const expenseBreakdown = [
    { category: 'Staff Salary', amount: 185000, percentage: 57, color: 'bg-red-500' },
    { category: 'Rent & Utilities', amount: 75000, percentage: 23, color: 'bg-orange-500' },
    { category: 'Equipment', amount: 35000, percentage: 11, color: 'bg-blue-500' },
    { category: 'Marketing', amount: 15000, percentage: 5, color: 'bg-pink-500' },
    { category: 'Supplies', amount: 15000, percentage: 4, color: 'bg-gray-500' }
  ];

  // Recent Transactions
  const recentTransactions = [
    {
      id: 1,
      invoiceNo: 'INV-2024-001',
      memberName: 'Rajesh Kumar',
      amount: 45000,
      type: 'membership',
      paymentMethod: 'UPI',
      status: 'paid',
      date: '2024-03-15',
      dueDate: '2024-03-15'
    },
    {
      id: 2,
      invoiceNo: 'INV-2024-002',
      memberName: 'Priya Sharma',
      amount: 24000,
      type: 'membership',
      paymentMethod: 'Credit Card',
      status: 'paid',
      date: '2024-03-14',
      dueDate: '2024-03-14'
    },
    {
      id: 3,
      invoiceNo: 'INV-2024-003',
      memberName: 'Amit Patel',
      amount: 15000,
      type: 'membership',
      paymentMethod: 'Bank Transfer',
      status: 'pending',
      date: '2024-03-13',
      dueDate: '2024-03-20'
    },
    {
      id: 4,
      invoiceNo: 'INV-2024-004',
      memberName: 'Sneha Verma',
      amount: 8500,
      type: 'personal_training',
      paymentMethod: 'Cash',
      status: 'paid',
      date: '2024-03-12',
      dueDate: '2024-03-12'
    },
    {
      id: 5,
      invoiceNo: 'INV-2024-005',
      memberName: 'Vikram Singh',
      amount: 12500,
      type: 'supplements',
      paymentMethod: 'UPI',
      status: 'overdue',
      date: '2024-03-11',
      dueDate: '2024-03-10'
    },
    {
      id: 6,
      invoiceNo: 'INV-2024-006',
      memberName: 'Anjali Reddy',
      amount: 60000,
      type: 'membership',
      paymentMethod: 'Credit Card',
      status: 'paid',
      date: '2024-03-10',
      dueDate: '2024-03-10'
    },
    {
      id: 7,
      invoiceNo: 'INV-2024-007',
      memberName: 'Karan Malhotra',
      amount: 15000,
      type: 'membership',
      paymentMethod: 'Bank Transfer',
      status: 'pending',
      date: '2024-03-09',
      dueDate: '2024-03-16'
    },
    {
      id: 8,
      invoiceNo: 'INV-2024-008',
      memberName: 'Meera Kapoor',
      amount: 27000,
      type: 'membership',
      paymentMethod: 'UPI',
      status: 'paid',
      date: '2024-03-08',
      dueDate: '2024-03-08'
    }
  ];

  // Payment Methods Summary
  const paymentMethods = [
    { method: 'UPI', count: 245, amount: 845000, percentage: 45 },
    { method: 'Credit Card', count: 156, amount: 525000, percentage: 28 },
    { method: 'Bank Transfer', count: 89, amount: 285000, percentage: 15 },
    { method: 'Cash', count: 67, amount: 150000, percentage: 8 },
    { method: 'Other', count: 23, amount: 40000, percentage: 2 }
  ];

  // Monthly Revenue Trend
  const monthlyTrend = [
    { month: 'Oct', revenue: 720000, expenses: 285000 },
    { month: 'Nov', revenue: 780000, expenses: 295000 },
    { month: 'Dec', revenue: 820000, expenses: 305000 },
    { month: 'Jan', revenue: 800000, expenses: 310000 },
    { month: 'Feb', revenue: 840000, expenses: 315000 },
    { month: 'Mar', revenue: 845000, expenses: 325000 }
  ];

  // Top Revenue Members
  const topMembers = [
    { name: 'Rajesh Kumar', membership: 'Premium Plus', amount: 45000, renewals: 3 },
    { name: 'Anjali Reddy', membership: 'Elite', amount: 60000, renewals: 2 },
    { name: 'Suresh Gupta', membership: 'Premium', amount: 35000, renewals: 4 },
    { name: 'Neha Sharma', membership: 'Premium', amount: 35000, renewals: 2 },
    { name: 'Rohan Singh', membership: 'Standard', amount: 24000, renewals: 3 }
  ];

  const statusColors = {
    paid: 'bg-green-100 text-green-800 border-green-200',
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    overdue: 'bg-red-100 text-red-800 border-red-200'
  };

  const statusIcons = {
    paid: CheckCircle,
    pending: Clock,
    overdue: AlertCircle
  };

  const typeColors = {
    membership: 'bg-blue-100 text-blue-800 border-blue-200',
    personal_training: 'bg-green-100 text-green-800 border-green-200',
    supplements: 'bg-purple-100 text-purple-800 border-purple-200'
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
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(1)}K`;
    }
    return `₹${amount}`;
  };

  const toggleTransactionSelection = (id) => {
    setSelectedTransactions(prev => 
      prev.includes(id) 
        ? prev.filter(transId => transId !== id)
        : [...prev, id]
    );
  };

  const selectAllTransactions = () => {
    if (selectedTransactions.length === recentTransactions.length) {
      setSelectedTransactions([]);
    } else {
      setSelectedTransactions(recentTransactions.map(trans => trans.id));
    }
  };

  const getTransactionTypeLabel = (type) => {
    switch(type) {
      case 'membership': return 'Membership';
      case 'personal_training': return 'Personal Training';
      case 'supplements': return 'Supplements';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 sm:mb-6">
          <div>
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">Financial Dashboard</h1>
                <p className="text-xs sm:text-sm text-gray-600">Monitor revenue, expenses, and financial performance</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 lg:mt-0">
            <button className="flex items-center space-x-1 sm:space-x-2 bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base">
              <Receipt className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Create Invoice</span>
            </button>
            <button className="flex items-center space-x-1 sm:space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Export Report</span>
            </button>
            {!isMobile && (
              <button className="flex items-center space-x-1 sm:space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                <Printer className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium">Print</span>
              </button>
            )}
          </div>
        </div>

        {/* Financial Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Total Revenue</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                  {formatCompactCurrency(financialStats.totalRevenue)}
                </div>
                <div className="text-[10px] sm:text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {financialStats.growthRate}% growth
                </div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Monthly Revenue</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                  {formatCompactCurrency(financialStats.monthlyRevenue)}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500">Current month</div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Net Profit</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                  {formatCompactCurrency(financialStats.netProfit)}
                </div>
                <div className="text-[10px] sm:text-xs text-green-600">Profit margin: 61.5%</div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <LineChart className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Pending Payments</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                  {formatCompactCurrency(financialStats.pendingPayments)}
                </div>
                <div className="text-[10px] sm:text-xs text-yellow-600">12 payments pending</div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search invoices, members..."
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-black"
              />
            </div>
          </div>

          <div className="flex gap-2 sm:gap-3">
            {isMobile ? (
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="flex items-center space-x-1 px-3 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
              >
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">Filters</span>
              </button>
            ) : (
              <>
                <div className="relative">
                  <select 
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="appearance-none pl-8 sm:pl-10 pr-6 sm:pr-8 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                    <option value="quarter">This Quarter</option>
                    <option value="year">This Year</option>
                    <option value="custom">Custom Range</option>
                  </select>
                  <Calendar className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400 pointer-events-none" />
                </div>

                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                  >
                    {isMobile ? 'List' : 'List View'}
                  </button>
                  <button
                    onClick={() => setViewMode('chart')}
                    className={`px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm ${viewMode === 'chart' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                  >
                    {isMobile ? 'Chart' : 'Chart View'}
                  </button>
                </div>

                <button className="flex items-center space-x-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                  <Filter className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700">Filters</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Filters Panel */}
        {isMobile && showMobileFilters && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Date Range</label>
                <select 
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                  <option value="year">This Year</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Status</label>
                <select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                  <option value="all">All Status</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                  <option value="overdue">Overdue</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Revenue vs Expenses Chart */}
          {viewMode === 'chart' && (
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-blue-500" />
                  <h2 className="text-xl font-bold text-black">Revenue vs Expenses</h2>
                </div>
                <div className="text-sm font-medium text-black">Last 6 months</div>
              </div>
              <div className="h-64 flex items-end justify-between">
                {monthlyTrend.map((month, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="flex items-end space-x-1 mb-2">
                      <div 
                        className="w-6 sm:w-8 bg-blue-500 rounded-t"
                        style={{ height: `${(month.revenue / 1000000) * 200}px` }}
                      ></div>
                      <div 
                        className="w-6 sm:w-8 bg-red-500 rounded-t"
                        style={{ height: `${(month.expenses / 1000000) * 200}px` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-600">{month.month}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Transactions */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Receipt className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  <h2 className="text-lg sm:text-xl font-bold text-black">Recent Transactions</h2>
                </div>
                <button className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm font-medium">
                  View All
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4">
                      <input
                        type="checkbox"
                        checked={selectedTransactions.length === recentTransactions.length}
                        onChange={selectAllTransactions}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 rounded border-gray-300"
                      />
                    </th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Invoice No</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Member</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Amount</th>
                    {!isMobile && (
                      <>
                        <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Type</th>
                        <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Method</th>
                        <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Date</th>
                      </>
                    )}
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Status</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map(transaction => {
                    const StatusIcon = statusIcons[transaction.status];
                    const statusColor = statusColors[transaction.status];
                    const typeColor = typeColors[transaction.type];
                    
                    return (
                      <tr key={transaction.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <input
                            type="checkbox"
                            checked={selectedTransactions.includes(transaction.id)}
                            onChange={() => toggleTransactionSelection(transaction.id)}
                            className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 rounded border-gray-300"
                          />
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-black">
                          {isMobile ? transaction.invoiceNo.replace('INV-', '') : transaction.invoiceNo}
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <div className="font-medium text-xs sm:text-sm text-black">
                            {isMobile ? transaction.memberName.split(' ')[0] : transaction.memberName}
                          </div>
                          {!isMobile && (
                            <div className="text-xs text-gray-500">Due: {transaction.dueDate}</div>
                          )}
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <div className="font-bold text-xs sm:text-sm text-black flex items-center">
                            <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                            {transaction.amount.toLocaleString('en-IN')}
                          </div>
                        </td>
                        {!isMobile && (
                          <>
                            <td className="py-2 sm:py-3 px-2 sm:px-4">
                              <span className={`inline-flex items-center px-2 py-0.5 sm:py-1 rounded text-xs font-medium border ${typeColor}`}>
                                {getTransactionTypeLabel(transaction.type)}
                              </span>
                            </td>
                            <td className="py-2 sm:py-3 px-2 sm:px-4">
                              <div className="text-xs sm:text-sm text-gray-700">{transaction.paymentMethod}</div>
                            </td>
                            <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-700">{transaction.date}</td>
                          </>
                        )}
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <span className={`inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium border ${statusColor}`}>
                            <StatusIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 sm:mr-1.5" />
                            {isMobile ? transaction.status.charAt(0).toUpperCase() : transaction.status}
                          </span>
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <button className="p-1 sm:p-1.5 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded">
                              <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                            <button className="p-1 sm:p-1.5 text-gray-600 hover:text-green-500 hover:bg-green-50 rounded">
                              <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                            <button className="p-1 sm:p-1.5 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded">
                              <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
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
        </div>

        {/* Sidebar */}
        <div className="space-y-4 sm:space-y-6">
          {/* Revenue Breakdown */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <PieChart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <h2 className="text-lg sm:text-xl font-bold text-black">Revenue Breakdown</h2>
              </div>
              <div className="text-sm font-medium text-black">
                {formatCompactCurrency(financialStats.monthlyRevenue)}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {revenueBreakdown.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span className="text-gray-700">{item.category}</span>
                    <span className="font-medium text-black">{formatCompactCurrency(item.amount)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                    <div 
                      className={`h-1.5 sm:h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mt-1">{item.percentage}% of total</div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <h2 className="text-lg sm:text-xl font-bold text-black">Payment Methods</h2>
              </div>
              <button className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm font-medium">
                View All
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mr-2 sm:mr-3 ${
                      method.method === 'UPI' ? 'bg-blue-100' :
                      method.method === 'Credit Card' ? 'bg-green-100' :
                      method.method === 'Bank Transfer' ? 'bg-purple-100' :
                      method.method === 'Cash' ? 'bg-yellow-100' : 'bg-gray-100'
                    }`}>
                      {method.method === 'UPI' && <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />}
                      {method.method === 'Credit Card' && <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />}
                      {method.method === 'Bank Transfer' && <Banknote className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />}
                      {method.method === 'Cash' && <Wallet className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />}
                      {method.method === 'Other' && <MoreVertical className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />}
                    </div>
                    <div>
                      <div className="font-medium text-xs sm:text-sm text-black">{method.method}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">{method.count} trans</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-xs sm:text-sm text-black">{formatCompactCurrency(method.amount)}</div>
                    <div className="text-[10px] sm:text-xs text-gray-500">{method.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Revenue Members */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <h2 className="text-lg sm:text-xl font-bold text-black">Top Revenue Members</h2>
              </div>
              <button className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm font-medium">
                View All
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {topMembers.map((member, index) => (
                <div key={index} className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center font-medium text-blue-600 text-xs sm:text-sm mr-2 sm:mr-3">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-xs sm:text-sm text-black">
                        {isMobile ? member.name.split(' ')[0] : member.name}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500">{member.membership}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-xs sm:text-sm text-black flex items-center justify-end">
                      <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5" />
                      {member.amount.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500">{member.renewals} renewals</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button className="flex flex-col items-center justify-center p-3 sm:p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50">
                <Receipt className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-black">Create Invoice</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 sm:p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50">
                <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-black">Expense Report</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 sm:p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-black">Financial Report</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 sm:p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-black">Payment Reminders</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialTracking;