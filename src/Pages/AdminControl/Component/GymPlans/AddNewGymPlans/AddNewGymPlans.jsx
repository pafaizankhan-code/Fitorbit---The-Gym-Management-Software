import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Package,
  IndianRupee,
  Calendar,
  Users,
  Settings,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Save,
  X,
  Target,
  Shield,
  Crown,
  Zap,
  Award,
  Clock,
  Database,
  BarChart,
  FileText,
  CreditCard,
  Building2,
  Check,
  Plus,
  AlertCircle,
  Info,
  Loader2
} from 'lucide-react';

const AddNewGymPlans = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // For edit mode
  
  // State Management
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [apiErrors, setApiErrors] = useState([]);
  const [loading, setLoading] = useState(!!id);
  const [isEditMode, setIsEditMode] = useState(!!id);
  
  // Form state
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    name: '',
    planType: 'Basic',
    description: '',
    
    // Step 2: Pricing & Duration
    price: '',
    billingCycle: 'monthly',
    duration: '3',
    durationUnit: 'months',
    originalPrice: '',
    setupFee: '0',
    commission: '4',
    paymentTerms: 'Advance',
    
    // Step 3: Features & Limits
    features: ['Unlimited Gym Access', 'Basic Equipment', 'Locker Room Access'],
    maxGyms: '1',
    maxStaff: '5',
    maxMembers: '500',
    storage: '50 GB',
    supportLevel: 'Email Only',
    
    // Step 4: Additional Settings
    isFeatured: false,
    isPopular: false,
    freeTrialDays: '7',
    renewalDiscount: '0',
    status: 'active',
    
    // Step 5: Target Audience
    targetAudience: ['Beginners', 'Students'],
  });

  // Features input
  const [newFeature, setNewFeature] = useState('');
  const [newAudience, setNewAudience] = useState('');

  // Validation errors
  const [errors, setErrors] = useState({});

  // Steps
  const steps = [
    { id: 1, title: 'Basic Info', icon: Package },
    { id: 2, title: 'Pricing', icon: IndianRupee },
    { id: 3, title: 'Features', icon: Settings },
    { id: 4, title: 'Settings', icon: BarChart },
    { id: 5, title: 'Target', icon: Users },
    { id: 6, title: 'Review', icon: CheckCircle }
  ];

  // API Configuration
  const API_BASE_URL = 'http://localhost:5000/api';
  
  // Get token from session storage
  const getToken = () => {
    return sessionStorage.getItem('Fitorbit_token');
  };

  // Make API Call
  const makeApiCall = async (method, endpoint, data = null) => {
    try {
      const token = getToken();
      if (!token) {
        throw new Error('Authentication token not found. Please login again.');
      }

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };

      const options = {
        method,
        headers,
      };

      if (data) {
        options.body = JSON.stringify(data);
      }

      const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
      const responseData = await response.json();

      if (!response.ok) {
        throw {
          status: response.status,
          message: responseData.message || 'Something went wrong',
          errors: responseData.errors || []
        };
      }

      return responseData;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  };

  // Fetch package data for edit mode
  useEffect(() => {
    if (isEditMode && id) {
      fetchPackageData();
    }
  }, [id, isEditMode]);

  const fetchPackageData = async () => {
    try {
      setLoading(true);
      const result = await makeApiCall('GET', `/membership/${id}`);
      
      if (result.success && result.plan) { // Yahan change: result.data.plan ki jagah result.plan
        const plan = result.plan;
        
        // Transform API data to match form structure
        setFormData({
          name: plan.name || '',
          planType: plan.planType || 'Basic',
          description: plan.description || '',
          
          price: plan.price || '',
          billingCycle: plan.billingCycle || 'monthly',
          duration: plan.duration || '3',
          durationUnit: plan.durationUnit || 'months',
          originalPrice: plan.originalPrice || '',
          setupFee: plan.setupFee || '0',
          commission: plan.commission || '4',
          paymentTerms: plan.paymentTerms || 'Advance',
          
          features: plan.features || ['Unlimited Gym Access', 'Basic Equipment', 'Locker Room Access'],
          maxGyms: plan.maxGyms || '1',
          maxStaff: plan.maxStaff || '5',
          maxMembers: plan.maxMembers || '500',
          storage: plan.storage || '50 GB',
          supportLevel: plan.supportLevel || 'Email Only',
          
          isFeatured: plan.isFeatured || false,
          isPopular: plan.isPopular || false,
          freeTrialDays: plan.freeTrialDays || '7',
          renewalDiscount: plan.renewalDiscount || '0',
          status: plan.status || 'active',
          
          targetAudience: plan.targetAudience || ['Beginners', 'Students'],
        });
      } else {
        setSubmitError('Failed to load package data');
      }
    } catch (error) {
      console.error('Error fetching package data:', error);
      setSubmitError(error.message || 'Failed to load package data');
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Convert numeric fields to numbers
    const numericFields = ['price', 'originalPrice', 'setupFee', 'commission', 
                          'duration', 'maxGyms', 'maxStaff', 'maxMembers', 
                          'freeTrialDays', 'renewalDiscount'];
    
    const finalValue = type === 'checkbox' 
      ? checked 
      : numericFields.includes(name) 
        ? value === '' ? '' : Number(value)
        : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: finalValue
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Add feature
  const handleAddFeature = () => {
    if (newFeature.trim()) {
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

  // Add target audience
  const handleAddAudience = () => {
    if (newAudience.trim()) {
      setFormData(prev => ({
        ...prev,
        targetAudience: [...prev.targetAudience, newAudience.trim()]
      }));
      setNewAudience('');
    }
  };

  // Remove target audience
  const handleRemoveAudience = (index) => {
    setFormData(prev => ({
      ...prev,
      targetAudience: prev.targetAudience.filter((_, i) => i !== index)
    }));
  };

  // Validation functions
  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Plan name is required';
      if (!formData.description.trim()) newErrors.description = 'Description is required';
      if (formData.description.trim().length < 10) newErrors.description = 'Description should be at least 10 characters';
    }

    if (step === 2) {
      if (!formData.price || formData.price <= 0) newErrors.price = 'Valid price is required';
      if (!formData.duration || formData.duration <= 0) newErrors.duration = 'Valid duration is required';
      if (formData.originalPrice && formData.originalPrice < formData.price) {
        newErrors.originalPrice = 'Original price should be greater than selling price';
      }
      if (formData.commission < 0 || formData.commission > 100) {
        newErrors.commission = 'Commission should be between 0 and 100';
      }
    }

    if (step === 3) {
      if (!formData.maxGyms || formData.maxGyms <= 0) newErrors.maxGyms = 'Valid number is required';
      if (!formData.maxStaff || formData.maxStaff <= 0) newErrors.maxStaff = 'Valid number is required';
      if (!formData.maxMembers || formData.maxMembers <= 0) newErrors.maxMembers = 'Valid number is required';
      if (!formData.storage.trim()) newErrors.storage = 'Storage limit is required';
    }

    if (step === 4) {
      if (formData.freeTrialDays < 0 || formData.freeTrialDays > 365) {
        newErrors.freeTrialDays = 'Free trial should be between 0 and 365 days';
      }
      if (formData.renewalDiscount < 0 || formData.renewalDiscount > 100) {
        newErrors.renewalDiscount = 'Renewal discount should be between 0 and 100';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigation
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Format data for backend
  const formatDataForBackend = (data) => {
    return {
      name: data.name,
      planType: data.planType,
      description: data.description,
      price: Number(data.price),
      originalPrice: data.originalPrice ? Number(data.originalPrice) : undefined,
      billingCycle: data.billingCycle,
      duration: Number(data.duration),
      durationUnit: data.durationUnit,
      setupFee: Number(data.setupFee || 0),
      commission: Number(data.commission || 0),
      paymentTerms: data.paymentTerms,
      features: data.features,
      maxGyms: Number(data.maxGyms),
      maxStaff: Number(data.maxStaff),
      maxMembers: Number(data.maxMembers),
      storage: data.storage,
      supportLevel: data.supportLevel,
      isFeatured: Boolean(data.isFeatured),
      isPopular: Boolean(data.isPopular),
      freeTrialDays: Number(data.freeTrialDays || 0),
      renewalDiscount: Number(data.renewalDiscount || 0),
      status: data.status,
      targetAudience: data.targetAudience,
    };
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setApiErrors([]);
    
    // Final validation
    if (!validateStep(currentStep)) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Format data for backend
      const backendData = formatDataForBackend(formData);
      
      // Call API - POST for create, PUT for update
      const endpoint = isEditMode ? `/membership/${id}` : '/membership';
      const method = isEditMode ? 'PUT' : 'POST';
      
      const result = await makeApiCall(method, endpoint, backendData);
      
      if (result.success) {
        // Show success message
        alert(isEditMode ? 'Package updated successfully!' : 'Package created successfully!');
        
        // Redirect to plans list
        navigate('/admin-control/plans');
      } else {
        setSubmitError(result.message || `Failed to ${isEditMode ? 'update' : 'create'} package`);
        if (result.errors) {
          setApiErrors(result.errors);
        }
      }
    } catch (error) {
      console.error('Error saving package:', error);
      
      // Handle specific errors
      if (error.status === 401) {
        setSubmitError('Session expired. Please login again.');
        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else if (error.status === 403) {
        setSubmitError('You do not have permission to manage packages.');
      } else if (error.status === 400 && error.errors) {
        // Handle validation errors from backend
        setApiErrors(error.errors);
        setSubmitError('Please fix the validation errors below.');
      } else {
        setSubmitError(error.message || 'An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    const price = parseFloat(formData.price) || 0;
    const setupFee = parseFloat(formData.setupFee) || 0;
    return price + setupFee;
  };

  // Plan type options
  const planTypes = [
    { id: 'Basic', name: 'Basic', icon: Package, color: 'text-gray-600' },
    { id: 'Standard', name: 'Standard', icon: Shield, color: 'text-blue-600' },
    { id: 'Professional', name: 'Professional', icon: Target, color: 'text-purple-600' },
    { id: 'Enterprise', name: 'Enterprise', icon: Crown, color: 'text-amber-600' },
    { id: 'Startup', name: 'Startup', icon: Zap, color: 'text-green-600' },
    { id: 'Corporate', name: 'Corporate', icon: Building2, color: 'text-indigo-600' }
  ];

  // Billing cycle options
  const billingCycles = [
    { id: 'daily', name: 'Daily' },
    { id: 'weekly', name: 'Weekly' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'quarterly', name: 'Quarterly' },
    { id: 'semi-annual', name: 'Semi-Annual' },
    { id: 'annual', name: 'Annual' },
    { id: 'biennial', name: 'Biennial' }
  ];

  // Support levels
  const supportLevels = [
    { id: 'Email Only', name: 'Basic Email', description: 'Email support only' },
    { id: 'Business Hours', name: 'Business Hours', description: 'Email & phone during business hours' },
    { id: 'Priority', name: 'Priority', description: '24/7 email support' },
    { id: 'Premium', name: 'Premium', description: '24/7 phone & email support' },
    { id: 'Enterprise Support', name: 'Enterprise', description: 'Dedicated account manager' }
  ];

  // Check if token exists on component mount
  useEffect(() => {
    const token = getToken();
    if (!token) {
      setSubmitError('Please login to manage packages.');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  }, [navigate]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen md:p-3 p-1 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading package data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen md:p-3 p-1">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {isEditMode ? 'Edit Gym Package' : 'Create New Gym Package'}
                  </h1>
                  <p className="text-gray-600">
                    {isEditMode ? 'Update existing subscription package' : 'Add a new subscription package for gym owners'}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium"
            >
              Cancel
            </button>
          </div>

          {/* Progress Steps */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      currentStep >= step.id
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : 'border-gray-300 bg-white text-gray-400'
                    }`}>
                      {currentStep > step.id ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>
                    <span className={`text-xs mt-2 font-medium ${
                      currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 ${
                      currentStep > step.id ? 'bg-blue-600' : 'bg-gray-300'
                    }`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            <div className="text-center">
              <div className="text-sm text-gray-600">
                Step {currentStep} of {steps.length}
              </div>
            </div>
          </div>
        </div>

        {/* Error Messages */}
        {submitError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
              <p className="text-red-600 text-sm">{submitError}</p>
            </div>
          </div>
        )}

        {/* API Validation Errors */}
        {apiErrors.length > 0 && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-yellow-800 mb-1">Please fix the following errors:</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  {apiErrors.map((error, index) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Basic Information</h2>
                  <p className="text-gray-600">Enter the basic details of your gym plan</p>
                </div>

                <div className="space-y-6">
                  {/* Plan Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Plan Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Premium Elite"
                      className={`w-full px-4 py-3 border ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Plan Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Plan Type *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                      {planTypes.map(type => (
                        <label
                          key={type.id}
                          className={`relative cursor-pointer border rounded-lg p-4 text-center ${
                            formData.planType === type.id
                              ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-200'
                              : 'border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="planType"
                            value={type.id}
                            checked={formData.planType === type.id}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <type.icon className={`w-5 h-5 mx-auto mb-2 ${type.color}`} />
                          <div className="text-sm font-medium">{type.name}</div>
                          {formData.planType === type.id && (
                            <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Describe the plan and its benefits..."
                      className={`w-full px-4 py-3 border ${
                        errors.description ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.description && (
                      <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                    )}
                    <p className="mt-1 text-sm text-gray-500">
                      Briefly describe what this plan offers to gym owners
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Pricing & Duration */}
            {currentStep === 2 && (
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Pricing & Duration</h2>
                  <p className="text-gray-600">Set the pricing structure and billing details</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Price */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Price (₹) *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <IndianRupee className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          placeholder="0.00"
                          min="0"
                          step="0.01"
                          className={`w-full pl-10 pr-4 py-3 border ${
                            errors.price ? 'border-red-300' : 'border-gray-300'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        />
                      </div>
                      {errors.price && (
                        <p className="mt-1 text-sm text-red-600">{errors.price}</p>
                      )}
                    </div>

                    {/* Original Price */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Original Price (₹)
                        <span className="text-gray-500 font-normal ml-1">(for showing discount)</span>
                      </label>
                      <input
                        type="number"
                        name="originalPrice"
                        value={formData.originalPrice}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                        className={`w-full px-4 py-3 border ${
                          errors.originalPrice ? 'border-red-300' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      />
                      {errors.originalPrice && (
                        <p className="mt-1 text-sm text-red-600">{errors.originalPrice}</p>
                      )}
                    </div>

                    {/* Setup Fee */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Setup Fee (₹)
                      </label>
                      <input
                        type="number"
                        name="setupFee"
                        value={formData.setupFee}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <p className="mt-1 text-sm text-gray-500">One-time setup fee (optional)</p>
                    </div>

                    {/* Commission */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Commission (%)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          name="commission"
                          value={formData.commission}
                          onChange={handleInputChange}
                          min="0"
                          max="100"
                          step="0.1"
                          className={`w-full px-4 py-3 border ${
                            errors.commission ? 'border-red-300' : 'border-gray-300'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">%</span>
                        </div>
                      </div>
                      {errors.commission && (
                        <p className="mt-1 text-sm text-red-600">{errors.commission}</p>
                      )}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Billing Cycle */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Billing Cycle
                      </label>
                      <select
                        name="billingCycle"
                        value={formData.billingCycle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {billingCycles.map(cycle => (
                          <option key={cycle.id} value={cycle.id}>
                            {cycle.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Duration */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Duration *
                      </label>
                      <div className="flex space-x-3">
                        <input
                          type="number"
                          name="duration"
                          value={formData.duration}
                          onChange={handleInputChange}
                          min="1"
                          className={`flex-1 px-4 py-3 border ${
                            errors.duration ? 'border-red-300' : 'border-gray-300'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        />
                        <select
                          name="durationUnit"
                          value={formData.durationUnit}
                          onChange={handleInputChange}
                          className="w-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="days">Days</option>
                          <option value="months">Months</option>
                          <option value="years">Years</option>
                        </select>
                      </div>
                      {errors.duration && (
                        <p className="mt-1 text-sm text-red-600">{errors.duration}</p>
                      )}
                    </div>

                    {/* Payment Terms */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Payment Terms
                      </label>
                      <select
                        name="paymentTerms"
                        value={formData.paymentTerms}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Advance">Payment in Advance</option>
                        <option value="Net15">Net 15 Days</option>
                        <option value="Net30">Net 30 Days</option>
                        <option value="Net45">Net 45 Days</option>
                        <option value="Net60">Net 60 Days</option>
                      </select>
                    </div>

                    {/* Total Price Preview */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Price Summary</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Base Price:</span>
                          <span className="font-medium">₹{formData.price || 0}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Setup Fee:</span>
                          <span className="font-medium">₹{formData.setupFee || 0}</span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between font-semibold text-gray-900">
                            <span>Total Price:</span>
                            <span>₹{calculateTotalPrice()}</span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Billed every {formData.duration} {formData.durationUnit}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Features & Limits */}
            {currentStep === 3 && (
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Features & Limits</h2>
                  <p className="text-gray-600">Define features and usage limits for this plan</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Features */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-4">Plan Features</h3>
                    
                    {/* Add Feature */}
                    <div className="flex space-x-2 mb-4">
                      <input
                        type="text"
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                        placeholder="Add a new feature..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        onKeyPress={(e) => e.key === 'Enter' && handleAddFeature()}
                      />
                      <button
                        type="button"
                        onClick={handleAddFeature}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add
                      </button>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2">
                      {formData.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg"
                        >
                          <div className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-3" />
                            <span className="text-sm text-gray-900">{feature}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveFeature(index)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Support Level */}
                    <div className="mt-8">
                      <h3 className="text-base font-semibold text-gray-900 mb-4">Support Level</h3>
                      <select
                        name="supportLevel"
                        value={formData.supportLevel}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {supportLevels.map(level => (
                          <option key={level.id} value={level.id}>
                            {level.name} - {level.description}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Limits */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-4">Usage Limits</h3>
                    
                    <div className="space-y-6">
                      {/* Max Gyms */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Maximum Gyms
                        </label>
                        <input
                          type="number"
                          name="maxGyms"
                          value={formData.maxGyms}
                          onChange={handleInputChange}
                          min="1"
                          className={`w-full px-4 py-3 border ${
                            errors.maxGyms ? 'border-red-300' : 'border-gray-300'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        />
                        {errors.maxGyms && (
                          <p className="mt-1 text-sm text-red-600">{errors.maxGyms}</p>
                        )}
                        <p className="mt-1 text-sm text-gray-500">Maximum number of gyms allowed</p>
                      </div>

                      {/* Max Staff */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Maximum Staff Accounts
                        </label>
                        <input
                          type="number"
                          name="maxStaff"
                          value={formData.maxStaff}
                          onChange={handleInputChange}
                          min="1"
                          className={`w-full px-4 py-3 border ${
                            errors.maxStaff ? 'border-red-300' : 'border-gray-300'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        />
                        {errors.maxStaff && (
                          <p className="mt-1 text-sm text-red-600">{errors.maxStaff}</p>
                        )}
                        <p className="mt-1 text-sm text-gray-500">Maximum staff accounts per gym</p>
                      </div>

                      {/* Max Members */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Maximum Members
                        </label>
                        <input
                          type="number"
                          name="maxMembers"
                          value={formData.maxMembers}
                          onChange={handleInputChange}
                          min="1"
                          className={`w-full px-4 py-3 border ${
                            errors.maxMembers ? 'border-red-300' : 'border-gray-300'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        />
                        {errors.maxMembers && (
                          <p className="mt-1 text-sm text-red-600">{errors.maxMembers}</p>
                        )}
                        <p className="mt-1 text-sm text-gray-500">Maximum members per gym</p>
                      </div>

                      {/* Storage */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Storage Limit
                        </label>
                        <input
                          type="text"
                          name="storage"
                          value={formData.storage}
                          onChange={handleInputChange}
                          placeholder="e.g., 50 GB"
                          className={`w-full px-4 py-3 border ${
                            errors.storage ? 'border-red-300' : 'border-gray-300'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        />
                        {errors.storage && (
                          <p className="mt-1 text-sm text-red-600">{errors.storage}</p>
                        )}
                        <p className="mt-1 text-sm text-gray-500">Storage space for data and files</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Additional Settings */}
            {currentStep === 4 && (
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Additional Settings</h2>
                  <p className="text-gray-600">Configure additional settings and options</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Status */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-4">
                        Plan Status
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="status"
                            value="active"
                            checked={formData.status === 'active'}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 border-gray-300"
                          />
                          <span className="ml-2 text-sm font-medium text-gray-900">Active</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="status"
                            value="inactive"
                            checked={formData.status === 'inactive'}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 border-gray-300"
                          />
                          <span className="ml-2 text-sm font-medium text-gray-900">Inactive</span>
                        </label>
                      </div>
                    </div>

                    {/* Flags */}
                    <div className="space-y-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="isFeatured"
                          checked={formData.isFeatured}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-900">
                          Mark as Featured
                        </span>
                      </label>
                      
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="isPopular"
                          checked={formData.isPopular}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-900">
                          Mark as Popular
                        </span>
                      </label>
                    </div>

                    {/* Free Trial */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Free Trial Days
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          name="freeTrialDays"
                          value={formData.freeTrialDays}
                          onChange={handleInputChange}
                          min="0"
                          max="365"
                          className={`w-full px-4 py-3 border ${
                            errors.freeTrialDays ? 'border-red-300' : 'border-gray-300'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">days</span>
                        </div>
                      </div>
                      {errors.freeTrialDays && (
                        <p className="mt-1 text-sm text-red-600">{errors.freeTrialDays}</p>
                      )}
                      <p className="mt-1 text-sm text-gray-500">Number of free trial days (0 for no trial)</p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Renewal Discount */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Renewal Discount (%)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          name="renewalDiscount"
                          value={formData.renewalDiscount}
                          onChange={handleInputChange}
                          min="0"
                          max="100"
                          step="0.1"
                          className={`w-full px-4 py-3 border ${
                            errors.renewalDiscount ? 'border-red-300' : 'border-gray-300'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">%</span>
                        </div>
                      </div>
                      {errors.renewalDiscount && (
                        <p className="mt-1 text-sm text-red-600">{errors.renewalDiscount}</p>
                      )}
                      <p className="mt-1 text-sm text-gray-500">
                        Discount percentage for plan renewals
                      </p>
                    </div>

                    {/* Info Box */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex">
                        <Info className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold text-blue-900 mb-1">
                            Plan Configuration Tips
                          </h4>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Featured plans appear first in listings</li>
                            <li>• Popular plans get a special badge</li>
                            <li>• Free trials attract new customers</li>
                            <li>• Renewal discounts improve retention</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Target Audience */}
            {currentStep === 5 && (
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Target Audience</h2>
                  <p className="text-gray-600">Define who this plan is best suited for</p>
                </div>

                <div className="space-y-6">
                  {/* Add Target Audience */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Add Target Audience
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newAudience}
                        onChange={(e) => setNewAudience(e.target.value)}
                        placeholder="e.g., Startups, Enterprise, Small Businesses"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        onKeyPress={(e) => e.key === 'Enter' && handleAddAudience()}
                      />
                      <button
                        type="button"
                        onClick={handleAddAudience}
                        className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add
                      </button>
                    </div>
                  </div>

                  {/* Target Audience List */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Selected Target Audience
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {formData.targetAudience.map((audience, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg"
                        >
                          <span className="text-sm text-gray-900">{audience}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveAudience(index)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Target Audience Examples:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="text-xs text-gray-600">• Small Gyms</span>
                      <span className="text-xs text-gray-600">• Large Chains</span>
                      <span className="text-xs text-gray-600">• Fitness Studios</span>
                      <span className="text-xs text-gray-600">• Corporate Wellness</span>
                      <span className="text-xs text-gray-600">• Sports Clubs</span>
                      <span className="text-xs text-gray-600">• Rehabilitation Centers</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Review & Submit */}
            {currentStep === 6 && (
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Review & Submit</h2>
                  <p className="text-gray-600">Review all details before {isEditMode ? 'updating' : 'creating'} the plan</p>
                </div>

                <div className="space-y-8">
                  {/* Plan Summary */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h3 className="text-base font-semibold text-gray-900 mb-4">Plan Summary</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Left Column */}
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Plan Name</div>
                          <div className="font-medium text-gray-900">{formData.name || 'Not set'}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Plan Type</div>
                          <div className="font-medium text-gray-900">{formData.planType}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Description</div>
                          <div className="font-medium text-gray-900">{formData.description || 'Not set'}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Status</div>
                          <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            formData.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {formData.status === 'active' ? 'Active' : 'Inactive'}
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Pricing</div>
                          <div className="font-medium text-gray-900">
                            ₹{formData.price} / {formData.billingCycle}
                            {formData.originalPrice && (
                              <span className="ml-2 text-sm text-gray-500 line-through">
                                ₹{formData.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Duration</div>
                          <div className="font-medium text-gray-900">
                            {formData.duration} {formData.durationUnit}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Setup Fee</div>
                          <div className="font-medium text-gray-900">
                            {formData.setupFee > 0 ? `₹${formData.setupFee}` : 'Free'}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Free Trial</div>
                          <div className="font-medium text-gray-900">
                            {formData.freeTrialDays > 0 ? `${formData.freeTrialDays} days` : 'None'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features & Limits Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Features */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h3 className="text-base font-semibold text-gray-900 mb-4">Features</h3>
                      <ul className="space-y-2">
                        {formData.features.slice(0, 5).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-700">
                            <Check className="w-3 h-3 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                        {formData.features.length > 5 && (
                          <li className="text-sm text-blue-600">
                            +{formData.features.length - 5} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Limits */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h3 className="text-base font-semibold text-gray-900 mb-4">Usage Limits</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Max Gyms:</span>
                          <span className="font-medium text-gray-900">{formData.maxGyms}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Max Staff:</span>
                          <span className="font-medium text-gray-900">{formData.maxStaff}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Max Members:</span>
                          <span className="font-medium text-gray-900">{formData.maxMembers}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Storage:</span>
                          <span className="font-medium text-gray-900">{formData.storage}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Support:</span>
                          <span className="font-medium text-gray-900">{formData.supportLevel}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="border border-gray-200 rounded-xl p-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={true}
                        readOnly
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded mt-1"
                      />
                      <span className="ml-3 text-sm text-gray-900">
                        By submitting this form, I confirm that all information provided is accurate and I agree to {isEditMode ? 'update' : 'create'} this gym owner package.
                        This package will be immediately available for purchase by gym owners upon {isEditMode ? 'update' : 'creation'}.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="border-t border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                      disabled={isSubmitting}
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous
                    </button>
                  )}
                </div>
                
                <div className="flex items-center space-x-3">
                  {currentStep < steps.length ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                      disabled={isSubmitting}
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium ${
                        isSubmitting
                          ? 'bg-blue-400 text-white cursor-not-allowed'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          {isEditMode ? 'Updating Package...' : 'Creating Package...'}
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4 mr-2" />
                          {isEditMode ? 'Update Package' : 'Create Package'}
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewGymPlans;