import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Dumbbell, 
  Target, 
  Timer, 
  Calendar, 
  Users, 
  Star, 
  Award, 
  Activity, 
  Zap, 
  Heart, 
  Flame, 
  Shield, 
  Clock, 
  BarChart3, 
  FileText, 
  Plus, 
  Minus, 
  Trash2, 
  Save, 
  Upload,
  Check,
  X,
  PlayCircle,
  PauseCircle,
  Target as TargetIcon,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddWorkoutPlans = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    // Basic Information
    planName: '',
    description: '',
    category: '',
    goal: '',
    difficulty: 'beginner',
    duration: '',
    durationWeeks: '',
    
    // Workout Structure
    sessionsPerWeek: '3',
    sessionDuration: '',
    restDays: '2',
    exercisesPerSession: '',
    
    // Schedule
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: '',
    
    // Equipment
    equipment: [],
    
    // Pricing & Status
    price: '',
    isPremium: false,
    status: 'draft',
    
    // Features
    features: [],
    
    // Sample Workouts
    day1Workout: '',
    day2Workout: '',
    day3Workout: '',
    day4Workout: '',
    day5Workout: '',
    day6Workout: '',
    day7Workout: '',
    
    // Additional Information
    tags: [],
    createdBy: '',
    targetAudience: '',
    successRate: '',
    caloriesBurned: '',
    notes: '',
    
    // Weekly Focus
    weeklyFocus: [],
    
    // Progression
    progressionType: 'linear',
    deloadWeeks: '4',
    maxEffortDays: '1'
  });

  // Error state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newEquipment, setNewEquipment] = useState('');
  const [newFeature, setNewFeature] = useState('');
  const [newTag, setNewTag] = useState('');
  const [newFocus, setNewFocus] = useState('');

  // Options
  const categoryOptions = [
    { value: 'weight-loss', label: 'Weight Loss' },
    { value: 'bodybuilding', label: 'Bodybuilding' },
    { value: 'home-workout', label: 'Home Workout' },
    { value: 'senior-fitness', label: 'Senior Fitness' },
    { value: 'sports-training', label: 'Sports Training' },
    { value: 'yoga', label: 'Yoga' },
    { value: 'postnatal', label: 'Postnatal' },
    { value: 'crossfit', label: 'CrossFit' },
    { value: 'hiit', label: 'HIIT' },
    { value: 'strength', label: 'Strength Training' },
    { value: 'cardio', label: 'Cardio' },
    { value: 'flexibility', label: 'Flexibility' }
  ];

  const goalOptions = [
    { value: 'fat-loss', label: 'Fat Loss' },
    { value: 'muscle-gain', label: 'Muscle Building' },
    { value: 'strength', label: 'Strength Gain' },
    { value: 'endurance', label: 'Endurance' },
    { value: 'general-fitness', label: 'General Fitness' },
    { value: 'sports-performance', label: 'Sports Performance' },
    { value: 'rehabilitation', label: 'Rehabilitation' },
    { value: 'flexibility', label: 'Flexibility' },
    { value: 'balance', label: 'Balance & Stability' },
    { value: 'posture', label: 'Posture Correction' },
    { value: 'stress-relief', label: 'Stress Relief' },
    { value: 'competition-prep', label: 'Competition Prep' }
  ];

  const difficultyOptions = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  const durationOptions = [
    { value: '4-weeks', label: '4 Weeks' },
    { value: '6-weeks', label: '6 Weeks' },
    { value: '8-weeks', label: '8 Weeks' },
    { value: '12-weeks', label: '12 Weeks' },
    { value: '16-weeks', label: '16 Weeks' },
    { value: 'ongoing', label: 'Ongoing' },
    { value: 'seasonal', label: 'Seasonal' }
  ];

  const sessionsOptions = [
    { value: '2', label: '2 Days' },
    { value: '3', label: '3 Days' },
    { value: '4', label: '4 Days' },
    { value: '5', label: '5 Days' },
    { value: '6', label: '6 Days' },
    { value: '7', label: '7 Days' }
  ];

  const durationPerSession = [
    { value: '15-30', label: '15-30 mins' },
    { value: '30-45', label: '30-45 mins' },
    { value: '45-60', label: '45-60 mins' },
    { value: '60-75', label: '60-75 mins' },
    { value: '75-90', label: '75-90 mins' },
    { value: '90-120', label: '90-120 mins' }
  ];

  const statusOptions = [
    { value: 'draft', label: 'Draft' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'archived', label: 'Archived' }
  ];

  const audienceOptions = [
    { value: 'beginners', label: 'Beginners' },
    { value: 'intermediate', label: 'Intermediate Level' },
    { value: 'advanced', label: 'Advanced/Pro' },
    { value: 'seniors', label: 'Senior Citizens' },
    { value: 'athletes', label: 'Athletes' },
    { value: 'students', label: 'Students' },
    { value: 'professionals', label: 'Working Professionals' },
    { value: 'women', label: 'Women' },
    { value: 'men', label: 'Men' },
    { value: 'all', label: 'All Audiences' }
  ];

  const progressionOptions = [
    { value: 'linear', label: 'Linear Progression' },
    { value: 'wave', label: 'Wave Loading' },
    { value: 'block', label: 'Block Periodization' },
    { value: 'undulating', label: 'Daily Undulating' },
    { value: 'none', label: 'No Progression' }
  ];

  const commonEquipment = [
    'Dumbbells',
    'Barbell',
    'Kettlebell',
    'Resistance Bands',
    'Yoga Mat',
    'Pull-up Bar',
    'Bench',
    'Cable Machine',
    'Medicine Ball',
    'Plyo Box',
    'Jump Rope',
    'None'
  ];

  const commonFeatures = [
    'Video Demonstrations',
    'Progress Tracker',
    'Nutrition Guide',
    'Warm-up/Cool-down',
    'Alternative Exercises',
    'Injury Prevention',
    'Recovery Protocols',
    'Community Access',
    'Coach Support',
    'Mobile App Access',
    'Printable PDF',
    'Workout Calendar'
  ];

  const commonFocusAreas = [
    'Strength',
    'Cardio',
    'Flexibility',
    'Balance',
    'Power',
    'Endurance',
    'Mobility',
    'Core',
    'Recovery',
    'Skill Work',
    'Metabolic Conditioning',
    'Hypertrophy'
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

  // Add focus area
  const handleAddFocus = () => {
    if (newFocus.trim() && !formData.weeklyFocus.includes(newFocus.trim())) {
      setFormData(prev => ({
        ...prev,
        weeklyFocus: [...prev.weeklyFocus, newFocus.trim()]
      }));
      setNewFocus('');
    }
  };

  // Remove focus area
  const handleRemoveFocus = (index) => {
    setFormData(prev => ({
      ...prev,
      weeklyFocus: prev.weeklyFocus.filter((_, i) => i !== index)
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    if (!formData.planName.trim()) newErrors.planName = 'Plan name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.goal) newErrors.goal = 'Goal is required';
    if (!formData.duration) newErrors.duration = 'Duration is required';
    if (!formData.price.trim()) newErrors.price = 'Price is required';
    
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
      
      // Create workout plan data
      const workoutPlanData = {
        ...formData,
        id: Date.now(), // Generate unique ID
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0],
        rating: 0,
        totalUsers: 0,
        successRate: formData.successRate || '0%',
        // Generate sample workout
        sampleWorkout: {
          day1: formData.day1Workout,
          day2: formData.day2Workout,
          day3: formData.day3Workout,
          day4: formData.day4Workout,
          day5: formData.day5Workout,
          day6: formData.day6Workout,
          day7: formData.day7Workout
        },
        durationWeeks: parseInt(formData.durationWeeks) || 0
      };
      
      console.log('Workout Plan Data:', workoutPlanData);
      
      // Show success message
      alert('Workout plan created successfully!');
      
      // Reset form
      setFormData({
        planName: '',
        description: '',
        category: '',
        goal: '',
        difficulty: 'beginner',
        duration: '',
        durationWeeks: '',
        sessionsPerWeek: '3',
        sessionDuration: '',
        restDays: '2',
        exercisesPerSession: '',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: '',
        sunday: '',
        equipment: [],
        price: '',
        isPremium: false,
        status: 'draft',
        features: [],
        day1Workout: '',
        day2Workout: '',
        day3Workout: '',
        day4Workout: '',
        day5Workout: '',
        day6Workout: '',
        day7Workout: '',
        tags: [],
        createdBy: '',
        targetAudience: '',
        successRate: '',
        caloriesBurned: '',
        notes: '',
        weeklyFocus: [],
        progressionType: 'linear',
        deloadWeeks: '4',
        maxEffortDays: '1'
      });
      
      // Navigate back or show success
      setTimeout(() => {
        navigate('/workout-plans');
      }, 1000);
      
    } catch (error) {
      alert('Error creating workout plan. Please try again.');
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
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Add New Workout Plan</h1>
                <p className="text-gray-600">Create fitness programs for your members</p>
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
                <span>{isSubmitting ? 'Saving...' : 'Save Plan'}</span>
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
              <span className="text-sm font-medium text-gray-700">Plan Details</span>
              <span className="text-sm text-gray-500">Step 1 of 4</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Dumbbell className="w-4 h-4 text-blue-500" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Basic Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Plan Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Plan Name *
                  </label>
                  <input
                    type="text"
                    name="planName"
                    value={formData.planName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.planName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Beginner Burn, Muscle Max Pro"
                  />
                  {errors.planName && (
                    <p className="mt-1 text-sm text-red-600">{errors.planName}</p>
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
                    rows="3"
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.description ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Describe the workout plan, benefits, and what members can expect..."
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                  )}
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.category ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Category</option>
                    {categoryOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600">{errors.category}</p>
                  )}
                </div>

                {/* Goal */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Goal *
                  </label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.goal ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Goal</option>
                    {goalOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.goal && (
                    <p className="mt-1 text-sm text-red-600">{errors.goal}</p>
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

                {/* Duration */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration *
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.duration ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Duration</option>
                    {durationOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.duration && (
                    <p className="mt-1 text-sm text-red-600">{errors.duration}</p>
                  )}
                </div>

                {/* Duration in Weeks */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration (Weeks)
                  </label>
                  <input
                    type="number"
                    name="durationWeeks"
                    value={formData.durationWeeks}
                    onChange={handleChange}
                    min="1"
                    max="52"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 8, 12, 16"
                  />
                </div>

                {/* Created By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Created By
                  </label>
                  <input
                    type="text"
                    name="createdBy"
                    value={formData.createdBy}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Coach Arjun, Professional Trainer"
                  />
                </div>

                {/* Target Audience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Audience
                  </label>
                  <select
                    name="targetAudience"
                    value={formData.targetAudience}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Target Audience</option>
                    {audienceOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Workout Structure Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Timer className="w-4 h-4 text-green-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Workout Structure</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sessions Per Week */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sessions Per Week
                  </label>
                  <select
                    name="sessionsPerWeek"
                    value={formData.sessionsPerWeek}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {sessionsOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Session Duration */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Session Duration
                  </label>
                  <select
                    name="sessionDuration"
                    value={formData.sessionDuration}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Duration</option>
                    {durationPerSession.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Exercises Per Session */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Exercises Per Session
                  </label>
                  <input
                    type="number"
                    name="exercisesPerSession"
                    value={formData.exercisesPerSession}
                    onChange={handleChange}
                    min="1"
                    max="30"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 8, 12, 15"
                  />
                </div>

                {/* Rest Days */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rest Days Per Week
                  </label>
                  <input
                    type="number"
                    name="restDays"
                    value={formData.restDays}
                    onChange={handleChange}
                    min="0"
                    max="7"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 2, 3"
                  />
                </div>

                {/* Calories Burned */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Calories Burned (Per Session)
                  </label>
                  <input
                    type="text"
                    name="caloriesBurned"
                    value={formData.caloriesBurned}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 300-400, 500-600"
                  />
                </div>

                {/* Success Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Success Rate
                  </label>
                  <input
                    type="text"
                    name="successRate"
                    value={formData.successRate}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 85%, 90-95%"
                  />
                </div>

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
                        placeholder="Add equipment (e.g., Dumbbells)"
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
                        {formData.equipment.map((equipment, index) => (
                          <div key={index} className="flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg">
                            <span className="text-sm">{equipment}</span>
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

                {/* Weekly Focus Areas */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Weekly Focus Areas
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={newFocus}
                        onChange={(e) => setNewFocus(e.target.value)}
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add focus area (e.g., Strength, Cardio)"
                      />
                      <button
                        type="button"
                        onClick={handleAddFocus}
                        className="px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Common focus areas quick add */}
                    <div className="flex flex-wrap gap-2">
                      {commonFocusAreas.map(focus => (
                        <button
                          key={focus}
                          type="button"
                          onClick={() => {
                            if (!formData.weeklyFocus.includes(focus)) {
                              setFormData(prev => ({
                                ...prev,
                                weeklyFocus: [...prev.weeklyFocus, focus]
                              }));
                            }
                          }}
                          className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          {focus}
                        </button>
                      ))}
                    </div>
                    
                    {/* Added focus areas */}
                    {formData.weeklyFocus.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {formData.weeklyFocus.map((focus, index) => (
                          <div key={index} className="flex items-center px-3 py-1.5 bg-green-50 text-green-700 rounded-lg">
                            <span className="text-sm">{focus}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveFocus(index)}
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
              </div>
            </div>

            {/* Weekly Schedule Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-purple-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Weekly Schedule</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Monday */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monday
                  </label>
                  <textarea
                    name="monday"
                    value={formData.monday}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Chest & Triceps, HIIT, Rest"
                  />
                </div>

                {/* Tuesday */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tuesday
                  </label>
                  <textarea
                    name="tuesday"
                    value={formData.tuesday}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Back & Biceps, Cardio"
                  />
                </div>

                {/* Wednesday */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Wednesday
                  </label>
                  <textarea
                    name="wednesday"
                    value={formData.wednesday}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Legs, Active Recovery"
                  />
                </div>

                {/* Thursday */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thursday
                  </label>
                  <textarea
                    name="thursday"
                    value={formData.thursday}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Shoulders, Core"
                  />
                </div>

                {/* Friday */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Friday
                  </label>
                  <textarea
                    name="friday"
                    value={formData.friday}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Full Body, Yoga"
                  />
                </div>

                {/* Saturday */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Saturday
                  </label>
                  <textarea
                    name="saturday"
                    value={formData.saturday}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Cardio, Sports"
                  />
                </div>

                {/* Sunday */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sunday
                  </label>
                  <textarea
                    name="sunday"
                    value={formData.sunday}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Rest, Light Activity"
                  />
                </div>
              </div>
            </div>

            {/* Sample Workouts Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <PlayCircle className="w-4 h-4 text-orange-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Sample Workouts (Day by Day)</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Day 1 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Day 1 Workout
                  </label>
                  <textarea
                    name="day1Workout"
                    value={formData.day1Workout}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Squats 3x10, Bench Press 3x8, Rows 3x10"
                  />
                </div>

                {/* Day 2 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Day 2 Workout
                  </label>
                  <textarea
                    name="day2Workout"
                    value={formData.day2Workout}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Deadlifts 3x5, Pull-ups 3x8, Shoulder Press 3x10"
                  />
                </div>

                {/* Day 3 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Day 3 Workout
                  </label>
                  <textarea
                    name="day3Workout"
                    value={formData.day3Workout}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Lunges 3x12, Push-ups 3x15, Plank 3x60s"
                  />
                </div>

                {/* Day 4 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Day 4 Workout
                  </label>
                  <textarea
                    name="day4Workout"
                    value={formData.day4Workout}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., HIIT Circuit: 20s work, 10s rest x 8 rounds"
                  />
                </div>

                {/* Day 5 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Day 5 Workout
                  </label>
                  <textarea
                    name="day5Workout"
                    value={formData.day5Workout}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Yoga flow, Mobility work, Stretching"
                  />
                </div>

                {/* Day 6 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Day 6 Workout
                  </label>
                  <textarea
                    name="day6Workout"
                    value={formData.day6Workout}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Light cardio, Skill work, Technique practice"
                  />
                </div>

                {/* Day 7 */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Day 7 Workout
                  </label>
                  <textarea
                    name="day7Workout"
                    value={formData.day7Workout}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Active recovery, Walking, Light stretching"
                  />
                </div>
              </div>
            </div>

            {/* Progression & Features Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-indigo-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Progression & Features</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Progression Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Progression Type
                  </label>
                  <select
                    name="progressionType"
                    value={formData.progressionType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {progressionOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Deload Weeks */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deload Every (Weeks)
                  </label>
                  <input
                    type="number"
                    name="deloadWeeks"
                    value={formData.deloadWeeks}
                    onChange={handleChange}
                    min="0"
                    max="12"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 4, 6, 8"
                  />
                </div>

                {/* Max Effort Days */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Effort Days/Week
                  </label>
                  <input
                    type="number"
                    name="maxEffortDays"
                    value={formData.maxEffortDays}
                    onChange={handleChange}
                    min="0"
                    max="7"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 1, 2"
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">₹</span>
                    </div>
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.price ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="e.g., 1499, 2999"
                    />
                  </div>
                  {errors.price && (
                    <p className="mt-1 text-sm text-red-600">{errors.price}</p>
                  )}
                </div>

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

                {/* Premium Plan */}
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
                    Mark as Premium Plan
                  </label>
                </div>

                {/* Features */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Plan Features
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add feature (e.g., Video Demonstrations)"
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
                          <div key={index} className="flex items-center px-3 py-1.5 bg-green-50 text-green-700 rounded-lg">
                            <span className="text-sm">{feature}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveFeature(index)}
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
                        placeholder="Add tag (e.g., Full Body, High Intensity)"
                      />
                      <button
                        type="button"
                        onClick={handleAddTag}
                        className="px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
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
                  <p className="font-medium">Plan Status: <span className={
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
                    onClick={() => navigate('/workout-plans')}
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
                        <span>Save Workout Plan</span>
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

export default AddWorkoutPlans;