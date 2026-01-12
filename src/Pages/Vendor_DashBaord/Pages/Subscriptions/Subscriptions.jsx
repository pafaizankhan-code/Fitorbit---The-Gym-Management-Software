import React, { useState, useEffect } from 'react';
import { 
  Users,
  TrendingUp,
  TrendingDown,
  Calendar,
  DollarSign,
  CreditCard,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  Printer,
  Plus,
  ChevronDown,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  User,
  Shield,
  Award,
  Target,
  RefreshCw,
  FileText,
  BarChart3,
  PieChart,
  LineChart,
  Bell,
  Settings,
  HelpCircle,
  ChevronLeft,
  Menu,
  X,
  ChevronsUpDown,
  ArrowUpDown,
  IndianRupee,
  CalendarDays,
  CalendarRange,
  Receipt,
  Calculator,
  Percent,
  Tag,
  Database,
  Upload,
  QrCode,
  Smartphone,
  Building,
  ExternalLink
} from 'lucide-react';

const Subscriptions = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubscriptions, setSelectedSubscriptions] = useState([]);
  const [dateRange, setDateRange] = useState('thisMonth');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showAddSubscription, setShowAddSubscription] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Subscription statistics
  const subscriptionStats = {
    totalMembers: 245,
    activeSubscriptions: 185,
    expiringThisMonth: 28,
    expiredSubscriptions: 32,
    monthlyRevenue: 845000,
    averageSubscriptionValue: 4565,
    renewalRate: 85.5,
    growthRate: 12.5
  };

  // Membership plan distribution
  const planDistribution = [
    { plan: 'Premium Plus', members: 45, revenue: 450000, color: 'bg-blue-500' },
    { plan: 'Elite', members: 35, revenue: 350000, color: 'bg-purple-500' },
    { plan: 'Premium', members: 65, revenue: 195000, color: 'bg-green-500' },
    { plan: 'Standard', members: 75, revenue: 180000, color: 'bg-yellow-500' },
    { plan: 'Basic', members: 25, revenue: 50000, color: 'bg-gray-500' }
  ];

  // Subscription duration breakdown
  const durationBreakdown = [
    { duration: 'Annual', members: 85, percentage: 46, color: 'bg-blue-500' },
    { duration: '6 Months', members: 45, percentage: 24, color: 'bg-green-500' },
    { duration: '3 Months', members: 35, percentage: 19, color: 'bg-purple-500' },
    { duration: 'Monthly', members: 20, percentage: 11, color: 'bg-yellow-500' }
  ];

  // Subscription data
  const subscriptions = [
    {
      id: 1,
      memberId: 'MEM001',
      memberName: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      email: 'rajesh.kumar@email.com',
      plan: 'Premium Plus',
      amount: 15000,
      startDate: '2024-01-15',
      endDate: '2025-01-14',
      status: 'active',
      paymentMethod: 'UPI',
      autoRenew: true,
      sessionsLeft: 45,
      personalTrainer: 'John Doe',
      membershipType: 'Annual'
    },
    {
      id: 2,
      memberId: 'MEM002',
      memberName: 'Priya Sharma',
      phone: '+91 98765 43211',
      email: 'priya.sharma@email.com',
      plan: 'Elite',
      amount: 12000,
      startDate: '2024-02-01',
      endDate: '2024-08-01',
      status: 'active',
      paymentMethod: 'Credit Card',
      autoRenew: true,
      sessionsLeft: 24,
      personalTrainer: 'Sarah Smith',
      membershipType: '6 Months'
    },
    {
      id: 3,
      memberId: 'MEM003',
      memberName: 'Amit Patel',
      phone: '+91 98765 43212',
      email: 'amit.patel@email.com',
      plan: 'Premium',
      amount: 8000,
      startDate: '2024-03-01',
      endDate: '2024-06-01',
      status: 'active',
      paymentMethod: 'Bank Transfer',
      autoRenew: false,
      sessionsLeft: 12,
      personalTrainer: 'Mike Johnson',
      membershipType: '3 Months'
    },
    {
      id: 4,
      memberId: 'MEM004',
      memberName: 'Sneha Verma',
      phone: '+91 98765 43213',
      email: 'sneha.verma@email.com',
      plan: 'Standard',
      amount: 5000,
      startDate: '2024-03-15',
      endDate: '2024-04-15',
      status: 'expiring',
      paymentMethod: 'Cash',
      autoRenew: false,
      sessionsLeft: 8,
      personalTrainer: 'None',
      membershipType: 'Monthly'
    },
    {
      id: 5,
      memberId: 'MEM005',
      memberName: 'Vikram Singh',
      phone: '+91 98765 43214',
      email: 'vikram.singh@email.com',
      plan: 'Premium Plus',
      amount: 15000,
      startDate: '2023-12-01',
      endDate: '2024-03-01',
      status: 'expired',
      paymentMethod: 'UPI',
      autoRenew: false,
      sessionsLeft: 0,
      personalTrainer: 'John Doe',
      membershipType: '3 Months'
    },
    {
      id: 6,
      memberId: 'MEM006',
      memberName: 'Anjali Reddy',
      phone: '+91 98765 43215',
      email: 'anjali.reddy@email.com',
      plan: 'Elite',
      amount: 12000,
      startDate: '2024-01-20',
      endDate: '2024-07-20',
      status: 'active',
      paymentMethod: 'Credit Card',
      autoRenew: true,
      sessionsLeft: 30,
      personalTrainer: 'Sarah Smith',
      membershipType: '6 Months'
    },
    {
      id: 7,
      memberId: 'MEM007',
      memberName: 'Karan Malhotra',
      phone: '+91 98765 43216',
      email: 'karan.malhotra@email.com',
      plan: 'Basic',
      amount: 3000,
      startDate: '2024-03-01',
      endDate: '2024-04-01',
      status: 'active',
      paymentMethod: 'Wallet',
      autoRenew: true,
      sessionsLeft: 4,
      personalTrainer: 'None',
      membershipType: 'Monthly'
    },
    {
      id: 8,
      memberId: 'MEM008',
      memberName: 'Meera Kapoor',
      phone: '+91 98765 43217',
      email: 'meera.kapoor@email.com',
      plan: 'Premium',
      amount: 8000,
      startDate: '2024-02-15',
      endDate: '2024-05-15',
      status: 'expiring',
      paymentMethod: 'UPI',
      autoRenew: true,
      sessionsLeft: 15,
      personalTrainer: 'Mike Johnson',
      membershipType: '3 Months'
    }
  ];

  // Filter subscriptions based on active tab and search
  const filteredSubscriptions = subscriptions.filter(sub => {
    const matchesSearch = searchTerm === '' || 
      sub.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.memberId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = 
      activeTab === 'all' ? true :
      activeTab === 'active' ? sub.status === 'active' :
      activeTab === 'expiring' ? sub.status === 'expiring' :
      activeTab === 'expired' ? sub.status === 'expired' : true;
    
    return matchesSearch && matchesTab;
  });

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

  const toggleSubscriptionSelection = (id) => {
    setSelectedSubscriptions(prev => 
      prev.includes(id) 
        ? prev.filter(subId => subId !== id)
        : [...prev, id]
    );
  };

  const selectAllSubscriptions = () => {
    if (selectedSubscriptions.length === filteredSubscriptions.length) {
      setSelectedSubscriptions([]);
    } else {
      setSelectedSubscriptions(filteredSubscriptions.map(sub => sub.id));
    }
  };

  const getStatusBadge = (status) => {
    const config = {
      active: { 
        text: 'text-green-700', 
        bg: 'bg-green-50', 
        border: 'border-green-200',
        icon: CheckCircle,
        label: 'Active'
      },
      expiring: { 
        text: 'text-yellow-700', 
        bg: 'bg-yellow-50', 
        border: 'border-yellow-200',
        icon: AlertCircle,
        label: 'Expiring Soon'
      },
      expired: { 
        text: 'text-red-700', 
        bg: 'bg-red-50', 
        border: 'border-red-200',
        icon: XCircle,
        label: 'Expired'
      }
    };

    const { text, bg, border, icon: Icon, label } = config[status];
    return { text, bg, border, Icon, label };
  };

  const getPlanBadge = (plan) => {
    const config = {
      'Premium Plus': { text: 'text-blue-600', bg: 'bg-blue-50' },
      'Elite': { text: 'text-purple-600', bg: 'bg-purple-50' },
      'Premium': { text: 'text-green-600', bg: 'bg-green-50' },
      'Standard': { text: 'text-yellow-600', bg: 'bg-yellow-50' },
      'Basic': { text: 'text-gray-600', bg: 'bg-gray-50' }
    };

    return config[plan] || { text: 'text-gray-600', bg: 'bg-gray-50' };
  };

  const daysUntilExpiry = (endDate) => {
    const today = new Date();
    const expiry = new Date(endDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 sm:mb-6">
          <div>
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">Gym Subscriptions</h1>
                <p className="text-xs sm:text-sm text-gray-600">Manage all gym memberships and subscriptions</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 lg:mt-0">
            <button 
              onClick={() => setShowAddSubscription(true)}
              className="flex items-center space-x-1 sm:space-x-2 bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
            >
              <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Add Subscription</span>
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

        {/* Subscription Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Total Members</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                  {subscriptionStats.totalMembers}
                </div>
                <div className="text-[10px] sm:text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {subscriptionStats.growthRate}% growth
                </div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Active Subscriptions</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                  {subscriptionStats.activeSubscriptions}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500">{subscriptionStats.renewalRate}% renewal rate</div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Monthly Revenue</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                  {formatCompactCurrency(subscriptionStats.monthlyRevenue)}
                </div>
                <div className="text-[10px] sm:text-xs text-green-600">From subscriptions</div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Expiring This Month</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                  {subscriptionStats.expiringThisMonth}
                </div>
                <div className="text-[10px] sm:text-xs text-yellow-600">Requires follow-up</div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
          {/* Tabs */}
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              All ({subscriptions.length})
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm ${activeTab === 'active' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Active ({subscriptions.filter(s => s.status === 'active').length})
            </button>
            <button
              onClick={() => setActiveTab('expiring')}
              className={`px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm ${activeTab === 'expiring' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Expiring ({subscriptions.filter(s => s.status === 'expiring').length})
            </button>
            <button
              onClick={() => setActiveTab('expired')}
              className={`px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm ${activeTab === 'expired' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Expired ({subscriptions.filter(s => s.status === 'expired').length})
            </button>
          </div>

          {/* Search and Filters */}
          <div className="flex gap-2 sm:gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search members, plans..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-black"
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
              <>
                <div className="relative">
                  <select 
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="appearance-none pl-8 pr-6 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="thisMonth">This Month</option>
                    <option value="lastMonth">Last Month</option>
                    <option value="thisQuarter">This Quarter</option>
                    <option value="thisYear">This Year</option>
                    <option value="custom">Custom Range</option>
                  </select>
                  <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                </div>

                <button className="flex items-center space-x-1 px-3 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                  <Filter className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700">More Filters</span>
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
                <label className="block text-xs font-medium text-gray-700 mb-2">Plan Type</label>
                <select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                  <option value="all">All Plans</option>
                  <option value="premium_plus">Premium Plus</option>
                  <option value="elite">Elite</option>
                  <option value="premium">Premium</option>
                  <option value="standard">Standard</option>
                  <option value="basic">Basic</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Duration</label>
                <select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                  <option value="all">All Durations</option>
                  <option value="annual">Annual</option>
                  <option value="6months">6 Months</option>
                  <option value="3months">3 Months</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Subscriptions Table */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  <h2 className="text-lg sm:text-xl font-bold text-black">
                    {activeTab === 'all' ? 'All Subscriptions' :
                     activeTab === 'active' ? 'Active Subscriptions' :
                     activeTab === 'expiring' ? 'Expiring Subscriptions' :
                     'Expired Subscriptions'} ({filteredSubscriptions.length})
                  </h2>
                </div>
                {selectedSubscriptions.length > 0 && (
                  <div className="text-sm text-blue-600 font-medium">
                    {selectedSubscriptions.length} selected
                  </div>
                )}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-3 px-4">
                      <input
                        type="checkbox"
                        checked={selectedSubscriptions.length === filteredSubscriptions.length}
                        onChange={selectAllSubscriptions}
                        className="w-4 h-4 text-blue-600 rounded border-gray-300"
                      />
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Member ID</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Member</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Plan</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Amount</th>
                    {!isMobile && (
                      <>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Start Date</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">End Date</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Sessions</th>
                      </>
                    )}
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubscriptions.map((subscription) => {
                    const { text, bg, border, Icon, label } = getStatusBadge(subscription.status);
                    const planBadge = getPlanBadge(subscription.plan);
                    const daysLeft = daysUntilExpiry(subscription.endDate);
                    
                    return (
                      <tr key={subscription.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <input
                            type="checkbox"
                            checked={selectedSubscriptions.includes(subscription.id)}
                            onChange={() => toggleSubscriptionSelection(subscription.id)}
                            className="w-4 h-4 text-blue-600 rounded border-gray-300"
                          />
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-medium text-sm text-gray-900">{subscription.memberId}</div>
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            <div className="font-medium text-sm text-gray-900">{subscription.memberName}</div>
                            {!isMobile && (
                              <div className="text-xs text-gray-500">{subscription.email}</div>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${planBadge.bg} ${planBadge.text}`}>
                            {subscription.plan}
                          </span>
                          {!isMobile && (
                            <div className="text-xs text-gray-500 mt-1">{subscription.membershipType}</div>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-bold text-sm text-gray-900 flex items-center">
                            <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            {subscription.amount.toLocaleString('en-IN')}
                          </div>
                          {!isMobile && subscription.autoRenew && (
                            <div className="text-xs text-green-600 flex items-center mt-1">
                              <RefreshCw className="w-2.5 h-2.5 mr-1" />
                              Auto-renew
                            </div>
                          )}
                        </td>
                        {!isMobile && (
                          <>
                            <td className="py-3 px-4 text-sm text-gray-700">{subscription.startDate}</td>
                            <td className="py-3 px-4">
                              <div className="text-sm text-gray-700">{subscription.endDate}</div>
                              {subscription.status === 'expiring' && (
                                <div className="text-xs text-yellow-600 font-medium">
                                  {daysLeft} days left
                                </div>
                              )}
                            </td>
                            <td className="py-3 px-4">
                              <div className="text-sm text-gray-700">{subscription.sessionsLeft} left</div>
                              {subscription.personalTrainer !== 'None' && (
                                <div className="text-xs text-gray-500">PT: {subscription.personalTrainer}</div>
                              )}
                            </td>
                          </>
                        )}
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${bg} ${text} border ${border}`}>
                            <Icon className="w-3 h-3 mr-1.5" />
                            <span>{isMobile ? label.charAt(0) : label}</span>
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded">
                              <Trash2 className="w-4 h-4" />
                            </button>
                            {!isMobile && (
                              <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                                <MoreVertical className="w-4 h-4" />
                              </button>
                            )}
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
          {/* Plan Distribution */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <PieChart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <h2 className="text-lg sm:text-xl font-bold text-black">Plan Distribution</h2>
              </div>
              <div className="text-sm font-medium text-black">{subscriptionStats.totalMembers} members</div>
            </div>

            <div className="space-y-4">
              {planDistribution.map((plan, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{plan.plan}</span>
                    <span className="font-medium text-black">{plan.members} members</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${plan.color}`}
                      style={{ width: `${(plan.members / subscriptionStats.totalMembers) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Revenue: {formatCompactCurrency(plan.revenue)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Duration Breakdown */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <h2 className="text-lg sm:text-xl font-bold text-black">Duration Breakdown</h2>
              </div>
              <button className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm font-medium">
                View Details
              </button>
            </div>

            <div className="space-y-3">
              {durationBreakdown.map((duration, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${duration.color}`}></div>
                    <div>
                      <div className="font-medium text-sm text-gray-900">{duration.duration}</div>
                      <div className="text-xs text-gray-500">{duration.members} members</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-sm text-gray-900">{duration.percentage}%</div>
                    <div className="text-xs text-gray-500">of active</div>
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
                <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-black">New Subscription</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 sm:p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-black">Send Reminders</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 sm:p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50">
                <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-black">Renew Subscriptions</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 sm:p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-black">Generate Report</span>
              </button>
            </div>
          </div>

          {/* Expiring Soon */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-yellow-500" />
                <h2 className="text-lg font-bold text-black">Expiring Soon</h2>
              </div>
              <div className="text-sm font-medium text-yellow-600">{subscriptionStats.expiringThisMonth} members</div>
            </div>
            <div className="space-y-3">
              {subscriptions
                .filter(sub => sub.status === 'expiring')
                .slice(0, 3)
                .map((subscription) => (
                  <div key={subscription.id} className="flex items-center justify-between p-3 border border-yellow-200 bg-yellow-50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm text-gray-900">{subscription.memberName}</div>
                      <div className="text-xs text-gray-600">Ends: {subscription.endDate}</div>
                    </div>
                    <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                      Renew
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Subscription Modal */}
      {showAddSubscription && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-2xl">
            <div className="border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Plus className="w-6 h-6 text-blue-500" />
                  <div>
                    <h2 className="text-xl font-bold text-black">Add New Subscription</h2>
                    <p className="text-sm text-gray-600">Create a new gym membership subscription</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowAddSubscription(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Member Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter member name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Membership Plan *</label>
                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select Plan</option>
                      <option value="premium_plus">Premium Plus - ₹15,000</option>
                      <option value="elite">Elite - ₹12,000</option>
                      <option value="premium">Premium - ₹8,000</option>
                      <option value="standard">Standard - ₹5,000</option>
                      <option value="basic">Basic - ₹3,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration *</label>
                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select Duration</option>
                      <option value="annual">Annual</option>
                      <option value="6months">6 Months</option>
                      <option value="3months">3 Months</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Date *</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Amount (₹) *</label>
                    <input
                      type="number"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                    <span className="text-sm text-gray-700">Enable auto-renewal</span>
                  </label>
                </div>

                <div className="flex justify-end space-x-3 border-t border-gray-200 pt-6">
                  <button
                    type="button"
                    onClick={() => setShowAddSubscription(false)}
                    className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Create Subscription
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscriptions;