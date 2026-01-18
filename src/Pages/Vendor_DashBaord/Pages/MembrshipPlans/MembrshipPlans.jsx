import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Package,
  Plus,
  Edit,
  Trash2,
  Copy,
  Eye,
  TrendingUp,
  Users,
  Calendar,
  CheckCircle,
  XCircle,
  MoreVertical,
  Search,
  Filter,
  ChevronDown,
  ChevronRight,
  Star,
  Shield,
  Target,
  Dumbbell,
  Zap,
  Award,
  Crown,
  Percent,
  Clock,
  RefreshCw,
  Download,
  Printer,
  BarChart,
  Settings,
  ArrowUpDown,
  Tag,
  FileText,
  CreditCard,
  Activity,
  Heart,
  Globe,
  Smartphone,
  UserCheck,
  AlertCircle,
  X,
  Save,
  Upload,
  Bell,
  BarChart3,
  PieChart,
  LineChart,
  TrendingDown,
  Users as UsersIcon,
  IndianRupee,
  Menu
} from 'lucide-react';

const MembrshipPlans = () => {
  const navigate = useNavigate();
  
  // State Management
  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Basic Fitness",
      description: "Perfect for beginners starting their fitness journey",
      price: 1999,
      duration: "1 Month",
      durationMonths: 1,
      category: "Regular",
      status: "active",
      features: ["Gym Access", "Cardio Zone", "Locker", "Free WiFi", "Basic Equipment"],
      membersCount: 45,
      renewalRate: "75%",
      revenue: "₹89,955",
      popularity: "medium",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-28",
      color: "blue",
      discount: 0,
      maxDiscount: 500,
      autoRenew: true,
      freezeAllowed: true,
      freezeDays: 7,
      personalTraining: false,
      groupClasses: false,
      nutritionGuide: false,
      planCode: "BASIC-001",
      popularityScore: 65
    },
    {
      id: 2,
      name: "Premium Plus",
      description: "Advanced training with premium amenities",
      price: 4999,
      duration: "3 Months",
      durationMonths: 3,
      category: "Premium",
      status: "active",
      features: ["All Basic Features", "Personal Trainer", "Group Classes", "Sauna Access", "Towel Service", "Protein Shakes"],
      membersCount: 28,
      renewalRate: "85%",
      revenue: "₹139,972",
      popularity: "high",
      createdAt: "2024-01-10",
      updatedAt: "2024-01-25",
      color: "purple",
      discount: 500,
      maxDiscount: 1000,
      autoRenew: true,
      freezeAllowed: true,
      freezeDays: 14,
      personalTraining: true,
      groupClasses: true,
      nutritionGuide: true,
      planCode: "PREMIUM-002",
      popularityScore: 85
    },
    {
      id: 3,
      name: "Elite Pro",
      description: "Ultimate fitness experience with exclusive benefits",
      price: 11999,
      duration: "6 Months",
      durationMonths: 6,
      category: "Elite",
      status: "active",
      features: ["All Premium Features", "Unlimited Personal Training", "Nutrition Counseling", "Massage Therapy", "Priority Booking", "Complimentary Supplements", "Locker with Charging"],
      membersCount: 12,
      renewalRate: "92%",
      revenue: "₹143,988",
      popularity: "high",
      createdAt: "2024-01-05",
      updatedAt: "2024-01-20",
      color: "gold",
      discount: 1000,
      maxDiscount: 2000,
      autoRenew: true,
      freezeAllowed: true,
      freezeDays: 30,
      personalTraining: true,
      groupClasses: true,
      nutritionGuide: true,
      planCode: "ELITE-003",
      popularityScore: 92
    },
    {
      id: 4,
      name: "Student Special",
      description: "Affordable fitness for students with valid ID",
      price: 1499,
      duration: "1 Month",
      durationMonths: 1,
      category: "Special",
      status: "active",
      features: ["Gym Access", "Cardio Zone", "Locker", "Student Discount", "Study Area"],
      membersCount: 32,
      renewalRate: "68%",
      revenue: "₹47,968",
      popularity: "medium",
      createdAt: "2024-01-20",
      updatedAt: "2024-01-27",
      color: "green",
      discount: 300,
      maxDiscount: 500,
      autoRenew: false,
      freezeAllowed: false,
      freezeDays: 0,
      personalTraining: false,
      groupClasses: false,
      nutritionGuide: false,
      planCode: "STUDENT-004",
      popularityScore: 55
    },
    {
      id: 5,
      name: "Couple Plan",
      description: "Get fit together with special couple pricing",
      price: 3499,
      duration: "1 Month",
      durationMonths: 1,
      category: "Special",
      status: "active",
      features: ["Dual Membership", "Couple Workout Sessions", "Partner Yoga", "Joint Locker", "Couple Discount"],
      membersCount: 18,
      renewalRate: "80%",
      revenue: "₹62,982",
      popularity: "low",
      createdAt: "2024-01-12",
      updatedAt: "2024-01-22",
      color: "pink",
      discount: 0,
      maxDiscount: 700,
      autoRenew: true,
      freezeAllowed: true,
      freezeDays: 7,
      personalTraining: false,
      groupClasses: true,
      nutritionGuide: false,
      planCode: "COUPLE-005",
      popularityScore: 40
    },
    {
      id: 6,
      name: "Corporate Wellness",
      description: "Employee wellness programs for corporate clients",
      price: 8999,
      duration: "3 Months",
      durationMonths: 3,
      category: "Corporate",
      status: "active",
      features: ["Bulk Employee Access", "Health Workshops", "Stress Management", "Team Building", "Corporate Events"],
      membersCount: 5,
      renewalRate: "95%",
      revenue: "₹44,995",
      popularity: "medium",
      createdAt: "2024-01-03",
      updatedAt: "2024-01-15",
      color: "indigo",
      discount: 1500,
      maxDiscount: 2500,
      autoRenew: true,
      freezeAllowed: false,
      freezeDays: 0,
      personalTraining: true,
      groupClasses: true,
      nutritionGuide: true,
      planCode: "CORP-006",
      popularityScore: 75
    },
    {
      id: 7,
      name: "Weekend Warrior",
      description: "Weekend-only access for busy professionals",
      price: 1299,
      duration: "1 Month",
      durationMonths: 1,
      category: "Regular",
      status: "inactive",
      features: ["Saturday & Sunday Access", "Weekend Classes", "Limited Amenities"],
      membersCount: 0,
      renewalRate: "0%",
      revenue: "₹0",
      popularity: "low",
      createdAt: "2024-01-25",
      updatedAt: "2024-01-28",
      color: "gray",
      discount: 0,
      maxDiscount: 300,
      autoRenew: false,
      freezeAllowed: false,
      freezeDays: 0,
      personalTraining: false,
      groupClasses: false,
      nutritionGuide: false,
      planCode: "WEEKEND-007",
      popularityScore: 10
    },
    {
      id: 8,
      name: "Senior Fitness",
      description: "Tailored fitness programs for senior citizens",
      price: 1799,
      duration: "1 Month",
      durationMonths: 1,
      category: "Special",
      status: "draft",
      features: ["Senior-Friendly Equipment", "Gentle Yoga", "Health Monitoring", "Social Activities", "Medical Support"],
      membersCount: 0,
      renewalRate: "0%",
      revenue: "₹0",
      popularity: "low",
      createdAt: "2024-01-18",
      updatedAt: "2024-01-29",
      color: "orange",
      discount: 400,
      maxDiscount: 600,
      autoRenew: false,
      freezeAllowed: true,
      freezeDays: 14,
      personalTraining: false,
      groupClasses: true,
      nutritionGuide: false,
      planCode: "SENIOR-008",
      popularityScore: 5
    }
  ]);

  // State for UI
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('list');
  const [expandedPlan, setExpandedPlan] = useState(null);
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [showStats, setShowStats] = useState(true);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation function
  const navigateToCreatePlan = () => {
    navigate('/ultimate-control/memberships/create');
  };

  const navigateToEditPlan = (planId) => {
    navigate(`/ultimate-control/memberships/create`);
  };

  // Categories
  const categories = [
    { id: 'all', label: 'All', count: plans.length, icon: Package },
    { id: 'Regular', label: 'Regular', count: plans.filter(p => p.category === 'Regular').length, icon: Dumbbell },
    { id: 'Premium', label: 'Premium', count: plans.filter(p => p.category === 'Premium').length, icon: Star },
    { id: 'Elite', label: 'Elite', count: plans.filter(p => p.category === 'Elite').length, icon: Crown },
    { id: 'Special', label: 'Special', count: plans.filter(p => p.category === 'Special').length, icon: Award },
    { id: 'Corporate', label: 'Corporate', count: plans.filter(p => p.category === 'Corporate').length, icon: UsersIcon }
  ];

  // Status options
  const statusOptions = [
    { id: 'all', label: 'All', count: plans.length, icon: Filter },
    { id: 'active', label: 'Active', count: plans.filter(p => p.status === 'active').length, icon: CheckCircle },
    { id: 'inactive', label: 'Inactive', count: plans.filter(p => p.status === 'inactive').length, icon: XCircle },
    { id: 'draft', label: 'Draft', count: plans.filter(p => p.status === 'draft').length, icon: FileText }
  ];

  // Sort options
  const sortOptions = [
    { id: 'popularity', label: 'Popularity', icon: TrendingUp },
    { id: 'price-low', label: 'Price: Low to High', icon: IndianRupee },
    { id: 'price-high', label: 'Price: High to Low', icon: IndianRupee },
    { id: 'name', label: 'Name A-Z', icon: ArrowUpDown },
    { id: 'revenue', label: 'Revenue', icon: IndianRupee },
    { id: 'members', label: 'Members Count', icon: Users }
  ];

  // Calculate statistics
  const stats = {
    totalPlans: plans.length,
    activePlans: plans.filter(p => p.status === 'active').length,
    totalMembers: plans.reduce((sum, plan) => sum + plan.membersCount, 0),
    totalRevenue: plans.reduce((sum, plan) => {
      const revenue = parseInt(plan.revenue.replace('₹', '').replace(',', '')) || 0;
      return sum + revenue;
    }, 0),
    avgRenewalRate: (plans.reduce((sum, plan) => {
      const rate = parseInt(plan.renewalRate) || 0;
      return sum + rate;
    }, 0) / plans.filter(p => p.membersCount > 0).length) || 0,
    popularPlan: plans.reduce((prev, current) => 
      (prev.popularityScore > current.popularityScore) ? prev : current
    )
  };

  // Filter and sort plans
  const filteredPlans = plans.filter(plan => {
    const matchesSearch = plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plan.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plan.planCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || plan.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || plan.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  }).sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'revenue':
        const revenueA = parseInt(a.revenue.replace('₹', '').replace(',', '')) || 0;
        const revenueB = parseInt(b.revenue.replace('₹', '').replace(',', '')) || 0;
        return revenueB - revenueA;
      case 'members':
        return b.membersCount - a.membersCount;
      case 'popularity':
      default:
        return b.popularityScore - a.popularityScore;
    }
  });

  // Color mapping
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    gold: 'from-yellow-500 to-yellow-600',
    green: 'from-green-500 to-green-600',
    pink: 'from-pink-500 to-pink-600',
    orange: 'from-orange-500 to-orange-600',
    indigo: 'from-indigo-500 to-indigo-600',
    gray: 'from-gray-500 to-gray-600'
  };

  const statusColors = {
    active: 'bg-green-100 text-green-800 border-green-200',
    inactive: 'bg-red-100 text-red-800 border-red-200',
    draft: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  };

  // Helper functions
  const togglePlanSelection = (id) => {
    setSelectedPlans(prev => 
      prev.includes(id) 
        ? prev.filter(planId => planId !== id)
        : [...prev, id]
    );
  };

  const selectAllPlans = () => {
    if (selectedPlans.length === filteredPlans.length) {
      setSelectedPlans([]);
    } else {
      setSelectedPlans(filteredPlans.map(plan => plan.id));
    }
  };

  const handleDeletePlan = (id) => {
    if (window.confirm('Are you sure you want to delete this plan?')) {
      setPlans(prev => prev.filter(plan => plan.id !== id));
      setSelectedPlans(prev => prev.filter(planId => planId !== id));
    }
  };

  const handleBulkDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${selectedPlans.length} plans?`)) {
      setPlans(prev => prev.filter(plan => !selectedPlans.includes(plan.id)));
      setSelectedPlans([]);
      setShowBulkActions(false);
    }
  };

  const handleBulkStatusChange = (status) => {
    setPlans(prev => prev.map(plan => 
      selectedPlans.includes(plan.id) ? { ...plan, status } : plan
    ));
    setSelectedPlans([]);
    setShowBulkActions(false);
  };

  const handleDuplicatePlan = (plan) => {
    const newPlan = {
      ...plan,
      id: Math.max(...plans.map(p => p.id)) + 1,
      name: `${plan.name} (Copy)`,
      planCode: `${plan.planCode}-COPY`,
      membersCount: 0,
      revenue: '₹0',
      renewalRate: '0%',
      popularityScore: 0,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setPlans(prev => [newPlan, ...prev]);
  };

  const exportToCSV = () => {
    const headers = ['Plan Name', 'Plan Code', 'Category', 'Price', 'Duration', 'Status', 'Members', 'Revenue', 'Renewal Rate'];
    const csvData = filteredPlans.map(plan => [
      plan.name,
      plan.planCode,
      plan.category,
      `₹${plan.price}`,
      plan.duration,
      plan.status,
      plan.membersCount,
      plan.revenue,
      plan.renewalRate
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `membership_plans_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const getPopularityBadge = (score) => {
    if (score >= 80) return { label: 'Very Popular', color: 'bg-green-100 text-green-800' };
    if (score >= 60) return { label: 'Popular', color: 'bg-blue-100 text-blue-800' };
    if (score >= 40) return { label: 'Average', color: 'bg-yellow-100 text-yellow-800' };
    return { label: 'Low Demand', color: 'bg-gray-100 text-gray-800' };
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Premium': return <Star className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'Elite': return <Crown className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'Special': return <Award className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'Corporate': return <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4" />;
      default: return <Dumbbell className="w-3 h-3 sm:w-4 sm:h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 md:p-3 p-1">
      {/* Header Section */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 sm:mb-6">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Membership Plans</h1>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Create and manage your gym membership plans</p>
              </div>
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-3">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-700">
                  Active: <span className="font-bold text-sm">{stats.activePlans}</span>
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                <span className="text-xs sm:text-sm text-gray-700">
                  Members: <span className="font-bold text-sm">{stats.totalMembers}</span>
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                <span className="text-xs sm:text-sm text-gray-700">
                  Revenue: <span className="font-bold text-sm">₹{stats.totalRevenue.toLocaleString()}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden lg:flex flex-wrap gap-3 mt-4 lg:mt-0">
            <button 
              onClick={navigateToCreatePlan}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm text-sm sm:text-base"
            >
              <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Create New Plan</span>
            </button>
            <button 
              onClick={exportToCSV}
              className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Export</span>
            </button>
          </div>

          {/* Mobile Action Buttons */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 space-y-2 border-t border-gray-200 pt-4">
              <button 
                onClick={navigateToCreatePlan}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span className="font-medium">Create New Plan</span>
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={exportToCSV}
                  className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span className="font-medium">Export</span>
                </button>
                <button 
                  onClick={() => window.print()}
                  className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span className="font-medium">Print</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search and Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="relative md:col-span-2 lg:col-span-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search plans..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setFilterMenuOpen(!filterMenuOpen)}
              className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm"
            >
              <div className="flex items-center space-x-2">
                <Filter className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                <span className="text-gray-700">Filters</span>
              </div>
              <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-600 transition-transform ${filterMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {filterMenuOpen && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 max-h-96 overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2 text-sm">Category</h4>
                    <div className="space-y-2">
                      {categories.map(cat => (
                        <label key={cat.id} className="flex items-center justify-between cursor-pointer text-sm">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              name="category"
                              checked={selectedCategory === cat.id}
                              onChange={() => setSelectedCategory(cat.id)}
                              className="rounded text-blue-600 w-3 h-3"
                            />
                            <span className="text-gray-700">{cat.label}</span>
                          </div>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            {cat.count}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2 text-sm">Status</h4>
                    <div className="space-y-2">
                      {statusOptions.map(option => (
                        <label key={option.id} className="flex items-center justify-between cursor-pointer text-sm">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              name="status"
                              checked={selectedStatus === option.id}
                              onChange={() => setSelectedStatus(option.id)}
                              className="rounded text-blue-600 w-3 h-3"
                            />
                            <span className="text-gray-700">{option.label}</span>
                          </div>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            {option.count}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedStatus('all');
                    }}
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Clear All
                  </button>
                  <button 
                    onClick={() => setFilterMenuOpen(false)}
                    className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          <div>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 sm:p-3 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
              >
                <div className="grid grid-cols-2 gap-0.5 w-4 h-4 sm:w-5 sm:h-5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 sm:p-3 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
              >
                <div className="flex flex-col space-y-0.5 w-4 h-4 sm:w-5 sm:h-5">
                  <div className="bg-current h-0.5 rounded-sm"></div>
                  <div className="bg-current h-0.5 rounded-sm"></div>
                  <div className="bg-current h-0.5 rounded-sm"></div>
                </div>
              </button>
            </div>
            
            <button
              onClick={() => setShowStats(!showStats)}
              className="p-2 sm:p-3 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              <BarChart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Quick Filters - Mobile Scrollable */}
      <div className="flex space-x-2 mb-4 sm:mb-6 overflow-x-auto pb-2 hide-scrollbar">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg whitespace-nowrap transition-colors text-xs sm:text-sm ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <category.icon className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-medium">{category.label}</span>
            <span className={`px-1 sm:px-1.5 py-0.5 rounded text-xs ${
              selectedCategory === category.id
                ? 'bg-white/20'
                : 'bg-gray-100'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-50 border-b border-gray-200 p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedPlans.length > 0 && selectedPlans.length === filteredPlans.length}
                onChange={selectAllPlans}
                className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
              />
              <span className="text-xs sm:text-sm text-gray-700">
                {selectedPlans.length > 0 
                  ? `${selectedPlans.length} selected` 
                  : `${filteredPlans.length} plans`
                }
              </span>
            </div>
            
            {selectedPlans.length > 0 && (
              <div className="flex items-center space-x-2 sm:space-x-3 mt-2 sm:mt-0">
                <button 
                  onClick={() => setShowBulkActions(!showBulkActions)}
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-xs sm:text-sm"
                >
                  <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Bulk Actions</span>
                </button>
                <button 
                  onClick={handleBulkDelete}
                  className="flex items-center space-x-1 text-red-600 hover:text-red-800 text-xs sm:text-sm"
                >
                  <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bulk Actions Menu */}
        {showBulkActions && selectedPlans.length > 0 && (
          <div className="bg-blue-50 border-b border-blue-100 p-3 sm:p-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleBulkStatusChange('active')}
                className="flex items-center space-x-1 sm:space-x-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-xs sm:text-sm"
              >
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                <span>Mark Active</span>
              </button>
              <button
                onClick={() => handleBulkStatusChange('inactive')}
                className="flex items-center space-x-1 sm:space-x-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-xs sm:text-sm"
              >
                <XCircle className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                <span>Mark Inactive</span>
              </button>
              <button
                onClick={() => handleBulkStatusChange('draft')}
                className="flex items-center space-x-1 sm:space-x-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-xs sm:text-sm"
              >
                <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                <span>Mark Draft</span>
              </button>
            </div>
          </div>
        )}

        {/* Plans Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4">
            {filteredPlans.map(plan => (
              <div 
                key={plan.id} 
                className={`bg-gradient-to-br ${colorClasses[plan.color]} rounded-lg sm:rounded-xl text-white overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                {/* Plan Header */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                        {getCategoryIcon(plan.category)}
                        <span className="text-xs font-medium bg-white/20 px-1.5 sm:px-2 py-0.5 rounded">
                          {plan.category}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold truncate">{plan.name}</h3>
                      <p className="text-xs text-white/80 mt-1 line-clamp-2">{plan.description}</p>
                    </div>
                    <div className="relative">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedPlan(expandedPlan === plan.id ? null : plan.id);
                        }}
                        className="p-0.5 sm:p-1 hover:bg-white/20 rounded"
                      >
                        <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Price and Duration */}
                  <div className="flex items-end justify-between mb-3 sm:mb-4">
                    <div>
                      <div className="text-lg sm:text-xl font-bold flex items-center">
                        <IndianRupee className="w-4 h-4 mr-1" />
                        {plan.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-white/80">{plan.duration}</div>
                    </div>
                    <div className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium ${statusColors[plan.status]}`}>
                      {plan.status.toUpperCase()}
                    </div>
                  </div>

                  {/* Plan Code */}
                  <div className="text-xs font-mono bg-white/10 px-2 py-1 rounded inline-block mb-3">
                    {plan.planCode}
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-3 sm:mb-4">
                    <div className="text-center">
                      <div className="text-sm sm:text-lg font-bold">{plan.membersCount}</div>
                      <div className="text-xs text-white/80">Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-lg font-bold">{plan.renewalRate}</div>
                      <div className="text-xs text-white/80">Renewal</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-lg font-bold">{plan.revenue}</div>
                      <div className="text-xs text-white/80">Revenue</div>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-1 mb-3">
                    {plan.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs sm:text-sm">
                        <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 mr-1 sm:mr-2 text-green-300 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                    {plan.features.length > 3 && (
                      <div className="text-xs text-white/60">
                        +{plan.features.length - 3} more
                      </div>
                    )}
                  </div>

                  {/* Popularity Badge */}
                  <div className={`px-2 py-0.5 rounded-full text-xs font-medium inline-block ${getPopularityBadge(plan.popularityScore).color}`}>
                    {getPopularityBadge(plan.popularityScore).label}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedPlans.includes(plan.id)}
                        onChange={(e) => {
                          e.stopPropagation();
                          togglePlanSelection(plan.id);
                        }}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
                      />
                      <button 
                        onClick={() => navigateToEditPlan(plan.id)}
                        className="p-1 hover:bg-white/20 rounded"
                        title="Edit"
                      >
                        <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <button 
                        onClick={() => handleDuplicatePlan(plan)}
                        className="p-1 hover:bg-white/20 rounded"
                        title="Duplicate"
                      >
                        <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <button 
                        onClick={() => {/* View details */}}
                        className="p-1 hover:bg-white/20 rounded"
                        title="View"
                      >
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeletePlan(plan.id)}
                        className="p-1 hover:bg-white/20 rounded text-red-300"
                        title="Delete"
                      >
                        <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Plans List View */}
        {viewMode === 'list' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedPlans.length > 0 && selectedPlans.length === filteredPlans.length}
                      onChange={selectAllPlans}
                      className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
                    />
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plan Details
                  </th>
                  <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price & Duration
                  </th>
                  <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statistics
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPlans.map(plan => (
                  <tr key={plan.id} className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-3">
                      <input
                        type="checkbox"
                        checked={selectedPlans.includes(plan.id)}
                        onChange={() => togglePlanSelection(plan.id)}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
                      />
                    </td>
                    <td className="px-3 sm:px-6 py-3">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-bold text-white ${
                          plan.color === 'blue' ? 'bg-blue-600' :
                          plan.color === 'purple' ? 'bg-purple-600' :
                          plan.color === 'gold' ? 'bg-yellow-600' :
                          plan.color === 'green' ? 'bg-green-600' :
                          plan.color === 'pink' ? 'bg-pink-600' :
                          plan.color === 'orange' ? 'bg-orange-600' :
                          plan.color === 'indigo' ? 'bg-indigo-600' :
                          'bg-gray-600'
                        }`}>
                          {getCategoryIcon(plan.category)}
                        </div>
                        <div className="ml-2 sm:ml-4 min-w-0">
                          <div className="text-sm font-medium text-gray-900 truncate">{plan.name}</div>
                          <div className="text-xs text-gray-500 truncate">{plan.planCode}</div>
                          <div className="text-xs text-gray-400 mt-0.5 truncate hidden sm:block">{plan.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="hidden sm:table-cell px-6 py-3">
                      <div className="text-sm font-bold text-gray-900 flex items-center">
                        <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {plan.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">{plan.duration}</div>
                    </td>
                    <td className="hidden lg:table-cell px-6 py-3">
                      <div className="space-y-1">
                        <div className="flex items-center text-xs sm:text-sm">
                          <Users className="w-3 h-3 text-gray-400 mr-1 sm:mr-2" />
                          <span className="font-medium">{plan.membersCount} members</span>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm">
                          <TrendingUp className="w-3 h-3 text-gray-400 mr-1 sm:mr-2" />
                          <span className="font-medium">{plan.renewalRate} renewal</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3">
                      <div className="flex flex-col space-y-1">
                        <span className={`inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium ${statusColors[plan.status]}`}>
                          {plan.status.toUpperCase()}
                        </span>
                        <span className={`inline-flex items-center px-1 sm:px-2 py-0.5 rounded-full text-xs ${getPopularityBadge(plan.popularityScore).color}`}>
                          {getPopularityBadge(plan.popularityScore).label}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <button 
                          onClick={() => navigateToEditPlan(plan.id)}
                          className="p-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                          title="Edit"
                        >
                          <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <button 
                          onClick={() => handleDuplicatePlan(plan)}
                          className="p-1 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg"
                          title="Duplicate"
                        >
                          <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeletePlan(plan.id)}
                          className="p-1 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                          title="Delete"
                        >
                          <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* No Results */}
        {filteredPlans.length === 0 && (
          <div className="py-8 sm:py-12 text-center px-4">
            <div className="mx-auto w-16 h-16 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <Package className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
            </div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1 sm:mb-2">No plans found</h3>
            <p className="text-gray-500 text-sm mb-4 sm:mb-6">Try adjusting your search or filters</p>
            <button 
              onClick={navigateToCreatePlan}
              className="px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 text-sm sm:text-base"
            >
              Create your first plan
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-gray-200 bg-gray-50">
          <div className="text-xs sm:text-sm text-gray-600">
            Showing <span className="font-medium">{filteredPlans.length}</span> of <span className="font-medium">{plans.length}</span> plans
          </div>
        </div>
      </div>

      {/* Quick Actions Footer */}
      <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
          <div className="flex items-center">
            <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3" />
            <div>
              <h4 className="font-medium text-blue-800 text-sm sm:text-base">Plan Analytics</h4>
              <p className="text-xs sm:text-sm text-blue-700">View detailed plan performance</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
          <div className="flex items-center">
            <PieChart className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3" />
            <div>
              <h4 className="font-medium text-green-800 text-sm sm:text-base">Revenue Report</h4>
              <p className="text-xs sm:text-sm text-green-700">Generate revenue reports by plan</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
          <div className="flex items-center">
            <LineChart className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2 sm:mr-3" />
            <div>
              <h4 className="font-medium text-purple-800 text-sm sm:text-base">Trend Analysis</h4>
              <p className="text-xs sm:text-sm text-purple-700">Analyze plan trends over time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Floating Action Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button 
          onClick={navigateToCreatePlan}
          className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default MembrshipPlans;