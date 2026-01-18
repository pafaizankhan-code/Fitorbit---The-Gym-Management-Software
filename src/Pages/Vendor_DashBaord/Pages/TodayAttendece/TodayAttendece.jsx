import React, { useState, useEffect } from 'react';
import {
Users,
UserCheck,
UserX,
Clock,
Calendar,
Search,
Filter,
MoreVertical,
CheckCircle,
XCircle,
AlertCircle,
TrendingUp,
Download,
Printer,
RefreshCw,
ChevronDown,
ChevronRight,
Phone,
Mail,
Smartphone,
MapPin,
Activity,
BarChart,
PieChart,
LineChart,
Eye,
Edit,
Trash2,
Plus,
ArrowLeft,
Bell,
Shield,
Target,
Zap,
Crown,
Star,
Award,
IndianRupee,
CreditCard,
Tag,
Check,
X,
QrCode,
Camera,
UserPlus,
Clock as ClockIcon,
Calendar as CalendarIcon,
ChevronLeft,
ChevronRight as ChevronRightIcon
} from 'lucide-react';

const TodayAttendance = () => {
const [attendanceData, setAttendanceData] = useState([
  {
    id: 1,
    name: "Rajesh Kumar",
    membershipId: "FIT001-RK",
    plan: "Premium Plus",
    checkInTime: "06:30 AM",
    checkOutTime: "08:15 AM",
    duration: "1h 45m",
    status: "present",
    phone: "+91 98765 43210",
    email: "rajesh.kumar@gmail.com",
    trainer: "Aarav Sharma",
    branch: "Mumbai Central",
    photo: "RK",
    category: "Premium",
    lastCheckIn: "Yesterday, 06:45 AM",
    attendanceStreak: 28,
    paymentStatus: "paid"
  },
  {
    id: 2,
    name: "Priya Sharma",
    membershipId: "FIT002-PS",
    plan: "Standard",
    checkInTime: "07:15 AM",
    checkOutTime: "09:00 AM",
    duration: "1h 45m",
    status: "present",
    phone: "+91 87654 32109",
    email: "priya.sharma@yahoo.com",
    trainer: "Neha Patel",
    branch: "Andheri West",
    photo: "PS",
    category: "Standard",
    lastCheckIn: "Yesterday, 07:30 AM",
    attendanceStreak: 15,
    paymentStatus: "paid"
  },
  {
    id: 3,
    name: "Amit Patel",
    membershipId: "FIT003-AP",
    plan: "Basic",
    checkInTime: "08:00 AM",
    checkOutTime: "09:30 AM",
    duration: "1h 30m",
    status: "present",
    phone: "+91 76543 21098",
    email: "amit.patel@hotmail.com",
    trainer: "Rohan Singh",
    branch: "Bandra",
    photo: "AP",
    category: "Basic",
    lastCheckIn: "2 days ago",
    attendanceStreak: 8,
    paymentStatus: "pending"
  },
  {
    id: 4,
    name: "Sneha Verma",
    membershipId: "FIT004-SV",
    plan: "Premium Plus",
    checkInTime: "09:45 AM",
    checkOutTime: "11:30 AM",
    duration: "1h 45m",
    status: "present",
    phone: "+91 65432 10987",
    email: "sneha.verma@gmail.com",
    trainer: "Aarav Sharma",
    branch: "Mumbai Central",
    photo: "SV",
    category: "Premium",
    lastCheckIn: "Yesterday, 10:00 AM",
    attendanceStreak: 32,
    paymentStatus: "paid"
  },
  {
    id: 5,
    name: "Vikram Singh",
    membershipId: "FIT005-VS",
    plan: "Standard",
    checkInTime: "",
    checkOutTime: "",
    duration: "",
    status: "absent",
    phone: "+91 54321 09876",
    email: "vikram.singh@gmail.com",
    trainer: "Neha Patel",
    branch: "Andheri West",
    photo: "VS",
    category: "Standard",
    lastCheckIn: "3 days ago",
    attendanceStreak: 0,
    paymentStatus: "overdue"
  },
  {
    id: 6,
    name: "Anjali Reddy",
    membershipId: "FIT006-AR",
    plan: "Elite",
    checkInTime: "10:15 AM",
    checkOutTime: "12:45 PM",
    duration: "2h 30m",
    status: "present",
    phone: "+91 43210 98765",
    email: "anjali.reddy@gmail.com",
    trainer: "Rohan Singh",
    branch: "Bandra",
    photo: "AR",
    category: "Elite",
    lastCheckIn: "Yesterday, 10:30 AM",
    attendanceStreak: 45,
    paymentStatus: "paid"
  },
  {
    id: 7,
    name: "Karan Malhotra",
    membershipId: "FIT007-KM",
    plan: "Basic",
    checkInTime: "11:00 AM",
    checkOutTime: "",
    duration: "Still here",
    status: "present",
    phone: "+91 32109 87654",
    email: "karan.malhotra@gmail.com",
    trainer: "Aarav Sharma",
    branch: "Mumbai Central",
    photo: "KM",
    category: "Basic",
    lastCheckIn: "Yesterday, 11:15 AM",
    attendanceStreak: 5,
    paymentStatus: "paid"
  },
  {
    id: 8,
    name: "Meera Kapoor",
    membershipId: "FIT008-MK",
    plan: "Premium Plus",
    checkInTime: "04:30 PM",
    checkOutTime: "",
    duration: "Expected soon",
    status: "expected",
    phone: "+91 21098 76543",
    email: "meera.kapoor@gmail.com",
    trainer: "Neha Patel",
    branch: "Andheri West",
    photo: "MK",
    category: "Premium",
    lastCheckIn: "Yesterday, 04:45 PM",
    attendanceStreak: 25,
    paymentStatus: "paid"
  },
  {
    id: 9,
    name: "Rahul Mehta",
    membershipId: "FIT009-RM",
    plan: "Yearly",
    checkInTime: "",
    checkOutTime: "",
    duration: "",
    status: "on-leave",
    phone: "+91 10987 65432",
    email: "rahul.mehta@gmail.com",
    trainer: "Rohan Singh",
    branch: "Bandra",
    photo: "RM",
    category: "Regular",
    lastCheckIn: "Yesterday",
    attendanceStreak: 12,
    paymentStatus: "paid"
  },
  {
    id: 10,
    name: "Neha Gupta",
    membershipId: "FIT010-NG",
    plan: "Monthly",
    checkInTime: "05:15 PM",
    checkOutTime: "06:45 PM",
    duration: "1h 30m",
    status: "present",
    phone: "+91 09876 54321",
    email: "neha.gupta@gmail.com",
    trainer: "Aarav Sharma",
    branch: "Mumbai Central",
    photo: "NG",
    category: "Regular",
    lastCheckIn: "Yesterday, 05:30 PM",
    attendanceStreak: 18,
    paymentStatus: "paid"
  }
]);

const [searchQuery, setSearchQuery] = useState('');
const [filterStatus, setFilterStatus] = useState('all');
const [filterBranch, setFilterBranch] = useState('all');
const [filterTrainer, setFilterTrainer] = useState('all');
const [viewMode, setViewMode] = useState('list');
const [selectedMembers, setSelectedMembers] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(8);
const [showCheckInModal, setShowCheckInModal] = useState(false);
const [showBulkActions, setShowBulkActions] = useState(false);
const [isMobile, setIsMobile] = useState(false);

// Detect screen size
useEffect(() => {
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth < 640) {
      setItemsPerPage(5);
    } else if (window.innerWidth < 1024) {
      setItemsPerPage(8);
    } else {
      setItemsPerPage(10);
    }
  };

  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
  return () => window.removeEventListener('resize', checkScreenSize);
}, []);

// Statistics
const stats = {
  totalMembers: attendanceData.length,
  present: attendanceData.filter(m => m.status === 'present').length,
  absent: attendanceData.filter(m => m.status === 'absent').length,
  expected: attendanceData.filter(m => m.status === 'expected').length,
  onLeave: attendanceData.filter(m => m.status === 'on-leave').length,
  avgDuration: "1h 42m",
  peakHour: "06:30 AM - 08:00 AM",
  attendanceRate: Math.round((attendanceData.filter(m => m.status === 'present').length / attendanceData.length) * 100)
};

// Status colors
const statusColors = {
  present: 'bg-green-100 text-green-800 border-green-200',
  absent: 'bg-red-100 text-red-800 border-red-200',
  expected: 'bg-blue-100 text-blue-800 border-blue-200',
  'on-leave': 'bg-yellow-100 text-yellow-800 border-yellow-200'
};

// Category colors
const categoryColors = {
  Elite: 'bg-purple-100 text-purple-800 border-purple-200',
  Premium: 'bg-blue-100 text-blue-800 border-blue-200',
  Standard: 'bg-green-100 text-green-800 border-green-200',
  Basic: 'bg-gray-100 text-gray-800 border-gray-200',
  Regular: 'bg-indigo-100 text-indigo-800 border-indigo-200'
};

