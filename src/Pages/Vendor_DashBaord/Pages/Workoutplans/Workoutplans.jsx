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
  Copy,
  PlayCircle,
  PauseCircle,
  Timer,
  Dumbbell,
  Target,
  TrendingUp,
  Users,
  Calendar,
  ChevronDown,
  MoreVertical,
  X,
  CheckCircle,
  Clock,
  Star,
  Zap,
  Activity,
  Heart,
  Flame,
  Shield,
  Award,
  Target as TargetIcon,
  BarChart3,
  Bell,
  BookOpen,
  FileText,
  User,
  IndianRupee,
  Tag,
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  Share2,
  RefreshCw,
  ExternalLink,
  Upload,
  Save
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkoutPlans = () => {
  // State Management
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [activeFilters, setActiveFilters] = useState({
    category: [],
    difficulty: [],
    duration: [],
    goal: [],
    status: []
  });
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPlanDetails, setShowPlanDetails] = useState(false);
  const [showAddPlan, setShowAddPlan] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [showBulkActions, setShowBulkActions] = useState(false);
  
  // Workout Plans Data
  const [workoutPlans, setWorkoutPlans] = useState([
    {
      id: 1,
      name: "Beginner Burn",
      description: "Full-body workout plan for weight loss beginners",
      category: "Weight Loss",
      difficulty: "Beginner",
      duration: "8 weeks",
      durationWeeks: 8,
      sessionsPerWeek: 4,
      sessionDuration: "45-60 mins",
      goal: "Fat Loss",
      status: "active",
      createdBy: "Coach Arjun",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-28",
      rating: 4.5,
      totalUsers: 120,
      successRate: "85%",
      price: "₹1,499",
      isPremium: false,
      tags: ["Full Body", "Cardio", "Beginner"],
      equipment: ["Dumbbells", "Resistance Bands", "Yoga Mat"],
      exercisesPerSession: 8,
      restDays: 3,
      weeklyFocus: ["Cardio", "Strength", "Recovery"],
      sampleWorkout: {
        day1: "Full Body Strength",
        day2: "Cardio HIIT",
        day3: "Active Recovery",
        day4: "Lower Body Focus"
      },
      features: ["Video Demonstrations", "Progress Tracker", "Nutrition Tips"],
      caloriesBurned: "300-400 per session"
    },
    {
      id: 2,
      name: "Muscle Max Pro",
      description: "Advanced muscle building split routine",
      category: "Bodybuilding",
      difficulty: "Advanced",
      duration: "12 weeks",
      durationWeeks: 12,
      sessionsPerWeek: 6,
      sessionDuration: "75-90 mins",
      goal: "Muscle Gain",
      status: "active",
      createdBy: "Professional Trainer",
      createdAt: "2024-01-10",
      updatedAt: "2024-01-25",
      rating: 4.9,
      totalUsers: 89,
      successRate: "92%",
      price: "₹2,999",
      isPremium: true,
      tags: ["Push Pull Legs", "Hypertrophy", "Strength"],
      equipment: ["Barbell", "Dumbbells", "Cable Machine", "Bench"],
      exercisesPerSession: 12,
      restDays: 1,
      weeklyFocus: ["Chest/Back", "Arms/Shoulders", "Legs"],
      sampleWorkout: {
        day1: "Chest & Triceps",
        day2: "Back & Biceps",
        day3: "Legs",
        day4: "Shoulders",
        day5: "Arms",
        day6: "Weak Points"
      },
      features: ["Customizable Split", "Progressive Overload", "Supplement Guide"],
      caloriesBurned: "500-600 per session"
    },
    {
      id: 3,
      name: "Home Fit Revolution",
      description: "No-equipment home workout plan",
      category: "Home Workout",
      difficulty: "Intermediate",
      duration: "6 weeks",
      durationWeeks: 6,
      sessionsPerWeek: 5,
      sessionDuration: "30-45 mins",
      goal: "General Fitness",
      status: "active",
      createdBy: "Home Fitness Expert",
      createdAt: "2024-01-20",
      updatedAt: "2024-01-27",
      rating: 4.6,
      totalUsers: 210,
      successRate: "88%",
      price: "₹999",
      isPremium: false,
      tags: ["No Equipment", "Bodyweight", "Home"],
      equipment: ["None", "Optional: Mat"],
      exercisesPerSession: 10,
      restDays: 2,
      weeklyFocus: ["HIIT", "Strength", "Mobility"],
      sampleWorkout: {
        day1: "Upper Body HIIT",
        day2: "Lower Body Strength",
        day3: "Core & Cardio",
        day4: "Full Body",
        day5: "Active Recovery"
      },
      features: ["No Equipment Needed", "Minimal Space", "Quick Workouts"],
      caloriesBurned: "250-350 per session"
    },
    {
      id: 4,
      name: "Senior Strength",
      description: "Safe strength training for seniors",
      category: "Senior Fitness",
      difficulty: "Beginner",
      duration: "Ongoing",
      durationWeeks: 0,
      sessionsPerWeek: 3,
      sessionDuration: "40-50 mins",
      goal: "Healthy Aging",
      status: "active",
      createdBy: "Geriatric Specialist",
      createdAt: "2023-12-05",
      updatedAt: "2024-01-30",
      rating: 4.7,
      totalUsers: 156,
      successRate: "94%",
      price: "₹1,299",
      isPremium: false,
      tags: ["Senior", "Low Impact", "Balance"],
      equipment: ["Light Dumbbells", "Resistance Bands", "Chair"],
      exercisesPerSession: 6,
      restDays: 4,
      weeklyFocus: ["Balance", "Strength", "Flexibility"],
      sampleWorkout: {
        day1: "Balance & Core",
        day2: "Upper Body Strength",
        day3: "Lower Body & Flexibility"
      },
      features: ["Safe Exercises", "Fall Prevention", "Joint Care"],
      caloriesBurned: "200-300 per session"
    },
    {
      id: 5,
      name: "Athlete Performance",
      description: "Sports-specific performance training",
      category: "Sports Training",
      difficulty: "Advanced",
      duration: "Seasonal",
      durationWeeks: 16,
      sessionsPerWeek: 5,
      sessionDuration: "90-120 mins",
      goal: "Performance",
      status: "active",
      createdBy: "Sports Coach",
      createdAt: "2024-01-05",
      updatedAt: "2024-01-28",
      rating: 4.8,
      totalUsers: 67,
      successRate: "96%",
      price: "₹3,499",
      isPremium: true,
      tags: ["Athletic", "Explosive", "Endurance"],
      equipment: ["Plyo Box", "Medicine Ball", "Agility Ladder", "Weights"],
      exercisesPerSession: 15,
      restDays: 2,
      weeklyFocus: ["Power", "Speed", "Endurance", "Recovery"],
      sampleWorkout: {
        day1: "Power & Explosiveness",
        day2: "Speed & Agility",
        day3: "Endurance",
        day4: "Strength",
        day5: "Active Recovery"
      },
      features: ["Sport Specific", "Injury Prevention", "Recovery Protocols"],
      caloriesBurned: "600-800 per session"
    },
    {
      id: 6,
      name: "Yoga Flow Mastery",
      description: "Comprehensive yoga practice plan",
      category: "Yoga",
      difficulty: "Intermediate",
      duration: "4 weeks",
      durationWeeks: 4,
      sessionsPerWeek: 6,
      sessionDuration: "60 mins",
      goal: "Flexibility",
      status: "active",
      createdBy: "Yoga Instructor",
      createdAt: "2024-01-12",
      updatedAt: "2024-01-29",
      rating: 4.9,
      totalUsers: 185,
      successRate: "90%",
      price: "₹1,799",
      isPremium: false,
      tags: ["Yoga", "Flexibility", "Mindfulness"],
      equipment: ["Yoga Mat", "Blocks", "Strap"],
      exercisesPerSession: 12,
      restDays: 1,
      weeklyFocus: ["Strength", "Flexibility", "Balance", "Meditation"],
      sampleWorkout: {
        day1: "Hatha Yoga",
        day2: "Vinyasa Flow",
        day3: "Yin Yoga",
        day4: "Power Yoga",
        day5: "Restorative",
        day6: "Meditation"
      },
      features: ["Breathing Techniques", "Meditation Guide", "Pose Library"],
      caloriesBurned: "200-300 per session"
    },
    {
      id: 7,
      name: "Postnatal Recovery",
      description: "Safe workouts for postnatal recovery",
      category: "Postnatal",
      difficulty: "Beginner",
      duration: "12 weeks",
      durationWeeks: 12,
      sessionsPerWeek: 3,
      sessionDuration: "30-40 mins",
      goal: "Rehabilitation",
      status: "active",
      createdBy: "Women's Health Specialist",
      createdAt: "2023-11-20",
      updatedAt: "2024-01-15",
      rating: 4.4,
      totalUsers: 92,
      successRate: "87%",
      price: "₹1,899",
      isPremium: true,
      tags: ["Postnatal", "Core Recovery", "Safe"],
      equipment: ["Mat", "Light Weights", "Resistance Band"],
      exercisesPerSession: 8,
      restDays: 4,
      weeklyFocus: ["Core Recovery", "Pelvic Floor", "Gentle Cardio"],
      sampleWorkout: {
        day1: "Core & Pelvic Floor",
        day2: "Upper Body Strength",
        day3: "Gentle Cardio"
      },
      features: ["Doctor Approved", "Progressive Plan", "Support Community"],
      caloriesBurned: "150-250 per session"
    },
    {
      id: 8,
      name: "CrossFit Foundation",
      description: "CrossFit fundamentals for beginners",
      category: "CrossFit",
      difficulty: "Intermediate",
      duration: "8 weeks",
      durationWeeks: 8,
      sessionsPerWeek: 4,
      sessionDuration: "60 mins",
      goal: "Strength & Conditioning",
      status: "inactive",
      createdBy: "CrossFit Coach",
      createdAt: "2024-01-08",
      updatedAt: "2024-01-30",
      rating: 4.3,
      totalUsers: 78,
      successRate: "82%",
      price: "₹2,499",
      isPremium: false,
      tags: ["CrossFit", "HIIT", "Functional"],
      equipment: ["Barbell", "Kettlebell", "Rower", "Pull-up Bar"],
      exercisesPerSession: 10,
      restDays: 3,
      weeklyFocus: ["Technique", "Strength", "Conditioning"],
      sampleWorkout: {
        day1: "Strength + WOD",
        day2: "Skill Work",
        day3: "Active Recovery",
        day4: "Metcon"
      },
      features: ["WOD Library", "Movement Standards", "Scaling Options"],
      caloriesBurned: "400-500 per session"
    }
  ]);

  // Filter options
  const categoryOptions = [
    { id: 'weight-loss', label: 'Weight Loss', count: 1 },
    { id: 'bodybuilding', label: 'Bodybuilding', count: 1 },
    { id: 'home-workout', label: 'Home Workout', count: 1 },
    { id: 'senior-fitness', label: 'Senior Fitness', count: 1 },
    { id: 'sports-training', label: 'Sports Training', count: 1 },
    { id: 'yoga', label: 'Yoga', count: 1 },
    { id: 'postnatal', label: 'Postnatal', count: 1 },
    { id: 'crossfit', label: 'CrossFit', count: 1 }
  ];

  const difficultyOptions = [
    { id: 'beginner', label: 'Beginner', count: 3 },
    { id: 'intermediate', label: 'Intermediate', count: 3 },
    { id: 'advanced', label: 'Advanced', count: 2 }
  ];

  const durationOptions = [
    { id: '4-weeks', label: '4 Weeks', count: 1 },
    { id: '6-weeks', label: '6 Weeks', count: 1 },
    { id: '8-weeks', label: '8 Weeks', count: 2 },
    { id: '12-weeks', label: '12 Weeks', count: 2 },
    { id: 'ongoing', label: 'Ongoing', count: 1 },
    { id: 'seasonal', label: 'Seasonal', count: 1 }
  ];

  const goalOptions = [
    { id: 'fat-loss', label: 'Fat Loss', count: 1 },
    { id: 'muscle-gain', label: 'Muscle Gain', count: 1 },
    { id: 'general-fitness', label: 'General Fitness', count: 1 },
    { id: 'healthy-aging', label: 'Healthy Aging', count: 1 },
    { id: 'performance', label: 'Performance', count: 1 },
    { id: 'flexibility', label: 'Flexibility', count: 1 },
    { id: 'rehabilitation', label: 'Rehabilitation', count: 1 },
    { id: 'strength-conditioning', label: 'Strength & Conditioning', count: 1 }
  ];

  const statusOptions = [
    { id: 'active', label: 'Active', count: 7 },
    { id: 'inactive', label: 'Inactive', count: 1 }
  ];

  // Stats calculation
  const stats = useMemo(() => {
    const total = workoutPlans.length;
    const active = workoutPlans.filter(p => p.status === 'active').length;
    const premium = workoutPlans.filter(p => p.isPremium).length;
    
    const totalUsers = workoutPlans.reduce((sum, plan) => sum + plan.totalUsers, 0);
    const avgRating = workoutPlans.reduce((sum, plan) => sum + plan.rating, 0) / total;
    
    const totalSessions = workoutPlans.reduce((sum, plan) => {
      const sessions = plan.sessionsPerWeek * (plan.durationWeeks || 12);
      return sum + (sessions * plan.totalUsers);
    }, 0);

    const avgSuccessRate = workoutPlans.reduce((sum, plan) => {
      const rate = parseInt(plan.successRate);
      return sum + (isNaN(rate) ? 0 : rate);
    }, 0) / total;

    return {
      total,
      active,
      premium,
      totalUsers,
      avgRating: avgRating.toFixed(1),
      totalSessions,
      avgSuccessRate: avgSuccessRate.toFixed(1) + '%'
    };
  }, [workoutPlans]);

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

  // Filter and sort plans
  const filteredAndSortedPlans = useMemo(() => {
    let filtered = [...workoutPlans];

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(plan => 
        plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply category filters
    if (activeFilters.category.length > 0) {
      filtered = filtered.filter(plan => 
        activeFilters.category.includes(plan.category.toLowerCase().replace(' ', '-'))
      );
    }

    // Apply difficulty filters
    if (activeFilters.difficulty.length > 0) {
      filtered = filtered.filter(plan => 
        activeFilters.difficulty.includes(plan.difficulty.toLowerCase())
      );
    }

    // Apply goal filters
    if (activeFilters.goal.length > 0) {
      filtered = filtered.filter(plan => 
        activeFilters.goal.includes(plan.goal.toLowerCase().replace(' ', '-'))
      );
    }

    // Apply status filters
    if (activeFilters.status.length > 0) {
      filtered = filtered.filter(plan => 
        activeFilters.status.includes(plan.status)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        case 'users':
          return b.totalUsers - a.totalUsers;
        case 'price':
          const aPrice = parseInt(a.price.replace('₹', '').replace(',', ''));
          const bPrice = parseInt(b.price.replace('₹', '').replace(',', ''));
          return bPrice - aPrice;
        case 'duration':
          return (a.durationWeeks || 0) - (b.durationWeeks || 0);
        case 'recent':
        default:
          return new Date(b.updatedAt) - new Date(a.updatedAt);
      }
    });

    return filtered;
  }, [workoutPlans, searchQuery, activeFilters, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedPlans.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPlans = filteredAndSortedPlans.slice(startIndex, endIndex);

  // Colors and styles
  const statusColors = {
    active: 'bg-green-100 text-green-800 border border-green-200',
    inactive: 'bg-gray-100 text-gray-800 border border-gray-200'
  };

  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800 border border-green-200',
    Intermediate: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    Advanced: 'bg-red-100 text-red-800 border border-red-200'
  };

  const categoryColors = {
    'Weight Loss': 'bg-blue-100 text-blue-800 border border-blue-200',
    'Bodybuilding': 'bg-purple-100 text-purple-800 border border-purple-200',
    'Home Workout': 'bg-green-100 text-green-800 border border-green-200',
    'Senior Fitness': 'bg-gray-100 text-gray-800 border border-gray-200',
    'Sports Training': 'bg-indigo-100 text-indigo-800 border border-indigo-200',
    'Yoga': 'bg-teal-100 text-teal-800 border border-teal-200',
    'Postnatal': 'bg-pink-100 text-pink-800 border border-pink-200',
    'CrossFit': 'bg-orange-100 text-orange-800 border border-orange-200'
  };

  const goalColors = {
    'Fat Loss': 'bg-blue-100 text-blue-800 border border-blue-200',
    'Muscle Gain': 'bg-purple-100 text-purple-800 border border-purple-200',
    'General Fitness': 'bg-green-100 text-green-800 border border-green-200',
    'Healthy Aging': 'bg-gray-100 text-gray-800 border border-gray-200',
    'Performance': 'bg-indigo-100 text-indigo-800 border border-indigo-200',
    'Flexibility': 'bg-teal-100 text-teal-800 border border-teal-200',
    'Rehabilitation': 'bg-pink-100 text-pink-800 border border-pink-200',
    'Strength & Conditioning': 'bg-orange-100 text-orange-800 border border-orange-200'
  };

  // Helper functions
  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setShowPlanDetails(true);
  };

  const closePlanDetails = () => {
    setShowPlanDetails(false);
    setSelectedPlan(null);
  };

  const togglePlanSelection = (id) => {
    setSelectedPlans(prev => 
      prev.includes(id) 
        ? prev.filter(planId => planId !== id)
        : [...prev, id]
    );
  };

  const selectAllPlans = () => {
    if (selectedPlans.length === currentPlans.length) {
      setSelectedPlans([]);
    } else {
      setSelectedPlans(currentPlans.map(plan => plan.id));
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
      category: [],
      difficulty: [],
      duration: [],
      goal: [],
      status: []
    });
    setSearchQuery('');
  };

  const handleDeletePlan = (id) => {
    if (window.confirm('Are you sure you want to delete this workout plan?')) {
      setWorkoutPlans(prev => prev.filter(plan => plan.id !== id));
      setSelectedPlans(prev => prev.filter(planId => planId !== id));
      if (selectedPlan?.id === id) {
        closePlanDetails();
      }
    }
  };

  const handleBulkDelete = () => {
    if (selectedPlans.length === 0) return;
    
    if (window.confirm(`Are you sure you want to delete ${selectedPlans.length} workout plans?`)) {
      setWorkoutPlans(prev => prev.filter(plan => !selectedPlans.includes(plan.id)));
      setSelectedPlans([]);
      if (selectedPlan && selectedPlans.includes(selectedPlan.id)) {
        closePlanDetails();
      }
    }
  };

  const handleUpdateStatus = (id, newStatus) => {
    setWorkoutPlans(prev => prev.map(plan => 
      plan.id === id ? { ...plan, status: newStatus } : plan
    ));
    if (selectedPlan?.id === id) {
      setSelectedPlan(prev => ({ ...prev, status: newStatus }));
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Category', 'Difficulty', 'Duration', 'Goal', 'Price', 'Rating', 'Users', 'Status'];
    const csvData = filteredAndSortedPlans.map(plan => [
      plan.name,
      plan.category,
      plan.difficulty,
      plan.duration,
      plan.goal,
      plan.price,
      plan.rating,
      plan.totalUsers,
      plan.status
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `workout_plans_${new Date().toISOString().split('T')[0]}.csv`;
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

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Weight Loss': return <Flame className="w-4 h-4" />;
      case 'Bodybuilding': return <Dumbbell className="w-4 h-4" />;
      case 'Home Workout': return <Home className="w-4 h-4" />;
      case 'Senior Fitness': return <User className="w-4 h-4" />;
      case 'Sports Training': return <Zap className="w-4 h-4" />;
      case 'Yoga': return <Heart className="w-4 h-4" />;
      case 'Postnatal': return <Shield className="w-4 h-4" />;
      case 'CrossFit': return <Activity className="w-4 h-4" />;
      default: return <Dumbbell className="w-4 h-4" />;
    }
  };

  // Add missing icon component
  const Home = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-1 md:p-3">
      {/* Header Section */}
      <div className="bg-white rounded-xl md:rounded-2xl border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 md:mb-6">
          <div className="mb-4 lg:mb-0">
            <div className="flex items-center space-x-3 mb-2">
             
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">Workout Plans</h1>
                <p className="text-sm text-gray-600 mt-1">Manage fitness programs for your members</p>
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
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-700">
                  Premium: <span className="font-bold">{stats.premium}</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-700">
                  Users: <span className="font-bold">{stats.totalUsers}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3">
           <Link to={'/ultimate-control/diet-workout/add-workout'}>
            <button 
              onClick={() => setShowAddPlan(true)}
              className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2.5 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="font-medium">Add Plan</span>
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
              placeholder="Search workout plans..."
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
                  {/* Category Filters */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2 text-sm md:text-base">Category</h4>
                    <div className="space-y-1 md:space-y-2">
                      {categoryOptions.map(option => (
                        <label key={option.id} className="flex items-center justify-between cursor-pointer text-sm">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              checked={activeFilters.category.includes(option.id)}
                              onChange={() => toggleFilter('category', option.id)}
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

                  {/* Difficulty Filters */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2 text-sm md:text-base">Difficulty</h4>
                    <div className="space-y-1 md:space-y-2">
                      {difficultyOptions.map(option => (
                        <label key={option.id} className="flex items-center justify-between cursor-pointer text-sm">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              checked={activeFilters.difficulty.includes(option.id)}
                              onChange={() => toggleFilter('difficulty', option.id)}
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
              <option value="rating">Highest Rating</option>
              <option value="users">Most Users</option>
              <option value="price">Price (High-Low)</option>
              <option value="duration">Duration</option>
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
            {activeFilters.category.map(category => (
              <span key={category} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {categoryOptions.find(c => c.id === category)?.label}
                <button onClick={() => toggleFilter('category', category)} className="ml-1">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {activeFilters.difficulty.map(difficulty => (
              <span key={difficulty} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {difficultyOptions.find(d => d.id === difficulty)?.label}
                <button onClick={() => toggleFilter('difficulty', difficulty)} className="ml-1">
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

      {/* Workout Plans Grid/List View */}
      <div className="bg-white rounded-xl md:rounded-2xl border border-gray-200 overflow-hidden mb-6">
        {/* Table Header */}
        <div className="bg-gray-50 border-b border-gray-200 p-3 md:p-4">
          <div className="flex flex-col xs:flex-row xs:items-center justify-between space-y-2 xs:space-y-0">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedPlans.length > 0 && selectedPlans.length === currentPlans.length}
                onChange={selectAllPlans}
                className="w-4 h-4 text-blue-500 rounded border-gray-300"
              />
              <span className="text-sm text-gray-700">
                {selectedPlans.length > 0 
                  ? `${selectedPlans.length} selected` 
                  : `${filteredAndSortedPlans.length} workout plans`
                }
              </span>
            </div>
            
            {selectedPlans.length > 0 && (
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
        {showBulkActions && selectedPlans.length > 0 && (
          <div className="bg-blue-50 border-b border-blue-100 p-3 md:p-4">
            <div className="flex flex-wrap gap-2 md:gap-3">
              <button
                onClick={() => alert('Bulk assign feature coming soon!')}
                className="flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
              >
                <Users className="w-4 h-4" />
                <span>Assign to Members</span>
              </button>
              <button
                onClick={() => alert('Bulk export feature coming soon!')}
                className="flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Export Selected</span>
              </button>
            </div>
          </div>
        )}

        {/* Workout Plans Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 p-3 md:p-4">
            {currentPlans.map(plan => (
              <div 
                key={plan.id} 
                className="bg-white border border-gray-200 rounded-lg md:rounded-xl hover:border-gray-300 transition-colors"
              >
                {/* Card Header */}
                <div className="p-3 md:p-4 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={selectedPlans.includes(plan.id)}
                        onChange={() => togglePlanSelection(plan.id)}
                        className="w-4 h-4 text-blue-500 rounded border-gray-300"
                      />
                    
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-gray-900 truncate text-sm md:text-base">{plan.name}</h3>
                          {plan.isPremium && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded">
                              PREM
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 truncate">{plan.description}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <button 
                        onClick={() => handlePlanClick(plan)}
                        className="p-1 md:p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <MoreVertical className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-3 md:p-4 space-y-3 md:space-y-4">
                  {/* Category and Difficulty */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-medium border ${categoryColors[plan.category]}`}>
                      {isMobile ? plan.category.split(' ')[0] : plan.category}
                    </span>
                    <span className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-medium border ${difficultyColors[plan.difficulty]}`}>
                      {plan.difficulty}
                    </span>
                  </div>

                  {/* Plan Details */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Duration</div>
                      <div className="text-sm md:text-base font-bold text-gray-900">{plan.duration}</div>
                    </div>
                    <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Sessions/Week</div>
                      <div className="text-sm md:text-base font-bold text-gray-900">{plan.sessionsPerWeek}</div>
                    </div>
                    <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Session Time</div>
                      <div className="text-sm md:text-base font-bold text-gray-900">{plan.sessionDuration}</div>
                    </div>
                    <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Exercises</div>
                      <div className="text-sm md:text-base font-bold text-gray-900">{plan.exercisesPerSession}</div>
                    </div>
                  </div>

                  {/* Rating and Users */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="ml-1 font-bold text-gray-900">{plan.rating}</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        ({plan.totalUsers})
                      </div>
                    </div>
                    <div className="text-base font-bold text-gray-900">{plan.price}</div>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Success Rate</span>
                      <span>{plan.successRate}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                      <div 
                        className="bg-green-500 h-1.5 md:h-2 rounded-full"
                        style={{ width: plan.successRate }}
                      ></div>
                    </div>
                  </div>

                  {/* Tags */}
                  {plan.tags && plan.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {plan.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded">
                          {isMobile && tag.length > 8 ? tag.substring(0, 8) + '...' : tag}
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
                        onClick={() => alert(`Started workout: ${plan.name}`)}
                        className="p-1.5 md:p-2 text-gray-600 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors"
                        title="Start Workout"
                      >
                        <PlayCircle className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(plan.name);
                          alert('Copied to clipboard!');
                        }}
                        className="p-1.5 md:p-2 text-gray-600 hover:text-purple-500 hover:bg-purple-50 rounded-lg transition-colors"
                        title="Copy"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => {
                          // Edit functionality
                          setEditingPlan(plan);
                          setShowAddPlan(true);
                        }}
                        className="p-1.5 md:p-2 text-gray-600 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeletePlan(plan.id)}
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

        {/* Workout Plans List View */}
        {viewMode === 'list' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 md:px-6 md:py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedPlans.length > 0 && selectedPlans.length === currentPlans.length}
                      onChange={selectAllPlans}
                      className="w-4 h-4 text-blue-500 rounded border-gray-300"
                    />
                  </th>
                  <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Workout Plan</th>
                  {!isMobile && (
                    <>
                      <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    </>
                  )}
                  <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  {!isMobile && (
                    <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users & Rating</th>
                  )}
                  <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentPlans.map(plan => (
                  <tr key={plan.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 md:px-6 md:py-4">
                      <input
                        type="checkbox"
                        checked={selectedPlans.includes(plan.id)}
                        onChange={() => togglePlanSelection(plan.id)}
                        className="w-4 h-4 text-blue-500 rounded border-gray-300"
                      />
                    </td>
                    <td className="px-4 py-3 md:px-6 md:py-4">
                      <div className="flex items-center">
                      
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900 truncate max-w-[120px] md:max-w-none">{plan.name}</div>
                          <div className="text-xs text-gray-500">{plan.sessionsPerWeek} sessions/week</div>
                          {isMobile && (
                            <div className="text-xs text-gray-600 truncate max-w-[120px]">{plan.category}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    {!isMobile && (
                      <>
                        <td className="px-4 py-3 md:px-6 md:py-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${categoryColors[plan.category]}`}>
                            {plan.category}
                          </span>
                        </td>
                        <td className="px-4 py-3 md:px-6 md:py-4">
                          <div className="text-sm text-gray-900">{plan.duration}</div>
                          <div className="text-xs text-gray-500">{plan.sessionDuration}</div>
                        </td>
                      </>
                    )}
                    <td className="px-4 py-3 md:px-6 md:py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[plan.status]}`}>
                        {isMobile ? plan.status.charAt(0).toUpperCase() : plan.status.toUpperCase()}
                      </span>
                    </td>
                    {!isMobile && (
                      <td className="px-4 py-3 md:px-6 md:py-4">
                        <div className="text-sm font-medium text-gray-900">{plan.totalUsers} users</div>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="ml-1 text-xs text-gray-900">{plan.rating}</span>
                        </div>
                      </td>
                    )}
                    <td className="px-4 py-3 md:px-6 md:py-4">
                      <div className="flex items-center space-x-1">
                        <button 
                          onClick={() => handlePlanClick(plan)}
                          className="p-1.5 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => {
                            // Edit functionality
                            setEditingPlan(plan);
                            setShowAddPlan(true);
                          }}
                          className="p-1.5 text-gray-600 hover:text-green-500 hover:bg-green-50 rounded-lg"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        {!isMobile && (
                          <button 
                            onClick={() => handleDeletePlan(plan.id)}
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
        {currentPlans.length === 0 && (
          <div className="py-8 md:py-12 text-center">
            <div className="mx-auto w-16 h-16 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Dumbbell className="w-8 h-8 md:w-12 md:h-12 text-gray-400" />
            </div>
            <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2">No workout plans found</h3>
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
        {filteredAndSortedPlans.length > 0 && (
          <div className="p-4 md:p-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="text-xs md:text-sm text-gray-600 mb-3 sm:mb-0">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredAndSortedPlans.length)} of {filteredAndSortedPlans.length} workout plans
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
              <div className="text-blue-100 text-xs md:text-sm">Total Plans</div>
            </div>
            <Dumbbell className="w-6 h-6 md:w-8 md:h-8 text-blue-300" />
          </div>
        </div>
        
        <div className="bg-green-500 text-white p-3 md:p-5 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg md:text-2xl font-bold">{stats.totalUsers}</div>
              <div className="text-green-100 text-xs md:text-sm">Total Users</div>
            </div>
            <Users className="w-6 h-6 md:w-8 md:h-8 text-green-300" />
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
              <div className="text-lg md:text-2xl font-bold">{stats.totalSessions.toLocaleString()}</div>
              <div className="text-purple-100 text-xs md:text-sm">Total Sessions</div>
            </div>
            <Timer className="w-6 h-6 md:w-8 md:h-8 text-purple-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlans;