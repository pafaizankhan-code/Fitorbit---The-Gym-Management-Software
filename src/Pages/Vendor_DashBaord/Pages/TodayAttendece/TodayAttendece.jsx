import React, { useState, useEffect, useRef } from 'react';
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
  ChevronRight as ChevronRightIcon,
  Fingerprint,
  Wifi,
  WifiOff,
  Cpu,
  HardDrive,
  Server,
  Radio,
  Bluetooth,
  Network,
  Database,
  Cctv,
  Shield as ShieldIcon,
  Key,
  RadioTower,
  Zap as ZapIcon,
  AlertTriangle,
  Battery,
  Power,
  Settings,
  RefreshCw as RefreshCwIcon
} from 'lucide-react';

const TodayAttendece = () => {
  // State Management
  const [attendanceData, setAttendanceData] = useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      membershipId: "FIT001-RK",
      employeeId: "EMP2024001",
      fingerprintId: "FP001",
      rfidTag: "RFID001",
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
      paymentStatus: "paid",
      checkInMethod: "fingerprint",
      checkInDevice: "Gate 1 - Biometric",
      checkOutMethod: "rfid",
      checkOutDevice: "Gate 2 - RFID"
    },
    {
      id: 2,
      name: "Priya Sharma",
      membershipId: "FIT002-PS",
      employeeId: "EMP2024002",
      fingerprintId: "FP002",
      rfidTag: "RFID002",
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
      paymentStatus: "paid",
      checkInMethod: "rfid",
      checkInDevice: "Main Gate - RFID",
      checkOutMethod: "fingerprint",
      checkOutDevice: "Gate 3 - Biometric"
    },
    {
      id: 3,
      name: "Amit Patel",
      membershipId: "FIT003-AP",
      employeeId: "EMP2024003",
      fingerprintId: "FP003",
      rfidTag: "RFID003",
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
      paymentStatus: "pending",
      checkInMethod: "fingerprint",
      checkInDevice: "Gate 1 - Biometric",
      checkOutMethod: "fingerprint",
      checkOutDevice: "Gate 1 - Biometric"
    },
    {
      id: 4,
      name: "Sneha Verma",
      membershipId: "FIT004-SV",
      employeeId: "EMP2024004",
      fingerprintId: "FP004",
      rfidTag: "RFID004",
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
      paymentStatus: "paid",
      checkInMethod: "fingerprint",
      checkInDevice: "Gate 2 - Biometric",
      checkOutMethod: "rfid",
      checkOutDevice: "Main Gate - RFID"
    },
    {
      id: 5,
      name: "Vikram Singh",
      membershipId: "FIT005-VS",
      employeeId: "EMP2024005",
      fingerprintId: "FP005",
      rfidTag: "RFID005",
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
      paymentStatus: "overdue",
      checkInMethod: "",
      checkInDevice: "",
      checkOutMethod: "",
      checkOutDevice: ""
    },
    {
      id: 6,
      name: "Anjali Reddy",
      membershipId: "FIT006-AR",
      employeeId: "EMP2024006",
      fingerprintId: "FP006",
      rfidTag: "RFID006",
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
      paymentStatus: "paid",
      checkInMethod: "rfid",
      checkInDevice: "Main Gate - RFID",
      checkOutMethod: "fingerprint",
      checkOutDevice: "Gate 1 - Biometric"
    },
    {
      id: 7,
      name: "Karan Malhotra",
      membershipId: "FIT007-KM",
      employeeId: "EMP2024007",
      fingerprintId: "FP007",
      rfidTag: "RFID007",
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
      paymentStatus: "paid",
      checkInMethod: "fingerprint",
      checkInDevice: "Gate 3 - Biometric",
      checkOutMethod: "",
      checkOutDevice: ""
    },
    {
      id: 8,
      name: "Meera Kapoor",
      membershipId: "FIT008-MK",
      employeeId: "EMP2024008",
      fingerprintId: "FP008",
      rfidTag: "RFID008",
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
      paymentStatus: "paid",
      checkInMethod: "rfid",
      checkInDevice: "Main Gate - RFID",
      checkOutMethod: "",
      checkOutDevice: ""
    }
  ]);

  // Device States
  const [devices, setDevices] = useState([
    { id: 1, name: "Gate 1 - Biometric", type: "fingerprint", status: "online", location: "Main Entrance", ip: "192.168.1.101", lastSync: "Just now" },
    { id: 2, name: "Gate 2 - RFID", type: "rfid", status: "online", location: "Side Entrance", ip: "192.168.1.102", lastSync: "2 mins ago" },
    { id: 3, name: "Gate 3 - Biometric", type: "fingerprint", status: "offline", location: "Back Entrance", ip: "192.168.1.103", lastSync: "5 hours ago" },
    { id: 4, name: "Main Gate - RFID", type: "rfid", status: "online", location: "Front Gate", ip: "192.168.1.104", lastSync: "Just now" }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterBranch, setFilterBranch] = useState('all');
  const [filterMethod, setFilterMethod] = useState('all');
  const [viewMode, setViewMode] = useState('list');
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [isMobile, setIsMobile] = useState(false);
  
  // Real-time streaming states
  const [incomingLogs, setIncomingLogs] = useState([]);
  const [isStreaming, setIsStreaming] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState('connected');
  const [activeDevices, setActiveDevices] = useState(3);
  
  // Simulation refs
  const simulationIntervalRef = useRef(null);
  const logsIntervalRef = useRef(null);

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
    
    // Start simulation
    startSimulation();
    startLogsStream();
    
    return () => {
      stopSimulation();
      stopLogsStream();
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Start simulation of biometric data
  const startSimulation = () => {
    simulationIntervalRef.current = setInterval(() => {
      simulateBiometricEvent();
    }, 5000); // Every 5 seconds

    // Simulate device status changes
    setInterval(() => {
      const randomDevice = Math.floor(Math.random() * devices.length);
      const newStatus = Math.random() > 0.7 ? "offline" : "online";
      
      setDevices(prev => prev.map((device, idx) => 
        idx === randomDevice ? { ...device, status: newStatus } : device
      ));
      
      setActiveDevices(prev => newStatus === 'online' ? prev + 1 : prev - 1);
    }, 10000);
  };

  const stopSimulation = () => {
    if (simulationIntervalRef.current) {
      clearInterval(simulationIntervalRef.current);
    }
  };

  const startLogsStream = () => {
    logsIntervalRef.current = setInterval(() => {
      simulateLogEntry();
    }, 3000); // Every 3 seconds
  };

  const stopLogsStream = () => {
    if (logsIntervalRef.current) {
      clearInterval(logsIntervalRef.current);
    }
  };

  // Simulate biometric event (check-in/check-out)
  const simulateBiometricEvent = () => {
    const methods = ['fingerprint', 'rfid'];
    const devicesList = ['Gate 1 - Biometric', 'Gate 2 - RFID', 'Gate 3 - Biometric', 'Main Gate - RFID'];
    const members = attendanceData.filter(m => m.status !== 'absent');
    
    if (members.length === 0) return;
    
    const randomMember = members[Math.floor(Math.random() * members.length)];
    const method = methods[Math.floor(Math.random() * methods.length)];
    const device = devicesList[Math.floor(Math.random() * devicesList.length)];
    const isCheckIn = !randomMember.checkInTime || (randomMember.checkInTime && randomMember.checkOutTime);
    const currentTime = new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });

    if (isCheckIn) {
      // Simulate check-in
      setAttendanceData(prev => prev.map(member => 
        member.id === randomMember.id 
          ? { 
              ...member, 
              status: 'present',
              checkInTime: currentTime,
              checkInMethod: method,
              checkInDevice: device,
              checkOutTime: '',
              duration: 'Still here',
              attendanceStreak: member.attendanceStreak + 1
            }
          : member
      ));

      // Add to logs
      const log = {
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString(),
        memberName: randomMember.name,
        membershipId: randomMember.membershipId,
        action: 'CHECK-IN',
        method: method.toUpperCase(),
        device: device,
        status: 'success'
      };
      
      setIncomingLogs(prev => [log, ...prev.slice(0, 9)]); // Keep only last 10 logs
    } else {
      // Simulate check-out
      const duration = calculateDuration(randomMember.checkInTime, currentTime);
      
      setAttendanceData(prev => prev.map(member => 
        member.id === randomMember.id 
          ? { 
              ...member, 
              checkOutTime: currentTime,
              checkOutMethod: method,
              checkOutDevice: device,
              duration: duration
            }
          : member
      ));

      // Add to logs
      const log = {
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString(),
        memberName: randomMember.name,
        membershipId: randomMember.membershipId,
        action: 'CHECK-OUT',
        method: method.toUpperCase(),
        device: device,
        status: 'success',
        duration: duration
      };
      
      setIncomingLogs(prev => [log, ...prev.slice(0, 9)]);
    }
  };

  // Simulate log entries
  const simulateLogEntry = () => {
    const logTypes = ['SYNC', 'AUTH', 'SCAN', 'ERROR', 'CONNECT'];
    const messages = [
      'Device synchronized successfully',
      'Fingerprint authentication successful',
      'RFID tag scanned',
      'Device connection timeout',
      'New device detected',
      'Data synchronization in progress',
      'Biometric template updated',
      'Network connection established'
    ];
    
    const log = {
      id: Date.now(),
      timestamp: new Date().toLocaleTimeString(),
      type: logTypes[Math.floor(Math.random() * logTypes.length)],
      message: messages[Math.floor(Math.random() * messages.length)],
      device: devices[Math.floor(Math.random() * devices.length)].name,
      status: Math.random() > 0.8 ? 'error' : 'success'
    };
    
    setIncomingLogs(prev => [log, ...prev.slice(0, 14)]); // Keep only last 15 logs
  };

  // Statistics
  const stats = {
    totalMembers: attendanceData.length,
    present: attendanceData.filter(m => m.status === 'present').length,
    absent: attendanceData.filter(m => m.status === 'absent').length,
    expected: attendanceData.filter(m => m.status === 'expected').length,
    onLeave: attendanceData.filter(m => m.status === 'on-leave').length,
    fingerprintCheckins: attendanceData.filter(m => m.checkInMethod === 'fingerprint').length,
    rfidCheckins: attendanceData.filter(m => m.checkInMethod === 'rfid').length,
    activeDevices: activeDevices,
    totalDevices: devices.length,
    attendanceRate: Math.round((attendanceData.filter(m => m.status === 'present').length / attendanceData.length) * 100)
  };

  // Status colors
  const statusColors = {
    present: 'bg-green-100 text-green-800 border-green-200',
    absent: 'bg-red-100 text-red-800 border-red-200',
    expected: 'bg-blue-100 text-blue-800 border-blue-200',
    'on-leave': 'bg-yellow-100 text-yellow-800 border-yellow-200'
  };

  // Method colors
  const methodColors = {
    fingerprint: 'bg-purple-100 text-purple-800',
    rfid: 'bg-blue-100 text-blue-800'
  };

  // Category colors
  const categoryColors = {
    Elite: 'bg-purple-100 text-purple-800 border-purple-200',
    Premium: 'bg-blue-100 text-blue-800 border-blue-200',
    Standard: 'bg-green-100 text-green-800 border-green-200',
    Basic: 'bg-gray-100 text-gray-800 border-gray-200',
    Regular: 'bg-indigo-100 text-indigo-800 border-indigo-200'
  };

  // Device status colors
  const deviceStatusColors = {
    online: 'bg-green-100 text-green-800',
    offline: 'bg-red-100 text-red-800',
    maintenance: 'bg-yellow-100 text-yellow-800'
  };

  // Filter attendance data
  const filteredData = attendanceData.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        member.membershipId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        member.employeeId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        member.phone.includes(searchQuery);
    
    const matchesStatus = filterStatus === 'all' || member.status === filterStatus;
    const matchesBranch = filterBranch === 'all' || member.branch === filterBranch;
    const matchesMethod = filterMethod === 'all' || member.checkInMethod === filterMethod;
    
    return matchesSearch && matchesStatus && matchesBranch && matchesMethod;
  });

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  // Helper functions
  const calculateDuration = (startTime, endTime) => {
    if (!startTime || !endTime) return '';
    
    const start = new Date(`2000/01/01 ${startTime}`);
    const end = new Date(`2000/01/01 ${endTime}`);
    const diff = end - start;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m`;
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

  const getMethodIcon = (method) => {
    return method === 'fingerprint' ? 
      <Fingerprint className="w-3 h-3 sm:w-4 sm:h-4" /> : 
      <Radio className="w-3 h-3 sm:w-4 sm:h-4" />;
  };

  const toggleStreaming = () => {
    setIsStreaming(!isStreaming);
    if (!isStreaming) {
      startSimulation();
      startLogsStream();
    } else {
      stopSimulation();
      stopLogsStream();
    }
  };

  // Get time of day greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-1 md:p-3">
      {/* Header */}
      <div className="bg-blue-600 rounded-xl sm:rounded-2xl shadow-lg border border-blue-700 p-4 sm:p-5 md:p-6 mb-5 sm:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-6 mb-5 sm:mb-6">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
          
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                Biometric Time & Attendance System
              </h1>
              <p className="text-sm sm:text-base text-blue-200 mt-1">
                {getGreeting()} • Real-time attendance tracking from biometric devices
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button
              onClick={toggleStreaming}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm sm:text-base transition-colors ${
                isStreaming 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              <Activity className="w-4 h-4" />
              {isStreaming ? 'Live Streaming' : 'Start Stream'}
            </button>
            
            <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg hover:bg-white/30 font-medium text-sm sm:text-base transition-colors">
              <Settings className="w-4 h-4" />
              Device Settings
            </button>
          </div>
        </div>

        {/* Connection Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
              connectionStatus === 'connected' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                connectionStatus === 'connected' ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
              {connectionStatus === 'connected' ? 'Connected' : 'Disconnected'}
            </div>
            
            <div className="flex items-center gap-1.5 text-white text-xs sm:text-sm">
              <Server className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Active Devices: {stats.activeDevices}/{stats.totalDevices}</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-white text-xs sm:text-sm">
              <Database className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Total Logs: {incomingLogs.length}</span>
            </div>
          </div>
          
          <div className="text-xs text-blue-200">
            Last Update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>

     

      {/* Device Status Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-5">
        {devices.map(device => (
          <div 
            key={device.id} 
            className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 hover:border-gray-300 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {device.type === 'fingerprint' ? (
                    <Fingerprint className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  ) : (
                    <Radio className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  )}
                  <h3 className="font-medium text-gray-900 text-sm sm:text-base">{device.name}</h3>
                </div>
                <div className="text-xs text-gray-500">{device.location}</div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${deviceStatusColors[device.status]}`}>
                {device.status}
              </span>
            </div>
            
            <div className="space-y-1.5 mt-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">IP Address:</span>
                <span className="font-mono text-gray-800">{device.ip}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Last Sync:</span>
                <span className={device.status === 'online' ? 'text-green-600' : 'text-red-600'}>
                  {device.lastSync}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Type:</span>
                <span className={`px-1.5 py-0.5 rounded ${methodColors[device.type]}`}>
                  {device.type.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4 sm:mb-5">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search name, ID, or fingerprint..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="present">Present</option>
              <option value="absent">Absent</option>
              <option value="expected">Expected</option>
              <option value="on-leave">On Leave</option>
            </select>
          </div>

          {/* Branch Filter */}
          <div>
            <select
              value={filterBranch}
              onChange={(e) => setFilterBranch(e.target.value)}
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Branches</option>
              <option value="Mumbai Central">Mumbai Central</option>
              <option value="Andheri West">Andheri West</option>
              <option value="Bandra">Bandra</option>
            </select>
          </div>

          {/* Method Filter */}
          <div>
            <select
              value={filterMethod}
              onChange={(e) => setFilterMethod(e.target.value)}
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Methods</option>
              <option value="fingerprint">Fingerprint</option>
              <option value="rfid">RFID</option>
            </select>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2">
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
              title="Refresh"
            >
              <RefreshCw className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

     

      {/* Main Attendance Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-50 border-b border-gray-200 p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="flex items-center gap-3 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">
                  Biometric Attendance Records ({filteredData.length} members)
                </span>
              </div>
            </div>
            
            <div className="text-xs text-gray-600">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* List View */}
        {viewMode === 'list' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Member / Device Info
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Check-in Details
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Check-out Details
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
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-sm ${
                          member.category === 'Elite' ? 'bg-purple-600' :
                          member.category === 'Premium' ? 'bg-blue-600' :
                          member.category === 'Standard' ? 'bg-green-600' :
                          'bg-gray-600'
                        }`}>
                          {member.photo}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{member.name}</div>
                          <div className="text-xs text-gray-500 flex items-center gap-1">
                            <span>ID: {member.membershipId}</span>
                            <span>•</span>
                            <span>EMP: {member.employeeId}</span>
                          </div>
                          <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-2">
                            <div className="flex items-center">
                              <Fingerprint className="w-3 h-3 mr-1" />
                              {member.fingerprintId}
                            </div>
                            <div className="flex items-center">
                              <Radio className="w-3 h-3 mr-1" />
                              {member.rfidTag}
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-4 py-3">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm">
                            <Clock className="w-3 h-3 text-green-600 mr-1.5" />
                            <span className="font-medium">{member.checkInTime || 'Not checked in'}</span>
                          </div>
                          {member.checkInMethod && (
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${methodColors[member.checkInMethod]}`}>
                              {getMethodIcon(member.checkInMethod)}
                              <span className="ml-1">{member.checkInMethod}</span>
                            </span>
                          )}
                        </div>
                        {member.checkInDevice && (
                          <div className="text-xs text-gray-500 flex items-center">
                            <Server className="w-3 h-3 mr-1" />
                            {member.checkInDevice}
                          </div>
                        )}
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusColors[member.status]}`}>
                          {getStatusIcon(member.status)}
                          <span className="ml-1">{member.status.charAt(0).toUpperCase() + member.status.slice(1)}</span>
                        </span>
                      </div>
                    </td>
                    
                    <td className="px-4 py-3">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm">
                            <Clock className="w-3 h-3 text-red-600 mr-1.5" />
                            <span className="font-medium">{member.checkOutTime || 'Not checked out'}</span>
                          </div>
                          {member.checkOutMethod && (
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${methodColors[member.checkOutMethod]}`}>
                              {getMethodIcon(member.checkOutMethod)}
                              <span className="ml-1">{member.checkOutMethod}</span>
                            </span>
                          )}
                        </div>
                        {member.checkOutDevice && (
                          <div className="text-xs text-gray-500 flex items-center">
                            <Server className="w-3 h-3 mr-1" />
                            {member.checkOutDevice}
                          </div>
                        )}
                        <div className="text-sm font-medium text-gray-900">{member.duration || '-'}</div>
                      </div>
                    </td>
                    
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => window.open(`tel:${member.phone}`)}
                          className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                          title="Call"
                        >
                          <Phone className="w-4 h-4" />
                        </button>
                        
                        <button className="p-1.5 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg"
                          title="View Biometric Data"
                        >
                          <Fingerprint className="w-4 h-4" />
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
                <div className="p-3 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
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

                <div className="p-3">
                  {/* Status & Method */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[member.status]}`}>
                      {getStatusIcon(member.status)}
                      <span className="ml-1">{member.status.charAt(0).toUpperCase() + member.status.slice(1)}</span>
                    </span>
                    {member.checkInMethod && (
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${methodColors[member.checkInMethod]}`}>
                        {getMethodIcon(member.checkInMethod)}
                      </span>
                    )}
                  </div>

                  {/* Time Info */}
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Check-in:</span>
                      <div className="text-right">
                        <div className="font-medium">{member.checkInTime || 'Not checked in'}</div>
                        {member.checkInDevice && (
                          <div className="text-gray-400 text-xs">{member.checkInDevice}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Check-out:</span>
                      <div className="text-right">
                        <div className="font-medium">{member.checkOutTime || 'Not checked out'}</div>
                        {member.checkOutDevice && (
                          <div className="text-gray-400 text-xs">{member.checkOutDevice}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{member.duration || '-'}</span>
                    </div>
                  </div>

                  {/* Device Info */}
                  <div className="text-xs text-gray-500 space-y-1">
                    <div className="flex items-center">
                      <Fingerprint className="w-3 h-3 mr-1" />
                      Fingerprint: {member.fingerprintId}
                    </div>
                    <div className="flex items-center">
                      <Radio className="w-3 h-3 mr-1" />
                      RFID Tag: {member.rfidTag}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span>Streak: {member.attendanceStreak} days</span>
                      <span className="text-green-600 font-medium">Active</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 border-t border-gray-100 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => window.open(`tel:${member.phone}`)}
                      className="px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                    >
                      Call Member
                    </button>
                    <button className="text-xs text-purple-600 hover:text-purple-800">
                      View Biometrics
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredData.length === 0 && (
          <div className="py-12 text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <Fingerprint className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-1">No attendance records found</h3>
            <p className="text-xs text-gray-500 mb-4">Try adjusting your search or filters</p>
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

 {/* Real-time Logs Panel */}
  <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden mt-5">
  {/* Header */}
  <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b border-gray-200 bg-white">
    <div className="flex items-center gap-3">
      
      <h2 className="text-base sm:text-lg font-semibold text-gray-900">
        Real-time Device Logs
      </h2>
    </div>

    <div className="flex items-center gap-3 sm:gap-4">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        <span>{stats?.activeDevices || 0} Devices Online</span>
      </div>

      <button
        onClick={() => setIncomingLogs([])}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
      >
        <X className="w-4 h-4" />
        Clear Logs
      </button>
    </div>
  </div>

  {/* Logs Content */}
  <div className="p-2 sm:p-3 h-96 overflow-y-auto bg-gray-50/40">
    {incomingLogs.length > 0 ? (
      <div className="space-y-3">
        {incomingLogs.map((log) => (
          <div
            key={log.id}
            className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-200 hover:border-blue-300 transition-all shadow-sm"
          >
            {/* Timestamp */}
            <div className="text-xs sm:text-sm font-medium text-gray-500 min-w-[70px] pt-1">
              {log.timestamp}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                    log.status === 'error'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {log.type || log.action || 'Event'}
                </span>

                <span className="text-sm font-medium text-gray-900">
                  {log.memberName || log.device || 'Unknown'}
                </span>

                {log.membershipId && (
                  <span className="text-xs text-gray-500">
                    ({log.membershipId})
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-700">
                {log.message ||
                  `${log.method || 'Action'} • ${log.device || 'Device'}`}
                {log.duration && (
                  <span className="text-gray-500"> • Duration: {log.duration}</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    ) : (
      /* Empty State */
      <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
        <div className="p-4 bg-gray-100 rounded-full mb-4">
          <Server className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-base font-medium text-gray-700">
          Waiting for device logs...
        </p>
        <p className="text-sm mt-2 max-w-md">
          Attendance data will appear here in real-time once devices are connected.
        </p>
      </div>
    )}
  </div>
</div>

      {/* Device Management Panel */}
      <div className="mt-4 bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-900">Device Management</h3>
          <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700">
            Add New Device
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="text-xs font-medium text-gray-700">Device Configuration</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Sync Interval:</span>
                <select className="border border-gray-300 rounded px-2 py-1 text-xs">
                  <option>Real-time</option>
                  <option>5 minutes</option>
                  <option>15 minutes</option>
                  <option>30 minutes</option>
                </select>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Data Retention:</span>
                <span className="font-medium">90 days</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Backup Status:</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-xs font-medium text-gray-700">System Health</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Server Uptime:</span>
                <span className="font-medium">99.8%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Storage Usage:</span>
                <div className="w-24 bg-gray-200 rounded-full h-1.5">
                  <div className="bg-green-600 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Active Connections:</span>
                <span className="font-medium">{stats.activeDevices}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayAttendece;