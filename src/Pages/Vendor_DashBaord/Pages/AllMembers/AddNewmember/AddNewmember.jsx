import React, { useState } from 'react';
import { 
  User, 
  Briefcase, 
  Heart, 
  CreditCard, 
  FileText, 
  Upload, 
  Camera, 
  X, 
  Save, 
  ChevronRight,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Users,
  Activity,
  AlertCircle,
  Shield,
  Star,
  Award,
  Clock,
  IndianRupee,
  Menu,
  ChevronLeft
} from 'lucide-react';

const AddNewmember = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyContact: '',
    emergencyPhone: '',
    relationship: '',
    
    // Professional Information
    occupation: '',
    company: '',
    workPhone: '',
    workEmail: '',
    employmentType: '',
    incomeRange: '',
    
    // Health Information
    height: '',
    weight: '',
    bloodGroup: '',
    fitnessLevel: '',
    medicalConditions: '',
    allergies: '',
    medications: '',
    injuries: '',
    fitnessGoals: [],
    
    // Membership Details
    membershipPlan: '',
    planDuration: '',
    startDate: '',
    endDate: '',
    personalTrainer: '',
    paymentMethod: '',
    totalAmount: '',
    paidAmount: '',
    discount: '',
    
    // Additional Information
    referredBy: '',
    howHeard: '',
    specialInstructions: '',
    photo: null
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'professional', label: 'Professional', icon: Briefcase },
    { id: 'health', label: 'Health & Fitness', icon: Heart },
    { id: 'membership', label: 'Membership', icon: CreditCard },
    { id: 'additional', label: 'Additional', icon: FileText }
  ];

  const membershipPlans = [
    { id: 'monthly', name: 'Monthly Plan', price: 2000 },
    { id: 'quarterly', name: 'Quarterly Plan', price: 5500 },
    { id: 'half-yearly', name: 'Half Yearly', price: 10000 },
    { id: 'yearly', name: 'Yearly Plan', price: 18000 },
    { id: 'personal-training', name: 'Personal Training', price: 5000 },
    { id: 'couple', name: 'Couple Plan', price: 3500 },
    { id: 'family', name: 'Family Plan', price: 6000 }
  ];

  const fitnessGoalsOptions = [
    'Weight Loss', 'Muscle Gain', 'General Fitness', 'Body Toning', 
    'Strength', 'Endurance', 'Rehabilitation', 'Sports Specific'
  ];

  const paymentMethods = ['Cash', 'UPI', 'Card', 'Bank Transfer', 'Cheque'];

  return (
    <div className="min-h-screen bg-gray-50 md:p-3 p-1">
      <div className=" mx-auto bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-white px-4 sm:px-6 lg:px-4 py-4 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Title Section */}
            <div className="flex-1">
              <h1 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                Add New Member
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Complete all sections to register a new member
              </p>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* Action Button */}
            <div className="flex items-center justify-end">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center text-xs sm:text-sm font-medium transition w-full sm:w-auto justify-center">
                <Save className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Save as Draft
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 bg-white">
          {/* Desktop Tabs */}
          <div className="hidden sm:flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 sm:px-6 py-3 text-xs sm:text-sm font-medium border-b-2 transition-all flex-1 sm:flex-none ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <tab.icon className={`w-3 h-3 sm:w-4 sm:h-4 mr-2 ${
                  activeTab === tab.id ? 'text-blue-600' : 'text-gray-400'
                }`} />
                {tab.label}
                {activeTab === tab.id && (
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 text-blue-600" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Tabs Dropdown */}
          <div className="sm:hidden relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full px-4 py-3 flex items-center justify-between bg-white border-b border-gray-200"
            >
              <div className="flex items-center">
                {(() => {
                  const TabIcon = tabs.find(t => t.id === activeTab)?.icon || User;
                  return <TabIcon className="w-4 h-4 mr-2 text-blue-600" />;
                })()}
                <span className="text-sm font-medium text-gray-700">
                  {tabs.find(t => t.id === activeTab)?.label || 'Select Tab'}
                </span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${isMobileMenuOpen ? 'rotate-90' : ''}`} />
            </button>
            
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full px-4 py-3 flex items-center text-sm ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="w-4 h-4 mr-3" />
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Tab Content */}
            {activeTab === 'personal' && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                  {/* Photo Upload */}
                  <div className="w-full lg:w-48 flex justify-center lg:block">
                    <div className="relative">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50">
                        {formData.photo ? (
                          <div className="relative">
                            <img 
                              src={URL.createObjectURL(formData.photo)} 
                              alt="Member" 
                              className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded"
                            />
                            <button
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, photo: null }))}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <User className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mb-2" />
                            <span className="text-xs sm:text-sm text-gray-500">No photo</span>
                          </>
                        )}
                      </div>
                      <label className="mt-3 sm:mt-4 flex flex-col items-center">
                        <div className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer flex items-center text-xs sm:text-sm">
                          <Camera className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          {formData.photo ? 'Change Photo' : 'Upload Photo'}
                        </div>
                        <input
                          type="file"
                          name="photo"
                          onChange={handleInputChange}
                          accept="image/*"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Basic Information */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 flex items-center">
                          <User className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600" />
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          required
                          placeholder="Enter first name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Gender</label>
                        <div className="flex flex-wrap gap-2 sm:gap-4">
                          {['Male', 'Female', 'Other'].map((gender) => (
                            <label key={gender} className="flex items-center">
                              <input
                                type="radio"
                                name="gender"
                                value={gender}
                                checked={formData.gender === gender}
                                onChange={handleInputChange}
                                className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                              />
                              <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-gray-700">{gender}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 flex items-center">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600" />
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          required
                          placeholder="Enter last name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 flex items-center">
                          <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          placeholder="member@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 flex items-center">
                          <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          required
                          placeholder="+91 9876543210"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address Section */}
                <div className="border-t border-gray-200 pt-4 sm:pt-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                    Address Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Address</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows="2"
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Full address"
                      />
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">City</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">State</label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">ZIP Code</label>
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="border-t border-gray-200 pt-4 sm:pt-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                    Emergency Contact
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Contact Name *</label>
                      <input
                        type="text"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        required
                        placeholder="Emergency contact name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        required
                        placeholder="Emergency phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Relationship</label>
                      <select
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="">Select relationship</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Spouse">Spouse</option>
                        <option value="Sibling">Sibling</option>
                        <option value="Friend">Friend</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'professional' && (
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Occupation</label>
                      <select
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="">Select occupation</option>
                        <option value="Student">Student</option>
                        <option value="Professional">Professional</option>
                        <option value="Business">Business</option>
                        <option value="Housewife">Housewife</option>
                        <option value="Retired">Retired</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Company/Organization</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Company name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Work Email</label>
                      <input
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="work@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Employment Type</label>
                      <select
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="">Select employment type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Self-employed">Self-employed</option>
                        <option value="Freelancer">Freelancer</option>
                        <option value="Unemployed">Unemployed</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Work Phone</label>
                      <input
                        type="tel"
                        name="workPhone"
                        value={formData.workPhone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Office phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Income Range (Monthly)</label>
                      <select
                        name="incomeRange"
                        value={formData.incomeRange}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="">Select income range</option>
                        <option value="0-25000">₹0 - ₹25,000</option>
                        <option value="25001-50000">₹25,001 - ₹50,000</option>
                        <option value="50001-100000">₹50,001 - ₹1,00,000</option>
                        <option value="100001-200000">₹1,00,001 - ₹2,00,000</option>
                        <option value="200001+">₹2,00,001+</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 sm:p-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-blue-800 mb-1 sm:mb-2 flex items-center">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Data Privacy Note
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-700">
                    Professional information is collected for demographic analysis and personalized service offerings. 
                    This data is kept confidential and used only for internal purposes.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'health' && (
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Height (cm)</label>
                      <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="e.g., 175"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Blood Group</label>
                      <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="">Select blood group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Medical Conditions</label>
                      <textarea
                        name="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={handleInputChange}
                        rows="2"
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Any existing medical conditions"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Injuries</label>
                      <textarea
                        name="injuries"
                        value={formData.injuries}
                        onChange={handleInputChange}
                        rows="2"
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Any previous injuries"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Weight (kg)</label>
                      <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="e.g., 70"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Fitness Level</label>
                      <select
                        name="fitnessLevel"
                        value={formData.fitnessLevel}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="">Select fitness level</option>
                        <option value="Beginner">Beginner (New to exercise)</option>
                        <option value="Intermediate">Intermediate (Some experience)</option>
                        <option value="Advanced">Advanced (Regular exerciser)</option>
                        <option value="Athlete">Athlete (Competitive level)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Allergies</label>
                      <textarea
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleInputChange}
                        rows="2"
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Any known allergies"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Medications</label>
                      <textarea
                        name="medications"
                        value={formData.medications}
                        onChange={handleInputChange}
                        rows="2"
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Current medications"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3 flex items-center">
                    <Activity className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600" />
                    Fitness Goals
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                    {fitnessGoalsOptions.map((goal) => (
                      <label key={goal} className="flex items-center space-x-2 p-2 sm:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer text-xs sm:text-sm">
                        <input
                          type="checkbox"
                          name="fitnessGoals"
                          value={goal}
                          checked={formData.fitnessGoals.includes(goal)}
                          onChange={(e) => {
                            const isChecked = e.target.checked;
                            setFormData(prev => ({
                              ...prev,
                              fitnessGoals: isChecked 
                                ? [...prev.fitnessGoals, goal]
                                : prev.fitnessGoals.filter(g => g !== goal)
                            }));
                          }}
                          className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3 sm:p-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-yellow-800 mb-1 sm:mb-2 flex items-center">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Health Disclaimer
                  </h4>
                  <p className="text-xs sm:text-sm text-yellow-700">
                    Please ensure all health information is accurate. Inaccurate information may affect 
                    the safety and effectiveness of the workout program. Members with serious health 
                    conditions should consult a physician before starting any exercise program.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'membership' && (
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Membership Plan *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {membershipPlans.map(plan => (
                          <label key={plan.id} className="relative">
                            <input
                              type="radio"
                              name="membershipPlan"
                              value={plan.id}
                              checked={formData.membershipPlan === plan.id}
                              onChange={handleInputChange}
                              className="sr-only peer"
                            />
                            <div className="p-3 sm:p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-50 transition-all">
                              <div className="flex justify-between items-center">
                                <div>
                                  <h4 className="font-medium text-gray-900 text-xs sm:text-sm">{plan.name}</h4>
                                  <p className="text-xs sm:text-sm text-gray-600 mt-1">₹{plan.price.toLocaleString()}</p>
                                </div>
                                {formData.membershipPlan === plan.id && (
                                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                    <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                )}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Start Date *</label>
                        <input
                          type="date"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">End Date</label>
                        <input
                          type="date"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          disabled
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Personal Trainer</label>
                      <select
                        name="personalTrainer"
                        value={formData.personalTrainer}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="">No trainer</option>
                        <option value="trainer1">John Doe (Morning)</option>
                        <option value="trainer2">Jane Smith (Evening)</option>
                        <option value="trainer3">Mike Johnson (Weekends)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Payment Details</label>
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <label className="block text-xs sm:text-sm text-gray-600 mb-1">Total Amount</label>
                          <div className="flex items-center px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg">
                            <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2" />
                            <input
                              type="number"
                              name="totalAmount"
                              value={formData.totalAmount}
                              onChange={handleInputChange}
                              className="w-full focus:outline-none text-sm"
                              placeholder="0.00"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs sm:text-sm text-gray-600 mb-1">Discount</label>
                          <div className="flex items-center px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg">
                            <span className="text-gray-400 mr-2 text-sm">₹</span>
                            <input
                              type="number"
                              name="discount"
                              value={formData.discount}
                              onChange={handleInputChange}
                              className="w-full focus:outline-none text-sm"
                              placeholder="0.00"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs sm:text-sm text-gray-600 mb-1">Paid Amount *</label>
                          <div className="flex items-center px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg bg-green-50">
                            <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                            <input
                              type="number"
                              name="paidAmount"
                              value={formData.paidAmount}
                              onChange={handleInputChange}
                              className="w-full focus:outline-none bg-transparent text-sm"
                              placeholder="0.00"
                              required
                            />
                          </div>
                        </div>

                        <div className="pt-2 border-t">
                          <div className="flex justify-between text-xs sm:text-sm">
                            <span className="text-gray-600">Due Amount:</span>
                            <span className="font-semibold text-red-600">
                              ₹{Math.max(0, (formData.totalAmount || 0) - (formData.paidAmount || 0) - (formData.discount || 0)).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Payment Method</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {paymentMethods.map(method => (
                          <label key={method} className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value={method}
                              checked={formData.paymentMethod === method}
                              onChange={handleInputChange}
                              className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                            />
                            <span className="text-gray-700">{method}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-100 rounded-lg p-3 sm:p-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-green-800 mb-1 sm:mb-2 flex items-center">
                    <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Payment Terms
                  </h4>
                  <ul className="text-xs sm:text-sm text-green-700 space-y-1">
                    <li>• Membership fees are non-refundable</li>
                    <li>• Late payments incur a ₹100/day penalty after due date</li>
                    <li>• Membership can be frozen for up to 30 days/year</li>
                    <li>• Receipt will be generated automatically</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'additional' && (
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Referred By</label>
                      <input
                        type="text"
                        name="referredBy"
                        value={formData.referredBy}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Existing member name or ID"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">How did you hear about us?</label>
                      <select
                        name="howHeard"
                        value={formData.howHeard}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="">Select option</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Friend/Family">Friend/Family</option>
                        <option value="Walk-in">Walk-in</option>
                        <option value="Advertisement">Advertisement</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Special Instructions</label>
                    <textarea
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="Any special requirements or instructions..."
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 sm:pt-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                    Terms & Conditions
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <div className="space-y-2 sm:space-y-3">
                      <label className="flex items-start space-x-2 sm:space-x-3 text-xs sm:text-sm">
                        <input
                          type="checkbox"
                          required
                          className="mt-0.5 h-3 w-3 sm:h-4 sm:w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700">
                          I agree to the gym's terms and conditions, including membership rules, payment terms, and cancellation policy.
                        </span>
                      </label>
                      <label className="flex items-start space-x-2 sm:space-x-3 text-xs sm:text-sm">
                        <input
                          type="checkbox"
                          required
                          className="mt-0.5 h-3 w-3 sm:h-4 sm:w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700">
                          I confirm that all information provided is accurate to the best of my knowledge.
                        </span>
                      </label>
                      <label className="flex items-start space-x-2 sm:space-x-3 text-xs sm:text-sm">
                        <input
                          type="checkbox"
                          className="mt-0.5 h-3 w-3 sm:h-4 sm:w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700">
                          I agree to receive promotional emails and SMS about gym offers and updates.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3" />
                    <div>
                      <h4 className="font-medium text-blue-800 text-sm sm:text-base">Welcome Offer!</h4>
                      <p className="text-xs sm:text-sm text-blue-700 mt-1">
                        New members get 2 free personal training sessions and a complimentary fitness assessment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gray-50">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
              <div className="text-xs sm:text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  <span>Auto-save every 2 minutes</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:space-x-3">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm order-2 sm:order-1"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center justify-center text-sm order-1 sm:order-2"
                >
                  <Save className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Save & Create Member
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewmember;