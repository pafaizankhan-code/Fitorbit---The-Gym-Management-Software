import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Tag, 
  Percent, 
  Calendar, 
  Clock, 
  Users, 
  DollarSign,
  Target,
  Bell,
  TrendingUp,
  FileText,
  Image,
  Globe,
  Smartphone,
  Mail,
  Code,
  BarChart,
  CheckCircle,
  XCircle,
  Plus,
  Minus,
  Save,
  X,
  Upload,
  Eye,
  EyeOff,
  Link,
  Copy,
  Award,
  Gift,
  Star,
  Heart,
  Zap,
  Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateOffer = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    // Basic Information
    offerName: '',
    description: '',
    offerType: 'discount',
    code: '',
    
    // Discount Details
    discountType: 'percentage',
    discountValue: '',
    maxDiscount: '',
    minPurchase: '',
    
    // Validity
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    
    // Usage Limits
    usageLimit: '',
    perUserLimit: '',
    
    // Eligibility
    eligibleFor: 'all',
    membershipType: [],
    branch: [],
    classType: [],
    
    // Display & Status
    status: 'active',
    priority: 'medium',
    showOnWebsite: true,
    showOnApp: true,
    
    // Additional Details
    tags: [],
    terms: '',
    notes: ''
  });

  // Error state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newTag, setNewTag] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  // Options
  const offerTypeOptions = [
    { value: 'discount', label: 'Discount' },
    { value: 'flat-off', label: 'Flat Off' },
    { value: 'free-trial', label: 'Free Trial' },
    { value: 'combo', label: 'Combo Offer' },
    { value: 'referral', label: 'Referral Bonus' },
    { value: 'seasonal', label: 'Seasonal Offer' },
    { value: 'festival', label: 'Festival Special' },
    { value: 'anniversary', label: 'Anniversary Offer' },
    { value: 'birthday', label: 'Birthday Special' },
    { value: 'corporate', label: 'Corporate Discount' },
    { value: 'student', label: 'Student Discount' },
    { value: 'senior', label: 'Senior Citizen Discount' }
  ];

  const discountTypeOptions = [
    { value: 'percentage', label: 'Percentage' },
    { value: 'fixed', label: 'Fixed Amount' },
    { value: 'free-session', label: 'Free Session' },
    { value: 'buy-one-get-one', label: 'Buy One Get One' }
  ];

  const eligibleForOptions = [
    { value: 'all', label: 'All Members' },
    { value: 'new', label: 'New Members Only' },
    { value: 'existing', label: 'Existing Members Only' },
    { value: 'inactive', label: 'Inactive Members' },
    { value: 'premium', label: 'Premium Members' },
    { value: 'regular', label: 'Regular Members' }
  ];

  const membershipTypeOptions = [
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'half-yearly', label: 'Half Yearly' },
    { value: 'yearly', label: 'Yearly' },
    { value: 'lifetime', label: 'Lifetime' }
  ];

  const branchOptions = [
    { value: 'all', label: 'All Branches' },
    { value: 'mumbai-central', label: 'Mumbai Central' },
    { value: 'andheri-west', label: 'Andheri West' },
    { value: 'bandra', label: 'Bandra' },
    { value: 'powai', label: 'Powai' },
    { value: 'thane', label: 'Thane' }
  ];

  const classTypeOptions = [
    { value: 'all', label: 'All Classes' },
    { value: 'yoga', label: 'Yoga' },
    { value: 'hiit', label: 'HIIT' },
    { value: 'strength', label: 'Strength Training' },
    { value: 'dance', label: 'Dance' },
    { value: 'pilates', label: 'Pilates' },
    { value: 'cycling', label: 'Cycling' },
    { value: 'meditation', label: 'Meditation' }
  ];

  const statusOptions = [
    { value: 'draft', label: 'Draft' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'expired', label: 'Expired' },
    { value: 'upcoming', label: 'Upcoming' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'urgent', label: 'Urgent' }
  ];

  const commonTags = [
    'New Year',
    'Summer Special',
    'Winter Offer',
    'Monsoon Discount',
    'Weekend Special',
    'Early Bird',
    'Flash Sale',
    'Limited Time',
    'Exclusive',
    'Popular',
    'Hot Deal',
    'Best Seller'
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

  // Handle multi-select changes
  const handleMultiSelect = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter(item => item !== value)
        : [...prev[name], value]
    }));
  };

  // Generate random offer code
  const generateOfferCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCode(code);
    setFormData(prev => ({ ...prev, code }));
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
    if (!formData.offerName.trim()) newErrors.offerName = 'Offer name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.offerType) newErrors.offerType = 'Offer type is required';
    if (!formData.code.trim()) newErrors.code = 'Offer code is required';
    if (!formData.discountType) newErrors.discountType = 'Discount type is required';
    if (!formData.discountValue) newErrors.discountValue = 'Discount value is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate) newErrors.endDate = 'End date is required';
    
    // Date validation
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      if (start > end) newErrors.endDate = 'End date must be after start date';
    }
    
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
      
      // Create offer data
      const offerData = {
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        usedCount: 0,
        remainingUses: formData.usageLimit || 'Unlimited'
      };
      
      console.log('Offer Data:', offerData);
      
      // Show success message
      alert('Offer created successfully!');
      
      // Reset form
      setFormData({
        offerName: '',
        description: '',
        offerType: 'discount',
        code: '',
        discountType: 'percentage',
        discountValue: '',
        maxDiscount: '',
        minPurchase: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        usageLimit: '',
        perUserLimit: '',
        eligibleFor: 'all',
        membershipType: [],
        branch: [],
        classType: [],
        status: 'active',
        priority: 'medium',
        showOnWebsite: true,
        showOnApp: true,
        tags: [],
        terms: '',
        notes: ''
      });
      
      // Navigate back
      setTimeout(() => {
        navigate('/ultimate-control/offers');
      }, 1000);
      
    } catch (error) {
      alert('Error creating offer. Please try again.');
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
                <h1 className="text-2xl font-bold text-gray-900">Create New Offer</h1>
                <p className="text-gray-600">Create promotional offers and discounts</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate('/ultimate-control/offers')}
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
                <span>{isSubmitting ? 'Saving...' : 'Create Offer'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="px-4 py-6">
        <div className="mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Tag className="w-4 h-4 text-blue-500" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Basic Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Offer Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Offer Name *
                  </label>
                  <input
                    type="text"
                    name="offerName"
                    value={formData.offerName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.offerName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Summer Special 2024, New Member Discount"
                  />
                  {errors.offerName && (
                    <p className="mt-1 text-sm text-red-600">{errors.offerName}</p>
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
                    placeholder="Describe the offer, benefits, and promotion details..."
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                  )}
                </div>

                {/* Offer Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Offer Type *
                  </label>
                  <select
                    name="offerType"
                    value={formData.offerType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.offerType ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Offer Type</option>
                    {offerTypeOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.offerType && (
                    <p className="mt-1 text-sm text-red-600">{errors.offerType}</p>
                  )}
                </div>

                {/* Offer Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Offer Code *
                  </label>
                  <div className="relative">
                    <input
                      type={showCode ? "text" : "password"}
                      name="code"
                      value={formData.code}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.code ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="e.g., SUMMER24, NEWMEM50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCode(!showCode)}
                      className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showCode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button
                      type="button"
                      onClick={generateOfferCode}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200"
                    >
                      Generate
                    </button>
                  </div>
                  {errors.code && (
                    <p className="mt-1 text-sm text-red-600">{errors.code}</p>
                  )}
                  {generatedCode && (
                    <p className="mt-1 text-xs text-green-600">
                      Generated Code: {generatedCode}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Discount Details Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Percent className="w-4 h-4 text-green-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Discount Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Discount Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Discount Type *
                  </label>
                  <select
                    name="discountType"
                    value={formData.discountType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.discountType ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Discount Type</option>
                    {discountTypeOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.discountType && (
                    <p className="mt-1 text-sm text-red-600">{errors.discountType}</p>
                  )}
                </div>

                {/* Discount Value */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Discount Value *
                  </label>
                  <div className="relative">
                    {formData.discountType === 'percentage' ? (
                      <div className="relative">
                        <input
                          type="number"
                          name="discountValue"
                          value={formData.discountValue}
                          onChange={handleChange}
                          min="0"
                          max="100"
                          className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.discountValue ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="e.g., 20"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">%</span>
                        </div>
                      </div>
                    ) : formData.discountType === 'fixed' ? (
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">₹</span>
                        </div>
                        <input
                          type="number"
                          name="discountValue"
                          value={formData.discountValue}
                          onChange={handleChange}
                          min="0"
                          className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.discountValue ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="e.g., 500"
                        />
                      </div>
                    ) : (
                      <input
                        type="text"
                        name="discountValue"
                        value={formData.discountValue}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.discountValue ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="e.g., 1 Free Session"
                      />
                    )}
                  </div>
                  {errors.discountValue && (
                    <p className="mt-1 text-sm text-red-600">{errors.discountValue}</p>
                  )}
                </div>

                {/* Maximum Discount (for percentage) */}
                {formData.discountType === 'percentage' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Maximum Discount Amount
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">₹</span>
                      </div>
                      <input
                        type="number"
                        name="maxDiscount"
                        value={formData.maxDiscount}
                        onChange={handleChange}
                        min="0"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 1000"
                      />
                    </div>
                  </div>
                )}

                {/* Minimum Purchase */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Purchase Amount
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">₹</span>
                    </div>
                    <input
                      type="number"
                      name="minPurchase"
                      value={formData.minPurchase}
                      onChange={handleChange}
                      min="0"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 2000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Validity Period Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-purple-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Validity Period</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Start Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.startDate ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.startDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.startDate}</p>
                  )}
                </div>

                {/* End Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date *
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.endDate ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.endDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.endDate}</p>
                  )}
                </div>

                {/* Start Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Time
                  </label>
                  <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* End Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Time
                  </label>
                  <input
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Usage Limits Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-orange-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Usage Limits</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Total Usage Limit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Usage Limit
                  </label>
                  <input
                    type="number"
                    name="usageLimit"
                    value={formData.usageLimit}
                    onChange={handleChange}
                    min="0"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 100 (Leave empty for unlimited)"
                  />
                </div>

                {/* Per User Limit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Uses Per Member
                  </label>
                  <input
                    type="number"
                    name="perUserLimit"
                    value={formData.perUserLimit}
                    onChange={handleChange}
                    min="0"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 1 (Leave empty for unlimited)"
                  />
                </div>
              </div>
            </div>

            {/* Eligibility Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-red-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Eligibility</h2>
              </div>

              <div className="space-y-6">
                {/* Eligible For */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Eligible For *
                  </label>
                  <select
                    name="eligibleFor"
                    value={formData.eligibleFor}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {eligibleForOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Membership Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Membership Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {membershipTypeOptions.map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleMultiSelect('membershipType', option.value)}
                        className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                          formData.membershipType.includes(option.value)
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Branch */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Applicable Branches
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {branchOptions.map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleMultiSelect('branch', option.value)}
                        className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                          formData.branch.includes(option.value)
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Class Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Applicable Classes
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {classTypeOptions.map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleMultiSelect('classType', option.value)}
                        className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                          formData.classType.includes(option.value)
                            ? 'bg-purple-500 text-white border-purple-500'
                            : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Display & Status Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Bell className="w-4 h-4 text-yellow-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Display & Status</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status *
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

                {/* Priority */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {priorityOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Display Options */}
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="showOnWebsite"
                      name="showOnWebsite"
                      checked={formData.showOnWebsite}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-500 rounded border-gray-300"
                    />
                    <label htmlFor="showOnWebsite" className="text-sm font-medium text-gray-700">
                      Show on Website
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="showOnApp"
                      name="showOnApp"
                      checked={formData.showOnApp}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-500 rounded border-gray-300"
                    />
                    <label htmlFor="showOnApp" className="text-sm font-medium text-gray-700">
                      Show on Mobile App
                    </label>
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
                        placeholder="Add tag (e.g., Summer Special)"
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

                {/* Terms & Conditions */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Terms & Conditions
                  </label>
                  <textarea
                    name="terms"
                    value={formData.terms}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add terms and conditions for this offer..."
                  />
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
                    rows="3"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add any additional information or notes..."
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                <div className="text-sm text-gray-600">
                  <p className="font-medium">Offer Status: <span className={
                    formData.status === 'active' ? 'text-green-600' :
                    formData.status === 'draft' ? 'text-yellow-600' :
                    formData.status === 'inactive' ? 'text-red-600' :
                    formData.status === 'expired' ? 'text-gray-600' :
                    'text-blue-600'
                  }>{formData.status.toUpperCase()}</span></p>
                  <p className="text-xs mt-1">Save as draft or activate immediately</p>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => navigate('/ultimate-control/offers')}
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
                        <span>Create Offer</span>
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

export default CreateOffer;