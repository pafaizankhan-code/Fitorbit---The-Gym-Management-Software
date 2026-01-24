import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  User, 
  Target, 
  Zap, 
  BookOpen,
  Music,
  Sun,
  Award,
  Dumbbell,
  Activity,
  Tag,
  DollarSign,
  Star,
  CheckCircle,
  AlertCircle,
  Plus,
  Minus,
  Trash2,
  Save,
  Upload,
  X,
  Building,
  RotateCcw,
  FileText,
  BarChart3,
  Thermometer,
  Battery,
  Heart,
  Scale,
  Coffee,
  Droplets,
  Bell,
  BellOff,
  Award as AwardIcon,
  TrendingUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateClass = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    // Basic Information
    className: '',
    classType: '',
    description: '',
    instructor: '',
    difficulty: 'beginner',
    
    // Schedule
    date: '',
    startTime: '',
    endTime: '',
    duration: '',
    recurring: 'weekly',
    recurringDays: [],
    
    // Location & Capacity
    branch: '',
    room: '',
    capacity: '',
    waitingListEnabled: false,
    maxWaitingList: '',
    
    // Pricing
    price: '',
    priceType: 'per-session',
    isPremium: false,
    status: 'draft',
    
    // Class Details
    equipment: [],
    requirements: [],
    objectives: [],
    
    // Attendance & Rating
    minAttendance: '',
    maxAge: '',
    minAge: '',
    targetGender: 'all',
    
    // Additional Information
    tags: [],
    features: [],
    notes: ''
  });

  // Error state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newEquipment, setNewEquipment] = useState('');
  const [newRequirement, setNewRequirement] = useState('');
  const [newObjective, setNewObjective] = useState('');
  const [newTag, setNewTag] = useState('');
  const [newFeature, setNewFeature] = useState('');

  // Options
  const classTypeOptions = [
    { value: 'yoga', label: 'Yoga', icon: <BookOpen className="w-4 h-4" />, color: 'bg-blue-500' },
    { value: 'hiit', label: 'HIIT', icon: <Activity className="w-4 h-4" />, color: 'bg-red-500' },
    { value: 'strength', label: 'Strength Training', icon: <Dumbbell className="w-4 h-4" />, color: 'bg-purple-500' },
    { value: 'dance', label: 'Dance', icon: <Music className="w-4 h-4" />, color: 'bg-pink-500' },
    { value: 'pilates', label: 'Pilates', icon: <Target className="w-4 h-4" />, color: 'bg-green-500' },
    { value: 'cycling', label: 'Cycling', icon: <Zap className="w-4 h-4" />, color: 'bg-orange-500' },
    { value: 'meditation', label: 'Meditation', icon: <Sun className="w-4 h-4" />, color: 'bg-indigo-500' },
    { value: 'martial-arts', label: 'Martial Arts', icon: <Award className="w-4 h-4" />, color: 'bg-gray-500' },
    { value: 'cardio', label: 'Cardio', icon: <Heart className="w-4 h-4" />, color: 'bg-red-400' },
    { value: 'zumba', label: 'Zumba', icon: <Music className="w-4 h-4" />, color: 'bg-pink-400' },
    { value: 'boxing', label: 'Boxing', icon: <AwardIcon className="w-4 h-4" />, color: 'bg-yellow-500' },
    { value: 'crossfit', label: 'CrossFit', icon: <Activity className="w-4 h-4" />, color: 'bg-orange-400' }
  ];

  const difficultyOptions = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'all-levels', label: 'All Levels' }
  ];

  const recurringOptions = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'biweekly', label: 'Bi-Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'once', label: 'One Time' },
    { value: 'custom', label: 'Custom Schedule' }
  ];

  const dayOptions = [
    { value: 'monday', label: 'Monday' },
    { value: 'tuesday', label: 'Tuesday' },
    { value: 'wednesday', label: 'Wednesday' },
    { value: 'thursday', label: 'Thursday' },
    { value: 'friday', label: 'Friday' },
    { value: 'saturday', label: 'Saturday' },
    { value: 'sunday', label: 'Sunday' }
  ];

  const branchOptions = [
    { value: 'mumbai-central', label: 'Mumbai Central' },
    { value: 'andheri-west', label: 'Andheri West' },
    { value: 'bandra', label: 'Bandra' },
    { value: 'powai', label: 'Powai' },
    { value: 'thane', label: 'Thane' },
    { value: 'navi-mumbai', label: 'Navi Mumbai' }
  ];

  const roomOptions = [
    { value: 'main-hall', label: 'Main Hall' },
    { value: 'yoga-studio', label: 'Yoga Studio' },
    { value: 'hiit-zone', label: 'HIIT Zone' },
    { value: 'spin-studio', label: 'Spin Studio' },
    { value: 'strength-lab', label: 'Strength Lab' },
    { value: 'combat-zone', label: 'Combat Zone' },
    { value: 'pilates-studio', label: 'Pilates Studio' },
    { value: 'meditation-room', label: 'Meditation Room' }
  ];

  const instructorOptions = [
    { value: 'priya-sharma', label: 'Priya Sharma' },
    { value: 'rohan-singh', label: 'Rohan Singh' },
    { value: 'amit-verma', label: 'Amit Verma' },
    { value: 'meera-nair', label: 'Meera Nair' },
    { value: 'ananya-das', label: 'Ananya Das' },
    { value: 'rajesh-kumar', label: 'Rajesh Kumar' },
    { value: 'gaurav-sharma', label: 'Gaurav Sharma' },
    { value: 'vikram-singh', label: 'Vikram Singh' }
  ];

  const priceTypeOptions = [
    { value: 'per-session', label: 'Per Session' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'package', label: 'Package' },
    { value: 'free', label: 'Free' }
  ];

  const statusOptions = [
    { value: 'draft', label: 'Draft' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'archived', label: 'Archived' }
  ];

  const genderOptions = [
    { value: 'all', label: 'All Genders' },
    { value: 'male', label: 'Male Only' },
    { value: 'female', label: 'Female Only' },
    { value: 'mixed', label: 'Mixed' }
  ];

  const commonEquipment = [
    'Yoga Mat',
    'Dumbbells',
    'Kettlebells',
    'Barbells',
    'Resistance Bands',
    'Exercise Ball',
    'Spin Bike',
    'Treadmill',
    'Elliptical',
    'Rowing Machine',
    'Boxing Gloves',
    'Jump Rope'
  ];

  const commonRequirements = [
    'Comfortable Clothes',
    'Water Bottle',
    'Towel',
    'Sports Shoes',
    'Yoga Blocks',
    'Heart Rate Monitor',
    'Gym Attire',
    'Change of Clothes',
    'Lock for Locker',
    'ID Card'
  ];

  const commonObjectives = [
    'Weight Loss',
    'Muscle Building',
    'Flexibility',
    'Stress Relief',
    'Cardiovascular Health',
    'Strength Building',
    'Endurance',
    'Coordination',
    'Balance',
    'Posture Improvement'
  ];

  const commonFeatures = [
    'Live Music',
    'Air Conditioning',
    'Shower Facilities',
    'Locker Room',
    'WiFi',
    'Parking',
    'Towel Service',
    'Water Dispenser',
    'Changing Rooms',
    'Personal Locker'
  ];

  const commonTags = [
    'High Intensity',
    'Low Impact',
    'Beginner Friendly',
    'Advanced',
    'Morning Class',
    'Evening Class',
    'Weekend',
    'Fat Burning',
    'Muscle Toning',
    'Stress Relief'
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle recurring days
  const handleDayToggle = (day) => {
    setFormData(prev => ({
      ...prev,
      recurringDays: prev.recurringDays.includes(day)
        ? prev.recurringDays.filter(d => d !== day)
        : [...prev.recurringDays, day]
    }));
  };

  // Add equipment
  const handleAddEquipment = () => {
    if (newEquipment.trim() && !formData.equipment.includes(newEquipment.trim())) {
      setFormData(prev => ({
        ...prev,
        equipment: [...prev.equipment, newEquipment.trim()]
      }));
      setNewEquipment('');
    }
  };

  // Remove equipment
  const handleRemoveEquipment = (index) => {
    setFormData(prev => ({
      ...prev,
      equipment: prev.equipment.filter((_, i) => i !== index)
    }));
  };

  // Add requirement
  const handleAddRequirement = () => {
    if (newRequirement.trim() && !formData.requirements.includes(newRequirement.trim())) {
      setFormData(prev => ({
        ...prev,
        requirements: [...prev.requirements, newRequirement.trim()]
      }));
      setNewRequirement('');
    }
  };

  // Remove requirement
  const handleRemoveRequirement = (index) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index)
    }));
  };

  // Add objective
  const handleAddObjective = () => {
    if (newObjective.trim() && !formData.objectives.includes(newObjective.trim())) {
      setFormData(prev => ({
        ...prev,
        objectives: [...prev.objectives, newObjective.trim()]
      }));
      setNewObjective('');
    }
  };

  // Remove objective
  const handleRemoveObjective = (index) => {
    setFormData(prev => ({
      ...prev,
      objectives: prev.objectives.filter((_, i) => i !== index)
    }));
  };

  // Add tag
  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  // Remove tag
  const handleRemoveTag = (index) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  // Add feature
  const handleAddFeature = () => {
    if (newFeature.trim() && !formData.features.includes(newFeature.trim())) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  // Remove feature
  const handleRemoveFeature = (index) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  // Calculate duration automatically
  const calculateDuration = (start, end) => {
    if (start && end) {
      const [startHour, startMinute] = start.split(':').map(Number);
      const [endHour, endMinute] = end.split(':').map(Number);
      
      const startTotal = startHour * 60 + startMinute;
      const endTotal = endHour * 60 + endMinute;
      
      let duration = endTotal - startTotal;
      if (duration < 0) duration += 24 * 60;
      
      const hours = Math.floor(duration / 60);
      const minutes = duration % 60;
      
      setFormData(prev => ({
        ...prev,
        duration: `${hours}h ${minutes}m`
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    if (!formData.className.trim()) newErrors.className = 'Class name is required';
    if (!formData.classType) newErrors.classType = 'Class type is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.instructor) newErrors.instructor = 'Instructor is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.startTime) newErrors.startTime = 'Start time is required';
    if (!formData.endTime) newErrors.endTime = 'End time is required';
    if (!formData.branch) newErrors.branch = 'Branch is required';
    if (!formData.capacity) newErrors.capacity = 'Capacity is required';
    if (!formData.price && formData.priceType !== 'free') newErrors.price = 'Price is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert('Please fix the errors in the form');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create class data
      const classData = {
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        enrolled: 0,
        waitingList: 0,
        rating: 0,
        reviews: 0,
        color: classTypeOptions.find(type => type.value === formData.classType)?.color || 'bg-blue-500',
        status: formData.status
      };
      
      console.log('Class Data:', classData);
      
      // Show success message
      alert('Class created successfully!');
      
      // Reset form
      setFormData({
        className: '',
        classType: '',
        description: '',
        instructor: '',
        difficulty: 'beginner',
        date: '',
        startTime: '',
        endTime: '',
        duration: '',
        recurring: 'weekly',
        recurringDays: [],
        branch: '',
        room: '',
        capacity: '',
        waitingListEnabled: false,
        maxWaitingList: '',
        price: '',
        priceType: 'per-session',
        isPremium: false,
        status: 'draft',
        equipment: [],
        requirements: [],
        objectives: [],
        minAttendance: '',
        maxAge: '',
        minAge: '',
        targetGender: 'all',
        tags: [],
        features: [],
        notes: ''
      });
      
      // Navigate back
      setTimeout(() => {
        navigate('/ultimate-control/class-schedule/all');
      }, 1000);
      
    } catch (error) {
      alert('Error creating class. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/ultimate-control/class-schedule/all')}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Create New Class</h1>
                <p className="text-gray-600">Schedule a new fitness class</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                <span>{isSubmitting ? 'Saving...' : 'Create Class'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="px-4 py-6">
        <div className="mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Class Details</span>
              <span className="text-sm text-gray-500">Step 1 of 3</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '33%' }}></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-blue-500" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Basic Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Class Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Class Name *
                  </label>
                  <input
                    type="text"
                    name="className"
                    value={formData.className}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.className ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Morning Yoga Flow, HIIT Burn, Powerlifting 101"
                  />
                  {errors.className && (
                    <p className="mt-1 text-sm text-red-600">{errors.className}</p>
                  )}
                </div>

                {/* Class Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Class Type *
                  </label>
                  <select
                    name="classType"
                    value={formData.classType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.classType ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Class Type</option>
                    {classTypeOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.classType && (
                    <p className="mt-1 text-sm text-red-600">{errors.classType}</p>
                  )}
                </div>

                {/* Difficulty */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty Level
                  </label>
                  <select
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {difficultyOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Instructor */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Instructor *
                  </label>
                  <select
                    name="instructor"
                    value={formData.instructor}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.instructor ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Instructor</option>
                    {instructorOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.instructor && (
                    <p className="mt-1 text-sm text-red-600">{errors.instructor}</p>
                  )}
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.description ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Describe the class, what members will learn, benefits..."
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Schedule & Timing Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-green-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Schedule & Timing</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.date ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.date && (
                    <p className="mt-1 text-sm text-red-600">{errors.date}</p>
                  )}
                </div>

                {/* Start Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Time *
                  </label>
                  <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={(e) => {
                      handleChange(e);
                      calculateDuration(e.target.value, formData.endTime);
                    }}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.startTime ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.startTime && (
                    <p className="mt-1 text-sm text-red-600">{errors.startTime}</p>
                  )}
                </div>

                {/* End Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Time *
                  </label>
                  <input
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={(e) => {
                      handleChange(e);
                      calculateDuration(formData.startTime, e.target.value);
                    }}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.endTime ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.endTime && (
                    <p className="mt-1 text-sm text-red-600">{errors.endTime}</p>
                  )}
                </div>

                {/* Duration (Auto-calculated) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    readOnly
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50"
                    placeholder="Auto-calculated"
                  />
                </div>

                {/* Recurring */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recurring Pattern
                  </label>
                  <select
                    name="recurring"
                    value={formData.recurring}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {recurringOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Recurring Days */}
                {formData.recurring === 'weekly' && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Days of the Week
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {dayOptions.map(day => (
                        <button
                          key={day.value}
                          type="button"
                          onClick={() => handleDayToggle(day.value)}
                          className={`px-4 py-2 rounded-lg border transition-colors ${
                            formData.recurringDays.includes(day.value)
                              ? 'bg-blue-500 text-white border-blue-500'
                              : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                          }`}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Location & Capacity Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-purple-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Location & Capacity</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Branch */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Branch *
                  </label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.branch ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Branch</option>
                    {branchOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.branch && (
                    <p className="mt-1 text-sm text-red-600">{errors.branch}</p>
                  )}
                </div>

                {/* Room */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Room
                  </label>
                  <select
                    name="room"
                    value={formData.room}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Room</option>
                    {roomOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Capacity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Capacity *
                  </label>
                  <input
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    min="1"
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.capacity ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="e.g., 20"
                  />
                  {errors.capacity && (
                    <p className="mt-1 text-sm text-red-600">{errors.capacity}</p>
                  )}
                </div>

                {/* Waiting List */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="waitingListEnabled"
                      name="waitingListEnabled"
                      checked={formData.waitingListEnabled}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-500 rounded border-gray-300"
                    />
                    <label htmlFor="waitingListEnabled" className="text-sm font-medium text-gray-700">
                      Enable Waiting List
                    </label>
                  </div>
                  
                  {formData.waitingListEnabled && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Max Waiting List Size
                      </label>
                      <input
                        type="number"
                        name="maxWaitingList"
                        value={formData.maxWaitingList}
                        onChange={handleChange}
                        min="1"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 10"
                      />
                    </div>
                  )}
                </div>

                {/* Min Attendance */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Attendance Required
                  </label>
                  <input
                    type="number"
                    name="minAttendance"
                    value={formData.minAttendance}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 5"
                  />
                </div>

                {/* Age Range */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Minimum Age
                    </label>
                    <input
                      type="number"
                      name="minAge"
                      value={formData.minAge}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 16"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Maximum Age
                    </label>
                    <input
                      type="number"
                      name="maxAge"
                      value={formData.maxAge}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 65"
                    />
                  </div>
                </div>

                {/* Target Gender */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Gender
                  </label>
                  <select
                    name="targetGender"
                    value={formData.targetGender}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {genderOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Class Details Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Dumbbell className="w-4 h-4 text-orange-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Class Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Equipment */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Required Equipment
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={newEquipment}
                        onChange={(e) => setNewEquipment(e.target.value)}
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add equipment (e.g., Yoga Mat)"
                      />
                      <button
                        type="button"
                        onClick={handleAddEquipment}
                        className="px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Common equipment quick add */}
                    <div className="flex flex-wrap gap-2">
                      {commonEquipment.map(equipment => (
                        <button
                          key={equipment}
                          type="button"
                          onClick={() => {
                            if (!formData.equipment.includes(equipment)) {
                              setFormData(prev => ({
                                ...prev,
                                equipment: [...prev.equipment, equipment]
                              }));
                            }
                          }}
                          className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          {equipment}
                        </button>
                      ))}
                    </div>
                    
                    {/* Added equipment */}
                    {formData.equipment.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {formData.equipment.map((item, index) => (
                          <div key={index} className="flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg">
                            <span className="text-sm">{item}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveEquipment(index)}
                              className="ml-2 text-blue-500 hover:text-blue-700"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Requirements */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Requirements
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={newRequirement}
                        onChange={(e) => setNewRequirement(e.target.value)}
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add requirement (e.g., Comfortable Clothes)"
                      />
                      <button
                        type="button"
                        onClick={handleAddRequirement}
                        className="px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Common requirements quick add */}
                    <div className="flex flex-wrap gap-2">
                      {commonRequirements.map(requirement => (
                        <button
                          key={requirement}
                          type="button"
                          onClick={() => {
                            if (!formData.requirements.includes(requirement)) {
                              setFormData(prev => ({
                                ...prev,
                                requirements: [...prev.requirements, requirement]
                              }));
                            }
                          }}
                          className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          {requirement}
                        </button>
                      ))}
                    </div>
                    
                    {/* Added requirements */}
                    {formData.requirements.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {formData.requirements.map((item, index) => (
                          <div key={index} className="flex items-center px-3 py-1.5 bg-green-50 text-green-700 rounded-lg">
                            <span className="text-sm">{item}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveRequirement(index)}
                              className="ml-2 text-green-500 hover:text-green-700"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Objectives */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Class Objectives
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={newObjective}
                        onChange={(e) => setNewObjective(e.target.value)}
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add objective (e.g., Weight Loss)"
                      />
                      <button
                        type="button"
                        onClick={handleAddObjective}
                        className="px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Common objectives quick add */}
                    <div className="flex flex-wrap gap-2">
                      {commonObjectives.map(objective => (
                        <button
                          key={objective}
                          type="button"
                          onClick={() => {
                            if (!formData.objectives.includes(objective)) {
                              setFormData(prev => ({
                                ...prev,
                                objectives: [...prev.objectives, objective]
                              }));
                            }
                          }}
                          className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          {objective}
                        </button>
                      ))}
                    </div>
                    
                    {/* Added objectives */}
                    {formData.objectives.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {formData.objectives.map((item, index) => (
                          <div key={index} className="flex items-center px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg">
                            <span className="text-sm">{item}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveObjective(index)}
                              className="ml-2 text-purple-500 hover:text-purple-700"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing & Features Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Tag className="w-4 h-4 text-yellow-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Pricing & Features</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Price Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Type
                  </label>
                  <select
                    name="priceType"
                    value={formData.priceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {priceTypeOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price */}
                {formData.priceType !== 'free' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">₹</span>
                      </div>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        min="0"
                        className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.price ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="e.g., 500"
                      />
                    </div>
                    {errors.price && (
                      <p className="mt-1 text-sm text-red-600">{errors.price}</p>
                    )}
                  </div>
                )}

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {statusOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Premium Class */}
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="isPremium"
                    name="isPremium"
                    checked={formData.isPremium}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-500 rounded border-gray-300"
                  />
                  <label htmlFor="isPremium" className="text-sm font-medium text-gray-700">
                    Mark as Premium Class
                  </label>
                </div>

                {/* Features */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amenities & Features
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add feature (e.g., Live Music)"
                      />
                      <button
                        type="button"
                        onClick={handleAddFeature}
                        className="px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Common features quick add */}
                    <div className="flex flex-wrap gap-2">
                      {commonFeatures.map(feature => (
                        <button
                          key={feature}
                          type="button"
                          onClick={() => {
                            if (!formData.features.includes(feature)) {
                              setFormData(prev => ({
                                ...prev,
                                features: [...prev.features, feature]
                              }));
                            }
                          }}
                          className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          {feature}
                        </button>
                      ))}
                    </div>
                    
                    {/* Added features */}
                    {formData.features.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {formData.features.map((feature, index) => (
                          <div key={index} className="flex items-center px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg">
                            <span className="text-sm">{feature}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveFeature(index)}
                              className="ml-2 text-indigo-500 hover:text-indigo-700"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add tag (e.g., High Intensity)"
                      />
                      <button
                        type="button"
                        onClick={handleAddTag}
                        className="px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Common tags quick add */}
                    <div className="flex flex-wrap gap-2">
                      {commonTags.map(tag => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => {
                            if (!formData.tags.includes(tag)) {
                              setFormData(prev => ({
                                ...prev,
                                tags: [...prev.tags, tag]
                              }));
                            }
                          }}
                          className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                    
                    {/* Added tags */}
                    {formData.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {formData.tags.map((tag, index) => (
                          <div key={index} className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg">
                            <span className="text-sm">{tag}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveTag(index)}
                              className="ml-2 text-gray-500 hover:text-gray-700"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Notes */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add any additional information, special instructions, or guidelines..."
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                <div className="text-sm text-gray-600">
                  <p className="font-medium">Class Status: <span className={
                    formData.status === 'active' ? 'text-green-600' :
                    formData.status === 'draft' ? 'text-yellow-600' :
                    formData.status === 'inactive' ? 'text-red-600' :
                    'text-gray-600'
                  }>{formData.status.toUpperCase()}</span></p>
                  <p className="text-xs mt-1">Save as draft or publish immediately</p>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => navigate('/ultimate-control/class-schedule/all')}
                    className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        <span>Create Class</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateClass;