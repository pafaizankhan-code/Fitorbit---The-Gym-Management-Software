import React from 'react';
import {
  Play,
  ArrowRight,
  BarChart,
  Users,
  IndianRupee,
  Shield,
  Calendar,
  Smartphone,
  Cloud,
  Lock,
  Building2,
  TrendingUp,
  Key,
  MessageSquare,
  Zap,
  Target,
  FileText,
  Bell,
  CreditCard,
  Users as Members,
  Plus,
  Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="bg-white text-black relative">
      {/* Enhanced Grid Background using Tailwind */}
     <div className="absolute inset-0 pointer-events-none">
  {/* Main grid pattern */}
  <div className="absolute inset-0 
    bg-[linear-gradient(90deg,#e5e7eb_1px,transparent_1px),linear-gradient(180deg,#e5e7eb_1px,transparent_1px)]
    bg-[size:50px_80px] bg-center opacity-20" />

  {/* Accent blue grid lines */}
  <div className="absolute inset-0 
    bg-[linear-gradient(90deg,#2563eb_0.5px,transparent_0.5px),linear-gradient(180deg,#2563eb_0.5px,transparent_0.5px)]
    bg-[size:100px_160px] bg-center opacity-10" />
</div>


      {/* Content Container */}
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 z-10">
        {/* Badge with Border */}
      <div className="inline-flex items-center border-2 border-blue-600 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 mb-6 sm:mb-8 bg-white shadow-sm">
  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mr-2 sm:mr-3"></div>

  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-600">
    Advance Gym Software
  </span>

  <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 text-[10px] sm:text-xs font-bold bg-blue-600 text-white rounded-full">
    <Bot size={16} />
    Powered by Ai
  </span>
</div>

        {/* Main Heading */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Enterprise-Ready{' '}
            <span className="text-blue-600">Gym Management</span>{' '}
            Software Platform
          </h1>
        </div>

        {/* Subheading */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-7xl">
            FitOrbit is a powerful, all-in-one gym management platform designed for modern fitness
            businesses and multi-location operators. Automate daily operations, manage members with ease,
            gain real-time insights, and drive sustainable revenue growth — all from a single,
            secure, cloud-based system.
          </p>
        </div>

        {/* Features Grid with Clear Borders */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12">
          {[
            { 
              icon: <Users size={18} sm:size={20} className="text-blue-600" />, 
              text: 'Member Management', 
              highlight: 'Centralized Profiles',
              borderColor: 'border-blue-200'
            },
            { 
              icon: <IndianRupee size={18} sm:size={20} className="text-blue-600" />, 
              text: 'Smart Billing', 
              highlight: 'Auto Invoicing',
              borderColor: 'border-blue-200'
            },
            { 
              icon: <Calendar size={18} sm:size={20} className="text-blue-600" />, 
              text: 'Class Scheduling', 
              highlight: 'Easy Booking',
              borderColor: 'border-blue-200'
            },
            { 
              icon: <BarChart size={18} sm:size={20} className="text-blue-600" />, 
              text: 'Real-time Reports', 
              highlight: 'Live Insights',
              borderColor: 'border-blue-200'
            },
            { 
              icon: <Shield size={18} sm:size={20} className="text-blue-600" />, 
              text: 'Data Security', 
              highlight: 'Enterprise-Grade',
              borderColor: 'border-blue-200'
            },
            { 
              icon: <Building2 size={18} sm:size={20} className="text-blue-600" />, 
              text: 'Multiple Locations', 
              highlight: 'Multi-Branch',
              borderColor: 'border-blue-200'
            },
            { 
              icon: <Smartphone size={18} sm:size={20} className="text-blue-600" />, 
              text: 'Mobile Version', 
              highlight: 'iOS & Android',
              borderColor: 'border-blue-200'
            },
            { 
              icon: <Cloud size={18} sm:size={20} className="text-blue-600" />, 
              text: 'Cloud Storage', 
              highlight: '24/7 Access',
              borderColor: 'border-blue-200'
            },
            { 
              icon: <TrendingUp size={18} sm:size={20} className="text-blue-600" />, 
              text: 'Growth Insights', 
              highlight: 'Performance Metrics',
              borderColor: 'border-blue-200'
            },
            { 
              icon: <Key size={18} sm:size={20} className="text-blue-600" />, 
              text: 'Access Control', 
              highlight: 'Role-Based',
              borderColor: 'border-blue-200'
            },
            { 
              icon: <MessageSquare size={18} sm:size={20} className="text-blue-600" />, 
              text: 'Member Communications', 
              highlight: 'SMS & Email',
              borderColor: 'border-blue-200'
            },
            { 
              icon: <Plus size={18} sm:size={20} className="text-blue-600" />, 
              text: '+ More Features', 
              highlight: '+ More Features',
              borderColor: 'border-gray-200'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`border-2 ${feature.borderColor} rounded-lg p-2 sm:p-3 hover:border-blue-300 hover:shadow-sm transition-all duration-300 bg-white relative group`}
            >
              {/* Corner accent - hidden on very small screens */}
              <div className="absolute top-0 right-0 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-blue-600 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity hidden xs:block" />
              
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg border-1 border-blue-200 flex items-center justify-center bg-white flex-shrink-0 group-hover:bg-blue-50 transition-colors">
                  {React.cloneElement(feature.icon, { 
                    size: window.innerWidth < 640 ? 16 : 20 
                  })}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-black mb-0.5 sm:mb-1 text-sm sm:text-base truncate">
                    {feature.text}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 truncate">
                    <span className="font-bold text-blue-600">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section with Grid Pattern */}
        <div className="relative">
  <div className="absolute inset-0 opacity-10 rounded-lg" />

  {/* CTA Buttons Container */}
  <div className="relative z-10 flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch md:items-start">
    
    {/* Button 1 */}
  <Link to={'/book-demo'}>
    <button
      className="
      cursor-pointer
        w-full md:w-auto
        px-4 sm:px-6 md:px-8
        py-3 sm:py-4
        bg-blue-600 hover:bg-blue-700
        text-white font-bold
        rounded-lg
        transition-colors
        flex items-center justify-center
        border-2 border-blue-600
        shadow-sm hover:shadow-md
        text-sm sm:text-base
      "
    >
      <span>Start Free 14-Day Trial</span>
      <ArrowRight size={16} className="ml-2 sm:ml-3" />
    </button>

  </Link>
    {/* Button 2 */}
   

  </div>
</div>

      </div>

      {/* Bottom Divider with Grid Pattern */}
    </section>
  );
};

export default Banner;