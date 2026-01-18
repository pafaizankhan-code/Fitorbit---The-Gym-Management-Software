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
  Heart,
  Star,
  Clock,
  Apple,
  Coffee,
  Droplets,
  Scale,
  Target,
  Users,
  Calendar,
  ChevronDown,
  MoreVertical,
  X,
  CheckCircle,
  Clock as ClockIcon,
  User,
  IndianRupee,
  Tag,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Activity,
  Shield,
  Zap,
  Thermometer,
  Bell,
  Check,
  Share2,
  Grid,
  List,
  ExternalLink,
  Upload,
  RefreshCw,
  FileText,
  Book,
  Clipboard,
  ShoppingBag,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DietPlans = () => {
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
    goal: [],
    difficulty: [],
    status: []
  });
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPlanDetails, setShowPlanDetails] = useState(false);
  const [showAddPlan, setShowAddPlan] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [showBulkActions, setShowBulkActions] = useState(false);
  
  // Diet Plans Data
  const [dietPlans, setDietPlans] = useState([
    {
      id: 1,
      name: "Weight Loss Warrior",
      description: "High-protein, low-carb diet for rapid weight loss",
      goal: "Weight Loss",
      category: "Weight Management",
      difficulty: "Intermediate",
      duration: "30 days",
      calories: "1200-1500",
      protein: "120g",
      carbs: "80g",
      fat: "40g",
      status: "active",
      createdBy: "Dr. Priya Sharma",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-28",
      rating: 4.8,
      totalUsers: 45,
      successRate: "92%",
      price: "₹2,499",
      isPremium: true,
      tags: ["High Protein", "Low Carb", "Ketogenic"],
      mealsPerDay: 5,
      waterIntake: "3-4 liters",
      supplements: ["Whey Protein", "BCAA", "Multivitamin"],
      restrictions: ["No Sugar", "No Processed Food"],
      sampleMeal: {
        breakfast: "3 egg whites + 1 whole egg, Spinach, Green tea",
        lunch: "Grilled chicken breast, Quinoa, Steamed vegetables",
        dinner: "Baked fish, Salad, Avocado",
        snacks: "Greek yogurt, Almonds, Protein shake"
      },
      features: ["Weekly Shopping List", "Recipe Book", "Progress Tracker"]
    },
    {
      id: 2,
      name: "Muscle Gain Blueprint",
      description: "Calorie surplus diet for muscle building",
      goal: "Muscle Building",
      category: "Bodybuilding",
      difficulty: "Advanced",
      duration: "12 weeks",
      calories: "3000-3500",
      protein: "180g",
      carbs: "400g",
      fat: "80g",
      status: "active",
      createdBy: "Coach Rahul Singh",
      createdAt: "2024-01-10",
      updatedAt: "2024-01-25",
      rating: 4.9,
      totalUsers: 32,
      successRate: "88%",
      price: "₹3,499",
      isPremium: true,
      tags: ["High Calorie", "Mass Gain", "Strength"],
      mealsPerDay: 6,
      waterIntake: "4-5 liters",
      supplements: ["Mass Gainer", "Creatine", "Pre-workout"],
      restrictions: ["No Junk Food", "Limited Alcohol"],
      sampleMeal: {
        breakfast: "Oatmeal with banana & peanut butter, 4 eggs",
        lunch: "Brown rice, Chicken breast, Broccoli",
        dinner: "Sweet potato, Salmon, Green beans",
        snacks: "Protein bar, Cottage cheese, Fruits"
      },
      features: ["Custom Workout Plan", "Supplement Guide"]
    },
    {
      id: 3,
      name: "Detox & Cleanse",
      description: "7-day detox program to cleanse body",
      goal: "Detox",
      category: "Wellness",
      difficulty: "Beginner",
      duration: "7 days",
      calories: "800-1000",
      protein: "60g",
      carbs: "100g",
      fat: "25g",
      status: "active",
      createdBy: "Nutritionist Meera Patel",
      createdAt: "2024-01-20",
      updatedAt: "2024-01-27",
      rating: 4.5,
      totalUsers: 28,
      successRate: "85%",
      price: "₹1,499",
      isPremium: false,
      tags: ["Detox", "Cleanse", "Juice Fast"],
      mealsPerDay: 3,
      waterIntake: "3 liters",
      supplements: ["Green Tea", "Probiotics"],
      restrictions: ["No Meat", "No Dairy", "No Caffeine"],
      sampleMeal: {
        breakfast: "Green smoothie with spinach and apple",
        lunch: "Vegetable soup with quinoa",
        dinner: "Steamed vegetables with tofu",
        snacks: "Herbal tea, Mixed nuts"
      },
      features: ["Detox Recipes", "Meditation Guide"]
    },
    {
      id: 4,
      name: "Diabetic Friendly",
      description: "Low glycemic index diet for blood sugar control",
      goal: "Health Management",
      category: "Medical",
      difficulty: "Intermediate",
      duration: "Lifetime",
      calories: "1500-1800",
      protein: "90g",
      carbs: "150g",
      fat: "50g",
      status: "active",
      createdBy: "Dr. Anjali Reddy",
      createdAt: "2023-12-05",
      updatedAt: "2024-01-30",
      rating: 4.7,
      totalUsers: 67,
      successRate: "95%",
      price: "₹1,999",
      isPremium: true,
      tags: ["Diabetic", "Low GI", "Heart Healthy"],
      mealsPerDay: 6,
      waterIntake: "2-3 liters",
      supplements: ["Cinnamon", "Fiber Supplement"],
      restrictions: ["No Sugar", "Limited Carbs", "Low Sodium"],
      sampleMeal: {
        breakfast: "Steel-cut oats with berries",
        lunch: "Grilled fish, Brown rice, Salad",
        dinner: "Chicken stir-fry with vegetables",
        snacks: "Apple with peanut butter, Greek yogurt"
      },
      features: ["Blood Sugar Tracker", "Emergency Meal Plan"]
    },
    {
      id: 5,
      name: "Vegan Power",
      description: "Plant-based diet for optimal health",
      goal: "Vegan Lifestyle",
      category: "Lifestyle",
      difficulty: "Intermediate",
      duration: "30 days",
      calories: "2000-2200",
      protein: "80g",
      carbs: "300g",
      fat: "60g",
      status: "active",
      createdBy: "Chef Vikram Mehta",
      createdAt: "2024-01-05",
      updatedAt: "2024-01-28",
      rating: 4.6,
      totalUsers: 41,
      successRate: "90%",
      price: "₹1,799",
      isPremium: false,
      tags: ["Vegan", "Plant-based", "Eco-friendly"],
      mealsPerDay: 4,
      waterIntake: "3 liters",
      supplements: ["B12", "Vitamin D", "Plant Protein"],
      restrictions: ["No Animal Products"],
      sampleMeal: {
        breakfast: "Tofu scramble with vegetables",
        lunch: "Lentil curry with brown rice",
        dinner: "Chickpea salad with avocado",
        snacks: "Hummus with veggie sticks, Nuts"
      },
      features: ["Vegan Recipes", "Protein Guide"]
    },
    {
      id: 6,
      name: "Keto Reset",
      description: "Strict ketogenic diet for rapid fat loss",
      goal: "Fat Loss",
      category: "Ketogenic",
      difficulty: "Advanced",
      duration: "21 days",
      calories: "1400-1600",
      protein: "100g",
      carbs: "20g",
      fat: "110g",
      status: "active",
      createdBy: "Keto Coach Arjun",
      createdAt: "2024-01-12",
      updatedAt: "2024-01-29",
      rating: 4.4,
      totalUsers: 38,
      successRate: "87%",
      price: "₹2,999",
      isPremium: true,
      tags: ["Keto", "Fat Burn", "Low Carb"],
      mealsPerDay: 3,
      waterIntake: "4 liters",
      supplements: ["MCT Oil", "Electrolytes"],
      restrictions: ["No Carbs", "No Sugar", "High Fat"],
      sampleMeal: {
        breakfast: "Bulletproof coffee, Avocado eggs",
        lunch: "Bacon cheeseburger without bun",
        dinner: "Steak with buttered vegetables",
        snacks: "Cheese slices, Olives, Keto bars"
      },
      features: ["Keto Calculator", "Recipe Book"]
    },
    {
      id: 7,
      name: "Senior Fitness",
      description: "Balanced diet for senior citizens",
      goal: "Healthy Aging",
      category: "Senior Health",
      difficulty: "Beginner",
      duration: "Ongoing",
      calories: "1600-1800",
      protein: "70g",
      carbs: "200g",
      fat: "50g",
      status: "inactive",
      createdBy: "Geriatric Nutritionist",
      createdAt: "2023-11-20",
      updatedAt: "2024-01-15",
      rating: 4.3,
      totalUsers: 52,
      successRate: "94%",
      price: "₹1,299",
      isPremium: false,
      tags: ["Senior", "Bone Health"],
      mealsPerDay: 5,
      waterIntake: "2 liters",
      supplements: ["Calcium", "Vitamin D", "Omega-3"],
      restrictions: ["Low Sodium", "Low Cholesterol"],
      sampleMeal: {
        breakfast: "Oatmeal with milk and nuts",
        lunch: "Fish curry, Rice, Vegetables",
        dinner: "Soup with lentils and vegetables",
        snacks: "Yogurt, Fruits, Herbal tea"
      },
      features: ["Bone Health Guide", "Easy Recipes"]
    },
    {
      id: 8,
      name: "Athlete Performance",
      description: "High-performance diet for athletes",
      goal: "Performance",
      category: "Sports Nutrition",
      difficulty: "Advanced",
      duration: "Training Season",
      calories: "3500-4000",
      protein: "200g",
      carbs: "500g",
      fat: "90g",
      status: "active",
      createdBy: "Sports Nutritionist",
      createdAt: "2024-01-08",
      updatedAt: "2024-01-30",
      rating: 4.9,
      totalUsers: 29,
      successRate: "96%",
      price: "₹4,999",
      isPremium: true,
      tags: ["Athlete", "Performance", "Recovery"],
      mealsPerDay: 6,
      waterIntake: "5-6 liters",
      supplements: ["Recovery Drinks", "Amino Acids"],
      restrictions: ["Timed Nutrition"],
      sampleMeal: {
        breakfast: "Protein pancakes with honey",
        lunch: "Rice, Chicken, Mixed vegetables",
        dinner: "Pasta with meat sauce",
        snacks: "Energy bars, Smoothies"
      },
      features: ["Training Nutrition", "Recovery Plan"]
    }
  ]);

  // Filter options
  const categoryOptions = [
    { id: 'weight-management', label: 'Weight Management', count: 2 },
    { id: 'bodybuilding', label: 'Bodybuilding', count: 1 },
    { id: 'wellness', label: 'Wellness', count: 1 },
    { id: 'medical', label: 'Medical', count: 1 },
    { id: 'lifestyle', label: 'Lifestyle', count: 1 },
    { id: 'ketogenic', label: 'Ketogenic', count: 1 },
    { id: 'senior-health', label: 'Senior Health', count: 1 },
    { id: 'sports-nutrition', label: 'Sports Nutrition', count: 1 }
  ];

  const goalOptions = [
    { id: 'weight-loss', label: 'Weight Loss', count: 2 },
    { id: 'muscle-building', label: 'Muscle Building', count: 1 },
    { id: 'detox', label: 'Detox', count: 1 },
    { id: 'health-management', label: 'Health Management', count: 1 },
    { id: 'vegan-lifestyle', label: 'Vegan Lifestyle', count: 1 },
    { id: 'fat-loss', label: 'Fat Loss', count: 1 },
    { id: 'healthy-aging', label: 'Healthy Aging', count: 1 },
    { id: 'performance', label: 'Performance', count: 1 }
  ];

  const difficultyOptions = [
    { id: 'beginner', label: 'Beginner', count: 2 },
    { id: 'intermediate', label: 'Intermediate', count: 4 },
    { id: 'advanced', label: 'Advanced', count: 2 }
  ];

  const statusOptions = [
    { id: 'active', label: 'Active', count: 7 },
    { id: 'inactive', label: 'Inactive', count: 1 }
  ];

  // Stats calculation
  const stats = useMemo(() => {
    const total = dietPlans.length;
    const active = dietPlans.filter(p => p.status === 'active').length;
    const premium = dietPlans.filter(p => p.isPremium).length;
    
    const totalUsers = dietPlans.reduce((sum, plan) => sum + plan.totalUsers, 0);
    const avgRating = dietPlans.reduce((sum, plan) => sum + plan.rating, 0) / total;
    
    const totalRevenue = dietPlans.reduce((sum, plan) => {
      const price = parseInt(plan.price.replace('₹', '').replace(',', ''));
      return sum + (price * plan.totalUsers);
    }, 0);

    const avgSuccessRate = dietPlans.reduce((sum, plan) => {
      const rate = parseInt(plan.successRate);
      return sum + (isNaN(rate) ? 0 : rate);
    }, 0) / total;

    return {
      total,
      active,
      premium,
      totalUsers,
      avgRating: avgRating.toFixed(1),
      totalRevenue,
      avgSuccessRate: avgSuccessRate.toFixed(1) + '%'
    };
  }, [dietPlans]);

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
    let filtered = [...dietPlans];

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

    // Apply goal filters
    if (activeFilters.goal.length > 0) {
      filtered = filtered.filter(plan => 
        activeFilters.goal.includes(plan.goal.toLowerCase().replace(' ', '-'))
      );
    }

    // Apply difficulty filters
    if (activeFilters.difficulty.length > 0) {
      filtered = filtered.filter(plan => 
        activeFilters.difficulty.includes(plan.difficulty.toLowerCase())
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
        case 'recent':
        default:
          return new Date(b.updatedAt) - new Date(a.updatedAt);
      }
    });

    return filtered;
  }, [dietPlans, searchQuery, activeFilters, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedPlans.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPlans = filteredAndSortedPlans.slice(startIndex, endIndex);

  // Colors and styles - Using only blue-500 and black
  const statusColors = {
    active: 'bg-green-100 text-green-800 border border-green-200',
    inactive: 'bg-gray-100 text-gray-800 border border-gray-200'
  };

  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800 border border-green-200',
    Intermediate: 'bg-blue-100 text-blue-800 border border-blue-200',
    Advanced: 'bg-red-100 text-red-800 border border-red-200'
  };

  const categoryColors = {
    'Weight Management': 'bg-blue-100 text-blue-800 border border-blue-200',
    'Bodybuilding': 'bg-purple-100 text-purple-800 border border-purple-200',
    'Wellness': 'bg-green-100 text-green-800 border border-green-200',
    'Medical': 'bg-red-100 text-red-800 border border-red-200',
    'Lifestyle': 'bg-blue-100 text-blue-800 border border-blue-200',
    'Ketogenic': 'bg-orange-100 text-orange-800 border border-orange-200',
    'Senior Health': 'bg-gray-100 text-gray-800 border border-gray-200',
    'Sports Nutrition': 'bg-indigo-100 text-indigo-800 border border-indigo-200'
  };

  const goalColors = {
    'Weight Loss': 'bg-blue-100 text-blue-800 border border-blue-200',
    'Muscle Building': 'bg-purple-100 text-purple-800 border border-purple-200',
    'Detox': 'bg-green-100 text-green-800 border border-green-200',
    'Health Management': 'bg-red-100 text-red-800 border border-red-200',
    'Vegan Lifestyle': 'bg-blue-100 text-blue-800 border border-blue-200',
    'Fat Loss': 'bg-orange-100 text-orange-800 border border-orange-200',
    'Healthy Aging': 'bg-gray-100 text-gray-800 border border-gray-200',
    'Performance': 'bg-indigo-100 text-indigo-800 border border-indigo-200'
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
      goal: [],
      difficulty: [],
      status: []
    });
    setSearchQuery('');
  };

  const handleDeletePlan = (id) => {
    if (window.confirm('Are you sure you want to delete this diet plan?')) {
      setDietPlans(prev => prev.filter(plan => plan.id !== id));
      setSelectedPlans(prev => prev.filter(planId => planId !== id));
      if (selectedPlan?.id === id) {
        closePlanDetails();
      }
    }
  };

  const handleBulkDelete = () => {
    if (selectedPlans.length === 0) return;
    
    if (window.confirm(`Are you sure you want to delete ${selectedPlans.length} diet plans?`)) {
      setDietPlans(prev => prev.filter(plan => !selectedPlans.includes(plan.id)));
      setSelectedPlans([]);
      if (selectedPlan && selectedPlans.includes(selectedPlan.id)) {
        closePlanDetails();
      }
    }
  };

  const handleUpdateStatus = (id, newStatus) => {
    setDietPlans(prev => prev.map(plan => 
      plan.id === id ? { ...plan, status: newStatus } : plan
    ));
    if (selectedPlan?.id === id) {
      setSelectedPlan(prev => ({ ...prev, status: newStatus }));
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Category', 'Goal', 'Difficulty', 'Duration', 'Price', 'Rating', 'Users', 'Status'];
    const csvData = filteredAndSortedPlans.map(plan => [
      plan.name,
      plan.category,
      plan.goal,
      plan.difficulty,
      plan.duration,
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
    a.download = `diet_plans_${new Date().toISOString().split('T')[0]}.csv`;
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
      case 'Weight Management': return <Scale className="w-4 h-4" />;
      case 'Bodybuilding': return <Activity className="w-4 h-4" />;
      case 'Wellness': return <Heart className="w-4 h-4" />;
      case 'Medical': return <Shield className="w-4 h-4" />;
      case 'Lifestyle': return <Users className="w-4 h-4" />;
      case 'Ketogenic': return <Zap className="w-4 h-4" />;
      case 'Senior Health': return <User className="w-4 h-4" />;
      case 'Sports Nutrition': return <Target className="w-4 h-4" />;
      default: return <Apple className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 md:p-3 p-1">
      {/* Header Section */}
      <div className="bg-white rounded-xl md:rounded-2xl border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 md:mb-6">
          <div className="mb-4 lg:mb-0">
            <div className="flex items-center space-x-3 mb-2">
              
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">Diet Plans</h1>
                <p className="text-sm text-gray-600 mt-1">Manage nutrition plans for your members</p>
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
                <Star className="w-4 h-4 text-blue-500" />
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
            <Link to={'/ultimate-control/diet-workout/add-diet'}>
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
              placeholder="Search diet plans..."
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

                  {/* Goal Filters */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2 text-sm md:text-base">Goal</h4>
                    <div className="space-y-1 md:space-y-2">
                      {goalOptions.map(option => (
                        <label key={option.id} className="flex items-center justify-between cursor-pointer text-sm">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              checked={activeFilters.goal.includes(option.id)}
                              onChange={() => toggleFilter('goal', option.id)}
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
            {activeFilters.goal.map(goal => (
              <span key={goal} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {goalOptions.find(g => g.id === goal)?.label}
                <button onClick={() => toggleFilter('goal', goal)} className="ml-1">
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

      {/* Diet Plans Grid/List View */}
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
                  : `${filteredAndSortedPlans.length} diet plans`
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
                <span>Assign to Clients</span>
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

        {/* Diet Plans Grid View */}
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
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded">
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

                  {/* Nutrition Info */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Calories</div>
                      <div className="text-sm md:text-base font-bold text-gray-900">{plan.calories}</div>
                    </div>
                    <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Duration</div>
                      <div className="text-sm md:text-base font-bold text-gray-900">{plan.duration}</div>
                    </div>
                    <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Protein</div>
                      <div className="text-sm md:text-base font-bold text-gray-900">{plan.protein}</div>
                    </div>
                    <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Carbs</div>
                      <div className="text-sm md:text-base font-bold text-gray-900">{plan.carbs}</div>
                    </div>
                  </div>

                  {/* Rating and Users */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-blue-500 fill-current" />
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
                        onClick={() => alert(`Shared ${plan.name} successfully!`)}
                        className="p-1.5 md:p-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Share"
                      >
                        <Share2 className="w-4 h-4" />
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

        {/* Diet Plans List View */}
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
                  <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diet Plan</th>
                  {!isMobile && (
                    <>
                      <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nutrition</th>
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
                          <div className="text-xs text-gray-500">{plan.duration}</div>
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
                          <div className="text-sm text-gray-900">{plan.calories} cal</div>
                          <div className="text-xs text-gray-500">{plan.protein} protein</div>
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
                          <Star className="w-3 h-3 text-blue-500 fill-current" />
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
              <Apple className="w-8 h-8 md:w-12 md:h-12 text-gray-400" />
            </div>
            <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2">No diet plans found</h3>
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
                Showing {startIndex + 1} to {Math.min(endIndex, filteredAndSortedPlans.length)} of {filteredAndSortedPlans.length} diet plans
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
            <Apple className="w-6 h-6 md:w-8 md:h-8 text-blue-300" />
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
              <div className="text-lg md:text-2xl font-bold">₹{stats.totalRevenue.toLocaleString()}</div>
              <div className="text-purple-100 text-xs md:text-sm">Total Revenue</div>
            </div>
            <IndianRupee className="w-6 h-6 md:w-8 md:h-8 text-purple-300" />
          </div>
        </div>
      </div>

    
      {/* Plan Details Side Panel */}
      {showPlanDetails && selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-2xl h-full overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">{selectedPlan.name}</h2>
                  <p className="text-gray-600 mt-1 text-sm">{selectedPlan.description}</p>
                </div>
                <button
                  onClick={closePlanDetails}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Plan Info */}
            <div className="p-4 md:p-6">
              {/* Plan Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[selectedPlan.status]}`}>
                        {selectedPlan.status.toUpperCase()}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[selectedPlan.category]}`}>
                        {selectedPlan.category}
                      </span>
                      {selectedPlan.isPremium && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                          PREMIUM
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-600">
                      Created by {selectedPlan.createdBy}
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-blue-700">{selectedPlan.rating}</div>
                  <div className="text-xs text-blue-600">Rating</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-green-700">{selectedPlan.totalUsers}</div>
                  <div className="text-xs text-green-600">Users</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-purple-700">{selectedPlan.successRate}</div>
                  <div className="text-xs text-purple-600">Success Rate</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-amber-700">{selectedPlan.price}</div>
                  <div className="text-xs text-amber-600">Price</div>
                </div>
              </div>

              {/* Nutrition Information */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Nutrition Information</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div>
                      <div className="text-xs text-gray-500">Calories</div>
                      <div className="text-base font-bold text-gray-900">{selectedPlan.calories}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Protein</div>
                      <div className="text-base font-bold text-gray-900">{selectedPlan.protein}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Carbs</div>
                      <div className="text-base font-bold text-gray-900">{selectedPlan.carbs}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Fat</div>
                      <div className="text-base font-bold text-gray-900">{selectedPlan.fat}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Plan Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Goal</span>
                      <span className="font-medium">{selectedPlan.goal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Difficulty</span>
                      <span className="font-medium">{selectedPlan.difficulty}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium">{selectedPlan.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Meals per Day</span>
                      <span className="font-medium">{selectedPlan.mealsPerDay}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Supplements</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPlan.supplements?.map((sup, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                        {sup}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-200 pt-4 gap-3">
                <button
                  onClick={() => {
                    alert(`Assigned ${selectedPlan.name} to clients!`);
                  }}
                  className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <Users className="w-4 h-4" />
                  <span>Assign to Clients</span>
                </button>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      setEditingPlan(selectedPlan);
                      setShowAddPlan(true);
                      closePlanDetails();
                    }}
                    className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeletePlan(selectedPlan.id)}
                    className="px-4 py-2.5 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 text-sm"
                  >
                    Delete
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

export default DietPlans;