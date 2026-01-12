import React, { useState } from 'react';
import {
  Users,
  IndianRupee,
  Calendar,
  FileText,
  BarChart,
  Shield,
  Cpu,
  Smartphone,
  Cloud,
  Zap,
  Lock,
  Database,
  Bell,
  CreditCard,
  TrendingUp,
  Globe,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  Zap as Lightning,
  Target,
  PieChart,
  Settings,
  HelpCircle,
  ExternalLink,
  Star,
  Clock,
  ThumbsUp
} from 'lucide-react';

const Features = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const categories = [
    { 
      id: 'all', 
      label: 'All Features', 
      icon: <Target size={16} sm:size={18} />,
      color: 'bg-blue-100 text-blue-700',
      count: 12
    },
    { 
      id: 'management', 
      label: 'Member Management', 
      icon: <Users size={16} sm:size={18} />,
      color: 'bg-purple-100 text-purple-700',
      count: 2
    },
    { 
      id: 'finance', 
      label: 'Financial Tools', 
      icon: <IndianRupee size={16} sm:size={18} />,
      color: 'bg-green-100 text-green-700',
      count: 2
    },
    { 
      id: 'operations', 
      label: 'Operations', 
      icon: <Calendar size={16} sm:size={18} />,
      color: 'bg-orange-100 text-orange-700',
      count: 2
    },
    { 
      id: 'analytics', 
      label: 'Analytics & Reports', 
      icon: <PieChart size={16} sm:size={18} />,
      color: 'bg-red-100 text-red-700',
      count: 2
    },
    { 
      id: 'security', 
      label: 'Security', 
      icon: <Shield size={16} sm:size={18} />,
      color: 'bg-cyan-100 text-cyan-700',
      count: 1
    },
    { 
      id: 'enterprise', 
      label: 'Enterprise Features', 
      icon: <Globe size={16} sm:size={18} />,
      color: 'bg-indigo-100 text-indigo-700',
      count: 1
    },
    { 
      id: 'technology', 
      label: 'Technology', 
      icon: <Cpu size={16} sm:size={18} />,
      color: 'bg-pink-100 text-pink-700',
      count: 2
    }
  ];

  const features = [
    {
      id: 1,
      title: "Member Management",
      description: "Easily manage your members' entire journey - from sign-up to renewals. Track attendance, progress, and engagement all in one place.",
      detailedDescription: "Our member management system simplifies complex tasks. Handle registrations, track attendance patterns, monitor progress towards fitness goals, and automate renewal reminders. Perfect for busy gym owners who want to focus on their members, not paperwork.",
      icon: <Users className="text-blue-600" size={20} sm:size={24} />,
      category: "management",
      benefits: [
        "Track member attendance automatically",
        "Set and monitor fitness goals",
        "Automated renewal reminders",
        "Easy member search and filtering"
      ],
      difficulty: "Easy to Use",
      popularity: 95,
      setupTime: "5 minutes",
      videoDemo: true
    },
    {
      id: 2,
      title: "Smart Billing",
      description: "Automate your billing process with smart recurring payments and instant invoice generation.",
      detailedDescription: "Never chase payments again. Our smart billing system automatically charges members, sends invoices, and tracks all payments. Supports multiple payment methods and provides detailed financial reports.",
      icon: <IndianRupee className="text-blue-600" size={20} sm:size={24} />,
      category: "finance",
      benefits: [
        "Recurring payments setup",
        "Multiple payment options",
        "Automatic invoice generation",
        "Payment tracking dashboard"
      ],
      difficulty: "Easy to Use",
      popularity: 92,
      setupTime: "10 minutes",
      videoDemo: true
    },
    {
      id: 3,
      title: "Class Scheduling",
      description: "Simple drag-and-drop scheduling for classes, trainers, and equipment with automatic notifications.",
      detailedDescription: "Create and manage class schedules effortlessly. Set capacity limits, manage waitlists, and automatically notify members about schedule changes or openings. Syncs with trainer availability and member preferences.",
      icon: <Calendar className="text-blue-600" size={20} sm:size={24} />,
      category: "operations",
      benefits: [
        "Drag-and-drop interface",
        "Automatic capacity management",
        "Waitlist automation",
        "Mobile Version integration"
      ],
      difficulty: "Easy to Use",
      popularity: 88,
      setupTime: "15 minutes",
      videoDemo: true
    },
    {
      id: 4,
      title: "Real-time Reports",
      description: "Get instant insights about your gym's performance with beautiful, easy-to-understand reports.",
      detailedDescription: "Make data-driven decisions with our comprehensive reporting suite. Track revenue, member growth, class attendance, and more. Export reports or view them directly in your dashboard.",
      icon: <FileText className="text-blue-600" size={20} sm:size={24} />,
      category: "analytics",
      benefits: [
        "Daily performance summaries",
        "Member growth tracking",
        "Revenue analysis",
        "Export to Excel/PDF"
      ],
      difficulty: "Medium",
      popularity: 85,
      setupTime: "Instant",
      videoDemo: false
    },
    {
      id: 5,
      title: "Data Security",
      description: "Your data is safe with us. Enterprise-grade security with automatic daily backups.",
      detailedDescription: "We take security seriously. All data is encrypted, backed up daily, and protected with multiple security layers. GDPR compliant and trusted by gyms worldwide.",
      icon: <Shield className="text-blue-600" size={20} sm:size={24} />,
      category: "security",
      benefits: [
        "End-to-end encryption",
        "Daily automatic backups",
        "GDPR compliant",
        "24/7 security monitoring"
      ],
      difficulty: "Easy to Use",
      popularity: 96,
      setupTime: "Automatic",
      videoDemo: false
    },
    {
      id: 6,
      title: "Multiple Locations",
      description: "Manage multiple gym locations from a single dashboard with centralized control.",
      detailedDescription: "Perfect for growing gym chains. Manage staff, members, and finances across all locations from one central dashboard while maintaining location-specific controls and reports.",
      icon: <Globe className="text-blue-600" size={20} sm:size={24} />,
      category: "enterprise",
      benefits: [
        "Centralized member database",
        "Location-specific reporting",
        "Cross-location promotions",
        "Unified billing system"
      ],
      difficulty: "Medium",
      popularity: 82,
      setupTime: "30 minutes",
      videoDemo: true
    },
    {
      id: 7,
      title: "Mobile Version",
      description: "Members can book classes, track progress, and make payments from their phones.",
      detailedDescription: "Keep your members engaged with our native Mobile Versions. Available for iOS and Android, members can manage their memberships, book classes, track workouts, and make payments on the go.",
      icon: <Smartphone className="text-blue-600" size={20} sm:size={24} />,
      category: "technology",
      benefits: [
        "iOS & Android apps",
        "Push notifications",
        "Offline mode available",
        "Easy booking interface"
      ],
      difficulty: "Easy to Use",
      popularity: 94,
      setupTime: "Instant access",
      videoDemo: true
    },
    {
      id: 8,
      title: "Cloud Storage",
      description: "Access your gym data anywhere, anytime. No downloads or installations needed.",
      detailedDescription: "Work from anywhere with our cloud-based platform. All updates are automatic, and you can access your gym management tools from any device with an internet connection.",
      icon: <Cloud className="text-blue-600" size={20} sm:size={24} />,
      category: "technology",
      benefits: [
        "Access from any device",
        "No software installation",
        "Automatic updates",
        "Real-time synchronization"
      ],
      difficulty: "Easy to Use",
      popularity: 89,
      setupTime: "Instant",
      videoDemo: false
    },
    {
      id: 9,
      title: "Growth Insights",
      description: "Understand what drives member retention and helps your gym grow.",
      detailedDescription: "Get actionable insights into member behavior, popular classes, peak hours, and revenue trends. Use this data to make informed decisions that drive growth and member satisfaction.",
      icon: <TrendingUp className="text-blue-600" size={20} sm:size={24} />,
      category: "analytics",
      benefits: [
        "Member retention analysis",
        "Peak hour identification",
        "Popular class tracking",
        "Revenue trend predictions"
      ],
      difficulty: "Medium",
      popularity: 84,
      setupTime: "Instant",
      videoDemo: true
    },
    {
      id: 10,
      title: "Access Control",
      description: "Integrate with door access systems for smooth member entry and exit.",
      detailedDescription: "Seamlessly connect with RFID, biometric, or mobile access systems. Track member entries, manage visitor access, and ensure only authorized individuals enter your facility.",
      icon: <Lock className="text-blue-600" size={20} sm:size={24} />,
      category: "operations",
      benefits: [
        "RFID card support",
        "Mobile phone entry",
        "Visitor management",
        "24/7 access logs"
      ],
      difficulty: "Medium",
      popularity: 87,
      setupTime: "45 minutes",
      videoDemo: false
    },
    {
      id: 11,
      title: "Member Communications",
      description: "Send automated emails and SMS to keep members engaged and informed.",
      detailedDescription: "Stay connected with your members through automated communications. Send birthday wishes, class reminders, payment notifications, and promotional offers automatically based on member behavior.",
      icon: <Bell className="text-blue-600" size={20} sm:size={24} />,
      category: "management",
      benefits: [
        "Automated reminders",
        "Birthday messages",
        "Promotional campaigns",
        "Custom message templates"
      ],
      difficulty: "Easy to Use",
      popularity: 90,
      setupTime: "20 minutes",
      videoDemo: true
    },
    {
      id: 12,
      title: "Payment Processing",
      description: "Accept all major payment methods securely and efficiently.",
      detailedDescription: "Offer your members flexibility with support for credit cards, digital wallets, bank transfers, and more. All transactions are secure, and you get detailed payment reports.",
      icon: <CreditCard className="text-blue-600" size={20} sm:size={24} />,
      category: "finance",
      benefits: [
        "Multiple payment methods",
        "Secure transaction processing",
        "Refund management",
        "Payment reconciliation"
      ],
      difficulty: "Easy to Use",
      popularity: 91,
      setupTime: "15 minutes",
      videoDemo: true
    }
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  const activeCategoryData = categories.find(cat => cat.id === activeCategory);

  return (
    <section className="bg-white py-6 sm:py-8 md:py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          {/* Top Label */}
          <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
            <div className="w-8 sm:w-10 md:w-12 h-1 bg-blue-600 mr-2 sm:mr-3"></div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs sm:text-sm">
              FEATURES
            </span>
            <div className="w-8 sm:w-10 md:w-12 h-1 bg-blue-600 ml-2 sm:ml-3"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
            Everything You Need to <span className="text-blue-600">Run Your Gym</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
            FitOrbit makes gym management simple, efficient, and effective. 
            See how each feature can help grow and streamline your business.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
          {/* Left Sidebar - Categories */}
          <div className="lg:w-1/4">
            <div className="sticky top-4 sm:top-6 md:top-8">
              <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-base sm:text-lg">Feature Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`cursor-pointer w-full flex items-center justify-between p-3 sm:p-4 rounded-lg transition-all ${
                        activeCategory === category.id
                          ? 'bg-white border border-blue-500 shadow-sm'
                          : 'bg-white border border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg ${category.color.split(' ')[0]} flex items-center justify-center`}>
                          {React.cloneElement(category.icon, { 
                            size: window.innerWidth < 640 ? 16 : 18 
                          })}
                        </div>
                        <span className="font-medium text-gray-900 text-sm sm:text-base truncate">{category.label}</span>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 ml-2">
                        ({category.count})
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-base sm:text-lg">Quick Stats</h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm sm:text-base">Total Features</span>
                    <span className="font-bold text-blue-600">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm sm:text-base">Easy to Use</span>
                    <span className="font-bold text-green-600">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm sm:text-base">Video Demos</span>
                    <span className="font-bold text-purple-600">8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:w-3/4">
            {/* Category Header */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${activeCategoryData.color.split(' ')[0]} flex items-center justify-center`}>
                  {React.cloneElement(activeCategoryData.icon, { 
                    size: window.innerWidth < 640 ? 18 : 20 
                  })}
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{activeCategoryData.label}</h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {activeCategory === 'all' 
                      ? 'All features available in FitOrbit'
                      : `Features related to ${activeCategoryData.label.toLowerCase()}`
                    }
                  </p>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                Showing {filteredFeatures.length} feature{filteredFeatures.length !== 1 ? 's' : ''}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {filteredFeatures.map((feature) => (
                <div 
                  key={feature.id}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-blue-400 transition-all duration-300"
                >
                  {/* Feature Header */}
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                        {React.cloneElement(feature.icon, { 
                          size: window.innerWidth < 640 ? 20 : 24 
                        })}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 truncate">{feature.title}</h3>
                        <div className="flex items-center flex-wrap gap-1 sm:gap-2 mt-1">
                          <span className="text-xs sm:text-sm px-2 py-1 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap">
                            {feature.difficulty}
                          </span>
                          <span className="text-xs sm:text-sm px-2 py-1 bg-green-100 text-green-700 rounded-full flex items-center whitespace-nowrap">
                            <Star size={10} sm:size={12} className="mr-1" />
                            {feature.popularity}% liked
                          </span>
                        </div>
                      </div>
                    </div>
                    {feature.videoDemo && (
                      <button className="text-blue-600 hover:text-blue-700 ml-2">
                        <PlayCircle size={18} sm:size={20} />
                      </button>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base line-clamp-2">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-medium text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">What you can do:</h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle size={14} sm:size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Bar */}
                  <div className="pt-4 sm:pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                    <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-500">
                      <span className="flex items-center whitespace-nowrap">
                        <Clock size={12} sm:size={14} className="mr-1" />
                        Setup: {feature.setupTime}
                      </span>
                    </div>
                    <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 text-sm sm:text-base">
                      Learn More
                      <ArrowRight size={14} sm:size={16} className="ml-1 sm:ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Help Section */}
            <div className="mt-8 sm:mt-10 md:mt-12 bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-gray-200">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Need Help Choosing?</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Our team can help you select the right features for your gym.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto">
                  <button className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                    Book a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;