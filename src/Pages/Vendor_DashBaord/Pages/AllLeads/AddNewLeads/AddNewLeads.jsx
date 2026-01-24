import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Building, 
  Calendar, 
  Tag, 
  Target, 
  IndianRupee, 
  FileText, 
  Clock, 
  Users, 
  CheckCircle, 
  X, 
  Plus, 
  Trash2,
  Upload,
  MessageSquare,
  Smartphone,
  Globe,
  Heart,
  Dumbbell,
  Activity,
  Award,
  ChevronDown,
  Save,
  Send,
  Menu,
  ChevronRight,
  Home
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddNewLeads = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    occupation: '',
    address: '',
    city: '',
    pincode: '',
    
    // Fitness Information
    fitnessGoal: '',
    primaryInterest: '',
    experienceLevel: 'beginner',
    healthIssues: '',
    medications: '',
    injuries: '',
    preferredTime: '',
    daysPerWeek: '3',
    
    // Lead Information
    source: 'walk-in',
    assignedTo: '',
    branch: 'mumbai-central',
    budget: '',
    notes: '',
    
    // Additional
    communicationPreference: 'whatsapp',
    familyMembersInterested: 0,
    heardAboutUs: '',
    followUpDate: '',
    leadPriority: 'medium',
    
    // Trial Session
    trialRequested: false,
    trialDate: '',
    trialTime: '',
    
    // Emergency Contact
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelation: '',
  });

  // Error state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeSection, setActiveSection] = useState('personal');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Check mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Options
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
  ];

  const fitnessGoalOptions = [
    { value: 'weight-loss', label: 'Weight Loss', icon: '💪' },
    { value: 'muscle-gain', label: 'Muscle Building', icon: '🏋️' },
    { value: 'strength', label: 'Strength Training', icon: '🔥' },
    { value: 'cardio', label: 'Cardio Fitness', icon: '🏃' },
    { value: 'flexibility', label: 'Flexibility & Mobility', icon: '🧘' },
    { value: 'rehabilitation', label: 'Injury Rehabilitation', icon: '🩹' },
    { value: 'sports', label: 'Sports Performance', icon: '⚽' },
    { value: 'general', label: 'General Fitness', icon: '🌟' },
    { value: 'stress', label: 'Stress Relief', icon: '😌' },
    { value: 'competition', label: 'Competition Prep', icon: '🏆' }
  ];

  const interestOptions = [
    { value: 'weight-training', label: 'Weight Training' },
    { value: 'cardio-machines', label: 'Cardio Machines' },
    { value: 'yoga', label: 'Yoga' },
    { value: 'pilates', label: 'Pilates' },
    { value: 'zumba', label: 'Zumba' },
    { value: 'crossfit', label: 'CrossFit' },
    { value: 'boxing', label: 'Boxing/Kickboxing' },
    { value: 'swimming', label: 'Swimming' },
    { value: 'personal-training', label: 'Personal Training' },
    { value: 'group-classes', label: 'Group Classes' },
    { value: 'nutrition', label: 'Nutrition Counseling' },
    { value: 'physiotherapy', label: 'Physiotherapy' }
  ];

  const sourceOptions = [
    { value: 'walk-in', label: 'Walk-in' },
    { value: 'website', label: 'Website' },
    { value: 'social-media', label: 'Social Media' },
    { value: 'referral', label: 'Referral' },
    { value: 'phone-call', label: 'Phone Call' },
    { value: 'email', label: 'Email Inquiry' },
    { value: 'google-ads', label: 'Google Ads' },
    { value: 'event', label: 'Event/Exhibition' },
    { value: 'flyer', label: 'Flyer/Brochure' },
    { value: 'other', label: 'Other' }
  ];

  const branchOptions = [
    { value: 'mumbai-central', label: 'Mumbai Central' },
    { value: 'andheri-west', label: 'Andheri West' },
    { value: 'bandra', label: 'Bandra' },
    { value: 'powai', label: 'Powai' },
    { value: 'thane', label: 'Thane' },
    { value: 'navi-mumbai', label: 'Navi Mumbai' }
  ];

  const staffOptions = [
    { value: 'aarav-sharma', label: 'Aarav Sharma' },
    { value: 'neha-patel', label: 'Neha Patel' },
    { value: 'rohan-singh', label: 'Rohan Singh' },
    { value: 'priya-desai', label: 'Priya Desai' },
    { value: 'vikram-mehta', label: 'Vikram Mehta' }
  ];

  const timeSlots = [
    '6:00 AM - 7:00 AM',
    '7:00 AM - 8:00 AM',
    '8:00 AM - 9:00 AM',
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM',
    '7:00 PM - 8:00 PM',
    '8:00 PM - 9:00 PM',
    '9:00 PM - 10:00 PM'
  ];

  const communicationOptions = [
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'phone-call', label: 'Phone Call' },
    { value: 'sms', label: 'SMS' },
    { value: 'email', label: 'Email' },
    { value: 'all', label: 'All Channels' }
  ];

  const priorityOptions = [
    { value: 'high', label: 'High', color: 'bg-red-100 text-red-800' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'low', label: 'Low', color: 'bg-green-100 text-green-800' }
  ];

  // Form sections for mobile navigation
  const formSections = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'fitness', label: 'Fitness Info', icon: Dumbbell },
    { id: 'lead', label: 'Lead Info', icon: Target },
    { id: 'trial', label: 'Trial Session', icon: Clock },
    { id: 'emergency', label: 'Emergency Contact', icon: Users }
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

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Valid 10-digit phone number required';
    
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email required';
    
    if (!formData.fitnessGoal) newErrors.fitnessGoal = 'Fitness goal is required';
    if (!formData.primaryInterest) newErrors.primaryInterest = 'Primary interest is required';
    if (!formData.source) newErrors.source = 'Lead source is required';
    if (!formData.assignedTo) newErrors.assignedTo = 'Assign to staff is required';
    if (!formData.followUpDate) newErrors.followUpDate = 'Follow-up date is required';
    
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
      
      // Create lead data
      const leadData = {
        ...formData,
        id: Date.now(), // Generate unique ID
        status: 'new',
        createdAt: new Date().toISOString().split('T')[0],
        leadScore: calculateLeadScore(),
        name: `${formData.firstName} ${formData.lastName}`,
        // Generate lead ID
        leadId: `LEAD${Date.now().toString().slice(-6)}-${formData.firstName.charAt(0)}${formData.lastName.charAt(0)}`
      };
      
      console.log('Lead Data:', leadData);
      
      // Show success message
      alert('Lead added successfully!');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        occupation: '',
        address: '',
        city: '',
        pincode: '',
        fitnessGoal: '',
        primaryInterest: '',
        experienceLevel: 'beginner',
        healthIssues: '',
        medications: '',
        injuries: '',
        preferredTime: '',
        daysPerWeek: '3',
        source: 'walk-in',
        assignedTo: '',
        branch: 'mumbai-central',
        budget: '',
        notes: '',
        communicationPreference: 'whatsapp',
        familyMembersInterested: 0,
        heardAboutUs: '',
        followUpDate: '',
        leadPriority: 'medium',
        trialRequested: false,
        trialDate: '',
        trialTime: '',
        emergencyName: '',
        emergencyPhone: '',
        emergencyRelation: '',
      });
      
      // Navigate back or show success
      setTimeout(() => {
        navigate('/leads');
      }, 1000);
      
    } catch (error) {
      alert('Error adding lead. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate lead score based on form data
  const calculateLeadScore = () => {
    let score = 50; // Base score
    
    // Add points based on completeness
    if (formData.phone) score += 10;
    if (formData.email) score += 10;
    if (formData.fitnessGoal) score += 5;
    if (formData.budget) score += 5;
    if (formData.followUpDate) score += 10;
    if (formData.trialRequested) score += 10;
    
    // Adjust based on priority
    if (formData.leadPriority === 'high') score += 15;
    if (formData.leadPriority === 'medium') score += 5;
    
    // Cap at 100
    return Math.min(score, 100);
  };

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  // Format phone number
  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0,3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6,10)}`;
  };

  // Mobile navigation component
  const MobileNavigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
      <div className="flex justify-around p-2">
        {formSections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex flex-col items-center p-2 rounded-lg transition-all ${
              activeSection === section.id
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <section.icon className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">{section.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  // Mobile Section Content
  const MobileSectionContent = () => {
    switch (activeSection) {
      case 'personal':
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
            </div>

            <div className="space-y-4">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg ${
                    errors.firstName ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter first name"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg ${
                    errors.lastName ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter last name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg ${
                    errors.phone ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="9876543210"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="name@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Age & Gender */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                    placeholder="25"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select</option>
                    {genderOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Occupation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Occupation
                </label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                  placeholder="Software Engineer"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                  placeholder="Street address"
                />
              </div>

              {/* City & Pincode */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                    placeholder="Mumbai"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pincode
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                    placeholder="400001"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'fitness':
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold text-gray-900">Fitness Information</h2>
            </div>

            <div className="space-y-4">
              {/* Fitness Goal */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fitness Goal *
                </label>
                <select
                  name="fitnessGoal"
                  value={formData.fitnessGoal}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg ${
                    errors.fitnessGoal ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Goal</option>
                  {fitnessGoalOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.icon} {option.label}
                    </option>
                  ))}
                </select>
                {errors.fitnessGoal && (
                  <p className="mt-1 text-sm text-red-600">{errors.fitnessGoal}</p>
                )}
              </div>

              {/* Primary Interest */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Interest *
                </label>
                <select
                  name="primaryInterest"
                  value={formData.primaryInterest}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg ${
                    errors.primaryInterest ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Interest</option>
                  {interestOptions.slice(0, 6).map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.primaryInterest && (
                  <p className="mt-1 text-sm text-red-600">{errors.primaryInterest}</p>
                )}
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              {/* Days Per Week */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Days Per Week
                </label>
                <select
                  name="daysPerWeek"
                  value={formData.daysPerWeek}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                >
                  <option value="1">1 Day</option>
                  <option value="2">2 Days</option>
                  <option value="3">3 Days</option>
                  <option value="4">4 Days</option>
                  <option value="5">5 Days</option>
                </select>
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                >
                  <option value="">Select Time</option>
                  {timeSlots.slice(0, 8).map(slot => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Budget
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                  placeholder="e.g., 5000"
                />
              </div>

              {/* Health Issues */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Health Issues
                </label>
                <textarea
                  name="healthIssues"
                  value={formData.healthIssues}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                  placeholder="Asthma, High BP, etc."
                />
              </div>
            </div>
          </div>
        );

      case 'lead':
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-900">Lead Information</h2>
            </div>

            <div className="space-y-4">
              {/* Source */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lead Source *
                </label>
                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg ${
                    errors.source ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Source</option>
                  {sourceOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.source && (
                  <p className="mt-1 text-sm text-red-600">{errors.source}</p>
                )}
              </div>

              {/* Assigned To */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assign To Staff *
                </label>
                <select
                  name="assignedTo"
                  value={formData.assignedTo}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg ${
                    errors.assignedTo ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Staff</option>
                  {staffOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.assignedTo && (
                  <p className="mt-1 text-sm text-red-600">{errors.assignedTo}</p>
                )}
              </div>

              {/* Branch */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Branch
                </label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                >
                  {branchOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Follow-up Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Follow-up Date *
                </label>
                <input
                  type="date"
                  name="followUpDate"
                  value={formData.followUpDate}
                  onChange={handleChange}
                  min={getTodayDate()}
                  className={`w-full px-4 py-2.5 border rounded-lg ${
                    errors.followUpDate ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.followUpDate && (
                  <p className="mt-1 text-sm text-red-600">{errors.followUpDate}</p>
                )}
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lead Priority
                </label>
                <div className="flex space-x-2">
                  {priorityOptions.map(option => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, leadPriority: option.value }))}
                      className={`flex-1 px-4 py-2.5 border rounded-lg text-center ${
                        formData.leadPriority === option.value
                          ? `${option.color} border-transparent`
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Communication Preference */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Communication
                </label>
                <select
                  name="communicationPreference"
                  value={formData.communicationPreference}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                >
                  {communicationOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                  placeholder="Add any additional information..."
                />
              </div>
            </div>
          </div>
        );

      case 'trial':
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-orange-600" />
              <h2 className="text-lg font-semibold text-gray-900">Trial Session</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Request Trial Session</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="trialRequested"
                    checked={formData.trialRequested}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {formData.trialRequested && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Trial Date
                    </label>
                    <input
                      type="date"
                      name="trialDate"
                      value={formData.trialDate}
                      onChange={handleChange}
                      min={getTodayDate()}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Trial Time
                    </label>
                    <select
                      name="trialTime"
                      value={formData.trialTime}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                    >
                      <option value="">Select Time</option>
                      {timeSlots.slice(0, 8).map(slot => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}
            </div>
          </div>
        );

      case 'emergency':
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-red-600" />
              <h2 className="text-lg font-semibold text-gray-900">Emergency Contact</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Name
                </label>
                <input
                  type="text"
                  name="emergencyName"
                  value={formData.emergencyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                  placeholder="Phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relationship
                </label>
                <input
                  type="text"
                  name="emergencyRelation"
                  value={formData.emergencyRelation}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                  placeholder="e.g., Spouse, Parent"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile View */}
      {isMobileView ? (
        <div className="pb-20">
          {/* Mobile Header */}
          <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="px-4 py-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigate(-1)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <div>
                    <h1 className="text-lg font-bold text-gray-900">Add New Lead</h1>
                    <p className="text-xs text-gray-600">Capture potential member info</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className="p-2 bg-gray-100 rounded-lg"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>

              {showMobileMenu && (
                <div className="bg-gray-50 p-3 rounded-lg mb-3">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => navigate('/leads')}
                      className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
                    >
                      {isSubmitting ? 'Saving...' : 'Save'}
                    </button>
                  </div>
                </div>
              )}

              {/* Progress Bar */}
              <div className="mb-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-gray-700">Lead Score</span>
                  <span className="text-gray-500">{calculateLeadScore()}/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-blue-600 h-1.5 rounded-full" 
                    style={{ width: `${calculateLeadScore()}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Form Content */}
          <div className="p-4">
            <MobileSectionContent />
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation />

          {/* Mobile Submit Button (Fixed at bottom) */}
          <div className="fixed bottom-20 left-0 right-0 px-4 z-30">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg"
            >
              {isSubmitting ? 'Saving Lead...' : 'Save Lead'}
            </button>
          </div>
        </div>
      ) : (
        /* Desktop View - Original Code (unchanged) */
        <div>
          {/* Header */}
          <div className="bg-white border-b border-gray-200">
            <div className="mx-auto px-4 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => navigate(-1)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Add New Lead</h1>
                    <p className="text-gray-600">Capture potential member information</p>
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
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{isSubmitting ? 'Saving...' : 'Save Lead'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Form */}
          <div className="mx-auto px-4 py-6">
            <div className="mx-auto">
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Lead Details</span>
                  <span className="text-sm text-gray-500">Step 1 of 4</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                          errors.firstName ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Enter first name"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                          errors.lastName ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Enter last name"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                            errors.phone ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                            errors.email ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="name@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    {/* Age */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        min="12"
                        max="100"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="e.g., 25"
                      />
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">Select Gender</option>
                        {genderOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Occupation */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Occupation
                      </label>
                      <input
                        type="text"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="e.g., Software Engineer"
                      />
                    </div>

                    {/* Address */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Street address"
                      />
                    </div>

                    {/* City & Pincode */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="e.g., Mumbai"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pincode
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="e.g., 400001"
                      />
                    </div>
                  </div>
                </div>

                {/* Fitness Information Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Dumbbell className="w-4 h-4 text-green-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">Fitness Information</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Fitness Goal */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Fitness Goal *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {fitnessGoalOptions.map(option => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, fitnessGoal: option.value }))}
                            className={`p-4 border rounded-lg text-center transition-all ${
                              formData.fitnessGoal === option.value
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="text-2xl mb-2">{option.icon}</div>
                            <div className="text-sm font-medium">{option.label}</div>
                          </button>
                        ))}
                      </div>
                      {errors.fitnessGoal && (
                        <p className="mt-1 text-sm text-red-600">{errors.fitnessGoal}</p>
                      )}
                    </div>

                    {/* Primary Interest */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Interest *
                      </label>
                      <select
                        name="primaryInterest"
                        value={formData.primaryInterest}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                          errors.primaryInterest ? 'border-red-300' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select Interest Area</option>
                        {interestOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.primaryInterest && (
                        <p className="mt-1 text-sm text-red-600">{errors.primaryInterest}</p>
                      )}
                    </div>

                    {/* Experience Level */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Experience Level
                      </label>
                      <select
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>

                    {/* Days Per Week */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Days Per Week (Goal)
                      </label>
                      <select
                        name="daysPerWeek"
                        value={formData.daysPerWeek}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="1">1 Day</option>
                        <option value="2">2 Days</option>
                        <option value="3">3 Days</option>
                        <option value="4">4 Days</option>
                        <option value="5">5 Days</option>
                        <option value="6">6 Days</option>
                        <option value="7">7 Days</option>
                      </select>
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">Select Time Slot</option>
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Budget
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <IndianRupee className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="e.g., 5000"
                        />
                      </div>
                    </div>

                    {/* Health Issues */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Health Issues (if any)
                      </label>
                      <textarea
                        name="healthIssues"
                        value={formData.healthIssues}
                        onChange={handleChange}
                        rows="2"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="e.g., Asthma, High BP, etc."
                      />
                    </div>

                    {/* Medications */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Medications
                      </label>
                      <textarea
                        name="medications"
                        value={formData.medications}
                        onChange={handleChange}
                        rows="2"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="List any medications"
                      />
                    </div>

                    {/* Past Injuries */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Past Injuries/Surgeries
                      </label>
                      <textarea
                        name="injuries"
                        value={formData.injuries}
                        onChange={handleChange}
                        rows="2"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="e.g., Knee surgery (2020), Shoulder injury, etc."
                      />
                    </div>
                  </div>
                </div>

                {/* Lead Information Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 text-purple-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">Lead Information</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Source */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Lead Source *
                      </label>
                      <select
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                          errors.source ? 'border-red-300' : 'border-gray-300'
                        }`}
                      >
                        <option value="">How did they find us?</option>
                        {sourceOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.source && (
                        <p className="mt-1 text-sm text-red-600">{errors.source}</p>
                      )}
                    </div>

                    {/* Assigned To */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Assign To Staff *
                      </label>
                      <select
                        name="assignedTo"
                        value={formData.assignedTo}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                          errors.assignedTo ? 'border-red-300' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select Staff Member</option>
                        {staffOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.assignedTo && (
                        <p className="mt-1 text-sm text-red-600">{errors.assignedTo}</p>
                      )}
                    </div>

                    {/* Branch */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Branch
                      </label>
                      <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        {branchOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Follow-up Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Follow-up Date *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="date"
                          name="followUpDate"
                          value={formData.followUpDate}
                          onChange={handleChange}
                          min={getTodayDate()}
                          className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                            errors.followUpDate ? 'border-red-300' : 'border-gray-300'
                          }`}
                        />
                      </div>
                      {errors.followUpDate && (
                        <p className="mt-1 text-sm text-red-600">{errors.followUpDate}</p>
                      )}
                    </div>

                    {/* Priority */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Lead Priority
                      </label>
                      <div className="flex space-x-2">
                        {priorityOptions.map(option => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, leadPriority: option.value }))}
                            className={`flex-1 px-4 py-2.5 border rounded-lg text-center ${
                              formData.leadPriority === option.value
                                ? `${option.color} border-transparent`
                                : 'border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Communication Preference */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Communication Preference
                      </label>
                      <select
                        name="communicationPreference"
                        value={formData.communicationPreference}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        {communicationOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Family Members Interested */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Family Members Also Interested
                      </label>
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ 
                            ...prev, 
                            familyMembersInterested: Math.max(0, prev.familyMembersInterested - 1) 
                          }))}
                          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          -
                        </button>
                        <div className="flex-1 text-center">
                          <span className="text-lg font-bold">{formData.familyMembersInterested}</span>
                          <div className="text-xs text-gray-500">members</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ 
                            ...prev, 
                            familyMembersInterested: prev.familyMembersInterested + 1 
                          }))}
                          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Heard About Us */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        How did they hear about us?
                      </label>
                      <input
                        type="text"
                        name="heardAboutUs"
                        value={formData.heardAboutUs}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="e.g., Friend recommendation, Facebook ad, etc."
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
                        rows="4"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Add any additional information, conversation details, or special requirements..."
                      />
                    </div>
                  </div>
                </div>

                {/* Trial Session Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-orange-600" />
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900">Trial Session</h2>
                    </div>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="trialRequested"
                        checked={formData.trialRequested}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="text-sm font-medium text-gray-700">Request Trial Session</span>
                    </label>
                  </div>

                  {formData.trialRequested && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Trial Date
                        </label>
                        <input
                          type="date"
                          name="trialDate"
                          value={formData.trialDate}
                          onChange={handleChange}
                          min={getTodayDate()}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Trial Time
                        </label>
                        <select
                          name="trialTime"
                          value={formData.trialTime}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        >
                          <option value="">Select Time Slot</option>
                          {timeSlots.map(slot => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                </div>

                {/* Emergency Contact Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-red-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">Emergency Contact (Optional)</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Name
                      </label>
                      <input
                        type="text"
                        name="emergencyName"
                        value={formData.emergencyName}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Relationship
                      </label>
                      <input
                        type="text"
                        name="emergencyRelation"
                        value={formData.emergencyRelation}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="e.g., Spouse, Parent, Friend"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">Lead Score: <span className="text-blue-600">{calculateLeadScore()}/100</span></p>
                      <p className="text-xs mt-1">Based on completeness and priority</p>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button
                        type="button"
                        onClick={() => navigate('/leads')}
                        className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <Save className="w-4 h-4" />
                            <span>Save Lead</span>
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
      )}

      {/* Success Toast */}
      {isSubmitting && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-slideUp">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>Lead added successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewLeads;