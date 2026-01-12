import React, { useState } from 'react';
import { 
  User,
  Award,
  Star,
  Target,
  Users,
  Calendar,
  Clock,
  TrendingUp,
  TrendingDown,
  ChevronRight,
  ChevronLeft,
  Search,
  Filter,
  Plus,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Video,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  CheckCircle,
  XCircle,
  Clock as ClockIcon,
  Shield,
  Award as AwardIcon,
  Dumbbell,
  Heart,
  Zap,
  Activity,
  BarChart3,
  BookOpen,
  FileText,
  Download,
  Printer,
  Share2,
  Bookmark,
  Tag,
  Percent,
  DollarSign,
  Award as Trophy,
  CalendarDays,
  CalendarRange,
  CheckSquare,
  Square,
  AlertCircle,
  UserPlus,
  UserCheck,
  UserX,
  RefreshCw,
  RotateCw,
  Maximize2,
  Minimize2,
  Grid,
  List,
  Layout,
  Columns,
  Settings,
  Bell,
  HelpCircle,
  ExternalLink,
  ArrowUpRight,
  ChevronsUpDown,
  ArrowUpDown,
  Hash,
  Timer,
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
  WindIcon,
  Coffee,
  Battery,
  BatteryCharging,
  Cpu,
  Database,
  HardDrive,
  Server,
  Wifi,
  Bluetooth,
  Radio,
  Tv,
  Smartphone,
  Tablet,
  Monitor,
  Camera,
  Headphones,
  Speaker,
  Mic,
  VideoOff,
  Music,
  Volume2,
  VolumeX
} from 'lucide-react';

const Trainers = () => {
  const [activeView, setActiveView] = useState('grid');
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [showTrainerModal, setShowTrainerModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  // Enhanced Trainers Data
  const trainers = [
    {
      id: 1,
      name: 'Alex Johnson',
      title: 'Head Strength Coach',
      specialization: 'Strength Training',
      experience: '12 years',
      rating: 4.9,
      totalClients: 245,
      sessionsCompleted: 1285,
      availability: 'Mon-Fri',
      status: 'active',
      certification: 'ACE, NASM, CSCS',
      education: 'M.S. Exercise Science',
      bio: 'Specializes in strength conditioning and athletic performance. Former collegiate athlete with extensive coaching experience.',
      skills: ['Powerlifting', 'Olympic Lifting', 'Injury Prevention', 'Nutrition'],
      social: {
        instagram: '@alexj_fit',
        linkedin: 'alexjohnson-fit'
      },
      stats: {
        clientRetention: 95,
        avgSessionRating: 4.8,
        monthlyRevenue: 85000,
        renewalRate: 92
      },
      color: 'border-blue-500 text-blue-700',
      bgColor: 'bg-blue-50',
      accentColor: 'bg-blue-500',
      avatarColor: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      name: 'Sarah Miller',
      title: 'Yoga & Mindfulness Expert',
      specialization: 'Yoga & Meditation',
      experience: '8 years',
      rating: 4.8,
      totalClients: 189,
      sessionsCompleted: 956,
      availability: 'Tue-Sat',
      status: 'active',
      certification: 'RYT 500, Yoga Therapy',
      education: 'B.A. Psychology, Yoga Certification',
      bio: 'Focuses on holistic wellness through yoga, meditation, and mindfulness practices. Specializes in stress management.',
      skills: ['Vinyasa', 'Hatha', 'Yin Yoga', 'Meditation', 'Breathwork'],
      social: {
        instagram: '@sarah_yogaflow',
        facebook: 'sarahmilleryoga'
      },
      stats: {
        clientRetention: 97,
        avgSessionRating: 4.9,
        monthlyRevenue: 68000,
        renewalRate: 94
      },
      color: 'border-green-500 text-green-700',
      bgColor: 'bg-green-50',
      accentColor: 'bg-green-500',
      avatarColor: 'bg-green-100 text-green-600'
    },
    {
      id: 3,
      name: 'Marcus Chen',
      title: 'HIIT & Cardio Specialist',
      specialization: 'HIIT & Cardio',
      experience: '6 years',
      rating: 4.7,
      totalClients: 176,
      sessionsCompleted: 842,
      availability: 'Mon-Thu',
      status: 'active',
      certification: 'NASM, CrossFit L2',
      education: 'B.S. Kinesiology',
      bio: 'Expert in high-intensity interval training and cardiovascular conditioning. Creates dynamic, challenging workouts.',
      skills: ['HIIT', 'Metabolic Conditioning', 'Endurance Training', 'Circuit Training'],
      social: {
        instagram: '@marcus_fit',
        twitter: 'marcuschen_fit'
      },
      stats: {
        clientRetention: 90,
        avgSessionRating: 4.7,
        monthlyRevenue: 72000,
        renewalRate: 88
      },
      color: 'border-red-500 text-red-700',
      bgColor: 'bg-red-50',
      accentColor: 'bg-red-500',
      avatarColor: 'bg-red-100 text-red-600'
    },
    {
      id: 4,
      name: 'Elena Rodriguez',
      title: 'Senior Wellness Coach',
      specialization: 'Holistic Wellness',
      experience: '10 years',
      rating: 4.9,
      totalClients: 210,
      sessionsCompleted: 1105,
      availability: 'Mon-Fri',
      status: 'active',
      certification: 'ACE, Precision Nutrition',
      education: 'M.A. Health Promotion',
      bio: 'Integrates fitness, nutrition, and lifestyle coaching for comprehensive wellness transformation.',
      skills: ['Nutrition Planning', 'Lifestyle Coaching', 'Stress Management', 'Functional Training'],
      social: {
        instagram: '@elena_wellness',
        linkedin: 'elenarodriguez-wellness'
      },
      stats: {
        clientRetention: 96,
        avgSessionRating: 4.9,
        monthlyRevenue: 78000,
        renewalRate: 95
      },
      color: 'border-purple-500 text-purple-700',
      bgColor: 'bg-purple-50',
      accentColor: 'bg-purple-500',
      avatarColor: 'bg-purple-100 text-purple-600'
    },
    {
      id: 5,
      name: 'David Kim',
      title: 'Sports Performance Coach',
      specialization: 'Sports Performance',
      experience: '9 years',
      rating: 4.6,
      totalClients: 195,
      sessionsCompleted: 923,
      availability: 'Wed-Sun',
      status: 'active',
      certification: 'CSCS, USAW',
      education: 'M.S. Sports Science',
      bio: 'Specializes in athletic performance enhancement for competitive athletes and sports teams.',
      skills: ['Speed & Agility', 'Power Development', 'Sports Nutrition', 'Recovery'],
      social: {
        instagram: '@david_sportsfit',
        linkedin: 'davidkim-performance'
      },
      stats: {
        clientRetention: 93,
        avgSessionRating: 4.8,
        monthlyRevenue: 69000,
        renewalRate: 91
      },
      color: 'border-orange-500 text-orange-700',
      bgColor: 'bg-orange-50',
      accentColor: 'bg-orange-500',
      avatarColor: 'bg-orange-100 text-orange-600'
    },
    {
      id: 6,
      name: 'Priya Sharma',
      title: 'Dance Fitness Expert',
      specialization: 'Dance & Zumba',
      experience: '7 years',
      rating: 4.8,
      totalClients: 168,
      sessionsCompleted: 789,
      availability: 'Tue-Sat',
      status: 'active',
      certification: 'ZIN, AFAA',
      education: 'B.A. Dance, Fitness Certification',
      bio: 'Brings energy and fun to fitness through dance-based workouts. Creates inclusive, joyful movement experiences.',
      skills: ['Zumba', 'Hip Hop Dance', 'Cardio Dance', 'Choreography'],
      social: {
        instagram: '@priya_dancefit',
        youtube: 'priyasharma_fitness'
      },
      stats: {
        clientRetention: 94,
        avgSessionRating: 4.8,
        monthlyRevenue: 65000,
        renewalRate: 93
      },
      color: 'border-pink-500 text-pink-700',
      bgColor: 'bg-pink-50',
      accentColor: 'bg-pink-500',
      avatarColor: 'bg-pink-100 text-pink-600'
    },
    {
      id: 7,
      name: 'Michael Thompson',
      title: 'Senior Trainer',
      specialization: 'Functional Training',
      experience: '11 years',
      rating: 4.7,
      totalClients: 202,
      sessionsCompleted: 1010,
      availability: 'Mon-Fri',
      status: 'on_leave',
      certification: 'NASM, FMS',
      education: 'B.S. Exercise Physiology',
      bio: 'Focuses on functional movement patterns for everyday life and injury prevention.',
      skills: ['Mobility', 'Stability', 'Corrective Exercise', 'Posture Correction'],
      social: {
        instagram: '@michael_functional',
        linkedin: 'michaelthompson-training'
      },
      stats: {
        clientRetention: 92,
        avgSessionRating: 4.7,
        monthlyRevenue: 71000,
        renewalRate: 90
      },
      color: 'border-teal-500 text-teal-700',
      bgColor: 'bg-teal-50',
      accentColor: 'bg-teal-500',
      avatarColor: 'bg-teal-100 text-teal-600'
    },
    {
      id: 8,
      name: 'Lisa Wang',
      title: 'Pilates & Barre Specialist',
      specialization: 'Pilates & Barre',
      experience: '5 years',
      rating: 4.9,
      totalClients: 145,
      sessionsCompleted: 675,
      availability: 'Mon-Wed-Fri',
      status: 'active',
      certification: 'PMA, Balanced Body',
      education: 'B.A. Dance, Pilates Certification',
      bio: 'Expert in Pilates and barre techniques for core strength, flexibility, and posture improvement.',
      skills: ['Pilates Mat', 'Reformer', 'Barre', 'Core Conditioning'],
      social: {
        instagram: '@lisa_pilatesflow',
        facebook: 'lisawangpilates'
      },
      stats: {
        clientRetention: 98,
        avgSessionRating: 4.9,
        monthlyRevenue: 62000,
        renewalRate: 96
      },
      color: 'border-indigo-500 text-indigo-700',
      bgColor: 'bg-indigo-50',
      accentColor: 'bg-indigo-500',
      avatarColor: 'bg-indigo-100 text-indigo-600'
    }
  ];

  // Specializations
  const specializations = [
    { id: 'all', name: 'All Specializations', icon: Users, color: 'text-gray-600' },
    { id: 'strength', name: 'Strength Training', icon: Dumbbell, color: 'text-blue-600' },
    { id: 'yoga', name: 'Yoga & Meditation', icon: Heart, color: 'text-green-600' },
    { id: 'cardio', name: 'HIIT & Cardio', icon: Zap, color: 'text-red-600' },
    { id: 'wellness', name: 'Holistic Wellness', icon: Activity, color: 'text-purple-600' },
    { id: 'sports', name: 'Sports Performance', icon: Trophy, color: 'text-orange-600' },
    { id: 'dance', name: 'Dance Fitness', icon: Music, color: 'text-pink-600' }
  ];

  // Stats Overview
  const stats = {
    totalTrainers: trainers.length,
    activeTrainers: trainers.filter(t => t.status === 'active').length,
    avgRating: 4.8,
    totalClients: trainers.reduce((sum, t) => sum + t.totalClients, 0),
    monthlyRevenue: trainers.reduce((sum, t) => sum + t.stats.monthlyRevenue, 0),
    avgRetention: 94.5
  };

  // Filter trainers
  const filteredTrainers = trainers.filter(trainer => {
    const matchesSearch = searchTerm === '' || 
      trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialization = selectedSpecialization === 'all' || 
      trainer.specialization.toLowerCase().includes(selectedSpecialization);
    
    const matchesStatus = selectedStatus === 'all' || trainer.status === selectedStatus;
    
    return matchesSearch && matchesSpecialization && matchesStatus;
  });

  // Sort trainers
  const sortedTrainers = [...filteredTrainers].sort((a, b) => {
    switch(sortBy) {
      case 'rating': return b.rating - a.rating;
      case 'experience': return parseInt(b.experience) - parseInt(a.experience);
      case 'clients': return b.totalClients - a.totalClients;
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  // Handle trainer selection
  const handleTrainerSelect = (trainer) => {
    setSelectedTrainer(trainer);
    setShowTrainerModal(true);
  };

  // Get status badge
  const getStatusBadge = (status) => {
    const config = {
      active: { 
        text: 'text-green-700', 
        bg: 'bg-green-50', 
        border: 'border-green-200',
        icon: CheckCircle,
        label: 'Active'
      },
      on_leave: { 
        text: 'text-yellow-700', 
        bg: 'bg-yellow-50', 
        border: 'border-yellow-200',
        icon: ClockIcon,
        label: 'On Leave'
      },
      away: { 
        text: 'text-gray-700', 
        bg: 'bg-gray-50', 
        border: 'border-gray-200',
        icon: ClockIcon,
        label: 'Away'
      }
    };

    const { text, bg, border, icon: Icon, label } = config[status] || config.active;
    return { text, bg, border, Icon, label };
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-100 border-2 border-white rounded-full flex items-center justify-center">
                    <Award className="w-3 h-3 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Trainer Network</h1>
                  <p className="text-sm text-gray-600">Professional fitness experts & coaches</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  <Download className="w-4 h-4" />
                  <span className="font-medium">Export</span>
                </button>
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700"
                >
                  <UserPlus className="w-4 h-4" />
                  <span className="font-medium">Add Trainer</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Trainers</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalTrainers}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600">+2 this month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Now</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.activeTrainers}</p>
                <p className="text-sm text-gray-500 mt-2">Available for sessions</p>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Rating</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.avgRating}</p>
                <div className="flex items-center mt-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                  <span className="text-sm text-gray-600">Out of 5.0</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {formatCurrency(stats.monthlyRevenue)}
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600">+15% growth</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search */}
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search trainers by name, specialization..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Filters and Sort */}
            <div className="flex items-center space-x-3">
              {/* Specialization Filter */}
              <div className="relative">
                <select 
                  value={selectedSpecialization}
                  onChange={(e) => setSelectedSpecialization(e.target.value)}
                  className="appearance-none pl-10 pr-8 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                >
                  {specializations.map(spec => {
                    const Icon = spec.icon;
                    return (
                      <option key={spec.id} value={spec.id}>
                        {spec.name}
                      </option>
                    );
                  })}
                </select>
                <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* Status Filter */}
              <div className="relative">
                <select 
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="appearance-none pl-10 pr-8 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="on_leave">On Leave</option>
                  <option value="away">Away</option>
                </select>
                <Activity className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* Sort By */}
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-10 pr-8 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="rating">Highest Rating</option>
                  <option value="experience">Most Experience</option>
                  <option value="clients">Most Clients</option>
                  <option value="name">Alphabetical</option>
                </select>
                <ArrowUpDown className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* View Toggle */}
              <div className="flex bg-white border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveView('grid')}
                  className={`p-2 ${activeView === 'grid' ? 'bg-blue-50 text-blue-500' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveView('list')}
                  className={`p-2 ${activeView === 'list' ? 'bg-blue-50 text-blue-500' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trainers Grid/List */}
        {activeView === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {sortedTrainers.map(trainer => {
              const { text, bg, border, Icon: StatusIcon, label } = getStatusBadge(trainer.status);
              
              return (
                <div 
                  key={trainer.id}
                  onClick={() => handleTrainerSelect(trainer)}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 cursor-pointer transition-all duration-200"
                >
                  {/* Trainer Header */}
                  <div className={`p-5 ${trainer.bgColor} border-b ${trainer.color}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-14 h-14 rounded-full ${trainer.avatarColor} flex items-center justify-center font-bold text-lg`}>
                          {trainer.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{trainer.name}</h3>
                          <p className="text-sm text-gray-600">{trainer.title}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="ml-1 font-bold text-gray-900">{trainer.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Trainer Info */}
                  <div className="p-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Specialization</p>
                          <p className="font-medium text-gray-900">{trainer.specialization}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Experience</p>
                          <p className="font-medium text-gray-900">{trainer.experience}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Total Clients</p>
                          <p className="font-bold text-gray-900">{trainer.totalClients}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Sessions</p>
                          <p className="font-bold text-gray-900">{trainer.sessionsCompleted}</p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${bg} ${text} border ${border}`}>
                            <StatusIcon className="w-3 h-3 mr-1.5" />
                            {label}
                          </span>
                          <div className="text-sm text-gray-500">
                            Available: {trainer.availability}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Trainer</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Specialization</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Experience</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Rating</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Clients</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedTrainers.map(trainer => {
                    const { text, bg, border, Icon: StatusIcon, label } = getStatusBadge(trainer.status);
                    
                    return (
                      <tr key={trainer.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <div className={`w-10 h-10 rounded-full ${trainer.avatarColor} flex items-center justify-center font-bold mr-3`}>
                              {trainer.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{trainer.name}</div>
                              <div className="text-sm text-gray-600">{trainer.title}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="font-medium text-gray-900">{trainer.specialization}</div>
                          <div className="text-sm text-gray-500">{trainer.certification}</div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="font-medium text-gray-900">{trainer.experience}</div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                            <span className="font-bold text-gray-900">{trainer.rating}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="font-bold text-gray-900">{trainer.totalClients}</div>
                          <div className="text-sm text-gray-500">{trainer.sessionsCompleted} sessions</div>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${bg} ${text} border ${border}`}>
                            <StatusIcon className="w-3 h-3 mr-1.5" />
                            {label}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => handleTrainerSelect(trainer)}
                              className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-500 hover:text-green-500 hover:bg-green-50 rounded-lg">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg">
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
          </div>
        )}

        {/* Specializations Overview */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Target className="w-6 h-6 text-blue-500" />
              <div>
                <h2 className="text-lg font-bold text-gray-900">Specializations</h2>
                <p className="text-sm text-gray-600">Expertise areas covered by our trainers</p>
              </div>
            </div>
            <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {specializations.map(spec => {
              const Icon = spec.icon;
              const trainerCount = trainers.filter(t => 
                spec.id === 'all' || t.specialization.toLowerCase().includes(spec.id)
              ).length;
              
              return (
                <button
                  key={spec.id}
                  onClick={() => setSelectedSpecialization(spec.id)}
                  className={`flex flex-col items-center p-4 border rounded-lg transition-all ${
                    selectedSpecialization === spec.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                    selectedSpecialization === spec.id ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${spec.color}`} />
                  </div>
                  <div className="text-sm font-medium text-gray-900">{spec.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{trainerCount} trainers</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {sortedTrainers.length} of {trainers.length} trainers
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
                1
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trainer Details Modal */}
      {selectedTrainer && showTrainerModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-full ${selectedTrainer.avatarColor} flex items-center justify-center font-bold text-2xl`}>
                    {selectedTrainer.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedTrainer.name}</h3>
                    <p className="text-lg text-gray-600">{selectedTrainer.title}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowTrainerModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <XCircle className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Basic Info */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Bio */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Professional Bio</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedTrainer.bio}</p>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTrainer.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium ${selectedTrainer.bgColor} ${selectedTrainer.color} border`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div className="text-sm text-gray-600">Client Retention</div>
                      <div className="text-2xl font-bold text-gray-900 mt-1">
                        {selectedTrainer.stats.clientRetention}%
                      </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div className="text-sm text-gray-600">Avg Session Rating</div>
                      <div className="text-2xl font-bold text-gray-900 mt-1">
                        {selectedTrainer.stats.avgSessionRating}
                      </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div className="text-sm text-gray-600">Monthly Revenue</div>
                      <div className="text-2xl font-bold text-gray-900 mt-1">
                        {formatCurrency(selectedTrainer.stats.monthlyRevenue)}
                      </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div className="text-sm text-gray-600">Renewal Rate</div>
                      <div className="text-2xl font-bold text-gray-900 mt-1">
                        {selectedTrainer.stats.renewalRate}%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                  {/* Contact Info */}
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-gray-400 mr-3" />
                        <div>
                          <div className="text-sm text-gray-600">Email</div>
                          <div className="font-medium text-gray-900">contact@example.com</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-gray-400 mr-3" />
                        <div>
                          <div className="text-sm text-gray-600">Phone</div>
                          <div className="font-medium text-gray-900">+1 (555) 123-4567</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certification */}
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Certifications</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <AwardIcon className="w-5 h-5 text-blue-500 mr-3" />
                        <div className="text-gray-700">{selectedTrainer.certification}</div>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 text-green-500 mr-3" />
                        <div className="text-gray-700">{selectedTrainer.education}</div>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Connect</h4>
                    <div className="flex space-x-3">
                      {selectedTrainer.social.instagram && (
                        <a href="#" className="p-2 bg-pink-50 text-pink-600 rounded-lg hover:bg-pink-100">
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                      {selectedTrainer.social.linkedin && (
                        <a href="#" className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {selectedTrainer.social.twitter && (
                        <a href="#" className="p-2 bg-blue-50 text-blue-400 rounded-lg hover:bg-blue-100">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {selectedTrainer.social.facebook && (
                        <a href="#" className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                          <Facebook className="w-5 h-5" />
                        </a>
                      )}
                      {selectedTrainer.social.youtube && (
                        <a href="#" className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                          <Video className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-gray-200">
                <button className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  Edit Profile
                </button>
                <button className="px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Schedule Session
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trainers;