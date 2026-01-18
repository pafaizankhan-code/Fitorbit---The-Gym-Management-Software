import React, { useState, useEffect } from 'react';
import { 
  IndianRupee, 
  Users, 
  TrendingUp, 
  Calendar, 
  Filter, 
  Search, 
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Plus,
  Percent,
  Clock,
  Award,
  Building,
  Briefcase,
  CreditCard,
  PieChart,
  BarChart3,
  FileText,
  Calculator,
  Shield,
  UserCheck,
  History,
  Bell,
  Menu,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const SalarySetup = () => {
  // Salary structures
  const salaryStructures = [
    { id: 1, name: 'Standard', description: 'Base salary + standard allowances', status: 'active' },
    { id: 2, name: 'Executive', description: 'High-level compensation package', status: 'active' },
    { id: 3, name: 'Intern', description: 'Entry-level internship package', status: 'inactive' },
    { id: 4, name: 'Contract', description: 'Project-based contract terms', status: 'active' },
  ];

  // Staff salary data
  const initialStaffSalaries = [
    {
      id: 1,
      name: 'Rahul Sharma',
      position: 'Head Trainer',
      department: 'Training',
      avatar: 'RS',
      salaryStructure: 'Senior',
      baseSalary: 35000,
      allowances: 5000,
      bonuses: 4000,
      deductions: 2000,
      netSalary: 42000,
      currency: 'INR',
      payPeriod: 'Monthly',
      status: 'active',
      lastReview: '2024-02-15',
      nextReview: '2024-08-15',
      contact: '+91 9876543210',
      email: 'rahul@gym.com',
      address: 'Mumbai, India'
    },
    {
      id: 2,
      name: 'Neha Verma',
      position: 'Gym Manager',
      department: 'Management',
      avatar: 'NV',
      salaryStructure: 'Executive',
      baseSalary: 45000,
      allowances: 8000,
      bonuses: 6000,
      deductions: 3000,
      netSalary: 56000,
      currency: 'INR',
      payPeriod: 'Monthly',
      status: 'active',
      lastReview: '2024-01-20',
      nextReview: '2024-07-20',
      contact: '+91 9876543211',
      email: 'neha@gym.com',
      address: 'Delhi, India'
    },
    {
      id: 3,
      name: 'Amit Khan',
      position: 'Personal Trainer',
      department: 'Training',
      avatar: 'AK',
      salaryStructure: 'Standard',
      baseSalary: 28000,
      allowances: 4000,
      bonuses: 7000,
      deductions: 1500,
      netSalary: 37500,
      currency: 'INR',
      payPeriod: 'Monthly',
      status: 'active',
      lastReview: '2024-03-10',
      nextReview: '2024-09-10',
      contact: '+91 9876543212',
      email: 'amit@gym.com',
      address: 'Bangalore, India'
    },
    {
      id: 4,
      name: 'Pooja Singh',
      position: 'Receptionist',
      department: 'Front Desk',
      avatar: 'PS',
      salaryStructure: 'Standard',
      baseSalary: 18000,
      allowances: 2000,
      bonuses: 1000,
      deductions: 1000,
      netSalary: 20000,
      currency: 'INR',
      payPeriod: 'Monthly',
      status: 'inactive',
      lastReview: '2024-02-28',
      nextReview: '2024-08-28',
      contact: '+91 9876543213',
      email: 'pooja@gym.com',
      address: 'Chennai, India'
    },
    {
      id: 5,
      name: 'Rakesh Yadav',
      position: 'Gym Cleaner',
      department: 'Maintenance',
      avatar: 'RY',
      salaryStructure: 'Basic',
      baseSalary: 14000,
      allowances: 1500,
      bonuses: 500,
      deductions: 500,
      netSalary: 15500,
      currency: 'INR',
      payPeriod: 'Monthly',
      status: 'active',
      lastReview: '2024-01-15',
      nextReview: '2024-07-15',
      contact: '+91 9876543214',
      email: 'rakesh@gym.com',
      address: 'Kolkata, India'
    },
    {
      id: 6,
      name: 'Anjali Mehta',
      position: 'Nutritionist',
      department: 'Wellness',
      avatar: 'AM',
      salaryStructure: 'Professional',
      baseSalary: 30000,
      allowances: 5000,
      bonuses: 3000,
      deductions: 2000,
      netSalary: 36000,
      currency: 'INR',
      payPeriod: 'Monthly',
      status: 'active',
      lastReview: '2024-03-05',
      nextReview: '2024-09-05',
      contact: '+91 9876543215',
      email: 'anjali@gym.com',
      address: 'Pune, India'
    },
  ];

  // Allowance types
  const allowanceTypes = [
    { id: 1, name: 'Housing Allowance', description: 'Accommodation support', type: 'fixed', amount: 5000, taxable: true },
    { id: 2, name: 'Transport Allowance', description: 'Commute expenses', type: 'fixed', amount: 2000, taxable: true },
    { id: 3, name: 'Meal Allowance', description: 'Daily food allowance', type: 'daily', amount: 30, taxable: false },
    { id: 4, name: 'Healthcare', description: 'Medical insurance', type: 'percentage', amount: 10, taxable: false },
  ];

  // Deduction types
  const deductionTypes = [
    { id: 1, name: 'Tax', description: 'Income tax deduction', type: 'percentage', amount: 20, mandatory: true },
    { id: 2, name: 'Insurance', description: 'Health insurance', type: 'fixed', amount: 1000, mandatory: true },
    { id: 3, name: 'Retirement', description: 'Pension fund', type: 'percentage', amount: 5, mandatory: false },
    { id: 4, name: 'Loan', description: 'Staff loan repayment', type: 'fixed', amount: 2000, mandatory: false },
  ];

  const [staffSalaries, setStaffSalaries] = useState(initialStaffSalaries);
  const [selectedStaff, setSelectedStaff] = useState(initialStaffSalaries[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showSalaryModal, setShowSalaryModal] = useState(false);
  const [showStructureModal, setShowStructureModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [salaryHistory, setSalaryHistory] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editableSalary, setEditableSalary] = useState({});
  const [showStats, setShowStats] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize salary history
  useEffect(() => {
    const history = [];
    for (let i = 0; i < 6; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      history.push({
        month: date.toLocaleString('default', { month: 'long' }),
        year: date.getFullYear(),
        amount: selectedStaff.netSalary - (Math.random() * 5000),
        status: 'paid',
        paymentDate: date.toISOString().split('T')[0]
      });
    }
    setSalaryHistory(history);
  }, [selectedStaff]);

  // Calculate statistics
  const calculateStats = () => {
    const activeStaff = staffSalaries.filter(s => s.status === 'active');
    const totalSalary = activeStaff.reduce((sum, staff) => sum + staff.netSalary, 0);
    const avgSalary = activeStaff.length > 0 ? totalSalary / activeStaff.length : 0;
    const highestSalary = Math.max(...activeStaff.map(s => s.netSalary));
    const lowestSalary = Math.min(...activeStaff.map(s => s.netSalary));
    
    const deptBreakdown = {};
    staffSalaries.forEach(staff => {
      if (!deptBreakdown[staff.department]) {
        deptBreakdown[staff.department] = { count: 0, total: 0 };
      }
      deptBreakdown[staff.department].count++;
      deptBreakdown[staff.department].total += staff.netSalary;
    });

    return {
      totalMonthlyCost: totalSalary,
      averageSalary: avgSalary,
      highestSalary,
      lowestSalary,
      activeStaffCount: activeStaff.length,
      totalStaffCount: staffSalaries.length,
      departmentBreakdown: deptBreakdown
    };
  };

  const stats = calculateStats();

  // Filter staff
  const filteredStaff = staffSalaries.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         staff.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         staff.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = departmentFilter === 'all' || staff.department === departmentFilter;
    const matchesStatus = statusFilter === 'all' || staff.status === statusFilter;
    return matchesSearch && matchesDept && matchesStatus;
  });

  // Handle salary update
  const handleSalaryUpdate = () => {
    setStaffSalaries(prev => 
      prev.map(staff => 
        staff.id === selectedStaff.id ? { ...selectedStaff, ...editableSalary } : staff
      )
    );
    setSelectedStaff(prev => ({ ...prev, ...editableSalary }));
    setIsEditing(false);
    setShowSalaryModal(false);
  };

  // Calculate salary breakdown
  const calculateBreakdown = (staff) => {
    const totalGross = staff.baseSalary + staff.allowances + staff.bonuses;
    const deductions = staff.deductions;
    const net = totalGross - deductions;
    return {
      totalGross,
      deductions,
      net,
      breakdown: [
        { label: 'Base Salary', value: staff.baseSalary, color: '#155DFC' },
        { label: 'Allowances', value: staff.allowances, color: '#10B981' },
        { label: 'Bonuses', value: staff.bonuses, color: '#F59E0B' },
        { label: 'Deductions', value: staff.deductions, color: '#EF4444' },
      ]
    };
  };

  const currentBreakdown = calculateBreakdown(selectedStaff);

  // Format currency for Indian Rupees
  const formatCurrency = (amount, currency = 'INR') => {
    if (currency === 'INR') {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount);
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Generate payroll summary
  const generatePayrollSummary = () => {
    const summary = staffSalaries
      .filter(s => s.status === 'active')
      .map(staff => ({
        name: staff.name,
        netSalary: staff.netSalary,
        status: 'pending'
      }));

    alert(`Payroll generated for ${summary.length} staff members`);
    return summary;
  };

  // Format phone number for display
  const formatPhoneNumber = (phone) => {
    return phone.replace(/(\+\d{2})(\d{5})(\d{5})/, '$1 $2 $3');
  };

  // Mobile optimized tabs
  const MobileTabButton = ({ tab, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex flex-col items-center justify-center p-2 rounded-lg min-w-[70px] transition-all ${
        activeTab === tab
          ? 'bg-[#155DFC] text-white'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      <Icon className="w-5 h-5 mb-1" />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 md:p-3 p-1">
      {/* Mobile Header */}
      {isMobileView && (
        <div className="sticky top-0 z-40 bg-white shadow-sm mb-3 rounded-lg">
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-2">
              <IndianRupee className="w-6 h-6 text-[#155DFC]" />
              <h1 className="text-lg font-bold text-gray-900">Salary</h1>
            </div>
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-2 rounded-lg bg-gray-100"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
          
          {showMobileMenu && (
            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={generatePayrollSummary}
                  className="flex items-center justify-center space-x-2 bg-white border border-[#155DFC] text-[#155DFC] px-3 py-2 rounded-lg"
                >
                  <CreditCard className="w-4 h-4" />
                  <span className="text-sm font-medium">Run Payroll</span>
                </button>
                <button
                  onClick={() => setShowSalaryModal(true)}
                  className="flex items-center justify-center space-x-2 bg-[#155DFC] text-white px-3 py-2 rounded-lg"
                >
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">Add Salary</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Container */}
      <div className="mx-auto">
        {/* Header - Desktop */}
        {!isMobileView && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-4 ">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
              <div className="mb-4 lg:mb-0">
                <div className="flex items-center space-x-3 mb-2">
                  
                  <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Salary Management System
                    </h1>
                    <p className="text-sm text-gray-600 mt-1">
                      Setup, manage salaries and process payroll
                    </p>
                  </div>
                </div>

                {/* Stats */}
                {showStats && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-600">Monthly Payroll</p>
                      <p className="text-lg font-bold text-gray-900">
                        {formatCurrency(stats.totalMonthlyCost)}
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-600">Avg Salary</p>
                      <p className="text-lg font-bold text-gray-900">
                        {formatCurrency(stats.averageSalary)}
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-600">Salary Range</p>
                      <p className="text-lg font-bold text-gray-900">
                        {formatCurrency(stats.lowestSalary)}-{formatCurrency(stats.highestSalary)}
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-600">Active Staff</p>
                      <p className="text-lg font-bold text-gray-900">
                        {stats.activeStaffCount}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button
                  onClick={generatePayrollSummary}
                  className="flex items-center space-x-2 bg-white border border-[#155DFC] text-[#155DFC] px-4 py-2.5 rounded-lg hover:bg-[#155DFC] hover:text-white transition-colors"
                >
                  <CreditCard className="w-4 h-4" />
                  <span className="text-sm font-medium">Run Payroll</span>
                </button>
                <button
                  onClick={() => setShowSalaryModal(true)}
                  className="flex items-center space-x-2 bg-[#155DFC] text-white px-4 py-2.5 rounded-lg hover:bg-[#1248c4] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">Add Staff Salary</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Panel - Staff List (Hidden on mobile when viewing details) */}
          {(!isMobileView || !selectedStaff) && (
            <div className={`lg:w-1/3 ${isMobileView && selectedStaff ? 'hidden' : 'block'}`}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                {/* Filters */}
                <div className="p-3 sm:p-4 border-b border-gray-200">
                  <div className="space-y-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search name, position, department..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:border-transparent"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Department</label>
                        <select
                          value={departmentFilter}
                          onChange={(e) => setDepartmentFilter(e.target.value)}
                          className="w-full text-sm border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:border-transparent"
                        >
                          <option value="all">All Depts</option>
                          <option value="Training">Training</option>
                          <option value="Management">Management</option>
                          <option value="Front Desk">Front Desk</option>
                          <option value="Maintenance">Maintenance</option>
                          <option value="Wellness">Wellness</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Status</label>
                        <select
                          value={statusFilter}
                          onChange={(e) => setStatusFilter(e.target.value)}
                          className="w-full text-sm border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:border-transparent"
                        >
                          <option value="all">All</option>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Staff List */}
                <div className="divide-y divide-gray-100 max-h-[500px] sm:max-h-[600px] overflow-y-auto">
                  {filteredStaff.map(staff => (
                    <div
                      key={staff.id}
                      onClick={() => {
                        setSelectedStaff(staff);
                        if (isMobileView) {
                          // Hide list and show details on mobile
                          // No need for extra state - just rely on conditional rendering
                        }
                      }}
                      className={`p-3 cursor-pointer transition-all hover:bg-gray-50 ${
                        selectedStaff?.id === staff.id ? 'bg-[#155DFC]/5 border-r-2 border-[#155DFC]' : ''
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold flex-shrink-0 ${
                          staff.status === 'active' ? 'bg-[#155DFC] text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {staff.avatar}
                        </div>
                        <div className="ml-3 min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-gray-900 truncate text-sm sm:text-base">{staff.name}</h3>
                            <span className="text-xs font-medium text-[#155DFC] ml-2">
                              {formatCurrency(staff.netSalary)}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 truncate">{staff.position}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded">
                              {staff.department}
                            </span>
                            <span className={`text-xs px-1.5 py-0.5 rounded ${
                              staff.status === 'active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {staff.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="p-3 border-t border-gray-200 bg-gray-50">
                  <div className="text-xs sm:text-sm text-gray-600">
                    Showing {filteredStaff.length} of {staffSalaries.length} staff
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Panel - Salary Details */}
          {(selectedStaff || !isMobileView) && (
            <div className={`flex-1 ${isMobileView ? 'block' : 'lg:w-2/3'}`}>
              {isMobileView && selectedStaff && (
                <button
                  onClick={() => setSelectedStaff(null)}
                  className="mb-3 flex items-center text-sm text-[#155DFC]"
                >
                  <ChevronDown className="w-4 h-4 mr-1 transform rotate-90" />
                  Back to List
                </button>
              )}
              
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                {/* Staff Header */}
                <div className="p-4 sm:p-6 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                    <div className="flex items-start">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-semibold text-lg flex-shrink-0 ${
                        selectedStaff.status === 'active' ? 'bg-[#155DFC] text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {selectedStaff.avatar}
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <h2 className="text-xl font-bold text-gray-900">{selectedStaff.name}</h2>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                              selectedStaff.status === 'active' 
                                ? 'bg-green-100 text-green-800 border border-green-200' 
                                : 'bg-gray-100 text-gray-800 border border-gray-200'
                            }`}>
                              {selectedStaff.status}
                            </span>
                            <span className="text-lg font-bold text-[#155DFC]">
                              {formatCurrency(selectedStaff.netSalary)}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{selectedStaff.position} • {selectedStaff.department}</p>
                        
                        {/* Contact Info - Mobile */}
                        {isMobileView && (
                          <div className="mt-3 space-y-1">
                            <div className="flex items-center text-sm text-gray-600">
                              <Phone className="w-3 h-3 mr-2" />
                              {formatPhoneNumber(selectedStaff.contact)}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Mail className="w-3 h-3 mr-2" />
                              {selectedStaff.email}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-3 sm:mt-0">
                      <button 
                        onClick={() => {
                          setIsEditing(true);
                          setShowSalaryModal(true);
                        }}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Edit Salary"
                      >
                        <Edit className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                      </button>
                      {!isMobileView && (
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical className="w-5 h-5 text-gray-600" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Tabs - Mobile & Desktop */}
                <div className="border-b border-gray-200">
                  {isMobileView ? (
                    <div className="flex space-x-2 p-3 overflow-x-auto">
                      <MobileTabButton tab="overview" label="Overview" icon={PieChart} />
                      <MobileTabButton tab="details" label="Details" icon={FileText} />
                      <MobileTabButton tab="history" label="History" icon={History} />
                      <MobileTabButton tab="structure" label="Structure" icon={Shield} />
                    </div>
                  ) : (
                    <div className="flex px-6">
                      {['overview', 'details', 'history', 'structure'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-4 py-3 font-medium text-sm transition-colors relative capitalize ${
                            activeTab === tab
                              ? 'text-[#155DFC] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#155DFC]'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {tab === 'overview' && <PieChart className="w-4 h-4 inline mr-2" />}
                          {tab === 'details' && <FileText className="w-4 h-4 inline mr-2" />}
                          {tab === 'history' && <History className="w-4 h-4 inline mr-2" />}
                          {tab === 'structure' && <Shield className="w-4 h-4 inline mr-2" />}
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tab Content */}
                <div className="p-4 sm:p-6">
                  {activeTab === 'overview' && (
                    <div className="space-y-4 sm:space-y-6">
                      {/* Salary Summary */}
                      <div className="bg-gradient-to-r from-[#155DFC]/5 to-blue-50 p-4 sm:p-6 rounded-xl border border-[#155DFC]/20">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                          <div className="mb-3 sm:mb-0">
                            <h3 className="text-lg font-bold text-gray-900">Salary Summary</h3>
                            <p className="text-sm text-gray-600">Monthly compensation breakdown</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                              {formatCurrency(selectedStaff.netSalary)}
                            </div>
                            <div className="text-sm text-gray-500">Net Monthly Salary</div>
                          </div>
                        </div>

                        {/* Breakdown Chart */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                          {currentBreakdown.breakdown.map((item, index) => (
                            <div key={index} className="text-center">
                              <div className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                                {formatCurrency(item.value)}
                              </div>
                              <div className="text-xs sm:text-sm text-gray-600">{item.label}</div>
                              <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden mt-2">
                                <div 
                                  className="h-full rounded-full"
                                  style={{ 
                                    backgroundColor: item.color,
                                    width: `${(item.value / currentBreakdown.totalGross) * 100}%`
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Summary Stats */}
                        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
                          <div className="text-center">
                            <div className="text-xs text-gray-500">Gross Salary</div>
                            <div className="text-base sm:text-lg font-bold text-gray-900">
                              {formatCurrency(currentBreakdown.totalGross)}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-gray-500">Deductions</div>
                            <div className="text-base sm:text-lg font-bold text-red-600">
                              {formatCurrency(currentBreakdown.deductions)}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-gray-500">Tax Rate</div>
                            <div className="text-base sm:text-lg font-bold text-gray-900">
                              {((deductionTypes[0].amount) / 100).toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 0 })}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-gray-900">Review Schedule</h4>
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Last Review</span>
                              <span className="text-sm font-medium">{selectedStaff.lastReview}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Next Review</span>
                              <span className="text-sm font-medium text-[#155DFC]">{selectedStaff.nextReview}</span>
                            </div>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-gray-900">Salary Structure</h4>
                            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Current Structure</span>
                              <span className="text-sm font-medium">{selectedStaff.salaryStructure}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Pay Period</span>
                              <span className="text-sm font-medium">{selectedStaff.payPeriod}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'details' && (
                    <div className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Earnings */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-green-500" />
                            Earnings
                          </h3>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium text-gray-900 text-sm">Base Salary</div>
                                <div className="text-xs text-gray-500">Fixed monthly</div>
                              </div>
                              <div className="text-base font-bold text-gray-900">
                                {formatCurrency(selectedStaff.baseSalary)}
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium text-gray-900 text-sm">Allowances</div>
                                <div className="text-xs text-gray-500">Benefits & allowances</div>
                              </div>
                              <div className="text-base font-bold text-green-600">
                                +{formatCurrency(selectedStaff.allowances)}
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium text-gray-900 text-sm">Bonuses</div>
                                <div className="text-xs text-gray-500">Performance incentives</div>
                              </div>
                              <div className="text-base font-bold text-yellow-600">
                                +{formatCurrency(selectedStaff.bonuses)}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Deductions */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-red-500 transform rotate-180" />
                            Deductions
                          </h3>
                          <div className="space-y-3">
                            {deductionTypes.slice(0, isMobileView ? 2 : 4).map(deduction => (
                              <div key={deduction.id} className="flex items-center justify-between">
                                <div>
                                  <div className="font-medium text-gray-900 text-sm">{deduction.name}</div>
                                  <div className="text-xs text-gray-500">{deduction.description}</div>
                                </div>
                                <div className="text-base font-bold text-red-600">
                                  -{deduction.type === 'percentage' ? `${deduction.amount}%` : formatCurrency(deduction.amount)}
                                </div>
                              </div>
                            ))}
                            {isMobileView && (
                              <button 
                                onClick={() => setActiveTab('structure')}
                                className="text-sm text-[#155DFC] font-medium"
                              >
                                View all deductions →
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Allowance Details */}
                      {!isMobileView && (
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h3 className="font-bold text-gray-900 mb-4">Allowance Details</h3>
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="border-b border-gray-200">
                                  <th className="py-2 px-3 text-left text-xs font-medium text-gray-700">Allowance Type</th>
                                  <th className="py-2 px-3 text-left text-xs font-medium text-gray-700">Description</th>
                                  <th className="py-2 px-3 text-left text-xs font-medium text-gray-700">Type</th>
                                  <th className="py-2 px-3 text-left text-xs font-medium text-gray-700">Amount</th>
                                  <th className="py-2 px-3 text-left text-xs font-medium text-gray-700">Taxable</th>
                                </tr>
                              </thead>
                              <tbody>
                                {allowanceTypes.map(allowance => (
                                  <tr key={allowance.id} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-2 px-3 text-sm font-medium text-gray-900">{allowance.name}</td>
                                    <td className="py-2 px-3 text-sm text-gray-600">{allowance.description}</td>
                                    <td className="py-2 px-3 text-sm">
                                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                                        allowance.type === 'fixed' ? 'bg-blue-100 text-blue-800' :
                                        allowance.type === 'percentage' ? 'bg-green-100 text-green-800' :
                                        'bg-purple-100 text-purple-800'
                                      }`}>
                                        {allowance.type}
                                      </span>
                                    </td>
                                    <td className="py-2 px-3 text-sm font-bold text-gray-900">
                                      {allowance.type === 'percentage' ? `${allowance.amount}%` : formatCurrency(allowance.amount)}
                                    </td>
                                    <td className="py-2 px-3 text-sm">
                                      {allowance.taxable ? (
                                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded">Taxable</span>
                                      ) : (
                                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Tax-Free</span>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'history' && (
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <h3 className="font-bold text-gray-900">Payment History</h3>
                        <div className="flex gap-2">
                          <select 
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                            className="w-full sm:w-auto text-sm border border-gray-300 rounded-lg px-3 py-2"
                          >
                            {Array.from({ length: 12 }, (_, i) => (
                              <option key={i} value={i}>
                                {new Date(2000, i, 1).toLocaleString('default', { month: 'short' })}
                              </option>
                            ))}
                          </select>
                          <select 
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                            className="w-full sm:w-auto text-sm border border-gray-300 rounded-lg px-3 py-2"
                          >
                            {[2023, 2024, 2025].map(year => (
                              <option key={year} value={year}>{year}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[600px]">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="py-2 px-3 text-left text-xs font-medium text-gray-700">Period</th>
                              <th className="py-2 px-3 text-left text-xs font-medium text-gray-700">Payment Date</th>
                              <th className="py-2 px-3 text-left text-xs font-medium text-gray-700">Gross</th>
                              <th className="py-2 px-3 text-left text-xs font-medium text-gray-700">Deductions</th>
                              <th className="py-2 px-3 text-left text-xs font-medium text-gray-700">Net</th>
                              <th className="py-2 px-3 text-left text-xs font-medium text-gray-700">Status</th>
                              <th className="py-2 px-3 text-left text-xs font-medium text-gray-700">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {salaryHistory.slice(0, isMobileView ? 3 : 6).map((payment, index) => (
                              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="py-2 px-3 text-sm font-medium text-gray-900">
                                  {payment.month.slice(0, 3)} {payment.year}
                                </td>
                                <td className="py-2 px-3 text-sm text-gray-600">{payment.paymentDate}</td>
                                <td className="py-2 px-3 text-sm font-bold text-gray-900">
                                  {formatCurrency(payment.amount + 5000)}
                                </td>
                                <td className="py-2 px-3 text-sm text-red-600">
                                  -{formatCurrency(5000)}
                                </td>
                                <td className="py-2 px-3 text-sm font-bold text-[#155DFC]">
                                  {formatCurrency(payment.amount)}
                                </td>
                                <td className="py-2 px-3 text-sm">
                                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                                    payment.status === 'paid' 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {payment.status}
                                  </span>
                                </td>
                                <td className="py-2 px-3 text-sm">
                                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                                    <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {isMobileView && salaryHistory.length > 3 && (
                          <div className="text-center mt-4">
                            <button className="text-sm text-[#155DFC] font-medium">
                              View all {salaryHistory.length} payments →
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {activeTab === 'structure' && (
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                          <div>
                            <h3 className="font-bold text-gray-900">Salary Structures</h3>
                            <p className="text-sm text-gray-600">Predefined salary packages</p>
                          </div>
                          <button 
                            onClick={() => setShowStructureModal(true)}
                            className="mt-2 sm:mt-0 px-3 py-2 bg-[#155DFC] text-white rounded-lg hover:bg-[#1248c4] transition-colors flex items-center gap-2 text-sm"
                          >
                            <Plus className="w-4 h-4" />
                            New Structure
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {salaryStructures.map(structure => (
                            <div 
                              key={structure.id}
                              className={`border rounded-lg p-3 cursor-pointer transition-all ${
                                selectedStaff.salaryStructure === structure.name
                                  ? 'border-[#155DFC] bg-[#155DFC]/5'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                              onClick={() => {
                                setSelectedStaff(prev => ({ ...prev, salaryStructure: structure.name }));
                              }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-gray-900">{structure.name}</h4>
                                <span className={`px-2 py-0.5 text-xs rounded ${
                                  structure.status === 'active'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {structure.status}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{structure.description}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">Used by 5 staff</span>
                                {selectedStaff.salaryStructure === structure.name && (
                                  <Check className="w-4 h-4 text-[#155DFC]" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Salary Modal - Responsive */}
      {showSalaryModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {isEditing ? 'Edit Salary Details' : 'Add Staff Salary'}
                </h3>
                <button
                  onClick={() => {
                    setShowSalaryModal(false);
                    setIsEditing(false);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Base Salary</label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="number"
                        defaultValue={selectedStaff.baseSalary}
                        onChange={(e) => setEditableSalary(prev => ({ ...prev, baseSalary: parseInt(e.target.value) }))}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:border-transparent text-sm"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Allowances</label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="number"
                        defaultValue={selectedStaff.allowances}
                        onChange={(e) => setEditableSalary(prev => ({ ...prev, allowances: parseInt(e.target.value) }))}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:border-transparent text-sm"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bonuses</label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="number"
                        defaultValue={selectedStaff.bonuses}
                        onChange={(e) => setEditableSalary(prev => ({ ...prev, bonuses: parseInt(e.target.value) }))}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:border-transparent text-sm"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Deductions</label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="number"
                        defaultValue={selectedStaff.deductions}
                        onChange={(e) => setEditableSalary(prev => ({ ...prev, deductions: parseInt(e.target.value) }))}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:border-transparent text-sm"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pay Period</label>
                    <select
                      defaultValue={selectedStaff.payPeriod}
                      onChange={(e) => setEditableSalary(prev => ({ ...prev, payPeriod: e.target.value }))}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:border-transparent text-sm"
                    >
                      <option value="Monthly">Monthly</option>
                      <option value="Bi-Weekly">Bi-Weekly</option>
                      <option value="Weekly">Weekly</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Salary Structure</label>
                    <select
                      defaultValue={selectedStaff.salaryStructure}
                      onChange={(e) => setEditableSalary(prev => ({ ...prev, salaryStructure: e.target.value }))}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:border-transparent text-sm"
                    >
                      {salaryStructures.map(structure => (
                        <option key={structure.id} value={structure.name}>{structure.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => {
                    setShowSalaryModal(false);
                    setIsEditing(false);
                  }}
                  className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSalaryUpdate}
                  className="flex-1 px-4 py-2.5 bg-[#155DFC] text-white rounded-lg hover:bg-[#1248c4] transition-colors text-sm"
                >
                  {isEditing ? 'Update Salary' : 'Save Salary'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Structure Creation Modal - Responsive */}
      {showStructureModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3">
          <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Create Salary Structure</h3>
                <button
                  onClick={() => setShowStructureModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Structure Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Senior Executive Package"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Describe this salary structure..."
                    rows="3"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Base Salary Range
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="number"
                        placeholder="Minimum"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:border-transparent text-sm"
                      />
                    </div>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="number"
                        placeholder="Maximum"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:border-transparent text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowStructureModal(false)}
                  className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert('Salary structure created!');
                    setShowStructureModal(false);
                  }}
                  className="flex-1 px-4 py-2.5 bg-[#155DFC] text-white rounded-lg hover:bg-[#1248c4] transition-colors text-sm"
                >
                  Create Structure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalarySetup;