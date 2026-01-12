import React from 'react';
import {
  Shield,
  Zap,
  Users,
  BarChart,
  Clock,
  Headphones,
  Cpu,
  Lock,
  TrendingUp,
  Calendar,
  Smartphone,
  Award
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="text-blue-600" size={24} sm:size={28} />,
      title: "Enterprise-Grade Security",
      description: "Bank-level security with end-to-end encryption, ensuring your member data and financial information are always protected.",
      borderColor: "border-blue-100",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Zap className="text-blue-600" size={24} sm:size={28} />,
      title: "Lightning Fast Performance",
      description: "Optimized database architecture delivers instant access to member records, payments, and reports without lag.",
      borderColor: "border-blue-100",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Users className="text-blue-600" size={24} sm:size={28} />,
      title: "Comprehensive Member Management",
      description: "Complete lifecycle management from registration to renewals with detailed analytics and engagement tracking.",
      borderColor: "border-blue-100",
      bgColor: "bg-blue-50"
    },
    {
      icon: <BarChart className="text-blue-600" size={24} sm:size={28} />,
      title: "Advanced Analytics Suite",
      description: "Deep insights into gym performance, financial trends, and member behavior with customizable reporting.",
      borderColor: "border-blue-100",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Clock className="text-blue-600" size={24} sm:size={28} />,
      title: "24/7 Automated Operations",
      description: "Round-the-clock automated billing, class scheduling, and member communications without manual intervention.",
      borderColor: "border-blue-100",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Headphones className="text-blue-600" size={24} sm:size={28} />,
      title: "Dedicated Support Team",
      description: "Expert support specialists available via phone, email, and chat with average response time under 15 minutes.",
      borderColor: "border-blue-100",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Cpu className="text-blue-600" size={24} sm:size={28} />,
      title: "Scalable Infrastructure",
      description: "Grow from a single location to multi-chain operations seamlessly with our enterprise-ready platform.",
      borderColor: "border-blue-100",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Lock className="text-blue-600" size={24} sm:size={28} />,
      title: "Compliance & Regulation",
      description: "Built-in compliance with fitness industry standards, GDPR, and financial regulations worldwide.",
      borderColor: "border-blue-100",
      bgColor: "bg-blue-50"
    },
    {
      icon: <TrendingUp className="text-blue-600" size={24} sm:size={28} />,
      title: "Revenue Optimization",
      description: "Smart tools to maximize membership renewals, reduce churn, and identify upsell opportunities.",
      borderColor: "border-blue-100",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Calendar className="text-blue-600" size={24} sm:size={28} />,
      title: "Intelligent Scheduling",
      description: "AI-powered class and trainer scheduling that optimizes capacity and resource utilization.",
      borderColor: "border-blue-100",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Smartphone className="text-blue-600" size={24} sm:size={28} />,
      title: "Mobile-First Experience",
      description: "Native Mobile Versionlications for both staff and members with offline capabilities.",
      borderColor: "border-blue-100",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Award className="text-blue-600" size={24} sm:size={28} />,
      title: "Industry Recognition",
      description: "Award-winning platform trusted by over 2,500 fitness centers globally since 2015.",
      borderColor: "border-blue-100",
      bgColor: "bg-blue-50"
    }
  ];

  const stats = [
    { number: "2,500+", label: "Gyms Trust Us" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "45%", label: "Average Revenue Growth" },
    { number: "<15min", label: "Avg Support Response" }
  ];

  return (
    <section className="bg-white py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
            <div className="w-8 sm:w-10 md:w-12 h-1 bg-blue-600 mr-2 sm:mr-3"></div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs sm:text-sm">
              WHY CHOOSE US
            </span>
            <div className="w-8 sm:w-10 md:w-12 h-1 bg-blue-600 ml-2 sm:ml-3"></div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
            Why <span className="text-blue-600">FitOrbit</span> Is The Professional Choice
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
            FitOrbit is engineered specifically for fitness professionals who demand reliability, 
            precision, and enterprise-grade performance in their gym management operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`border ${feature.borderColor} rounded-lg p-4 sm:p-6 md:p-8 hover:border-blue-300 transition-all duration-300 ${feature.bgColor} hover:bg-white group`}
            >
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white border border-blue-100 flex items-center justify-center group-hover:border-blue-300 transition-colors">
                  {React.cloneElement(feature.icon, { 
                    size: window.innerWidth < 640 ? 20 : window.innerWidth < 768 ? 24 : 28 
                  })}
                </div>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 group-hover:text-blue-700 transition-colors line-clamp-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base line-clamp-3">
                {feature.description}
              </p>
              
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100 group-hover:border-blue-200 transition-colors">
                <div className="flex items-center text-blue-600 font-medium text-sm sm:text-base">
                  <span className="tracking-wide">Learn More</span>
                  <div className="ml-2 w-4 sm:w-6 h-px bg-blue-600"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-6 sm:mt-8 md:mt-10 text-center">
          <div className="inline-flex items-center mb-4 sm:mb-6 md:mb-8">
            <div className="w-8 sm:w-12 md:w-16 lg:w-20 h-px bg-gray-300"></div>
            <div className="mx-2 sm:mx-3 md:mx-4 text-gray-500 font-bold text-xs sm:text-sm tracking-wider whitespace-nowrap">
              READY TO ELEVATE YOUR OPERATIONS?
            </div>
            <div className="w-8 sm:w-12 md:w-16 lg:w-20 h-px bg-gray-300"></div>
          </div>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
            Schedule a Professional Consultation
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors border border-blue-700 text-sm sm:text-base">
              Request Enterprise Demo
            </button>
            <button className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white text-blue-600 font-bold rounded-lg border border-blue-300 hover:border-blue-600 transition-colors text-sm sm:text-base">
              Download Technical Specifications
            </button>
          </div>
          
          <p className="text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6 px-2">
            Contact our enterprise sales team at <span className="text-blue-600 font-bold">sales@fitorbit.com</span> or call <span className="text-blue-600 font-bold">+1 (888) 888-8888</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;