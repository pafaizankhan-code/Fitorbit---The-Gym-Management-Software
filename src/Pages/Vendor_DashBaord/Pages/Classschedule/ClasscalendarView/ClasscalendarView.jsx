import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Grid,
  List,
  Plus,
  Filter,
  Search,
  X,
  Clock,
  Users,
  MapPin,
  User,
  Edit,
  Trash2,
  Copy,
  MoreVertical,
  Target,
  Zap,
  Music,
  Sun,
  Award,
  Dumbbell,
  BookOpen,
  Activity,
  Eye,
  ExternalLink,
  ArrowUpRight,
  CalendarDays,
  Clock as ClockIcon,
  Check,
  AlertCircle,
  Star,
  Heart,
  Lock,
  Unlock,
  RefreshCw,
  Bell,
  BellOff,
  Download,
  Printer,
  Share2,
  MessageSquare,
  Mail,
  Phone,
  Building,
  Tag,
  TrendingUp,
  BarChart3,
  UserPlus,
  Award as AwardIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ClassCalendarView = () => {
  // State Management
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month'); // 'day', 'week', 'month'
  const [selectedClass, setSelectedClass] = useState(null);
  const [showClassDetails, setShowClassDetails] = useState(false);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [dragOverClass, setDragOverClass] = useState(null);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    type: [],
    instructor: [],
    branch: [],
    difficulty: []
  });
  const [timeRange, setTimeRange] = useState({ start: '06:00', end: '22:00' });

  // Calendar ref for drag and drop
  const calendarRef = useRef(null);

  // Mock Classes Data
  const [classes, setClasses] = useState([
    {
      id: 1,
      className: "Morning Yoga Flow",
      type: "yoga",
      instructor: "Priya Sharma",
      date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 7, 0),
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
      color: "bg-blue-500",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      description: "Gentle morning yoga session to start your day with energy and focus",
      equipment: "Yoga mat, blocks",
      recurring: "Weekly",
      price: "₹500",
      rating: 4.8,
      tags: ["Morning", "Beginner", "Flexibility"],
      participants: [],
      notes: "Perfect for beginners. Focus on breathing and basic poses."
    },
    {
      id: 2,
      className: "HIIT Burn",
      type: "hiit",
      instructor: "Rohan Singh",
      date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 8, 30),
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
      color: "bg-red-500",
      borderColor: "border-red-200",
      textColor: "text-red-700",
      description: "High intensity interval training for maximum calorie burn",
      equipment: "Dumbbells, kettlebells, mats",
      recurring: "Daily",
      price: "₹600",
      rating: 4.9,
      tags: ["High Intensity", "Cardio", "Weight Loss"],
      participants: [],
      notes: "Not suitable for beginners. Bring water and towel."
    },
    {
      id: 3,
      className: "Powerlifting 101",
      type: "strength",
      instructor: "Amit Verma",
      date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1, 10, 0),
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
      color: "bg-purple-500",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
      description: "Learn proper powerlifting techniques and form",
      equipment: "Barbells, racks, plates",
      recurring: "Weekly",
      price: "₹800",
      rating: 4.7,
      tags: ["Strength", "Technique", "Coaching"],
      participants: [],
      notes: "Focus on squat, bench press, and deadlift form."
    },
    {
      id: 4,
      className: "Zumba Party",
      type: "dance",
      instructor: "Meera Nair",
      date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1, 17, 0),
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
      color: "bg-pink-500",
      borderColor: "border-pink-200",
      textColor: "text-pink-700",
      description: "Fun dance workout with Latin rhythms",
      equipment: "None required",
      recurring: "Daily",
      price: "₹400",
      rating: 4.9,
      tags: ["Dance", "Fun", "Cardio"],
      participants: [],
      notes: "Wear comfortable clothes and shoes. All ages welcome."
    },
    {
      id: 5,
      className: "Pilates Core",
      type: "pilates",
      instructor: "Ananya Das",
      date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 2, 18, 30),
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
      color: "bg-green-500",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      description: "Core strengthening and posture improvement",
      equipment: "Reformers, mats, balls",
      recurring: "Weekly",
      price: "₹700",
      rating: 4.6,
      tags: ["Core", "Posture", "Low Impact"],
      participants: [],
      notes: "Focus on controlled movements and breathing."
    },
    {
      id: 6,
      className: "Spin & Burn",
      type: "cycling",
      instructor: "Rajesh Kumar",
      date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 2, 6, 0),
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
      color: "bg-orange-500",
      borderColor: "border-orange-200",
      textColor: "text-orange-700",
      description: "High energy indoor cycling with motivating music",
      equipment: "Spin bikes, towels",
      recurring: "Daily",
      price: "₹550",
      rating: 4.8,
      tags: ["Cycling", "High Energy", "Morning"],
      participants: [],
      notes: "Bring water bottle. Cycling shoes recommended."
    },
    {
      id: 7,
      className: "Meditation & Mindfulness",
      type: "meditation",
      instructor: "Gaurav Sharma",
      date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3, 19, 0),
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
      color: "bg-indigo-500",
      borderColor: "border-indigo-200",
      textColor: "text-indigo-700",
      description: "Guided meditation for stress relief and focus",
      equipment: "Mats, cushions",
      recurring: "Weekly",
      price: "₹300",
      rating: 4.9,
      tags: ["Meditation", "Stress Relief", "Mindfulness"],
      participants: [],
      notes: "Wear comfortable clothes. All levels welcome."
    },
    {
      id: 8,
      className: "Boxing Basics",
      type: "martial-arts",
      instructor: "Vikram Singh",
      date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3, 17, 30),
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
      color: "bg-gray-500",
      borderColor: "border-gray-200",
      textColor: "text-gray-700",
      description: "Learn basic boxing techniques and combinations",
      equipment: "Gloves, pads, bags",
      recurring: "Weekly",
      price: "₹650",
      rating: 4.7,
      tags: ["Boxing", "Cardio", "Self Defense"],
      participants: [],
      notes: "Gloves provided. Wrap your hands before class."
    }
  ]);

  // Filter options
  const typeOptions = [
    { id: 'yoga', label: 'Yoga', count: 1, color: 'bg-blue-500', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'hiit', label: 'HIIT', count: 1, color: 'bg-red-500', icon: <Activity className="w-4 h-4" /> },
    { id: 'strength', label: 'Strength', count: 1, color: 'bg-purple-500', icon: <Dumbbell className="w-4 h-4" /> },
    { id: 'dance', label: 'Dance', count: 1, color: 'bg-pink-500', icon: <Music className="w-4 h-4" /> },
    { id: 'pilates', label: 'Pilates', count: 1, color: 'bg-green-500', icon: <Target className="w-4 h-4" /> },
    { id: 'cycling', label: 'Cycling', count: 1, color: 'bg-orange-500', icon: <Zap className="w-4 h-4" /> },
    { id: 'meditation', label: 'Meditation', count: 1, color: 'bg-indigo-500', icon: <Sun className="w-4 h-4" /> },
    { id: 'martial-arts', label: 'Martial Arts', count: 1, color: 'bg-gray-500', icon: <Award className="w-4 h-4" /> }
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

  const branchOptions = [
    { id: 'mumbai-central', label: 'Mumbai Central', count: 3 },
    { id: 'andheri-west', label: 'Andheri West', count: 3 },
    { id: 'bandra', label: 'Bandra', count: 2 }
  ];

  const difficultyOptions = [
    { id: 'beginner', label: 'Beginner', count: 2 },
    { id: 'intermediate', label: 'Intermediate', count: 2 },
    { id: 'advanced', label: 'Advanced', count: 2 },
    { id: 'all-levels', label: 'All Levels', count: 2 }
  ];

  // Calendar navigation
  const navigateToPrevious = () => {
    const newDate = new Date(currentDate);
    if (viewMode === 'day') {
      newDate.setDate(newDate.getDate() - 1);
    } else if (viewMode === 'week') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setCurrentDate(newDate);
  };

  const navigateToNext = () => {
    const newDate = new Date(currentDate);
    if (viewMode === 'day') {
      newDate.setDate(newDate.getDate() + 1);
    } else if (viewMode === 'week') {
      newDate.setDate(newDate.getDate() + 7);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const navigateToToday = () => {
    setCurrentDate(new Date());
  };

  // Get days in month for calendar
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    
    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDay - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, prevMonthLastDay - i);
      days.push({
        date,
        isCurrentMonth: false,
        isToday: false,
        classes: []
      });
    }

    // Current month days
    const today = new Date();
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isToday = date.getDate() === today.getDate() && 
                     date.getMonth() === today.getMonth() && 
                     date.getFullYear() === today.getFullYear();
      
      // Get classes for this day
      const dayClasses = classes.filter(cls => {
        const classDate = cls.date;
        return classDate.getDate() === date.getDate() && 
               classDate.getMonth() === date.getMonth() && 
               classDate.getFullYear() === date.getFullYear();
      });

      days.push({
        date,
        isCurrentMonth: true,
        isToday,
        classes: dayClasses
      });
    }

    // Next month days
    const totalCells = 42; // 6 weeks
    const remainingCells = totalCells - days.length;
    for (let i = 1; i <= remainingCells; i++) {
      const date = new Date(year, month + 1, i);
      days.push({
        date,
        isCurrentMonth: false,
        isToday: false,
        classes: []
      });
    }

    return days;
  };

  // Get week days for week view
  const getWeekDays = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + i);
      
      const isToday = date.toDateString() === new Date().toDateString();
      
      // Get classes for this day
      const dayClasses = classes.filter(cls => {
        const classDate = cls.date;
        return classDate.getDate() === date.getDate() && 
               classDate.getMonth() === date.getMonth() && 
               classDate.getFullYear() === date.getFullYear();
      });

      weekDays.push({
        date,
        isToday,
        classes: dayClasses
      });
    }
    
    return weekDays;
  };

  // Get day view data
  const getDayData = () => {
    const dayClasses = classes.filter(cls => {
      const classDate = cls.date;
      return classDate.getDate() === currentDate.getDate() && 
             classDate.getMonth() === currentDate.getMonth() && 
             classDate.getFullYear() === currentDate.getFullYear();
    });

    return dayClasses;
  };

  // Format date helpers
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric'
    });
  };

  const formatMonthYear = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  // Get class icon
  const getClassIcon = (type) => {
    switch(type) {
      case 'yoga': return <BookOpen className="w-4 h-4" />;
      case 'hiit': return <Activity className="w-4 h-4" />;
      case 'strength': return <Dumbbell className="w-4 h-4" />;
      case 'dance': return <Music className="w-4 h-4" />;
      case 'pilates': return <Target className="w-4 h-4" />;
      case 'cycling': return <Zap className="w-4 h-4" />;
      case 'meditation': return <Sun className="w-4 h-4" />;
      case 'martial-arts': return <Award className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  // Get class type label
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

  // Filter classes
  const filteredClasses = useMemo(() => {
    let filtered = [...classes];

    if (searchQuery) {
      filtered = filtered.filter(cls => 
        cls.className.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.instructor.toLowerCase().includes(searchQuery.toLowerCase())
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

    if (activeFilters.branch.length > 0) {
      filtered = filtered.filter(cls => 
        activeFilters.branch.includes(cls.branch.toLowerCase().replace(/\s+/g, '-'))
      );
    }

    if (activeFilters.difficulty.length > 0) {
      filtered = filtered.filter(cls => 
        activeFilters.difficulty.includes(cls.difficulty.toLowerCase())
      );
    }

    return filtered;
  }, [classes, searchQuery, activeFilters]);

  // Handle drag and drop
  const handleDragStart = (e, classId) => {
    e.dataTransfer.setData('classId', classId);
  };

  const handleDragOver = (e, date) => {
    e.preventDefault();
    setDragOverClass(date);
  };

  const handleDrop = (e, targetDate) => {
    e.preventDefault();
    const classId = e.dataTransfer.getData('classId');
    const classToUpdate = classes.find(c => c.id === parseInt(classId));
    
    if (classToUpdate) {
      const newDate = new Date(targetDate);
      newDate.setHours(classToUpdate.date.getHours(), classToUpdate.date.getMinutes());
      
      setClasses(prev => prev.map(cls => 
        cls.id === parseInt(classId) 
          ? { ...cls, date: newDate }
          : cls
      ));
    }
    setDragOverClass(null);
  };

  // Generate time slots for day/week view
  const timeSlots = useMemo(() => {
    const slots = [];
    const [startHour] = timeRange.start.split(':').map(Number);
    const [endHour] = timeRange.end.split(':').map(Number);
    
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(time);
      }
    }
    return slots;
  }, [timeRange]);

  // Get class position and height for timeline view
  const getClassPosition = (classItem) => {
    const start = classItem.date;
    const [hours, minutes] = classItem.startTime.split(':').map(Number);
    const [endHours, endMinutes] = classItem.endTime.split(':').map(Number);
    
    const startMinutes = hours * 60 + minutes;
    const durationMinutes = endMinutes - startMinutes;
    
    const startTime = timeRange.start;
    const [startHour] = startTime.split(':').map(Number);
    const timelineStartMinutes = startHour * 60;
    
    const position = ((startMinutes - timelineStartMinutes) / 60) * 80; // 80px per hour
    const height = (durationMinutes / 60) * 80;
    
    return { position, height };
  };

  // Render Month View
  const renderMonthView = () => {
    const days = getDaysInMonth();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    return (
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Day headers */}
        <div className="grid grid-cols-7 border-b border-gray-200">
          {dayNames.map(day => (
            <div key={day} className="py-3 text-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 auto-rows-fr min-h-[600px]">
          {days.map((day, index) => (
            <div 
              key={index}
              className={`border-r border-b border-gray-200 p-2 min-h-[120px] relative transition-all duration-200 ${
                !day.isCurrentMonth ? 'bg-gray-50' : ''
              } ${day.isToday ? 'bg-blue-50' : ''} ${
                dragOverClass && 
                dragOverClass.toDateString() === day.date.toDateString() 
                  ? 'bg-blue-100 ring-2 ring-blue-300' 
                  : ''
              }`}
              onDragOver={(e) => handleDragOver(e, day.date)}
              onDrop={(e) => handleDrop(e, day.date)}
            >
              {/* Date header */}
              <div className="flex justify-between items-center mb-1">
                <span className={`text-sm font-medium ${
                  day.isCurrentMonth 
                    ? day.isToday 
                      ? 'text-blue-600' 
                      : 'text-gray-900'
                    : 'text-gray-400'
                }`}>
                  {day.date.getDate()}
                </span>
                {day.isToday && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                )}
              </div>

              {/* Classes for the day */}
              <div className="space-y-1 max-h-[calc(120px-30px)] overflow-y-auto">
                {day.classes.slice(0, 3).map(cls => (
                  <div 
                    key={cls.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, cls.id)}
                    onClick={() => {
                      setSelectedClass(cls);
                      setShowClassDetails(true);
                    }}
                    className={`p-2 rounded-lg text-xs cursor-pointer transition-all hover:scale-[1.02] ${cls.color} text-white border ${cls.borderColor} shadow-sm`}
                  >
                    <div className="font-medium truncate">{cls.className}</div>
                    <div className="flex items-center mt-1 opacity-90">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{cls.startTime}</span>
                    </div>
                  </div>
                ))}
                
                {day.classes.length > 3 && (
                  <div className="text-xs text-gray-500 font-medium px-2 py-1 bg-gray-100 rounded">
                    +{day.classes.length - 3} more
                  </div>
                )}
              </div>

              {/* Add class button */}
              <button
                onClick={() => {
                  setSelectedClass({
                    date: day.date,
                    startTime: '09:00',
                    endTime: '10:00'
                  });
                  setShowAddEvent(true);
                }}
                className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render Week View
  const renderWeekView = () => {
    const weekDays = getWeekDays();
    
    return (
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Time column and days header */}
        <div className="flex border-b border-gray-200">
          {/* Time column */}
          <div className="w-20 flex-shrink-0 border-r border-gray-200">
            <div className="h-12 border-b border-gray-200"></div>
            <div className="py-2">
              {timeSlots.map((time, index) => (
                <div 
                  key={index} 
                  className="h-20 text-xs text-gray-500 px-2 border-b border-gray-100"
                >
                  {time}
                </div>
              ))}
            </div>
          </div>

          {/* Days header */}
          <div className="flex-1 grid grid-cols-7">
            {weekDays.map(day => (
              <div 
                key={day.date.toISOString()} 
                className={`text-center py-3 border-r border-gray-200 ${day.isToday ? 'bg-blue-50' : ''}`}
              >
                <div className="text-sm font-medium text-gray-500">
                  {day.date.toLocaleDateString('en-US', { weekday: 'short' })}
                </div>
                <div className={`text-lg font-bold mt-1 ${day.isToday ? 'text-blue-600' : 'text-gray-900'}`}>
                  {day.date.getDate()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Time slots grid */}
        <div className="flex">
          {/* Time labels */}
          <div className="w-20 flex-shrink-0 border-r border-gray-200">
            {timeSlots.map((time, index) => (
              <div 
                key={index} 
                className="h-20 border-b border-gray-100 relative"
              >
                <div className="absolute -top-2 right-2 text-xs text-gray-400">
                  {time}
                </div>
              </div>
            ))}
          </div>

          {/* Days grid */}
          <div className="flex-1 grid grid-cols-7 relative">
            {/* Grid lines */}
            {timeSlots.map((time, index) => (
              <div 
                key={`line-${index}`}
                className="absolute left-0 right-0 h-20 border-b border-gray-100"
                style={{ top: `${index * 80}px` }}
              ></div>
            ))}

            {/* Day columns */}
            {weekDays.map((day, dayIndex) => (
              <div 
                key={`col-${dayIndex}`}
                className={`relative border-r border-gray-200 ${day.isToday ? 'bg-blue-50/30' : ''}`}
                onDragOver={(e) => handleDragOver(e, day.date)}
                onDrop={(e) => handleDrop(e, day.date)}
              >
                {/* Classes */}
                {day.classes.map(cls => {
                  const { position, height } = getClassPosition(cls);
                  return (
                    <div
                      key={cls.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, cls.id)}
                      onClick={() => {
                        setSelectedClass(cls);
                        setShowClassDetails(true);
                      }}
                      className={`absolute left-1 right-1 rounded-lg p-2 cursor-pointer transition-all hover:scale-[1.02] ${cls.color} text-white border ${cls.borderColor} shadow-sm`}
                      style={{
                        top: `${position}px`,
                        height: `${height}px`
                      }}
                    >
                      <div className="font-medium text-sm truncate">{cls.className}</div>
                      <div className="text-xs opacity-90 mt-1 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {cls.startTime} - {cls.endTime}
                      </div>
                      <div className="text-xs opacity-90 mt-1 truncate">
                        {cls.instructor}
                      </div>
                    </div>
                  );
                })}

                {/* Add class button */}
                <button
                  onClick={() => {
                    setSelectedClass({
                      date: day.date,
                      startTime: '12:00',
                      endTime: '13:00'
                    });
                    setShowAddEvent(true);
                  }}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors opacity-0 hover:opacity-100"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Render Day View
  const renderDayView = () => {
    const dayClasses = getDayData();
    
    return (
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Day header */}
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {formatDate(currentDate)}
              </h2>
              <p className="text-gray-600">{formatMonthYear(currentDate)}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                {dayClasses.length} classes scheduled
              </div>
             <Link to={'/ultimate-control/class-schedule/add'}>
              <button
                onClick={() => {
                  setSelectedClass({
                    date: currentDate,
                    startTime: '12:00',
                    endTime: '13:00'
                  });
                  setShowAddEvent(true);
                }}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
                <span>Add Class</span>
              </button>
             </Link>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex">
          {/* Time column */}
          <div className="w-20 flex-shrink-0 border-r border-gray-200">
            {timeSlots.map((time, index) => (
              <div 
                key={index} 
                className="h-20 text-xs text-gray-500 px-2 border-b border-gray-100 flex items-start pt-2"
              >
                {time}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 relative min-h-[800px]">
            {/* Grid lines */}
            {timeSlots.map((time, index) => (
              <div 
                key={`line-${index}`}
                className="absolute left-0 right-0 h-20 border-b border-gray-100"
                style={{ top: `${index * 80}px` }}
              ></div>
            ))}

            {/* Current time indicator */}
            {currentDate.toDateString() === new Date().toDateString() && (
              <div 
                className="absolute left-0 right-0 h-0.5 bg-red-500 z-10"
                style={{ 
                  top: `${(new Date().getHours() * 60 + new Date().getMinutes() - 
                    parseInt(timeRange.start.split(':')[0]) * 60) * 80 / 60}px` 
                }}
              >
                <div className="w-3 h-3 bg-red-500 rounded-full absolute -left-1 -top-1.5"></div>
              </div>
            )}

            {/* Classes */}
            {dayClasses.map(cls => {
              const { position, height } = getClassPosition(cls);
              return (
                <div
                  key={cls.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, cls.id)}
                  onClick={() => {
                    setSelectedClass(cls);
                    setShowClassDetails(true);
                  }}
                  className={`absolute left-4 right-4 rounded-xl p-4 cursor-pointer transition-all hover:scale-[1.02] ${cls.color} text-white border ${cls.borderColor} shadow-lg`}
                  style={{
                    top: `${position}px`,
                    height: `${height}px`
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-bold text-lg">{cls.className}</div>
                      <div className="text-sm opacity-90 mt-2 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {cls.startTime} - {cls.endTime}
                      </div>
                      <div className="text-sm opacity-90 mt-1 flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {cls.instructor}
                      </div>
                      <div className="text-sm opacity-90 mt-1 flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {cls.room}, {cls.branch}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {cls.enrolled}/{cls.capacity}
                      </div>
                      {cls.status === 'full' && (
                        <div className="bg-red-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                          Full
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Empty state */}
            {dayClasses.length === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                <CalendarIcon className="w-16 h-16 mb-4" />
                <p className="text-lg font-medium">No classes scheduled</p>
                <p className="mt-2">Add a class to get started</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-1 md:p-3">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl font-bold text-gray-900">Class Calendar</h1>
            <p className="text-gray-600 mt-1">Visual schedule of all fitness classes</p>
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

        {/* Calendar Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center space-x-3">
            <button
              onClick={navigateToToday}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Today
            </button>
            <div className="flex items-center space-x-2">
              <button
                onClick={navigateToPrevious}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

               <h2 className="text-xl font-bold text-gray-900 ml-4">
              {viewMode === 'day' 
                ? formatDate(currentDate)
                : viewMode === 'week'
                ? `${formatDate(getWeekDays()[0].date)} - ${formatDate(getWeekDays()[6].date)}`
                : formatMonthYear(currentDate)
              }
            </h2>
            
              <button
                onClick={navigateToNext}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
           
          </div>

          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => setViewMode('day')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'day'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Day
            </button>
            <button
              onClick={() => setViewMode('week')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'week'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setViewMode('month')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'month'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Month
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search classes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setFilterMenuOpen(!filterMenuOpen)}
                className="flex items-center space-x-2 px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                <Filter className="w-4 h-4 text-gray-600" />
                <span>Filters</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              
              {filterMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Class Type</h4>
                      <div className="space-y-2">
                        {typeOptions.map(option => (
                          <label key={option.id} className="flex items-center space-x-2 cursor-pointer">
                            <input 
                              type="checkbox" 
                              checked={activeFilters.type.includes(option.id)}
                              onChange={() => {
                                setActiveFilters(prev => ({
                                  ...prev,
                                  type: prev.type.includes(option.id)
                                    ? prev.type.filter(t => t !== option.id)
                                    : [...prev.type, option.id]
                                }));
                              }}
                              className="rounded text-blue-600 w-4 h-4"
                            />
                            <div className="flex items-center space-x-2">
                              <div className={`w-3 h-3 rounded ${option.color}`}></div>
                              <span className="text-sm text-gray-700">{option.label}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
                    <button 
                      onClick={() => setActiveFilters({
                        type: [],
                        instructor: [],
                        branch: [],
                        difficulty: []
                      })}
                      className="text-sm text-gray-600 hover:text-gray-800"
                    >
                      Clear All
                    </button>
                    <button 
                      onClick={() => setFilterMenuOpen(false)}
                      className="text-sm bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-sm font-medium text-gray-700">Legend:</span>
          {typeOptions.map(type => (
            <div key={type.id} className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded ${type.color}`}></div>
              <span className="text-sm text-gray-600">{type.label}</span>
            </div>
          ))}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm text-gray-600">Current Time</span>
          </div>
        </div>
      </div>

      {/* Calendar View */}
      <div ref={calendarRef}>
        {viewMode === 'month' && renderMonthView()}
        {viewMode === 'week' && renderWeekView()}
        {viewMode === 'day' && renderDayView()}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Classes</p>
              <p className="text-2xl font-bold text-gray-900">{classes.length}</p>
            </div>
            <CalendarIcon className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Today</p>
              <p className="text-2xl font-bold text-gray-900">
                {classes.filter(c => 
                  c.date.toDateString() === new Date().toDateString()
                ).length}
              </p>
            </div>
            <CalendarDays className="w-8 h-8 text-green-400" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">This Week</p>
              <p className="text-2xl font-bold text-gray-900">
                {classes.filter(c => {
                  const weekStart = new Date();
                  weekStart.setDate(weekStart.getDate() - weekStart.getDay());
                  const weekEnd = new Date(weekStart);
                  weekEnd.setDate(weekEnd.getDate() + 6);
                  return c.date >= weekStart && c.date <= weekEnd;
                }).length}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-400" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Full Classes</p>
              <p className="text-2xl font-bold text-gray-900">
                {classes.filter(c => c.status === 'full').length}
              </p>
            </div>
            <Users className="w-8 h-8 text-red-400" />
          </div>
        </div>
      </div>

      {/* Class Details Modal */}
      {showClassDetails && selectedClass && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedClass.className}</h2>
                  <p className="text-gray-600 mt-1">Class Details</p>
                </div>
                <button
                  onClick={() => setShowClassDetails(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {/* Class info */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Time & Date</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-900">
                        <CalendarIcon className="w-4 h-4 mr-2 text-gray-400" />
                        {formatDate(selectedClass.date)}
                      </div>
                      <div className="flex items-center text-gray-900">
                        <Clock className="w-4 h-4 mr-2 text-gray-400" />
                        {selectedClass.startTime} - {selectedClass.endTime}
                      </div>
                      <div className="flex items-center text-gray-900">
                        <RefreshCw className="w-4 h-4 mr-2 text-gray-400" />
                        {selectedClass.recurring}
                      </div>
                    </div>
                  </div>

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
                      <div className="flex items-center text-gray-900">
                        <User className="w-4 h-4 mr-2 text-gray-400" />
                        {selectedClass.instructor}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="flex items-center space-x-3">
                  <Link to={`/ultimate-control/classes/edit/${selectedClass.id}`}>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      <Edit className="w-4 h-4" />
                      <span>Edit Class</span>
                    </button>
                  </Link>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                    <Copy className="w-4 h-4" />
                    <span>Duplicate</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200">
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

export default ClassCalendarView;