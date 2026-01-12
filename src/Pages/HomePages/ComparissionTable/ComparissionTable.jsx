import React, { useState } from 'react';
import {
  Check,
  X,
  HelpCircle,
  Star,
  Zap,
  TrendingUp,
  Target,
  IndianRupee,
  Users,
  Calendar,
  FileText,
  Shield,
  Globe,
  Smartphone,
  Headphones,
  Database,
  CreditCard,
  Settings,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Download,
  Printer,
  Filter,
  Search
} from 'lucide-react';

const ComparisonTable = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('category');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  const categories = [
    {
      id: 'member-management',
      name: 'Member Management',
      icon: <Users size={16} sm:size={20} />,
      color: 'bg-blue-100 text-blue-700'
    },
    {
      id: 'financial',
      name: 'Financial Features',
      icon: <IndianRupee size={16} sm:size={20} />,
      color: 'bg-green-100 text-green-700'
    },
    {
      id: 'operations',
      name: 'Operations',
      icon: <Calendar size={16} sm:size={20} />,
      color: 'bg-purple-100 text-purple-700'
    },
    {
      id: 'analytics',
      name: 'Analytics & Reporting',
      icon: <FileText size={16} sm:size={20} />,
      color: 'bg-orange-100 text-orange-700'
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      icon: <Shield size={16} sm:size={20} />,
      color: 'bg-red-100 text-red-700'
    },
    {
      id: 'technology',
      name: 'Technology',
      icon: <Smartphone size={16} sm:size={20} />,
      color: 'bg-cyan-100 text-cyan-700'
    },
    {
      id: 'support',
      name: 'Support & Services',
      icon: <Headphones size={16} sm:size={20} />,
      color: 'bg-indigo-100 text-indigo-700'
    }
  ];

  const products = [
    {
      id: 'fitorbit',
      name: 'FitOrbit Pro',
      tagline: 'Most Comprehensive',
      rating: 4.9,
      reviews: '2.4k+',
      price: '$99/mo',
      recommended: true,
      highlights: ['All-in-one solution', 'Best for gym chains', '24/7 support']
    },
    {
      id: 'gymmaster',
      name: 'GymMaster',
      tagline: 'Popular Choice',
      rating: 4.5,
      reviews: '1.8k+',
      price: '$79/mo',
      recommended: false,
      highlights: ['Easy to use', 'Good for small gyms', 'Mobile Version']
    },
    {
      id: 'zenplanner',
      name: 'Zen Planner',
      tagline: 'Established Platform',
      rating: 4.7,
      reviews: '2.1k+',
      price: '$129/mo',
      recommended: false,
      highlights: ['Strong community', 'Good integrations', 'Reliable']
    },
    {
      id: 'glofox',
      name: 'Glofox',
      tagline: 'Modern Interface',
      rating: 4.6,
      reviews: '1.5k+',
      price: '$89/mo',
      recommended: false,
      highlights: ['Beautiful UI', 'Good for boutiques', 'Social features']
    }
  ];

  const features = [
    {
      id: 'member-database',
      name: 'Member Database',
      description: 'Centralized member information storage',
      category: 'member-management',
      fitorbit: { included: true, details: 'Unlimited members' },
      gymmaster: { included: true, details: 'Up to 500' },
      zenplanner: { included: true, details: 'Unlimited' },
      glofox: { included: true, details: 'Up to 1000' },
      importance: 'high'
    },
    {
      id: 'biometric-integration',
      name: 'Biometric Integration',
      description: 'Support for fingerprint/face recognition',
      category: 'member-management',
      fitorbit: { included: true, details: 'Full support' },
      gymmaster: { included: false, details: 'Not available' },
      zenplanner: { included: true, details: 'Limited' },
      glofox: { included: false, details: 'Not available' },
      importance: 'medium'
    },
    {
      id: 'attendance-tracking',
      name: 'Attendance Tracking',
      description: 'Real-time member check-ins',
      category: 'member-management',
      fitorbit: { included: true, details: 'Real-time analytics' },
      gymmaster: { included: true, details: 'Basic tracking' },
      zenplanner: { included: true, details: 'Advanced' },
      glofox: { included: true, details: 'Basic tracking' },
      importance: 'high'
    },
    {
      id: 'automated-billing',
      name: 'Automated Billing',
      description: 'Recurring payments and invoicing',
      category: 'financial',
      fitorbit: { included: true, details: 'Smart recurring' },
      gymmaster: { included: true, details: 'Basic recurring' },
      zenplanner: { included: true, details: 'Advanced' },
      glofox: { included: true, details: 'Basic recurring' },
      importance: 'high'
    },
    {
      id: 'multiple-payment-gateways',
      name: 'Multiple Payment Gateways',
      description: 'Support for various payment methods',
      category: 'financial',
      fitorbit: { included: true, details: '10+ gateways' },
      gymmaster: { included: true, details: '5 gateways' },
      zenplanner: { included: true, details: '8 gateways' },
      glofox: { included: true, details: '4 gateways' },
      importance: 'medium'
    },
    {
      id: 'revenue-analytics',
      name: 'Revenue Analytics',
      description: 'Detailed financial reporting',
      category: 'financial',
      fitorbit: { included: true, details: 'Advanced' },
      gymmaster: { included: false, details: 'Basic only' },
      zenplanner: { included: true, details: 'Good' },
      glofox: { included: false, details: 'Limited' },
      importance: 'high'
    },
    {
      id: 'class-scheduling',
      name: 'Class Scheduling',
      description: 'Schedule and manage fitness classes',
      category: 'operations',
      fitorbit: { included: true, details: 'AI-powered' },
      gymmaster: { included: true, details: 'Basic' },
      zenplanner: { included: true, details: 'Good' },
      glofox: { included: true, details: 'Visual' },
      importance: 'high'
    },
    {
      id: 'waitlist-management',
      name: 'Waitlist Management',
      description: 'Manage class waitlists automatically',
      category: 'operations',
      fitorbit: { included: true, details: 'Smart' },
      gymmaster: { included: false, details: 'Manual only' },
      zenplanner: { included: true, details: 'Basic' },
      glofox: { included: true, details: 'Supported' },
      importance: 'medium'
    },
    {
      id: 'equipment-management',
      name: 'Equipment Management',
      description: 'Track and manage gym equipment',
      category: 'operations',
      fitorbit: { included: true, details: 'Full tracking' },
      gymmaster: { included: false, details: 'Not available' },
      zenplanner: { included: false, details: 'Not available' },
      glofox: { included: false, details: 'Not available' },
      importance: 'low'
    },
    {
      id: 'real-time-dashboard',
      name: 'Real-time Dashboard',
      description: 'Live business performance metrics',
      category: 'analytics',
      fitorbit: { included: true, details: 'Customizable' },
      gymmaster: { included: false, details: 'Basic' },
      zenplanner: { included: true, details: 'Good' },
      glofox: { included: true, details: 'Modern' },
      importance: 'high'
    },
    {
      id: 'predictive-analytics',
      name: 'Predictive Analytics',
      description: 'Forecast trends and member behavior',
      category: 'analytics',
      fitorbit: { included: true, details: 'AI predictions' },
      gymmaster: { included: false, details: 'Not available' },
      zenplanner: { included: false, details: 'Not available' },
      glofox: { included: false, details: 'Not available' },
      importance: 'medium'
    },
    {
      id: 'gdpr-compliance',
      name: 'GDPR Compliance',
      description: 'Full GDPR compliance features',
      category: 'security',
      fitorbit: { included: true, details: 'Full' },
      gymmaster: { included: true, details: 'Basic' },
      zenplanner: { included: true, details: 'Full' },
      glofox: { included: true, details: 'Basic' },
      importance: 'high'
    },
    {
      id: 'data-encryption',
      name: 'End-to-End Encryption',
      description: 'Bank-level data encryption',
      category: 'security',
      fitorbit: { included: true, details: '256-bit' },
      gymmaster: { included: true, details: '128-bit' },
      zenplanner: { included: true, details: '256-bit' },
      glofox: { included: true, details: '128-bit' },
      importance: 'high'
    },
    {
      id: 'mobile-app',
      name: 'Mobile Application',
      description: 'Native iOS and Android apps',
      category: 'technology',
      fitorbit: { included: true, details: 'Full-featured' },
      gymmaster: { included: true, details: 'Good apps' },
      zenplanner: { included: true, details: 'Excellent' },
      glofox: { included: true, details: 'Great apps' },
      importance: 'high'
    },
    {
      id: 'api-access',
      name: 'API Access',
      description: 'Developer API for integrations',
      category: 'technology',
      fitorbit: { included: true, details: 'Full API' },
      gymmaster: { included: false, details: 'Limited' },
      zenplanner: { included: true, details: 'Good API' },
      glofox: { included: true, details: 'Basic API' },
      importance: 'medium'
    },
    {
      id: '24-7-support',
      name: '24/7 Support',
      description: 'Round-the-clock customer support',
      category: 'support',
      fitorbit: { included: true, details: 'Phone, chat, email' },
      gymmaster: { included: false, details: 'Business hours' },
      zenplanner: { included: true, details: '24/7 premium' },
      glofox: { included: false, details: 'Business hours' },
      importance: 'high'
    },
    {
      id: 'dedicated-account-manager',
      name: 'Dedicated Account Manager',
      description: 'Personal account manager',
      category: 'support',
      fitorbit: { included: true, details: 'All plans' },
      gymmaster: { included: false, details: 'Enterprise only' },
      zenplanner: { included: false, details: 'Enterprise only' },
      glofox: { included: false, details: 'Not available' },
      importance: 'medium'
    }
  ];

  const filteredFeatures = features.filter(feature => {
    if (!showAll && expandedCategory && feature.category !== expandedCategory) return false;
    if (searchTerm && !feature.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const getImportanceColor = (importance) => {
    switch (importance) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getImportanceLabel = (importance) => {
    switch (importance) {
      case 'high': return 'Essential';
      case 'medium': return 'Important';
      case 'low': return 'Nice to have';
      default: return '';
    }
  };

  return (
    <section className="bg-white py-6 sm:py-8 md:py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
            <div className="w-8 sm:w-10 md:w-12 h-1 bg-blue-600 mr-2 sm:mr-3"></div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs sm:text-sm">
              COMPARISON
            </span>
            <div className="w-8 sm:w-10 md:w-12 h-1 bg-blue-600 ml-2 sm:ml-3"></div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
            Compare Top <span className="text-blue-600">Gym Software</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
            Detailed comparison of leading gym management platforms. 
            Find the perfect fit for your fitness business.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="w-full sm:w-auto sm:flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} sm:size={20} />
              <input
                type="text"
                placeholder="Search features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-50 whitespace-nowrap flex-1 sm:flex-none"
            >
              {showAll ? 'Show by Category' : 'Show All Features'}
            </button>
            <button className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-50 flex items-center whitespace-nowrap flex-1 sm:flex-none">
              <Download size={14} sm:size={16} className="mr-1 sm:mr-2" />
              Export
            </button>
          </div>
        </div>

        {/* Categories Navigation */}
        {!showAll && (
          <div className="mb-4 sm:mb-6 overflow-x-auto">
            <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3 min-w-max sm:min-w-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className={`p-3 sm:p-4 rounded-lg border transition-all flex flex-col items-center justify-center min-w-[120px] sm:min-w-0 ${
                    expandedCategory === category.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg ${category.color.split(' ')[0]} flex items-center justify-center mb-1 sm:mb-2`}>
                    <div className={category.color.split(' ')[1]}>
                      {React.cloneElement(category.icon, { 
                        size: window.innerWidth < 640 ? 16 : 20 
                      })}
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-900 text-center leading-tight">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-lg sm:rounded-xl border border-gray-200">
          <div className="min-w-[800px] sm:min-w-0">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 sm:py-4 px-4 sm:px-6 text-left">
                    <div className="flex items-center">
                      <span className="font-bold text-gray-900 text-sm sm:text-base">Feature</span>
                      <HelpCircle size={14} sm:size={16} className="ml-1 sm:ml-2 text-gray-400" />
                    </div>
                  </th>
                  {products.map((product) => (
                    <th key={product.id} className="py-3 sm:py-4 px-4 sm:px-6 text-center">
                      <span className="font-bold text-gray-900 text-sm sm:text-base">{product.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredFeatures.map((feature) => {
                  const categoryData = categories.find(cat => cat.id === feature.category);
                  return (
                    <React.Fragment key={feature.id}>
                      {/* Category Header */}
                      {!showAll && expandedCategory === feature.category && (
                        <tr className="bg-gray-50">
                          <td colSpan={5} className="py-2 sm:py-3 px-4 sm:px-6">
                            <div className="flex items-center">
                              <div className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg ${categoryData.color.split(' ')[0]} flex items-center justify-center mr-2 sm:mr-3`}>
                                <div className={categoryData.color.split(' ')[1]}>
                                  {React.cloneElement(categoryData.icon, { 
                                    size: window.innerWidth < 640 ? 14 : 16 
                                  })}
                                </div>
                              </div>
                              <h3 className="font-bold text-gray-900 text-sm sm:text-base">{categoryData.name}</h3>
                            </div>
                          </td>
                        </tr>
                      )}
                      
                      {/* Feature Row */}
                      <tr className="border-t border-gray-100 hover:bg-gray-50">
                        <td className="py-3 sm:py-4 px-4 sm:px-6">
                          <div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1 sm:gap-0">
                              <span className="font-medium text-gray-900 text-sm sm:text-base">{feature.name}</span>
                              <span className={`text-xs px-2 py-1 rounded-full border ${getImportanceColor(feature.importance)} whitespace-nowrap`}>
                                {getImportanceLabel(feature.importance)}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{feature.description}</p>
                          </div>
                        </td>
                        
                        {/* Product Columns */}
                        {products.map((product) => {
                          const featureData = feature[product.id];
                          return (
                            <td key={product.id} className="py-3 sm:py-4 px-4 sm:px-6 text-center">
                              {featureData.included ? (
                                <div className="flex flex-col items-center">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-green-100 flex items-center justify-center mb-1 sm:mb-2">
                                    <Check size={12} sm:size={14} md:size={16} className="text-green-600" />
                                  </div>
                                  <span className="text-xs text-gray-600 leading-tight">{featureData.details}</span>
                                </div>
                              ) : (
                                <div className="flex flex-col items-center">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center mb-1 sm:mb-2">
                                    <X size={12} sm:size={14} md:size={16} className="text-gray-400" />
                                  </div>
                                  <span className="text-xs text-gray-400 leading-tight">{featureData.details}</span>
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommendation */}
        <div className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg sm:rounded-xl md:rounded-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="mb-4 sm:mb-6 lg:mb-0 lg:mr-8">
              <div className="flex items-center mb-2 sm:mb-4">
                <Target className="text-blue-600 mr-2 sm:mr-3" size={20} sm:size={24} />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Our Recommendation</h3>
              </div>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                Based on our analysis, <span className="font-bold">FitOrbit Pro</span> offers the most complete 
                solution for modern gyms, especially those with multiple locations or planning to scale.
              </p>
              <div className="flex items-center text-xs sm:text-sm text-gray-600">
                <AlertCircle size={14} sm:size={16} className="mr-1 sm:mr-2" />
                All data based on publicly available information
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4 w-full sm:w-auto">
              <button className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                Try FitOrbit Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;