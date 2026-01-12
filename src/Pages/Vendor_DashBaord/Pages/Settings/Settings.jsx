import React, { useState, useEffect } from 'react';
import { 
  Settings as SettingsIcon,
  Save,
  Bell,
  Shield,
  Users,
  CreditCard,
  Calendar,
  FileText,
  Database,
  Globe,
  Palette,
  Mail,
  Smartphone,
  Printer,
  Key,
  Zap,
  Lock,
  Eye,
  EyeOff,
  Clock,
  Star,
  Award,
  Target,
  BarChart3,
  Cpu,
  Network,
  Cloud,
  HardDrive,
  Server,
  Code,
  Folder,
  ShieldCheck,
  AlertCircle,
  CheckCircle,
  XCircle,
  ChevronRight,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Trash2,
  Edit,
  Copy,
  QrCode,
  ShieldOff,
  Wifi,
  WifiOff,
  Battery,
  Activity,
  Cpu as CpuIcon,
  MemoryStick,
  DatabaseBackup,
  Network as NetworkIcon,
  FileLock,
  UserCheck,
  UserX,
  Building,
  MapPin,
  Phone,
  MessageSquare,
  Video,
  Music,
  Volume2,
  Sun,
  Moon,
  Monitor,
  Smartphone as SmartphoneIcon,
  Tablet,
  Languages,
  Keyboard,
  MousePointer,
  Mouse,
  Headphones,
  Mic,
  Camera,
  BatteryCharging,
  Power,
  RotateCcw,
  PowerOff,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  ChevronsRight,
  Settings as SettingsLucide,
  SaveAll,
  DatabaseZap,
  ServerCog,
  CloudCog,
  ShieldAlert
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: false,
    payment: true,
    renewal: true,
    maintenance: false
  });
  const [security, setSecurity] = useState({
    twoFactor: false,
    autoLogout: true,
    ipWhitelist: false,
    sessionTimeout: 30
  });
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [systemStatus, setSystemStatus] = useState({
    database: 'online',
    api: 'online',
    payment: 'online',
    backup: 'last night',
    storage: '78%',
    uptime: '99.8%'
  });
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const tabs = [
    { id: 'general', label: 'General', mobileLabel: 'General', icon: SettingsIcon },
    { id: 'notifications', label: 'Notifications', mobileLabel: 'Notify', icon: Bell },
    { id: 'security', label: 'Security', mobileLabel: 'Security', icon: Shield },
    { id: 'users', label: 'Users & Roles', mobileLabel: 'Users', icon: Users },
    { id: 'billing', label: 'Billing', mobileLabel: 'Billing', icon: CreditCard },
    { id: 'appearance', label: 'Appearance', mobileLabel: 'Theme', icon: Palette },
    { id: 'integrations', label: 'Integrations', mobileLabel: 'Apps', icon: Code },
    { id: 'backup', label: 'Backup & Restore', mobileLabel: 'Backup', icon: Database },
    { id: 'system', label: 'System', mobileLabel: 'System', icon: Cpu }
  ];

  const systemSettings = [
    { 
      id: 'gymName', 
      label: 'Gym Name', 
      mobileLabel: 'Gym Name',
      value: 'FitOrbit Elite Fitness', 
      type: 'text',
      icon: Building 
    },
    { 
      id: 'gymLocation', 
      label: 'Gym Location', 
      mobileLabel: 'Location',
      value: 'Mumbai, Maharashtra', 
      type: 'text',
      icon: MapPin 
    },
    { 
      id: 'contactEmail', 
      label: 'Contact Email', 
      mobileLabel: 'Email',
      value: 'contact@fitorbit.com', 
      type: 'email',
      icon: Mail 
    },
    { 
      id: 'contactPhone', 
      label: 'Contact Phone', 
      mobileLabel: 'Phone',
      value: '+91 98765 43210', 
      type: 'tel',
      icon: Phone 
    },
    { 
      id: 'timezone', 
      label: 'Timezone', 
      mobileLabel: 'Timezone',
      value: 'IST (UTC+5:30)', 
      type: 'select',
      icon: Clock 
    },
    { 
      id: 'currency', 
      label: 'Currency', 
      mobileLabel: 'Currency',
      value: 'Indian Rupee (₹)', 
      type: 'select',
      icon: CreditCard 
    }
  ];

  const notificationTypes = [
    { id: 'email', label: 'Email Notifications', mobileLabel: 'Email', description: 'Receive updates via email' },
    { id: 'sms', label: 'SMS Notifications', mobileLabel: 'SMS', description: 'Get SMS alerts' },
    { id: 'push', label: 'Push Notifications', mobileLabel: 'Push', description: 'Desktop notifications' },
    { id: 'payment', label: 'Payment Alerts', mobileLabel: 'Payment', description: 'Notify on payments' },
    { id: 'renewal', label: 'Renewal Reminders', mobileLabel: 'Renewal', description: 'Membership alerts' },
    { id: 'maintenance', label: 'Maintenance Alerts', mobileLabel: 'Maintenance', description: 'System updates' }
  ];

  const securitySettings = [
    { id: 'twoFactor', label: 'Two-Factor Authentication', mobileLabel: '2FA', description: 'Extra security layer' },
    { id: 'autoLogout', label: 'Auto Logout', mobileLabel: 'Auto Logout', description: 'Logout after inactivity' },
    { id: 'ipWhitelist', label: 'IP Whitelist', mobileLabel: 'IP Restrict', description: 'Restrict to specific IPs' },
    { id: 'sessionTimeout', label: 'Session Timeout', mobileLabel: 'Session', value: '30 minutes', type: 'select' }
  ];

  const integrations = [
    { id: 'paymentGateway', label: 'Payment Gateway', mobileLabel: 'Payments', status: 'connected', icon: CreditCard },
    { id: 'smsGateway', label: 'SMS Gateway', mobileLabel: 'SMS', status: 'connected', icon: MessageSquare },
    { id: 'emailService', label: 'Email Service', mobileLabel: 'Email', status: 'connected', icon: Mail },
    { id: 'analytics', label: 'Analytics', mobileLabel: 'Analytics', status: 'disconnected', icon: BarChart3 },
    { id: 'crm', label: 'CRM System', mobileLabel: 'CRM', status: 'pending', icon: Users }
  ];

  const backupOptions = [
    { id: 'autoBackup', label: 'Auto Backup', mobileLabel: 'Auto Backup', frequency: 'Daily', lastBackup: '2 hours ago' },
    { id: 'manualBackup', label: 'Manual Backup', mobileLabel: 'Manual Backup', frequency: 'On Demand', lastBackup: '3 days ago' },
    { id: 'cloudBackup', label: 'Cloud Backup', mobileLabel: 'Cloud Backup', frequency: 'Real-time', lastBackup: 'Active' }
  ];

  const toggleNotification = (id) => {
    setNotifications(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleSecurity = (id) => {
    setSecurity(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'general':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">General Settings</h3>
              <div className="space-y-3 sm:space-y-4">
                {systemSettings.map(setting => (
                  <div key={setting.id} className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <setting.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm sm:text-base">
                          {isMobile ? setting.mobileLabel : setting.label}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 truncate max-w-[150px] sm:max-w-none">
                          {setting.value}
                        </div>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base">
                      {isMobile ? 'Edit' : 'Edit'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">Business Hours</h3>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { day: 'Monday', mobileDay: 'Mon', hours: '6:00 AM - 10:00 PM' },
                  { day: 'Tuesday', mobileDay: 'Tue', hours: '6:00 AM - 10:00 PM' },
                  { day: 'Wednesday', mobileDay: 'Wed', hours: '6:00 AM - 10:00 PM' },
                  { day: 'Thursday', mobileDay: 'Thu', hours: '6:00 AM - 10:00 PM' },
                  { day: 'Friday', mobileDay: 'Fri', hours: '6:00 AM - 10:00 PM' },
                  { day: 'Saturday', mobileDay: 'Sat', hours: '8:00 AM - 8:00 PM' },
                  { day: 'Sunday', mobileDay: 'Sun', hours: '8:00 AM - 6:00 PM' }
                ].map(schedule => (
                  <div key={schedule.day} className="flex justify-between items-center py-1.5 sm:py-2">
                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      {isMobile ? schedule.mobileDay : schedule.day}
                    </span>
                    <span className="text-gray-600 text-xs sm:text-sm">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">Notification Preferences</h3>
              <div className="space-y-3 sm:space-y-4">
                {notificationTypes.map(notif => (
                  <div key={notif.id} className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-100">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-sm sm:text-base">
                        {isMobile ? notif.mobileLabel : notif.label}
                      </div>
                      {!isMobile && (
                        <div className="text-sm text-gray-500 truncate">{notif.description}</div>
                      )}
                    </div>
                    <button
                      onClick={() => toggleNotification(notif.id)}
                      className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors flex-shrink-0 ml-2 ${
                        notifications[notif.id] ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                        notifications[notif.id] ? 'translate-x-4 sm:translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">Notification Templates</h3>
              <div className="space-y-2 sm:space-y-3">
                <button className="w-full flex items-center justify-between p-2 sm:p-3 bg-gray-50 hover:bg-gray-100 rounded-lg">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900 text-sm sm:text-base">
                        {isMobile ? 'Welcome Email' : 'Welcome Email'}
                      </div>
                      {!isMobile && (
                        <div className="text-sm text-gray-500">Sent to new members</div>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-2 sm:p-3 bg-gray-50 hover:bg-gray-100 rounded-lg">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900 text-sm sm:text-base">
                        {isMobile ? 'Payment Reminder' : 'Payment Reminder'}
                      </div>
                      {!isMobile && (
                        <div className="text-sm text-gray-500">Sent before due date</div>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-4 sm:space-y-6">
            {/* Password Change */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">Change Password</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Old Password</label>
                  <div className="relative">
                    <input
                      type={showOldPassword ? "text" : "password"}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                      placeholder="Enter old password"
                    />
                    <button
                      onClick={() => setShowOldPassword(!showOldPassword)}
                      className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showOldPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">New Password</label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                      placeholder="Enter new password"
                    />
                    <button
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showNewPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />}
                    </button>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-700 text-sm sm:text-base">
                  Update Password
                </button>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">Security Settings</h3>
              <div className="space-y-3 sm:space-y-4">
                {securitySettings.map(setting => (
                  <div key={setting.id} className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-100">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-sm sm:text-base">
                        {isMobile ? setting.mobileLabel : setting.label}
                      </div>
                      {!isMobile && (
                        <div className="text-sm text-gray-500">{setting.description}</div>
                      )}
                    </div>
                    {setting.type === 'select' ? (
                      <select className="px-2 sm:px-3 py-1 sm:py-1.5 border border-gray-300 rounded-lg text-xs sm:text-sm">
                        <option>15 min</option>
                        <option>30 min</option>
                        <option>1 hour</option>
                        <option>2 hours</option>
                      </select>
                    ) : (
                      <button
                        onClick={() => toggleSecurity(setting.id)}
                        className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors flex-shrink-0 ml-2 ${
                          security[setting.id] ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <span className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                          security[setting.id] ? 'translate-x-4 sm:translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Login History */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">Recent Login Activity</h3>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { device: 'Chrome on Windows', mobileDevice: 'Chrome Win', location: 'Mumbai, IN', time: '2 hours ago', status: 'success' },
                  { device: 'Safari on iPhone', mobileDevice: 'Safari iOS', location: 'Delhi, IN', time: '1 day ago', status: 'success' },
                  { device: 'Firefox on Mac', mobileDevice: 'Firefox Mac', location: 'Bangalore, IN', time: '3 days ago', status: 'failed' }
                ].map((login, index) => (
                  <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${login.status === 'success' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <div className="min-w-0">
                        <div className="font-medium text-gray-900 text-sm sm:text-base truncate">
                          {isMobile ? login.mobileDevice : login.device}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 truncate">
                          {login.location} • {login.time}
                        </div>
                      </div>
                    </div>
                    <button className="text-red-600 hover:text-red-800 text-xs sm:text-sm flex-shrink-0">
                      Revoke
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">Connected Services</h3>
              <div className="space-y-3 sm:space-y-4">
                {integrations.map(integration => (
                  <div key={integration.id} className="flex items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                        <integration.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm sm:text-base">
                          {isMobile ? integration.mobileLabel : integration.label}
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                            integration.status === 'connected' ? 'bg-green-500' :
                            integration.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}></div>
                          <span className="text-xs sm:text-sm text-gray-500">{integration.status}</span>
                        </div>
                      </div>
                    </div>
                    <button className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm ${
                      integration.status === 'connected' 
                        ? 'bg-red-50 text-red-700 hover:bg-red-100'
                        : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                    }`}>
                      {integration.status === 'connected' ? (isMobile ? 'Discon' : 'Disconnect') : 'Connect'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'backup':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">Backup Settings</h3>
              <div className="space-y-3 sm:space-y-4">
                {backupOptions.map(option => (
                  <div key={option.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg space-y-2 sm:space-y-0">
                    <div>
                      <div className="font-medium text-gray-900 text-sm sm:text-base">
                        {isMobile ? option.mobileLabel : option.label}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">
                        Freq: {option.frequency} • Last: {option.lastBackup}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-100">
                        {isMobile ? 'Config' : 'Configure'}
                      </button>
                      {option.id === 'manualBackup' && (
                        <button className="px-2 sm:px-3 py-1 sm:py-1.5 bg-green-50 text-green-700 rounded-lg text-xs sm:text-sm font-medium hover:bg-green-100">
                          {isMobile ? 'Backup' : 'Backup Now'}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">Restore Backup</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-8 text-center">
                  <DatabaseBackup className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-2 sm:mb-3" />
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                    Upload backup file to restore system
                  </p>
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base">
                    Choose File
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'system':
        return (
          <div className="space-y-4 sm:space-y-6">
            {/* System Status */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">System Status</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {Object.entries(systemStatus).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <div className="text-xs sm:text-sm font-medium text-gray-700 capitalize truncate">
                        {isMobile ? key : key.replace(/([A-Z])/g, ' $1')}
                      </div>
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                        value === 'online' || value === 'Active' ? 'bg-green-500' :
                        value.includes('%') ? 'bg-blue-500' : 'bg-gray-500'
                      }`}></div>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-gray-900 truncate">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">System Actions</h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <button className="flex items-center justify-center space-x-1 sm:space-x-2 p-2 sm:p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100">
                  <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">Clear Cache</span>
                </button>
                <button className="flex items-center justify-center space-x-1 sm:space-x-2 p-2 sm:p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100">
                  <DatabaseBackup className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">Optimize DB</span>
                </button>
                <button className="flex items-center justify-center space-x-1 sm:space-x-2 p-2 sm:p-4 bg-yellow-50 text-yellow-700 rounded-lg hover:bg-yellow-100">
                  <Server className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">Check Updates</span>
                </button>
                <button className="flex items-center justify-center space-x-1 sm:space-x-2 p-2 sm:p-4 bg-red-50 text-red-700 rounded-lg hover:bg-red-100">
                  <PowerOff className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">Restart</span>
                </button>
              </div>
            </div>

            {/* System Logs */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4">System Logs</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                    <div className="min-w-0">
                      <div className="font-medium text-gray-900 text-sm sm:text-base truncate">
                        Database Backup Completed
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">2 hours ago • 2.4 GB</div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm flex-shrink-0">
                    View
                  </button>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                    <div className="min-w-0">
                      <div className="font-medium text-gray-900 text-sm sm:text-base truncate">
                        Security Audit Passed
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">Yesterday • No issues</div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm flex-shrink-0">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
            <div className="text-center py-8 sm:py-12">
              <SettingsIcon className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Settings</h3>
              <p className="text-gray-600 text-sm sm:text-base">Select a category to manage settings</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Mobile Sidebar Toggle */}
      {isMobile && (
        <div className="mb-4">
          <button
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
            className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-3 py-2"
          >
            <Menu className="w-5 h-5 text-gray-600" />
            <span className="font-medium">Settings Menu</span>
          </button>
        </div>
      )}

      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">System Settings</h1>
                <p className="text-xs sm:text-sm text-gray-600">Manage your gym management system configuration</p>
              </div>
            </div>
          </div>
          <button className="mt-3 sm:mt-4 lg:mt-0 flex items-center justify-center space-x-1 sm:space-x-2 bg-blue-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto">
            <Save className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-medium text-sm sm:text-base">Save Changes</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Mobile Sidebar Overlay */}
        {isMobile && showMobileSidebar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowMobileSidebar(false)} />
        )}

        {/* Sidebar Navigation */}
        <div className={`lg:w-64 ${isMobile ? (showMobileSidebar ? 'fixed inset-y-0 left-0 w-full bg-white z-50 shadow-xl transform translate-x-0' : 'hidden') : 'block'}`}>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden h-full lg:h-auto">
            {/* Mobile Close Button */}
            {isMobile && showMobileSidebar && (
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="font-bold text-gray-900">Settings Menu</h2>
                <button onClick={() => setShowMobileSidebar(false)} className="p-1">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            )}
            
            <nav className="space-y-1 p-2">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      if (isMobile) setShowMobileSidebar(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'
                    }`} />
                    <span className="font-medium text-sm sm:text-base">
                      {isMobile ? tab.mobileLabel : tab.label}
                    </span>
                    {activeTab === tab.id && (
                      <div className="ml-auto w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* System Info */}
            <div className="border-t border-gray-200 p-3 sm:p-4">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-600">Version</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900">v3.2.1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-600">Last Updated</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900">2 days ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-600">License</span>
                  <span className="text-xs sm:text-sm font-medium text-green-600">Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-4 sm:mt-6 bg-white rounded-xl border border-gray-200 p-3 sm:p-4">
            <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Quick Actions</h4>
            <div className="space-y-1 sm:space-y-2">
              <button className="w-full flex items-center justify-between p-1.5 sm:p-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                <span>Export Settings</span>
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button className="w-full flex items-center justify-between p-1.5 sm:p-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                <span>Reset to Default</span>
                <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button className="w-full flex items-center justify-between p-1.5 sm:p-2 text-xs sm:text-sm text-red-600 hover:bg-red-50 rounded-lg">
                <span>Delete All Data</span>
                <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {renderContent()}

          {/* Danger Zone */}
          {['general', 'system'].includes(activeTab) && (
            <div className="mt-4 sm:mt-6 bg-white rounded-xl border border-red-200 p-4 sm:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-red-700 mb-1 sm:mb-2">Danger Zone</h3>
                  <p className="text-red-600 text-xs sm:text-sm mb-3 sm:mb-4">
                    These actions are irreversible. Please proceed with caution.
                  </p>
                </div>
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                <button className="flex items-center justify-center space-x-1 sm:space-x-2 p-2 sm:p-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 text-sm">
                  <ShieldOff className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Deactivate System</span>
                </button>
                <button className="flex items-center justify-center space-x-1 sm:space-x-2 p-2 sm:p-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 text-sm">
                  <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Delete All Data</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;