// Payment status colors
const paymentStatusColors = {
  paid: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  overdue: 'bg-red-100 text-red-800'
};

// Branches
const branches = [
  { id: 'all', label: 'All Branches', count: attendanceData.length },
  { id: 'Mumbai Central', label: 'Mumbai Central', count: attendanceData.filter(m => m.branch === 'Mumbai Central').length },
  { id: 'Andheri West', label: 'Andheri West', count: attendanceData.filter(m => m.branch === 'Andheri West').length },
  { id: 'Bandra', label: 'Bandra', count: attendanceData.filter(m => m.branch === 'Bandra').length }
];

// Trainers
const trainers = [
  { id: 'all', label: 'All Trainers', count: attendanceData.length },
  { id: 'Aarav Sharma', label: 'Aarav Sharma', count: attendanceData.filter(m => m.trainer === 'Aarav Sharma').length },
  { id: 'Neha Patel', label: 'Neha Patel', count: attendanceData.filter(m => m.trainer === 'Neha Patel').length },
  { id: 'Rohan Singh', label: 'Rohan Singh', count: attendanceData.filter(m => m.trainer === 'Rohan Singh').length }
];

// Status options
const statusOptions = [
  { id: 'all', label: 'All Status', count: attendanceData.length, icon: Users },
  { id: 'present', label: 'Present', count: stats.present, icon: UserCheck },
  { id: 'absent', label: 'Absent', count: stats.absent, icon: UserX },
  { id: 'expected', label: 'Expected', count: stats.expected, icon: Clock },
  { id: 'on-leave', label: 'On Leave', count: stats.onLeave, icon: Calendar }
];

// Filter attendance data
const filteredData = attendanceData.filter(member => {
  const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        member.membershipId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        member.phone.includes(searchQuery);
  
  const matchesStatus = filterStatus === 'all' || member.status === filterStatus;
  const matchesBranch = filterBranch === 'all' || member.branch === filterBranch;
  const matchesTrainer = filterTrainer === 'all' || member.trainer === filterTrainer;
  
  return matchesSearch && matchesStatus && matchesBranch && matchesTrainer;
});

// Pagination
const totalPages = Math.ceil(filteredData.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentData = filteredData.slice(startIndex, endIndex);

// Helper functions
const toggleMemberSelection = (id) => {
  setSelectedMembers(prev => 
    prev.includes(id) 
      ? prev.filter(memberId => memberId !== id)
      : [...prev, id]
  );
};

const selectAllMembers = () => {
  if (selectedMembers.length === currentData.length) {
    setSelectedMembers([]);
  } else {
    setSelectedMembers(currentData.map(member => member.id));
  }
};

const handleCheckIn = (memberId) => {
  const currentTime = new Date();
  const timeString = currentTime.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });

  setAttendanceData(prev => prev.map(member => 
    member.id === memberId 
      ? { 
          ...member, 
          status: 'present',
          checkInTime: timeString,
          duration: 'Still here',
          attendanceStreak: member.attendanceStreak + 1
        }
      : member
  ));
};

