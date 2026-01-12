import React, { useState, useEffect } from 'react';
import { 
  IndianRupee,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  LineChart,
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
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  Receipt,
  Calculator,
  Shield,
  FileText,
  ChevronRight,
  ChevronDown,
  ArrowUpDown,
  Mail,
  Phone,
  MapPin,
  User,
  Plus,
  RefreshCw,
  X,
  Check,
  ExternalLink,
  QrCode,
  Smartphone,
  Building,
  Tag,
  Percent,
  ChevronLeft,
  ChevronsUpDown,
  CalendarDays,
  CalendarRange,
  Menu,
  Bell,
  Settings,
  HelpCircle,
  Award,
  Target,
  Database,
  Upload
} from 'lucide-react';

const AllPayments = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedMethod, setSelectedMethod] = useState('all');
  const [dateRange, setDateRange] = useState('thisMonth');
  const [selectedPayments, setSelectedPayments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showCreateInvoice, setShowCreateInvoice] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [viewMode, setViewMode] = useState('list');
  
  // Invoice form state
  const [invoiceForm, setInvoiceForm] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    membershipType: 'Premium',
    amount: '',
    paymentMethod: 'UPI',
    dueDate: '',
    notes: ''
  });

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Payment statistics
  const paymentStats = {
    totalRevenue: 2400,
    collectedThisMonth: 845,
    pendingPayments: 1850,
    averageTransaction: 125,
    successRate: 94.5,
    totalTransactions: 86,
    growthRate: 5,
    memberGrowth: 2
  };

  // Payment methods data
  const paymentMethods = [
    { method: 'Credit Card', count: 19, amount: 680, color: 'bg-green-500', icon: CreditCard },
    { method: 'Bank Transfer', count: 56, amount: 420, color: 'bg-purple-500', icon: Banknote },
    { method: 'Cash', count: 8, amount: 185, color: 'bg-yellow-500', icon: Wallet },
    { method: 'Wallet', count: 8, amount: 175, color: 'bg-indigo-500', icon: Wallet }
  ];

  // Recent Payments
  const recentPayments = [
    {
      id: 1,
      invoiceNo: 'INV-2024-001',
      customerName: 'Rajesh Kumar',
      amount: 450,
      type: 'membership',
      paymentMethod: 'UPI',
      status: 'completed',
      date: '2024-03-15',
      dueDate: '2024-03-15'
    },
    {
      id: 2,
      invoiceNo: 'INV-2024-002',
      customerName: 'Priya Sharma',
      amount: 2400,
      type: 'membership',
      paymentMethod: 'Credit Card',
      status: 'completed',
      date: '2024-03-14',
      dueDate: '2024-03-14'
    },
    {
      id: 3,
      invoiceNo: 'INV-2024-003',
      customerName: 'Amit Patel',
      amount: 1500,
      type: 'membership',
      paymentMethod: 'Bank Transfer',
      status: 'pending',
      date: '2024-03-13',
      dueDate: '2024-03-20'
    },
    {
      id: 4,
      invoiceNo: 'INV-2024-004',
      customerName: 'Sneha Verma',
      amount: 8500,
      type: 'personal_training',
      paymentMethod: 'Cash',
      status: 'completed',
      date: '2024-03-12',
      dueDate: '2024-03-12'
    },
    {
      id: 5,
      invoiceNo: 'INV-2024-005',
      customerName: 'Vikram Singh',
      amount: 12500,
      type: 'supplements',
      paymentMethod: 'UPI',
      status: 'failed',
      date: '2024-03-11',
      dueDate: '2024-03-10'
    },
    {
      id: 6,
      invoiceNo: 'INV-2024-006',
      customerName: 'Anjali Reddy',
      amount: 60000,
      type: 'membership',
      paymentMethod: 'Credit Card',
      status: 'completed',
      date: '2024-03-10',
      dueDate: '2024-03-10'
    },
    {
      id: 7,
      invoiceNo: 'INV-2024-007',
      customerName: 'Karan Malhotra',
      amount: 15000,
      type: 'membership',
      paymentMethod: 'Wallet',
      status: 'pending',
      date: '2024-03-09',
      dueDate: '2024-03-16'
    },
    {
      id: 8,
      invoiceNo: 'INV-2024-008',
      customerName: 'Meera Kapoor',
      amount: 27000,
      type: 'membership',
      paymentMethod: 'UPI',
      status: 'refunded',
      date: '2024-03-08',
      dueDate: '2024-03-08'
    }
  ];

  // Monthly trend data
  const monthlyTrend = [
    { month: 'Oct', revenue: 720000, payments: 285000 },
    { month: 'Nov', revenue: 780000, payments: 295000 },
    { month: 'Dec', revenue: 820000, payments: 305000 },
    { month: 'Jan', revenue: 800000, payments: 310000 },
    { month: 'Feb', revenue: 840000, payments: 315000 },
    { month: 'Mar', revenue: 845000, payments: 325000 }
  ];

  // Top paying members
  const topMembers = [
    { name: 'Rajesh Kumar', membership: 'Premium Plus', amount: 45000, renewals: 3 },
    { name: 'Anjali Reddy', membership: 'Elite', amount: 60000, renewals: 2 },
    { name: 'Suresh Gupta', membership: 'Premium', amount: 35000, renewals: 4 },
    { name: 'Neha Sharma', membership: 'Premium', amount: 35000, renewals: 2 },
    { name: 'Rohan Singh', membership: 'Standard', amount: 24000, renewals: 3 }
  ];

  const statusColors = {
    completed: 'bg-green-100 text-green-800 border-green-200',
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    failed: 'bg-red-100 text-red-800 border-red-200',
    refunded: 'bg-gray-100 text-gray-800 border-gray-200'
  };

  const statusIcons = {
    completed: CheckCircle,
    pending: Clock,
    failed: AlertCircle,
    refunded: RefreshCw
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

  const togglePaymentSelection = (id) => {
    setSelectedPayments(prev => 
      prev.includes(id) 
        ? prev.filter(paymentId => paymentId !== id)
        : [...prev, id]
    );
  };

  const selectAllPayments = () => {
    if (selectedPayments.length === recentPayments.length) {
      setSelectedPayments([]);
    } else {
      setSelectedPayments(recentPayments.map(payment => payment.id));
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

  const handleInvoiceSubmit = (e) => {
    e.preventDefault();
    // Handle invoice creation logic here
    console.log('Invoice created:', invoiceForm);
    setShowCreateInvoice(false);
    // Reset form
    setInvoiceForm({
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      membershipType: 'Premium',
      amount: '',
      paymentMethod: 'UPI',
      dueDate: '',
      notes: ''
    });
  };

  // Create Invoice Modal
  const CreateInvoiceModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Receipt className="w-6 h-6 text-blue-500" />
              <div>
                <h2 className="text-xl font-bold text-black">Create New Invoice</h2>
                <p className="text-sm text-gray-600">Generate invoice for membership or services</p>
              </div>
            </div>
            <button 
              onClick={() => setShowCreateInvoice(false)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <form onSubmit={handleInvoiceSubmit} className="p-6 overflow-y-auto max-h-[70vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Customer Information */}
            <div className="space-y-4">
              <h3 className="font-bold text-gray-900">Customer Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer Name *
                </label>
                <input
                  type="text"
                  required
                  value={invoiceForm.customerName}
                  onChange={(e) => setInvoiceForm({...invoiceForm, customerName: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter customer name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={invoiceForm.customerEmail}
                  onChange={(e) => setInvoiceForm({...invoiceForm, customerEmail: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="customer@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={invoiceForm.customerPhone}
                  onChange={(e) => setInvoiceForm({...invoiceForm, customerPhone: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            {/* Invoice Details */}
            <div className="space-y-4">
              <h3 className="font-bold text-gray-900">Invoice Details</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Membership Type
                </label>
                <select
                  value={invoiceForm.membershipType}
                  onChange={(e) => setInvoiceForm({...invoiceForm, membershipType: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Premium">Premium Membership</option>
                  <option value="Standard">Standard Membership</option>
                  <option value="Basic">Basic Membership</option>
                  <option value="Elite">Elite Membership</option>
                  <option value="Personal Training">Personal Training</option>
                  <option value="Supplements">Supplements</option>
                  <option value="Other">Other Services</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount (₹) *
                </label>
                <input
                  type="number"
                  required
                  value={invoiceForm.amount}
                  onChange={(e) => setInvoiceForm({...invoiceForm, amount: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter amount"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <select
                  value={invoiceForm.paymentMethod}
                  onChange={(e) => setInvoiceForm({...invoiceForm, paymentMethod: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="UPI">UPI</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Cash">Cash</option>
                  <option value="Wallet">Wallet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Due Date *
                </label>
                <input
                  type="date"
                  required
                  value={invoiceForm.dueDate}
                  onChange={(e) => setInvoiceForm({...invoiceForm, dueDate: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes
            </label>
            <textarea
              value={invoiceForm.notes}
              onChange={(e) => setInvoiceForm({...invoiceForm, notes: e.target.value})}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="3"
              placeholder="Any additional notes or instructions..."
            />
          </div>

          {/* Preview */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-4">Invoice Preview</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Customer</p>
                <p className="font-medium text-black">{invoiceForm.customerName || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Amount</p>
                <p className="font-bold text-black text-lg">
                  ₹{invoiceForm.amount ? parseInt(invoiceForm.amount).toLocaleString('en-IN') : '0'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Type</p>
                <p className="font-medium text-black">{invoiceForm.membershipType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Due Date</p>
                <p className="font-medium text-black">{invoiceForm.dueDate || 'Not set'}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 border-t border-gray-200 pt-6">
            <button
              type="button"
              onClick={() => setShowCreateInvoice(false)}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-6 py-2.5 bg-white border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Generate Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Create Invoice Modal */}
      {showCreateInvoice && <CreateInvoiceModal />}

      {/* Header Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 sm:mb-6">
          <div>
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">Payment Management</h1>
                <p className="text-xs sm:text-sm text-gray-600">Monitor and manage all payment transactions</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 lg:mt-0">
            <button 
              onClick={() => setShowCreateInvoice(true)}
              className="flex items-center space-x-1 sm:space-x-2 bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
            >
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

        {/* Payment Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Total Revenue</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                  {formatCompactCurrency(paymentStats.totalRevenue)}
                </div>
                <div className="text-[10px] sm:text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {paymentStats.growthRate}% growth
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
                  {formatCompactCurrency(paymentStats.collectedThisMonth)}
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
                <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                  {paymentStats.successRate}%
                </div>
                <div className="text-[10px] sm:text-xs text-green-600">Payment success rate</div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Pending Payments</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                  {formatCompactCurrency(paymentStats.pendingPayments)}
                </div>
                <div className="text-[10px] sm:text-xs text-yellow-600">Requires attention</div>
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
                placeholder="Search invoices, customers, transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                <select 
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="failed">Failed</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Revenue vs Payments Chart */}
          {viewMode === 'chart' && (
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-blue-500" />
                  <h2 className="text-xl font-bold text-black">Revenue vs Payments</h2>
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
                        className="w-6 sm:w-8 bg-green-500 rounded-t"
                        style={{ height: `${(month.payments / 1000000) * 200}px` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-600">{month.month}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Payments Table */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <h2 className="text-lg sm:text-xl font-bold text-black">Recent Payments</h2>
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
                        checked={selectedPayments.length === recentPayments.length}
                        onChange={selectAllPayments}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 rounded border-gray-300"
                      />
                    </th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Invoice No</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Customer</th>
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
                  {recentPayments.map(payment => {
                    const StatusIcon = statusIcons[payment.status];
                    const statusColor = statusColors[payment.status];
                    const typeColor = typeColors[payment.type];
                    
                    return (
                      <tr key={payment.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <input
                            type="checkbox"
                            checked={selectedPayments.includes(payment.id)}
                            onChange={() => togglePaymentSelection(payment.id)}
                            className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 rounded border-gray-300"
                          />
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm text-black">
                          {isMobile ? payment.invoiceNo.replace('INV-', '') : payment.invoiceNo}
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <div className="font-medium text-xs sm:text-sm text-black">
                            {isMobile ? payment.customerName.split(' ')[0] : payment.customerName}
                          </div>
                          {!isMobile && (
                            <div className="text-xs text-gray-500">Due: {payment.dueDate}</div>
                          )}
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <div className="font-bold text-xs sm:text-sm text-black flex items-center">
                            <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                            {payment.amount.toLocaleString('en-IN')}
                          </div>
                        </td>
                        {!isMobile && (
                          <>
                            <td className="py-2 sm:py-3 px-2 sm:px-4">
                              <span className={`inline-flex items-center px-2 py-0.5 sm:py-1 rounded text-xs font-medium border ${typeColor}`}>
                                {getTransactionTypeLabel(payment.type)}
                              </span>
                            </td>
                            <td className="py-2 sm:py-3 px-2 sm:px-4">
                              <div className="text-xs sm:text-sm text-gray-700">{payment.paymentMethod}</div>
                            </td>
                            <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-700">{payment.date}</td>
                          </>
                        )}
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <span className={`inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium border ${statusColor}`}>
                            <StatusIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 sm:mr-1.5" />
                            {isMobile ? payment.status.charAt(0).toUpperCase() : payment.status}
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
          {/* Payment Methods Breakdown */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <PieChart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <h2 className="text-lg sm:text-xl font-bold text-black">Payment Methods</h2>
              </div>
              <div className="text-sm font-medium text-black">
                {formatCompactCurrency(paymentStats.collectedThisMonth)}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {paymentMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div key={index}>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span className="text-gray-700 flex items-center">
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        {method.method}
                      </span>
                      <span className="font-medium text-black">{formatCompactCurrency(method.amount)}</span>
                    </div>
                    
                    <div className="text-[10px] sm:text-xs text-gray-500 mt-1">
                      {method.count} transactions
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top Paying Members */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <h2 className="text-lg sm:text-xl font-bold text-black">Top Paying Members</h2>
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

        </div>
      </div>
    </div>
  );
};

export default AllPayments;