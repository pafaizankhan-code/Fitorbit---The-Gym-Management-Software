import React, { useState, useEffect } from 'react';
import {
  IndianRupee,
  Receipt,
  TrendingUp,
  TrendingDown,
  Calendar,
  Filter,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Plus,
  Percent,
  Clock,
  Award,
  Building,
  Briefcase,
  CreditCard,
  PieChart,
  BarChart3,
  FileText,
  Calculator,
  Shield,
  UserCheck,
  History,
  Bell,
  Home,
  Car,
  Utensils,
  ShoppingBag,
  Heart,
  Book,
  Smartphone,
  Gift,
  Coffee,
  Wifi,
  FileCheck,
  AlertCircle,
  Wallet
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Manage_expense = () => {
  // Expense categories with Indian context
  const expenseCategories = [
    { id: 1, name: 'Rent & Utilities', icon: Home, color: 'bg-blue-100 text-blue-600', budget: 25000 },
    { id: 2, name: 'Transportation', icon: Car, color: 'bg-green-100 text-green-600', budget: 8000 },
    { id: 3, name: 'Food & Dining', icon: Utensils, color: 'bg-amber-100 text-amber-600', budget: 12000 },
    { id: 4, name: 'Shopping', icon: ShoppingBag, color: 'bg-purple-100 text-purple-600', budget: 10000 },
    { id: 5, name: 'Healthcare', icon: Heart, color: 'bg-red-100 text-red-600', budget: 5000 },
    { id: 6, name: 'Education', icon: Book, color: 'bg-indigo-100 text-indigo-600', budget: 8000 },
    { id: 7, name: 'Entertainment', icon: Smartphone, color: 'bg-pink-100 text-pink-600', budget: 6000 },
    { id: 8, name: 'Miscellaneous', icon: Gift, color: 'bg-gray-100 text-gray-600', budget: 5000 },
  ];

  // Indian cities
  const indianCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 
    'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'
  ];

  // Payment methods
  const paymentMethods = [
    { id: 1, name: 'UPI', icon: CreditCard, color: 'bg-purple-100 text-purple-600' },
    { id: 2, name: 'Credit Card', icon: CreditCard, color: 'bg-blue-100 text-blue-600' },
    { id: 3, name: 'Debit Card', icon: CreditCard, color: 'bg-green-100 text-green-600' },
    { id: 4, name: 'Cash', icon: Wallet, color: 'bg-amber-100 text-amber-600' },
    { id: 5, name: 'Net Banking', icon: Building, color: 'bg-indigo-100 text-indigo-600' },
    { id: 6, name: 'Wallet', icon: Wallet, color: 'bg-pink-100 text-pink-600' },
  ];

  // GST rates in India
  const gstRates = [0, 5, 12, 18, 28];

  // Initial expense data with Indian context
  const initialExpenses = [
    {
      id: 1,
      description: 'Office Rent - April',
      category: 'Rent & Utilities',
      amount: 45000,
      gst: 18,
      totalAmount: 53100,
      paymentMethod: 'UPI',
      vendor: 'ABC Properties',
      location: 'Mumbai',
      date: '2024-04-01',
      status: 'paid',
      receipt: 'RCPT001',
      notes: 'Monthly office rent payment',
      recurring: true,
      frequency: 'monthly'
    },
    {
      id: 2,
      description: 'Fuel for Company Car',
      category: 'Transportation',
      amount: 8500,
      gst: 18,
      totalAmount: 10030,
      paymentMethod: 'Credit Card',
      vendor: 'Indian Oil',
      location: 'Delhi',
      date: '2024-04-05',
      status: 'paid',
      receipt: 'RCPT002',
      notes: 'Fuel for company vehicle',
      recurring: false
    },
    {
      id: 3,
      description: 'Team Lunch',
      category: 'Food & Dining',
      amount: 12500,
      gst: 5,
      totalAmount: 13125,
      paymentMethod: 'UPI',
      vendor: 'Barbeque Nation',
      location: 'Bangalore',
      date: '2024-04-10',
      status: 'pending',
      receipt: 'RCPT003',
      notes: 'Team building lunch',
      recurring: false
    },
    {
      id: 4,
      description: 'Office Supplies',
      category: 'Shopping',
      amount: 7500,
      gst: 12,
      totalAmount: 8400,
      paymentMethod: 'Debit Card',
      vendor: 'Staples India',
      location: 'Chennai',
      date: '2024-04-12',
      status: 'paid',
      receipt: 'RCPT004',
      notes: 'Stationery and office supplies',
      recurring: true,
      frequency: 'quarterly'
    },
    {
      id: 5,
      description: 'Medical Insurance',
      category: 'Healthcare',
      amount: 25000,
      gst: 18,
      totalAmount: 29500,
      paymentMethod: 'Net Banking',
      vendor: 'Star Health',
      location: 'Hyderabad',
      date: '2024-04-15',
      status: 'paid',
      receipt: 'RCPT005',
      notes: 'Annual health insurance premium',
      recurring: true,
      frequency: 'yearly'
    },
    {
      id: 6,
      description: 'Software Subscription',
      category: 'Miscellaneous',
      amount: 15000,
      gst: 18,
      totalAmount: 17700,
      paymentMethod: 'UPI',
      vendor: 'Microsoft',
      location: 'Pune',
      date: '2024-04-18',
      status: 'pending',
      receipt: 'RCPT006',
      notes: 'Annual Office 365 subscription',
      recurring: true,
      frequency: 'yearly'
    },
    {
      id: 7,
      description: 'Internet Bill',
      category: 'Rent & Utilities',
      amount: 3500,
      gst: 18,
      totalAmount: 4130,
      paymentMethod: 'Wallet',
      vendor: 'Airtel',
      location: 'Kolkata',
      date: '2024-04-20',
      status: 'paid',
      receipt: 'RCPT007',
      notes: 'Monthly broadband bill',
      recurring: true,
      frequency: 'monthly'
    },
    {
      id: 8,
      description: 'Client Meeting Dinner',
      category: 'Food & Dining',
      amount: 18500,
      gst: 5,
      totalAmount: 19425,
      paymentMethod: 'Credit Card',
      vendor: 'Taj Hotel',
      location: 'Mumbai',
      date: '2024-04-22',
      status: 'paid',
      receipt: 'RCPT008',
      notes: 'Business dinner with clients',
      recurring: false
    },
  ];

  // Recurring expenses
  const recurringExpenses = [
    { id: 1, description: 'Office Rent', amount: 45000, frequency: 'monthly', nextDue: '2024-05-01' },
    { id: 2, description: 'Internet Bill', amount: 3500, frequency: 'monthly', nextDue: '2024-05-20' },
    { id: 3, description: 'Software Licenses', amount: 15000, frequency: 'yearly', nextDue: '2025-04-18' },
    { id: 4, description: 'Health Insurance', amount: 25000, frequency: 'yearly', nextDue: '2025-04-15' },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);
  const [selectedExpense, setSelectedExpense] = useState(initialExpenses[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [isEditing, setIsEditing] = useState(false);
  const [editableExpense, setEditableExpense] = useState({});
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

  // Calculate statistics
  const calculateStats = () => {
    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.totalAmount, 0);
    const paidExpenses = expenses.filter(e => e.status === 'paid');
    const pendingExpenses = expenses.filter(e => e.status === 'pending');
    const totalPaid = paidExpenses.reduce((sum, exp) => sum + exp.totalAmount, 0);
    const totalPending = pendingExpenses.reduce((sum, exp) => sum + exp.totalAmount, 0);
    
    const categoryTotals = {};
    expenses.forEach(exp => {
      if (!categoryTotals[exp.category]) {
        categoryTotals[exp.category] = 0;
      }
      categoryTotals[exp.category] += exp.totalAmount;
    });

    const vendorTotals = {};
    expenses.forEach(exp => {
      if (!vendorTotals[exp.vendor]) {
        vendorTotals[exp.vendor] = 0;
      }
      vendorTotals[exp.vendor] += exp.totalAmount;
    });

    return {
      totalExpenses,
      totalPaid,
      totalPending,
      paidCount: paidExpenses.length,
      pendingCount: pendingExpenses.length,
      categoryTotals,
      vendorTotals,
      averageExpense: expenses.length > 0 ? totalExpenses / expenses.length : 0
    };
  };

  const stats = calculateStats();

  // Filter expenses
  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         expense.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         expense.receipt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || expense.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || expense.status === statusFilter;
    
    let matchesDate = true;
    if (dateFilter === 'thisMonth') {
      const expenseDate = new Date(expense.date);
      const currentDate = new Date();
      matchesDate = expenseDate.getMonth() === currentDate.getMonth() &&
                   expenseDate.getFullYear() === currentDate.getFullYear();
    } else if (dateFilter === 'last30') {
      const expenseDate = new Date(expense.date);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      matchesDate = expenseDate >= thirtyDaysAgo;
    }

    return matchesSearch && matchesCategory && matchesStatus && matchesDate;
  });

  // Calculate category utilization
  const getCategoryUtilization = (categoryName) => {
    const categoryBudget = expenseCategories.find(c => c.name === categoryName)?.budget || 0;
    const spent = expenses
      .filter(e => e.category === categoryName)
      .reduce((sum, e) => sum + e.totalAmount, 0);
    
    return {
      spent,
      budget: categoryBudget,
      percentage: categoryBudget > 0 ? (spent / categoryBudget) * 100 : 0,
      remaining: categoryBudget - spent
    };
  };

  // Handle expense update
  const handleExpenseUpdate = () => {
    if (isEditing) {
      setExpenses(prev => 
        prev.map(exp => 
          exp.id === selectedExpense.id ? { ...selectedExpense, ...editableExpense } : exp
        )
      );
      setSelectedExpense(prev => ({ ...prev, ...editableExpense }));
    } else {
      const newExpense = {
        id: expenses.length + 1,
        date: new Date().toISOString().split('T')[0],
        status: 'pending',
        ...editableExpense
      };
      setExpenses(prev => [...prev, newExpense]);
    }
    setIsEditing(false);
    setShowExpenseModal(false);
    setEditableExpense({});
  };

  // Delete expense
  const handleDeleteExpense = (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      setExpenses(prev => prev.filter(exp => exp.id !== id));
      if (selectedExpense.id === id) {
        setSelectedExpense(expenses[1] || expenses[0] || null);
      }
    }
  };

  // Format currency for Indian Rupees
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  // Get month name
  const getMonthName = (monthIndex) => {
    return new Date(2000, monthIndex, 1).toLocaleString('en-IN', { month: 'long' });
  };

  // Calculate GST amount
  const calculateGST = (amount, gstRate) => {
    return amount * (gstRate / 100);
  };

  // Recent expenses for dashboard
  const recentExpenses = [...expenses]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 md:p-3 p-1">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                 
                  <div>
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                      Expense Management
                    </h1>
                    <p className="text-gray-600 mt-1">
                      Track, manage, and analyze business expenses
                    </p>
                  </div>
                </div>

               
              </div>

              <div className="mt-6 lg:mt-0 lg:ml-6">
                <div className="flex flex-wrap gap-3">
                  <Link  to={'/ultimate-control/expenses/add'}>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setEditableExpense({});
                      setShowExpenseModal(true);
                    }}
                    className="cursor-pointer flex items-center space-x-2 bg-blue-600  text-white px-5 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-md"
                  >
                    <Plus className="w-5 h-5" />
                    <span className="font-medium">Add Expense</span>
                  </button>
                  </Link>
                  <button className="flex items-center space-x-2 bg-white border border-blue-600 text-blue-600 px-5 py-3 rounded-xl hover:bg-blue-50 transition-all">
                    <Download className="w-5 h-5" />
                    <span className="font-medium">Export</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Expense List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Filters and Controls */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <BarChart3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <PieChart className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex-1 max-w-md">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search expenses, vendors, receipts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <select
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="all">All Categories</option>
                      {expenseCategories.map(cat => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                    <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                      <Filter className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Quick Filters */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`px-4 py-2 rounded-lg ${activeTab === 'all' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    All Expenses
                  </button>
                  <button
                    onClick={() => setActiveTab('pending')}
                    className={`px-4 py-2 rounded-lg ${activeTab === 'pending' ? 'bg-red-100 text-red-600' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    Pending Bills
                  </button>
                  <button
                    onClick={() => setActiveTab('recurring')}
                    className={`px-4 py-2 rounded-lg ${activeTab === 'recurring' ? 'bg-green-100 text-green-600' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    Recurring
                  </button>
                  <button
                    onClick={() => setActiveTab('high')}
                    className={`px-4 py-2 rounded-lg ${activeTab === 'high' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    High Value
                  </button>
                </div>
              </div>

              {/* Expense List/Grid */}
              <div className="p-6">
                {viewMode === 'list' ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-4 px-4 text-left text-sm font-semibold text-gray-700">Description</th>
                          <th className="py-4 px-4 text-left text-sm font-semibold text-gray-700">Category</th>
                          <th className="py-4 px-4 text-left text-sm font-semibold text-gray-700">Amount</th>
                          <th className="py-4 px-4 text-left text-sm font-semibold text-gray-700">Date</th>
                          <th className="py-4 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
                          <th className="py-4 px-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredExpenses.map(expense => (
                          <tr 
                            key={expense.id}
                            onClick={() => setSelectedExpense(expense)}
                            className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                              selectedExpense?.id === expense.id ? 'bg-blue-50' : ''
                            }`}
                          >
                            <td className="py-4 px-4">
                              <div>
                                <div className="font-medium text-gray-900">{expense.description}</div>
                                <div className="text-sm text-gray-500 mt-1">{expense.vendor}</div>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${expenseCategories.find(c => c.name === expense.category)?.color || 'bg-gray-100'}`}>
                                  {React.createElement(expenseCategories.find(c => c.name === expense.category)?.icon || Receipt, { className: 'w-4 h-4' })}
                                </div>
                                <span className="text-sm font-medium text-gray-700">{expense.category}</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="text-lg font-bold text-gray-900">{formatCurrency(expense.totalAmount)}</div>
                              <div className="text-xs text-gray-500">Base: {formatCurrency(expense.amount)}</div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="text-sm text-gray-700">{formatDate(expense.date)}</div>
                              {expense.recurring && (
                                <div className="text-xs text-blue-600 mt-1">
                                  Recurring • {expense.frequency}
                                </div>
                              )}
                            </td>
                            <td className="py-4 px-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                expense.status === 'paid' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {expense.status}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center space-x-2">
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsEditing(true);
                                    setEditableExpense(expense);
                                    setShowExpenseModal(true);
                                  }}
                                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                  title="Edit"
                                >
                                  <Edit className="w-4 h-4 text-gray-600" />
                                </button>
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteExpense(expense.id);
                                  }}
                                  className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                                  title="Delete"
                                >
                                  <Trash2 className="w-4 h-4 text-red-600" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredExpenses.map(expense => (
                      <div
                        key={expense.id}
                        onClick={() => setSelectedExpense(expense)}
                        className={`border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-300 transition-colors ${
                          selectedExpense?.id === expense.id ? 'border-blue-400 bg-blue-50' : ''
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${expenseCategories.find(c => c.name === expense.category)?.color || 'bg-gray-100'}`}>
                              {React.createElement(expenseCategories.find(c => c.name === expense.category)?.icon || Receipt, { className: 'w-5 h-5' })}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{expense.description}</h3>
                              <p className="text-sm text-gray-500">{expense.vendor}</p>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            expense.status === 'paid' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {expense.status}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-2xl font-bold text-gray-900">{formatCurrency(expense.totalAmount)}</div>
                            <div className="text-xs text-gray-500">Incl. {expense.gst}% GST</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-700">{formatDate(expense.date)}</div>
                            <div className="text-xs text-gray-500">{expense.location}</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            {expense.recurring ? `Recurring • ${expense.frequency}` : 'One-time'}
                          </div>
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsEditing(true);
                                setEditableExpense(expense);
                                setShowExpenseModal(true);
                              }}
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <Edit className="w-4 h-4 text-gray-600" />
                            </button>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowReceiptModal(true);
                              }}
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <Eye className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {filteredExpenses.length === 0 && (
                  <div className="text-center py-12">
                    <Receipt className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">No expenses found</h3>
                    <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setShowExpenseModal(true);
                      }}
                      className="inline-flex items-center space-x-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                      <span>Add Your First Expense</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Panel - Details & Analytics */}
          <div className="lg:col-span-1 space-y-6">
            {/* Selected Expense Details */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Expense Details</h2>
                <button 
                  onClick={() => {
                    setIsEditing(true);
                    setEditableExpense(selectedExpense);
                    setShowExpenseModal(true);
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Edit
                </button>
              </div>

              <div className="space-y-6">
                {/* Basic Info */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                    <Receipt className="w-5 h-5 mr-2 text-blue-600" />
                    Basic Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Description</span>
                      <span className="font-medium text-gray-900">{selectedExpense.description}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vendor</span>
                      <span className="font-medium text-gray-900">{selectedExpense.vendor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Receipt No.</span>
                      <span className="font-medium text-gray-900">{selectedExpense.receipt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date</span>
                      <span className="font-medium text-gray-900">{formatDate(selectedExpense.date)}</span>
                    </div>
                  </div>
                </div>

                {/* Amount Breakdown */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                    <Calculator className="w-5 h-5 mr-2 text-green-600" />
                    Amount Breakdown
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Base Amount</span>
                        <span className="font-medium text-gray-900">{formatCurrency(selectedExpense.amount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">GST ({selectedExpense.gst}%)</span>
                        <span className="font-medium text-gray-900">
                          {formatCurrency(calculateGST(selectedExpense.amount, selectedExpense.gst))}
                        </span>
                      </div>
                      <div className="border-t border-gray-200 pt-3">
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-900">Total Amount</span>
                          <span className="text-2xl font-bold text-gray-900">{formatCurrency(selectedExpense.totalAmount)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-purple-600" />
                    Additional Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category</span>
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded mr-2 ${expenseCategories.find(c => c.name === selectedExpense.category)?.color || 'bg-gray-100'}`}></div>
                        <span className="font-medium text-gray-900">{selectedExpense.category}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Method</span>
                      <span className="font-medium text-gray-900">{selectedExpense.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location</span>
                      <span className="font-medium text-gray-900">{selectedExpense.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status</span>
                      <span className={`font-medium ${
                        selectedExpense.status === 'paid' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {selectedExpense.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                {selectedExpense.notes && (
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-3">Notes</h3>
                    <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4">
                      <p className="text-gray-700">{selectedExpense.notes}</p>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex space-x-3 pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => setShowReceiptModal(true)}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium"
                  >
                    View Receipt
                  </button>
                  <button 
                    onClick={() => handleDeleteExpense(selectedExpense.id)}
                    className="flex-1 bg-red-50 text-red-600 py-3 rounded-xl hover:bg-red-100 transition-colors font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>

         

          
          </div>
        </div>
      </div>

     
      {/* Receipt View Modal */}
      {showReceiptModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Receipt Details</h3>
                <button
                  onClick={() => setShowReceiptModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mock Receipt */}
              <div className="border-2 border-gray-300 rounded-2xl p-8 bg-gradient-to-b from-white to-gray-50">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                    <Receipt className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">INVOICE RECEIPT</h4>
                  <p className="text-gray-600">#{selectedExpense.receipt}</p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Vendor Details</h5>
                    <p className="text-gray-700">{selectedExpense.vendor}</p>
                    <p className="text-gray-600">{selectedExpense.location}</p>
                  </div>
                  <div className="text-right">
                    <h5 className="font-semibold text-gray-900 mb-2">Invoice Date</h5>
                    <p className="text-gray-700">{formatDate(selectedExpense.date)}</p>
                    <p className="text-gray-600">Due: {formatDate(selectedExpense.date)}</p>
                  </div>
                </div>

                <div className="border-t border-b border-gray-200 py-6 mb-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="font-bold text-gray-900 text-lg">{selectedExpense.description}</h5>
                      <p className="text-gray-600">Category: {selectedExpense.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">{formatCurrency(selectedExpense.totalAmount)}</p>
                      <p className="text-gray-600">Including GST</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Amount Breakdown</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Base Amount:</span>
                        <span className="font-medium">{formatCurrency(selectedExpense.amount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">GST ({selectedExpense.gst}%):</span>
                        <span className="font-medium">{formatCurrency(calculateGST(selectedExpense.amount, selectedExpense.gst))}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-bold text-gray-900">Total:</span>
                        <span className="font-bold text-xl text-gray-900">{formatCurrency(selectedExpense.totalAmount)}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Payment Details</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Method:</span>
                        <span className="font-medium">{selectedExpense.paymentMethod}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className={`font-medium ${selectedExpense.status === 'paid' ? 'text-green-600' : 'text-red-600'}`}>
                          {selectedExpense.status.toUpperCase()}
                        </span>
                      </div>
                      {selectedExpense.notes && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-600">Notes: {selectedExpense.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-center text-gray-500 text-sm">
                  <p>Thank you for your business!</p>
                  <p className="mt-1">This is a computer-generated receipt</p>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium">
                  <Download className="w-5 h-5 inline mr-2" />
                  Download PDF
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                  <Eye className="w-5 h-5 inline mr-2" />
                  View Full Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Manage_expense;