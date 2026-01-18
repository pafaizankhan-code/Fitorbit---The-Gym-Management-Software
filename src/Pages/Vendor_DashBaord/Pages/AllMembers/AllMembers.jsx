import React, { useState, useEffect, useMemo } from 'react';
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
  ChevronRight,
  Plus,
  ExternalLink,
  MessageSquare,
  CreditCard as CardIcon,
  Bell,
  Send,
  Upload,
  Save,
  ArrowUpDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AllMembers = () => {
  // State Management
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [viewMode, setViewMode] = useState('list');
  const [sortBy, setSortBy] = useState('recent');
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [activeFilters, setActiveFilters] = useState({
    status: [],
    plan: [],
    branch: [],
    category: []
  });
  const [showAddMember, setShowAddMember] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [members, setMembers] = useState([
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
      photo: "RK",
      address: "Mumbai, Maharashtra",
      age: 28,
      gender: "Male",
      emergencyContact: "+91 87654 32109",
      lastVisit: "2024-01-28",
      totalVisits: 45,
      paymentStatus: "paid",
      nextPayment: "2024-02-15"
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
      photo: "PS",
      address: "Andheri, Mumbai",
      age: 25,
      gender: "Female",
      emergencyContact: "+91 76543 21098",
      lastVisit: "2024-01-28",
      totalVisits: 32,
      paymentStatus: "paid",
      nextPayment: "2024-03-20"
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
      photo: "AP",
      address: "Bandra, Mumbai",
      age: 32,
      gender: "Male",
      emergencyContact: "+91 65432 10987",
      lastVisit: "2024-01-27",
      totalVisits: 28,
      paymentStatus: "pending",
      nextPayment: "2024-04-10"
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
      photo: "SV",
      address: "South Mumbai",
      age: 29,
      gender: "Female",
      emergencyContact: "+91 54321 09876",
      lastVisit: "2024-01-28",
      totalVisits: 65,
      paymentStatus: "paid",
      nextPayment: "2024-02-05"
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
      photo: "VS",
      address: "Andheri East",
      age: 35,
      gender: "Male",
      emergencyContact: "+91 43210 98765",
      lastVisit: "2024-01-25",
      totalVisits: 20,
      paymentStatus: "overdue",
      nextPayment: "2024-02-01"
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
      photo: "AR",
      address: "Bandra West",
      age: 27,
      gender: "Female",
      emergencyContact: "+91 32109 87654",
      lastVisit: "2024-01-28",
      totalVisits: 72,
      paymentStatus: "paid",
      nextPayment: "2024-02-28"
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
      photo: "KM",
      address: "Central Mumbai",
      age: 30,
      gender: "Male",
      emergencyContact: "+91 21098 76543",
      lastVisit: "2024-01-20",
      totalVisits: 15,
      paymentStatus: "paid",
      nextPayment: "2024-04-25"
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
      photo: "MK",
      address: "Andheri West",
      age: 26,
      gender: "Female",
      emergencyContact: "+91 10987 65432",
      lastVisit: "2024-01-28",
      totalVisits: 38,
      paymentStatus: "paid",
      nextPayment: "2024-03-15"
    }
  ]);

  // Filter options
  const statusOptions = [
    { id: 'active', label: 'Active', count: 6, color: 'green' },
    { id: 'pending', label: 'Pending', count: 1, color: 'yellow' },
    { id: 'expired', label: 'Expired', count: 1, color: 'red' },
    { id: 'inactive', label: 'Inactive', count: 1, color: 'gray' }
  ];

  const planOptions = [
    { id: 'premium-plus', label: 'Premium Plus', count: 3 },
    { id: 'elite', label: 'Elite', count: 1 },
    { id: 'standard', label: 'Standard', count: 2 },
    { id: 'basic', label: 'Basic', count: 2 }
  ];

  const branchOptions = [
    { id: 'mumbai-central', label: 'Mumbai Central', count: 3 },
    { id: 'andheri-west', label: 'Andheri West', count: 3 },
    { id: 'bandra', label: 'Bandra', count: 2 }
  ];

  const categoryOptions = [
    { id: 'elite', label: 'Elite', count: 1 },
    { id: 'premium', label: 'Premium', count: 3 },
    { id: 'standard', label: 'Standard', count: 2 },
    { id: 'basic', label: 'Basic', count: 2 }
  ];

  // Stats calculation
  const stats = useMemo(() => {
    const active = members.filter(m => m.status === 'active').length;
    const pending = members.filter(m => m.status === 'pending').length;
    const expired = members.filter(m => m.status === 'expired').length;
    const inactive = members.filter(m => m.status === 'inactive').length;
    
    const totalRevenue = members.reduce((sum, member) => {
      const amount = parseInt(member.payments.replace('₹', '').replace(',', ''));
      return sum + (isNaN(amount) ? 0 : amount);
    }, 0);

    const avgAttendance = members.reduce((sum, member) => {
      const attendance = parseInt(member.attendance);
      return sum + (isNaN(attendance) ? 0 : attendance);
    }, 0) / members.length;

    const expiringThisWeek = members.filter(m => {
      const expiryDate = new Date(m.expiryDate);
      const today = new Date();
      const weekFromNow = new Date();
      weekFromNow.setDate(today.getDate() + 7);
      return expiryDate >= today && expiryDate <= weekFromNow;
    }).length;

    return {
      active,
      pending,
      expired,
      inactive,
      totalRevenue,
      avgAttendance: avgAttendance.toFixed(1) + '%',
      expiringThisWeek
    };
  }, [members]);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
      
      if (width < 480) {
        setItemsPerPage(2);
      } else if (width < 640) {
        setItemsPerPage(3);
      } else if (width < 768) {
        setItemsPerPage(4);
      } else if (width < 1024) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(8);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Filter and sort members
  const filteredAndSortedMembers = useMemo(() => {
    let filtered = [...members];

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(member => 
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.phone.includes(searchQuery) ||
        member.membershipId.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filters
    if (activeFilters.status.length > 0) {
      filtered = filtered.filter(member => 
        activeFilters.status.includes(member.status)
      );
    }

    // Apply plan filters
    if (activeFilters.plan.length > 0) {
      filtered = filtered.filter(member => 
        activeFilters.plan.some(plan => member.plan.toLowerCase().includes(plan.toLowerCase()))
      );
    }

    // Apply branch filters
    if (activeFilters.branch.length > 0) {
      filtered = filtered.filter(member => 
        activeFilters.branch.includes(member.branch)
      );
    }

    // Apply category filters
    if (activeFilters.category.length > 0) {
      filtered = filtered.filter(member => 
        activeFilters.category.includes(member.category)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'expiry':
          return new Date(a.expiryDate) - new Date(b.expiryDate);
        case 'plan':
          return a.plan.localeCompare(b.plan);
        case 'payment':
          const aAmount = parseInt(a.payments.replace('₹', '').replace(',', ''));
          const bAmount = parseInt(b.payments.replace('₹', '').replace(',', ''));
          return bAmount - aAmount;
        case 'recent':
        default:
          return new Date(b.joinDate) - new Date(a.joinDate);
      }
    });

    return filtered;
  }, [members, searchQuery, activeFilters, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedMembers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMembers = filteredAndSortedMembers.slice(startIndex, endIndex);

  // Status colors
  const statusColors = {
    active: 'bg-green-100 text-green-800 border-green-200',
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    expired: 'bg-red-100 text-red-800 border-red-200',
    inactive: 'bg-gray-100 text-gray-800 border-gray-200'
  };

  const paymentStatusColors = {
    paid: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    overdue: 'bg-red-100 text-red-800'
  };

  const categoryColors = {
    Elite: 'bg-purple-100 text-purple-800 border-purple-200',
    Premium: 'bg-blue-100 text-blue-800 border-blue-200',
    Standard: 'bg-green-100 text-green-800 border-green-200',
    Basic: 'bg-gray-100 text-gray-800 border-gray-200'
  };

  // Helper functions
  const toggleMemberSelection = (id) => {
    setSelectedMembers(prev => 
      prev.includes(id) 
        ? prev.filter(memberId => memberId !== id)
        : [...prev, id]
    );
  };

  const selectAllMembers = () => {
    if (selectedMembers.length === currentMembers.length) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(currentMembers.map(member => member.id));
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

  const toggleFilter = (type, value) => {
    setActiveFilters(prev => {
      const currentValues = prev[type];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [type]: currentValues.filter(v => v !== value)
        };
      } else {
        return {
          ...prev,
          [type]: [...currentValues, value]
        };
      }
    });
  };

  const clearAllFilters = () => {
    setActiveFilters({
      status: [],
      plan: [],
      branch: [],
      category: []
    });
    setSearchQuery('');
  };

  const handleDeleteMember = (id) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      setMembers(prev => prev.filter(member => member.id !== id));
      setSelectedMembers(prev => prev.filter(memberId => memberId !== id));
    }
  };

  const handleBulkDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${selectedMembers.length} members?`)) {
      setMembers(prev => prev.filter(member => !selectedMembers.includes(member.id)));
      setSelectedMembers([]);
    }
  };

  const handleSendBulkMessage = (type) => {
    const selectedMemberDetails = members.filter(m => selectedMembers.includes(m.id));
    const phones = selectedMemberDetails.map(m => m.phone);
    const emails = selectedMemberDetails.map(m => m.email);
    
    if (type === 'sms') {
      alert(`Sending SMS to ${phones.length} members: ${phones.join(', ')}`);
    } else if (type === 'email') {
      alert(`Sending Email to ${emails.length} members: ${emails.join(', ')}`);
    }
    
    setSelectedMembers([]);
  };

  const handleAddMember = (newMember) => {
    const maxId = Math.max(...members.map(m => m.id), 0);
    const memberWithId = {
      ...newMember,
      id: maxId + 1,
      membershipId: `FIT${String(maxId + 1).padStart(3, '0')}-${newMember.name.split(' ').map(n => n[0]).join('').toUpperCase()}`,
      photo: newMember.name.split(' ').map(n => n[0]).join(''),
      joinDate: new Date().toISOString().split('T')[0],
      status: 'active',
      payments: '₹0',
      attendance: '0%',
      totalVisits: 0,
      paymentStatus: 'pending'
    };
    
    setMembers(prev => [memberWithId, ...prev]);
    setShowAddMember(false);
    alert('Member added successfully!');
  };

  const handleEditMember = (updatedMember) => {
    setMembers(prev => prev.map(member => 
      member.id === updatedMember.id ? updatedMember : member
    ));
    setEditingMember(null);
    alert('Member updated successfully!');
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Membership ID', 'Plan', 'Status', 'Branch', 'Join Date', 'Expiry Date'];
    const csvData = filteredAndSortedMembers.map(member => [
      member.name,
      member.email,
      member.phone,
      member.membershipId,
      member.plan,
      member.status,
      member.branch,
      member.joinDate,
      member.expiryDate
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `members_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 md:p-3 p-1">
      {/* Header Section */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 sm:mb-6">
          <div className="mb-4 lg:mb-0">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">All Members</h1>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Manage your gym members efficiently</p>
              </div>
            </div>
            
            {/* Stats - Mobile Compact */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-700">
                  Active: <span className="font-bold">{stats.active}</span>
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-700">
                  Pending: <span className="font-bold">{stats.pending}</span>
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                <span className="text-xs sm:text-sm text-gray-700">
                  <span className="font-bold">₹{stats.totalRevenue.toLocaleString()}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Link to={'/ultimate-control/members/add'}>
              <button 
                className="flex items-center space-x-1 sm:space-x-2 bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                <UserPlus className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium">Add Member</span>
              </button>
            </Link>
            <button 
              onClick={exportToCSV}
              className="flex items-center space-x-1 sm:space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium hidden xs:inline">Export</span>
            </button>
            {!isMobile && (
              <button 
                onClick={handlePrint}
                className="flex items-center space-x-1 sm:space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
              >
                <Printer className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium hidden sm:inline">Print</span>
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
              className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setFilterMenuOpen(!filterMenuOpen)}
              className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm sm:text-base"
            >
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Filter className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                <span className="text-gray-700">
                  Filters
                  {Object.values(activeFilters).flat().length > 0 && (
                    <span className="ml-1 sm:ml-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                      {Object.values(activeFilters).flat().length}
                    </span>
                  )}
                </span>
              </div>
              <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-600 transition-transform ${filterMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {filterMenuOpen && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-3 sm:p-4 max-h-80 sm:max-h-96 overflow-y-auto">
                <div className="space-y-3 sm:space-y-4">
                  {/* Status Filters */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Status</h4>
                    <div className="space-y-1 sm:space-y-2">
                      {statusOptions.map(option => (
                        <label key={option.id} className="flex items-center justify-between cursor-pointer text-xs sm:text-sm">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <input 
                              type="checkbox" 
                              checked={activeFilters.status.includes(option.id)}
                              onChange={() => toggleFilter('status', option.id)}
                              className="rounded text-blue-600 w-3 h-3 sm:w-4 sm:h-4"
                            />
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <div className={`w-2 h-2 rounded-full bg-${option.color}-500`}></div>
                              <span className="text-gray-700">{option.label}</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                            {option.count}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Plan Filters */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Plan</h4>
                    <div className="space-y-1 sm:space-y-2">
                      {planOptions.map(option => (
                        <label key={option.id} className="flex items-center justify-between cursor-pointer text-xs sm:text-sm">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <input 
                              type="checkbox" 
                              checked={activeFilters.plan.includes(option.label)}
                              onChange={() => toggleFilter('plan', option.label)}
                              className="rounded text-blue-600 w-3 h-3 sm:w-4 sm:h-4"
                            />
                            <span className="text-gray-700">{option.label}</span>
                          </div>
                          <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                            {option.count}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-3 sm:mt-4 pt-3 border-t border-gray-200">
                  <button 
                    onClick={clearAllFilters}
                    className="text-xs sm:text-sm text-gray-600 hover:text-gray-800"
                  >
                    Clear All
                  </button>
                  <button 
                    onClick={() => setFilterMenuOpen(false)}
                    className="text-xs sm:text-sm bg-blue-600 text-white px-3 py-1.5 rounded"
                  >
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
              <option value="recent">Most Recent</option>
              <option value="name">Name (A-Z)</option>
              <option value="expiry">Expiry Date</option>
              <option value="plan">Plan</option>
              <option value="payment">Payment</option>
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

        {/* Active Filters */}
        {Object.values(activeFilters).flat().length > 0 && (
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {activeFilters.status.map(status => (
              <span key={status} className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm">
                {statusOptions.find(s => s.id === status)?.label}
                <button onClick={() => toggleFilter('status', status)} className="ml-1">
                  <X className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </button>
              </span>
            ))}
            {activeFilters.plan.map(plan => (
              <span key={plan} className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm">
                {plan}
                <button onClick={() => toggleFilter('plan', plan)} className="ml-1">
                  <X className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </button>
              </span>
            ))}
            <button 
              onClick={clearAllFilters}
              className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 ml-1 sm:ml-2"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Members Grid/List View */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-50 border-b border-gray-200 p-3 sm:p-4">
          <div className="flex flex-col xs:flex-row xs:items-center justify-between space-y-2 xs:space-y-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <input
                type="checkbox"
                checked={selectedMembers.length > 0 && selectedMembers.length === currentMembers.length}
                onChange={selectAllMembers}
                className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
              />
              <span className="text-xs sm:text-sm text-gray-700">
                {selectedMembers.length > 0 
                  ? `${selectedMembers.length} selected` 
                  : `${filteredAndSortedMembers.length} members`
                }
              </span>
            </div>
            
            {selectedMembers.length > 0 && (
              <div className="flex items-center space-x-2 sm:space-x-3">
                <button 
                  onClick={() => setShowBulkActions(!showBulkActions)}
                  className="text-xs sm:text-sm text-blue-600 hover:text-blue-800"
                >
                  Bulk Actions
                </button>
                <button 
                  onClick={handleBulkDelete}
                  className="flex items-center space-x-1 text-red-600 hover:text-red-800 text-xs sm:text-sm"
                >
                  <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bulk Actions Menu */}
        {showBulkActions && selectedMembers.length > 0 && (
          <div className="bg-blue-50 border-b border-blue-100 p-3 sm:p-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button
                onClick={() => handleSendBulkMessage('email')}
                className="flex items-center space-x-1 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-xs sm:text-sm"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Email</span>
              </button>
              <button
                onClick={() => handleSendBulkMessage('sms')}
                className="flex items-center space-x-1 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-xs sm:text-sm"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>SMS</span>
              </button>
            </div>
          </div>
        )}

        {/* Members Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4">
            {currentMembers.map(member => (
              <div key={member.id} className="bg-white border border-gray-200 rounded-lg sm:rounded-xl hover:border-gray-300 transition-all duration-300 hover:shadow-sm sm:hover:shadow-md">
                {/* Card Header */}
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <input
                        type="checkbox"
                        checked={selectedMembers.includes(member.id)}
                        onChange={() => toggleMemberSelection(member.id)}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
                      />
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-white text-sm sm:text-base ${
                        member.category === 'Elite' ? 'bg-gradient-to-br from-purple-600 to-purple-800' :
                        member.category === 'Premium' ? 'bg-gradient-to-br from-blue-600 to-blue-800' :
                        member.category === 'Standard' ? 'bg-gradient-to-br from-green-600 to-green-800' :
                        'bg-gradient-to-br from-gray-600 to-gray-800'
                      }`}>
                        {member.photo}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-gray-900 truncate text-sm sm:text-base">{member.name}</h3>
                        <p className="text-xs text-gray-600 truncate">{member.membershipId}</p>
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
                <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                  {/* Status and Category */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium border ${statusColors[member.status]}`}>
                      {getStatusIcon(member.status)}
                      <span className="ml-1 text-xs">{member.status.charAt(0).toUpperCase() + member.status.slice(1)}</span>
                    </span>
                    <span className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium border ${categoryColors[member.category]}`}>
                      {isMobile ? member.category.charAt(0) : member.category}
                    </span>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                      <span className="truncate">{isMobile ? member.email.split('@')[0] + '...' : member.email}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-gray-400 flex-shrink-0" />
                      <span className="truncate">{isMobile ? member.phone.slice(0, 10) + '...' : member.phone}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Attendance</div>
                      <div className="text-sm sm:text-lg font-bold text-gray-900">{member.attendance}</div>
                    </div>
                    <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Plan</div>
                      <div className="text-sm sm:text-lg font-bold text-gray-900">
                        {isMobile ? member.planType.split(' ')[0] : member.planType}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Payment</div>
                      <div className="text-sm sm:text-lg font-bold text-gray-900">
                        {isMobile ? member.payments.replace('₹', '₹') : member.payments}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="hidden sm:block">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                      <div className="bg-blue-600 h-1.5 sm:h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>

                  {/* Tags - Hide on very small screens */}
                  {!isMobile && member.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {member.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-1.5 sm:px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded">
                          {isTablet ? tag.substring(0, 8) + (tag.length > 8 ? '...' : '') : tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="p-3 sm:p-4 border-t border-gray-100 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <button 
                        onClick={() => window.open(`tel:${member.phone}`, '_blank')}
                        className="p-1.5 sm:p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Call"
                      >
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <button 
                        onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                        className="p-1.5 sm:p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Email"
                      >
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <button 
                        onClick={() => setEditingMember(member)}
                        className="p-1.5 sm:p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteMember(member.id)}
                        className="p-1.5 sm:p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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

        {/* Members List View */}
        {viewMode === 'list' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedMembers.length > 0 && selectedMembers.length === currentMembers.length}
                      onChange={selectAllMembers}
                      className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
                    />
                  </th>
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                  {!isMobile && (
                    <>
                      <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                    </>
                  )}
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  {!isMobile && (
                    <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                  )}
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentMembers.map(member => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 sm:px-6 sm:py-4">
                      <input
                        type="checkbox"
                        checked={selectedMembers.includes(member.id)}
                        onChange={() => toggleMemberSelection(member.id)}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
                      />
                    </td>
                    <td className="px-4 py-3 sm:px-6 sm:py-4">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-bold text-white text-sm ${
                          member.category === 'Elite' ? 'bg-purple-600' :
                          member.category === 'Premium' ? 'bg-blue-600' :
                          member.category === 'Standard' ? 'bg-green-600' :
                          'bg-gray-600'
                        }`}>
                          {member.photo}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900 truncate max-w-[120px] sm:max-w-none">{member.name}</div>
                          <div className="text-xs text-gray-500">{member.membershipId}</div>
                          {isMobile && (
                            <div className="text-xs text-gray-600 truncate max-w-[120px]">{member.email}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    {!isMobile && (
                      <>
                        <td className="px-4 py-3 sm:px-6 sm:py-4">
                          <div className="text-sm text-gray-900">{member.phone}</div>
                          <div className="text-sm text-gray-500 truncate max-w-[150px]">{member.email}</div>
                        </td>
                        <td className="px-4 py-3 sm:px-6 sm:py-4">
                          <div className="text-sm text-gray-900">{member.plan}</div>
                          <div className="text-xs text-gray-500">{member.planType}</div>
                        </td>
                      </>
                    )}
                    <td className="px-4 py-3 sm:px-6 sm:py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[member.status]}`}>
                        {isMobile ? member.status.charAt(0).toUpperCase() : member.status.toUpperCase()}
                      </span>
                    </td>
                    {!isMobile && (
                      <td className="px-4 py-3 sm:px-6 sm:py-4">
                        <div className="text-sm font-medium text-gray-900">{member.payments}</div>
                        <div className={`text-xs px-2 py-0.5 rounded-full inline-block ${paymentStatusColors[member.paymentStatus]}`}>
                          {member.paymentStatus}
                        </div>
                      </td>
                    )}
                    <td className="px-4 py-3 sm:px-6 sm:py-4">
                      <div className="flex items-center space-x-1">
                        <button 
                          onClick={() => window.open(`tel:${member.phone}`, '_blank')}
                          className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                          title="Call"
                        >
                          <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <button 
                          onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                          className="p-1.5 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg"
                          title="Email"
                        >
                          <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <button 
                          onClick={() => setEditingMember(member)}
                          className="p-1.5 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg"
                          title="Edit"
                        >
                          <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        {!isMobile && (
                          <button 
                            onClick={() => handleDeleteMember(member.id)}
                            className="p-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                            title="Delete"
                          >
                            <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* No Results */}
        {currentMembers.length === 0 && (
          <div className="py-8 sm:py-12 text-center">
            <div className="mx-auto w-16 h-16 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
            </div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No members found</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-6">Try adjusting your search or filters</p>
            <button 
              onClick={clearAllFilters}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredAndSortedMembers.length > 0 && (
          <div className="p-4 sm:p-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-0">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredAndSortedMembers.length)} of {filteredAndSortedMembers.length} members
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
                {[...Array(Math.min(3, totalPages))].map((_, index) => {
                  let page;
                  if (totalPages <= 3) {
                    page = index + 1;
                  } else if (currentPage <= 2) {
                    page = index + 1;
                  } else if (currentPage >= totalPages - 1) {
                    page = totalPages - 2 + index;
                  } else {
                    page = currentPage - 1 + index;
                  }
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-2.5 py-1.5 sm:px-3 sm:py-2 border rounded-lg text-xs sm:text-sm ${
                        page === currentPage
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
                {totalPages > 3 && (
                  <span className="px-2 py-1.5 text-gray-500 text-sm">...</span>
                )}
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="mt-4 sm:mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-5 rounded-xl sm:rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg sm:text-2xl font-bold">{stats.active}</div>
              <div className="text-blue-200 text-xs sm:text-sm">Active Members</div>
            </div>
            <UserCheck className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-3 sm:p-5 rounded-xl sm:rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg sm:text-2xl font-bold">₹{stats.totalRevenue.toLocaleString()}</div>
              <div className="text-green-200 text-xs sm:text-sm">Total Revenue</div>
            </div>
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-300" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3 sm:p-5 rounded-xl sm:rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg sm:text-2xl font-bold">{stats.avgAttendance}</div>
              <div className="text-purple-200 text-xs sm:text-sm">Avg. Attendance</div>
            </div>
            <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-purple-300" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-3 sm:p-5 rounded-xl sm:rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg sm:text-2xl font-bold">{stats.expiringThisWeek}</div>
              <div className="text-amber-200 text-xs sm:text-sm">Expiring This Week</div>
            </div>
            <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-amber-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMembers;