import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Users,
  Calendar,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  MoreVertical,
  ChevronRight,
  ChevronLeft,
  Star,
  Award,
  Shield,
  Zap,
  Clock,
  IndianRupee,
  TrendingUp,
  BarChart,
  PieChart,
  Settings,
  RefreshCw,
  Printer,
  Globe,
  Home,
  Briefcase,
  Target,
  Activity,
  Heart,
  AlertCircle,
  Check,
  X,
  ExternalLink
} from 'lucide-react';

const AllGyms = () => {
  const navigate = useNavigate();
  
  // State Management
  const [gyms, setGyms] = useState([
    {
      id: 1,
      name: "PowerFit Gym - Mumbai Central",
      owner: "Rajesh Sharma",
      email: "rajesh@powerfit.com",
      phone: "+91 98765 43210",
      address: "Mumbai Central, Mumbai, Maharashtra 400008",
      status: "active",
      plan: "FitOrbit Platinum",
      subscription: "Annual",
      members: 450,
      staff: 12,
      revenue: 425000,
      joinDate: "2023-01-15",
      rating: 4.8,
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      facilities: ["Cardio", "Weight Training", "Swimming Pool", "Sauna", "Cafe"],
      equipment: "Premium",
      size: "8500 sq ft",
      timings: "5:00 AM - 11:00 PM",
      isVerified: true,
      isPopular: true,
      renewalDate: "2024-01-15",
      paymentStatus: "paid"
    },
    {
      id: 2,
      name: "Elite Fitness - Andheri West",
      owner: "Neha Patel",
      email: "neha@elitefitness.com",
      phone: "+91 87654 32109",
      address: "Andheri West, Mumbai, Maharashtra 400053",
      status: "active",
      plan: "FitOrbit Pro",
      subscription: "Semi-Annual",
      members: 320,
      staff: 8,
      revenue: 285000,
      joinDate: "2023-03-20",
      rating: 4.6,
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      facilities: ["Cardio", "Weight Training", "Yoga Studio", "CrossFit"],
      equipment: "Advanced",
      size: "6500 sq ft",
      timings: "6:00 AM - 10:00 PM",
      isVerified: true,
      isPopular: false,
      renewalDate: "2024-03-20",
      paymentStatus: "paid"
    },
    {
      id: 3,
      name: "Body Temple - Bandra",
      owner: "Vikram Mehta",
      email: "vikram@bodytemple.com",
      phone: "+91 76543 21098",
      address: "Bandra West, Mumbai, Maharashtra 400050",
      status: "active",
      plan: "FitOrbit Standard",
      subscription: "Quarterly",
      members: 280,
      staff: 6,
      revenue: 210000,
      joinDate: "2023-05-10",
      rating: 4.4,
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      facilities: ["Cardio", "Weight Training", "Group Classes"],
      equipment: "Standard",
      size: "5000 sq ft",
      timings: "7:00 AM - 9:00 PM",
      isVerified: true,
      isPopular: true,
      renewalDate: "2024-05-10",
      paymentStatus: "pending"
    },
    {
      id: 4,
      name: "Fitness Zone - Delhi",
      owner: "Amit Verma",
      email: "amit@fitnesszone.com",
      phone: "+91 65432 10987",
      address: "Connaught Place, New Delhi 110001",
      status: "active",
      plan: "FitOrbit Pro",
      subscription: "Annual",
      members: 520,
      staff: 15,
      revenue: 495000,
      joinDate: "2023-02-01",
      rating: 4.9,
      city: "Delhi",
      state: "Delhi",
      country: "India",
      facilities: ["Cardio", "Weight Training", "Swimming Pool", "Spa", "Restaurant"],
      equipment: "Premium",
      size: "12000 sq ft",
      timings: "24/7",
      isVerified: true,
      isPopular: true,
      renewalDate: "2024-02-01",
      paymentStatus: "paid"
    },
    {
      id: 5,
      name: "Muscle Factory - Bangalore",
      owner: "Sandeep Reddy",
      email: "sandeep@musclefactory.com",
      phone: "+91 54321 09876",
      address: "Indiranagar, Bangalore, Karnataka 560038",
      status: "active",
      plan: "FitOrbit Platinum",
      subscription: "Annual",
      members: 380,
      staff: 10,
      revenue: 365000,
      joinDate: "2023-06-25",
      rating: 4.7,
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
      facilities: ["Cardio", "Bodybuilding", "Powerlifting", "Supplements Store"],
      equipment: "Professional",
      size: "7500 sq ft",
      timings: "5:00 AM - 12:00 AM",
      isVerified: true,
      isPopular: false,
      renewalDate: "2024-06-25",
      paymentStatus: "paid"
    },
    {
      id: 6,
      name: "Wellness Hub - Pune",
      owner: "Priya Deshpande",
      email: "priya@wellnesshub.com",
      phone: "+91 43210 98765",
      address: "Koregaon Park, Pune, Maharashtra 411001",
      status: "inactive",
      plan: "FitOrbit Startup",
      subscription: "Monthly",
      members: 120,
      staff: 4,
      revenue: 85000,
      joinDate: "2023-04-05",
      rating: 4.2,
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      facilities: ["Cardio", "Yoga", "Meditation", "Wellness Cafe"],
      equipment: "Basic",
      size: "3500 sq ft",
      timings: "8:00 AM - 8:00 PM",
      isVerified: false,
      isPopular: false,
      renewalDate: "2023-10-05",
      paymentStatus: "overdue"
    },
    {
      id: 7,
      name: "CrossFit Central - Hyderabad",
      owner: "Rohit Singh",
      email: "rohit@crossfitcentral.com",
      phone: "+91 32109 87654",
      address: "Banjara Hills, Hyderabad, Telangana 500034",
      status: "active",
      plan: "FitOrbit Standard",
      subscription: "Quarterly",
      members: 210,
      staff: 5,
      revenue: 158000,
      joinDate: "2023-07-15",
      rating: 4.5,
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      facilities: ["CrossFit", "Olympic Weightlifting", "Mobility Training"],
      equipment: "Specialized",
      size: "6000 sq ft",
      timings: "6:00 AM - 10:00 PM",
      isVerified: true,
      isPopular: false,
      renewalDate: "2024-07-15",
      paymentStatus: "paid"
    },
    {
      id: 8,
      name: "Sports Complex - Chennai",
      owner: "Karthik Iyer",
      email: "karthik@sportscomplex.com",
      phone: "+91 21098 76543",
      address: "Nungambakkam, Chennai, Tamil Nadu 600034",
      status: "active",
      plan: "FitOrbit Enterprise",
      subscription: "Biennial",
      members: 680,
      staff: 25,
      revenue: 625000,
      joinDate: "2023-01-30",
      rating: 4.9,
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      facilities: ["Cardio", "Weight Training", "Sports Courts", "Swimming Pool", "Spa", "Cafe"],
      equipment: "Elite",
      size: "20000 sq ft",
      timings: "5:00 AM - 11:00 PM",
      isVerified: true,
      isPopular: true,
      renewalDate: "2025-01-30",
      paymentStatus: "paid"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPlan, setFilterPlan] = useState('all');
  const [filterCity, setFilterCity] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedGyms, setSelectedGyms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [sortBy, setSortBy] = useState('revenue');
  const [expandedGym, setExpandedGym] = useState(null);

  // Statistics
  const stats = {
    totalGyms: gyms.length,
    activeGyms: gyms.filter(g => g.status === 'active').length,
    totalMembers: gyms.reduce((sum, gym) => sum + gym.members, 0),
    totalRevenue: gyms.reduce((sum, gym) => sum + gym.revenue, 0),
    verifiedGyms: gyms.filter(g => g.isVerified).length,
    popularGyms: gyms.filter(g => g.isPopular).length,
    avgRating: (gyms.reduce((sum, gym) => sum + gym.rating, 0) / gyms.length).toFixed(1)
  };

  // Filter gyms
  const filteredGyms = gyms.filter(gym => {
    const matchesSearch = gym.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         gym.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         gym.city.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || gym.status === filterStatus;
    const matchesPlan = filterPlan === 'all' || gym.plan === filterPlan;
    const matchesCity = filterCity === 'all' || gym.city === filterCity;
    
    return matchesSearch && matchesStatus && matchesPlan && matchesCity;
  }).sort((a, b) => {
    switch(sortBy) {
      case 'revenue': return b.revenue - a.revenue;
      case 'members': return b.members - a.members;
      case 'rating': return b.rating - a.rating;
      case 'name': return a.name.localeCompare(b.name);
      case 'joinDate': return new Date(b.joinDate) - new Date(a.joinDate);
      default: return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(filteredGyms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGyms = filteredGyms.slice(startIndex, endIndex);

  // Helper functions
  const handleDeleteGym = (id) => {
    if (window.confirm('Are you sure you want to delete this gym?')) {
      setGyms(prev => prev.filter(gym => gym.id !== id));
      setSelectedGyms(prev => prev.filter(gymId => gymId !== id));
    }
  };

  const toggleGymSelection = (id) => {
    setSelectedGyms(prev => 
      prev.includes(id) 
        ? prev.filter(gymId => gymId !== id)
        : [...prev, id]
    );
  };

  const selectAllGyms = () => {
    if (selectedGyms.length === currentGyms.length) {
      setSelectedGyms([]);
    } else {
      setSelectedGyms(currentGyms.map(gym => gym.id));
    }
  };

  const handleToggleStatus = (id) => {
    setGyms(prev => prev.map(gym => 
      gym.id === id ? { ...gym, status: gym.status === 'active' ? 'inactive' : 'active' } : gym
    ));
  };

  const handleToggleVerification = (id) => {
    setGyms(prev => prev.map(gym => 
      gym.id === id ? { ...gym, isVerified: !gym.isVerified } : gym
    ));
  };

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  // City options
  const cityOptions = [...new Set(gyms.map(gym => gym.city))];

  // Plan options
  const planOptions = [...new Set(gyms.map(gym => gym.plan))];

  return (
    <div className="min-h-screen p-1 md:p-3">
      {/* Header */}
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-5 md:p-6 mb-6 sm:mb-8">
  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-5 sm:mb-6">
    <div className="mb-5 lg:mb-0">
      <div className="flex items-center space-x-3 mb-3">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Gym Management
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Manage all registered gyms and their subscriptions
          </p>
        </div>
      </div>

      {/* Compact stats row */}
      <div className="flex flex-wrap gap-3 sm:gap-4 mt-4">
        {[
          { label: 'Total Gyms', value: stats.totalGyms, icon: Building2, color: 'blue' },
          { label: 'Active Gyms', value: stats.activeGyms, icon: CheckCircle, color: 'green' },
          { label: 'Total Members', value: stats.totalMembers.toLocaleString(), icon: Users, color: 'purple' },
          { label: 'Total Revenue', value: formatCurrency(stats.totalRevenue), icon: IndianRupee, color: 'amber' }
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={index}
              className="flex items-center space-x-2 sm:space-x-3 bg-gray-50 px-3 sm:px-4 py-2 rounded-lg border border-gray-200 min-w-[140px]"
            >
              <div className={`p-2 rounded-md ${
                stat.color === 'blue' ? 'bg-blue-50' :
                stat.color === 'green' ? 'bg-green-50' :
                stat.color === 'purple' ? 'bg-purple-50' : 'bg-amber-50'
              }`}>
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  stat.color === 'blue' ? 'text-blue-600' :
                  stat.color === 'green' ? 'text-green-600' :
                  stat.color === 'purple' ? 'text-purple-600' : 'text-amber-600'
                }`} />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 lg:mt-0">
      <button
        onClick={() => navigate('/admin-control/gyms/new')}
        className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-sm text-sm sm:text-base"
      >
        <Plus className="w-4 h-4" />
        <span>Add New Gym</span>
      </button>
      <button 
        className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm text-sm sm:text-base"
      >
        <Download className="w-4 h-4" />
        <span className="hidden xs:inline">Export</span>
      </button>
      <button 
        className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm text-sm sm:text-base"
      >
        <Printer className="w-4 h-4" />
        <span className="hidden sm:inline">Print</span>
      </button>
    </div>
  </div>

  {/* ─── Single-row filter bar ──────────────────────────────────────────────── */}
  <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
      {/* Search - takes more space */}
      <div className="relative md:col-span-1 lg:col-span-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search gyms by name, owner or city..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Status */}
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="all">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      {/* Plan */}
      <select
        value={filterPlan}
        onChange={(e) => setFilterPlan(e.target.value)}
        className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="all">All Plans</option>
        {planOptions.map(plan => (
          <option key={plan} value={plan}>{plan}</option>
        ))}
      </select>

      {/* City */}
      <select
        value={filterCity}
        onChange={(e) => setFilterCity(e.target.value)}
        className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="all">All Cities</option>
        {cityOptions.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      {/* Sort - last in the row */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="revenue">Sort by Revenue</option>
        <option value="members">Sort by Members</option>
        <option value="rating">Sort by Rating</option>
        <option value="name">Sort by Name</option>
        <option value="joinDate">Sort by Join Date</option>
      </select>
    </div>
  </div>
</div>
      {/* Gyms List/Grid */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Registered Gyms ({filteredGyms.length})
            </h2>
            {selectedGyms.length > 0 && (
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                {selectedGyms.length} selected
              </span>
            )}
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <div className="grid grid-cols-2 gap-1 w-5 h-5">
                <div className={`rounded-sm ${viewMode === 'grid' ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
                <div className={`rounded-sm ${viewMode === 'grid' ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
                <div className={`rounded-sm ${viewMode === 'grid' ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
                <div className={`rounded-sm ${viewMode === 'grid' ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
              </div>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <div className="flex flex-col space-y-0.5 w-5 h-5">
                <div className={`h-1 rounded-sm ${viewMode === 'list' ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
                <div className={`h-1 rounded-sm ${viewMode === 'list' ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
                <div className={`h-1 rounded-sm ${viewMode === 'list' ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentGyms.map(gym => (
             <Link to={'/admin-control/gym-management/gym-details'}>

               <div key={gym.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Gym Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={selectedGyms.includes(gym.id)}
                        onChange={() => toggleGymSelection(gym.id)}
                        className="w-4 h-4 text-blue-600 rounded border-gray-300"
                      />
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {gym.isVerified && (
                        <Shield className="w-4 h-4 text-green-500" />
                      )}
                      {gym.isPopular && (
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        gym.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {gym.status}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-1">{gym.name}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-3 h-3 mr-1" />
                    {gym.city}, {gym.state}
                  </div>
                </div>

                {/* Gym Details */}
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Owner</div>
                      <div className="font-medium text-gray-900">{gym.owner}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Plan</div>
                      <div className="font-medium text-gray-900">{gym.plan}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Members</div>
                      <div className="font-medium text-gray-900">{gym.members.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Revenue</div>
                      <div className="font-medium text-gray-900">{formatCurrency(gym.revenue)}</div>
                    </div>
                  </div>

                  {/* Rating and Facilities */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 font-medium">{gym.rating}</span>
                      <span className="ml-2 text-xs text-gray-500">({gym.members} members)</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      Joined: {gym.joinDate}
                    </div>
                  </div>

                  {/* Facilities Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {gym.facilities.slice(0, 2).map((facility, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {facility}
                      </span>
                    ))}
                    {gym.facilities.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        +{gym.facilities.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Payment Status */}
                  <div className={`rounded-lg p-3 mb-4 ${
                    gym.paymentStatus === 'paid' ? 'bg-green-50 border border-green-200' :
                    gym.paymentStatus === 'pending' ? 'bg-yellow-50 border border-yellow-200' :
                    'bg-red-50 border border-red-200'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">
                        {gym.paymentStatus === 'paid' ? 'Payment Complete' :
                         gym.paymentStatus === 'pending' ? 'Payment Pending' : 'Payment Overdue'}
                      </div>
                      <div className="text-sm">
                        Renewal: {gym.renewalDate}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => navigate(`/admin/gyms/edit/${gym.id}`)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteGym(gym.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleToggleStatus(gym.id)}
                        className={`p-2 rounded-lg ${
                          gym.status === 'active' 
                            ? 'text-gray-600 hover:bg-gray-100' 
                            : 'text-green-600 hover:bg-green-50'
                        }`}
                        title={gym.status === 'active' ? 'Deactivate' : 'Activate'}
                      >
                        {gym.status === 'active' ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleToggleVerification(gym.id)}
                        className={`p-2 rounded-lg ${
                          gym.isVerified 
                            ? 'text-green-600 hover:bg-green-50' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                        title={gym.isVerified ? 'Unverify' : 'Verify'}
                      >
                        <Shield className={`w-4 h-4 ${gym.isVerified ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        onClick={() => setExpandedGym(expandedGym === gym.id ? null : gym.id)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                        title="More details"
                      >
                        {expandedGym === gym.id ? <ChevronRight className="w-4 h-4 rotate-90" /> : <ChevronRight className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedGym === gym.id && (
                  <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Contact</div>
                        <div className="font-medium text-gray-900">{gym.phone}</div>
                        <div className="text-gray-700">{gym.email}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Size & Timings</div>
                        <div className="font-medium text-gray-900">{gym.size}</div>
                        <div className="text-gray-700">{gym.timings}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Equipment</div>
                        <div className="font-medium text-gray-900">{gym.equipment}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Staff</div>
                        <div className="font-medium text-gray-900">{gym.staff} members</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
             
             </Link>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <input
                      type="checkbox"
                      checked={selectedGyms.length > 0 && selectedGyms.length === currentGyms.length}
                      onChange={selectAllGyms}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gym Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subscription
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statistics
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentGyms.map(gym => (
                  <tr key={gym.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedGyms.includes(gym.id)}
                        onChange={() => toggleGymSelection(gym.id)}
                        className="w-4 h-4 text-blue-600 rounded border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{gym.name}</div>
                          <div className="text-sm text-gray-500">{gym.city}, {gym.state}</div>
                          <div className="text-xs text-gray-400 mt-1">{gym.owner}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="font-medium text-gray-900">{gym.plan}</div>
                        <div className="text-sm text-gray-600">
                          <Calendar className="w-3 h-3 inline mr-1" />
                          {gym.subscription}
                        </div>
                        <div className="text-sm text-gray-600">
                          Renewal: {gym.renewalDate}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Members:</span>
                          <span className="font-medium">{gym.members.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Revenue:</span>
                          <span className="font-medium">{formatCurrency(gym.revenue)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Rating:</span>
                          <span className="font-medium flex items-center">
                            <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
                            {gym.rating}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          gym.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {gym.status === 'active' ? (
                            <>
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Active
                            </>
                          ) : (
                            <>
                              <XCircle className="w-3 h-3 mr-1" />
                              Inactive
                            </>
                          )}
                        </span>
                        <div className={`text-xs px-2 py-0.5 rounded-full ${
                          gym.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' :
                          gym.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {gym.paymentStatus}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => navigate(`/admin/gyms/edit/${gym.id}`)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteGym(gym.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleToggleStatus(gym.id)}
                          className={`p-2 rounded-lg ${
                            gym.status === 'active' 
                              ? 'text-red-600 hover:bg-red-50' 
                              : 'text-green-600 hover:bg-green-50'
                          }`}
                          title={gym.status === 'active' ? 'Deactivate' : 'Activate'}
                        >
                          {gym.status === 'active' ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={() => navigate(`/admin/gyms/view/${gym.id}`)}
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
        {filteredGyms.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
            <Building2 className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No gyms found</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              {searchQuery ? 'Try adjusting your search or filters' : 'Add your first gym to get started'}
            </p>
            <button
              onClick={() => navigate('/admin/gyms/add')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Gym</span>
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredGyms.length > 0 && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
            <span className="font-medium">{Math.min(endIndex, filteredGyms.length)}</span> of{' '}
            <span className="font-medium">{filteredGyms.length}</span> gyms
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value={6}>6 per page</option>
              <option value={12}>12 per page</option>
              <option value={24}>24 per page</option>
            </select>
            
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
                        ? 'bg-blue-600 text-white border-blue-600'
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
    </div>
  );
};

export default AllGyms;