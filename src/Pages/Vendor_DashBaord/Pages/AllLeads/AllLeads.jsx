import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  UserPlus, 
  Download, 
  Printer,
  Mail,
  Phone,
  Calendar,
  ChevronDown,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  UserCheck,
  UserX,
  Clock,
  X,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Target,
  TrendingUp,
  Users,
  PhoneCall,
  MessageCircle,
  Mail as MailIcon,
  User,
  MapPin,
  Smartphone,
  Clock as ClockIcon,
  Tag,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  Send,
  Check,
  Info,
  FileText,
  Building,
  CalendarDays,
  Award,
  Target as TargetIcon,
  MessageCircle as MessageCircleIcon,
  ExternalLink,
  Copy,
  Share2,
  Star,
  Heart,
  TrendingDown,
  UserMinus,
  ChevronUp,
  ChevronRight as ChevronRightIcon,
  ArrowRight,
  XCircle,
  CheckSquare,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AllLeads = () => {
  // State Management
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState('recent');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [activeFilters, setActiveFilters] = useState({
    status: [],
    source: []
  });
  const [selectedLead, setSelectedLead] = useState(null);
  const [showLeadDetails, setShowLeadDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  // Lead Data
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul.sharma@gmail.com",
      phone: "+91 98765 43210",
      source: "Walk-in",
      status: "new",
      interest: "Weight Loss Program",
      assignedTo: "Aarav Sharma",
      followUpDate: "2024-02-01",
      createdAt: "2024-01-28",
      notes: "Interested in personal training for weight loss. Wants morning sessions.",
      branch: "Mumbai Central",
      age: 28,
      gender: "Male",
      lastContact: "2024-01-28",
      priority: "high",
      address: "Andheri West, Mumbai",
      occupation: "Software Engineer",
      preferredTime: "Morning (7-9 AM)",
      budget: "₹5,000/month",
      healthIssues: "None",
      fitnessGoal: "Lose 10kg in 3 months",
      visitedBranch: "Yes",
      trialTaken: "No",
      communicationPreference: "WhatsApp",
      familyMembersInterested: 0,
      leadScore: 85,
      lastActivity: "Website visit",
      nextAction: "Schedule trial session",
      tags: ["Weight Loss", "Personal Training", "Beginner"]
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya.patel@yahoo.com",
      phone: "+91 87654 32109",
      source: "Website Form",
      status: "contacted",
      interest: "Yoga & Meditation Classes",
      assignedTo: "Neha Patel",
      followUpDate: "2024-02-02",
      createdAt: "2024-01-27",
      notes: "Interested in evening yoga classes. Working professional, prefers 6-8 PM slots.",
      branch: "Andheri West",
      age: 25,
      gender: "Female",
      lastContact: "2024-01-27",
      priority: "medium",
      address: "Bandra, Mumbai",
      occupation: "Marketing Executive",
      preferredTime: "Evening (6-8 PM)",
      budget: "₹3,500/month",
      healthIssues: "Mild back pain",
      fitnessGoal: "Stress relief and flexibility",
      visitedBranch: "No",
      trialTaken: "Scheduled",
      communicationPreference: "Email",
      familyMembersInterested: 1,
      leadScore: 72,
      lastActivity: "Email exchange",
      nextAction: "Send trial session details",
      tags: ["Yoga", "Stress Relief", "Evening Classes"]
    },
    {
      id: 3,
      name: "Amit Verma",
      email: "amit.verma@gmail.com",
      phone: "+91 76543 21098",
      source: "Referral",
      status: "qualified",
      interest: "Bodybuilding & Strength Training",
      assignedTo: "Rohan Singh",
      followUpDate: "2024-02-03",
      createdAt: "2024-01-26",
      notes: "Competition preparation. Needs advanced training program.",
      branch: "Bandra",
      age: 32,
      gender: "Male",
      lastContact: "2024-01-26",
      priority: "high",
      address: "South Mumbai",
      occupation: "Business Owner",
      preferredTime: "Flexible",
      budget: "₹8,000/month",
      healthIssues: "None",
      fitnessGoal: "Bodybuilding competition in 6 months",
      visitedBranch: "Yes",
      trialTaken: "Yes",
      communicationPreference: "Phone Call",
      familyMembersInterested: 0,
      leadScore: 92,
      lastActivity: "Branch visit",
      nextAction: "Send membership proposal",
      tags: ["Bodybuilding", "Competition", "Advanced"]
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha.reddy@gmail.com",
      phone: "+91 65432 10987",
      source: "Social Media (Instagram)",
      status: "new",
      interest: "Cardio & Aerobics",
      assignedTo: "Aarav Sharma",
      followUpDate: "2024-02-04",
      createdAt: "2024-01-25",
      notes: "Beginner, needs guidance. Wants group classes.",
      branch: "Mumbai Central",
      age: 29,
      gender: "Female",
      lastContact: "2024-01-25",
      priority: "medium",
      address: "Powai, Mumbai",
      occupation: "Doctor",
      preferredTime: "Evening (7-9 PM)",
      budget: "₹4,000/month",
      healthIssues: "Asthma (mild)",
      fitnessGoal: "Improve cardiovascular health",
      visitedBranch: "No",
      trialTaken: "No",
      communicationPreference: "WhatsApp",
      familyMembersInterested: 2,
      leadScore: 65,
      lastActivity: "Instagram DM",
      nextAction: "Follow-up call",
      tags: ["Cardio", "Beginner", "Group Classes"]
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram.singh@gmail.com",
      phone: "+91 54321 09876",
      source: "Phone Inquiry",
      status: "converted",
      interest: "CrossFit Training",
      assignedTo: "Neha Patel",
      followUpDate: "2024-01-30",
      createdAt: "2024-01-24",
      notes: "Converted to premium membership. Paid for 6 months.",
      branch: "Andheri West",
      age: 35,
      gender: "Male",
      lastContact: "2024-01-24",
      priority: "low",
      address: "Andheri East",
      occupation: "Bank Manager",
      preferredTime: "Morning (6-8 AM)",
      budget: "₹6,500/month",
      healthIssues: "None",
      fitnessGoal: "Improve overall fitness",
      visitedBranch: "Yes",
      trialTaken: "Yes",
      communicationPreference: "SMS",
      familyMembersInterested: 1,
      leadScore: 95,
      lastActivity: "Membership payment",
      nextAction: "Welcome onboarding",
      tags: ["CrossFit", "Premium", "Converted"]
    },
    {
      id: 6,
      name: "Anjali Kapoor",
      email: "anjali.kapoor@gmail.com",
      phone: "+91 43210 98765",
      source: "Website (Google Ads)",
      status: "lost",
      interest: "Pilates & Core Strength",
      assignedTo: "Rohan Singh",
      followUpDate: "2024-01-29",
      createdAt: "2024-01-23",
      notes: "Found another gym closer to home. Price was a concern.",
      branch: "Bandra",
      age: 27,
      gender: "Female",
      lastContact: "2024-01-23",
      priority: "low",
      address: "Bandra West",
      occupation: "Fashion Designer",
      preferredTime: "Afternoon (3-5 PM)",
      budget: "₹3,000/month",
      healthIssues: "None",
      fitnessGoal: "Core strength and toning",
      visitedBranch: "Yes",
      trialTaken: "Yes",
      communicationPreference: "Email",
      familyMembersInterested: 0,
      leadScore: 40,
      lastActivity: "Declined offer",
      nextAction: "Re-engage in 3 months",
      tags: ["Pilates", "Lost Lead", "Price Sensitive"]
    },
    {
      id: 7,
      name: "Karan Malhotra",
      email: "karan.malhotra@gmail.com",
      phone: "+91 32109 87654",
      source: "Walk-in",
      status: "contacted",
      interest: "Strength & Powerlifting",
      assignedTo: "Aarav Sharma",
      followUpDate: "2024-02-05",
      createdAt: "2024-01-22",
      notes: "Experienced lifter. Wants advanced equipment and coaching.",
      branch: "Mumbai Central",
      age: 30,
      gender: "Male",
      lastContact: "2024-01-22",
      priority: "high",
      address: "Central Mumbai",
      occupation: "Gym Trainer",
      preferredTime: "Evening (5-7 PM)",
      budget: "₹7,000/month",
      healthIssues: "Shoulder injury (recovered)",
      fitnessGoal: "Increase powerlifting total",
      visitedBranch: "Yes",
      trialTaken: "Yes",
      communicationPreference: "Phone Call",
      familyMembersInterested: 0,
      leadScore: 88,
      lastActivity: "Trial session completed",
      nextAction: "Send custom training plan",
      tags: ["Powerlifting", "Advanced", "Equipment Focus"]
    },
    {
      id: 8,
      name: "Meera Nair",
      email: "meera.nair@gmail.com",
      phone: "+91 21098 76543",
      source: "Referral (Friend)",
      status: "qualified",
      interest: "Zumba & Dance Fitness",
      assignedTo: "Neha Patel",
      followUpDate: "2024-02-06",
      createdAt: "2024-01-21",
      notes: "Wants fun group classes. Interested in Zumba and Bollywood dance.",
      branch: "Andheri West",
      age: 26,
      gender: "Female",
      lastContact: "2024-01-21",
      priority: "medium",
      address: "Andheri West",
      occupation: "Teacher",
      preferredTime: "Weekends",
      budget: "₹2,500/month",
      healthIssues: "None",
      fitnessGoal: "Weight loss and fun exercise",
      visitedBranch: "Yes",
      trialTaken: "Yes",
      communicationPreference: "WhatsApp",
      familyMembersInterested: 3,
      leadScore: 78,
      lastActivity: "Trial class attended",
      nextAction: "Offer family discount",
      tags: ["Zumba", "Group Classes", "Family Package"]
    }
  ]);

  // Filter options
  const statusOptions = [
    { id: 'new', label: 'New', count: 2, color: 'blue' },
    { id: 'contacted', label: 'Contacted', count: 2, color: 'yellow' },
    { id: 'qualified', label: 'Qualified', count: 2, color: 'green' },
    { id: 'converted', label: 'Converted', count: 1, color: 'purple' },
    { id: 'lost', label: 'Lost', count: 1, color: 'red' }
  ];

  const sourceOptions = [
    { id: 'walk-in', label: 'Walk-in', count: 2 },
    { id: 'website', label: 'Website', count: 2 },
    { id: 'referral', label: 'Referral', count: 2 },
    { id: 'social-media', label: 'Social Media', count: 1 },
    { id: 'phone-call', label: 'Phone Call', count: 1 }
  ];

  // Stats calculation
  const stats = useMemo(() => {
    const total = leads.length;
    const newLeads = leads.filter(l => l.status === 'new').length;
    const contacted = leads.filter(l => l.status === 'contacted').length;
    const converted = leads.filter(l => l.status === 'converted').length;
    const conversionRate = ((converted / total) * 100).toFixed(1);
    
    const today = new Date().toISOString().split('T')[0];
    const todayFollowUps = leads.filter(l => l.followUpDate === today).length;
    
    const overdueFollowUps = leads.filter(l => {
      const followUpDate = new Date(l.followUpDate);
      const todayDate = new Date();
      return followUpDate < todayDate && l.status !== 'converted' && l.status !== 'lost';
    }).length;

    return {
      total,
      newLeads,
      contacted,
      converted,
      conversionRate: conversionRate + '%',
      todayFollowUps,
      overdueFollowUps
    };
  }, [leads]);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      
      // Update screen size states
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      
      // Update items per page based on screen size
      if (width < 640) { // Extra small devices (phones)
        setItemsPerPage(3);
      } else if (width < 768) { // Small devices
        setItemsPerPage(4);
      } else if (width < 1024) { // Medium devices (tablets)
        setItemsPerPage(6);
      } else { // Large devices
        setItemsPerPage(8);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Filter and sort leads
  const filteredAndSortedLeads = useMemo(() => {
    let filtered = [...leads];

    if (searchQuery) {
      filtered = filtered.filter(lead => 
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.phone.includes(searchQuery) ||
        lead.interest.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (activeFilters.status.length > 0) {
      filtered = filtered.filter(lead => 
        activeFilters.status.includes(lead.status)
      );
    }

    if (activeFilters.source.length > 0) {
      filtered = filtered.filter(lead => 
        activeFilters.source.includes(lead.source.toLowerCase().replace(/\s+/g, '-'))
      );
    }

    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'followup':
          return new Date(a.followUpDate) - new Date(b.followUpDate);
        case 'priority':
          const priorityOrder = { high: 1, medium: 2, low: 3 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        case 'recent':
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

    return filtered;
  }, [leads, searchQuery, activeFilters, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedLeads.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentLeads = filteredAndSortedLeads.slice(startIndex, endIndex);

  // Status colors and icons
  const statusColors = {
    new: 'bg-blue-100 text-blue-800 border-blue-200',
    contacted: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    qualified: 'bg-green-100 text-green-800 border-green-200',
    converted: 'bg-purple-100 text-purple-800 border-purple-200',
    lost: 'bg-red-100 text-red-800 border-red-200'
  };

  const statusIcons = {
    new: <User className="w-3 h-3 sm:w-4 sm:h-4" />,
    contacted: <Phone className="w-3 h-3 sm:w-4 sm:h-4" />,
    qualified: <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />,
    converted: <UserCheck className="w-3 h-3 sm:w-4 sm:h-4" />,
    lost: <UserX className="w-3 h-3 sm:w-4 sm:h-4" />
  };

  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-gray-100 text-gray-800'
  };

  // Helper functions
  const handleRowClick = (lead) => {
    setSelectedLead(lead);
    setShowLeadDetails(true);
  };

  const closeLeadDetails = () => {
    setShowLeadDetails(false);
    setSelectedLead(null);
  };

  const toggleLeadSelection = (id, e) => {
    e.stopPropagation();
    setSelectedLeads(prev => 
      prev.includes(id) 
        ? prev.filter(leadId => leadId !== id)
        : [...prev, id]
    );
  };

  const selectAllLeads = () => {
    if (selectedLeads.length === currentLeads.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(currentLeads.map(lead => lead.id));
    }
  };

  const toggleFilter = (type, value) => {
    setActiveFilters(prev => {
      const currentValues = prev[type];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [type]: currentValues.filter(v => v !== value)
        };
      } else {
        return {
          ...prev,
          [type]: [...currentValues, value]
        };
      }
    });
  };

  const clearAllFilters = () => {
    setActiveFilters({
      status: [],
      source: []
    });
    setSearchQuery('');
  };

  const handleDeleteLead = (id, e) => {
    if (e) e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this lead?')) {
      setLeads(prev => prev.filter(lead => lead.id !== id));
      setSelectedLeads(prev => prev.filter(leadId => leadId !== id));
      if (selectedLead?.id === id) {
        closeLeadDetails();
      }
    }
  };

  const handleBulkDelete = () => {
    if (selectedLeads.length === 0) return;
    
    if (window.confirm(`Are you sure you want to delete ${selectedLeads.length} leads?`)) {
      setLeads(prev => prev.filter(lead => !selectedLeads.includes(lead.id)));
      setSelectedLeads([]);
      if (selectedLead && selectedLeads.includes(selectedLead.id)) {
        closeLeadDetails();
      }
    }
  };

  const handleUpdateStatus = (id, newStatus, e) => {
    if (e) e.stopPropagation();
    setLeads(prev => prev.map(lead => 
      lead.id === id ? { ...lead, status: newStatus } : lead
    ));
    if (selectedLead?.id === id) {
      setSelectedLead(prev => ({ ...prev, status: newStatus }));
    }
  };

  const handleSendMessage = (type, lead, e) => {
    if (e) e.stopPropagation();
    if (type === 'sms') {
      const message = `Hi ${lead.name}, this is ${lead.assignedTo} from GymPro. ${lead.notes}`;
      alert(`SMS to ${lead.phone}: ${message}`);
    } else if (type === 'email') {
      const subject = `Follow-up from GymPro`;
      const body = `Dear ${lead.name},\n\n${lead.notes}\n\nBest regards,\n${lead.assignedTo}`;
      window.open(`mailto:${lead.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    }
  };

  const handleCall = (phone, e) => {
    if (e) e.stopPropagation();
    window.open(`tel:${phone}`, '_blank');
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Status', 'Source', 'Interest', 'Follow-up Date'];
    const csvData = filteredAndSortedLeads.map(lead => [
      lead.name,
      lead.email,
      lead.phone,
      lead.status,
      lead.source,
      lead.interest,
      lead.followUpDate
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isOverdue = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    return date < today;
  };

  const getLeadScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-1 md:p-3">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-4 md:p-5 lg:p-6 mb-4 sm:mb-5 md:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 sm:mb-5 md:mb-6">
          <div className="mb-3 sm:mb-4 lg:mb-0">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Leads Management</h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Track and manage potential members</p>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Link to={'/ultimate-control/leads/add'}>
              <button 
                className="flex items-center space-x-1 sm:space-x-2 bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm"
              >
                <UserPlus className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium">Add Lead</span>
              </button>
            </Link>
            <button 
              onClick={exportToCSV}
              className="flex items-center space-x-1 sm:space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Export</span>
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setFilterMenuOpen(!filterMenuOpen)}
              className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm"
            >
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Filter className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                <span className="text-gray-700">
                  Filters
                  {Object.values(activeFilters).flat().length > 0 && (
                    <span className="ml-1 sm:ml-2 bg-blue-600 text-white text-xs px-1 py-0.5 rounded-full">
                      {Object.values(activeFilters).flat().length}
                    </span>
                  )}
                </span>
              </div>
              <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-600 transition-transform ${filterMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {filterMenuOpen && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-3 sm:p-4">
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2 text-sm">Status</h4>
                    <div className="space-y-1 sm:space-y-2">
                      {statusOptions.map(option => (
                        <label key={option.id} className="flex items-center justify-between cursor-pointer text-sm">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              checked={activeFilters.status.includes(option.id)}
                              onChange={() => toggleFilter('status', option.id)}
                              className="rounded text-blue-600 w-3 h-3 sm:w-4 sm:h-4"
                            />
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <div className={`w-2 h-2 rounded-full bg-${option.color}-500`}></div>
                              <span className="text-gray-700">{option.label}</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                            {option.count}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2 text-sm">Source</h4>
                    <div className="space-y-1 sm:space-y-2">
                      {sourceOptions.map(option => (
                        <label key={option.id} className="flex items-center justify-between cursor-pointer text-sm">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              checked={activeFilters.source.includes(option.id)}
                              onChange={() => toggleFilter('source', option.id)}
                              className="rounded text-blue-600 w-3 h-3 sm:w-4 sm:h-4"
                            />
                            <span className="text-gray-700">{option.label}</span>
                          </div>
                          <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                            {option.count}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                  <button 
                    onClick={clearAllFilters}
                    className="text-xs sm:text-sm text-gray-600 hover:text-gray-800"
                  >
                    Clear All
                  </button>
                  <button 
                    onClick={() => setFilterMenuOpen(false)}
                    className="text-xs sm:text-sm bg-blue-600 text-white px-3 py-1.5 rounded"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 px-3 py-2 sm:px-4 sm:py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
            >
              <option value="recent">Most Recent</option>
              <option value="name">Name (A-Z)</option>
              <option value="followup">Follow-up Date</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>

        {/* Active Filters */}
        {Object.values(activeFilters).flat().length > 0 && (
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
            {activeFilters.status.map(status => (
              <span key={status} className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                {statusOptions.find(s => s.id === status)?.label}
                <button onClick={() => toggleFilter('status', status)} className="ml-1">
                  <X className="w-2 h-2 sm:w-3 sm:h-3" />
                </button>
              </span>
            ))}
            {activeFilters.source.map(source => (
              <span key={source} className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                {sourceOptions.find(s => s.id === source)?.label}
                <button onClick={() => toggleFilter('source', source)} className="ml-1">
                  <X className="w-2 h-2 sm:w-3 sm:h-3" />
                </button>
              </span>
            ))}
            <button 
              onClick={clearAllFilters}
              className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 ml-1 sm:ml-2"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-50 border-b border-gray-200 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <input
                type="checkbox"
                checked={selectedLeads.length > 0 && selectedLeads.length === currentLeads.length}
                onChange={selectAllLeads}
                className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
              />
              <span className="text-xs sm:text-sm text-gray-700">
                {selectedLeads.length > 0 
                  ? `${selectedLeads.length} selected` 
                  : `${filteredAndSortedLeads.length} leads`
                }
              </span>
            </div>
            
            {selectedLeads.length > 0 && (
              <div className="flex items-center space-x-2 sm:space-x-3">
                <button 
                  onClick={handleBulkDelete}
                  className="flex items-center space-x-1 text-red-600 hover:text-red-800 text-xs sm:text-sm"
                >
                  <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Leads Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left">
                  <span className="sr-only">Select</span>
                </th>
                <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {isMobile ? 'Lead Info' : 'Lead'}
                </th>
                {!isMobile && (
                  <>
                    <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Follow-up
                    </th>
                  </>
                )}
                <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentLeads.map(lead => (
                <tr 
                  key={lead.id} 
                  onClick={() => handleRowClick(lead)}
                  className="hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                >
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={selectedLeads.includes(lead.id)}
                      onChange={(e) => toggleLeadSelection(lead.id, e)}
                      className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
                    />
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center font-bold text-blue-700 text-xs sm:text-sm">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-2 sm:ml-3 md:ml-4">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="text-xs sm:text-sm font-medium text-gray-900 truncate max-w-[120px] sm:max-w-none">
                            {lead.name}
                          </div>
                          {!isMobile && (
                            <div className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${getLeadScoreColor(lead.leadScore)}`}>
                              {lead.leadScore} Score
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-gray-500 truncate max-w-[150px] sm:max-w-none">
                          {isMobile ? `${lead.interest} • ${lead.phone}` : lead.interest}
                        </div>
                        {!isMobile && (
                          <div className="text-xs text-gray-400 mt-1">
                            Source: {lead.source} • {formatDate(lead.createdAt)}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  {!isMobile && (
                    <>
                      <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                        <div className="text-xs sm:text-sm text-gray-900">{lead.phone}</div>
                        <div className="text-xs sm:text-sm text-gray-500 truncate max-w-[150px] md:max-w-[200px]">{lead.email}</div>
                        <div className="text-xs text-gray-400 mt-1">
                          Assigned to: {lead.assignedTo}
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                        <div className="space-y-1 sm:space-y-2">
                          <span className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium border ${statusColors[lead.status]}`}>
                            {statusIcons[lead.status]}
                            <span className="ml-1">{isMobile ? lead.status.charAt(0).toUpperCase() : lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}</span>
                          </span>
                          <div className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium ${priorityColors[lead.priority]}`}>
                            {isMobile ? lead.priority.charAt(0).toUpperCase() : lead.priority.charAt(0).toUpperCase() + lead.priority.slice(1)} Priority
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                        <div className={`flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm ${isOverdue(lead.followUpDate) && lead.status !== 'converted' && lead.status !== 'lost' ? 'text-red-600 font-medium' : 'text-gray-900'}`}>
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{isMobile ? formatDate(lead.followUpDate).split(' ')[0] : formatDate(lead.followUpDate)}</span>
                          {isOverdue(lead.followUpDate) && lead.status !== 'converted' && lead.status !== 'lost' && !isMobile && (
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">Overdue</span>
                          )}
                        </div>
                      </td>
                    </>
                  )}
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      {isMobile ? (
                        <MoreVertical className="w-4 h-4 text-gray-600" />
                      ) : (
                        <>
                          <button 
                            onClick={(e) => handleCall(lead.phone, e)}
                            className="p-1 sm:p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                            title="Call"
                          >
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <button 
                            onClick={(e) => handleSendMessage('sms', lead, e)}
                            className="p-1 sm:p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg"
                            title="SMS"
                          >
                            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <select 
                            value={lead.status}
                            onChange={(e) => handleUpdateStatus(lead.id, e.target.value, e)}
                            className="text-xs border border-gray-300 rounded px-1.5 py-0.5 sm:px-2 sm:py-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="qualified">Qualified</option>
                            <option value="converted">Converted</option>
                            <option value="lost">Lost</option>
                          </select>
                          <button 
                            onClick={(e) => handleDeleteLead(lead.id, e)}
                            className="p-1 sm:p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                            title="Delete"
                          >
                            <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No Results */}
        {currentLeads.length === 0 && (
          <div className="py-8 sm:py-12 text-center">
            <div className="mx-auto w-16 h-16 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <Users className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
            </div>
            <h3 className="text-sm sm:text-lg font-medium text-gray-900 mb-1 sm:mb-2">No leads found</h3>
            <p className="text-xs sm:text-gray-500 mb-4 sm:mb-6">Try adjusting your search or filters</p>
            <button 
              onClick={clearAllFilters}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredAndSortedLeads.length > 0 && (
          <div className="p-3 sm:p-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-0">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredAndSortedLeads.length)} of {filteredAndSortedLeads.length} leads
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-2 py-1 sm:px-3 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
                {[...Array(Math.min(3, totalPages))].map((_, index) => {
                  let page;
                  if (totalPages <= 3) {
                    page = index + 1;
                  } else if (currentPage <= 2) {
                    page = index + 1;
                  } else if (currentPage >= totalPages - 1) {
                    page = totalPages - 2 + index;
                  } else {
                    page = currentPage - 1 + index;
                  }
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-2 py-1 sm:px-3 sm:py-2 border rounded-lg text-xs sm:text-sm ${
                        page === currentPage
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
                {totalPages > 3 && (
                  <span className="px-2 py-1 sm:px-3 sm:py-2 text-gray-500">...</span>
                )}
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 sm:px-3 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lead Details Side Panel */}
      {showLeadDetails && selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl h-full overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{selectedLead.name}</h2>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Lead Details</p>
                </div>
                <button
                  onClick={closeLeadDetails}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Lead Info */}
            <div className="p-4 sm:p-6">
              {/* Status & Priority */}
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                <span className={`inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border ${statusColors[selectedLead.status]}`}>
                  {statusIcons[selectedLead.status]}
                  <span className="ml-1 sm:ml-2">{selectedLead.status.charAt(0).toUpperCase() + selectedLead.status.slice(1)}</span>
                </span>
                <span className={`inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${priorityColors[selectedLead.priority]}`}>
                  {selectedLead.priority.charAt(0).toUpperCase() + selectedLead.priority.slice(1)} Priority
                </span>
                <span className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${getLeadScoreColor(selectedLead.leadScore)}`}>
                  Score: {selectedLead.leadScore}
                </span>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-1 sm:mb-2">Contact Details</h3>
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="flex items-center text-gray-900 text-xs sm:text-sm">
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-gray-400" />
                        {selectedLead.phone}
                      </div>
                      <div className="flex items-center text-gray-900 text-xs sm:text-sm">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-gray-400" />
                        {selectedLead.email}
                      </div>
                      <div className="flex items-center text-gray-900 text-xs sm:text-sm">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-gray-400" />
                        {selectedLead.address}
                      </div>
                      <div className="flex items-center text-gray-900 text-xs sm:text-sm">
                        <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-gray-400" />
                        Branch: {selectedLead.branch}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-1 sm:mb-2">Personal Information</h3>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div>
                        <div className="text-xs text-gray-500">Age</div>
                        <div className="text-xs sm:text-sm font-medium">{selectedLead.age} years</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Gender</div>
                        <div className="text-xs sm:text-sm font-medium">{selectedLead.gender}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Occupation</div>
                        <div className="text-xs sm:text-sm font-medium">{selectedLead.occupation}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Budget</div>
                        <div className="text-xs sm:text-sm font-medium">{selectedLead.budget}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-1 sm:mb-2">Fitness Details</h3>
                    <div className="space-y-2 sm:space-y-3">
                      <div>
                        <div className="text-xs text-gray-500">Primary Interest</div>
                        <div className="text-xs sm:text-sm font-medium">{selectedLead.interest}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Fitness Goal</div>
                        <div className="text-xs sm:text-sm font-medium">{selectedLead.fitnessGoal}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Preferred Time</div>
                        <div className="text-xs sm:text-sm font-medium">{selectedLead.preferredTime}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Health Issues</div>
                        <div className="text-xs sm:text-sm font-medium">{selectedLead.healthIssues}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-1 sm:mb-2">Communication</h3>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="text-xs sm:text-sm">
                        <span className="text-gray-500">Preferred: </span>
                        <span className="font-medium">{selectedLead.communicationPreference}</span>
                      </div>
                      <div className="text-xs sm:text-sm">
                        <span className="text-gray-500">Family Interested: </span>
                        <span className="font-medium">{selectedLead.familyMembersInterested} members</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline & Important Dates */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-4">Timeline</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-gray-400" />
                      <div>
                        <div className="text-xs sm:text-sm font-medium">Created On</div>
                        <div className="text-xs text-gray-500">{formatDate(selectedLead.createdAt)}</div>
                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center justify-between p-2 sm:p-3 rounded-lg ${isOverdue(selectedLead.followUpDate) && selectedLead.status !== 'converted' && selectedLead.status !== 'lost' ? 'bg-red-50' : 'bg-blue-50'}`}>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-gray-400" />
                      <div>
                        <div className="text-xs sm:text-sm font-medium">Follow-up Date</div>
                        <div className="text-xs text-gray-500">{formatDate(selectedLead.followUpDate)}</div>
                      </div>
                    </div>
                    {isOverdue(selectedLead.followUpDate) && selectedLead.status !== 'converted' && selectedLead.status !== 'lost' && (
                      <span className="text-xs bg-red-100 text-red-800 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">Overdue</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-gray-400" />
                      <div>
                        <div className="text-xs sm:text-sm font-medium">Last Contact</div>
                        <div className="text-xs text-gray-500">{formatDate(selectedLead.lastContact)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes & Details */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3">Notes & Details</h3>
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-gray-700">{selectedLead.notes}</p>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3">Additional Information</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-2 sm:p-3">
                      <div className="text-xs text-gray-500">Source</div>
                      <div className="text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">{selectedLead.source}</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-2 sm:p-3">
                      <div className="text-xs text-gray-500">Assigned To</div>
                      <div className="text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">{selectedLead.assignedTo}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-2 sm:p-3">
                      <div className="text-xs text-gray-500">Branch Visit</div>
                      <div className="text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">{selectedLead.visitedBranch}</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-2 sm:p-3">
                      <div className="text-xs text-gray-500">Trial Session</div>
                      <div className="text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">{selectedLead.trialTaken}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              {selectedLead.tags && selectedLead.tags.length > 0 && (
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedLead.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Next Action */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3">Next Action Required</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center">
                    <TargetIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 mr-2 sm:mr-3" />
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-yellow-800">{selectedLead.nextAction}</div>
                      <div className="text-xs text-yellow-600 mt-0.5 sm:mt-1">Follow up by {formatDate(selectedLead.followUpDate)}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-gray-200 pt-4 sm:pt-6">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={(e) => handleCall(selectedLead.phone, e)}
                    className="flex items-center space-x-1.5 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-xs sm:text-sm"
                  >
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Call Now</span>
                  </button>
                  <button
                    onClick={(e) => handleSendMessage('sms', selectedLead, e)}
                    className="flex items-center space-x-1.5 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-xs sm:text-sm"
                  >
                    <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Send SMS</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <select 
                    value={selectedLead.status}
                    onChange={(e) => handleUpdateStatus(selectedLead.id, e.target.value, e)}
                    className="text-xs sm:text-sm border border-gray-300 rounded px-2 py-1.5 sm:px-3 sm:py-2"
                  >
                    <option value="new">Mark as New</option>
                    <option value="contacted">Mark as Contacted</option>
                    <option value="qualified">Mark as Qualified</option>
                    <option value="converted">Mark as Converted</option>
                    <option value="lost">Mark as Lost</option>
                  </select>
                  <button
                    onClick={(e) => handleDeleteLead(selectedLead.id, e)}
                    className="flex items-center space-x-1.5 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 text-xs sm:text-sm"
                  >
                    <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllLeads;