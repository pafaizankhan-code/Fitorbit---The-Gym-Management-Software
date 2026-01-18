import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  User,
  Calendar,
  IndianRupee,
  Users,
  Settings,
  Clock,
  CheckCircle,
  X,
  Save,
  ChevronRight,
  ChevronLeft,
  Upload,
  Target,
  Shield,
  Award,
  Star,
  Globe,
  Home,
  Briefcase,
  Activity,
  Heart,
  Plus,
  Minus,
  AlertCircle,
  Info,
  Check
} from 'lucide-react';

const AddNewGyms = () => {
  const navigate = useNavigate();
  
  // Form state
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    gymName: '',
    gymType: 'Standard',
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    
    // Step 2: Location Details
    address: '',
    city: '',
    state: '',
    country: 'India',
    pincode: '',
    latitude: '',
    longitude: '',
    
    // Step 3: Contact & Operations
    gymEmail: '',
    gymPhone: '',
    website: '',
    openingTime: '06:00',
    closingTime: '22:00',
    workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    
    // Step 4: Facilities & Equipment
    facilities: ['Cardio Equipment', 'Weight Training', 'Locker Room'],
    equipmentType: 'Standard',
    gymSize: '',
    totalEquipment: '',
    specialFeatures: [],
    
    // Step 5: Subscription & Business
    subscriptionPlan: 'FitOrbit Standard',
    billingCycle: 'quarterly',
    subscriptionStart: '',
    subscriptionEnd: '',
    paymentMethod: 'Bank Transfer',
    businessRegistration: '',
    taxId: '',
    
    // Step 6: Additional Details
    description: '',
    targetAudience: ['General Public'],
    is24x7: false,
    hasParking: true,
    hasShower: true,
    hasCafe: false,
    status: 'active',
    
    // Step 7: Review & Submit
    termsAccepted: false
  });

  // Arrays for options
  const gymTypes = [
    { id: 'Standard', name: 'Standard Gym', icon: Building2 },
    { id: 'Premium', name: 'Premium Gym', icon: Star },
    { id: 'Boutique', name: 'Boutique Studio', icon: Heart },
    { id: 'CrossFit', name: 'CrossFit Box', icon: Activity },
    { id: 'Wellness', name: 'Wellness Center', icon: Shield },
    { id: 'Sports', name: 'Sports Complex', icon: Award }
  ];

  const subscriptionPlans = [
    'FitOrbit Startup',
    'FitOrbit Standard', 
    'FitOrbit Pro',
    'FitOrbit Platinum',
    'FitOrbit Enterprise'
  ];

  const billingCycles = [
    { id: 'monthly', name: 'Monthly' },
    { id: 'quarterly', name: 'Quarterly' },
    { id: 'semi-annual', name: 'Semi-Annual' },
    { id: 'annual', name: 'Annual' },
    { id: 'biennial', name: 'Biennial' }
  ];

  const workingDaysOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const facilitiesOptions = ['Cardio Equipment', 'Weight Training', 'Free Weights', 'Group Classes', 'Yoga Studio', 'Swimming Pool', 'Sauna', 'Steam Room', 'Locker Room', 'Shower', 'Cafe', 'Parking', 'WiFi', 'Personal Training', 'Child Care'];
  const specialFeaturesOptions = ['24/7 Access', 'Women Only', 'Seniors Program', 'Kids Area', 'Sports Therapy', 'Nutrition Counseling', 'Physical Therapy'];

  // State for dynamic inputs
  const [newFacility, setNewFacility] = useState('');
  const [newFeature, setNewFeature] = useState('');

  // Validation errors
  const [errors, setErrors] = useState({});

  // Steps
  const steps = [
    { id: 1, title: 'Basic Info', icon: User },
    { id: 2, title: 'Location', icon: MapPin },
    { id: 3, title: 'Operations', icon: Clock },
    { id: 4, title: 'Facilities', icon: Settings },
    { id: 5, title: 'Subscription', icon: IndianRupee },
    { id: 6, title: 'Additional', icon: Info },
    { id: 7, title: 'Review', icon: CheckCircle }
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'workingDays') {
      // Handle working days array
      setFormData(prev => ({
        ...prev,
        workingDays: checked 
          ? [...prev.workingDays, value]
          : prev.workingDays.filter(day => day !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Add facility
  const handleAddFacility = () => {
    if (newFacility.trim()) {
      setFormData(prev => ({
        ...prev,
        facilities: [...prev.facilities, newFacility.trim()]
      }));
      setNewFacility('');
    }
  };

  // Remove facility
  const handleRemoveFacility = (index) => {
    setFormData(prev => ({
      ...prev,
      facilities: prev.facilities.filter((_, i) => i !== index)
    }));
  };

  // Toggle special feature
  const handleToggleFeature = (feature) => {
    setFormData(prev => ({
      ...prev,
      specialFeatures: prev.specialFeatures.includes(feature)
        ? prev.specialFeatures.filter(f => f !== feature)
        : [...prev.specialFeatures, feature]
    }));
  };

  // Validation
  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.gymName.trim()) newErrors.gymName = 'Gym name is required';
      if (!formData.ownerName.trim()) newErrors.ownerName = 'Owner name is required';
      if (!formData.ownerEmail.trim()) newErrors.ownerEmail = 'Email is required';
      if (!formData.ownerPhone.trim()) newErrors.ownerPhone = 'Phone is required';
    }

    if (step === 2) {
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.state.trim()) newErrors.state = 'State is required';
    }

    if (step === 3) {
      if (!formData.gymEmail.trim()) newErrors.gymEmail = 'Gym email is required';
      if (!formData.gymPhone.trim()) newErrors.gymPhone = 'Gym phone is required';
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

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateStep(currentStep) && formData.termsAccepted) {
      console.log('Gym submitted:', formData);
      // Here you would typically send the data to your backend
      alert('Gym registered successfully!');
      navigate('/admin/gyms');
    }
  };

  return (
    <div className="min-h-screen p-1 md:p-3">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Register New Gym</h1>
                  <p className="text-gray-600">Add a new gym to the management system</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate('/admin/gyms')}
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

        {/* Form */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Basic Information</h2>
                  <p className="text-gray-600">Enter the basic details of the gym</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Gym Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Gym Name *
                    </label>
                    <input
                      type="text"
                      name="gymName"
                      value={formData.gymName}
                      onChange={handleInputChange}
                      placeholder="e.g., PowerFit Gym Mumbai"
                      className={`w-full px-4 py-3 border ${
                        errors.gymName ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.gymName && (
                      <p className="mt-1 text-sm text-red-600">{errors.gymName}</p>
                    )}
                  </div>

                  {/* Gym Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Gym Type
                    </label>
                    <select
                      name="gymType"
                      value={formData.gymType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {gymTypes.map(type => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Owner Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Owner Name *
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      placeholder="Enter owner's full name"
                      className={`w-full px-4 py-3 border ${
                        errors.ownerName ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.ownerName && (
                      <p className="mt-1 text-sm text-red-600">{errors.ownerName}</p>
                    )}
                  </div>

                  {/* Owner Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Owner Email *
                    </label>
                    <input
                      type="email"
                      name="ownerEmail"
                      value={formData.ownerEmail}
                      onChange={handleInputChange}
                      placeholder="owner@example.com"
                      className={`w-full px-4 py-3 border ${
                        errors.ownerEmail ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.ownerEmail && (
                      <p className="mt-1 text-sm text-red-600">{errors.ownerEmail}</p>
                    )}
                  </div>

                  {/* Owner Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Owner Phone *
                    </label>
                    <input
                      type="tel"
                      name="ownerPhone"
                      value={formData.ownerPhone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 border ${
                        errors.ownerPhone ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.ownerPhone && (
                      <p className="mt-1 text-sm text-red-600">{errors.ownerPhone}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Location Details */}
            {currentStep === 2 && (
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Location Details</h2>
                  <p className="text-gray-600">Enter the gym's location information</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Complete Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Street address, landmark, area"
                      className={`w-full px-4 py-3 border ${
                        errors.address ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* City */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        className={`w-full px-4 py-3 border ${
                          errors.city ? 'border-red-300' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                      )}
                    </div>

                    {/* State */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="State"
                        className={`w-full px-4 py-3 border ${
                          errors.state ? 'border-red-300' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      />
                      {errors.state && (
                        <p className="mt-1 text-sm text-red-600">{errors.state}</p>
                      )}
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Pincode */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Pincode
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="Postal code"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Map Coordinates */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Latitude
                      </label>
                      <input
                        type="text"
                        name="latitude"
                        value={formData.latitude}
                        onChange={handleInputChange}
                        placeholder="e.g., 19.0760"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Longitude
                      </label>
                      <input
                        type="text"
                        name="longitude"
                        value={formData.longitude}
                        onChange={handleInputChange}
                        placeholder="e.g., 72.8777"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact & Operations */}
            {currentStep === 3 && (
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Contact & Operations</h2>
                  <p className="text-gray-600">Enter contact details and operational hours</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Gym Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Gym Email *
                    </label>
                    <input
                      type="email"
                      name="gymEmail"
                      value={formData.gymEmail}
                      onChange={handleInputChange}
                      placeholder="info@gymname.com"
                      className={`w-full px-4 py-3 border ${
                        errors.gymEmail ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.gymEmail && (
                      <p className="mt-1 text-sm text-red-600">{errors.gymEmail}</p>
                    )}
                  </div>

                  {/* Gym Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Gym Phone *
                    </label>
                    <input
                      type="tel"
                      name="gymPhone"
                      value={formData.gymPhone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 border ${
                        errors.gymPhone ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.gymPhone && (
                      <p className="mt-1 text-sm text-red-600">{errors.gymPhone}</p>
                    )}
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://www.gymwebsite.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Operational Hours */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Opening Time
                      </label>
                      <input
                        type="time"
                        name="openingTime"
                        value={formData.openingTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Closing Time
                      </label>
                      <input
                        type="time"
                        name="closingTime"
                        value={formData.closingTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Working Days */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Working Days
                    </label>
                    <div className="grid grid-cols-4 gap-3">
                      {workingDaysOptions.map(day => (
                        <label key={day} className="flex items-center">
                          <input
                            type="checkbox"
                            name="workingDays"
                            value={day}
                            checked={formData.workingDays.includes(day)}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-900">{day}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Facilities & Equipment */}
            {currentStep === 4 && (
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Facilities & Equipment</h2>
                  <p className="text-gray-600">Configure gym facilities and equipment details</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column - Facilities */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-4">Facilities</h3>
                    
                    {/* Add Facility */}
                    <div className="flex space-x-2 mb-4">
                      <input
                        type="text"
                        value={newFacility}
                        onChange={(e) => setNewFacility(e.target.value)}
                        placeholder="Add a facility..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button
                        type="button"
                        onClick={handleAddFacility}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Facilities List */}
                    <div className="space-y-2 mb-6">
                      {formData.facilities.map((facility, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg"
                        >
                          <div className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-3" />
                            <span className="text-sm text-gray-900">{facility}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveFacility(index)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Quick Select Facilities */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Common Facilities
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {facilitiesOptions.slice(0, 8).map(facility => (
                          <label key={facility} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={formData.facilities.includes(facility)}
                              onChange={() => {
                                if (formData.facilities.includes(facility)) {
                                  handleRemoveFacility(formData.facilities.indexOf(facility));
                                } else {
                                  setFormData(prev => ({
                                    ...prev,
                                    facilities: [...prev.facilities, facility]
                                  }));
                                }
                              }}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm text-gray-700">{facility}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Equipment */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-4">Equipment & Features</h3>
                    
                    <div className="space-y-6">
                      {/* Equipment Type */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Equipment Type
                        </label>
                        <select
                          name="equipmentType"
                          value={formData.equipmentType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="Basic">Basic</option>
                          <option value="Standard">Standard</option>
                          <option value="Advanced">Advanced</option>
                          <option value="Premium">Premium</option>
                          <option value="Professional">Professional</option>
                        </select>
                      </div>

                      {/* Gym Size */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Gym Size (sq ft)
                        </label>
                        <input
                          type="number"
                          name="gymSize"
                          value={formData.gymSize}
                          onChange={handleInputChange}
                          placeholder="e.g., 5000"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      {/* Total Equipment */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Total Equipment Count
                        </label>
                        <input
                          type="number"
                          name="totalEquipment"
                          value={formData.totalEquipment}
                          onChange={handleInputChange}
                          placeholder="e.g., 100"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      {/* Special Features */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Special Features
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {specialFeaturesOptions.map(feature => (
                            <label key={feature} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={formData.specialFeatures.includes(feature)}
                                onChange={() => handleToggleFeature(feature)}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                              />
                              <span className="ml-2 text-sm text-gray-700">{feature}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Subscription & Business */}
            {currentStep === 5 && (
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Subscription & Business</h2>
                  <p className="text-gray-600">Configure subscription plan and business details</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Subscription Plan */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Subscription Plan
                    </label>
                    <select
                      name="subscriptionPlan"
                      value={formData.subscriptionPlan}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {subscriptionPlans.map(plan => (
                        <option key={plan} value={plan}>{plan}</option>
                      ))}
                    </select>
                  </div>

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
                        <option key={cycle.id} value={cycle.id}>{cycle.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Subscription Dates */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Start Date
                      </label>
                      <input
                        type="date"
                        name="subscriptionStart"
                        value={formData.subscriptionStart}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        End Date
                      </label>
                      <input
                        type="date"
                        name="subscriptionEnd"
                        value={formData.subscriptionEnd}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Payment Method
                    </label>
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="Bank Transfer">Bank Transfer</option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="UPI">UPI</option>
                      <option value="Cash">Cash</option>
                      <option value="Check">Check</option>
                    </select>
                  </div>

                  {/* Business Registration */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Business Registration
                    </label>
                    <input
                      type="text"
                      name="businessRegistration"
                      value={formData.businessRegistration}
                      onChange={handleInputChange}
                      placeholder="Registration number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Tax ID */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Tax ID (GST)
                    </label>
                    <input
                      type="text"
                      name="taxId"
                      value={formData.taxId}
                      onChange={handleInputChange}
                      placeholder="GSTIN number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Additional Details */}
            {currentStep === 6 && (
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Additional Details</h2>
                  <p className="text-gray-600">Configure additional settings and preferences</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Description
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Describe your gym, services, and unique features..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Target Audience */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Target Audience
                      </label>
                      <input
                        type="text"
                        name="targetAudience"
                        value={formData.targetAudience.join(', ')}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          targetAudience: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                        }))}
                        placeholder="e.g., Professionals, Students, Seniors"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Status */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Status
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
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Amenities */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Amenities
                      </label>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="is24x7"
                            checked={formData.is24x7}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-900">24/7 Operations</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="hasParking"
                            checked={formData.hasParking}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-900">Parking Available</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="hasShower"
                            checked={formData.hasShower}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-900">Shower Facilities</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="hasCafe"
                            checked={formData.hasCafe}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-900">Cafeteria</span>
                        </label>
                      </div>
                    </div>

                    {/* Info Box */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex">
                        <Info className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold text-blue-900 mb-1">
                            Important Notes
                          </h4>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Active gyms are visible to customers</li>
                            <li>• 24/7 operations require special permissions</li>
                            <li>• All information will be verified</li>
                            <li>• Subscription starts from selected date</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 7: Review & Submit */}
            {currentStep === 7 && (
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Review & Submit</h2>
                  <p className="text-gray-600">Review all information before registration</p>
                </div>

                <div className="space-y-8">
                  {/* Summary Sections */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Basic Info Summary */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <h3 className="text-base font-semibold text-gray-900 mb-4">Basic Information</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Gym Name</div>
                          <div className="font-medium text-gray-900">{formData.gymName || 'Not set'}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Owner</div>
                          <div className="font-medium text-gray-900">{formData.ownerName || 'Not set'}</div>
                          <div className="text-sm text-gray-600">{formData.ownerEmail || ''}</div>
                          <div className="text-sm text-gray-600">{formData.ownerPhone || ''}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Gym Type</div>
                          <div className="font-medium text-gray-900">{formData.gymType}</div>
                        </div>
                      </div>
                    </div>

                    {/* Location Summary */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <h3 className="text-base font-semibold text-gray-900 mb-4">Location Details</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Address</div>
                          <div className="font-medium text-gray-900">{formData.address || 'Not set'}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-gray-600 mb-1">City</div>
                            <div className="font-medium text-gray-900">{formData.city || 'Not set'}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 mb-1">State</div>
                            <div className="font-medium text-gray-900">{formData.state || 'Not set'}</div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Country</div>
                          <div className="font-medium text-gray-900">{formData.country}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Facilities & Subscription Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <h3 className="text-base font-semibold text-gray-900 mb-4">Facilities</h3>
                      <div className="space-y-2">
                        {formData.facilities.slice(0, 5).map((facility, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-700">
                            <Check className="w-3 h-3 text-green-500 mr-2" />
                            {facility}
                          </div>
                        ))}
                        {formData.facilities.length > 5 && (
                          <div className="text-sm text-blue-600">
                            +{formData.facilities.length - 5} more facilities
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <h3 className="text-base font-semibold text-gray-900 mb-4">Subscription</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Plan</div>
                          <div className="font-medium text-gray-900">{formData.subscriptionPlan}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Billing Cycle</div>
                          <div className="font-medium text-gray-900">
                            {billingCycles.find(b => b.id === formData.billingCycle)?.name}
                          </div>
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
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="border border-gray-200 rounded-xl p-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded mt-1"
                      />
                      <span className="ml-3 text-sm text-gray-900">
                        I confirm that all information provided is accurate and I agree to register this gym.
                        By submitting, this gym will be added to the management system and subscription will be activated.
                      </span>
                    </label>
                    {!formData.termsAccepted && (
                      <p className="mt-2 text-sm text-red-600">You must accept the terms to proceed</p>
                    )}
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
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!formData.termsAccepted}
                      className={`inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium ${
                        formData.termsAccepted
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Register Gym
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

export default AddNewGyms;