const handleCheckOut = (memberId) => {
  const currentTime = new Date();
  const timeString = currentTime.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });

  setAttendanceData(prev => prev.map(member => 
    member.id === memberId 
      ? { 
          ...member, 
          checkOutTime: timeString,
          duration: calculateDuration(member.checkInTime, timeString)
        }
      : member
  ));
};

const calculateDuration = (startTime, endTime) => {
  if (!startTime || !endTime) return '';
  
  const start = new Date(`2000/01/01 ${startTime}`);
  const end = new Date(`2000/01/01 ${endTime}`);
  const diff = end - start;
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  return `${hours}h ${minutes}m`;
};

const handleMarkAbsent = (memberId) => {
  setAttendanceData(prev => prev.map(member => 
    member.id === memberId 
      ? { ...member, status: 'absent', checkInTime: '', checkOutTime: '', duration: '' }
      : member
  ));
};

const handleMarkPresent = (memberId) => {
  const currentTime = new Date();
  const timeString = currentTime.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });

  setAttendanceData(prev => prev.map(member => 
    member.id === memberId 
      ? { 
          ...member, 
          status: 'present',
          checkInTime: timeString,
          checkOutTime: '',
          duration: 'Still here',
          attendanceStreak: member.attendanceStreak + 1
        }
      : member
  ));
};

const getStatusIcon = (status) => {
  switch(status) {
    case 'present': return <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />;
    case 'absent': return <XCircle className="w-3 h-3 sm:w-4 sm:h-4" />;
    case 'expected': return <Clock className="w-3 h-3 sm:w-4 sm:h-4" />;
    case 'on-leave': return <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />;
    default: return <UserCheck className="w-3 h-3 sm:w-4 sm:h-4" />;
  }
};

// Export to CSV
const exportToCSV = () => {
  const headers = ['Name', 'Membership ID', 'Status', 'Check-in Time', 'Check-out Time', 'Duration', 'Branch', 'Trainer'];
  const csvData = filteredData.map(member => [
    member.name,
    member.membershipId,
    member.status,
    member.checkInTime || '-',
    member.checkOutTime || '-',
    member.duration || '-',
    member.branch,
    member.trainer
  ]);

  const csvContent = [
    headers.join(','),
    ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `attendance_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};

// Get time of day greeting
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
};

return (
  <div className="min-h-screen bg-gray-50 p-3 ">
    {/* Header */}
  <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-5 md:p-6 mb-5 sm:mb-6">
{/* Main row - Title + Actions */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-6 mb-5 sm:mb-6">
  {/* Left: Title + subtitle + date */}
  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
  

    <div>
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
        Today's Attendance
      </h1>
      <p className="text-sm sm:text-base text-gray-600 mt-1">
        {getGreeting()} • {new Date().toLocaleDateString('en-IN', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>
    </div>
  </div>

  {/* Right: Action buttons */}
  <div className="flex flex-wrap gap-2 sm:gap-3">
    <button
      onClick={() => setShowCheckInModal(true)}
      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2.5 rounded-lg font-medium text-sm sm:text-base transition-colors shadow-sm"
    >
      <UserPlus className="w-4 h-4" />
      Quick Check-in
    </button>

    <button
      onClick={exportToCSV}
      className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 hover:border-gray-400 font-medium text-sm sm:text-base transition-colors"
    >
      <Download className="w-4 h-4" />
      Export
    </button>

    {!isMobile && (
      <button
        onClick={() => window.print()}
        className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 hover:border-gray-400 font-medium text-sm sm:text-base transition-colors"
      >
        <Printer className="w-4 h-4" />
        Print
      </button>
    )}
  </div>
</div>


</div>

    {/* Search and Filters */}
    <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-4 mb-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, ID, or phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Branch Filter */}
        <div>
          <select
            value={filterBranch}
            onChange={(e) => setFilterBranch(e.target.value)}
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {branches.map(branch => (
              <option key={branch.id} value={branch.id}>
                {branch.label} ({branch.count})
              </option>
            ))}
          </select>
        </div>

        {/* Trainer Filter */}
        <div>
          <select
            value={filterTrainer}
            onChange={(e) => setFilterTrainer(e.target.value)}
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {trainers.map(trainer => (
              <option key={trainer.id} value={trainer.id}>
                {trainer.label} ({trainer.count})
              </option>
            ))}
          </select>
        </div>

        {/* View Toggle and Actions */}
        <div className="flex items-center space-x-2">
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
            >
              <div className="flex flex-col space-y-0.5 w-4 h-4">
                <div className="bg-current h-0.5 rounded-sm"></div>
                <div className="bg-current h-0.5 rounded-sm"></div>
                <div className="bg-current h-0.5 rounded-sm"></div>
              </div>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
            >
              <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
              </div>
            </button>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <RefreshCw className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Active Filters */}
      {(filterStatus !== 'all' || filterBranch !== 'all' || filterTrainer !== 'all') && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-600">Active filters:</span>
            
            {filterStatus !== 'all' && (
              <span className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                Status: {statusOptions.find(s => s.id === filterStatus)?.label}
                <button onClick={() => setFilterStatus('all')} className="ml-1">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            
            {filterBranch !== 'all' && (
              <span className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                Branch: {branches.find(b => b.id === filterBranch)?.label}
                <button onClick={() => setFilterBranch('all')} className="ml-1">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            
            {filterTrainer !== 'all' && (
              <span className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                Trainer: {trainers.find(t => t.id === filterTrainer)?.label}
                <button onClick={() => setFilterTrainer('all')} className="ml-1">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            
            <button
              onClick={() => {
                setFilterStatus('all');
                setFilterBranch('all');
                setFilterTrainer('all');
              }}
              className="text-xs text-blue-600 hover:text-blue-800"
            >
              Clear all
            </button>
          </div>
        </div>
      )}
    </div>

  

    {/* Main Attendance Table/Grid */}
    <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden">
      {/* Table Header */}
      <div className="bg-gray-50 border-b border-gray-200 p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={selectedMembers.length > 0 && selectedMembers.length === currentData.length}
              onChange={selectAllMembers}
              className="w-4 h-4 text-blue-600 rounded border-gray-300"
            />
            <span className="text-sm text-gray-700">
              {selectedMembers.length > 0 
                ? `${selectedMembers.length} selected` 
                : `${filteredData.length} members`
              }
            </span>
          </div>
          
          {selectedMembers.length > 0 && (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowBulkActions(!showBulkActions)}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                Bulk Actions
              </button>
              <button
                onClick={() => {
                  selectedMembers.forEach(id => handleMarkAbsent(id));
                  setSelectedMembers([]);
                }}
                className="text-xs text-red-600 hover:text-red-800"
              >
                Mark Absent
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bulk Actions Menu */}
      {showBulkActions && selectedMembers.length > 0 && (
        <div className="bg-blue-50 border-b border-blue-100 p-3">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                selectedMembers.forEach(id => handleMarkPresent(id));
                setSelectedMembers([]);
                setShowBulkActions(false);
              }}
              className="px-3 py-1.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-xs"
            >
              Mark Present
            </button>
            <button
              onClick={() => {
                selectedMembers.forEach(id => {
                  const member = attendanceData.find(m => m.id === id);
                  if (member && member.checkInTime && !member.checkOutTime) {
                    handleCheckOut(id);
                  }
                });
                setSelectedMembers([]);
                setShowBulkActions(false);
              }}
              className="px-3 py-1.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-xs"
            >
              Mark Check-out
            </button>
            <button
              onClick={() => {
                // Send SMS reminder
                const selectedNumbers = attendanceData
                  .filter(m => selectedMembers.includes(m.id))
                  .map(m => m.phone);
                alert(`Sending SMS to ${selectedNumbers.length} members`);
                setSelectedMembers([]);
                setShowBulkActions(false);
              }}
              className="px-3 py-1.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-xs"
            >
              Send SMS Reminder
            </button>
          </div>
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Member
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check-in / Check-out
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Branch & Trainer
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map(member => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedMembers.includes(member.id)}
                        onChange={() => toggleMemberSelection(member.id)}
                        className="w-4 h-4 text-blue-600 rounded border-gray-300 mr-3"
                      />
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm ${
                          member.category === 'Elite' ? 'bg-purple-600' :
                          member.category === 'Premium' ? 'bg-blue-600' :
                          member.category === 'Standard' ? 'bg-green-600' :
                          'bg-gray-600'
                        }`}>
                          {member.photo}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{member.name}</div>
                          <div className="text-xs text-gray-500">{member.membershipId}</div>
                          <div className="text-xs text-gray-400 flex items-center mt-0.5">
                            <Smartphone className="w-2.5 h-2.5 mr-1" />
                            {member.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col space-y-1">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[member.status]}`}>
                        {getStatusIcon(member.status)}
                        <span className="ml-1">{member.status.charAt(0).toUpperCase() + member.status.slice(1)}</span>
                      </span>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${paymentStatusColors[member.paymentStatus]}`}>
                        {member.paymentStatus}
                      </span>
                      <div className="text-xs text-gray-500">
                        Streak: {member.attendanceStreak} days
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Clock className="w-3 h-3 text-green-600 mr-1.5" />
                        <span className="font-medium">{member.checkInTime || 'Not checked in'}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-3 h-3 text-red-600 mr-1.5" />
                        <span className="font-medium">{member.checkOutTime || 'Not checked out'}</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Last: {member.lastCheckIn}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-gray-900">{member.duration || '-'}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <MapPin className="w-3 h-3 text-gray-400 mr-1.5" />
                        {member.branch}
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="w-3 h-3 text-gray-400 mr-1.5" />
                        {member.trainer}
                      </div>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${categoryColors[member.category]}`}>
                        {member.plan}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-1">
                      {member.status === 'present' && !member.checkOutTime ? (
                        <button
                          onClick={() => handleCheckOut(member.id)}
                          className="p-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                          title="Check-out"
                        >
                          <ClockIcon className="w-4 h-4" />
                        </button>
                      ) : member.status !== 'present' ? (
                        <button
                          onClick={() => handleCheckIn(member.id)}
                          className="p-1.5 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg"
                          title="Check-in"
                        >
                          <CheckCircle className="w-4 h-4" />
                        </button>
                      ) : null}
                      
                      {member.status === 'absent' && (
                        <button
                          onClick={() => handleMarkPresent(member.id)}
                          className="p-1.5 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg"
                          title="Mark Present"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                      )}
                      
                      {member.status === 'present' && (
                        <button
                          onClick={() => handleMarkAbsent(member.id)}
                          className="p-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                          title="Mark Absent"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                      )}
                      
                      <button
                        onClick={() => window.open(`tel:${member.phone}`)}
                        className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                        title="Call"
                      >
                        <Phone className="w-4 h-4" />
                      </button>
                      
                      <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-3">
          {currentData.map(member => (
            <div key={member.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors">
              {/* Card Header */}
              <div className="p-3 border-b border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedMembers.includes(member.id)}
                      onChange={() => toggleMemberSelection(member.id)}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 mr-2"
                    />
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-sm ${
                      member.category === 'Elite' ? 'bg-purple-600' :
                      member.category === 'Premium' ? 'bg-blue-600' :
                      member.category === 'Standard' ? 'bg-green-600' :
                      'bg-gray-600'
                    }`}>
                      {member.photo}
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-gray-900 text-sm">{member.name}</div>
                      <div className="text-xs text-gray-500">{member.membershipId}</div>
                    </div>
                  </div>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVertical className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3">
                {/* Status */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[member.status]}`}>
                    {getStatusIcon(member.status)}
                    <span className="ml-1">{member.status.charAt(0).toUpperCase() + member.status.slice(1)}</span>
                  </span>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${categoryColors[member.category]}`}>
                    {member.category}
                  </span>
                </div>

                {/* Time Info */}
                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">Check-in:</span>
                    <span className="font-medium">{member.checkInTime || 'Not checked in'}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">Check-out:</span>
                    <span className="font-medium">{member.checkOutTime || 'Not checked out'}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{member.duration || '-'}</span>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="text-xs text-gray-500 space-y-1">
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {member.branch}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {member.trainer}
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Streak: {member.attendanceStreak} days</span>
                    <span className={`px-1.5 py-0.5 rounded ${paymentStatusColors[member.paymentStatus]}`}>
                      {member.paymentStatus}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-3 border-t border-gray-100 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {member.status === 'present' && !member.checkOutTime ? (
                      <button
                        onClick={() => handleCheckOut(member.id)}
                        className="px-2 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
                      >
                        Check-out
                      </button>
                    ) : member.status !== 'present' ? (
                      <button
                        onClick={() => handleCheckIn(member.id)}
                        className="px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700"
                      >
                        Check-in
                      </button>
                    ) : null}
                    
                    <button
                      onClick={() => window.open(`tel:${member.phone}`)}
                      className="p-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded"
                      title="Call"
                    >
                      <Phone className="w-3 h-3" />
                    </button>
                  </div>
                  
                  {member.status === 'absent' && (
                    <button
                      onClick={() => handleMarkPresent(member.id)}
                      className="text-xs text-green-600 hover:text-green-800"
                    >
                      Mark Present
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {filteredData.length === 0 && (
        <div className="py-8 text-center">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
            <UserX className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-sm font-medium text-gray-900 mb-1">No attendance records found</h3>
          <p className="text-xs text-gray-500 mb-4">Try adjusting your search or filters</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setFilterStatus('all');
              setFilterBranch('all');
              setFilterTrainer('all');
            }}
            className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {filteredData.length > 0 && (
        <div className="border-t border-gray-200 p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-0">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length} members
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-1.5 sm:p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              
              {[...Array(Math.min(3, totalPages))].map((_, index) => {
                let page;
                if (totalPages <= 3) {
                  page = index + 1;
                } else if (currentPage === 1) {
                  page = index + 1;
                } else if (currentPage === totalPages) {
                  page = totalPages - 2 + index;
                } else {
                  page = currentPage - 1 + index;
                }
                
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border rounded-lg text-xs ${
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
                <span className="px-2 text-gray-500">...</span>
              )}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-1.5 sm:p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRightIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

    {/* Bottom Summary Bar */}
    <div className="mt-4 bg-white rounded-lg sm:rounded-xl border border-gray-200 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div className="text-sm text-gray-700 mb-2 sm:mb-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></div>
              <span>Present: {stats.present}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-1.5"></div>
              <span>Absent: {stats.absent}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-1.5"></div>
              <span>Expected: {stats.expected}</span>
            </div>
          </div>
        </div>
        <div className="text-sm font-medium text-gray-900">
          Today's Attendance Rate: <span className="text-green-600">{stats.attendanceRate}%</span>
        </div>
      </div>
    </div>

    {/* Check-in Modal */}
    {showCheckInModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl w-full max-w-md">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Quick Check-in</h3>
              <button
                onClick={() => setShowCheckInModal(false)}
                className="p-1 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
          
          <div className="p-4 sm:p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Scan QR Code or Enter Membership ID
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter membership ID or scan QR"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
                <QrCode className="w-16 h-16 text-gray-400 mb-3" />
                <p className="text-sm text-gray-600 mb-2">Scan QR code from member's app</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                  Open Camera Scanner
                </button>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Recent Check-ins</h4>
                <div className="space-y-2">
                  {attendanceData.slice(0, 3).map(member => (
                    <div key={member.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm ${
                          member.category === 'Elite' ? 'bg-purple-600' :
                          member.category === 'Premium' ? 'bg-blue-600' :
                          member.category === 'Standard' ? 'bg-green-600' :
                          'bg-gray-600'
                        }`}>
                          {member.photo}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{member.name}</div>
                          <div className="text-xs text-gray-500">{member.membershipId}</div>
                        </div>
                      </div>
                      <span className="text-xs text-green-600 font-medium">Checked in</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 sm:p-6 border-t border-gray-200">
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowCheckInModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                Complete Check-in
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);
};

export default TodayAttendance;