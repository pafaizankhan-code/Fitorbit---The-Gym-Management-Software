import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar,
  Clock,
  Users,
  Target,
  Dumbbell,
  Heart,
  Zap,
  Award,
  TrendingUp,
  Search,
  Filter,
  Plus,
  ChevronLeft,
  ChevronRight,
  Edit,
  Trash2,
  Copy,
  MoreVertical,
  Eye,
  Download,
  Printer,
  Bell,
  CheckCircle,
  XCircle,
  AlertCircle,
  User,
  Star,
  MapPin,
  Video,
  Music,
  Volume2,
  Settings,
  RefreshCw,
  BarChart3,
  CalendarDays,
  CalendarRange,
  CalendarClock,
  CalendarX,
  CalendarCheck,
  CalendarPlus,
  CalendarMinus,
  CalendarHeart,
  Calendar as CalendarIcon,
  ChevronDown,
  Menu,
  X,
  Smartphone,
  Tablet,
  Monitor,
  Hash,
  Maximize2,
  Minimize2,
  Grid,
  List,
  Layout,
  Layers,
  Activity,
  TrendingDown,
  AlertTriangle,
  CheckSquare,
  Square,
  Lock,
  Unlock,
  RotateCw,
  EyeOff,
  BookOpen,
  Clipboard,
  FileCheck,
  Timer,
  Battery,
  BatteryCharging,
  Thermometer,
  Wind,
  Sunrise,
  Sunset,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudFog,
  CloudSun,
  CloudMoon,
  Droplets,
  Umbrella,
  Sun,
  Moon,
  WindIcon
} from 'lucide-react';

const ClassSchedule = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedClass, setSelectedClass] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState('all');
  const [selectedRoom, setSelectedRoom] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showClassAnalytics, setShowClassAnalytics] = useState(false);
  const [showCapacityView, setShowCapacityView] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const scheduleRef = useRef(null);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Days of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const mobileShortDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  // Generate current week dates
  const getWeekDates = () => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - today.getDay() + (currentWeek * 7));
    
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      return {
        day: daysOfWeek[i],
        shortDay: shortDays[i],
        mobileDay: mobileShortDays[i],
        date: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        fullDate: date.toISOString().split('T')[0],
        isToday: date.toDateString() === today.toDateString(),
        isWeekend: i === 0 || i === 6
      };
    });
  };

  const weekDates = getWeekDates();

  // Enhanced Time slots with more detail
  const timeSlots = isMobile 
    ? ['6 AM', '8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM']
    : [
        '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
        '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
        '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'
      ];

  // Enhanced Trainers with more data
  const trainers = [
    { 
      id: 1, 
      name: 'Rajesh Kumar', 
      specialization: 'Weight Training', 
      rating: 4.8, 
      experience: '8 years',
      certification: 'ACE Certified',
      classesPerWeek: 12,
      availability: ['Mon', 'Wed', 'Fri', 'Sat'],
      color: 'from-blue-500 to-blue-600',
      badgeColor: 'border-blue-500 text-blue-700',
      bgColor: 'bg-blue-50'
    },
    { 
      id: 2, 
      name: 'Priya Sharma', 
      specialization: 'Yoga & Meditation', 
      rating: 4.9, 
      experience: '10 years',
      certification: 'RYT 500',
      classesPerWeek: 15,
      availability: ['Mon', 'Tue', 'Thu', 'Sat', 'Sun'],
      color: 'from-green-500 to-green-600',
      badgeColor: 'border-green-500 text-green-700',
      bgColor: 'bg-green-50'
    },
    { 
      id: 3, 
      name: 'Amit Patel', 
      specialization: 'HIIT & Cardio', 
      rating: 4.7, 
      experience: '6 years',
      certification: 'NASM Certified',
      classesPerWeek: 10,
      availability: ['Tue', 'Thu', 'Fri', 'Sun'],
      color: 'from-purple-500 to-purple-600',
      badgeColor: 'border-purple-500 text-purple-700',
      bgColor: 'bg-purple-50'
    },
    { 
      id: 4, 
      name: 'Neha Gupta', 
      specialization: 'Zumba & Dance', 
      rating: 4.6, 
      experience: '5 years',
      certification: 'ZIN Member',
      classesPerWeek: 8,
      availability: ['Mon', 'Wed', 'Fri', 'Sun'],
      color: 'from-pink-500 to-pink-600',
      badgeColor: 'border-pink-500 text-pink-700',
      bgColor: 'bg-pink-50'
    },
    { 
      id: 5, 
      name: 'Suresh Reddy', 
      specialization: 'CrossFit & Strength', 
      rating: 4.5, 
      experience: '7 years',
      certification: 'CrossFit L2',
      classesPerWeek: 14,
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      color: 'from-orange-500 to-orange-600',
      badgeColor: 'border-orange-500 text-orange-700',
      bgColor: 'bg-orange-50'
    }
  ];

  // Enhanced Rooms with equipment data
  const rooms = [
    { 
      id: 1, 
      name: 'Main Hall', 
      capacity: 50, 
      floor: 'Ground',
      equipment: ['Sound System', 'Projector', 'AC', 'Mats'],
      status: 'available',
      size: 'Large'
    },
    { 
      id: 2, 
      name: 'Yoga Studio', 
      capacity: 25, 
      floor: '1st',
      equipment: ['Yoga Mats', 'Blocks', 'Straps', 'Bolsters', 'Essential Oils'],
      status: 'available',
      size: 'Medium'
    },
    { 
      id: 3, 
      name: 'Cardio Zone', 
      capacity: 30, 
      floor: '1st',
      equipment: ['Treadmills', 'Bikes', 'Ellipticals', 'Rowers'],
      status: 'maintenance',
      size: 'Medium'
    },
    { 
      id: 4, 
      name: 'Strength Area', 
      capacity: 40, 
      floor: '2nd',
      equipment: ['Free Weights', 'Machines', 'Racks', 'Benches'],
      status: 'available',
      size: 'Large'
    },
    { 
      id: 5, 
      name: 'Pool Deck', 
      capacity: 20, 
      floor: 'Ground',
      equipment: ['Pool', 'Chairs', 'Showers', 'Lockers'],
      status: 'available',
      size: 'Small'
    }
  ];

  // Enhanced Class Types with detailed info
  const classTypes = [
    { 
      id: 'yoga', 
      name: 'Yoga', 
      icon: Heart, 
      color: 'border-green-500 text-green-700',
      bgColor: 'bg-green-50',
      intensity: 'Low',
      duration: '60 min',
      popularity: 85,
      description: 'Mindfulness & Flexibility'
    },
    { 
      id: 'cardio', 
      name: 'Cardio', 
      icon: Zap, 
      color: 'border-red-500 text-red-700',
      bgColor: 'bg-red-50',
      intensity: 'High',
      duration: '45 min',
      popularity: 78,
      description: 'Heart Health & Endurance'
    },
    { 
      id: 'weights', 
      name: 'Strength', 
      icon: Dumbbell, 
      color: 'border-blue-500 text-blue-700',
      bgColor: 'bg-blue-50',
      intensity: 'Medium',
      duration: '90 min',
      popularity: 92,
      description: 'Muscle Building & Power'
    },
    { 
      id: 'zumba', 
      name: 'Zumba', 
      icon: Music, 
      color: 'border-pink-500 text-pink-700',
      bgColor: 'bg-pink-50',
      intensity: 'Medium',
      duration: '60 min',
      popularity: 88,
      description: 'Dance Fitness & Fun'
    },
    { 
      id: 'crossfit', 
      name: 'CrossFit', 
      icon: Award, 
      color: 'border-orange-500 text-orange-700',
      bgColor: 'bg-orange-50',
      intensity: 'High',
      duration: '75 min',
      popularity: 76,
      description: 'High Intensity Training'
    },
    { 
      id: 'pilates', 
      name: 'Pilates', 
      icon: Target, 
      color: 'border-purple-500 text-purple-700',
      bgColor: 'bg-purple-50',
      intensity: 'Low',
      duration: '55 min',
      popularity: 82,
      description: 'Core Strength & Posture'
    }
  ];

  // Enhanced Sample Classes Data
  const classes = [
    {
      id: 1,
      name: 'Morning Vinyasa Flow',
      shortName: 'Yoga',
      type: 'yoga',
      trainerId: 2,
      roomId: 2,
      dayIndex: 1,
      startTime: '7:00 AM',
      endTime: '8:00 AM',
      duration: 60,
      capacity: 20,
      enrolled: 18,
      waitlist: 3,
      status: 'active',
      color: 'border-green-500',
      bgColor: 'bg-green-50',
      popularity: 90,
      difficulty: 'Beginner',
      equipmentRequired: ['Yoga Mat']
    },
    {
      id: 2,
      name: 'HIIT Cardio Blast',
      shortName: 'Cardio',
      type: 'cardio',
      trainerId: 3,
      roomId: 3,
      dayIndex: 1,
      startTime: '9:00 AM',
      endTime: '10:00 AM',
      duration: 60,
      capacity: 25,
      enrolled: 22,
      waitlist: 5,
      status: 'active',
      color: 'border-red-500',
      bgColor: 'bg-red-50',
      popularity: 88,
      difficulty: 'Advanced',
      equipmentRequired: ['Towel', 'Water Bottle']
    },
    {
      id: 3,
      name: 'Power Lifting Session',
      shortName: 'Strength',
      type: 'weights',
      trainerId: 1,
      roomId: 4,
      dayIndex: 1,
      startTime: '6:00 PM',
      endTime: '7:30 PM',
      duration: 90,
      capacity: 15,
      enrolled: 14,
      waitlist: 2,
      status: 'active',
      color: 'border-blue-500',
      bgColor: 'bg-blue-50',
      popularity: 95,
      difficulty: 'Intermediate',
      equipmentRequired: ['Gloves', 'Belt']
    },
    {
      id: 4,
      name: 'Latin Dance Fitness',
      shortName: 'Zumba',
      type: 'zumba',
      trainerId: 4,
      roomId: 1,
      dayIndex: 2,
      startTime: '6:00 PM',
      endTime: '7:00 PM',
      duration: 60,
      capacity: 30,
      enrolled: 28,
      waitlist: 7,
      status: 'active',
      color: 'border-pink-500',
      bgColor: 'bg-pink-50',
      popularity: 86,
      difficulty: 'Beginner',
      equipmentRequired: ['Dance Shoes']
    },
    {
      id: 5,
      name: 'CrossFit WOD',
      shortName: 'CrossFit',
      type: 'crossfit',
      trainerId: 5,
      roomId: 4,
      dayIndex: 3,
      startTime: '7:00 AM',
      endTime: '8:30 AM',
      duration: 90,
      capacity: 12,
      enrolled: 10,
      waitlist: 4,
      status: 'active',
      color: 'border-orange-500',
      bgColor: 'bg-orange-50',
      popularity: 84,
      difficulty: 'Advanced',
      equipmentRequired: ['CrossFit Shoes', 'Wrist Wraps']
    },
    {
      id: 6,
      name: 'Evening Yin Yoga',
      shortName: 'Yoga',
      type: 'yoga',
      trainerId: 2,
      roomId: 2,
      dayIndex: 4,
      startTime: '6:00 PM',
      endTime: '7:00 PM',
      duration: 60,
      capacity: 20,
      enrolled: 16,
      waitlist: 1,
      status: 'active',
      color: 'border-green-500',
      bgColor: 'bg-green-50',
      popularity: 82,
      difficulty: 'All Levels',
      equipmentRequired: ['Yoga Mat', 'Bolster']
    },
    {
      id: 7,
      name: 'Pilates Reformer',
      shortName: 'Pilates',
      type: 'pilates',
      trainerId: 2,
      roomId: 2,
      dayIndex: 5,
      startTime: '8:00 AM',
      endTime: '9:00 AM',
      duration: 60,
      capacity: 15,
      enrolled: 12,
      waitlist: 0,
      status: 'active',
      color: 'border-purple-500',
      bgColor: 'bg-purple-50',
      popularity: 79,
      difficulty: 'Intermediate',
      equipmentRequired: ['Pilates Mat']
    },
    {
      id: 8,
      name: 'Spin Cycle Marathon',
      shortName: 'Spin',
      type: 'cardio',
      trainerId: 3,
      roomId: 3,
      dayIndex: 6,
      startTime: '5:00 PM',
      endTime: '6:30 PM',
      duration: 90,
      capacity: 18,
      enrolled: 16,
      waitlist: 6,
      status: 'active',
      color: 'border-red-500',
      bgColor: 'bg-red-50',
      popularity: 91,
      difficulty: 'Intermediate',
      equipmentRequired: ['Spin Shoes', 'Towel']
    }
  ];

  // Class Analytics Data
  const classAnalytics = {
    totalClasses: 32,
    averageAttendance: 85.5,
    peakHours: ['6:00 PM', '7:00 AM', '9:00 AM'],
    popularTypes: ['Strength', 'Yoga', 'Cardio'],
    revenuePerClass: 4500,
    monthlyGrowth: 12.5,
    memberSatisfaction: 94.2
  };

  // Get time slot index
  const getTimeSlotIndex = (time) => {
    const simpleTime = time.replace(':00 ', ' ');
    return timeSlots.findIndex(slot => slot === simpleTime);
  };

  // Calculate class position
  const getClassPosition = (classItem) => {
    const simpleStartTime = classItem.startTime.replace(':00 ', ' ');
    const simpleEndTime = classItem.endTime.replace(':00 ', ' ');
    
    const startIndex = getTimeSlotIndex(simpleStartTime);
    const endIndex = getTimeSlotIndex(simpleEndTime);
    
    const timeSlotHeight = isMobile ? 55 : 70;
    const dayColumnWidth = isMobile ? 65 : 180;
    
    const height = Math.max((endIndex - startIndex) * timeSlotHeight, timeSlotHeight);
    
    return {
      top: startIndex * timeSlotHeight,
      height: height,
      dayOffset: classItem.dayIndex * dayColumnWidth
    };
  };

  // Filter classes for current week day
  const getClassesForDay = (dayIndex) => {
    return classes.filter(cls => cls.dayIndex === dayIndex);
  };

  // Get trainer by ID
  const getTrainer = (id) => {
    return trainers.find(t => t.id === id) || trainers[0];
  };

  // Get room by ID
  const getRoom = (id) => {
    return rooms.find(r => r.id === id) || rooms[0];
  };

  // Get class type by ID
  const getClassType = (id) => {
    return classTypes.find(ct => ct.id === id) || classTypes[0];
  };

  // Navigation
  const goToPreviousWeek = () => {
    setCurrentWeek(prev => prev - 1);
  };

  const goToNextWeek = () => {
    setCurrentWeek(prev => prev + 1);
  };

  const goToToday = () => {
    setCurrentWeek(0);
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (scheduleRef.current.requestFullscreen) {
        scheduleRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  // Class details modal
  const handleClassClick = (classItem) => {
    setSelectedClass(classItem);
  };

  // Mobile time slot height
  const timeSlotHeight = isMobile ? 55 : 70;

  return (
    <div className="min-h-screen bg-gray-50" ref={scheduleRef}>
      {/* Header */}
      <div className="bg-white border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="relative">
                <Calendar className="w-8 h-8 text-blue-500" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <Hash className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Class Schedule</h1>
                <p className="text-sm text-gray-600">Advanced management for gym classes & sessions</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-4 lg:mt-0">
            <button 
              onClick={() => setShowClassAnalytics(true)}
              className="flex items-center space-x-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="font-medium">Analytics</span>
            </button>
            <button 
              onClick={() => setShowCapacityView(!showCapacityView)}
              className="flex items-center space-x-2 px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Users className="w-4 h-4" />
              <span className="font-medium">Capacity</span>
            </button>
            <button 
              onClick={toggleFullscreen}
              className="flex items-center space-x-2 px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => setShowAddModal(true)}
              className="flex items-center space-x-2 px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="font-medium">Add Class</span>
            </button>
          </div>
        </div>

        {/* Advanced Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-gray-600">Total Classes</div>
                <div className="text-xl font-bold text-gray-900">{classes.length}</div>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-600">+{classAnalytics.monthlyGrowth}%</span>
                </div>
              </div>
              <CalendarDays className="w-6 h-6 text-blue-500" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-gray-600">Avg Attendance</div>
                <div className="text-xl font-bold text-gray-900">{classAnalytics.averageAttendance}%</div>
                <div className="flex items-center mt-1">
                  <Users className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-600">High</span>
                </div>
              </div>
              <Activity className="w-6 h-6 text-green-500" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-gray-600">Peak Hour</div>
                <div className="text-xl font-bold text-gray-900">6:00 PM</div>
                <div className="flex items-center mt-1">
                  <Zap className="w-3 h-3 text-orange-500 mr-1" />
                  <span className="text-xs text-orange-600">Most Popular</span>
                </div>
              </div>
              <Timer className="w-6 h-6 text-orange-500" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-gray-600">Revenue/Class</div>
                <div className="text-xl font-bold text-gray-900">₹{classAnalytics.revenuePerClass}</div>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-600">+8.2%</span>
                </div>
              </div>
              <Award className="w-6 h-6 text-purple-500" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-gray-600">Satisfaction</div>
                <div className="text-xl font-bold text-gray-900">{classAnalytics.memberSatisfaction}%</div>
                <div className="flex items-center mt-1">
                  <Star className="w-3 h-3 text-yellow-500 mr-1 fill-current" />
                  <span className="text-xs text-yellow-600">Excellent</span>
                </div>
              </div>
              <Heart className="w-6 h-6 text-pink-500" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-gray-600">Waitlist Total</div>
                <div className="text-xl font-bold text-gray-900">28</div>
                <div className="flex items-center mt-1">
                  <AlertCircle className="w-3 h-3 text-blue-500 mr-1" />
                  <span className="text-xs text-blue-600">Action Needed</span>
                </div>
              </div>
              <Clipboard className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Advanced Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          {/* View Toggle */}
          <div className="flex items-center space-x-2">
            <div className="flex bg-white border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium ${
                  viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Grid className="w-4 h-4" />
                <span>Grid</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium ${
                  viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <List className="w-4 h-4" />
                <span>List</span>
              </button>
              <button
                onClick={() => setViewMode('compact')}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium ${
                  viewMode === 'compact' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Layout className="w-4 h-4" />
                <span>Compact</span>
              </button>
            </div>

            {/* Date Navigation */}
            <div className="flex items-center bg-white border border-gray-300 rounded-lg">
              <button
                onClick={goToPreviousWeek}
                className="p-2 hover:bg-gray-50 border-r border-gray-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goToToday}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border-r border-gray-300"
              >
                Today
              </button>
              <div className="px-4 py-2 text-sm font-bold text-gray-900">
                Week {currentWeek === 0 ? 'Current' : currentWeek > 0 ? `+${currentWeek}` : currentWeek}
              </div>
              <button
                onClick={goToNextWeek}
                className="p-2 hover:bg-gray-50 border-l border-gray-300"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          <div className="flex items-center space-x-2">
            {!isMobile && (
              <>
                <div className="relative">
                  <select 
                    value={selectedTrainer}
                    onChange={(e) => setSelectedTrainer(e.target.value)}
                    className="appearance-none pl-10 pr-8 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                  >
                    <option value="all">All Trainers</option>
                    {trainers.map(trainer => (
                      <option key={trainer.id} value={trainer.id}>{trainer.name}</option>
                    ))}
                  </select>
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>

                <div className="relative">
                  <select 
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="appearance-none pl-10 pr-8 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                  >
                    <option value="all">All Rooms</option>
                    {rooms.map(room => (
                      <option key={room.id} value={room.id}>{room.name}</option>
                    ))}
                  </select>
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>

                <div className="relative">
                  <select 
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="appearance-none pl-10 pr-8 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                  >
                    <option value="all">All Types</option>
                    {classTypes.map(type => (
                      <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                  </select>
                  <Layers className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </>
            )}

            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filters</span>
            </button>

            <button className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <Search className="w-4 h-4" />
              <span className="text-sm">Search</span>
            </button>
          </div>
        </div>

        {/* Mobile Filters Panel */}
        {isMobile && showMobileFilters && (
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Trainer</label>
                <select 
                  value={selectedTrainer}
                  onChange={(e) => setSelectedTrainer(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="all">All Trainers</option>
                  {trainers.map(trainer => (
                    <option key={trainer.id} value={trainer.id}>{trainer.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Room</label>
                <select 
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="all">All Rooms</option>
                  {rooms.map(room => (
                    <option key={room.id} value={room.id}>{room.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Type</label>
                <select 
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="all">All Types</option>
                  {classTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Status</label>
                <select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm">
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="full">Full</option>
                  <option value="waitlist">Waitlist</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Advanced Schedule Grid */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
        {/* Calendar Header */}
        <div className="border-b border-gray-200">
          <div className="flex">
            {/* Time column header */}
            <div className={`${isMobile ? 'w-16' : 'w-28'} border-r border-gray-200 p-4`}>
              <div className="text-sm font-bold text-gray-700">TIME</div>
              {!isMobile && <div className="text-xs text-gray-500">24-hour format</div>}
            </div>
            
            {/* Enhanced Days header */}
            {weekDates.map((day, index) => (
              <div 
                key={index} 
                className={`flex-1 text-center p-4 border-r border-gray-200 last:border-r-0 ${
                  day.isToday ? 'bg-blue-50' : day.isWeekend ? 'bg-gray-50' : ''
                }`}
              >
                <div className={`text-xs font-medium ${day.isWeekend ? 'text-gray-500' : 'text-gray-600'}`}>
                  {isMobile ? day.mobileDay : day.shortDay}
                </div>
                <div className={`text-lg font-bold ${
                  day.isToday ? 'text-blue-500' : 
                  day.isWeekend ? 'text-gray-600' : 
                  'text-gray-900'
                }`}>
                  {day.date}
                </div>
                {!isMobile && (
                  <div className="text-xs text-gray-400 mt-1">
                    {day.month}/{day.year}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Body */}
        <div className="overflow-x-auto">
          <div className="flex min-w-max">
            {/* Time column with hour markers */}
            <div className={`${isMobile ? 'w-16' : 'w-28'}`}>
              {timeSlots.map((time, index) => (
                <div 
                  key={index} 
                  className={`${isMobile ? 'h-14' : 'h-16'} border-b border-gray-200 p-4 flex items-center ${
                    index % 2 === 0 ? 'bg-gray-50' : ''
                  }`}
                >
                  <div className="text-sm font-medium text-gray-700">{time}</div>
                </div>
              ))}
            </div>

            {/* Days columns with advanced styling */}
            {weekDates.map((day, dayIndex) => (
              <div 
                key={dayIndex} 
                className="flex-1 relative border-r border-gray-200 last:border-r-0" 
                style={{ minWidth: isMobile ? '80px' : '200px' }}
              >
                {/* Time grid lines */}
                {timeSlots.map((_, timeIndex) => (
                  <div 
                    key={timeIndex} 
                    className={`${isMobile ? 'h-14' : 'h-16'} border-b border-gray-100 ${
                      timeIndex === 0 ? 'border-t' : ''
                    } ${timeIndex % 2 === 0 ? 'bg-gray-50' : ''}`}
                  />
                ))}

                {/* Enhanced Classes for this day */}
                {getClassesForDay(dayIndex).map(classItem => {
                  const position = getClassPosition(classItem);
                  const trainer = getTrainer(classItem.trainerId);
                  const room = getRoom(classItem.roomId);
                  const classType = getClassType(classItem.type);
                  const TypeIcon = classType.icon;
                  const occupancyRate = (classItem.enrolled / classItem.capacity) * 100;
                  const hasWaitlist = classItem.waitlist > 0;
                  
                  return (
                    <div
                      key={classItem.id}
                      onClick={() => handleClassClick(classItem)}
                      className={`absolute ${isMobile ? 'left-1 right-1' : 'left-2 right-2'} ${classItem.bgColor} ${classItem.color} border rounded-lg p-2 cursor-pointer hover:opacity-95 transition-opacity`}
                      style={{
                        top: `${position.top}px`,
                        height: `${position.height}px`,
                        zIndex: 10,
                        borderWidth: '2px'
                      }}
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-1">
                          <div className={`font-bold ${isMobile ? 'text-[10px]' : 'text-sm'} truncate`}>
                            {isMobile ? classItem.shortName : classItem.name}
                          </div>
                          <div className="flex items-center space-x-1">
                            {hasWaitlist && (
                              <AlertCircle className={`w-3 h-3 ${occupancyRate >= 90 ? 'text-red-500' : 'text-yellow-500'}`} />
                            )}
                            <TypeIcon className="w-3 h-3" />
                          </div>
                        </div>
                        
                        <div className={`${isMobile ? 'text-[8px]' : 'text-xs'} opacity-80 mb-1`}>
                          {classItem.startTime.replace(':00 ', ' ')} - {classItem.endTime.replace(':00 ', ' ')}
                        </div>
                        
                        {!isMobile && (
                          <>
                            <div className="flex items-center justify-between mb-1">
                              <div className="text-xs flex items-center">
                                <User className="w-3 h-3 mr-1" />
                                <span>{trainer.name.split(' ')[0]}</span>
                              </div>
                              <div className="text-xs font-medium">
                                {classItem.enrolled}/{classItem.capacity}
                              </div>
                            </div>
                            
                            <div className="mt-auto">
                              {/* Progress bar for occupancy */}
                              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-1">
                                <div 
                                  className={`h-full ${occupancyRate >= 90 ? 'bg-red-500' : occupancyRate >= 75 ? 'bg-yellow-500' : 'bg-green-500'}`}
                                  style={{ width: `${occupancyRate}%` }}
                                />
                              </div>
                              
                              <div className="flex items-center justify-between text-xs">
                                <div className="flex items-center">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  <span>{room.name.split(' ')[0]}</span>
                                </div>
                                {hasWaitlist && (
                                  <div className="text-xs font-medium">
                                    +{classItem.waitlist}
                                  </div>
                                )}
                              </div>
                            </div>
                          </>
                        )}
                        
                        {isMobile && (
                          <div className="mt-auto flex items-center justify-between">
                            <div className="text-[8px]">
                              {classItem.enrolled}/{classItem.capacity}
                            </div>
                            {hasWaitlist && (
                              <div className="text-[8px] font-medium">
                                +{classItem.waitlist}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Bottom Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Trainer Schedule Panel */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Users className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Trainer Schedule</h2>
                <p className="text-sm text-gray-600">Today's trainer assignments</p>
              </div>
            </div>
            <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {trainers.slice(0, 3).map(trainer => {
              const trainerClasses = classes.filter(c => c.trainerId === trainer.id);
              const Icon = getClassType(trainerClasses[0]?.type || 'weights').icon;
              
              return (
                <div key={trainer.id} className={`p-4 border ${trainer.badgeColor} rounded-lg ${trainer.bgColor}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full ${trainer.bgColor} ${trainer.color.replace('text-', 'border-')} border-2 flex items-center justify-center mr-3`}>
                        <span className="font-bold">{trainer.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{trainer.name}</div>
                        <div className="text-sm text-gray-600">{trainer.specialization}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 font-bold">{trainer.rating}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-gray-600">Classes Today</div>
                      <div className="font-bold text-gray-900">{trainerClasses.length}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Next Class</div>
                      <div className="font-bold text-gray-900">
                        {trainerClasses[0]?.startTime || 'None'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 text-xs text-gray-500">
                    Available: {trainer.availability.join(', ')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Class Analytics Panel */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-50 rounded-lg">
                <BarChart3 className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Class Analytics</h2>
                <p className="text-sm text-gray-600">Performance metrics</p>
              </div>
            </div>
            <button 
              onClick={() => setShowClassAnalytics(true)}
              className="text-purple-500 hover:text-purple-700 text-sm font-medium"
            >
              Details
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Peak Hours</div>
                <div className="text-lg font-bold text-gray-900">
                  {classAnalytics.peakHours.slice(0, 2).join(', ')}
                </div>
                <div className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  High demand
                </div>
              </div>
              
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Popular Types</div>
                <div className="text-lg font-bold text-gray-900">
                  {classAnalytics.popularTypes.slice(0, 2).join(', ')}
                </div>
                <div className="text-xs text-blue-600">Top performing</div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">Yoga Classes</span>
                  <span className="font-bold text-gray-900">85% full</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">Strength Training</span>
                  <span className="font-bold text-gray-900">92% full</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '92%' }} />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">Cardio Sessions</span>
                  <span className="font-bold text-gray-900">78% full</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: '78%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Panel */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-50 rounded-lg">
                <Zap className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Quick Actions</h2>
                <p className="text-sm text-gray-600">Manage schedule efficiently</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <CalendarPlus className="w-6 h-6 text-blue-500 mb-2" />
              <span className="text-sm font-medium text-gray-900">Add Class</span>
              <span className="text-xs text-gray-600">New session</span>
            </button>
            
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors">
              <Copy className="w-6 h-6 text-green-500 mb-2" />
              <span className="text-sm font-medium text-gray-900">Duplicate</span>
              <span className="text-xs text-gray-600">Copy schedule</span>
            </button>
            
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors">
              <Bell className="w-6 h-6 text-purple-500 mb-2" />
              <span className="text-sm font-medium text-gray-900">Reminders</span>
              <span className="text-xs text-gray-600">Send alerts</span>
            </button>
            
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors">
              <FileCheck className="w-6 h-6 text-orange-500 mb-2" />
              <span className="text-sm font-medium text-gray-900">Reports</span>
              <span className="text-xs text-gray-600">Generate</span>
            </button>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">Need help?</div>
                <div className="text-xs text-gray-600">Schedule assistance</div>
              </div>
              <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-700">Active: {classes.filter(c => c.status === 'active').length}</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-gray-700">Waitlist: {classes.reduce((sum, c) => sum + c.waitlist, 0)}</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-gray-700">Total Capacity: {classes.reduce((sum, c) => sum + c.capacity, 0)}</span>
            </div>
          </div>
          <div className="text-gray-600">
            Last updated: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>

      {/* Enhanced Class Details Modal */}
      {selectedClass && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 ${selectedClass.bgColor} ${selectedClass.color} border rounded-lg`}>
                    {(() => {
                      const classType = getClassType(selectedClass.type);
                      const Icon = classType.icon;
                      return <Icon className="w-6 h-6" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedClass.name}</h3>
                    <p className="text-sm text-gray-600">{selectedClass.startTime} - {selectedClass.endTime}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedClass(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">Trainer</div>
                  <div className="flex items-center">
                    <div className={`w-10 h-10 ${getTrainer(selectedClass.trainerId).bgColor} rounded-full flex items-center justify-center mr-3`}>
                      <span className="font-bold">{getTrainer(selectedClass.trainerId).name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{getTrainer(selectedClass.trainerId).name}</div>
                      <div className="text-sm text-gray-600">{getTrainer(selectedClass.trainerId).specialization}</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">Room</div>
                  <div className="font-bold text-gray-900">{getRoom(selectedClass.roomId).name}</div>
                  <div className="text-sm text-gray-600">Capacity: {getRoom(selectedClass.roomId).capacity}</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="text-sm text-gray-600">Enrollment</div>
                  <div className="text-2xl font-bold text-gray-900">{selectedClass.enrolled}/{selectedClass.capacity}</div>
                  <div className="text-xs text-green-600 mt-1">
                    {(selectedClass.enrolled / selectedClass.capacity * 100).toFixed(1)}% full
                  </div>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="text-sm text-gray-600">Waitlist</div>
                  <div className="text-2xl font-bold text-gray-900">{selectedClass.waitlist}</div>
                  <div className="text-xs text-yellow-600 mt-1">Pending</div>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="text-sm text-gray-600">Popularity</div>
                  <div className="text-2xl font-bold text-gray-900">{selectedClass.popularity}%</div>
                  <div className="text-xs text-blue-600 mt-1">High demand</div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-700 mb-3">Class Details</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium text-gray-900">{selectedClass.duration} minutes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium text-gray-900">{selectedClass.difficulty}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Equipment Required:</span>
                    <span className="font-medium text-gray-900">{selectedClass.equipmentRequired.join(', ')}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                <button className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  Edit
                </button>
                <button className="px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Manage Attendance
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Class Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CalendarPlus className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-bold text-gray-900">Schedule New Class</h3>
                </div>
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Add Class Form */}
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Class Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter class name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Class Type</label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                    {classTypes.map(type => {
                      const Icon = type.icon;
                      return (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Trainer</label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                    {trainers.map(trainer => (
                      <option key={trainer.id} value={trainer.id}>{trainer.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                  <input
                    type="time"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                    <option value="120">120 minutes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Room</label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                    {rooms.map(room => (
                      <option key={room.id} value={room.id}>{room.name} ({room.capacity})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Capacity</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Maximum participants"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Schedule Class
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassSchedule;