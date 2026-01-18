import React, { useState, useEffect } from 'react';
import { 
  IndianRupee,
  Receipt,
  Calendar,
  FileText,
  Building,
  CreditCard,
  Wallet,
  Upload,
  X,
  Plus,
  Tag,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle,
  Image,
  Download,
  Eye,
  Calculator,
  Percent,
  Repeat,
  Globe,
  Phone,
  Mail,
  User
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddManage_expense = () => {
  const navigate = useNavigate();
  
  // Indian GST rates
  const gstRates = [
    { value: 0, label: '0% (Exempt)' },
    { value: 5, label: '5%' },
    { value: 12, label: '12%' },
    { value: 18, label: '18%' },
    { value: 28, label: '28%' }
  ];

  // Indian cities
  const indianCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai',
    'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow',
    'Surat', 'Kanpur', 'Nagpur', 'Indore', 'Thane'
  ];

  // Expense categories
  const expenseCategories = [
    { id: 1, name: 'Office Rent', icon: Building, color: 'bg-blue-100 text-blue-600' },
    { id: 2, name: 'Utilities', icon: Building, color: 'bg-purple-100 text-purple-600' },
    { id: 3, name: 'Transportation', icon: MapPin, color: 'bg-green-100 text-green-600' },
    { id: 4, name: 'Food & Dining', icon: Receipt, color: 'bg-amber-100 text-amber-600' },
    { id: 5, name: 'Office Supplies', icon: FileText, color: 'bg-red-100 text-red-600' },
    { id: 6, name: 'Equipment', icon: CreditCard, color: 'bg-indigo-100 text-indigo-600' },
    { id: 7, name: 'Software', icon: Globe, color: 'bg-pink-100 text-pink-600' },
    { id: 8, name: 'Marketing', icon: Tag, color: 'bg-cyan-100 text-cyan-600' },
    { id: 9, name: 'Travel', icon: MapPin, color: 'bg-orange-100 text-orange-600' },
    { id: 10, name: 'Training', icon: User, color: 'bg-teal-100 text-teal-600' },
    { id: 11, name: 'Healthcare', icon: AlertCircle, color: 'bg-rose-100 text-rose-600' },
    { id: 12, name: 'Miscellaneous', icon: Tag, color: 'bg-gray-100 text-gray-600' }
  ];

  // Payment methods
  const paymentMethods = [
    { id: 1, name: 'UPI', icon: CreditCard, color: 'bg-purple-100 text-purple-600' },
    { id: 2, name: 'Credit Card', icon: CreditCard, color: 'bg-blue-100 text-blue-600' },
    { id: 3, name: 'Debit Card', icon: CreditCard, color: 'bg-green-100 text-green-600' },
    { id: 4, name: 'Cash', icon: Wallet, color: 'bg-amber-100 text-amber-600' },
    { id: 5, name: 'Net Banking', icon: Building, color: 'bg-indigo-100 text-indigo-600' },
    { id: 6, name: 'Wallet', icon: Wallet, color: 'bg-pink-100 text-pink-600' }
  ];

  // Recurrence options
  const recurrenceOptions = [
    { value: 'none', label: 'One-time' },
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'yearly', label: 'Yearly' }
  ];

  const [formData, setFormData] = useState({
    expenseTitle: '',
    amount: '',
    gstRate: 18,
    totalAmount: '',
    category: '',
    paymentMethod: '',
    paymentDate: new Date().toISOString().split('T')[0],
    vendorName: '',
    vendorContact: '',
    vendorEmail: '',
    vendorAddress: '',
    location: '',
    receiptNumber: '',
    receiptDate: new Date().toISOString().split('T')[0],
    description: '',
    tags: [],
    isRecurring: false,
    recurrence: 'none',
    attachments: [],
    status: 'pending',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [tagInput, setTagInput] = useState('');

  // Calculate total amount when amount or GST changes
  useEffect(() => {
    if (formData.amount && formData.gstRate !== undefined) {
      const baseAmount = parseFloat(formData.amount);
      const gstAmount = baseAmount * (formData.gstRate / 100);
      const total = baseAmount + gstAmount;
      setFormData(prev => ({
        ...prev,
        totalAmount: total.toFixed(2)
      }));
    }
  }, [formData.amount, formData.gstRate]);

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.expenseTitle.trim()) {
      newErrors.expenseTitle = 'Expense title is required';
    }
    
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Valid amount is required';
    }
    
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    
    if (!formData.paymentMethod) {
      newErrors.paymentMethod = 'Payment method is required';
    }
    
    if (!formData.paymentDate) {
      newErrors.paymentDate = 'Payment date is required';
    }
    
    if (!formData.vendorName.trim()) {
      newErrors.vendorName = 'Vendor name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Expense submitted:', formData);
      setIsSubmitting(false);
      alert('Expense added successfully!');
      
      // Reset form
      setFormData({
        expenseTitle: '',
        amount: '',
        gstRate: 18,
        totalAmount: '',
        category: '',
        paymentMethod: '',
        paymentDate: new Date().toISOString().split('T')[0],
        vendorName: '',
        vendorContact: '',
        vendorEmail: '',
        vendorAddress: '',
        location: '',
        receiptNumber: '',
        receiptDate: new Date().toISOString().split('T')[0],
        description: '',
        tags: [],
        isRecurring: false,
        recurrence: 'none',
        attachments: [],
        status: 'pending',
        notes: ''
      });
      setErrors({});
      setPreviewImage(null);
    }, 1500);
  };

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
        [name]: null
      }));
    }
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    
    // Create preview for images
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    if (imageFiles.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(imageFiles[0]);
    }
    
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  // Remove attachment
  const removeAttachment = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
    
    if (index === 0) {
      setPreviewImage(null);
    }
  };

  // Add tag
  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  // Remove tag
  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  // Handle tag input key press
  const handleTagKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  // Format currency for display
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="min-h-screen  p-1 md:p-3">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8 m-5">
          <div className="flex items-center justify-between mb-6">
            <div>
             
              <h1 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">Add New Expense</h1>
              <p className="text-gray-600 mt-2">Record and manage your business expenses</p>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <button
                // onClick={() => navigate('/expenses')}
                onClick={() => navigate(-1)}
                className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg transition-colors font-medium flex items-center space-x-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-700 hover:to-blue-800'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Save Expense</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                  <span className="text-sm font-medium text-blue-600 mt-2">Basic Info</span>
                </div>
                <div className="w-16 h-1 bg-blue-600"></div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                  <span className="text-sm font-medium text-blue-600 mt-2">Amount & Tax</span>
                </div>
                <div className="w-16 h-1 bg-blue-600"></div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
                  <span className="text-sm font-medium text-blue-600 mt-2">Vendor Details</span>
                </div>
                <div className="w-16 h-1 bg-blue-600"></div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">4</div>
                  <span className="text-sm font-medium text-gray-600 mt-2">Additional Info</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 m-5">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-blue-600" />
                  Basic Information
                </h2>
                
                <div className="space-y-6">
                  {/* Expense Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expense Title *
                    </label>
                    <input
                      type="text"
                      name="expenseTitle"
                      value={formData.expenseTitle}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.expenseTitle ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="e.g., Office Rent April 2024"
                    />
                    {errors.expenseTitle && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.expenseTitle}
                      </p>
                    )}
                  </div>

                  {/* Category Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {expenseCategories.map(category => {
                        const Icon = category.icon;
                        return (
                          <button
                            key={category.id}
                            type="button"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, category: category.name }));
                              if (errors.category) {
                                setErrors(prev => ({ ...prev, category: null }));
                              }
                            }}
                            className={`p-4 border rounded-xl text-left transition-all ${
                              formData.category === category.name
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${category.color}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-gray-900">{category.name}</span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.category && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.category}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      placeholder="Provide details about this expense..."
                    />
                  </div>
                </div>
              </div>

              {/* Amount & Tax Section */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calculator className="w-6 h-6 mr-3 text-green-600" />
                  Amount & Tax Details
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Base Amount */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Base Amount *
                      </label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="number"
                          name="amount"
                          value={formData.amount}
                          onChange={handleChange}
                          step="0.01"
                          min="0"
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                            errors.amount ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="0.00"
                        />
                      </div>
                      {errors.amount && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.amount}
                        </p>
                      )}
                    </div>

                    {/* GST Rate */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        GST Rate *
                      </label>
                      <div className="relative">
                        <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <select
                          name="gstRate"
                          value={formData.gstRate}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        >
                          {gstRates.map(rate => (
                            <option key={rate.value} value={rate.value}>
                              {rate.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Total Amount (Calculated) */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Total Amount
                      </label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="text"
                          readOnly
                          value={formData.totalAmount ? formatCurrency(formData.totalAmount) : '₹0.00'}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 font-bold text-gray-900"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Amount Breakdown */}
                  {formData.amount && (
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="font-medium text-gray-900 mb-3">Amount Breakdown</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Base Amount:</span>
                          <span className="font-medium">{formatCurrency(parseFloat(formData.amount) || 0)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">GST ({formData.gstRate}%):</span>
                          <span className="font-medium">
                            {formatCurrency((parseFloat(formData.amount) || 0) * (formData.gstRate / 100))}
                          </span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between font-bold text-lg">
                            <span>Total:</span>
                            <span>{formatCurrency(formData.totalAmount || 0)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Vendor & Payment Details */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building className="w-6 h-6 mr-3 text-purple-600" />
                  Vendor & Payment Details
                </h2>
                
                <div className="space-y-6">
                  {/* Vendor Information */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Vendor Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Vendor Name *
                        </label>
                        <input
                          type="text"
                          name="vendorName"
                          value={formData.vendorName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                            errors.vendorName ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="Enter vendor name"
                        />
                        {errors.vendorName && (
                          <p className="mt-2 text-sm text-red-600 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.vendorName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Contact Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                          <input
                            type="tel"
                            name="vendorContact"
                            value={formData.vendorContact}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                          <input
                            type="email"
                            name="vendorEmail"
                            value={formData.vendorEmail}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                            placeholder="vendor@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <select
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        >
                          <option value="">Select city</option>
                          {indianCities.map(city => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Vendor Address
                        </label>
                        <textarea
                          name="vendorAddress"
                          value={formData.vendorAddress}
                          onChange={handleChange}
                          rows="2"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                          placeholder="Enter complete vendor address"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Payment Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Payment Method *
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {paymentMethods.map(method => {
                            const Icon = method.icon;
                            return (
                              <button
                                key={method.id}
                                type="button"
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, paymentMethod: method.name }));
                                  if (errors.paymentMethod) {
                                    setErrors(prev => ({ ...prev, paymentMethod: null }));
                                  }
                                }}
                                className={`p-3 border rounded-lg flex items-center justify-center space-x-2 transition-all ${
                                  formData.paymentMethod === method.name
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                }`}
                              >
                                <div className={`w-8 h-8 rounded flex items-center justify-center ${method.color}`}>
                                  <Icon className="w-4 h-4" />
                                </div>
                                <span className="font-medium">{method.name}</span>
                              </button>
                            );
                          })}
                        </div>
                        {errors.paymentMethod && (
                          <p className="mt-2 text-sm text-red-600 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.paymentMethod}
                          </p>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Payment Date *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                              type="date"
                              name="paymentDate"
                              value={formData.paymentDate}
                              onChange={handleChange}
                              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                                errors.paymentDate ? 'border-red-300' : 'border-gray-300'
                              }`}
                            />
                          </div>
                          {errors.paymentDate && (
                            <p className="mt-2 text-sm text-red-600 flex items-center">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              {errors.paymentDate}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Receipt Date
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                              type="date"
                              name="receiptDate"
                              value={formData.receiptDate}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Receipt Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Receipt/Bill Number
                    </label>
                    <input
                      type="text"
                      name="receiptNumber"
                      value={formData.receiptNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      placeholder="Enter receipt or bill number"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Tag className="w-6 h-6 mr-3 text-amber-600" />
                  Additional Information
                </h2>
                
                <div className="space-y-6">
                  {/* Tags */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tags
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {formData.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyPress={handleTagKeyPress}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="Add tags (press Enter)"
                      />
                      <button
                        type="button"
                        onClick={addTag}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  {/* Recurring Expense */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <input
                        type="checkbox"
                        id="isRecurring"
                        name="isRecurring"
                        checked={formData.isRecurring}
                        onChange={handleChange}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="isRecurring" className="text-sm font-medium text-gray-700 flex items-center">
                        <Repeat className="w-4 h-4 mr-2" />
                        This is a recurring expense
                      </label>
                    </div>
                    
                    {formData.isRecurring && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Recurrence Frequency
                        </label>
                        <select
                          name="recurrence"
                          value={formData.recurrence}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        >
                          {recurrenceOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, status: 'pending' }))}
                        className={`p-3 border rounded-lg flex items-center justify-center space-x-2 transition-all ${
                          formData.status === 'pending'
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <AlertCircle className={`w-5 h-5 ${formData.status === 'pending' ? 'text-red-600' : 'text-gray-400'}`} />
                        <span className={`font-medium ${formData.status === 'pending' ? 'text-red-600' : 'text-gray-700'}`}>
                          Pending
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, status: 'paid' }))}
                        className={`p-3 border rounded-lg flex items-center justify-center space-x-2 transition-all ${
                          formData.status === 'paid'
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <CheckCircle className={`w-5 h-5 ${formData.status === 'paid' ? 'text-green-600' : 'text-gray-400'}`} />
                        <span className={`font-medium ${formData.status === 'paid' ? 'text-green-600' : 'text-gray-700'}`}>
                          Paid
                        </span>
                      </button>
                    </div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      placeholder="Any additional information or remarks..."
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Action Buttons */}
              <div className="lg:hidden bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => navigate('/expenses')}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg transition-colors font-medium flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-700 hover:to-blue-800'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Save Expense</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column - Preview & Attachments */}
          <div className="lg:col-span-1 h-[80%] space-y-6">
            {/* Expense Preview Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Expense Preview</h2>
              
              <div className="space-y-4">
                {formData.expenseTitle ? (
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900 text-lg">{formData.expenseTitle}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        formData.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {formData.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      {formData.category && (
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                            <Tag className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="text-gray-700">{formData.category}</span>
                        </div>
                      )}
                      
                      {formData.amount && (
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                            <IndianRupee className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <div className="font-bold text-2xl text-gray-900">{formatCurrency(formData.totalAmount || 0)}</div>
                            <div className="text-sm text-gray-500">
                              Base: {formatCurrency(parseFloat(formData.amount) || 0)} + GST: {formData.gstRate}%
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {formData.vendorName && (
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center mr-3">
                            <Building className="w-4 h-4 text-purple-600" />
                          </div>
                          <span className="text-gray-700">{formData.vendorName}</span>
                        </div>
                      )}
                      
                      {formData.paymentDate && (
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center mr-3">
                            <Calendar className="w-4 h-4 text-amber-600" />
                          </div>
                          <span className="text-gray-700">
                            {new Date(formData.paymentDate).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      )}
                      
                      {formData.paymentMethod && (
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center mr-3">
                            <CreditCard className="w-4 h-4 text-indigo-600" />
                          </div>
                          <span className="text-gray-700">{formData.paymentMethod}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">Complete the form to see preview</p>
                  </div>
                )}
              </div>
            </div>

            {/* Attachments Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Upload className="w-6 h-6 mr-3 text-gray-600" />
                Attachments
              </h2>
              
              <div className="space-y-4">
                {/* File Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                  <input
                    type="file"
                    id="file-upload"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">Upload Receipts</h3>
                    <p className="text-sm text-gray-500 mb-3">
                      Upload images, PDFs, or documents
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Choose Files</span>
                    </button>
                  </label>
                </div>

                {/* File Preview */}
                {previewImage && (
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b border-gray-200">
                      <h4 className="font-medium text-gray-900">Image Preview</h4>
                    </div>
                    <div className="p-4">
                      <img
                        src={previewImage}
                        alt="Receipt preview"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                )}

                {/* Uploaded Files List */}
                {formData.attachments.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Uploaded Files ({formData.attachments.length})</h4>
                    <div className="space-y-2">
                      {formData.attachments.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="text-sm font-medium text-gray-900 truncate max-w-[180px]">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {(file.size / 1024).toFixed(2)} KB
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              type="button"
                              onClick={() => window.URL.createObjectURL(file)}
                              className="p-1 hover:bg-gray-200 rounded"
                              title="Preview"
                            >
                              <Eye className="w-4 h-4 text-gray-600" />
                            </button>
                            <button
                              type="button"
                              onClick={() => removeAttachment(index)}
                              className="p-1 hover:bg-red-50 rounded"
                              title="Remove"
                            >
                              <X className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tips & Guidelines */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-blue-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 mr-3 text-blue-600" />
                Important Tips
              </h2>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Always upload clear images of receipts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Verify GST details match the receipt</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Use descriptive titles for easy searching</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Tag expenses for better categorization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Mark recurring expenses for auto-tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddManage_expense;