import React, { useState } from 'react';
import { 
  Globe, 
  Layout, 
  Image, 
  FileText, 
  Palette,
  Search,
  Eye,
  Save,
  Upload,
  Trash2,
  Settings,
  Type,
  DollarSign,
  Phone,
  MapPin,
  Mail,
  Clock,
  Users,
  Check,
  X,
  Plus,
  Edit2,
  Grid,
  List,
  ChevronRight,
  EyeOff,
  Download
} from 'lucide-react';

const ManageWebsite = () => {
  // Website configuration state
  const [websiteConfig, setWebsiteConfig] = useState({
    gymName: 'FitOrbit Gym & Fitness',
    tagline: 'Transform Your Body, Transform Your Life',
    primaryColor: '#2563eb', // blue-600
    secondaryColor: '#f3f4f6', // gray-100
    textColor: '#111827', // gray-900
    logo: null,
    favicon: null,
    contact: {
      phone: '+91 9876543210',
      email: 'info@fitorbitgym.com',
      address: '123 Fitness Street, Mumbai, Maharashtra 400001',
      workingHours: 'Mon-Sun: 5:00 AM - 11:00 PM'
    },
    socialLinks: {
      facebook: 'https://facebook.com/fitorbit',
      instagram: 'https://instagram.com/fitorbit',
      twitter: 'https://twitter.com/fitorbit',
      youtube: 'https://youtube.com/fitorbit'
    },
    seo: {
      title: 'FitOrbit Gym | Best Fitness Center in Mumbai',
      description: 'Professional gym with state-of-the-art equipment, personal trainers, and fitness programs.',
      keywords: 'gym, fitness, workout, personal trainer, mumbai'
    }
  });

  // Pages management
  const [pages, setPages] = useState([
    { id: 1, title: 'Home', slug: 'home', content: '', published: true, order: 1 },
    { id: 2, title: 'About Us', slug: 'about', content: '', published: true, order: 2 },
    { id: 3, title: 'Services', slug: 'services', content: '', published: true, order: 3 },
    { id: 4, title: 'Pricing', slug: 'pricing', content: '', published: true, order: 4 },
    { id: 5, title: 'Contact', slug: 'contact', content: '', published: true, order: 5 },
    { id: 6, title: 'Blog', slug: 'blog', content: '', published: false, order: 6 }
  ]);

  // Images gallery
  const [images, setImages] = useState([
    { id: 1, name: 'gym-interior-1.jpg', category: 'gym', uploaded: '2024-01-15', size: '2.4 MB' },
    { id: 2, name: 'trainer-1.jpg', category: 'trainers', uploaded: '2024-01-16', size: '1.8 MB' },
    { id: 3, name: 'equipment-1.jpg', category: 'equipment', uploaded: '2024-01-17', size: '3.2 MB' },
    { id: 4, name: 'class-yoga.jpg', category: 'classes', uploaded: '2024-01-18', size: '2.1 MB' },
    { id: 5, name: 'logo.png', category: 'logo', uploaded: '2024-01-19', size: '0.5 MB' },
    { id: 6, name: 'banner-main.jpg', category: 'banners', uploaded: '2024-01-20', size: '4.2 MB' }
  ]);

  // Pricing plans
  const [plans, setPlans] = useState([
    { 
      id: 1, 
      name: 'Basic', 
      price: '₹1,499', 
      period: 'month',
      features: ['Gym Access', 'Locker Room', 'Basic Equipment', 'Free Consultation'],
      popular: false,
      active: true
    },
    { 
      id: 2, 
      name: 'Premium', 
      price: '₹2,999', 
      period: 'month',
      features: ['All Basic Features', 'Personal Trainer', 'Diet Plan', 'Group Classes', 'Sauna Access'],
      popular: true,
      active: true
    },
    { 
      id: 3, 
      name: 'Ultimate', 
      price: '₹4,999', 
      period: 'month',
      features: ['All Premium Features', '24/7 Access', 'Nutritionist Consultation', 'Massage Therapy', 'Private Locker'],
      popular: false,
      active: true
    }
  ]);

  // Active tab
  const [activeTab, setActiveTab] = useState('overview');

  // Preview mode
  const [previewMode, setPreviewMode] = useState('desktop');

  // Handle input changes
  const handleInputChange = (section, field, value) => {
    if (section.includes('.')) {
      const [parent, child] = section.split('.');
      setWebsiteConfig(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setWebsiteConfig(prev => ({
        ...prev,
        [section]: value
      }));
    }
  };

  // Handle page update
  const handlePageUpdate = (id, field, value) => {
    setPages(pages.map(page => 
      page.id === id ? { ...page, [field]: value } : page
    ));
  };

  // Handle plan update
  const handlePlanUpdate = (id, field, value) => {
    setPlans(plans.map(plan => 
      plan.id === id ? { ...plan, [field]: value } : plan
    ));
  };

  // Add new image
  const handleAddImage = () => {
    const newImage = {
      id: images.length + 1,
      name: `new-image-${images.length + 1}.jpg`,
      category: 'uncategorized',
      uploaded: new Date().toISOString().split('T')[0],
      size: '0 MB'
    };
    setImages([...images, newImage]);
  };

  // Delete image
  const handleDeleteImage = (id) => {
    setImages(images.filter(img => img.id !== id));
  };

  // Save changes
  const handleSaveChanges = () => {
    console.log('Saving changes:', websiteConfig);
    alert('Website changes saved successfully!');
  };

  // Publish website
  const handlePublish = () => {
    alert('Website published successfully! Live at: https://fitorbitgym.com');
  };

  // Tabs configuration
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Globe },
    { id: 'pages', label: 'Pages', icon: Layout },
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'gallery', label: 'Images', icon: Image },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'seo', label: 'SEO', icon: Search }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-300 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Website Manager</h1>
            <p className="text-gray-600 text-sm mt-1">Manage your gym's professional website</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleSaveChanges}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </button>
            <button
              onClick={handlePublish}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              <Upload className="w-4 h-4 mr-2" />
              Publish Website
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar - Controls */}
        <div className="w-80 bg-white border-r border-gray-300 min-h-[calc(100vh-73px)]">
          {/* Preview Mode Selector */}
          <div className="p-4 border-b border-gray-300">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-900">Preview Mode</h3>
              <Eye className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex space-x-2">
              {['desktop', 'tablet', 'mobile'].map(mode => (
                <button
                  key={mode}
                  onClick={() => setPreviewMode(mode)}
                  className={`flex-1 py-2 text-sm font-medium rounded capitalize ${
                    previewMode === mode 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-300">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-3 text-left transition-colors ${
                    activeTab === tab.id 
                    ? 'bg-blue-50 border-r-2 border-blue-600 text-blue-600' 
                    : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  <span className="font-medium">{tab.label}</span>
                  <ChevronRight className={`w-4 h-4 ml-auto ${
                    activeTab === tab.id ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-4 overflow-y-auto max-h-[calc(100vh-300px)]">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900 mb-3">Website Settings</h4>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gym Name</label>
                  <input
                    type="text"
                    value={websiteConfig.gymName}
                    onChange={(e) => handleInputChange('gymName', '', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
                  <input
                    type="text"
                    value={websiteConfig.tagline}
                    onChange={(e) => handleInputChange('tagline', '', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={websiteConfig.primaryColor}
                      onChange={(e) => handleInputChange('primaryColor', '', e.target.value)}
                      className="w-10 h-10 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={websiteConfig.primaryColor}
                      onChange={(e) => handleInputChange('primaryColor', '', e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pages' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Website Pages</h4>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    + Add New Page
                  </button>
                </div>
                
                {pages.map(page => (
                  <div key={page.id} className="border border-gray-200 rounded p-3 hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{page.title}</span>
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-500 hover:text-blue-600">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className={`p-1 rounded ${page.published ? 'text-green-600' : 'text-gray-400'}`}>
                          {page.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>/{page.slug}</span>
                      <span className={`px-2 py-1 rounded text-xs ${page.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {page.published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">Image Gallery</h4>
                  <button 
                    onClick={handleAddImage}
                    className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Upload
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {images.map(image => (
                    <div key={image.id} className="border border-gray-200 rounded overflow-hidden">
                      <div className="aspect-video bg-gray-100 flex items-center justify-center">
                        <Image className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="p-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium truncate">{image.name}</span>
                          <button 
                            onClick={() => handleDeleteImage(image.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {image.size} • {image.category}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Pricing Plans</h4>
                
                {plans.map(plan => (
                  <div key={plan.id} className={`border rounded p-3 ${plan.popular ? 'border-blue-300 bg-blue-50' : 'border-gray-200'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{plan.name}</span>
                      {plan.popular && (
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Most Popular</span>
                      )}
                    </div>
                    
                    <div className="mb-2">
                      <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                    
                    <div className="space-y-1 mb-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-600 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="flex-1 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                        Edit Plan
                      </button>
                      <button className={`px-3 py-1.5 text-sm rounded ${plan.active ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {plan.active ? 'Deactivate' : 'Activate'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'design' && (
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Design Settings</h4>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={websiteConfig.primaryColor}
                      onChange={(e) => handleInputChange('primaryColor', '', e.target.value)}
                      className="w-10 h-10 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={websiteConfig.primaryColor}
                      onChange={(e) => handleInputChange('primaryColor', '', e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Font Family</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
                    <option>Inter (Default)</option>
                    <option>Roboto</option>
                    <option>Open Sans</option>
                    <option>Montserrat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Layout Style</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
                    <option>Modern</option>
                    <option>Classic</option>
                    <option>Minimal</option>
                    <option>Professional</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Live Preview */}
        <div className="flex-1 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Live Preview</h2>
            <div className="flex items-center text-sm text-gray-600">
              <Eye className="w-4 h-4 mr-2" />
              Preview updates in real-time
            </div>
          </div>

          {/* Preview Container */}
          <div className={`bg-white rounded-lg border border-gray-300 overflow-hidden ${
            previewMode === 'desktop' ? 'max-w-7xl mx-auto' : 
            previewMode === 'tablet' ? 'max-w-2xl mx-auto' : 
            'max-w-md mx-auto'
          }`}>
            {/* Preview Browser Header */}
            <div className="bg-gray-100 border-b border-gray-300 p-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white border border-gray-300 rounded px-3 py-1 text-sm text-gray-600">
                  https://{websiteConfig.gymName.toLowerCase().replace(/\s+/g, '')}.com
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700">
                <Eye className="w-5 h-5" />
              </button>
            </div>

            {/* Website Preview Content */}
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">FG</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{websiteConfig.gymName}</h1>
                    <p className="text-gray-600 text-sm">{websiteConfig.tagline}</p>
                  </div>
                </div>
                <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors">
                  Join Now
                </button>
              </div>

              {/* Navigation */}
              <div className="flex space-x-6 mb-8 pb-4 border-b border-gray-200">
                {pages.filter(p => p.published).map(page => (
                  <a 
                    key={page.id} 
                    href="#" 
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {page.title}
                  </a>
                ))}
              </div>

              {/* Hero Section */}
              <div className="mb-8">
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-blue-50 to-gray-50 p-8">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Fitness Journey</h2>
                    <p className="text-gray-600 mb-6">State-of-the-art equipment, certified trainers, and personalized workout plans to help you achieve your fitness goals.</p>
                    <div className="flex space-x-4">
                      <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors">
                        Start Free Trial
                      </button>
                      <button className="px-6 py-3 bg-white text-gray-700 font-medium border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                        View Plans
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { icon: '💪', title: 'Modern Equipment', desc: 'Latest fitness machines & tools' },
                  { icon: '👨‍🏫', title: 'Expert Trainers', desc: 'Certified personal trainers' },
                  { icon: '📋', title: 'Custom Plans', desc: 'Personalized workout routines' }
                ].map((feature, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="text-2xl mb-3">{feature.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Pricing Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Membership Plans</h2>
                <div className="grid grid-cols-3 gap-6">
                  {plans.filter(p => p.active).map(plan => (
                    <div 
                      key={plan.id} 
                      className={`border rounded-lg p-6 relative ${
                        plan.popular ? 'border-blue-300 shadow-lg' : 'border-gray-200'
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600">/{plan.period}</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <Check className="w-5 h-5 text-green-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className={`w-full py-3 font-medium rounded transition-colors ${
                        plan.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}>
                        Select Plan
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">{websiteConfig.contact.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">{websiteConfig.contact.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">{websiteConfig.contact.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Working Hours</p>
                        <p className="text-gray-600">{websiteConfig.contact.workingHours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">&copy; {new Date().getFullYear()} {websiteConfig.gymName}. All rights reserved.</p>
                  </div>
                  <div className="flex space-x-4">
                    {Object.entries(websiteConfig.socialLinks).map(([platform, url]) => (
                      <a key={platform} href={url} className="text-gray-600 hover:text-blue-600">
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Size Indicator */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Previewing: <span className="font-medium capitalize">{previewMode}</span> view
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageWebsite;