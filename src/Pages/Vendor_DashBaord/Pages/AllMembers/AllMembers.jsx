import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Users, 
  UserPlus, 
  Download, 
  Printer,
  Mail,
  Phone,
  Calendar,
  IndianRupee,
  ChevronDown,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  UserCheck,
  UserX,
  Clock,
  Star,
  Crown,
  TrendingUp,
  BarChart3,
  RefreshCw,
  X,
  CheckCircle,
  AlertCircle,
  Shield,
  Target,
  Dumbbell,
  Package,
  CreditCard,
  FileText,
  MapPin,
  Smartphone,
  Globe,
  Tag,
  Percent,
  Award,
  Activity,
  Heart,
  Menu,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const AllMembers = () => {
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 640) {
        setItemsPerPage(4);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(8);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Sample member data
  const members = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh.kumar@gmail.com",
      phone: "+91 98765 43210",
      membershipId: "FIT001-RK",
      joinDate: "2024-01-15",
      expiryDate: "2024-12-15",
      plan: "Premium Plus",
      planType: "Yearly",
      status: "active",
      trainer: "Aarav Sharma",
      branch: "Mumbai Central",
      payments: "₹45,000",
      attendance: "92%",
      category: "Premium",
      tags: ["Regular", "Diet Plan"],
      photo: "RK"
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@yahoo.com",
      phone: "+91 87654 32109",
      membershipId: "FIT002-PS",
      joinDate: "2024-02-20",
      expiryDate: "2024-08-20",
      plan: "Standard",
      planType: "6 Months",
      status: "active",
      trainer: "Neha Patel",
      branch: "Andheri West",
      payments: "₹24,000",
      attendance: "88%",
      category: "Standard",
      tags: ["Yoga", "Cardio"],
      photo: "PS"
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit.patel@hotmail.com",
      phone: "+91 76543 21098",
      membershipId: "FIT003-AP",
      joinDate: "2024-03-10",
      expiryDate: "2024-06-10",
      plan: "Basic",
      planType: "3 Months",
      status: "pending",
      trainer: "Rohan Singh",
      branch: "Bandra",
      payments: "₹15,000",
      attendance: "76%",
      category: "Basic",
      tags: ["Weight Loss"],
      photo: "AP"
    },
    {
      id: 4,
      name: "Sneha Verma",
      email: "sneha.verma@gmail.com",
      phone: "+91 65432 10987",
      membershipId: "FIT004-SV",
      joinDate: "2023-12-05",
      expiryDate: "2024-12-05",
      plan: "Premium Plus",
      planType: "Yearly",
      status: "active",
      trainer: "Aarav Sharma",
      branch: "Mumbai Central",
      payments: "₹45,000",
      attendance: "96%",
      category: "Premium",
      tags: ["Bodybuilding", "Supplements"],
      photo: "SV"
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram.singh@gmail.com",
      phone: "+91 54321 09876",
      membershipId: "FIT005-VS",
      joinDate: "2024-04-01",
      expiryDate: "2024-07-01",
      plan: "Standard",
      planType: "3 Months",
      status: "expired",
      trainer: "Neha Patel",
      branch: "Andheri West",
      payments: "₹12,000",
      attendance: "65%",
      category: "Standard",
      tags: ["Beginner"],
      photo: "VS"
    },
    {
      id: 6,
      name: "Anjali Reddy",
      email: "anjali.reddy@gmail.com",
      phone: "+91 43210 98765",
      membershipId: "FIT006-AR",
      joinDate: "2024-01-30",
      expiryDate: "2025-01-30",
      plan: "Elite",
      planType: "Yearly",
      status: "active",
      trainer: "Rohan Singh",
      branch: "Bandra",
      payments: "₹60,000",
      attendance: "98%",
      category: "Elite",
      tags: ["Competition", "Personal Training"],
      photo: "AR"
    },
    {
      id: 7,
      name: "Karan Malhotra",
      email: "karan.malhotra@gmail.com",
      phone: "+91 32109 87654",
      membershipId: "FIT007-KM",
      joinDate: "2024-03-25",
      expiryDate: "2024-06-25",
      plan: "Basic",
      planType: "3 Months",
      status: "inactive",
      trainer: "Aarav Sharma",
      branch: "Mumbai Central",
      payments: "₹15,000",
      attendance: "42%",
      category: "Basic",
      tags: ["Casual"],
      photo: "KM"
    },
    {
      id: 8,
      name: "Meera Kapoor",
      email: "meera.kapoor@gmail.com",
      phone: "+91 21098 76543",
      membershipId: "FIT008-MK",
      joinDate: "2024-02-15",
      expiryDate: "2024-08-15",
      plan: "Premium Plus",
      planType: "6 Months",
      status: "active",
      trainer: "Neha Patel",
      branch: "Andheri West",
      payments: "₹27,000",
      attendance: "91%",
      category: "Premium",
      tags: ["Pilates", "Wellness"],
      photo: "MK"
    }
  ];

  const statusColors = {
    active: 'bg-green-100 text-green-800 border-green-200',
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    expired: 'bg-red-100 text-red-800 border-red-200',
    inactive: 'bg-gray-100 text-gray-800 border-gray-200'
  };

  const categoryColors = {
    Elite: 'bg-purple-100 text-purple-800 border-purple-200',
    Premium: 'bg-blue-100 text-blue-800 border-blue-200',
    Standard: 'bg-green-100 text-green-800 border-green-200',
    Basic: 'bg-gray-100 text-gray-800 border-gray-200'
  };

  const sortOptions = [
    { id: 'recent', label: 'Most Recent' },
    { id: 'name', label: 'Name (A-Z)' },
    { id: 'expiry', label: 'Expiry Date' },
    { id: 'plan', label: 'Membership Plan' },
    { id: 'payment', label: 'Payment Amount' }
  ];

  const filterOptions = [
    { id: 'active', label: 'Active Members', count: 6 },
    { id: 'pending', label: 'Pending Approval', count: 1 },
    { id: 'expired', label: 'Expired', count: 1 },
    { id: 'premium', label: 'Premium Plans', count: 3 },
    { id: 'standard', label: 'Standard Plans', count: 2 }
  ];

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

  const getStatusIcon = (status) => {
    switch(status) {
      case 'active': return <UserCheck className="w-3 h-3" />;
      case 'pending': return <Clock className="w-3 h-3" />;
      case 'expired': return <AlertCircle className="w-3 h-3" />;
      case 'inactive': return <UserX className="w-3 h-3" />;
      default: return <UserCheck className="w-3 h-3" />;
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(members.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMembers = members.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 sm:mb-6">
          <div>
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">All Members</h1>
                <p className="text-xs sm:text-sm text-gray-600">Manage your gym members efficiently</p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-700">Active: <span className="font-bold">6 members</span></span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-700">Premium: <span className="font-bold">3 members</span></span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                <span className="text-xs sm:text-sm text-gray-700">Revenue: <span className="font-bold">₹2,43,000</span></span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 lg:mt-0">
            <button className="flex items-center space-x-1 sm:space-x-2 bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
              <UserPlus className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Add Member</span>
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

        {/* Search and Filter Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setFilterMenuOpen(!filterMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm sm:text-base"
            >
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Filter className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                <span className="text-gray-700">Filters</span>
              </div>
              <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-600 transition-transform ${filterMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {filterMenuOpen && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-3 sm:p-4">
                <div className="space-y-2 sm:space-y-3">
                  {filterOptions.map(option => (
                    <label key={option.id} className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded text-blue-600 w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm text-gray-700">{option.label}</span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
                        {option.count}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                  <button className="text-xs sm:text-sm text-gray-600 hover:text-gray-800">
                    Clear All
                  </button>
                  <button className="text-xs sm:text-sm bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded">
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>{option.label}</option>
              ))}
            </select>
            
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 sm:p-3 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
              >
                <div className="grid grid-cols-2 gap-0.5 sm:gap-1 w-4 h-4 sm:w-5 sm:h-5">
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
                <div className="flex flex-col space-y-0.5 sm:space-y-1 w-4 h-4 sm:w-5 sm:h-5">
                  <div className="bg-current h-0.5 sm:h-1 rounded-sm"></div>
                  <div className="bg-current h-0.5 sm:h-1 rounded-sm"></div>
                  <div className="bg-current h-0.5 sm:h-1 rounded-sm"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Members Grid */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-50 border-b border-gray-200 p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <input
                type="checkbox"
                checked={selectedMembers.length === currentMembers.length}
                onChange={selectAllMembers}
                className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
              />
              <span className="text-xs sm:text-sm text-gray-700">
                {selectedMembers.length > 0 
                  ? `${selectedMembers.length} selected` 
                  : `${members.length} members`
                }
              </span>
            </div>
            
            {selectedMembers.length > 0 && (
              <div className="flex items-center space-x-2 sm:space-x-3">
                {!isMobile && (
                  <>
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-xs sm:text-sm">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Email</span>
                    </button>
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-xs sm:text-sm">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>SMS</span>
                    </button>
                  </>
                )}
                <button className="flex items-center space-x-1 text-red-600 hover:text-red-800 text-xs sm:text-sm">
                  <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Members Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
            {currentMembers.map(member => (
              <div 
                key={member.id} 
                className="bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-gray-400 transition-all duration-300"
              >
                {/* Card Header */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <input
                        type="checkbox"
                        checked={selectedMembers.includes(member.id)}
                        onChange={() => toggleMemberSelection(member.id)}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
                      />
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-white text-sm sm:text-base ${
                        member.category === 'Elite' ? 'bg-purple-600 ' :
                        member.category === 'Premium' ? 'bg-blue-800' :
                        member.category === 'Standard' ? 'bg-green-800' :
                        'bg-gradient-to-br from-gray-600 to-gray-800'
                      }`}>
                        {member.photo}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">{member.name}</h3>
                        <p className="text-xs text-gray-600">{member.membershipId}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg">
                        <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 space-y-3 sm:space-y-4">
                  {/* Status and Category */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium border ${statusColors[member.status]}`}>
                      {getStatusIcon(member.status)}
                      <span className="ml-1 text-[10px] sm:text-xs">{member.status.toUpperCase()}</span>
                    </span>
                    <span className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium border ${categoryColors[member.category]}`}>
                      {member.category === 'Elite' && <Crown className="w-2 h-2 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />}
                      {member.category === 'Premium' && <Star className="w-2 h-2 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />}
                      <span className="text-[10px] sm:text-xs">{member.plan}</span>
                    </span>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-gray-400" />
                      <span className="truncate text-[10px] sm:text-sm">{member.email}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-gray-400" />
                      <span className="text-[10px] sm:text-sm">{member.phone}</span>
                    </div>
                    {!isMobile && (
                      <div className="flex items-center text-xs sm:text-sm text-gray-600">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-gray-400" />
                        <span className="text-xs sm:text-sm">{member.branch}</span>
                      </div>
                    )}
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                      <div className="text-[10px] sm:text-xs text-gray-500">Join Date</div>
                      <div className="flex items-center text-xs sm:text-sm font-medium text-gray-900">
                        <Calendar className="w-2 h-2 sm:w-3 sm:h-3 mr-1 text-blue-600" />
                        <span className="text-[10px] sm:text-sm">{member.joinDate}</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                      <div className="text-[10px] sm:text-xs text-gray-500">Expiry</div>
                      <div className="flex items-center text-xs sm:text-sm font-medium text-gray-900">
                        <Calendar className="w-2 h-2 sm:w-3 sm:h-3 mr-1 text-red-600" />
                        <span className="text-[10px] sm:text-sm">{member.expiryDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="text-center">
                      <div className="text-sm sm:text-lg font-bold text-gray-900">{member.attendance}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Attendance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-lg font-bold text-gray-900 flex items-center justify-center">
                        <IndianRupee className="w-2 h-2 sm:w-3 sm:h-3 mr-0.5" />
                        <span className="text-sm sm:text-base">{member.payments.replace('₹', '')}</span>
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Paid</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-lg font-bold text-gray-900 text-xs sm:text-base">{member.planType}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Plan</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {member.tags.slice(0, isMobile ? 1 : 2).map((tag, index) => (
                      <span key={index} className="inline-flex items-center px-1.5 py-0.5 sm:px-2 sm:py-1 bg-blue-50 text-blue-700 text-[10px] sm:text-xs rounded">
                        <Tag className="w-2 h-2 sm:w-3 sm:h-3 mr-0.5" />
                        {tag}
                      </span>
                    ))}
                    {member.tags.length > (isMobile ? 1 : 2) && (
                      <span className="inline-flex items-center px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-50 text-gray-700 text-[10px] sm:text-xs rounded">
                        +{member.tags.length - (isMobile ? 1 : 2)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <button className="p-1.5 sm:p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <button className="p-1.5 sm:p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <button className="p-1.5 sm:p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                    <div className="text-xs text-gray-500">
                      Trainer: <span className="font-medium text-gray-700">{isMobile ? member.trainer.split(' ')[0] : member.trainer}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List View (for mobile)
          <div className="p-3">
            {currentMembers.map(member => (
              <div key={member.id} className="border-b border-gray-200 last:border-b-0 py-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedMembers.includes(member.id)}
                    onChange={() => toggleMemberSelection(member.id)}
                    className="w-3 h-3 text-blue-600 rounded border-gray-300"
                  />
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm ${
                    member.category === 'Elite' ? 'bg-purple-600' :
                    member.category === 'Premium' ? 'bg-blue-800' :
                    member.category === 'Standard' ? 'bg-green-800' :
                    'bg-gray-800'
                  }`}>
                    {member.photo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900 text-sm truncate">{member.name}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${statusColors[member.status]}`}>
                        {member.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{member.membershipId}</p>
                    <div className="flex items-center mt-1 space-x-2">
                      <span className="text-xs text-gray-700">{member.plan}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-700">{member.attendance} attendance</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="p-4 sm:p-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-0">
              Showing {startIndex + 1} to {Math.min(endIndex, members.length)} of {members.length} members
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
              >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              {[...Array(totalPages)].slice(0, isMobile ? 3 : 5).map((_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-2 py-1.5 sm:px-3 sm:py-2 border rounded-lg text-xs sm:text-sm ${
                      page === currentPage
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
              {totalPages > (isMobile ? 3 : 5) && (
                <span className="px-2 py-1.5 text-gray-500">...</span>
              )}
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
              >
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-5 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg sm:text-2xl font-bold">6</div>
              <div className="text-blue-200 text-xs sm:text-sm">Active Members</div>
            </div>
            <UserCheck className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-3 sm:p-5 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg sm:text-2xl font-bold flex items-center">
                <IndianRupee className="w-3 h-3 sm:w-5 sm:h-5 mr-1" />
                <span className="text-sm sm:text-base">2.43L</span>
              </div>
              <div className="text-green-200 text-xs sm:text-sm">Monthly Revenue</div>
            </div>
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-300" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3 sm:p-5 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg sm:text-2xl font-bold">98%</div>
              <div className="text-purple-200 text-xs sm:text-sm">Avg. Attendance</div>
            </div>
            <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-purple-300" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-3 sm:p-5 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg sm:text-2xl font-bold">32</div>
              <div className="text-amber-200 text-xs sm:text-sm">Days to Renew</div>
            </div>
            <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-amber-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMembers;