import React, { useState } from 'react';
import { 
  Dumbbell, 
  Eye, 
  EyeOff, 
  User, 
  Lock, 
  Shield,
  IndianRupee,
  Target,
  Building,
  Smartphone,
  Mail,
  CheckCircle,
  Menu,
  X,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    gymCode: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  // Valid email/password combinations
  const validCredentials = [
    { email: 'admin@fitorbit.com', password: 'Admin@123' },
    { email: 'owner@fitorbit.com', password: 'Owner@456' },
    { email: 'manager@fitorbit.com', password: 'Manager@789' },
    { email: 'demo@demo.com', password: 'Demo@123' },
    { email: 'test@test.com', password: 'Test@123' },
    { email: 'admin@fitorbit.com', password: 'Fitorbit@2026' }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.username.trim()) {
      newErrors.username = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.username)) {
      newErrors.username = 'Please enter a valid email address';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if credentials are valid
    const isValid = validCredentials.some(
      cred => 
        cred.email === formData.username && 
        cred.password === formData.password
    );
    
    if (isValid) {
      // Store login state in localStorage if "Remember me" is checked
      if (rememberMe) {
        localStorage.setItem('Fitorbit_remembered', JSON.stringify({
          username: formData.username,
          remember: true
        }));
      } else {
        localStorage.removeItem('Fitorbit_remembered');
      }
      
      // Store session token
      sessionStorage.setItem('Fitorbit_token', 'authenticated_' + Date.now());
      sessionStorage.setItem('Fitorbit_user', formData.username);
      
      // Redirect to ultimate-control route
      navigate('/ultimate-control');
    } else {
      setErrors({
        general: 'Invalid email or password. Please try again.'
      });
    }
    
    setIsLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
    
    // Clear general error when user starts typing
    if (errors.general) {
      setErrors({
        ...errors,
        general: ''
      });
    }
  };

  // Load remembered credentials on component mount
  React.useEffect(() => {
    const remembered = localStorage.getItem('Fitorbit_remembered');
    if (remembered) {
      try {
        const data = JSON.parse(remembered);
        if (data.remember && data.username) {
          setFormData(prev => ({ ...prev, username: data.username }));
          setRememberMe(true);
        }
      } catch (error) {
        console.error('Error loading remembered credentials:', error);
      }
    }
  }, []);

  const gymFeatures = [
    { icon: Target, text: "450+ Active Members" },
    { icon: IndianRupee, text: "₹8.5L Monthly Revenue" },
    { icon: Building, text: "Multi-branch Support" },
    { icon: Shield, text: "Bank-level Security" },
  ];

  // Demo credentials hint (for development only)
  const demoHint = (
    <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-xs">
      <p className="font-medium text-blue-800 mb-1">Demo Credentials:</p>
      <div className="space-y-1">
        <p className="text-blue-700">admin@Fitorbit.com / Admin@123</p>
        <p className="text-blue-700">owner@Fitorbit.com / Owner@456</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen  py-4 px-3 sm:py-8 sm:px-4 bg-gray-100 md:py-12 flex items-center justify-center">
      <div className="w-full max-w-7xl  overflow-hidden  ">
       <div className="flex flex-col lg:flex-row bg-white rounded-tl-[50px] rounded-bl-[50px]">

          
          {/* Mobile Header */}
          <div className="lg:hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center ">
              
                <div>
                  <h1 className="text-lg font-bold">FitOrbit</h1>
                  <p className="text-blue-100 text-xs">Enterprise Management</p>
                </div>
              </div>
              <button 
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-1"
              >
                {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Left Panel - Gym Management Info */}
          <div className={` bg-white lg:w-3/5 bg-gradient-to-b rounded-t-[40px] rounded-b-[40px] from-blue-600 to-blue-700 text-white p-6 sm:p-8 lg:p-8 ${showMobileMenu ? 'block' : 'hidden lg:block'}`}>
            <div className="flex flex-col h-full">
              {/* Logo and Brand - Desktop */}
              <div className="hidden lg:flex items-center space-x-3 mb-6 lg:mb-8">
                
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold">FitOrbit</h1>
                  <p className="text-blue-100 text-xs lg:text-sm">Enterprise Management System</p>
                </div>
              </div>

              {/* Welcome Text */}
              <div className="mb-6 lg:mb-10">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">Welcome Back, Gym Owner</h2>
                <p className="text-blue-100 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Manage your fitness empire with our comprehensive gym management solution. 
                  Track members, process payments, and analyze performance in real-time.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 sm:space-y-6 mb-6 lg:mb-10">
                {gymFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-xs sm:text-sm lg:text-base">{feature.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Trust Badges */}
              <div className="mt-auto pt-6 lg:pt-8 border-t border-blue-500/30">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                    <span className="text-xs sm:text-sm text-blue-100">Secure Login</span>
                  </div>
                  <div className="text-xs sm:text-sm text-blue-100">
                    Trusted by 500+ gyms across India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Login Form */}
          <div className="lg:w-2/5 p-4 sm:p-6 md:p-8 lg:p-8 ">
            <div className="max-w-3xl mx-auto">
              {/* Form Header */}
              <div className=" mb-6 sm:mb-8 lg:mb-10">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Login to Your Account</h2>
                <p className="text-gray-600 text-xs sm:text-sm">Enter your credentials to access the dashboard</p>
              </div>

              {/* Error Message */}
              {errors.general && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span className="text-xs sm:text-sm text-red-700">{errors.general}</span>
                  </div>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Username/Email Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className={`block w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 text-xs sm:text-sm border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.username 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-blue-600'
                      }`}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  {errors.username && (
                    <p className="mt-1 text-xs text-red-600">{errors.username}</p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`block w-full pl-9 sm:pl-10 pr-9 sm:pr-10 py-2 sm:py-3 text-xs sm:text-sm border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.password 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-blue-600'
                      }`}
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-600">{errors.password}</p>
                  )}
                </div>

                {/* Gym Code (Optional for Multi-branch) */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Gym Code <span className="text-gray-500 text-xs">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="gymCode"
                      value={formData.gymCode}
                      onChange={handleChange}
                      className="block w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 text-xs sm:text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Enter gym code for multi-branch"
                    />
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => setRememberMe(!rememberMe)}
                      className="flex items-center space-x-2"
                    >
                      <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded border flex items-center justify-center ${rememberMe ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                        {rememberMe && <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />}
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700">Remember me</span>
                    </button>
                  </div>
                  <a
                    href="#"
                    className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-xs sm:text-sm shadow-md hover:shadow-lg ${
                    isLoading 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:bg-blue-700'
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </span>
                  ) : (
                    'Sign In to Dashboard'
                  )}
                </button>

                {/* Demo credentials hint (for development) */}
                {process.env.NODE_ENV === 'development' && demoHint}

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                {/* Alternative Login Options */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center space-x-1 sm:space-x-2 py-2 sm:py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm"
                  >
                    <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    <span className="font-medium text-gray-700">SMS Login</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center space-x-1 sm:space-x-2 py-2 sm:py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    <span className="font-medium text-gray-700">Email OTP</span>
                  </button>
                </div>
              </form>

              {/* Footer Links */}
              <div className="mt-6 sm:mt-8 lg:mt-10 pt-6 lg:pt-8 border-t border-gray-200">
                <div className="text-center space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-800">
                      Contact sales for enterprise access
                    </a>
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-500">
                    <a href="#" className="hover:text-gray-700">Privacy Policy</a>
                    <span className="hidden sm:inline">•</span>
                    <a href="#" className="hover:text-gray-700">Terms of Service</a>
                    <span className="hidden sm:inline">•</span>
                    <a href="#" className="hover:text-gray-700">Support</a>
                  </div>
                  <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-xs text-gray-400">
                    <Shield className="w-3 h-3" />
                    <span className="text-xs">All data is encrypted and securely stored</span>
                  </div>
                </div>
              </div>

              {/* System Status */}
              <div className="mt-4 sm:mt-6 p-2 sm:p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm text-green-800">System Status: All Services Operational</span>
                  </div>
                  <span className="text-xs text-green-600">v2.1.4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
    </div>
  );
};

export default Login;