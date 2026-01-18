import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Save,
  X,
  Package,
  IndianRupee,
  Calendar,
  Clock,
  Tag,
  CheckCircle,
  XCircle,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  Shield,
  Target,
  Dumbbell,
  Users,
  Award,
  Crown,
  Star,
  Zap,
  Activity,
  Heart,
  FileText,
  CreditCard,
  Percent,
  ChevronRight,
  ChevronLeft,
  Menu,
  Smartphone
} from 'lucide-react';

const AddPlans = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    // Basic Information
    planName: '',
    planCode: '',
    description: '',
    category: 'Regular',
    
    // Pricing & Duration
    price: '',
    duration: '1 Month',
    discountType: 'none',
    discountAmount: '',
    maxDiscount: '',
    autoRenew: true,
    setupFee: '',
    
    // Features & Services
    features: ['Gym Access', 'Locker'],
    personalTraining: false,
    groupClasses: false,
    nutritionGuide: false,
    saunaAccess: false,
    towelService: false,
    proteinShakes: false,
    massageTherapy: false,
    priorityBooking: false,
    
    // Restrictions & Settings
    freezeAllowed: true,
    freezeDays: '7',
    ageRestriction: '',
    genderRestriction: 'none',
    maxMembers: '',
    validityPeriod: '30',
    trialPeriod: '',
    
    // Additional Information
    tags: [],
    status: 'draft',
    color: 'blue',
    recommended: false,
    featured: false,
    displayOrder: '0',
    
    // Terms & Conditions
    terms: '',
    cancellationPolicy: 'standard',
    refundPolicy: 'no-refund'
  });

  const [featureInput, setFeatureInput] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [activeSection, setActiveSection] = useState('basic');
  const [errors, setErrors] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sections for navigation
  const sections = [
    { id: 'basic', label: 'Basic', icon: FileText },
    { id: 'pricing', label: 'Pricing', icon: IndianRupee },
    { id: 'features', label: 'Features', icon: Package },
    { id: 'restrictions', label: 'Restrictions', icon: Shield },
    { id: 'settings', label: 'Settings', icon: Target },
    { id: 'review', label: 'Review', icon: CheckCircle }
  ];

  // Categories
  const categories = [
    { id: 'Regular', label: 'Regular', icon: Dumbbell, color: 'blue' },
    { id: 'Premium', label: 'Premium', icon: Star, color: 'purple' },
    { id: 'Elite', label: 'Elite', icon: Crown, color: 'gold' },
    { id: 'Special', label: 'Special', icon: Award, color: 'green' },
    { id: 'Corporate', label: 'Corporate', icon: Users, color: 'indigo' }
  ];

  // Duration options
  const durationOptions = [
    { value: '1 Week', label: '1 Week' },
    { value: '2 Weeks', label: '2 Weeks' },
    { value: '1 Month', label: '1 Month' },
    { value: '3 Months', label: '3 Months' },
    { value: '6 Months', label: '6 Months' },
    { value: '12 Months', label: '12 Months' }
  ];

  // Features list
  const availableFeatures = [
    { id: 'personalTraining', label: 'Personal Training', icon: Target },
    { id: 'groupClasses', label: 'Group Classes', icon: Users },
    { id: 'nutritionGuide', label: 'Nutrition Guide', icon: Heart },
    { id: 'saunaAccess', label: 'Sauna Access', icon: Activity },
    { id: 'towelService', label: 'Towel Service', icon: Zap },
    { id: 'proteinShakes', label: 'Protein Shakes', icon: Activity },
    { id: 'massageTherapy', label: 'Massage Therapy', icon: Heart },
    { id: 'priorityBooking', label: 'Priority Booking', icon: Star }
  ];

  // Color options
  const colorOptions = [
    { id: 'blue', label: 'Blue', color: 'bg-blue-500' },
    { id: 'purple', label: 'Purple', color: 'bg-purple-500' },
    { id: 'gold', label: 'Gold', color: 'bg-yellow-500' },
    { id: 'green', label: 'Green', color: 'bg-green-500' },
    { id: 'pink', label: 'Pink', color: 'bg-pink-500' },
    { id: 'orange', label: 'Orange', color: 'bg-orange-500' },
    { id: 'indigo', label: 'Indigo', color: 'bg-indigo-500' },
    { id: 'gray', label: 'Gray', color: 'bg-gray-500' }
  ];

  // Handle form changes
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleAddFeature = () => {
    if (featureInput.trim() && !formData.features.includes(featureInput.trim())) {
      handleChange('features', [...formData.features, featureInput.trim()]);
      setFeatureInput('');
    }
  };

  const handleRemoveFeature = (feature) => {
    handleChange('features', formData.features.filter(f => f !== feature));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      handleChange('tags', [...formData.tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag) => {
    handleChange('tags', formData.tags.filter(t => t !== tag));
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.planName.trim()) {
      newErrors.planName = 'Plan name is required';
    }
    
    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Valid price is required';
    }
    
    if (formData.discountType !== 'none' && !formData.discountAmount) {
      newErrors.discountAmount = 'Discount amount is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Membership plan created successfully!');
      navigate('/ultimate-control/memberships/plans');
    }
  };

  // Calculate discounted price
  const calculateDiscountedPrice = () => {
    const price = parseFloat(formData.price) || 0;
    let discount = 0;
    
    if (formData.discountType === 'percentage' && formData.discountAmount) {
      discount = price * (parseFloat(formData.discountAmount) / 100);
    } else if (formData.discountType === 'fixed' && formData.discountAmount) {
      discount = parseFloat(formData.discountAmount);
    }
    
    if (formData.maxDiscount && discount > parseFloat(formData.maxDiscount)) {
      discount = parseFloat(formData.maxDiscount);
    }
    
    return Math.max(0, price - discount);
  };

  // Navigation icons
  const SettingsIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  // Mobile Navigation Component
  const MobileNavigation = () => (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={() => {
            const currentIndex = sections.findIndex(s => s.id === activeSection);
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : sections.length - 1;
            setActiveSection(sections[prevIndex].id);
          }}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="text-center">
          <div className="text-xs text-gray-500">
            Step {sections.findIndex(s => s.id === activeSection) + 1} of {sections.length}
          </div>
          <div className="text-sm font-medium text-gray-800">
            {sections.find(s => s.id === activeSection)?.label}
          </div>
        </div>
        
        <button
          onClick={() => {
            const currentIndex = sections.findIndex(s => s.id === activeSection);
            const nextIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : 0;
            setActiveSection(sections[nextIndex].id);
          }}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 md:p-3 p-1">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col bg-white p-3 rounded-2xl sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4">
          <div className="flex items-center space-x-2 sm:space-x-3 ">
            <button
              onClick={() => navigate('/ultimate-control/memberships/plans')}
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                Create New Plan
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">
                Define your gym's membership packages and pricing
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3">
           
            
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => navigate('/ultimate-control/memberships/plans')}
                className="px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-3 py-2 sm:px-4 sm:py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium text-sm flex items-center"
              >
                <Save className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                <span className="hidden sm:inline">Create Plan</span>
                <span className="sm:hidden">Create</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Actions Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg border border-gray-200 shadow-lg p-3 mb-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={handleSubmit}
                className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium flex items-center justify-center"
              >
                <Save className="w-4 h-4 mr-2" />
                Save & Create
              </button>
              <button
                onClick={() => {
                  handleChange('status', 'draft');
                  alert('Plan saved as draft!');
                }}
                className="w-full py-2.5 bg-gray-600 text-white rounded-lg font-medium"
              >
                Save as Draft
              </button>
              <button
                onClick={() => navigate('/ultimate-control/memberships/plans')}
                className="w-full py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Progress Steps - Desktop */}
        <div className="hidden md:block bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex items-center justify-between">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <section.icon className="w-4 h-4" />
                <span className="font-medium text-sm">{section.label}</span>
                {index < sections.length - 1 && (
                  <div className="ml-2 w-12 h-0.5 bg-gray-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Progress Steps - Mobile */}
        <div className="md:hidden bg-white rounded-lg border border-gray-200 p-3 mb-4">
          <div className="flex overflow-x-auto pb-2 space-x-2">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap text-xs ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <section.icon className="w-3 h-3" />
                <span>{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Form Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Basic Information Section */}
            {activeSection === 'basic' && (
              <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-4 sm:p-6">
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    Basic Information
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Plan Name & Code */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Plan Name *
                      </label>
                      <input
                        type="text"
                        value={formData.planName}
                        onChange={(e) => handleChange('planName', e.target.value)}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.planName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="e.g., Premium Plus Membership"
                      />
                      {errors.planName && (
                        <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.planName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Plan Code
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.planCode || `PLAN-${Date.now().toString().slice(-6)}`}
                          onChange={(e) => handleChange('planCode', e.target.value)}
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          readOnly
                        />
                        <button
                          type="button"
                          onClick={() => handleChange('planCode', '')}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded"
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Description *
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      rows="2"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe the plan benefits and features..."
                    />
                  </div>

                  {/* Category Selection */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">
                      Category *
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
                      {categories.map(category => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => handleChange('category', category.id)}
                          className={`flex flex-col items-center justify-center p-2 sm:p-3 border rounded-lg transition-all ${
                            formData.category === category.id
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          <category.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                            formData.category === category.id
                              ? `text-${category.color}-600`
                              : 'text-gray-500'
                          }`} />
                          <span className="mt-1.5 text-xs sm:text-sm font-medium text-gray-700">
                            {category.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Selection */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">
                      Plan Color Theme
                    </label>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {colorOptions.map(color => (
                        <button
                          key={color.id}
                          type="button"
                          onClick={() => handleChange('color', color.id)}
                          className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg border-2 ${
                            formData.color === color.id
                              ? 'border-blue-600 ring-1 sm:ring-2 ring-blue-200'
                              : 'border-gray-300'
                          }`}
                        >
                          <div className={`w-full h-full rounded ${color.color}`}></div>
                          {formData.color === color.id && (
                            <CheckCircle className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 text-blue-600 bg-white rounded-full" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pricing Section */}
            {activeSection === 'pricing' && (
              <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-4 sm:p-6">
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    Pricing & Duration
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Price & Duration */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Base Price (₹) *
                      </label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <input
                          type="number"
                          value={formData.price}
                          onChange={(e) => handleChange('price', e.target.value)}
                          className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                            errors.price ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="0.00"
                          min="0"
                          step="0.01"
                        />
                      </div>
                      {errors.price && (
                        <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.price}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Duration *
                      </label>
                      <select
                        value={formData.duration}
                        onChange={(e) => handleChange('duration', e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {durationOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Setup Fee */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Setup Fee (Optional)
                    </label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="number"
                        value={formData.setupFee}
                        onChange={(e) => handleChange('setupFee', e.target.value)}
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                      />
                    </div>
                  </div>

                  {/* Discount Options */}
                  <div className="border-t border-gray-200 pt-4 sm:pt-6">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                      Discount Settings
                    </h3>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                          Discount Type
                        </label>
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                          {['none', 'percentage', 'fixed'].map(type => (
                            <label key={type} className="flex items-center">
                              <input
                                type="radio"
                                name="discountType"
                                value={type}
                                checked={formData.discountType === type}
                                onChange={(e) => handleChange('discountType', e.target.value)}
                                className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                              />
                              <span className="ml-1.5 text-xs sm:text-sm text-gray-700 capitalize">
                                {type === 'none' ? 'No Discount' : 
                                 type === 'percentage' ? 'Percentage' : 'Fixed Amount'}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {formData.discountType !== 'none' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                              Discount Amount *
                              {formData.discountType === 'percentage' && ' (%)'}
                            </label>
                            <div className="relative">
                              {formData.discountType === 'percentage' ? (
                                <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                              ) : (
                                <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                              )}
                              <input
                                type="number"
                                value={formData.discountAmount}
                                onChange={(e) => handleChange('discountAmount', e.target.value)}
                                className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                  errors.discountAmount ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder={formData.discountType === 'percentage' ? '10' : '500'}
                                min="0"
                                step={formData.discountType === 'percentage' ? '0.1' : '1'}
                              />
                            </div>
                            {errors.discountAmount && (
                              <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.discountAmount}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                              Maximum Discount
                            </label>
                            <div className="relative">
                              <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                              <input
                                type="number"
                                value={formData.maxDiscount}
                                onChange={(e) => handleChange('maxDiscount', e.target.value)}
                                className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="1000"
                                min="0"
                                step="1"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Auto Renew */}
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-medium text-gray-800">Auto Renewal</h4>
                        <p className="text-xs text-gray-600 hidden sm:block">
                          Automatically renew membership at expiry
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleChange('autoRenew', !formData.autoRenew)}
                      className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                        formData.autoRenew ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                          formData.autoRenew ? 'translate-x-4 sm:translate-x-6' : 'translate-x-0.5'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Features Section */}
            {activeSection === 'features' && (
              <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-4 sm:p-6">
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <Package className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    Features & Services
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Custom Features */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Plan Features
                    </label>
                    <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 mb-3">
                      <input
                        type="text"
                        value={featureInput}
                        onChange={(e) => setFeatureInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddFeature())}
                        className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Add a feature"
                      />
                      <button
                        type="button"
                        onClick={handleAddFeature}
                        className="px-3 sm:px-4 py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                      >
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4 inline sm:hidden" />
                        <span className="hidden sm:inline">Add Feature</span>
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {formData.features.map((feature, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm"
                        >
                          <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                          {feature}
                          <button
                            type="button"
                            onClick={() => handleRemoveFeature(feature)}
                            className="ml-1.5 text-blue-600 hover:text-blue-800"
                          >
                            <X className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                      Additional Services
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                      {availableFeatures.map(feature => (
                        <label
                          key={feature.id}
                          className={`flex items-center space-x-2 sm:space-x-3 p-3 border rounded-lg cursor-pointer transition-all ${
                            formData[feature.id]
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData[feature.id]}
                            onChange={(e) => handleChange(feature.id, e.target.checked)}
                            className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                            formData[feature.id] ? 'text-blue-600' : 'text-gray-500'
                          }`} />
                          <span className="text-xs sm:text-sm font-medium text-gray-700">
                            {feature.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Restrictions Section */}
            {activeSection === 'restrictions' && (
              <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-4 sm:p-6">
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    Restrictions & Limits
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Freeze Settings */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        <div>
                          <h4 className="text-xs sm:text-sm font-medium text-gray-800">Freeze Allowed</h4>
                          <p className="text-xs text-gray-600 hidden sm:block">
                            Allow members to freeze membership
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleChange('freezeAllowed', !formData.freezeAllowed)}
                        className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                          formData.freezeAllowed ? 'bg-green-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                            formData.freezeAllowed ? 'translate-x-4 sm:translate-x-6' : 'translate-x-0.5'
                          }`}
                        />
                      </button>
                    </div>

                    {formData.freezeAllowed && (
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                          Maximum Freeze Days
                        </label>
                        <select
                          value={formData.freezeDays}
                          onChange={(e) => handleChange('freezeDays', e.target.value)}
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="7">7 Days</option>
                          <option value="14">14 Days</option>
                          <option value="30">30 Days</option>
                          <option value="60">60 Days</option>
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Age & Gender Restrictions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Age Restriction
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={formData.ageRestriction}
                          onChange={(e) => handleChange('ageRestriction', e.target.value)}
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., 18"
                          min="0"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs sm:text-sm text-gray-500">
                          years+
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Gender Restriction
                      </label>
                      <select
                        value={formData.genderRestriction}
                        onChange={(e) => handleChange('genderRestriction', e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="none">No Restriction</option>
                        <option value="male">Male Only</option>
                        <option value="female">Female Only</option>
                      </select>
                    </div>
                  </div>

                  {/* Max Members & Validity */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Maximum Members
                      </label>
                      <input
                        type="number"
                        value={formData.maxMembers}
                        onChange={(e) => handleChange('maxMembers', e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Unlimited"
                        min="0"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Validity Period (Days)
                      </label>
                      <input
                        type="number"
                        value={formData.validityPeriod}
                        onChange={(e) => handleChange('validityPeriod', e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="30"
                        min="1"
                      />
                    </div>
                  </div>

                  {/* Trial Period */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Trial Period (Days)
                    </label>
                    <input
                      type="number"
                      value={formData.trialPeriod}
                      onChange={(e) => handleChange('trialPeriod', e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., 7"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Settings Section */}
            {activeSection === 'settings' && (
              <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-4 sm:p-6">
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <SettingsIcon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    Advanced Settings
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Status & Display Order */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Plan Status
                      </label>
                      <select
                        value={formData.status}
                        onChange={(e) => handleChange('status', e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="draft">Draft</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Display Order
                      </label>
                      <input
                        type="number"
                        value={formData.displayOrder}
                        onChange={(e) => handleChange('displayOrder', e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0"
                        min="0"
                      />
                    </div>
                  </div>

                  {/* Flags */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <label className="flex items-center space-x-2 sm:space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.recommended}
                        onChange={(e) => handleChange('recommended', e.target.checked)}
                        className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-medium text-gray-800">Recommended</h4>
                        <p className="text-xs text-gray-600 hidden sm:block">
                          Mark as recommended for new members
                        </p>
                      </div>
                    </label>

                    <label className="flex items-center space-x-2 sm:space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.featured}
                        onChange={(e) => handleChange('featured', e.target.checked)}
                        className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-medium text-gray-800">Featured</h4>
                        <p className="text-xs text-gray-600 hidden sm:block">
                          Show in featured section
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Tags
                    </label>
                    <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 mb-3">
                      <input
                        type="text"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                        className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Add tags"
                      />
                      <button
                        type="button"
                        onClick={handleAddTag}
                        className="px-3 sm:px-4 py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                      >
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4 inline sm:hidden" />
                        <span className="hidden sm:inline">Add Tag</span>
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {formData.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm"
                        >
                          <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="ml-1.5 text-gray-500 hover:text-gray-700"
                          >
                            <X className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Review Section */}
            {activeSection === 'review' && (
              <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-4 sm:p-6">
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    Review & Create
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Plan Summary */}
                  <div className={`bg-gradient-to-br ${
                    formData.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    formData.color === 'purple' ? 'from-purple-500 to-purple-600' :
                    formData.color === 'gold' ? 'from-yellow-500 to-yellow-600' :
                    formData.color === 'green' ? 'from-green-500 to-green-600' :
                    formData.color === 'pink' ? 'from-pink-500 to-pink-600' :
                    formData.color === 'orange' ? 'from-orange-500 to-orange-600' :
                    formData.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                    'from-gray-500 to-gray-600'
                  } text-white p-4 sm:p-6 rounded-lg sm:rounded-xl`}>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 sm:mb-4">
                      <div className="mb-2 sm:mb-0">
                        <div className="text-xs sm:text-sm font-medium opacity-80">{formData.category}</div>
                        <h3 className="text-lg sm:text-xl font-bold mt-1">{formData.planName || 'New Plan'}</h3>
                        <p className="opacity-90 mt-2 text-xs sm:text-sm">{formData.description || 'Plan description'}</p>
                      </div>
                      <div className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium ${
                        formData.status === 'active' ? 'bg-green-100 text-green-800' :
                        formData.status === 'inactive' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {formData.status.toUpperCase()}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between">
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold flex items-center">
                          <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6 mr-1" />
                          {formData.price ? parseFloat(formData.price).toLocaleString() : '0'}
                        </div>
                        <div className="opacity-90 text-sm">{formData.duration}</div>
                      </div>
                      <div className="mt-2 sm:mt-0 sm:text-right">
                        <div className="text-lg sm:text-xl font-bold">
                          ₹{calculateDiscountedPrice().toLocaleString()}
                        </div>
                        <div className="text-xs sm:text-sm opacity-90">After Discount</div>
                      </div>
                    </div>
                  </div>

                  {/* Features Summary */}
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                      Features Included
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {formData.features.slice(0, 8).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 p-2 sm:p-3 bg-gray-50 rounded-lg">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                          <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {formData.features.length > 8 && (
                        <div className="text-xs sm:text-sm text-gray-500">
                          +{formData.features.length - 8} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Settings Summary */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Settings</h4>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-600">Auto Renew:</span>
                          <span className="font-medium">
                            {formData.autoRenew ? 'Yes' : 'No'}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-600">Freeze Allowed:</span>
                          <span className="font-medium">
                            {formData.freezeAllowed ? `${formData.freezeDays} days` : 'No'}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-600">Max Members:</span>
                          <span className="font-medium">
                            {formData.maxMembers || 'Unlimited'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Visibility</h4>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-600">Recommended:</span>
                          <span className="font-medium">
                            {formData.recommended ? 'Yes' : 'No'}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-600">Featured:</span>
                          <span className="font-medium">
                            {formData.featured ? 'Yes' : 'No'}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-600">Display Order:</span>
                          <span className="font-medium">{formData.displayOrder}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Final Actions */}
                  <div className="border-t border-gray-200 pt-4 sm:pt-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                      <button
                        type="button"
                        onClick={() => setActiveSection('basic')}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Edit Plan Details
                      </button>
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                        <button
                          type="button"
                          onClick={() => navigate('/ultimate-control/memberships/plans')}
                          className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 font-medium text-sm flex items-center justify-center"
                        >
                          <Save className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          Create Membership Plan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Preview & Summary */}
          <div className="space-y-4 sm:space-y-6">
            {/* Plan Preview */}
            <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-4 sm:p-6 sticky top-4 sm:top-6">
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4">Plan Preview</h3>
              
              <div className={`bg-gradient-to-br ${
                formData.color === 'blue' ? 'from-blue-500 to-blue-600' :
                formData.color === 'purple' ? 'from-purple-500 to-purple-600' :
                formData.color === 'gold' ? 'from-yellow-500 to-yellow-600' :
                formData.color === 'green' ? 'from-green-500 to-green-600' :
                formData.color === 'pink' ? 'from-pink-500 to-pink-600' :
                formData.color === 'orange' ? 'from-orange-500 to-orange-600' :
                formData.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                'from-gray-500 to-gray-600'
              } text-white p-4 rounded-lg mb-3 sm:mb-4`}>
                <div className="mb-2">
                  <div className="text-xs font-medium opacity-80">{formData.category}</div>
                  <h4 className="text-base sm:text-lg font-bold truncate">{formData.planName || 'New Plan'}</h4>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-end justify-between">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold flex items-center">
                      <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                      {formData.price ? parseFloat(formData.price).toLocaleString() : '0'}
                    </div>
                    <div className="opacity-90 text-xs sm:text-sm">{formData.duration}</div>
                  </div>
                  
                  {formData.discountType !== 'none' && (
                    <div className="mt-2 sm:mt-0 sm:text-right">
                      <div className="text-base sm:text-lg font-bold line-through opacity-75">
                        ₹{formData.price || '0'}
                      </div>
                      <div className="text-xs bg-white/20 px-2 py-0.5 rounded mt-1">
                        Save ₹{(parseFloat(formData.price) - calculateDiscountedPrice()).toLocaleString()}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Discounted Price:</span>
                  <span className="font-bold text-green-600">
                    ₹{calculateDiscountedPrice().toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Setup Fee:</span>
                  <span className="font-medium">
                    {formData.setupFee ? `₹${formData.setupFee}` : 'None'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Features:</span>
                  <span className="font-medium">{formData.features.length} included</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Status:</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    formData.status === 'active' ? 'bg-green-100 text-green-800' :
                    formData.status === 'inactive' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {formData.status.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Navigation Help */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Quick Navigation</h4>
                <div className="space-y-1.5 sm:space-y-2">
                  {sections.map(section => (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => setActiveSection(section.id)}
                      className={`flex items-center space-x-2 w-full text-left p-1.5 sm:p-2 rounded-lg transition-colors text-xs sm:text-sm ${
                        activeSection === section.id
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <section.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-medium">{section.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tips & Guidelines */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg sm:rounded-xl p-4">
              <h4 className="font-medium text-blue-800 mb-2 text-sm">💡 Tips for Great Plans</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-blue-700">
                <li className="flex items-start">
                  <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 mt-0.5 mr-1.5 flex-shrink-0" />
                  Keep plan names clear and descriptive
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 mt-0.5 mr-1.5 flex-shrink-0" />
                  Include popular features at different price points
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 mt-0.5 mr-1.5 flex-shrink-0" />
                  Set competitive prices based on local market
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 mt-0.5 mr-1.5 flex-shrink-0" />
                  Use clear, benefit-oriented descriptions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>

      {/* Mobile Navigation Bottom Bar */}
      <MobileNavigation />

      {/* Mobile Footer Actions */}
      <div className="md:hidden fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="p-4">
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={() => navigate('/ultimate-control/memberships/plans')}
              className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium text-sm"
            >
              Create Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlans;