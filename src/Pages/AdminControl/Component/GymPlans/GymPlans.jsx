import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  Package,
  Target,
  Users,
  Calendar,
  IndianRupee,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  TrendingUp,
  Award,
  Shield,
  Star,
  MoreVertical,
  Eye,
  Copy,
  CreditCard,
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  Home,
  Briefcase,
  CheckSquare,
  AlertCircle,
  BarChart3,
  FileText,
  ChevronRight,
  ChevronLeft,
  RefreshCw,
  Settings,
  Bell,
  Database,
  Server,
  Cloud,
  Lock,
  Unlock,
  Zap,
  Activity,
  PieChart,
  Heart,
  Dumbbell,
  Award as Trophy,
  Crown,
  Loader2
} from 'lucide-react';

const GymPlans = () => {
  const navigate = useNavigate();
  
  // State Management
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPlanType, setFilterPlanType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // API Configuration
  const API_BASE_URL = 'http://localhost:5000/api';
  
  // Get token from session storage
  const getToken = () => {
    return sessionStorage.getItem('Fitorbit_token');
  };

  // Make API Call
  const makeApiCall = async (method, endpoint, data = null) => {
    try {
      const token = getToken();
      if (!token) {
        throw new Error('Authentication token not found. Please login again.');
      }

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };

      const options = {
        method,
        headers,
      };

      if (data) {
        options.body = JSON.stringify(data);
      }

      const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
      const responseData = await response.json();

      if (!response.ok) {
        throw {
          status: response.status,
          message: responseData.message || 'Something went wrong',
          errors: responseData.errors || []
        };
      }

      return responseData;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  };

  // Fetch packages from API
  const fetchPackages = async () => {
    try {
      setLoading(true);
      setError('');
      
      const result = await makeApiCall('GET', '/membership');
      
      if (result.success) {
        // Transform API data to match our UI format
        const transformedPackages = result.plans.map(plan => ({
          id: plan._id,
          name: plan.name,
          planType: plan.planType || 'Basic',
          duration: `${plan.duration} ${plan.durationUnit}`,
          price: plan.price,
          originalPrice: plan.originalPrice || 0,
          status: plan.status,
          features: plan.features || [],
          description: plan.description || '',
          maxGyms: plan.maxGyms || 1,
          maxStaff: plan.maxStaff || 5,
          maxMembers: plan.maxMembers || 500,
          storage: plan.storage || '50 GB',
          support: plan.supportLevel || 'Email Only',
          setupFee: plan.setupFee || 0,
          renewalDiscount: plan.renewalDiscount || 0,
          activeGyms: plan.activeGyms || 0,
          totalRevenue: plan.totalRevenue || 0,
          createdAt: plan.createdAt ? new Date(plan.createdAt).toISOString().split('T')[0] : '2024-01-01',
          icon: getIconForPlanType(plan.planType),
          color: getColorForPlanType(plan.planType),
          isPopular: plan.isPopular || false,
          isFeatured: plan.isFeatured || false,
          commission: plan.commission ? `${plan.commission}%` : '4%',
          paymentTerms: plan.paymentTerms || 'Advance',
          freeTrial: plan.freeTrialDays ? `${plan.freeTrialDays} days` : 'No',
          targetAudience: plan.targetAudience || []
        }));
        
        setPackages(transformedPackages);
      } else {
        setError('Failed to fetch packages');
      }
    } catch (error) {
      console.error('Error fetching packages:', error);
      setError(error.message || 'Failed to load packages. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Delete package
  const handleDeletePackage = async (id) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      try {
        const result = await makeApiCall('DELETE', `/membership/${id}`);
        
        if (result.success) {
          setPackages(prev => prev.filter(pkg => pkg.id !== id));
          setSelectedPackages(prev => prev.filter(pkgId => pkgId !== id));
          setSuccessMessage('Package deleted successfully!');
          setTimeout(() => setSuccessMessage(''), 3000);
        } else {
          setError(result.message || 'Failed to delete package');
        }
      } catch (error) {
        console.error('Error deleting package:', error);
        setError(error.message || 'Failed to delete package');
      }
    }
  };

  // Toggle package status
  const handleToggleStatus = async (id) => {
    try {
      const packageToUpdate = packages.find(pkg => pkg.id === id);
      const newStatus = packageToUpdate.status === 'active' ? 'inactive' : 'active';
      
      const result = await makeApiCall('PATCH', `/membership/${id}/toggle-status`);
      
      if (result.success) {
        setPackages(prev => prev.map(pkg => 
          pkg.id === id ? { ...pkg, status: newStatus } : pkg
        ));
        setSuccessMessage(`Package ${newStatus === 'active' ? 'activated' : 'deactivated'} successfully!`);
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        setError(result.message || 'Failed to update package status');
      }
    } catch (error) {
      console.error('Error toggling package status:', error);
      setError(error.message || 'Failed to update package status');
    }
  };

  // Toggle popular status
  const handleTogglePopular = async (id) => {
    try {
      const packageToUpdate = packages.find(pkg => pkg.id === id);
      const updatedData = {
        isPopular: !packageToUpdate.isPopular
      };
      
      const result = await makeApiCall('PUT', `/membership/${id}`, updatedData);
      
      if (result.success) {
        setPackages(prev => prev.map(pkg => 
          pkg.id === id ? { ...pkg, isPopular: !pkg.isPopular } : pkg
        ));
        setSuccessMessage(`Package ${!packageToUpdate.isPopular ? 'marked as popular' : 'removed from popular'}!`);
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        setError(result.message || 'Failed to update package');
      }
    } catch (error) {
      console.error('Error toggling popular status:', error);
      setError(error.message || 'Failed to update package');
    }
  };

  // Helper functions for UI
  const getIconForPlanType = (planType) => {
    const iconMap = {
      'Enterprise': 'crown',
      'Professional': 'award',
      'Basic': 'shield',
      'Startup': 'rocket',
      'Flexible': 'creditcard',
      'Legacy': 'diamond',
      'Standard': 'shield',
      'Corporate': 'globe'
    };
    return iconMap[planType] || 'package';
  };

  const getColorForPlanType = (planType) => {
    const colorMap = {
      'Enterprise': 'blue',
      'Professional': 'blue',
      'Basic': 'green',
      'Startup': 'orange',
      'Flexible': 'teal',
      'Legacy': 'amber',
      'Standard': 'blue',
      'Corporate': 'purple'
    };
    return colorMap[planType] || 'gray';
  };

  const getIconComponent = (iconName) => {
    const iconMap = {
      crown: Crown,
      award: Award,
      shield: Shield,
      rocket: Zap,
      globe: Globe,
      creditcard: CreditCard,
      diamond: Trophy,
      package: Package
    };
    const Icon = iconMap[iconName] || Package;
    return <Icon className="w-5 h-5" />;
  };

  const getColorClasses = (color) => {
    const colorMap = {
      purple: 'bg-gradient-to-r from-purple-600 to-blue-600',
      blue: 'bg-gradient-to-r from-blue-600 to-cyan-600',
      green: 'bg-gradient-to-r from-green-600 to-emerald-600',
      orange: 'bg-gradient-to-r from-orange-600 to-amber-600',
      teal: 'bg-gradient-to-r from-teal-600 to-cyan-600',
      amber: 'bg-gradient-to-r from-amber-600 to-yellow-600',
      gray: 'bg-gradient-to-r from-gray-600 to-gray-700'
    };
    return colorMap[color] || colorMap.gray;
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `₹${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(0)}K`;
    }
    return `₹${amount}`;
  };

  // Statistics
  const stats = {
    totalPackages: packages.length,
    activePackages: packages.filter(p => p.status === 'active').length,
    totalActiveGyms: packages.reduce((sum, pkg) => sum + (pkg.activeGyms || 0), 0),
    totalRevenue: packages.reduce((sum, pkg) => sum + (pkg.totalRevenue || 0), 0),
    avgPrice: packages.filter(p => p.price > 0).length > 0 
      ? packages.filter(p => p.price > 0).reduce((sum, pkg) => sum + pkg.price, 0) / packages.filter(p => p.price > 0).length 
      : 0,
    popularPackages: packages.filter(p => p.isPopular).length
  };

  // Filter packages
  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlanType = filterPlanType === 'all' || pkg.planType === filterPlanType;
    const matchesStatus = filterStatus === 'all' || pkg.status === filterStatus;
    
    return matchesSearch && matchesPlanType && matchesStatus;
  }).sort((a, b) => {
    switch(sortBy) {
      case 'popularity': return (b.activeGyms || 0) - (a.activeGyms || 0);
      case 'price-high': return b.price - a.price;
      case 'price-low': return a.price - b.price;
      case 'revenue': return (b.totalRevenue || 0) - (a.totalRevenue || 0);
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPackages = filteredPackages.slice(startIndex, endIndex);

  // Helper functions
  const togglePackageSelection = (id) => {
    setSelectedPackages(prev => 
      prev.includes(id) 
        ? prev.filter(pkgId => pkgId !== id)
        : [...prev, id]
    );
  };

  const selectAllPackages = () => {
    if (selectedPackages.length === currentPackages.length) {
      setSelectedPackages([]);
    } else {
      setSelectedPackages(currentPackages.map(pkg => pkg.id));
    }
  };

  // Fetch packages on component mount
  useEffect(() => {
    fetchPackages();
  }, []);

  // Refresh packages
  const handleRefresh = () => {
    fetchPackages();
  };

  return (
    <div className="min-h-screen md:p-3 p-1">
      {/* Header */}
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-5 md:p-6 mb-6">
  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8 mb-5 sm:mb-6">
    {/* Left - Title + Description + Stats */}
    <div className="flex-1">
      <div className="flex items-center space-x-3 mb-3">
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            Gym Owner Packages
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Manage subscription packages for gym owners
          </p>
        </div>
      </div>

      {/* Stats - compact on mobile, card-like on larger screens */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-blue-700 mb-1 font-medium">Total Packages</p>
          <p className="text-xl sm:text-2xl font-bold text-blue-900">
            {stats.totalPackages}
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-green-700 mb-1 font-medium">Active Packages</p>
          <p className="text-xl sm:text-2xl font-bold text-green-900">
            {stats.activePackages}
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-purple-700 mb-1 font-medium">Popular</p>
          <p className="text-xl sm:text-2xl font-bold text-purple-900">
            {stats.popularPackages}
          </p>
        </div>

      
      </div>
    </div>

    {/* Right - Actions */}
    <div className="flex flex-wrap gap-3 sm:gap-4 self-start lg:self-center">
      <button
        onClick={() => navigate('/admin-control/plans/new')}
        className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow text-sm sm:text-base font-medium"
      >
        <Plus className="w-4 h-4" />
        Create New Package
      </button>

      <button
        onClick={handleRefresh}
        className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base font-medium"
        disabled={loading}
      >
        <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
        Refresh
      </button>
    </div>
  </div>

  {/* Messages */}
  {successMessage && (
    <div className="mb-5 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-sm text-green-700">
      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
      {successMessage}
    </div>
  )}

  {error && (
    <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-sm text-red-700">
      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
      {error}
    </div>
  )}

  {/* Search + Filter Bar */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
    {/* Search */}
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search packages..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
      />
    </div>

    {/* Filters */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-2">
      <select
        value={filterPlanType}
        onChange={(e) => setFilterPlanType(e.target.value)}
        className="w-full px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
      >
        <option value="all">All Plan Types</option>
        <option value="Enterprise">Enterprise</option>
        <option value="Professional">Professional</option>
        <option value="Basic">Basic</option>
        <option value="Startup">Startup</option>
        <option value="Flexible">Flexible</option>
        <option value="Legacy">Legacy</option>
        <option value="Standard">Standard</option>
        <option value="Corporate">Corporate</option>
      </select>

      <div className="flex items-center gap-3">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="flex-1 px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="flex-1 px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        >
          <option value="popularity">Most Popular (Gyms)</option>
          <option value="price-high">Price: High to Low</option>
          <option value="price-low">Price: Low to High</option>
          <option value="revenue">Highest Revenue</option>
          <option value="name">Name A-Z</option>
        </select>
      </div>
    </div>
  </div>

  {/* Optional: Advanced filters toggle + content can be added below similar to the first example */}
</div>
      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-16">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          <span className="ml-3 text-gray-600">Loading packages...</span>
        </div>
      )}

      {/* Packages Grid/List View */}
      {!loading && (
        <>
          {/* Packages Grid */}
          <div className="mb-8">
          
            {/* Packages Grid View */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentPackages.map(pkg => (
                  <div key={pkg.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    {/* Package Header with Gradient */}
                    <div className={`${getColorClasses(pkg.color)} p-4 text-white relative`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            {getIconComponent(pkg.icon)}
                          </div>
                          <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">
                            {pkg.planType}
                          </span>
                        </div>
                        {pkg.isFeatured && (
                          <Star className="w-5 h-5 text-yellow-300 fill-current" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                      <p className="text-sm opacity-90 line-clamp-2">{pkg.description}</p>
                    </div>

                    {/* Package Pricing */}
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-end justify-between mb-3">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            {formatCurrency(pkg.price)}
                            <span className="text-sm font-normal text-gray-600">/{pkg.duration}</span>
                          </div>
                          {pkg.originalPrice > pkg.price && (
                            <div className="text-sm text-gray-500 line-through">
                              {formatCurrency(pkg.originalPrice)}
                            </div>
                          )}
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          pkg.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {pkg.status === 'active' ? 'Active' : 'Inactive'}
                        </span>
                      </div>

                      {/* Package Stats */}
                      <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                        <div className="flex items-center text-gray-600">
                          <Building2 className="w-4 h-4 mr-2" />
                          <span>{pkg.maxGyms} Max Gyms</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          <span>Up to {pkg.maxMembers} members</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Database className="w-4 h-4 mr-2" />
                          <span>{pkg.storage} Storage</span>
                        </div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="p-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {pkg.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            <span className="truncate">{feature}</span>
                          </li>
                        ))}
                        {pkg.features.length > 3 && (
                          <li className="text-sm text-blue-600">
                            +{pkg.features.length - 3} more features
                          </li>
                        )}
                      </ul>

                      {/* Renewal Discount */}
                      {pkg.renewalDiscount > 0 && (
                        <div className="mt-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Award className="w-4 h-4 text-green-600 mr-2" />
                              <span className="text-sm font-medium text-green-800">
                                {pkg.renewalDiscount}% Renewal Discount
                              </span>
                            </div>
                            <div className="text-xs text-green-600">
                              Save {formatCurrency((pkg.price * pkg.renewalDiscount) / 100)}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Package Footer */}
                    <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => navigate(`/admin-control/plans/edit/${pkg.id}`)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeletePackage(pkg.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleToggleStatus(pkg.id)}
                            className={`p-2 rounded-lg ${
                              pkg.status === 'active' 
                                ? 'text-gray-600 hover:bg-gray-100' 
                                : 'text-green-600 hover:bg-green-50'
                            }`}
                            title={pkg.status === 'active' ? 'Deactivate' : 'Activate'}
                          >
                            {pkg.status === 'active' ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                          </button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleTogglePopular(pkg.id)}
                            className={`p-2 rounded-lg ${
                              pkg.isPopular 
                                ? 'text-yellow-600 hover:bg-yellow-50' 
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            title={pkg.isPopular ? 'Remove Popular' : 'Mark as Popular'}
                          >
                            <Star className={`w-4 h-4 ${pkg.isPopular ? 'fill-current' : ''}`} />
                          </button>
                          <button
                            onClick={() => navigate(`/admin-control/plans/view/${pkg.id}`)}
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Packages List View */}
            {viewMode === 'list' && (
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <input
                          type="checkbox"
                          checked={selectedPackages.length > 0 && selectedPackages.length === currentPackages.length}
                          onChange={selectAllPackages}
                          className="w-4 h-4 text-blue-600 rounded border-gray-300"
                        />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Package Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Pricing & Duration
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Limits & Support
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentPackages.map(pkg => (
                      <tr key={pkg.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            checked={selectedPackages.includes(pkg.id)}
                            onChange={() => togglePackageSelection(pkg.id)}
                            className="w-4 h-4 text-blue-600 rounded border-gray-300"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${getColorClasses(pkg.color)}`}>
                              {getIconComponent(pkg.icon)}
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-gray-900">{pkg.name}</span>
                                {pkg.isPopular && (
                                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                )}
                                {pkg.isFeatured && (
                                  <span className="px-2 py-0.5 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                                    Featured
                                  </span>
                                )}
                              </div>
                              <div className="text-sm text-gray-500">{pkg.planType}</div>
                              <div className="text-xs text-gray-400 mt-1 line-clamp-1">{pkg.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            <div className="text-lg font-bold text-gray-900">
                              {formatCurrency(pkg.price)}
                              <span className="text-sm font-normal text-gray-600">/{pkg.duration}</span>
                            </div>
                            <div className="text-sm text-gray-600">
                              <Calendar className="w-3 h-3 inline mr-1" />
                              {pkg.duration}
                            </div>
                            <div className="text-sm text-gray-600">
                              <CreditCard className="w-3 h-3 inline mr-1" />
                              {pkg.paymentTerms} payment
                            </div>
                            {pkg.freeTrial !== 'No' && (
                              <div className="text-sm text-green-600">
                                <Clock className="w-3 h-3 inline mr-1" />
                                {pkg.freeTrial} free trial
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Max Gyms:</span>
                              <span className="font-medium">{pkg.maxGyms}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Max Members:</span>
                              <span className="font-medium">{pkg.maxMembers}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Support:</span>
                              <span className="font-medium">{pkg.support}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Status:</span>
                              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                pkg.status === 'active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {pkg.status}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => navigate(`/admin-control/plans/edit/${pkg.id}`)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                              title="Edit"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeletePackage(pkg.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleToggleStatus(pkg.id)}
                              className={`p-2 rounded-lg ${
                                pkg.status === 'active' 
                                  ? 'text-red-600 hover:bg-red-50' 
                                  : 'text-green-600 hover:bg-green-50'
                              }`}
                              title={pkg.status === 'active' ? 'Deactivate' : 'Activate'}
                            >
                              {pkg.status === 'active' ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                            </button>
                            <button
                              onClick={() => navigate(`/admin-control/plans/view/${pkg.id}`)}
                              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                              title="View Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Empty State */}
            {!loading && filteredPackages.length === 0 && (
              <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
                <Package className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No packages found</h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  {searchQuery ? 'Try adjusting your search or filters' : 'Create your first gym owner package to get started'}
                </p>
                <button
                  onClick={() => navigate('/admin-control/plans/new')}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600  text-white rounded-lg hover:from-blue-700 hover:to-purple-700 shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create New Package</span>
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredPackages.length > 0 && (
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
                <span className="font-medium">{Math.min(endIndex, filteredPackages.length)}</span> of{' '}
                <span className="font-medium">{filteredPackages.length}</span> packages
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg border ${
                      currentPage === 1
                        ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 rounded-lg border text-sm font-medium ${
                          currentPage === pageNum
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg border ${
                      currentPage === totalPages
                        ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GymPlans;