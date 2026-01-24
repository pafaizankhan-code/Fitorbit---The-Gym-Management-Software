import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Calendar,
  Clock,
  Users,
  MapPin,
  User,
  Plus,
  Edit,
  Trash2,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  AlertCircle,
  Target,
  TrendingUp,
  Eye,
  Copy,
  Share2,
  Download,
  Printer,
  MoreVertical,
  Star,
  Heart,
  Bell,
  BellOff,
  ExternalLink,
  CalendarDays,
  UserPlus,
  BookOpen,
  Dumbbell,
  Music,
  Coffee,
  Sun,
  Moon,
  Watch,
  Award,
  BarChart3,
  Zap,
  Lock,
  Unlock,
  RefreshCw,
  RotateCcw,
  Activity,
  FileText,
  MessageSquare,
  Mail,
  Phone,
  Building
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ClassSchedule = () => {
  // State Management
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState('time');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [activeFilters, setActiveFilters] = useState({
    type: [],
    instructor: [],
    status: [],
    branch: []
  });
  const [selectedClass, setSelectedClass] = useState(null);
  const [showClassDetails, setShowClassDetails] = useState(false);
  const [viewMode, setViewMode] = useState('list');

  // Class Data - Fixed: Using lowercase types that match filter IDs
  const [classes, setClasses] = useState([
    {
      id: 1,
      className: "Morning Yoga Flow",
      type: "yoga",
      instructor: "Priya Sharma",
      date: "2024-02-15",
      startTime: "07:00",
      endTime: "08:00",
      duration: "60 min",
      capacity: 20,
      enrolled: 18,
      waitingList: 2,
      branch: "Mumbai Central",
      room: "Yoga Studio 1",
      status: "active",
      difficulty: "Beginner",
      color: "bg-blue-100 text-blue-800",
      description: "Gentle morning yoga session to start your day with energy and focus",
      equipment: "Yoga mat, blocks",
      recurring: "Weekly",
      price: "₹500",
      rating: 4.8,
      tags: ["Morning", "Beginner", "Flexibility"],
      participants: [
        { id: 1, name: "Rahul Sharma", avatar: "RS" },
        { id: 2, name: "Anjali Patel", avatar: "AP" }
      ],
      notes: "Perfect for beginners. Focus on breathing and basic poses."
    },
    {
      id: 2,
      className: "HIIT Burn",
      type: "hiit",
      instructor: "Rohan Singh",
      date: "2024-02-15",
      startTime: "08:30",
      endTime: "09:15",
      duration: "45 min",
      capacity: 15,
      enrolled: 15,
      waitingList: 5,
      branch: "Andheri West",
      room: "HIIT Zone",
      status: "full",
      difficulty: "Advanced",
      color: "bg-red-100 text-red-800",
      description: "High intensity interval training for maximum calorie burn",
      equipment: "Dumbbells, kettlebells, mats",
      recurring: "Daily",
      price: "₹600",
      rating: 4.9,
      tags: ["High Intensity", "Cardio", "Weight Loss"],
      participants: [
        { id: 3, name: "Vikram Mehta", avatar: "VM" },
        { id: 4, name: "Sneha Reddy", avatar: "SR" }
      ],
      notes: "Not suitable for beginners. Bring water and towel."
    },
    {
      id: 3,
      className: "Powerlifting 101",
      type: "strength",
      instructor: "Amit Verma",
      date: "2024-02-15",
      startTime: "10:00",
      endTime: "11:30",
      duration: "90 min",
      capacity: 10,
      enrolled: 8,
      waitingList: 0,
      branch: "Bandra",
      room: "Strength Lab",
      status: "active",
      difficulty: "Intermediate",
      color: "bg-purple-100 text-purple-800",
      description: "Learn proper powerlifting techniques and form",
      equipment: "Barbells, racks, plates",
      recurring: "Weekly",
      price: "₹800",
      rating: 4.7,
      tags: ["Strength", "Technique", "Coaching"],
      participants: [
        { id: 5, name: "Karan Malhotra", avatar: "KM" },
        { id: 6, name: "Neha Kapoor", avatar: "NK" }
      ],
      notes: "Focus on squat, bench press, and deadlift form."
    },
    {
      id: 4,
      className: "Zumba Party",
      type: "dance",
      instructor: "Meera Nair",
      date: "2024-02-15",
      startTime: "17:00",
      endTime: "18:00",
      duration: "60 min",
      capacity: 25,
      enrolled: 22,
      waitingList: 3,
      branch: "Mumbai Central",
      room: "Main Hall",
      status: "active",
      difficulty: "All Levels",
      color: "bg-pink-100 text-pink-800",
      description: "Fun dance workout with Latin rhythms",
      equipment: "None required",
      recurring: "Daily",
      price: "₹400",
      rating: 4.9,
      tags: ["Dance", "Fun", "Cardio"],
      participants: [
        { id: 7, name: "Priya Patel", avatar: "PP" },
        { id: 8, name: "Rohit Kumar", avatar: "RK" }
      ],
      notes: "Wear comfortable clothes and shoes. All ages welcome."
    },
    {
      id: 5,
      className: "Pilates Core",
      type: "pilates",
      instructor: "Ananya Das",
      date: "2024-02-15",
      startTime: "18:30",
      endTime: "19:30",
      duration: "60 min",
      capacity: 12,
      enrolled: 10,
      waitingList: 1,
      branch: "Andheri West",
      room: "Pilates Studio",
      status: "active",
      difficulty: "Intermediate",
      color: "bg-green-100 text-green-800",
      description: "Core strengthening and posture improvement",
      equipment: "Reformers, mats, balls",
      recurring: "Weekly",
      price: "₹700",
      rating: 4.6,
      tags: ["Core", "Posture", "Low Impact"],
      participants: [
        { id: 9, name: "Sonia Mehta", avatar: "SM" },
        { id: 10, name: "Arjun Singh", avatar: "AS" }
      ],
      notes: "Focus on controlled movements and breathing."
    },
    {
      id: 6,
      className: "Spin & Burn",
      type: "cycling",
      instructor: "Rajesh Kumar",
      date: "2024-02-16",
      startTime: "06:00",
      endTime: "06:45",
      duration: "45 min",
      capacity: 20,
      enrolled: 20,
      waitingList: 8,
      branch: "Bandra",
      room: "Spin Studio",
      status: "full",
      difficulty: "Advanced",
      color: "bg-orange-100 text-orange-800",
      description: "High energy indoor cycling with motivating music",
      equipment: "Spin bikes, towels",
      recurring: "Daily",
      price: "₹550",
      rating: 4.8,
      tags: ["Cycling", "High Energy", "Morning"],
      participants: [
        { id: 11, name: "Deepak Jain", avatar: "DJ" },
        { id: 12, name: "Maya Reddy", avatar: "MR" }
      ],
      notes: "Bring water bottle. Cycling shoes recommended."
    },
    {
      id: 7,
      className: "Meditation & Mindfulness",
      type: "meditation",
      instructor: "Gaurav Sharma",
      date: "2024-02-16",
      startTime: "19:00",
      endTime: "19:45",
      duration: "45 min",
      capacity: 15,
      enrolled: 9,
      waitingList: 0,
      branch: "Mumbai Central",
      room: "Meditation Room",
      status: "active",
      difficulty: "All Levels",
      color: "bg-indigo-100 text-indigo-800",
      description: "Guided meditation for stress relief and focus",
      equipment: "Mats, cushions",
      recurring: "Weekly",
      price: "₹300",
      rating: 4.9,
      tags: ["Meditation", "Stress Relief", "Mindfulness"],
      participants: [
        { id: 13, name: "Ravi Verma", avatar: "RV" },
        { id: 14, name: "Tina Shah", avatar: "TS" }
      ],
      notes: "Wear comfortable clothes. All levels welcome."
    },
    {
      id: 8,
      className: "Boxing Basics",
      type: "martial-arts",
      instructor: "Vikram Singh",
      date: "2024-02-16",
      startTime: "17:30",
      endTime: "18:30",
      duration: "60 min",
      capacity: 10,
      enrolled: 7,
      waitingList: 0,
      branch: "Andheri West",
      room: "Combat Zone",
      status: "active",
      difficulty: "Beginner",
      color: "bg-gray-100 text-gray-800",
      description: "Learn basic boxing techniques and combinations",
      equipment: "Gloves, pads, bags",
      recurring: "Weekly",
      price: "₹650",
      rating: 4.7,
      tags: ["Boxing", "Cardio", "Self Defense"],
      participants: [
        { id: 15, name: "Amit Patel", avatar: "AP" },
        { id: 16, name: "Simran Kaur", avatar: "SK" }
      ],
      notes: "Gloves provided. Wrap your hands before class."
    }
  ]);

  // Filter options
  const typeOptions = [
    { id: 'yoga', label: 'Yoga', count: 1, icon: <BookOpen className="w-4 h-4" /> },
    { id: 'hiit', label: 'HIIT', count: 1, icon: <Activity className="w-4 h-4" /> },
    { id: 'strength', label: 'Strength', count: 1, icon: <Dumbbell className="w-4 h-4" /> },
    { id: 'dance', label: 'Dance', count: 1, icon: <Music className="w-4 h-4" /> },
    { id: 'pilates', label: 'Pilates', count: 1, icon: <Target className="w-4 h-4" /> },
    { id: 'cycling', label: 'Cycling', count: 1, icon: <Zap className="w-4 h-4" /> },
    { id: 'meditation', label: 'Meditation', count: 1, icon: <Sun className="w-4 h-4" /> },
    { id: 'martial-arts', label: 'Martial Arts', count: 1, icon: <Award className="w-4 h-4" /> }
  ];

  const instructorOptions = [
    { id: 'priya-sharma', label: 'Priya Sharma', count: 1 },
    { id: 'rohan-singh', label: 'Rohan Singh', count: 1 },
    { id: 'amit-verma', label: 'Amit Verma', count: 1 },
    { id: 'meera-nair', label: 'Meera Nair', count: 1 },
    { id: 'ananya-das', label: 'Ananya Das', count: 1 },
    { id: 'rajesh-kumar', label: 'Rajesh Kumar', count: 1 },
    { id: 'gaurav-sharma', label: 'Gaurav Sharma', count: 1 },
    { id: 'vikram-singh', label: 'Vikram Singh', count: 1 }
  ];

  const statusOptions = [
    { id: 'active', label: 'Active', count: 6, color: 'green' },
    { id: 'full', label: 'Full', count: 2, color: 'red' },
    { id: 'cancelled', label: 'Cancelled', count: 0, color: 'gray' },
    { id: 'upcoming', label: 'Upcoming', count: 0, color: 'blue' }
  ];

  const branchOptions = [
    { id: 'mumbai-central', label: 'Mumbai Central', count: 3 },
    { id: 'andheri-west', label: 'Andheri West', count: 3 },
    { id: 'bandra', label: 'Bandra', count: 2 }
  ];

  // Stats calculation
  const stats = useMemo(() => {
    const totalClasses = classes.length;
    const activeClasses = classes.filter(c => c.status === 'active').length;
    const fullClasses = classes.filter(c => c.status === 'full').length;
    const totalCapacity = classes.reduce((sum, c) => sum + c.capacity, 0);
    const totalEnrolled = classes.reduce((sum, c) => sum + c.enrolled, 0);
    const occupancyRate = ((totalEnrolled / totalCapacity) * 100).toFixed(1);
    const uniqueInstructors = [...new Set(classes.map(c => c.instructor))].length;
    
    const today = new Date().toISOString().split('T')[0];
    const todayClasses = classes.filter(c => c.date === today).length;

    return {
      totalClasses,
      activeClasses,
      fullClasses,
      totalCapacity,
      totalEnrolled,
      occupancyRate: occupancyRate + '%',
      uniqueInstructors,
      todayClasses
    };
  }, [classes]);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(5);
      } else if (width < 1024) {
        setItemsPerPage(7);
      } else {
        setItemsPerPage(8);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Filter and sort classes - FIXED: Correct filter comparison
  const filteredAndSortedClasses = useMemo(() => {
    let filtered = [...classes];

    if (searchQuery) {
      filtered = filtered.filter(cls => 
        cls.className.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.branch.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (activeFilters.type.length > 0) {
      filtered = filtered.filter(cls => 
        activeFilters.type.includes(cls.type)
      );
    }

    if (activeFilters.instructor.length > 0) {
      filtered = filtered.filter(cls => 
        activeFilters.instructor.includes(cls.instructor.toLowerCase().replace(/\s+/g, '-'))
      );
    }

    if (activeFilters.status.length > 0) {
      filtered = filtered.filter(cls => 
        activeFilters.status.includes(cls.status)
      );
    }

    if (activeFilters.branch.length > 0) {
      filtered = filtered.filter(cls => 
        activeFilters.branch.includes(cls.branch.toLowerCase().replace(/\s+/g, '-'))
      );
    }

    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'name':
          return a.className.localeCompare(b.className);
        case 'popularity':
          return (b.enrolled / b.capacity) - (a.enrolled / a.capacity);
        case 'time':
          return new Date(a.date + 'T' + a.startTime) - new Date(b.date + 'T' + b.startTime);
        case 'rating':
          return b.rating - a.rating;
        default:
          return new Date(a.date + 'T' + a.startTime) - new Date(b.date + 'T' + b.startTime);
      }
    });

    return filtered;
  }, [classes, searchQuery, activeFilters, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedClasses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentClasses = filteredAndSortedClasses.slice(startIndex, endIndex);

  // Helper functions
  const handleRowClick = (cls) => {
    setSelectedClass(cls);
    setShowClassDetails(true);
  };

  const closeClassDetails = () => {
    setShowClassDetails(false);
    setSelectedClass(null);
  };

  const toggleClassSelection = (id, e) => {
    e.stopPropagation();
    setSelectedClasses(prev => 
      prev.includes(id) 
        ? prev.filter(clsId => clsId !== id)
        : [...prev, id]
    );
  };

  const selectAllClasses = () => {
    if (selectedClasses.length === currentClasses.length) {
      setSelectedClasses([]);
    } else {
      setSelectedClasses(currentClasses.map(cls => cls.id));
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
      type: [],
      instructor: [],
      status: [],
      branch: []
    });
    setSearchQuery('');
  };

  const handleDeleteClass = (id, e) => {
    if (e) e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this class?')) {
      setClasses(prev => prev.filter(cls => cls.id !== id));
      setSelectedClasses(prev => prev.filter(clsId => clsId !== id));
      if (selectedClass?.id === id) {
        closeClassDetails();
      }
    }
  };

  const handleBulkDelete = () => {
    if (selectedClasses.length === 0) return;
    
    if (window.confirm(`Are you sure you want to delete ${selectedClasses.length} classes?`)) {
      setClasses(prev => prev.filter(cls => !selectedClasses.includes(cls.id)));
      setSelectedClasses([]);
      if (selectedClass && selectedClasses.includes(selectedClass.id)) {
        closeClassDetails();
      }
    }
  };

  const handleDuplicateClass = (cls, e) => {
    if (e) e.stopPropagation();
    const newClass = {
      ...cls,
      id: Math.max(...classes.map(c => c.id)) + 1,
      className: `${cls.className} (Copy)`,
      date: new Date().toISOString().split('T')[0],
      enrolled: 0,
      waitingList: 0
    };
    setClasses(prev => [...prev, newClass]);
    alert('Class duplicated successfully!');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getEnrollmentPercentage = (enrolled, capacity) => {
    return Math.round((enrolled / capacity) * 100);
  };

  const getEnrollmentColor = (percentage) => {
    if (percentage >= 90) return 'bg-red-100 text-red-800';
    if (percentage >= 70) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { color: 'bg-green-100 text-green-800 border-green-200', label: 'Active' },
      full: { color: 'bg-red-100 text-red-800 border-red-200', label: 'Full' },
      cancelled: { color: 'bg-gray-100 text-gray-800 border-gray-200', label: 'Cancelled' },
      upcoming: { color: 'bg-blue-100 text-blue-800 border-blue-200', label: 'Upcoming' }
    };
    
    return statusConfig[status] || statusConfig.active;
  };

  const getDifficultyBadge = (difficulty) => {
    const config = {
      Beginner: 'bg-blue-100 text-blue-800',
      Intermediate: 'bg-purple-100 text-purple-800',
      Advanced: 'bg-red-100 text-red-800',
      'All Levels': 'bg-green-100 text-green-800'
    };
    
    return config[difficulty] || 'bg-gray-100 text-gray-800';
  };

  // Get icon for class type
  const getClassIcon = (type) => {
    switch(type) {
      case 'yoga': return <BookOpen className="w-6 h-6" />;
      case 'hiit': return <Activity className="w-6 h-6" />;
      case 'strength': return <Dumbbell className="w-6 h-6" />;
      case 'dance': return <Music className="w-6 h-6" />;
      case 'pilates': return <Target className="w-6 h-6" />;
      case 'cycling': return <Zap className="w-6 h-6" />;
      case 'meditation': return <Sun className="w-6 h-6" />;
      case 'martial-arts': return <Award className="w-6 h-6" />;
      default: return <Activity className="w-6 h-6" />;
    }
  };

  // Get display label for class type
  const getClassTypeLabel = (type) => {
    const typeMap = {
      'yoga': 'Yoga',
      'hiit': 'HIIT',
      'strength': 'Strength',
      'dance': 'Dance',
      'pilates': 'Pilates',
      'cycling': 'Cycling',
      'meditation': 'Meditation',
      'martial-arts': 'Martial Arts'
    };
    return typeMap[type] || type;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-1 md:p-3">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl font-bold text-gray-900">Class Schedule</h1>
            <p className="text-gray-600 mt-1">Manage and track all fitness classes</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to={'/ultimate-control/class-schedule/add'}>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4" />
                <span className="font-medium">Add Class</span>
              </button>
            </Link>
         
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">Total Classes</p>
                <p className="text-2xl font-bold text-blue-900">{stats.totalClasses}</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600">Active</p>
                <p className="text-2xl font-bold text-green-900">{stats.activeClasses}</p>
              </div>
              <Activity className="w-8 h-8 text-green-400" />
            </div>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600">Full Classes</p>
                <p className="text-2xl font-bold text-orange-900">{stats.fullClasses}</p>
              </div>
              <Users className="w-8 h-8 text-orange-400" />
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600">Occupancy</p>
                <p className="text-2xl font-bold text-purple-900">{stats.occupancyRate}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          
        
          
          <div className="bg-teal-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-teal-600">Today</p>
                <p className="text-2xl font-bold text-teal-900">{stats.todayClasses}</p>
              </div>
              <CalendarDays className="w-8 h-8 text-teal-400" />
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search classes by name, instructor, or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setFilterMenuOpen(!filterMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">
                  Filters
                  {Object.values(activeFilters).flat().length > 0 && (
                    <span className="ml-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                      {Object.values(activeFilters).flat().length}
                    </span>
                  )}
                </span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filterMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {filterMenuOpen && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 max-h-96 overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Class Type</h4>
                    <div className="space-y-2">
                      {typeOptions.map(option => (
                        <label key={option.id} className="flex items-center justify-between cursor-pointer">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              checked={activeFilters.type.includes(option.id)}
                              onChange={() => toggleFilter('type', option.id)}
                              className="rounded text-blue-600 w-4 h-4"
                            />
                            <div className="flex items-center space-x-2">
                              {option.icon}
                              <span className="text-gray-700">{option.label}</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {option.count}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Instructor</h4>
                    <div className="space-y-2">
                      {instructorOptions.map(option => (
                        <label key={option.id} className="flex items-center justify-between cursor-pointer">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              checked={activeFilters.instructor.includes(option.id)}
                              onChange={() => toggleFilter('instructor', option.id)}
                              className="rounded text-blue-600 w-4 h-4"
                            />
                            <span className="text-gray-700">{option.label}</span>
                          </div>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {option.count}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Status</h4>
                    <div className="space-y-2">
                      {statusOptions.map(option => (
                        <label key={option.id} className="flex items-center justify-between cursor-pointer">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              checked={activeFilters.status.includes(option.id)}
                              onChange={() => toggleFilter('status', option.id)}
                              className="rounded text-blue-600 w-4 h-4"
                            />
                            <div className="flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full ${
                                option.color === 'green' ? 'bg-green-500' :
                                option.color === 'red' ? 'bg-red-500' :
                                option.color === 'blue' ? 'bg-blue-500' :
                                'bg-gray-500'
                              }`}></div>
                              <span className="text-gray-700">{option.label}</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {option.count}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Branch</h4>
                    <div className="space-y-2">
                      {branchOptions.map(option => (
                        <label key={option.id} className="flex items-center justify-between cursor-pointer">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              checked={activeFilters.branch.includes(option.id)}
                              onChange={() => toggleFilter('branch', option.id)}
                              className="rounded text-blue-600 w-4 h-4"
                            />
                            <span className="text-gray-700">{option.label}</span>
                          </div>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {option.count}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
                  <button 
                    onClick={clearAllFilters}
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Clear All
                  </button>
                  <button 
                    onClick={() => setFilterMenuOpen(false)}
                    className="text-sm bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="time">Time (Earliest First)</option>
              <option value="name">Name (A-Z)</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Active Filters */}
        {Object.values(activeFilters).flat().length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {activeFilters.type.map(type => (
              <span key={type} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {typeOptions.find(t => t.id === type)?.label}
                <button onClick={() => toggleFilter('type', type)} className="ml-1">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {activeFilters.instructor.map(instructor => (
              <span key={instructor} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {instructorOptions.find(i => i.id === instructor)?.label}
                <button onClick={() => toggleFilter('instructor', instructor)} className="ml-1">
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
            {activeFilters.branch.map(branch => (
              <span key={branch} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {branchOptions.find(b => b.id === branch)?.label}
                <button onClick={() => toggleFilter('branch', branch)} className="ml-1">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            <button 
              onClick={clearAllFilters}
              className="text-sm text-blue-600 hover:text-blue-800 ml-2"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Classes Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-50 border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedClasses.length > 0 && selectedClasses.length === currentClasses.length}
                onChange={selectAllClasses}
                className="w-4 h-4 text-blue-600 rounded border-gray-300"
              />
              <span className="text-sm text-gray-700">
                {selectedClasses.length > 0 
                  ? `${selectedClasses.length} selected` 
                  : `${filteredAndSortedClasses.length} classes`
                }
              </span>
            </div>
            
            {selectedClasses.length > 0 && (
              <div className="flex items-center space-x-3">
                <button 
                  onClick={handleBulkDelete}
                  className="flex items-center space-x-1 text-red-600 hover:text-red-800 text-sm"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Classes Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left"></th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrollment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentClasses.map(cls => {
                const enrollmentPercent = getEnrollmentPercentage(cls.enrolled, cls.capacity);
                const statusBadge = getStatusBadge(cls.status);
                
                return (
                  <tr 
                    key={cls.id} 
                    onClick={() => handleRowClick(cls)}
                    className="hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                  >
                    <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selectedClasses.includes(cls.id)}
                        onChange={(e) => toggleClassSelection(cls.id, e)}
                        className="w-4 h-4 text-blue-600 rounded border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${cls.color}`}>
                          {getClassIcon(cls.type)}
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center space-x-2">
                            <div className="text-sm font-medium text-gray-900">{cls.className}</div>
                            <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${getDifficultyBadge(cls.difficulty)}`}>
                              {cls.difficulty}
                            </div>
                          </div>
                          <div className="text-sm text-gray-500 flex items-center mt-1">
                            <User className="w-4 h-4 mr-1" />
                            {cls.instructor}
                          </div>
                          <div className="text-xs text-gray-400 mt-1 flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {cls.branch} • {cls.room}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center text-gray-900">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          {formatDate(cls.date)}
                        </div>
                        <div className="flex items-center text-gray-900">
                          <Clock className="w-4 h-4 mr-2 text-gray-400" />
                          {cls.startTime} - {cls.endTime} ({cls.duration})
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Recurring: {cls.recurring}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">
                            {cls.enrolled}/{cls.capacity} members
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${getEnrollmentColor(enrollmentPercent)}`}>
                            {enrollmentPercent}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${enrollmentPercent >= 90 ? 'bg-red-500' : enrollmentPercent >= 70 ? 'bg-yellow-500' : 'bg-green-500'}`}
                            style={{ width: `${Math.min(enrollmentPercent, 100)}%` }}
                          ></div>
                        </div>
                        {cls.waitingList > 0 && (
                          <div className="text-xs text-orange-600">
                            +{cls.waitingList} on waiting list
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusBadge.color}`}>
                          {statusBadge.label}
                        </span>
                        <div className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                          {cls.rating} ({cls.enrolled} reviews)
                        </div>
                        <div className="text-xs text-gray-500">
                          ₹{cls.price}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={(e) => handleDuplicateClass(cls, e)}
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                          title="Duplicate"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <Link to={`/ultimate-control/classes/edit/${cls.id}`}>
                          <button 
                            className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                        </Link>
                        <button 
                          onClick={(e) => handleDeleteClass(cls.id, e)}
                          className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* No Results */}
        {currentClasses.length === 0 && (
          <div className="py-12 text-center">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No classes found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
            <button 
              onClick={clearAllFilters}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredAndSortedClasses.length > 0 && (
          <div className="p-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="text-sm text-gray-600 mb-3 sm:mb-0">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredAndSortedClasses.length)} of {filteredAndSortedClasses.length} classes
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
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
                      className={`px-3 py-2 border rounded-lg text-sm ${
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
                  <span className="px-3 py-2 text-gray-500">...</span>
                )}
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Class Details Side Panel - FIXED: Now will show properly */}
      {showClassDetails && selectedClass && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-2xl h-full overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedClass.className}</h2>
                  <p className="text-gray-600 mt-1">Class Details</p>
                </div>
                <button
                  onClick={closeClassDetails}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Class Info */}
            <div className="p-6">
              {/* Status & Difficulty */}
              <div className="flex items-center space-x-4 mb-6">
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${selectedClass.color}`}>
                  {getClassTypeLabel(selectedClass.type)}
                </span>
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getDifficultyBadge(selectedClass.difficulty)}`}>
                  {selectedClass.difficulty}
                </span>
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusBadge(selectedClass.status).color}`}>
                  {getStatusBadge(selectedClass.status).label}
                </span>
                <div className="flex items-center text-yellow-600">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="ml-1 font-medium">{selectedClass.rating}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Description</h3>
                <p className="text-gray-700">{selectedClass.description}</p>
              </div>

              {/* Schedule & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Schedule</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-900">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        {formatDate(selectedClass.date)}
                      </div>
                      <div className="flex items-center text-gray-900">
                        <Clock className="w-4 h-4 mr-2 text-gray-400" />
                        {selectedClass.startTime} - {selectedClass.endTime} ({selectedClass.duration})
                      </div>
                      <div className="flex items-center text-gray-900">
                        <RefreshCw className="w-4 h-4 mr-2 text-gray-400" />
                        Recurring: {selectedClass.recurring}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Pricing</h3>
                    <div className="text-2xl font-bold text-gray-900">{selectedClass.price}</div>
                    <div className="text-sm text-gray-500">Per session</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Location</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-900">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        {selectedClass.branch}
                      </div>
                      <div className="flex items-center text-gray-900">
                        <Building className="w-4 h-4 mr-2 text-gray-400" />
                        Room: {selectedClass.room}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Instructor</h3>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-700">
                        {selectedClass.instructor.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-3">
                        <div className="font-medium text-gray-900">{selectedClass.instructor}</div>
                        <div className="text-sm text-gray-500">Certified {getClassTypeLabel(selectedClass.type)} Instructor</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enrollment Stats */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Enrollment Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-900">{selectedClass.enrolled}/{selectedClass.capacity}</div>
                    <div className="text-sm text-blue-600">Enrolled</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-900">{getEnrollmentPercentage(selectedClass.enrolled, selectedClass.capacity)}%</div>
                    <div className="text-sm text-green-600">Occupancy</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-900">{selectedClass.waitingList}</div>
                    <div className="text-sm text-orange-600">Waiting List</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-900">{selectedClass.rating}</div>
                    <div className="text-sm text-purple-600">Rating</div>
                  </div>
                </div>
              </div>

              {/* Equipment & Requirements */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Equipment & Requirements</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">{selectedClass.equipment}</p>
                </div>
              </div>

              {/* Notes */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Notes</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">{selectedClass.notes}</p>
                </div>
              </div>

              {/* Tags */}
              {selectedClass.tags && selectedClass.tags.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedClass.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Participants */}
              {selectedClass.participants && selectedClass.participants.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Recent Participants</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedClass.participants.map(participant => (
                      <div key={participant.id} className="flex items-center">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium">
                          {participant.avatar}
                        </div>
                        <div className="ml-2 text-sm">{participant.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <div className="flex items-center space-x-3">
                  <Link to={`/ultimate-control/classes/edit/${selectedClass.id}`}>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      <Edit className="w-4 h-4" />
                      <span>Edit Class</span>
                    </button>
                  </Link>
                  <button
                    onClick={(e) => handleDuplicateClass(selectedClass, e)}
                    className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Duplicate</span>
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={(e) => handleDeleteClass(selectedClass.id, e)}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassSchedule;