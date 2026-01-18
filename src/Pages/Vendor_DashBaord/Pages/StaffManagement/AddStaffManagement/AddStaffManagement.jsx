import React, { useState } from 'react';
import { 
  User, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Users,
  Shield,
  CreditCard,
  FileText,
  GraduationCap,
  Award,
  Clock,
  Upload,
  Camera,
  X,
  Save,
  ChevronRight,
  Menu,
  IndianRupee,
  Key,
  UserCheck,
  FileCheck,
  Activity,
  Star,
  AlertCircle,
  Home,
  Building,
  PhoneCall,
  Smartphone,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Settings,
  ShieldCheck,
  FileDigit,
  Fingerprint,
  Banknote,
  Percent,
  Calculator,
  Wallet,
  Bell,
  CheckCircle,
  AlertTriangle,
  Wifi,
  Monitor,
  Printer,
  Router,
  Database
} from 'lucide-react';

const AddStaffManagement = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    employeeId: '',
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    personalPhone: '',
    emergencyPhone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    maritalStatus: '',
    nationality: '',
    
    // Professional Information
    department: '',
    designation: '',
    employmentType: '',
    joinDate: '',
    reportingManager: '',
    workLocation: '',
    workPhone: '',
    workEmail: '',
    employeeType: '',
    
    // Educational Background
    highestQualification: '',
    institution: '',
    passingYear: '',
    specialization: '',
    certificates: [],
    
    // Experience
    previousExperience: [
      { company: '', position: '', duration: '', reference: '' }
    ],
    
    // Bank & Salary Details
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountHolderName: '',
    panNumber: '',
    aadhaarNumber: '',
    baseSalary: '',
    allowances: '',
    deductions: '',
    netSalary: '',
    paymentMethod: '',
    taxDeduction: '',
    
    // Access & Permissions
    systemAccess: false,
    modules: [],
    accessLevel: '',
    loginCredentials: {
      username: '',
      password: '',
      confirmPassword: ''
    },
    
    // Equipment & Assets
    assignedAssets: [],
    
    // Emergency Contact
    emergencyContact: '',
    emergencyRelation: '',
    emergencyAddress: '',
    
    // Additional Information
    shiftTiming: '',
    weeklyOff: '',
    probationPeriod: '',
    noticePeriod: '',
    references: '',
    photo: null,
    resume: null,
    idProof: null,
    addressProof: null
  });

  const handleInputChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...formData.previousExperience];
    updatedExperience[index][field] = value;
    setFormData(prev => ({ ...prev, previousExperience: updatedExperience }));
  };

  const addExperienceField = () => {
    setFormData(prev => ({
      ...prev,
      previousExperience: [...prev.previousExperience, { company: '', position: '', duration: '', reference: '' }]
    }));
  };

  const removeExperienceField = (index) => {
    if (formData.previousExperience.length > 1) {
      const updatedExperience = formData.previousExperience.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, previousExperience: updatedExperience }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'professional', label: 'Professional', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'financial', label: 'Bank & Salary', icon: CreditCard },
    { id: 'access', label: 'Access Control', icon: Shield },
    { id: 'additional', label: 'Additional', icon: FileText }
  ];

  const departments = [
    'Administration', 'Sales & Marketing', 'Operations', 'Customer Service',
    'Finance & Accounts', 'Human Resources', 'IT Support', 'Maintenance',
    'Training', 'Management', 'Security', 'Housekeeping'
  ];

  const designations = [
    'Manager', 'Assistant Manager', 'Supervisor', 'Executive',
    'Associate', 'Trainee', 'Intern', 'Consultant',
    'Team Lead', 'Officer', 'Coordinator', 'Specialist'
  ];

  const employmentTypes = [
    'Full-time', 'Part-time', 'Contract', 'Temporary',
    'Internship', 'Probation', 'Consultant'
  ];

  const modules = [
    'Dashboard', 'Member Management', 'Staff Management', 'Attendance',
    'Payroll', 'Inventory', 'Reports', 'Billing',
    'Scheduling', 'CRM', 'Maintenance', 'Settings'
  ];

  const accessLevels = [
    { id: 'admin', label: 'Administrator', desc: 'Full access to all modules' },
    { id: 'manager', label: 'Manager', desc: 'Access to assigned modules with edit rights' },
    { id: 'staff', label: 'Staff', desc: 'Limited access to specific modules' },
    { id: 'viewer', label: 'View Only', desc: 'Read-only access' }
  ];

  const weeklyOffOptions = ['Sunday', 'Monday', 'Saturday', 'Sunday+Saturday', 'Rotational'];
  const shiftOptions = ['Morning (6AM-2PM)', 'Evening (2PM-10PM)', 'Night (10PM-6AM)', 'General (9AM-6PM)'];

  return (
    <div className="min-h-screen  md:p-3 p-1">
      <div className="mx-auto bg-white rounded-xl sm:rounded-2xl  overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to- px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Title Section */}
            <div className="flex-1">
              <div className="flex items-center space-x-1">
                <div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold ">
                    Add New Staff Member
                  </h1>
                  <p className="text-xs sm:text-sm  mt-1">
                    Complete all sections to onboard a new staff member
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
           
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
              <div className="space-y-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Photo & ID Upload */}
                  <div className="w-full lg:w-1/3 space-y-4">
                    {/* Photo Upload */}
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                        <Camera className="w-4 h-4 mr-2 text-blue-600" />
                        Staff Photo
                      </h3>
                      <div className="relative">
                        <div className="w-32 h-32 mx-auto border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-white">
                          {formData.photo ? (
                            <div className="relative">
                              <img 
                                src={URL.createObjectURL(formData.photo)} 
                                alt="Staff" 
                                className="w-28 h-28 object-cover rounded"
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
                              <User className="w-12 h-12 text-gray-400 mb-2" />
                              <span className="text-sm text-gray-500">No photo</span>
                            </>
                          )}
                        </div>
                        <label className="mt-4 flex flex-col items-center">
                          <div className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer flex items-center text-sm">
                            <Camera className="w-4 h-4 mr-2" />
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

                    {/* Employee ID */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                      <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                        <FileDigit className="w-4 h-4 mr-2 text-blue-600" />
                        Employee ID
                      </h3>
                      <input
                        type="text"
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-mono"
                        placeholder="EMP-XXXXXX"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-2">Auto-generate if left blank</p>
                    </div>
                  </div>

                  {/* Basic Information */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          required
                          placeholder="Enter first name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                        <div className="flex gap-4">
                          {['Male', 'Female', 'Other'].map((gender) => (
                            <label key={gender} className="flex items-center">
                              <input
                                type="radio"
                                name="gender"
                                value={gender}
                                checked={formData.gender === gender}
                                onChange={handleInputChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                              />
                              <span className="ml-2 text-sm text-gray-700">{gender}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-blue-600" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          required
                          placeholder="staff@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                          <Home className="w-4 h-4 mr-2 text-blue-600" />
                          Address
                        </label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          rows="2"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          placeholder="Full address"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          required
                          placeholder="Enter last name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-blue-600" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="personalPhone"
                          value={formData.personalPhone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          required
                          placeholder="+91 9876543210"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
                        <input
                          type="text"
                          name="nationality"
                          value={formData.nationality}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          placeholder="Indian"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-red-600" />
                    Emergency Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                      <input
                        type="text"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        required
                        placeholder="Emergency contact name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        required
                        placeholder="Emergency phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Relationship</label>
                      <input
                        type="text"
                        name="emergencyRelation"
                        value={formData.emergencyRelation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Father/Mother/Spouse"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'professional' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department *</label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        required
                      >
                        <option value="">Select department</option>
                        {departments.map(dept => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Designation *</label>
                      <select
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        required
                      >
                        <option value="">Select designation</option>
                        {designations.map(designation => (
                          <option key={designation} value={designation}>{designation}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type *</label>
                      <select
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        required
                      >
                        <option value="">Select type</option>
                        {employmentTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Work Location</label>
                      <input
                        type="text"
                        name="workLocation"
                        value={formData.workLocation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Main Branch/Head Office"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Join Date *</label>
                      <input
                        type="date"
                        name="joinDate"
                        value={formData.joinDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Reporting Manager</label>
                      <select
                        name="reportingManager"
                        value={formData.reportingManager}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="">Select manager</option>
                        <option value="manager1">John Doe (Operations Manager)</option>
                        <option value="manager2">Jane Smith (HR Manager)</option>
                        <option value="manager3">Mike Johnson (General Manager)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <Building className="w-4 h-4 mr-2 text-blue-600" />
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="work@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <PhoneCall className="w-4 h-4 mr-2 text-blue-600" />
                        Work Phone
                      </label>
                      <input
                        type="tel"
                        name="workPhone"
                        value={formData.workPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Office extension"
                      />
                    </div>
                  </div>
                </div>

                {/* Previous Experience */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                    Previous Experience
                  </h3>
                  {formData.previousExperience.map((exp, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                        <input
                          type="text"
                          value={exp.position}
                          onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          placeholder="Job title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                        <input
                          type="text"
                          value={exp.duration}
                          onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          placeholder="e.g., 2 years"
                        />
                      </div>
                      <div className="flex items-end space-x-2">
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Reference</label>
                          <input
                            type="text"
                            value={exp.reference}
                            onChange={(e) => handleExperienceChange(index, 'reference', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                            placeholder="Contact person"
                          />
                        </div>
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => removeExperienceField(index)}
                            className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addExperienceField}
                    className="px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-blue-500 hover:text-blue-600"
                  >
                    + Add Previous Experience
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Highest Qualification *</label>
                      <select
                        name="highestQualification"
                        value={formData.highestQualification}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        required
                      >
                        <option value="">Select qualification</option>
                        <option value="High School">High School</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                        <option value="Master's Degree">Master's Degree</option>
                        <option value="PhD">PhD</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Institution *</label>
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        required
                        placeholder="University/College name"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Passing Year</label>
                      <input
                        type="number"
                        name="passingYear"
                        value={formData.passingYear}
                        onChange={handleInputChange}
                        min="1900"
                        max="2099"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="YYYY"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                      <input
                        type="text"
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="e.g., Computer Science, Business Administration"
                      />
                    </div>
                  </div>
                </div>

                {/* Certificates & Documents */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <FileCheck className="w-5 h-5 mr-2 text-green-600" />
                    Documents & Certificates
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Resume Upload */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 cursor-pointer">
                      <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm font-medium text-gray-700 mb-1">
                        {formData.resume ? formData.resume.name : 'Upload Resume'}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">PDF, DOC, DOCX (Max 5MB)</p>
                      <label className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 cursor-pointer">
                        Choose File
                        <input
                          type="file"
                          name="resume"
                          onChange={handleInputChange}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />
                      </label>
                    </div>

                    {/* ID Proof */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 cursor-pointer">
                      <Fingerprint className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm font-medium text-gray-700 mb-1">
                        {formData.idProof ? formData.idProof.name : 'ID Proof'}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">Aadhaar, PAN, Passport</p>
                      <label className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 cursor-pointer">
                        Choose File
                        <input
                          type="file"
                          name="idProof"
                          onChange={handleInputChange}
                          accept="image/*,.pdf"
                          className="hidden"
                        />
                      </label>
                    </div>

                    {/* Address Proof */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 cursor-pointer">
                      <Home className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm font-medium text-gray-700 mb-1">
                        {formData.addressProof ? formData.addressProof.name : 'Address Proof'}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">Utility bill, Rental agreement</p>
                      <label className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 cursor-pointer">
                        Choose File
                        <input
                          type="file"
                          name="addressProof"
                          onChange={handleInputChange}
                          accept="image/*,.pdf"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'financial' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Bank Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Banknote className="w-5 h-5 mr-2 text-green-600" />
                      Bank Account Details
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name *</label>
                      <input
                        type="text"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        required
                        placeholder="e.g., State Bank of India"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Account Number *</label>
                      <input
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        required
                        placeholder="Bank account number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">IFSC Code *</label>
                      <input
                        type="text"
                        name="ifscCode"
                        value={formData.ifscCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        required
                        placeholder="e.g., SBIN0001234"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">PAN Number</label>
                      <input
                        type="text"
                        name="panNumber"
                        value={formData.panNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="ABCDE1234F"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Aadhaar Number</label>
                      <input
                        type="text"
                        name="aadhaarNumber"
                        value={formData.aadhaarNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="12-digit Aadhaar number"
                      />
                    </div>
                  </div>

                  {/* Salary Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <IndianRupee className="w-5 h-5 mr-2 text-green-600" />
                      Salary Structure
                    </h3>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Base Salary *</label>
                        <div className="flex items-center">
                          <IndianRupee className="w-5 h-5 text-gray-400 mr-2" />
                          <input
                            type="number"
                            name="baseSalary"
                            value={formData.baseSalary}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                            required
                            placeholder="Monthly basic salary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <Percent className="w-4 h-4 mr-2 text-blue-600" />
                            Allowances
                          </label>
                          <div className="flex items-center">
                            <IndianRupee className="w-5 h-5 text-gray-400 mr-2" />
                            <input
                              type="number"
                              name="allowances"
                              value={formData.allowances}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                              placeholder="HRA, TA, etc."
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Deductions</label>
                          <div className="flex items-center">
                            <IndianRupee className="w-5 h-5 text-gray-400 mr-2" />
                            <input
                              type="number"
                              name="deductions"
                              value={formData.deductions}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                              placeholder="PF, TDS, etc."
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <label className="block text-sm font-semibold text-green-800 mb-1">Net Salary</label>
                            <div className="flex items-center text-lg font-bold text-green-700">
                              <IndianRupee className="w-6 h-6 mr-1" />
                              {((parseFloat(formData.baseSalary) || 0) + 
                                (parseFloat(formData.allowances) || 0) - 
                                (parseFloat(formData.deductions) || 0)).toLocaleString()}
                            </div>
                          </div>
                          <Calculator className="w-6 h-6 text-green-600" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                        <div className="grid grid-cols-2 gap-3">
                          {['Bank Transfer', 'Cash', 'Cheque', 'UPI'].map(method => (
                            <label key={method} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                              <input
                                type="radio"
                                name="paymentMethod"
                                value={method}
                                checked={formData.paymentMethod === method}
                                onChange={handleInputChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                              />
                              <span className="text-sm text-gray-700">{method}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'access' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* System Access */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Key className="w-5 h-5 mr-2 text-blue-600" />
                      System Access Control
                    </h3>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="systemAccess"
                          checked={formData.systemAccess}
                          onChange={handleInputChange}
                          className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <div>
                          <span className="text-sm font-medium text-gray-700">Enable System Access</span>
                          <p className="text-xs text-gray-500 mt-1">Grant access to the management system</p>
                        </div>
                      </label>
                    </div>

                    {formData.systemAccess && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Access Level</label>
                          <div className="space-y-2">
                            {accessLevels.map(level => (
                              <label key={level.id} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                                <input
                                  type="radio"
                                  name="accessLevel"
                                  value={level.id}
                                  checked={formData.accessLevel === level.id}
                                  onChange={handleInputChange}
                                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700">{level.label}</span>
                                    {formData.accessLevel === level.id && (
                                      <CheckCircle className="w-4 h-4 text-green-500" />
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-500 mt-1">{level.desc}</p>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Module Permissions</label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {modules.map(module => (
                              <label key={module} className="flex items-center space-x-2 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={formData.modules.includes(module)}
                                  onChange={(e) => {
                                    const isChecked = e.target.checked;
                                    setFormData(prev => ({
                                      ...prev,
                                      modules: isChecked 
                                        ? [...prev.modules, module]
                                        : prev.modules.filter(m => m !== module)
                                    }));
                                  }}
                                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <span className="text-sm text-gray-700">{module}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Login Credentials */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <ShieldCheck className="w-5 h-5 mr-2 text-green-600" />
                      Login Credentials
                    </h3>

                    {formData.systemAccess ? (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Username *</label>
                          <div className="flex items-center">
                            <User className="w-5 h-5 text-gray-400 mr-2" />
                            <input
                              type="text"
                              name="loginCredentials.username"
                              value={formData.loginCredentials.username}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                              required
                              placeholder="Choose a username"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
                          <div className="flex items-center">
                            <Key className="w-5 h-5 text-gray-400 mr-2" />
                            <input
                              type="password"
                              name="loginCredentials.password"
                              value={formData.loginCredentials.password}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                              required
                              placeholder="Create a strong password"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
                          <div className="flex items-center">
                            <Shield className="w-5 h-5 text-gray-400 mr-2" />
                            <input
                              type="password"
                              name="loginCredentials.confirmPassword"
                              value={formData.loginCredentials.confirmPassword}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                              required
                              placeholder="Re-enter password"
                            />
                          </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                          <h4 className="text-sm font-semibold text-blue-800 mb-2 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            Password Requirements
                          </h4>
                          <ul className="text-xs text-blue-700 space-y-1">
                            <li>• Minimum 8 characters</li>
                            <li>• At least one uppercase letter</li>
                            <li>• At least one number</li>
                            <li>• At least one special character</li>
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gray-50 rounded-lg p-6 text-center">
                        <Shield className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <h4 className="text-sm font-medium text-gray-700 mb-2">System Access Disabled</h4>
                        <p className="text-xs text-gray-500">Enable system access to set login credentials</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Assigned Assets */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-gray-600" />
                    Assigned Assets
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {['Laptop', 'Mobile Phone', 'ID Card', 'Uniform', 'Desk', 'Chair'].map(asset => (
                      <label key={asset} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.assignedAssets.includes(asset)}
                          onChange={(e) => {
                            const isChecked = e.target.checked;
                            setFormData(prev => ({
                              ...prev,
                              assignedAssets: isChecked 
                                ? [...prev.assignedAssets, asset]
                                : prev.assignedAssets.filter(a => a !== asset)
                            }));
                          }}
                          className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <div>
                          <span className="text-sm font-medium text-gray-700">{asset}</span>
                          <p className="text-xs text-gray-500 mt-1">Company provided equipment</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'additional' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-blue-600" />
                      Work Schedule
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Shift Timing</label>
                      <select
                        name="shiftTiming"
                        value={formData.shiftTiming}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="">Select shift</option>
                        {shiftOptions.map(shift => (
                          <option key={shift} value={shift}>{shift}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Weekly Off</label>
                      <select
                        name="weeklyOff"
                        value={formData.weeklyOff}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="">Select weekly off</option>
                        {weeklyOffOptions.map(off => (
                          <option key={off} value={off}>{off}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Probation Period</label>
                        <select
                          name="probationPeriod"
                          value={formData.probationPeriod}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        >
                          <option value="">Select period</option>
                          <option value="1">1 Month</option>
                          <option value="3">3 Months</option>
                          <option value="6">6 Months</option>
                          <option value="None">No Probation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Notice Period</label>
                        <select
                          name="noticePeriod"
                          value={formData.noticePeriod}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        >
                          <option value="">Select period</option>
                          <option value="15">15 Days</option>
                          <option value="30">30 Days</option>
                          <option value="60">60 Days</option>
                          <option value="90">90 Days</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-green-600" />
                      References & Additional Info
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">References</label>
                      <textarea
                        name="references"
                        value={formData.references}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Professional references (Name, Position, Contact)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Social Media Profiles</label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Linkedin className="w-4 h-4 text-blue-700 mr-2" />
                          <input
                            type="text"
                            placeholder="LinkedIn Profile URL"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm"
                          />
                        </div>
                        <div className="flex items-center">
                          <Instagram className="w-4 h-4 text-pink-600 mr-2" />
                          <input
                            type="text"
                            placeholder="Instagram Profile"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-600" />
                    Terms & Agreements
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-3">
                      <label className="flex items-start space-x-3 text-sm">
                        <input
                          type="checkbox"
                          required
                          className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700">
                          I agree to abide by all company policies, rules, and regulations as outlined in the employee handbook.
                        </span>
                      </label>
                      <label className="flex items-start space-x-3 text-sm">
                        <input
                          type="checkbox"
                          required
                          className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700">
                          I understand that any false information provided may result in termination of employment.
                        </span>
                      </label>
                      <label className="flex items-start space-x-3 text-sm">
                        <input
                          type="checkbox"
                          className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700">
                          I consent to background verification and reference checks.
                        </span>
                      </label>
                      <label className="flex items-start space-x-3 text-sm">
                        <input
                          type="checkbox"
                          className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700">
                          I agree to the non-disclosure agreement regarding company confidential information.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-3" />
                    <div>
                      <h4 className="font-semibold text-blue-800 text-base">Onboarding Checklist</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        After submission: ID card generation, system access setup, orientation schedule, and equipment allocation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-4 bg-gray-50">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="text-sm text-gray-600 flex items-center">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Form auto-saves every 3 minutes</span>
                </div>
                <div className="ml-4 flex items-center">
                  <Bell className="w-4 h-4 mr-2" />
                  <span>Notifications will be sent to staff email</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 font-medium flex items-center justify-center text-sm"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save & Onboard Staff
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStaffManagement;