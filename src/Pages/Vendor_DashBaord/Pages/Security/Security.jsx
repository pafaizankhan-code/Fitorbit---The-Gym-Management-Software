import React, { useState } from 'react';
import { 
  Shield,
  ShieldCheck,
  ShieldOff,
  Lock,
  Key,
  Eye,
  EyeOff,
  UserCheck,
  UserX,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  Bell,
  Settings,
  Search,
  Filter,
  Download,
  Printer,
  FileText,
  Activity,
  Users,
  FileLock,
  User,
  UserPlus,
  ShieldAlert,
  LockOpen,
  Scan,
  Globe,
  Wifi,
  Battery,
  RefreshCw,
  MoreVertical,
  Edit,
  Trash2,
  ChevronDown,
  BarChart3,
  TrendingUp,
  Calendar
} from 'lucide-react';

const Security = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedLogs, setSelectedLogs] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [autoLogout, setAutoLogout] = useState(true);
  const [ipWhitelist, setIpWhitelist] = useState(false);

  // Security Overview Stats
  const securityStats = {
    threatLevel: 'Low',
    lastScan: '2 hours ago',
    vulnerabilities: 3,
    blockedAttempts: 12,
    activeSessions: 5,
    passwordStrength: 'Strong',
    encryptionStatus: 'Enabled',
    complianceScore: '98%'
  };

  // Recent Security Events
  const securityEvents = [
    {
      id: 1,
      type: 'login',
      user: 'Rajesh Sharma',
      ip: '192.168.1.105',
      device: 'Chrome on Windows',
      location: 'Mumbai, IN',
      timestamp: '2024-03-15 10:30:45',
      status: 'success'
    },
    {
      id: 2,
      type: 'failed_login',
      user: 'Unknown',
      ip: '45.67.89.123',
      device: 'Firefox on Mac',
      location: 'Delhi, IN',
      timestamp: '2024-03-15 09:15:22',
      status: 'blocked'
    },
    {
      id: 3,
      type: 'password_change',
      user: 'Neha Patel',
      ip: '192.168.1.102',
      device: 'Safari on iPhone',
      location: 'Bangalore, IN',
      timestamp: '2024-03-14 16:45:18',
      status: 'success'
    },
    {
      id: 4,
      type: 'unauthorized_access',
      user: 'Unknown',
      ip: '78.90.123.45',
      device: 'Unknown',
      location: 'Chennai, IN',
      timestamp: '2024-03-14 14:20:33',
      status: 'blocked'
    },
    {
      id: 5,
      type: 'session_timeout',
      user: 'Amit Kumar',
      ip: '192.168.1.101',
      device: 'Chrome on Windows',
      location: 'Mumbai, IN',
      timestamp: '2024-03-14 11:05:47',
      status: 'warning'
    }
  ];

  // User Access Logs
  const userAccessLogs = [
    {
      id: 1,
      username: 'admin_rajesh',
      role: 'Administrator',
      lastLogin: '2024-03-15 10:30',
      ipAddress: '192.168.1.105',
      status: 'active',
      twoFactor: true,
      sessions: 2
    },
    {
      id: 2,
      username: 'trainer_neha',
      role: 'Trainer',
      lastLogin: '2024-03-15 09:15',
      ipAddress: '192.168.1.102',
      status: 'active',
      twoFactor: false,
      sessions: 1
    },
    {
      id: 3,
      username: 'staff_amit',
      role: 'Staff',
      lastLogin: '2024-03-14 14:20',
      ipAddress: '192.168.1.101',
      status: 'inactive',
      twoFactor: false,
      sessions: 0
    },
    {
      id: 4,
      username: 'front_desk',
      role: 'Reception',
      lastLogin: '2024-03-14 11:05',
      ipAddress: '192.168.1.103',
      status: 'active',
      twoFactor: true,
      sessions: 1
    },
    {
      id: 5,
      username: 'accountant',
      role: 'Accounts',
      lastLogin: '2024-03-13 16:45',
      ipAddress: '192.168.1.104',
      status: 'suspended',
      twoFactor: false,
      sessions: 0
    }
  ];

  // Security Policies
  const securityPolicies = [
    {
      id: 1,
      name: 'Password Policy',
      description: 'Minimum 8 characters with special characters',
      status: 'enabled',
      lastUpdated: '2024-03-01'
    },
    {
      id: 2,
      name: 'Session Timeout',
      description: 'Auto logout after 30 minutes of inactivity',
      status: 'enabled',
      lastUpdated: '2024-02-15'
    },
    {
      id: 3,
      name: 'IP Whitelist',
      description: 'Restrict access to specific IP addresses',
      status: 'disabled',
      lastUpdated: '2024-01-20'
    },
    {
      id: 4,
      name: 'Two-Factor Authentication',
      description: 'Require 2FA for all admin accounts',
      status: 'enabled',
      lastUpdated: '2024-03-10'
    },
    {
      id: 5,
      name: 'Login Attempt Limit',
      description: 'Block after 5 failed attempts',
      status: 'enabled',
      lastUpdated: '2024-02-28'
    }
  ];

  // Security Alerts
  const securityAlerts = [
    {
      id: 1,
      type: 'critical',
      message: 'Multiple failed login attempts detected',
      time: '2 hours ago',
      status: 'unread'
    },
    {
      id: 2,
      type: 'warning',
      message: 'User password needs to be updated',
      time: '1 day ago',
      status: 'read'
    },
    {
      id: 3,
      type: 'info',
      message: 'Security scan completed successfully',
      time: '2 days ago',
      status: 'read'
    },
    {
      id: 4,
      type: 'critical',
      message: 'New device login detected',
      time: '3 days ago',
      status: 'read'
    }
  ];

  // Status color mappings
  const getStatusColor = (status) => {
    switch(status) {
      case 'success':
      case 'active':
      case 'enabled':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'blocked':
      case 'suspended':
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'inactive':
      case 'disabled':
      case 'read':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'unread':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Get status icon component
  const getStatusIcon = (status) => {
    switch(status) {
      case 'success':
      case 'active':
      case 'enabled':
        return CheckCircle;
      case 'blocked':
      case 'suspended':
      case 'critical':
        return XCircle;
      case 'warning':
        return AlertCircle;
      case 'inactive':
      case 'disabled':
        return UserX;
      default:
        return CheckCircle;
    }
  };

  // Get event icon
  const getEventIcon = (type) => {
    switch(type) {
      case 'login':
        return Lock;
      case 'failed_login':
        return LockOpen;
      case 'password_change':
        return Key;
      case 'unauthorized_access':
        return ShieldAlert;
      case 'session_timeout':
        return Clock;
      default:
        return Lock;
    }
  };

  const toggleLogSelection = (id) => {
    setSelectedLogs(prev => 
      prev.includes(id) 
        ? prev.filter(logId => logId !== id)
        : [...prev, id]
    );
  };

  const selectAllLogs = () => {
    if (selectedLogs.length === securityEvents.length) {
      setSelectedLogs([]);
    } else {
      setSelectedLogs(securityEvents.map(event => event.id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-sm sm:text-base">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 sm:mb-6">
          <div>
            <div className="flex items-center mb-2">
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Security Center</h1>
                <p className="text-xs sm:text-sm text-gray-600">Monitor and manage system security settings</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4 lg:mt-0">
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm w-full sm:w-auto justify-center">
              <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Run Security Scan</span>
            </button>
            <button className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm w-full sm:w-auto justify-center">
              <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Security Report</span>
            </button>
            <button className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm w-full sm:w-auto justify-center">
              <Printer className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Print Logs</span>
            </button>
          </div>
        </div>

        {/* Security Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Threat Level</div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-black">{securityStats.threatLevel}</div>
                <div className="text-xs text-green-600">All systems secure</div>
              </div>
              <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Blocked Attempts</div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-black">{securityStats.blockedAttempts}</div>
                <div className="text-xs text-gray-500">Last 30 days</div>
              </div>
              <ShieldOff className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Active Sessions</div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-black">{securityStats.activeSessions}</div>
                <div className="text-xs text-gray-500">Current users</div>
              </div>
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Compliance Score</div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-black">{securityStats.complianceScore}</div>
                <div className="text-xs text-green-600">GDPR compliant</div>
              </div>
              <FileLock className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Search and Tabs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search security events, users..."
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            {['overview', 'events', 'users', 'policies'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium capitalize ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Security Events */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-4 sm:mb-6">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-black">Recent Security Events</h2>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium">
                  View All
                </button>
              </div>
            </div>

            <div className="overflow-x-auto -mx-2 sm:mx-0">
              <div className="min-w-[640px] sm:min-w-full">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4">
                        <input
                          type="checkbox"
                          checked={selectedLogs.length === securityEvents.length}
                          onChange={selectAllLogs}
                          className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
                        />
                      </th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Event Type</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">User</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">IP Address</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Device</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Timestamp</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {securityEvents.map(event => {
                      const EventIcon = getEventIcon(event.type);
                      const StatusIcon = getStatusIcon(event.status);
                      const statusColor = getStatusColor(event.status);
                      
                      return (
                        <tr key={event.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                          <td className="py-2 px-3 sm:py-3 sm:px-4">
                            <input
                              type="checkbox"
                              checked={selectedLogs.includes(event.id)}
                              onChange={() => toggleLogSelection(event.id)}
                              className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
                            />
                          </td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4">
                            <div className="flex items-center">
                              <EventIcon className="w-3 h-3 sm:w-4 h-4 text-gray-600 mr-1 sm:mr-2" />
                              <span className="font-medium text-black text-xs sm:text-sm capitalize">
                                {event.type.replace('_', ' ')}
                              </span>
                            </div>
                          </td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4">
                            <div className="font-medium text-black text-xs sm:text-sm">{event.user}</div>
                            <div className="text-xs text-gray-500">{event.location}</div>
                          </td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm text-gray-700">{event.ip}</td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm text-gray-700">{event.device}</td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm text-gray-700">{event.timestamp}</td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4">
                            <span className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium border ${statusColor}`}>
                              <StatusIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                              <span className="hidden sm:inline">{event.status}</span>
                              <span className="sm:hidden text-xs">{event.status.charAt(0)}</span>
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Security Policies */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <FileLock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-black">Security Policies</h2>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium">
                Manage Policies
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {securityPolicies.map(policy => {
                const StatusIcon = getStatusIcon(policy.status);
                const statusColor = getStatusColor(policy.status);
                
                return (
                  <div key={policy.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-black text-sm sm:text-base">{policy.name}</div>
                      <span className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium border ${statusColor}`}>
                        <StatusIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                        {policy.status}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mb-2">{policy.description}</div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Last updated: {policy.lastUpdated}</span>
                      <button className="text-blue-600 hover:text-blue-800">
                        Configure
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 sm:space-y-6">
          {/* User Access Control */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-black">User Access</h2>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium">
                Manage Users
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {userAccessLogs.map(user => {
                const StatusIcon = getStatusIcon(user.status);
                const statusColor = getStatusColor(user.status);
                
                return (
                  <div key={user.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-medium text-black text-sm sm:text-base">{user.username}</div>
                        <div className="text-xs sm:text-sm text-gray-600">{user.role}</div>
                      </div>
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        {user.twoFactor && (
                          <ShieldCheck className="w-3 h-3 sm:w-4 h-4 text-green-600" title="2FA Enabled" />
                        )}
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusColor}`}>
                          <StatusIcon className="w-2.5 h-2.5 sm:w-3 h-3 mr-1" />
                          {user.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <div>
                        <div>Last: {user.lastLogin}</div>
                        <div>IP: {user.ipAddress}</div>
                      </div>
                      <div className="text-right">
                        <div>Sessions: {user.sessions}</div>
                        <button className="text-red-600 hover:text-red-800">
                          Revoke
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-black mb-4 sm:mb-6">Security Settings</h2>
            
            <div className="space-y-3 sm:space-y-4">
              {/* Two-Factor Authentication */}
              <div className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-100">
                <div>
                  <div className="font-medium text-black text-sm sm:text-base">Two-Factor Auth</div>
                  <div className="text-xs sm:text-sm text-gray-500">Extra security layer</div>
                </div>
                <button
                  onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                  className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                    twoFactorEnabled ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                    twoFactorEnabled ? 'translate-x-4 sm:translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Auto Logout */}
              <div className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-100">
                <div>
                  <div className="font-medium text-black text-sm sm:text-base">Auto Logout</div>
                  <div className="text-xs sm:text-sm text-gray-500">30 min inactivity</div>
                </div>
                <button
                  onClick={() => setAutoLogout(!autoLogout)}
                  className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                    autoLogout ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                    autoLogout ? 'translate-x-4 sm:translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* IP Whitelist */}
              <div className="flex items-center justify-between py-2 sm:py-3">
                <div>
                  <div className="font-medium text-black text-sm sm:text-base">IP Whitelist</div>
                  <div className="text-xs sm:text-sm text-gray-500">Restrict IP access</div>
                </div>
                <button
                  onClick={() => setIpWhitelist(!ipWhitelist)}
                  className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                    ipWhitelist ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                    ipWhitelist ? 'translate-x-4 sm:translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>

            {/* Password Change */}
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
              <h3 className="font-medium text-black text-sm sm:text-base mb-2 sm:mb-3">Change Admin Password</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="New Password"
                    className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff className="w-3 h-3 sm:w-4 h-4 text-gray-400" /> : <Eye className="w-3 h-3 sm:w-4 h-4 text-gray-400" />}
                  </button>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 text-sm rounded-lg font-medium hover:bg-blue-700">
                  Update Password
                </button>
              </div>
            </div>
          </div>

          {/* Security Alerts */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-black">Security Alerts</h2>
              </div>
              <span className="text-xs sm:text-sm text-gray-600">{securityAlerts.filter(a => a.status === 'unread').length} unread</span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {securityAlerts.map(alert => {
                const statusColor = getStatusColor(alert.status);
                const typeColor = getStatusColor(alert.type);
                
                return (
                  <div key={alert.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                    <div className="flex items-start justify-between mb-2">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${typeColor}`}>
                        {alert.type}
                      </span>
                      <span className={`text-xs ${alert.status === 'unread' ? 'font-medium text-blue-600' : 'text-gray-500'}`}>
                        {alert.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-800 mb-1">{alert.message}</div>
                    <div className="text-xs text-gray-500">{alert.time}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;