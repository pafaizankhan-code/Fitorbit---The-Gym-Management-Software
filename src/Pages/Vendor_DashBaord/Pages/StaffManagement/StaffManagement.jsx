import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Download, 
  Printer,
  Edit,
  Trash2,
  Eye,
  Mail,
  Phone,
  User,
  Users,
  Calendar,
  ChevronDown,
  MoreVertical,
  X,
  CheckCircle,
  Clock,
  Star,
  Target,
  Activity,
  Award,
  Shield,
  Bell,
  Tag,
  IndianRupee,
  MapPin,
  Briefcase,
  GraduationCap,
  FileText,
  Check,
  X as XIcon,
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  Copy,
  Share2,
  RefreshCw,
  ExternalLink,
  Upload,
  Save,
  MessageSquare,
  Smartphone,
  Globe,
  Home,
  PhoneCall,
  UserPlus,
  UserCheck,
  UserX,
  LogOut,
  Lock,
  Unlock,
  BarChart3,
  TrendingUp,
  Clock as ClockIcon,
  Heart,
  Zap,
  Coffee,
  Dumbbell,
  Target as TargetIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StaffManagement = () => {
  // State Management
  const [selectedStaff, setSelectedStaff] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [activeFilters, setActiveFilters] = useState({
    department: [],
    position: [],
    status: [],
    branch: []
  });
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [showBulkActions, setShowBulkActions] = useState(false);
  
  // Staff Data
  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      email: "aarav.sharma@fitpro.com",
      phone: "+91 98765 43210",
      employeeId: "FIT001-AS",
      joinDate: "2023-03-15",
      position: "Head Trainer",
      department: "Training",
      status: "active",
      branch: "Mumbai Central",
      salary: "₹75,000",
      rating: 4.9,
      experience: "8 years",
      specializations: ["Strength Training", "Sports Nutrition", "Rehabilitation"],
      totalClients: 45,
      attendance: "98%",
      nextReview: "2024-04-15",
      address: "Mumbai, Maharashtra",
      dateOfBirth: "1990-05-20",
      emergencyContact: "+91 87654 32109",
      qualifications: ["M.Sc. Sports Science", "NASM Certified", "CrossFit L1"],
      skills: ["Personal Training", "Group Classes", "Injury Prevention", "Nutrition Planning"],
      isOnProbation: false,
      lastPromotion: "2023-12-01"
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya.patel@fitpro.com",
      phone: "+91 87654 32109",
      employeeId: "FIT002-PP",
      joinDate: "2023-06-20",
      position: "Yoga Instructor",
      department: "Wellness",
      status: "active",
      branch: "Andheri West",
      salary: "₹45,000",
      rating: 4.8,
      experience: "5 years",
      specializations: ["Hatha Yoga", "Vinyasa", "Meditation"],
      totalClients: 32,
      attendance: "96%",
      nextReview: "2024-07-20",
      address: "Andheri, Mumbai",
      dateOfBirth: "1992-08-15",
      emergencyContact: "+91 76543 21098",
      qualifications: ["RYT 500", "Yoga Therapy Certification", "Reiki Master"],
      skills: ["Yoga Instruction", "Breathing Techniques", "Stress Management", "Flexibility Training"],
      isOnProbation: false,
      lastPromotion: "2024-01-01"
    },
    {
      id: 3,
      name: "Rohan Singh",
      email: "rohan.singh@fitpro.com",
      phone: "+91 76543 21098",
      employeeId: "FIT003-RS",
      joinDate: "2024-01-10",
      position: "Fitness Trainer",
      department: "Training",
      status: "active",
      branch: "Bandra",
      salary: "₹35,000",
      rating: 4.5,
      experience: "3 years",
      specializations: ["Weight Loss", "HIIT", "Functional Training"],
      totalClients: 28,
      attendance: "94%",
      nextReview: "2024-04-10",
      address: "Bandra, Mumbai",
      dateOfBirth: "1995-03-10",
      emergencyContact: "+91 65432 10987",
      qualifications: ["B.Sc. Physical Education", "ACE Certified", "CPR Certified"],
      skills: ["Weight Training", "Cardio", "Body Composition", "Motivational Coaching"],
      isOnProbation: true,
      lastPromotion: "N/A"
    },
    {
      id: 4,
      name: "Neha Verma",
      email: "neha.verma@fitpro.com",
      phone: "+91 65432 10987",
      employeeId: "FIT004-NV",
      joinDate: "2022-12-05",
      position: "Nutritionist",
      department: "Nutrition",
      status: "active",
      branch: "Mumbai Central",
      salary: "₹55,000",
      rating: 4.7,
      experience: "6 years",
      specializations: ["Weight Management", "Sports Nutrition", "Diabetic Diets"],
      totalClients: 67,
      attendance: "99%",
      nextReview: "2024-03-05",
      address: "South Mumbai",
      dateOfBirth: "1989-11-25",
      emergencyContact: "+91 54321 09876",
      qualifications: ["M.Sc. Nutrition", "RD Certified", "Diabetes Educator"],
      skills: ["Diet Planning", "Meal Prep", "Supplement Guidance", "Health Coaching"],
      isOnProbation: false,
      lastPromotion: "2023-06-01"
    },
    {
      id: 5,
      name: "Vikram Mehta",
      email: "vikram.mehta@fitpro.com",
      phone: "+91 54321 09876",
      employeeId: "FIT005-VM",
      joinDate: "2024-02-01",
      position: "Front Desk Manager",
      department: "Administration",
      status: "active",
      branch: "Andheri West",
      salary: "₹40,000",
      rating: 4.6,
      experience: "4 years",
      specializations: ["Customer Service", "Membership Sales", "Operations"],
      totalClients: 0,
      attendance: "92%",
      nextReview: "2024-05-01",
      address: "Andheri East",
      dateOfBirth: "1993-07-30",
      emergencyContact: "+91 43210 98765",
      qualifications: ["MBA Operations", "Hospitality Management", "CRM Expert"],
      skills: ["Customer Relations", "Sales", "Team Management", "Software Systems"],
      isOnProbation: true,
      lastPromotion: "N/A"
    },
    {
      id: 6,
      name: "Anjali Reddy",
      email: "anjali.reddy@fitpro.com",
      phone: "+91 43210 98765",
      employeeId: "FIT006-AR",
      joinDate: "2023-09-15",
      position: "Physiotherapist",
      department: "Rehabilitation",
      status: "active",
      branch: "Bandra",
      salary: "₹65,000",
      rating: 4.9,
      experience: "7 years",
      specializations: ["Sports Injury", "Post-operative", "Chronic Pain"],
      totalClients: 52,
      attendance: "97%",
      nextReview: "2024-06-15",
      address: "Bandra West",
      dateOfBirth: "1991-04-12",
      emergencyContact: "+91 32109 87654",
      qualifications: ["MPT", "Dry Needling Certified", "Manual Therapy"],
      skills: ["Assessment", "Rehab Programs", "Pain Management", "Mobility Training"],
      isOnProbation: false,
      lastPromotion: "2024-01-01"
    },
    {
      id: 7,
      name: "Karan Malhotra",
      email: "karan.malhotra@fitpro.com",
      phone: "+91 32109 87654",
      employeeId: "FIT007-KM",
      joinDate: "2024-03-25",
      position: "Cleaning Staff",
      department: "Housekeeping",
      status: "active",
      branch: "Mumbai Central",
      salary: "₹22,000",
      rating: 4.3,
      experience: "2 years",
      specializations: ["Sanitation", "Equipment Maintenance"],
      totalClients: 0,
      attendance: "90%",
      nextReview: "2024-06-25",
      address: "Central Mumbai",
      dateOfBirth: "1996-12-05",
      emergencyContact: "+91 21098 76543",
      qualifications: ["High School", "Sanitation Certification"],
      skills: ["Cleaning", "Maintenance", "Inventory", "Safety Protocols"],
      isOnProbation: true,
      lastPromotion: "N/A"
    },
    {
      id: 8,
      name: "Meera Kapoor",
      email: "meera.kapoor@fitpro.com",
      phone: "+91 21098 76543",
      employeeId: "FIT008-MK",
      joinDate: "2023-11-20",
      position: "Marketing Manager",
      department: "Marketing",
      status: "on-leave",
      branch: "Andheri West",
      salary: "₹60,000",
      rating: 4.8,
      experience: "5 years",
      specializations: ["Digital Marketing", "Brand Management", "Social Media"],
      totalClients: 0,
      attendance: "95%",
      nextReview: "2024-02-20",
      address: "Andheri West",
      dateOfBirth: "1994-09-18",
      emergencyContact: "+91 10987 65432",
      qualifications: ["MBA Marketing", "Google Analytics", "Content Marketing"],
      skills: ["Campaign Management", "SEO", "Social Media", "Event Planning"],
      isOnProbation: false,
      lastPromotion: "2023-12-01"
    }
  ]);

  // Filter options
  const departmentOptions = [
    { id: 'training', label: 'Training', count: 2 },
    { id: 'wellness', label: 'Wellness', count: 1 },
    { id: 'nutrition', label: 'Nutrition', count: 1 },
    { id: 'administration', label: 'Administration', count: 1 },
    { id: 'rehabilitation', label: 'Rehabilitation', count: 1 },
    { id: 'housekeeping', label: 'Housekeeping', count: 1 },
    { id: 'marketing', label: 'Marketing', count: 1 }
  ];

  const positionOptions = [
    { id: 'head-trainer', label: 'Head Trainer', count: 1 },
    { id: 'yoga-instructor', label: 'Yoga Instructor', count: 1 },
    { id: 'fitness-trainer', label: 'Fitness Trainer', count: 1 },
    { id: 'nutritionist', label: 'Nutritionist', count: 1 },
    { id: 'front-desk-manager', label: 'Front Desk Manager', count: 1 },
    { id: 'physiotherapist', label: 'Physiotherapist', count: 1 },
    { id: 'cleaning-staff', label: 'Cleaning Staff', count: 1 },
    { id: 'marketing-manager', label: 'Marketing Manager', count: 1 }
  ];

  const statusOptions = [
    { id: 'active', label: 'Active', count: 7 },
    { id: 'on-leave', label: 'On Leave', count: 1 },
    { id: 'inactive', label: 'Inactive', count: 0 },
    { id: 'terminated', label: 'Terminated', count: 0 }
  ];

  const branchOptions = [
    { id: 'mumbai-central', label: 'Mumbai Central', count: 3 },
    { id: 'andheri-west', label: 'Andheri West', count: 3 },
    { id: 'bandra', label: 'Bandra', count: 2 }
  ];

  // Stats calculation
  const stats = useMemo(() => {
    const total = staff.length;
    const active = staff.filter(s => s.status === 'active').length;
    const onLeave = staff.filter(s => s.status === 'on-leave').length;
    const onProbation = staff.filter(s => s.isOnProbation).length;
    
    const totalSalary = staff.reduce((sum, employee) => {
      const salary = parseInt(employee.salary.replace('₹', '').replace(',', ''));
      return sum + (isNaN(salary) ? 0 : salary);
    }, 0);

    const avgRating = staff.reduce((sum, employee) => sum + employee.rating, 0) / total;
    const avgAttendance = staff.reduce((sum, employee) => {
      const attendance = parseInt(employee.attendance);
      return sum + (isNaN(attendance) ? 0 : attendance);
    }, 0) / total;

    const totalClients = staff.reduce((sum, employee) => sum + employee.totalClients, 0);

    return {
      total,
      active,
      onLeave,
      onProbation,
      totalSalary,
      avgRating: avgRating.toFixed(1),
      avgAttendance: avgAttendance.toFixed(1) + '%',
      totalClients
    };
  }, [staff]);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      
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

  // Filter and sort staff
  const filteredAndSortedStaff = useMemo(() => {
    let filtered = [...staff];

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(employee => 
        employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.phone.includes(searchQuery) ||
        employee.employeeId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.position.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply department filters
    if (activeFilters.department.length > 0) {
      filtered = filtered.filter(employee => 
        activeFilters.department.includes(employee.department.toLowerCase())
      );
    }

    // Apply position filters
    if (activeFilters.position.length > 0) {
      filtered = filtered.filter(employee => 
        activeFilters.position.includes(employee.position.toLowerCase().replace(' ', '-'))
      );
    }

    // Apply status filters
    if (activeFilters.status.length > 0) {
      filtered = filtered.filter(employee => 
        activeFilters.status.includes(employee.status)
      );
    }

    // Apply branch filters
    if (activeFilters.branch.length > 0) {
      filtered = filtered.filter(employee => 
        activeFilters.branch.includes(employee.branch.toLowerCase().replace(' ', '-'))
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'salary':
          const aSalary = parseInt(a.salary.replace('₹', '').replace(',', ''));
          const bSalary = parseInt(b.salary.replace('₹', '').replace(',', ''));
          return bSalary - aSalary;
        case 'rating':
          return b.rating - a.rating;
        case 'experience':
          const aExp = parseInt(a.experience);
          const bExp = parseInt(b.experience);
          return bExp - aExp;
        case 'recent':
        default:
          return new Date(b.joinDate) - new Date(a.joinDate);
      }
    });

    return filtered;
  }, [staff, searchQuery, activeFilters, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedStaff.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStaff = filteredAndSortedStaff.slice(startIndex, endIndex);

  // Colors and styles
  const statusColors = {
    active: 'bg-green-100 text-green-800 border border-green-200',
    'on-leave': 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    inactive: 'bg-gray-100 text-gray-800 border border-gray-200',
    terminated: 'bg-red-100 text-red-800 border border-red-200'
  };

  const departmentColors = {
    'Training': 'bg-blue-100 text-blue-800 border border-blue-200',
    'Wellness': 'bg-purple-100 text-purple-800 border border-purple-200',
    'Nutrition': 'bg-green-100 text-green-800 border border-green-200',
    'Administration': 'bg-indigo-100 text-indigo-800 border border-indigo-200',
    'Rehabilitation': 'bg-teal-100 text-teal-800 border border-teal-200',
    'Housekeeping': 'bg-gray-100 text-gray-800 border border-gray-200',
    'Marketing': 'bg-pink-100 text-pink-800 border border-pink-200'
  };

  const positionColors = {
    'Head Trainer': 'bg-red-100 text-red-800 border border-red-200',
    'Yoga Instructor': 'bg-purple-100 text-purple-800 border border-purple-200',
    'Fitness Trainer': 'bg-blue-100 text-blue-800 border border-blue-200',
    'Nutritionist': 'bg-green-100 text-green-800 border border-green-200',
    'Front Desk Manager': 'bg-indigo-100 text-indigo-800 border border-indigo-200',
    'Physiotherapist': 'bg-teal-100 text-teal-800 border border-teal-200',
    'Cleaning Staff': 'bg-gray-100 text-gray-800 border border-gray-200',
    'Marketing Manager': 'bg-pink-100 text-pink-800 border border-pink-200'
  };

  // Helper functions
  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    setShowEmployeeDetails(true);
  };

  const closeEmployeeDetails = () => {
    setShowEmployeeDetails(false);
    setSelectedEmployee(null);
  };

  const toggleEmployeeSelection = (id) => {
    setSelectedStaff(prev => 
      prev.includes(id) 
        ? prev.filter(empId => empId !== id)
        : [...prev, id]
    );
  };

  const selectAllEmployees = () => {
    if (selectedStaff.length === currentStaff.length) {
      setSelectedStaff([]);
    } else {
      setSelectedStaff(currentStaff.map(emp => emp.id));
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
      department: [],
      position: [],
      status: [],
      branch: []
    });
    setSearchQuery('');
  };

  const handleDeleteEmployee = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setStaff(prev => prev.filter(emp => emp.id !== id));
      setSelectedStaff(prev => prev.filter(empId => empId !== id));
      if (selectedEmployee?.id === id) {
        closeEmployeeDetails();
      }
    }
  };

  const handleBulkDelete = () => {
    if (selectedStaff.length === 0) return;
    
    if (window.confirm(`Are you sure you want to delete ${selectedStaff.length} employees?`)) {
      setStaff(prev => prev.filter(emp => !selectedStaff.includes(emp.id)));
      setSelectedStaff([]);
      if (selectedEmployee && selectedStaff.includes(selectedEmployee.id)) {
        closeEmployeeDetails();
      }
    }
  };

  const handleUpdateStatus = (id, newStatus) => {
    setStaff(prev => prev.map(emp => 
      emp.id === id ? { ...emp, status: newStatus } : emp
    ));
    if (selectedEmployee?.id === id) {
      setSelectedEmployee(prev => ({ ...prev, status: newStatus }));
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Employee ID', 'Position', 'Department', 'Branch', 'Status', 'Salary', 'Join Date'];
    const csvData = filteredAndSortedStaff.map(emp => [
      emp.name,
      emp.employeeId,
      emp.position,
      emp.department,
      emp.branch,
      emp.status,
      emp.salary,
      emp.joinDate
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `staff_management_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getPositionIcon = (position) => {
    switch(position) {
      case 'Head Trainer':
      case 'Fitness Trainer': return <Dumbbell className="w-4 h-4" />;
      case 'Yoga Instructor': return <Heart className="w-4 h-4" />;
      case 'Nutritionist': return <Coffee className="w-4 h-4" />;
      case 'Physiotherapist': return <Activity className="w-4 h-4" />;
      case 'Front Desk Manager': return <Users className="w-4 h-4" />;
      case 'Marketing Manager': return <TargetIcon className="w-4 h-4" />;
      case 'Cleaning Staff': return <Shield className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-1 md:p-3">
      {/* Header Section */}
      <div className="bg-white rounded-xl md:rounded-2xl border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 md:mb-6">
          <div className="mb-4 lg:mb-0">
            <div className="flex items-center space-x-3 mb-2">
             
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">Staff Management</h1>
                <p className="text-sm text-gray-600 mt-1">Manage your gym staff and team members</p>
              </div>
            </div>
            
            {/* Stats - Mobile Compact */}
            <div className="flex flex-wrap gap-3 mt-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">
                  Active: <span className="font-bold">{stats.active}</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-700">
                  Total: <span className="font-bold">{stats.total}</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <IndianRupee className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-700">
                  Salary: <span className="font-bold">₹{stats.totalSalary.toLocaleString()}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3">
           <Link to={'/ultimate-control/staff/add'}>
            <button 
              onClick={() => setShowAddEmployee(true)}
              className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2.5 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <UserPlus className="w-4 h-4" />
              <span className="font-medium">Add Staff</span>
            </button>
           </Link>
            <button 
              onClick={exportToCSV}
              className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="font-medium hidden md:inline">Export</span>
            </button>
            {!isMobile && (
              <button 
                onClick={() => window.print()}
                className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span className="font-medium">Print</span>
              </button>
            )}
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search staff by name, email, or position..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2.5 md:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setFilterMenuOpen(!filterMenuOpen)}
              className="w-full flex items-center justify-between px-3 md:px-4 py-2.5 md:py-3 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm md:text-base"
            >
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">
                  Filters
                  {Object.values(activeFilters).flat().length > 0 && (
                    <span className="ml-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                      {Object.values(activeFilters).flat().length}
                    </span>
                  )}
                </span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filterMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {filterMenuOpen && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg z-50 p-3 md:p-4 max-h-80 md:max-h-96 overflow-y-auto">
                <div className="space-y-3 md:space-y-4">
                  {/* Department Filters */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2 text-sm md:text-base">Department</h4>
                    <div className="space-y-1 md:space-y-2">
                      {departmentOptions.map(option => (
                        <label key={option.id} className="flex items-center justify-between cursor-pointer text-sm">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              checked={activeFilters.department.includes(option.id)}
                              onChange={() => toggleFilter('department', option.id)}
                              className="w-4 h-4 text-blue-500 rounded border-gray-300"
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

                  {/* Status Filters */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2 text-sm md:text-base">Status</h4>
                    <div className="space-y-1 md:space-y-2">
                      {statusOptions.map(option => (
                        <label key={option.id} className="flex items-center justify-between cursor-pointer text-sm">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              checked={activeFilters.status.includes(option.id)}
                              onChange={() => toggleFilter('status', option.id)}
                              className="w-4 h-4 text-blue-500 rounded border-gray-300"
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
                <div className="flex justify-between mt-4 pt-3 border-t border-gray-200">
                  <button 
                    onClick={clearAllFilters}
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Clear All
                  </button>
                  <button 
                    onClick={() => setFilterMenuOpen(false)}
                    className="text-sm bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2 md:space-x-3">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 px-3 md:px-4 py-2.5 md:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            >
              <option value="recent">Most Recent</option>
              <option value="name">Name (A-Z)</option>
              <option value="salary">Salary (High-Low)</option>
              <option value="rating">Highest Rating</option>
              <option value="experience">Experience</option>
            </select>
            
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 md:p-3 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
              >
                <Grid className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 md:p-3 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
              >
                <List className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {Object.values(activeFilters).flat().length > 0 && (
          <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
            {activeFilters.department.map(dept => (
              <span key={dept} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {departmentOptions.find(d => d.id === dept)?.label}
                <button onClick={() => toggleFilter('department', dept)} className="ml-1">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {activeFilters.status.map(status => (
              <span key={status} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {statusOptions.find(s => s.id === status)?.label}
                <button onClick={() => toggleFilter('status', status)} className="ml-1">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            <button 
              onClick={clearAllFilters}
              className="text-sm text-blue-500 hover:text-blue-700 ml-2"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Staff Grid/List View */}
      <div className="bg-white rounded-xl md:rounded-2xl border border-gray-200 overflow-hidden mb-6">
        {/* Table Header */}
        <div className="bg-gray-50 border-b border-gray-200 p-3 md:p-4">
          <div className="flex flex-col xs:flex-row xs:items-center justify-between space-y-2 xs:space-y-0">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedStaff.length > 0 && selectedStaff.length === currentStaff.length}
                onChange={selectAllEmployees}
                className="w-4 h-4 text-blue-500 rounded border-gray-300"
              />
              <span className="text-sm text-gray-700">
                {selectedStaff.length > 0 
                  ? `${selectedStaff.length} selected` 
                  : `${filteredAndSortedStaff.length} staff members`
                }
              </span>
            </div>
            
            {selectedStaff.length > 0 && (
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setShowBulkActions(!showBulkActions)}
                  className="text-sm text-blue-500 hover:text-blue-700"
                >
                  Bulk Actions
                </button>
                <button 
                  onClick={handleBulkDelete}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-800 text-sm"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden xs:inline">Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bulk Actions Menu */}
        {showBulkActions && selectedStaff.length > 0 && (
          <div className="bg-blue-50 border-b border-blue-100 p-3 md:p-4">
            <div className="flex flex-wrap gap-2 md:gap-3">
              <button
                onClick={() => alert('Bulk message feature coming soon!')}
                className="flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Message</span>
              </button>
              <button
                onClick={() => alert('Bulk export feature coming soon!')}
                className="flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Export Selected</span>
              </button>
              <button
                onClick={() => alert('Bulk status update feature coming soon!')}
                className="flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
              >
                <UserCheck className="w-4 h-4" />
                <span>Set Active</span>
              </button>
            </div>
          </div>
        )}

        {/* Staff Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 p-3 md:p-4">
            {currentStaff.map(employee => (
              <div 
                key={employee.id} 
                className="bg-white border border-gray-200 rounded-lg md:rounded-xl hover:border-gray-300 transition-colors"
              >
                {/* Card Header */}
                <div className="p-3 md:p-4 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={selectedStaff.includes(employee.id)}
                        onChange={() => toggleEmployeeSelection(employee.id)}
                        className="w-4 h-4 text-blue-500 rounded border-gray-300"
                      />
                    
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-gray-900 truncate text-sm md:text-base">{employee.name}</h3>
                          {employee.isOnProbation && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded">
                              PROB
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 truncate">{employee.position}</p>
                        <p className="text-xs text-gray-500">{employee.employeeId}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <button 
                        onClick={() => handleEmployeeClick(employee)}
                        className="p-1 md:p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <MoreVertical className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-3 md:p-4 space-y-3 md:space-y-4">
                  {/* Department and Status */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-medium border ${departmentColors[employee.department]}`}>
                      {isMobile ? employee.department.split(' ')[0] : employee.department}
                    </span>
                    <span className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-medium border ${statusColors[employee.status]}`}>
                      {employee.status === 'on-leave' ? 'Leave' : employee.status}
                    </span>
                  </div>

                  {/* Employee Details */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Salary</div>
                      <div className="text-sm md:text-base font-bold text-gray-900">{employee.salary}</div>
                    </div>
                    <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Rating</div>
                      <div className="text-sm md:text-base font-bold text-gray-900">{employee.rating}/5</div>
                    </div>
                    <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Experience</div>
                      <div className="text-sm md:text-base font-bold text-gray-900">{employee.experience}</div>
                    </div>
                    <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Clients</div>
                      <div className="text-sm md:text-base font-bold text-gray-900">{employee.totalClients}</div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-1.5">
                    <div className="flex items-center text-xs md:text-sm text-gray-600">
                      <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-gray-400 flex-shrink-0" />
                      <span className="truncate">{isMobile ? employee.email.split('@')[0] + '...' : employee.email}</span>
                    </div>
                    <div className="flex items-center text-xs md:text-sm text-gray-600">
                      <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-gray-400 flex-shrink-0" />
                      <span className="truncate">{isMobile ? employee.phone.slice(0, 10) + '...' : employee.phone}</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Attendance</span>
                      <span>{employee.attendance}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                      <div 
                        className="bg-green-500 h-1.5 md:h-2 rounded-full"
                        style={{ width: employee.attendance }}
                      ></div>
                    </div>
                  </div>

                  {/* Specializations */}
                  {employee.specializations && employee.specializations.length > 0 && (
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {employee.specializations.slice(0, 2).map((spec, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded">
                          {isMobile && spec.length > 8 ? spec.substring(0, 8) + '...' : spec}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="p-3 md:p-4 border-t border-gray-100 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => window.open(`tel:${employee.phone}`, '_blank')}
                        className="p-1.5 md:p-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Call"
                      >
                        <Phone className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => window.open(`mailto:${employee.email}`, '_blank')}
                        className="p-1.5 md:p-2 text-gray-600 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors"
                        title="Email"
                      >
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => {
                          setEditingEmployee(employee);
                          setShowAddEmployee(true);
                        }}
                        className="p-1.5 md:p-2 text-gray-600 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteEmployee(employee.id)}
                        className="p-1.5 md:p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Staff List View */}
        {viewMode === 'list' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 md:px-6 md:py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedStaff.length > 0 && selectedStaff.length === currentStaff.length}
                      onChange={selectAllEmployees}
                      className="w-4 h-4 text-blue-500 rounded border-gray-300"
                    />
                  </th>
                  <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                  {!isMobile && (
                    <>
                      <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department & Position</th>
                      <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    </>
                  )}
                  <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  {!isMobile && (
                    <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary & Rating</th>
                  )}
                  <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentStaff.map(employee => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 md:px-6 md:py-4">
                      <input
                        type="checkbox"
                        checked={selectedStaff.includes(employee.id)}
                        onChange={() => toggleEmployeeSelection(employee.id)}
                        className="w-4 h-4 text-blue-500 rounded border-gray-300"
                      />
                    </td>
                    <td className="px-4 py-3 md:px-6 md:py-4">
                      <div className="flex items-center">
                       
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900 truncate max-w-[120px] md:max-w-none">{employee.name}</div>
                          <div className="text-xs text-gray-500">{employee.employeeId}</div>
                          {isMobile && (
                            <div className="text-xs text-gray-600 truncate max-w-[120px]">{employee.position}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    {!isMobile && (
                      <>
                        <td className="px-4 py-3 md:px-6 md:py-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${departmentColors[employee.department]}`}>
                            {employee.department}
                          </span>
                          <div className="text-sm text-gray-900 mt-1">{employee.position}</div>
                        </td>
                        <td className="px-4 py-3 md:px-6 md:py-4">
                          <div className="text-sm text-gray-900">{employee.phone}</div>
                          <div className="text-sm text-gray-500 truncate max-w-[150px]">{employee.email}</div>
                        </td>
                      </>
                    )}
                    <td className="px-4 py-3 md:px-6 md:py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[employee.status]}`}>
                        {isMobile ? employee.status.charAt(0).toUpperCase() : employee.status.toUpperCase()}
                      </span>
                    </td>
                    {!isMobile && (
                      <td className="px-4 py-3 md:px-6 md:py-4">
                        <div className="text-sm font-medium text-gray-900">{employee.salary}</div>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="ml-1 text-xs text-gray-900">{employee.rating}</span>
                        </div>
                      </td>
                    )}
                    <td className="px-4 py-3 md:px-6 md:py-4">
                      <div className="flex items-center space-x-1">
                        <button 
                          onClick={() => handleEmployeeClick(employee)}
                          className="p-1.5 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => {
                            setEditingEmployee(employee);
                            setShowAddEmployee(true);
                          }}
                          className="p-1.5 text-gray-600 hover:text-green-500 hover:bg-green-50 rounded-lg"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        {!isMobile && (
                          <button 
                            onClick={() => handleDeleteEmployee(employee.id)}
                            className="p-1.5 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
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
        {currentStaff.length === 0 && (
          <div className="py-8 md:py-12 text-center">
            <div className="mx-auto w-16 h-16 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 md:w-12 md:h-12 text-gray-400" />
            </div>
            <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2">No staff members found</h3>
            <p className="text-gray-500 text-sm md:text-base mb-6">Try adjusting your search or filters</p>
            <button 
              onClick={clearAllFilters}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm md:text-base"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredAndSortedStaff.length > 0 && (
          <div className="p-4 md:p-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="text-xs md:text-sm text-gray-600 mb-3 sm:mb-0">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredAndSortedStaff.length)} of {filteredAndSortedStaff.length} staff members
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-2 py-1.5 md:px-3 md:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
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
                      className={`px-2.5 py-1.5 md:px-3 md:py-2 border rounded-lg text-xs md:text-sm ${
                        page === currentPage
                          ? 'bg-blue-500 text-white border-blue-500'
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
                  className="px-2 py-1.5 md:px-3 md:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-blue-500 text-white p-3 md:p-5 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg md:text-2xl font-bold">{stats.total}</div>
              <div className="text-blue-100 text-xs md:text-sm">Total Staff</div>
            </div>
            <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-300" />
          </div>
        </div>
        
        <div className="bg-green-500 text-white p-3 md:p-5 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg md:text-2xl font-bold">₹{stats.totalSalary.toLocaleString()}</div>
              <div className="text-green-100 text-xs md:text-sm">Total Salary</div>
            </div>
            <IndianRupee className="w-6 h-6 md:w-8 md:h-8 text-green-300" />
          </div>
        </div>
        
        <div className="bg-amber-500 text-white p-3 md:p-5 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg md:text-2xl font-bold">{stats.avgRating}/5</div>
              <div className="text-amber-100 text-xs md:text-sm">Avg. Rating</div>
            </div>
            <Star className="w-6 h-6 md:w-8 md:h-8 text-amber-300" />
          </div>
        </div>
        
        <div className="bg-purple-500 text-white p-3 md:p-5 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg md:text-2xl font-bold">{stats.totalClients}</div>
              <div className="text-purple-100 text-xs md:text-sm">Total Clients</div>
            </div>
            <User className="w-6 h-6 md:w-8 md:h-8 text-purple-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;