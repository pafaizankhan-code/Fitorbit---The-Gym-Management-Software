import React, { useState } from 'react';
import {
  Check,
  X,
  HelpCircle,
  Zap,
  Users,
  Globe,
  Shield,
  BarChart,
  Smartphone,
  Clock,
  Headphones,
  Database,
  CreditCard,
  Settings,
  ChevronDown,
  Star,
  Award,
  Crown,
  Sparkles,
  TrendingUp,
  Target,
  ArrowRight,
  Download
} from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('yearly');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      tagline: 'Perfect for small gyms',
      description: 'Essential features to get your gym management started',
      monthlyPrice: 1200,
      yearlyPrice: 8799,
      savings: 'Save 20%',
      color: 'blue',
      popular: false,
      features: {
        included: [
          'Up to 100 members',
          'Basic member management',
          'Class scheduling',
          'Email support',
          'Basic reporting',
          'Mobile Version for members'
        ],
        excluded: [
          'Multi-location management',
          'Advanced analytics',
          'API access',
          'Priority support',
          'Custom branding',
          'White label options'
        ]
      },
      limits: {
        members: 'Up to 100',
        locations: '1 location',
        storage: '5GB',
        support: 'Email only',
        users: '3 staff accounts'
      }
    },
    {
      id: 'professional',
      name: 'Professional',
      tagline: 'Best for growing gyms',
      description: 'Advanced features for growing fitness businesses',
      monthlyPrice: 3200,
      yearlyPrice: 15890,
      savings: 'Save 20%',
      color: 'purple',
      popular: true,
      features: {
        included: [
          'Up to 500 members',
          'Advanced member management',
          'Automated billing',
          'Priority support',
          'Advanced analytics',
          'Multi-location (up to 3)',
          'API access',
          'Custom reports'
        ],
        excluded: [
          'Unlimited locations',
          'Enterprise security',
          'Custom development',
          'Dedicated account manager'
        ]
      },
      limits: {
        members: 'Up to 500',
        locations: 'Up to 3',
        storage: '25GB',
        support: 'Priority email & chat',
        users: '10 staff accounts'
      }
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      tagline: 'For fitness chains & large gyms',
      description: 'Complete solution for multi-location operations',
      monthlyPrice: 5500,
      yearlyPrice: 23900,
      savings: 'Save 20%',
      color: 'blue',
      popular: false,
      features: {
        included: [
          'Unlimited members',
          'Multi-location management',
          'Enterprise security',
          '24/7 phone support',
          'Custom development',
          'White label solutions',
          'Dedicated account manager',
          'Advanced API access',
          'Custom integrations',
          'Training & onboarding'
        ],
        excluded: []
      },
      limits: {
        members: 'Unlimited',
        locations: 'Unlimited',
        storage: '100GB',
        support: '24/7 phone support',
        users: 'Unlimited staff accounts'
      }
    }
  ];

  const getPrice = (plan) => billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <section className="bg-white py-6 sm:py-8 md:py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          {/* Top Label */}
          <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
            <div className="w-8 sm:w-10 md:w-12 h-1 bg-blue-600 mr-2 sm:mr-3"></div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs sm:text-sm">
              PRICING
            </span>
            <div className="w-8 sm:w-10 md:w-12 h-1 bg-blue-600 ml-2 sm:ml-3"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
            Simple, <span className="text-blue-600">Transparent Pricing</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
            Choose the perfect plan for your gym. All plans include core features with 
            scalable options as your business grows.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md text-xs sm:text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md text-xs sm:text-sm font-medium transition-all flex items-center ${
                billingCycle === 'yearly'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly Billing
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full whitespace-nowrap">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative border-2 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 ${
                plan.popular
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-gray-200 hover:border-blue-300'
              } ${hoveredPlan === plan.id ? 'transform ' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-blue-600 text-white px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full flex items-center space-x-1 sm:space-x-2">
                    <Star size={12} sm:size={14} />
                    <span className="font-bold text-xs sm:text-sm">MOST POPULAR</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  {plan.id === 'enterprise' && <Crown className="text-blue-600 mr-1 sm:mr-2" size={18} sm:size={20} />}
                  {plan.id === 'professional' && <Zap className="text-purple-600 mr-1 sm:mr-2" size={18} sm:size={20} />}
                  {plan.id === 'starter' && <Award className="text-blue-600 mr-1 sm:mr-2" size={18} sm:size={20} />}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{plan.name}</h3>
                </div>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{plan.tagline}</p>
                
                {/* Price */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">₹ {getPrice(plan)}</span>
                    <span className="text-gray-500 ml-1 sm:ml-2 text-sm sm:text-base">/Yearly</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="text-green-600 font-medium text-xs sm:text-sm mt-1">
                      {plan.savings} with yearly billing
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">{plan.description}</p>
              </div>

              {/* Limits */}
            

              {/* Features */}
              <div className="mb-6 sm:mb-8">
                <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">What's included:</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {plan.features.included.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={16} sm:size={18} className="text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-xs sm:text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.features.excluded.length > 0 && (
                  <>
                    <h4 className="font-bold text-gray-900 mt-4 sm:mt-6 mb-3 sm:mb-4 text-sm sm:text-base">Not included:</h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {plan.features.excluded.map((feature, idx) => (
                        <li key={idx} className="flex items-start opacity-50">
                          <X size={16} sm:size={18} className="text-gray-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-500 text-xs sm:text-sm md:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-2.5 sm:py-3 md:py-4 rounded-lg font-bold transition-all text-sm sm:text-base ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
                }`}
              >
                {plan.id === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                <ArrowRight size={16} sm:size={18} className="inline ml-1 sm:ml-2" />
              </button>

              {/* Trial Info */}
              <div className="text-center mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
                {plan.id !== 'enterprise' ? '14-day free trial • No credit card required' : 'Custom pricing available'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;