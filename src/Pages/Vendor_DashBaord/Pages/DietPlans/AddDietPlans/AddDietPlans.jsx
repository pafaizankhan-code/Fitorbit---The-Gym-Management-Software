import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Apple, 
  Tag, 
  Target, 
  Clock, 
  Calendar, 
  Users, 
  Star, 
  Award, 
  Activity, 
  Thermometer, 
  Battery, 
  Heart, 
  Zap, 
  Scale, 
  Coffee, 
  Droplets, 
  FileText, 
  Plus, 
  Minus, 
  Trash2, 
  Save, 
  Upload,
  Check,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddDietPlans = () => {
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
    
    // Nutrition Information
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    fiber: '',
    sugar: '',
    sodium: '',
    
    // Meal Structure
    mealsPerDay: '3',
    waterIntake: '',
    supplements: [],
    restrictions: [],
    
    // Pricing & Status
    price: '',
    isPremium: false,
    status: 'draft',
    
    // Features
    features: [],
    
    // Sample Meals
    breakfast: '',
    lunch: '',
    dinner: '',
    snacks: '',
    
    // Additional Information
    tags: [],
    createdBy: '',
    targetAudience: '',
    successRate: '',
    notes: ''
  });

  // Error state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newSupplement, setNewSupplement] = useState('');
  const [newRestriction, setNewRestriction] = useState('');
  const [newFeature, setNewFeature] = useState('');
  const [newTag, setNewTag] = useState('');

  // Options
  const categoryOptions = [
    { value: 'weight-management', label: 'Weight Management' },
    { value: 'bodybuilding', label: 'Bodybuilding' },
    { value: 'wellness', label: 'Wellness' },
    { value: 'medical', label: 'Medical' },
    { value: 'lifestyle', label: 'Lifestyle' },
    { value: 'ketogenic', label: 'Ketogenic' },
    { value: 'senior-health', label: 'Senior Health' },
    { value: 'sports-nutrition', label: 'Sports Nutrition' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'low-carb', label: 'Low Carb' },
    { value: 'high-protein', label: 'High Protein' }
  ];

  const goalOptions = [
    { value: 'weight-loss', label: 'Weight Loss' },
    { value: 'muscle-gain', label: 'Muscle Building' },
    { value: 'fat-loss', label: 'Fat Loss' },
    { value: 'detox', label: 'Detox & Cleanse' },
    { value: 'performance', label: 'Performance' },
    { value: 'maintenance', label: 'Weight Maintenance' },
    { value: 'health-management', label: 'Health Management' },
    { value: 'digestive-health', label: 'Digestive Health' },
    { value: 'energy-boost', label: 'Energy Boost' },
    { value: 'skin-health', label: 'Skin Health' },
    { value: 'hormone-balance', label: 'Hormone Balance' },
    { value: 'post-pregnancy', label: 'Post Pregnancy' }
  ];

  const difficultyOptions = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  const durationOptions = [
    { value: '7-days', label: '7 Days' },
    { value: '14-days', label: '14 Days' },
    { value: '21-days', label: '21 Days' },
    { value: '30-days', label: '30 Days' },
    { value: '60-days', label: '60 Days' },
    { value: '90-days', label: '90 Days' },
    { value: 'ongoing', label: 'Ongoing' },
    { value: 'seasonal', label: 'Seasonal' }
  ];

  const mealsOptions = [
    { value: '3', label: '3 Meals' },
    { value: '4', label: '4 Meals' },
    { value: '5', label: '5 Meals' },
    { value: '6', label: '6 Meals' },
    { value: 'custom', label: 'Custom' }
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

  const commonSupplements = [
    'Whey Protein',
    'BCAA',
    'Creatine',
    'Multivitamin',
    'Omega-3',
    'Vitamin D',
    'Pre-workout',
    'Post-workout',
    'Glutamine',
    'Caffeine',
    'Green Tea Extract',
    'Probiotics'
  ];

  const commonRestrictions = [
    'Gluten-Free',
    'Dairy-Free',
    'Nut-Free',
    'Soy-Free',
    'Sugar-Free',
    'Low Sodium',
    'Vegetarian',
    'Vegan',
    'Paleo',
    'Keto',
    'Halal',
    'Kosher'
  ];

  const commonFeatures = [
    'Weekly Shopping List',
    'Recipe Book',
    'Progress Tracker',
    'Meal Prep Guide',
    'Supplement Guide',
    'Coach Support',
    'Community Access',
    'Mobile App Access',
    'Video Tutorials',
    'Customizable Meals'
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

  // Add supplement
  const handleAddSupplement = () => {
    if (newSupplement.trim() && !formData.supplements.includes(newSupplement.trim())) {
      setFormData(prev => ({
        ...prev,
        supplements: [...prev.supplements, newSupplement.trim()]
      }));
      setNewSupplement('');
    }
  };

  // Remove supplement
  const handleRemoveSupplement = (index) => {
    setFormData(prev => ({
      ...prev,
      supplements: prev.supplements.filter((_, i) => i !== index)
    }));
  };

  // Add restriction
  const handleAddRestriction = () => {
    if (newRestriction.trim() && !formData.restrictions.includes(newRestriction.trim())) {
      setFormData(prev => ({
        ...prev,
        restrictions: [...prev.restrictions, newRestriction.trim()]
      }));
      setNewRestriction('');
    }
  };

  // Remove restriction
  const handleRemoveRestriction = (index) => {
    setFormData(prev => ({
      ...prev,
      restrictions: prev.restrictions.filter((_, i) => i !== index)
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

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    if (!formData.planName.trim()) newErrors.planName = 'Plan name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.goal) newErrors.goal = 'Goal is required';
    if (!formData.duration) newErrors.duration = 'Duration is required';
    if (!formData.calories.trim()) newErrors.calories = 'Calorie range is required';
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
      
      // Create diet plan data
      const dietPlanData = {
        ...formData,
        id: Date.now(), // Generate unique ID
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0],
        rating: 0,
        totalUsers: 0,
        successRate: formData.successRate || '0%',
        // Generate sample meal plan
        sampleMeal: {
          breakfast: formData.breakfast,
          lunch: formData.lunch,
          dinner: formData.dinner,
          snacks: formData.snacks
        }
      };
      
      console.log('Diet Plan Data:', dietPlanData);
      
      // Show success message
      alert('Diet plan created successfully!');
      
      // Reset form
      setFormData({
        planName: '',
        description: '',
        category: '',
        goal: '',
        difficulty: 'beginner',
        duration: '',
        calories: '',
        protein: '',
        carbs: '',
        fat: '',
        fiber: '',
        sugar: '',
        sodium: '',
        mealsPerDay: '3',
        waterIntake: '',
        supplements: [],
        restrictions: [],
        price: '',
        isPremium: false,
        status: 'draft',
        features: [],
        breakfast: '',
        lunch: '',
        dinner: '',
        snacks: '',
        tags: [],
        createdBy: '',
        targetAudience: '',
        successRate: '',
        notes: ''
      });
      
      // Navigate back or show success
      setTimeout(() => {
        navigate('/diet-plans');
      }, 1000);
      
    } catch (error) {
      alert('Error creating diet plan. Please try again.');
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
                <h1 className="text-2xl font-bold text-gray-900">Add New Diet Plan</h1>
                <p className="text-gray-600">Create nutrition plans for your members</p>
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
        <div className=" mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Plan Details</span>
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
                  <Apple className="w-4 h-4 text-blue-500" />
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
                    placeholder="e.g., Weight Loss Warrior, Muscle Gain Blueprint"
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
                    placeholder="Describe the diet plan, benefits, and what members can expect..."
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
                    placeholder="e.g., Dr. Priya Sharma, Nutritionist"
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

            {/* Nutrition Information Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Scale className="w-4 h-4 text-green-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Nutrition Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Calories */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Daily Calories *
                  </label>
                  <input
                    type="text"
                    name="calories"
                    value={formData.calories}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.calories ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="e.g., 1200-1500, 2000-2500"
                  />
                  {errors.calories && (
                    <p className="mt-1 text-sm text-red-600">{errors.calories}</p>
                  )}
                </div>

                {/* Protein */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Protein (g)
                  </label>
                  <input
                    type="text"
                    name="protein"
                    value={formData.protein}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 120g, 150-180g"
                  />
                </div>

                {/* Carbs */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Carbohydrates (g)
                  </label>
                  <input
                    type="text"
                    name="carbs"
                    value={formData.carbs}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 150g, 200-250g"
                  />
                </div>

                {/* Fat */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fat (g)
                  </label>
                  <input
                    type="text"
                    name="fat"
                    value={formData.fat}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 40g, 50-70g"
                  />
                </div>

                {/* Fiber */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fiber (g)
                  </label>
                  <input
                    type="text"
                    name="fiber"
                    value={formData.fiber}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 25-30g"
                  />
                </div>

                {/* Sugar */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sugar (g)
                  </label>
                  <input
                    type="text"
                    name="sugar"
                    value={formData.sugar}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., <30g, <50g"
                  />
                </div>

                {/* Sodium */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sodium (mg)
                  </label>
                  <input
                    type="text"
                    name="sodium"
                    value={formData.sodium}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., <2300mg, <1500mg"
                  />
                </div>

                {/* Water Intake */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Water Intake
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Droplets className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="waterIntake"
                      value={formData.waterIntake}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 3-4 liters, 2.5-3 liters"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Meal Structure Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Coffee className="w-4 h-4 text-orange-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Meal Structure</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Meals Per Day */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meals Per Day
                  </label>
                  <select
                    name="mealsPerDay"
                    value={formData.mealsPerDay}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {mealsOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Supplements */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recommended Supplements
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={newSupplement}
                        onChange={(e) => setNewSupplement(e.target.value)}
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add supplement (e.g., Whey Protein)"
                      />
                      <button
                        type="button"
                        onClick={handleAddSupplement}
                        className="px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Common supplements quick add */}
                    <div className="flex flex-wrap gap-2">
                      {commonSupplements.map(supplement => (
                        <button
                          key={supplement}
                          type="button"
                          onClick={() => {
                            if (!formData.supplements.includes(supplement)) {
                              setFormData(prev => ({
                                ...prev,
                                supplements: [...prev.supplements, supplement]
                              }));
                            }
                          }}
                          className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          {supplement}
                        </button>
                      ))}
                    </div>
                    
                    {/* Added supplements */}
                    {formData.supplements.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {formData.supplements.map((supplement, index) => (
                          <div key={index} className="flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg">
                            <span className="text-sm">{supplement}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveSupplement(index)}
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

                {/* Dietary Restrictions */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dietary Restrictions
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={newRestriction}
                        onChange={(e) => setNewRestriction(e.target.value)}
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add restriction (e.g., Gluten-Free)"
                      />
                      <button
                        type="button"
                        onClick={handleAddRestriction}
                        className="px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Common restrictions quick add */}
                    <div className="flex flex-wrap gap-2">
                      {commonRestrictions.map(restriction => (
                        <button
                          key={restriction}
                          type="button"
                          onClick={() => {
                            if (!formData.restrictions.includes(restriction)) {
                              setFormData(prev => ({
                                ...prev,
                                restrictions: [...prev.restrictions, restriction]
                              }));
                            }
                          }}
                          className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          {restriction}
                        </button>
                      ))}
                    </div>
                    
                    {/* Added restrictions */}
                    {formData.restrictions.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {formData.restrictions.map((restriction, index) => (
                          <div key={index} className="flex items-center px-3 py-1.5 bg-red-50 text-red-700 rounded-lg">
                            <span className="text-sm">{restriction}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveRestriction(index)}
                              className="ml-2 text-red-500 hover:text-red-700"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Sample Breakfast */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sample Breakfast
                  </label>
                  <textarea
                    name="breakfast"
                    value={formData.breakfast}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 3 egg whites, 1 whole egg, Spinach, Green tea"
                  />
                </div>

                {/* Sample Lunch */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sample Lunch
                  </label>
                  <textarea
                    name="lunch"
                    value={formData.lunch}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Grilled chicken breast, Quinoa, Steamed vegetables"
                  />
                </div>

                {/* Sample Dinner */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sample Dinner
                  </label>
                  <textarea
                    name="dinner"
                    value={formData.dinner}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Baked fish, Salad, Avocado"
                  />
                </div>

                {/* Sample Snacks */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sample Snacks
                  </label>
                  <textarea
                    name="snacks"
                    value={formData.snacks}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Greek yogurt, Almonds, Protein shake"
                  />
                </div>
              </div>
            </div>

            {/* Pricing & Features Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Tag className="w-4 h-4 text-purple-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Pricing & Features</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      placeholder="e.g., 2499, 4999"
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
                        placeholder="Add feature (e.g., Weekly Shopping List)"
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
                        placeholder="Add tag (e.g., High Protein, Quick Results)"
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
                    onClick={() => navigate('/diet-plans')}
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
                        <span>Save Diet Plan</span>
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

export default AddDietPlans;