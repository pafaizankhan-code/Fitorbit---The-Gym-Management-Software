import React, { useState, useEffect } from 'react';
import {
  Bell,
  AlertCircle,
  Calendar,
  IndianRupee,
  MessageSquare,
  Settings,
  Clock,
  User,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  Eye,
  Filter,
  Search,
  MoreVertical,
  Download,
  Trash2,
  Edit,
  Send,
  Phone,
  Mail,
  Shield,
  Users,
  Package,
  FileText,
  BellOff,
  BellRing,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Plus,
  RefreshCw,
  Archive,
  Sparkles,
  Target,
  Zap,
  Flame,
  Dumbbell,
  Trophy,
  Gift
} from 'lucide-react';

const Notifications = () => {
  // Tabs configuration
  const tabs = [
    { id: 'all', label: 'All Notifications', icon: Bell, count: 12 },
    { id: 'expiry', label: 'Expiry Reminders', icon: Calendar, count: 4 },
    { id: 'payment', label: 'Payment Reminders', icon: IndianRupee, count: 3 },
    { id: 'broadcast', label: 'Broadcast Messages', icon: MessageSquare, count: 2 },
    { id: 'whatsapp', label: 'WhatsApp/SMS Setup', icon: Settings, count: 1 }
  ];

  // Priority levels
  const priorityLevels = {
    high: { label: 'High', color: 'bg-red-100 text-red-800', icon: AlertCircle },
    medium: { label: 'Medium', color: 'bg-amber-100 text-amber-800', icon: AlertCircle },
    low: { label: 'Low', color: 'bg-blue-100 text-blue-800', icon: Bell }
  };

  // Notification types
  const notificationTypes = {
    membership: { label: 'Membership', color: 'bg-blue-50 text-blue-700' },
    payment: { label: 'Payment', color: 'bg-green-50 text-green-700' },
    class: { label: 'Class', color: 'bg-purple-50 text-purple-700' },
    system: { label: 'System', color: 'bg-gray-50 text-gray-700' },
    promotion: { label: 'Promotion', color: 'bg-pink-50 text-pink-700' },
    alert: { label: 'Alert', color: 'bg-red-50 text-red-700' }
  };

  // Sample notifications data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Membership Expiring Soon',
      message: 'Premium membership for John Doe expires in 3 days. Send reminder.',
      type: 'membership',
      priority: 'high',
      tab: 'expiry',
      time: '10 minutes ago',
      read: false,
      memberName: 'John Doe',
      expiryDate: '2024-04-25',
      daysLeft: 3,
      status: 'pending'
    },
    {
      id: 2,
      title: 'Payment Due Reminder',
      message: 'Monthly payment of ₹5,999 due for Sarah Smith. Last date: 25th April.',
      type: 'payment',
      priority: 'high',
      tab: 'payment',
      time: '1 hour ago',
      read: true,
      memberName: 'Sarah Smith',
      amount: '₹5,999',
      dueDate: '2024-04-25',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Special Offer Broadcast',
      message: 'Summer fitness challenge starting May 1st. 20% discount for early birds.',
      type: 'promotion',
      priority: 'medium',
      tab: 'broadcast',
      time: '2 hours ago',
      read: false,
      broadcastTo: 'All Members',
      sentVia: 'WhatsApp & Email',
      clicks: 45,
      status: 'sent'
    },
    {
      id: 4,
      title: 'Yoga Class Reminder',
      message: 'Yoga class at 7:00 AM tomorrow. 15 members registered.',
      type: 'class',
      priority: 'low',
      tab: 'all',
      time: '5 hours ago',
      read: true,
      className: 'Morning Yoga',
      time: '7:00 AM',
      registered: 15,
      status: 'scheduled'
    },
    {
      id: 5,
      title: 'System Maintenance',
      message: 'Server maintenance scheduled for tonight 2:00 AM - 4:00 AM.',
      type: 'system',
      priority: 'medium',
      tab: 'all',
      time: '1 day ago',
      read: true,
      maintenanceType: 'Server',
      startTime: '2:00 AM',
      endTime: '4:00 AM',
      status: 'scheduled'
    },
    {
      id: 6,
      title: 'New Member Alert',
      message: 'New platinum member registered: Michael Brown.',
      type: 'membership',
      priority: 'low',
      tab: 'all',
      time: '2 days ago',
      read: false,
      memberName: 'Michael Brown',
      membershipType: 'Platinum',
      joinDate: '2024-04-22',
      status: 'active'
    },
    {
      id: 7,
      title: 'Payment Received',
      message: 'Payment of ₹8,500 received from Lisa Chen via UPI.',
      type: 'payment',
      priority: 'low',
      tab: 'payment',
      time: '3 days ago',
      read: true,
      memberName: 'Lisa Chen',
      amount: '₹8,500',
      method: 'UPI',
      status: 'completed'
    },
    {
      id: 8,
      title: 'Broadcast Scheduled',
      message: 'Monthly newsletter broadcast scheduled for tomorrow 10 AM.',
      type: 'promotion',
      priority: 'medium',
      tab: 'broadcast',
      time: '4 days ago',
      read: true,
      broadcastType: 'Newsletter',
      scheduleTime: '10:00 AM',
      recipients: 245,
      status: 'scheduled'
    }
  ]);

  // WhatsApp/SMS templates
  const [whatsappTemplates, setWhatsappTemplates] = useState([
    {
      id: 1,
      name: 'Membership Renewal',
      type: 'whatsapp',
      content: 'Dear {member_name}, your membership expires in {days_left} days. Renew now!',
      status: 'active',
      usedCount: 45
    },
    {
      id: 2,
      name: 'Payment Reminder',
      type: 'sms',
      content: 'Hi {member_name}, payment of ₹{amount} due on {due_date}. Pay now.',
      status: 'active',
      usedCount: 32
    },
    {
      id: 3,
      name: 'Class Reminder',
      type: 'whatsapp',
      content: 'Reminder: {class_name} at {class_time} tomorrow. See you there!',
      status: 'inactive',
      usedCount: 18
    },
    {
      id: 4,
      name: 'Welcome Message',
      type: 'sms',
      content: 'Welcome {member_name} to our gym! Your membership is now active.',
      status: 'active',
      usedCount: 12
    }
  ]);

  // State management
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);
  const [showPriority, setShowPriority] = useState('all');
  const [isMobileView, setIsMobileView] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [newTemplate, setNewTemplate] = useState({
    name: '',
    type: 'whatsapp',
    content: '',
    status: 'active'
  });

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter notifications based on active tab and filters
  const filteredNotifications = notifications.filter(notification => {
    const matchesTab = activeTab === 'all' || notification.tab === activeTab;
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (notification.memberName && notification.memberName.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesRead = !showUnreadOnly || !notification.read;
    const matchesPriority = showPriority === 'all' || notification.priority === showPriority;
    
    return matchesTab && matchesSearch && matchesRead && matchesPriority;
  });

  // Filter WhatsApp templates
  const filteredTemplates = whatsappTemplates.filter(template => 
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mark as read
  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  // Delete notification
  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  // Add new template
  const addNewTemplate = () => {
    if (newTemplate.name && newTemplate.content) {
      const template = {
        id: whatsappTemplates.length + 1,
        ...newTemplate,
        usedCount: 0
      };
      setWhatsappTemplates(prev => [...prev, template]);
      setNewTemplate({
        name: '',
        type: 'whatsapp',
        content: '',
        status: 'active'
      });
    }
  };

  // Delete template
  const deleteTemplate = (id) => {
    setWhatsappTemplates(prev => prev.filter(template => template.id !== id));
  };

  // Toggle template status
  const toggleTemplateStatus = (id) => {
    setWhatsappTemplates(prev => 
      prev.map(template => 
        template.id === id 
          ? { ...template, status: template.status === 'active' ? 'inactive' : 'active' }
          : template
      )
    );
  };

  // Send test message
  const sendTestMessage = (template) => {
    alert(`Test message sent using template: ${template.name}`);
  };

  // Get unread count for tab
  const getTabUnreadCount = (tabId) => {
    return notifications.filter(n => !n.read && (tabId === 'all' || n.tab === tabId)).length;
  };

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'whatsapp':
        return renderWhatsappSetup();
      default:
        return renderNotifications();
    }
  };

  // Render notifications list
  const renderNotifications = () => (
    <div className="space-y-4">
      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 sm:flex-none sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search notifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {isMobileView ? (
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-2 border border-gray-300 rounded-lg"
              >
                <Filter className="w-5 h-5" />
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="unread-only"
                    checked={showUnreadOnly}
                    onChange={(e) => setShowUnreadOnly(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="unread-only" className="text-sm text-gray-700">
                    Show unread only
                  </label>
                </div>
                
                <select
                  value={showPriority}
                  onChange={(e) => setShowPriority(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All priorities</option>
                  <option value="high">High priority</option>
                  <option value="medium">Medium priority</option>
                  <option value="low">Low priority</option>
                </select>
              </div>
            )}
          </div>
          
          <button
            onClick={markAllAsRead}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Mark all as read
          </button>
        </div>
        
        {/* Mobile filters */}
        {isMobileView && showMobileMenu && (
          <div className="mt-4 space-y-4 p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="mobile-unread"
                checked={showUnreadOnly}
                onChange={(e) => setShowUnreadOnly(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="mobile-unread" className="text-sm text-gray-700">
                Show unread only
              </label>
            </div>
            
            <div>
              <label className="block text-sm text-gray-700 mb-2">Priority</label>
              <select
                value={showPriority}
                onChange={(e) => setShowPriority(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All priorities</option>
                <option value="high">High priority</option>
                <option value="medium">Medium priority</option>
                <option value="low">Low priority</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Notifications List */}
      {filteredNotifications.length > 0 ? (
        <div className="space-y-3">
          {filteredNotifications.map(notification => {
            const PriorityIcon = priorityLevels[notification.priority]?.icon || AlertCircle;
            
            return (
              <div
                key={notification.id}
                className={`bg-white rounded-xl border transition-all ${
                  notification.read ? 'border-gray-200' : 'border-blue-200 bg-blue-50'
                }`}
              >
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${priorityLevels[notification.priority]?.color}`}>
                        <PriorityIcon className="w-4 h-4" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900 truncate">
                            {notification.title}
                          </h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${notificationTypes[notification.type]?.color}`}>
                            {notificationTypes[notification.type]?.label}
                          </span>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3">
                          {notification.message}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {notification.memberName && (
                            <span className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                              <User className="w-3 h-3 mr-1" />
                              {notification.memberName}
                            </span>
                          )}
                          
                          {notification.daysLeft && (
                            <span className="inline-flex items-center px-2 py-1 text-xs bg-amber-100 text-amber-800 rounded">
                              <Clock className="w-3 h-3 mr-1" />
                              {notification.daysLeft} days left
                            </span>
                          )}
                          
                          {notification.amount && (
                            <span className="inline-flex items-center px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                              <IndianRupee className="w-3 h-3 mr-1" />
                              {notification.amount}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                 
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Mark as read
                        </button>
                      )}
                      <button className="text-sm text-gray-600 hover:text-gray-700 font-medium">
                        View details
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-1 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">No notifications found</h3>
          <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setShowUnreadOnly(false);
              setShowPriority('all');
            }}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Clear filters</span>
          </button>
        </div>
      )}
    </div>
  );

  // Render WhatsApp/SMS setup
  const renderWhatsappSetup = () => (
    <div className="space-y-6">
      {/* Setup Instructions */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp & SMS Integration</h3>
            <p className="text-gray-600 mb-4">
              Set up automatic notifications via WhatsApp and SMS. Connect your WhatsApp Business account to send automated reminders.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-green-100 rounded-lg mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Step 1</h4>
                </div>
                <p className="text-sm text-gray-600">Connect WhatsApp Business API</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <Settings className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Step 2</h4>
                </div>
                <p className="text-sm text-gray-600">Configure message templates</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg mr-3">
                    <Send className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Step 3</h4>
                </div>
                <p className="text-sm text-gray-600">Schedule automatic messages</p>
              </div>
            </div>
          </div>
          
         
        </div>
      </div>

      {/* Message Templates */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Message Templates</h3>
            <p className="text-gray-600">Create and manage automated message templates</p>
          </div>
          
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Template</span>
          </button>
        </div>

        {/* New Template Form */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h4 className="font-semibold text-gray-900 mb-4">Create New Template</h4>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Template Name</label>
                <input
                  type="text"
                  value={newTemplate.name}
                  onChange={(e) => setNewTemplate({...newTemplate, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Membership Renewal"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message Type</label>
                <select
                  value={newTemplate.type}
                  onChange={(e) => setNewTemplate({...newTemplate, type: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="whatsapp">WhatsApp</option>
                  <option value="sms">SMS</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message Content</label>
              <textarea
                value={newTemplate.content}
                onChange={(e) => setNewTemplate({...newTemplate, content: e.target.value})}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your message template. Use {variable_name} for dynamic content."
              />
              <p className="text-sm text-gray-500 mt-2">
                Available variables: {"{member_name}, {amount}, {due_date}, {days_left}, {class_name}, {class_time}"}
              </p>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setNewTemplate({ name: '', type: 'whatsapp', content: '', status: 'active' })}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={addNewTemplate}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Template
              </button>
            </div>
          </div>
        </div>

        {/* Templates List */}
        <div className="space-y-4">
          {filteredTemplates.map(template => (
            <div key={template.id} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg ${
                      template.type === 'whatsapp' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {template.type === 'whatsapp' ? <MessageSquare className="w-4 h-4" /> : <Phone className="w-4 h-4" />}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">{template.name}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          template.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {template.status === 'active' ? 'Active' : 'Inactive'}
                        </span>
                        <span className="text-xs text-gray-500">
                          Used {template.usedCount} times
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-700">{template.content}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => sendTestMessage(template)}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Send test message
                    </button>
                    <button className="text-sm text-gray-600 hover:text-gray-700 font-medium">
                      Edit template
                    </button>
                    <button className="text-sm text-gray-600 hover:text-gray-700 font-medium">
                      View analytics
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleTemplateStatus(template.id)}
                    className={`p-2 rounded-lg ${
                      template.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                    }`}
                    title={template.status === 'active' ? 'Deactivate' : 'Activate'}
                  >
                    {template.status === 'active' ? <BellRing className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => deleteTemplate(template.id)}
                    className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SMS Settings */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">SMS Settings</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">SMS Gateway Configuration</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gateway Provider</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="twilio">Twilio</option>
                  <option value="msg91">MSG91</option>
                  <option value="textlocal">TextLocal</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">API Key</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your API key"
                />
              </div>
              
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Save Settings
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">SMS Usage & Limits</h4>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Messages sent this month</span>
                  <span className="font-semibold">245</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Remaining credits</span>
                  <span className="font-semibold text-green-600">1,255</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery rate</span>
                  <span className="font-semibold">98.5%</span>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Buy More Credits
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-1 md:p-3">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center space-x-3">
               
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Notifications Center
                  </h1>
                  <p className="text-sm text-gray-600 mt-1">
                    Manage gym notifications, reminders, and automated messages
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-50 rounded-lg px-3 py-1.5">
                  <span className="text-sm text-gray-700">
                    <span className="font-bold">{notifications.filter(n => !n.read).length}</span> unread
                  </span>
                </div>
                <button className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span className="hidden sm:inline">Settings</span>
                </button>
              </div>
            </div>

            {/* Tabs - Desktop */}
            {!isMobileView ? (
              <div className="flex space-x-1 border-b border-gray-200">
                {tabs.map(tab => {
                  const Icon = tab.icon;
                  const unreadCount = getTabUnreadCount(tab.id);
                  
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-4 py-3 font-medium relative transition-colors ${
                        activeTab === tab.id
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                      {unreadCount > 0 && (
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          activeTab === tab.id
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {unreadCount}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Mobile Tabs */
              <div className="overflow-x-auto pb-2">
                <div className="flex space-x-2 min-w-max">
                  {tabs.map(tab => {
                    const Icon = tab.icon;
                    const unreadCount = getTabUnreadCount(tab.id);
                    
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex flex-col items-center p-3 rounded-lg min-w-[100px] transition-colors relative ${
                          activeTab === tab.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <Icon className="w-5 h-5 mb-2" />
                        <span className="text-xs font-medium text-center">{tab.label.split(' ')[0]}</span>
                        {unreadCount > 0 && (
                          <span className={`absolute top-1 right-1 px-1.5 py-0.5 text-xs rounded-full ${
                            activeTab === tab.id
                              ? 'bg-white text-blue-600'
                              : 'bg-blue-100 text-blue-600'
                          }`}>
                            {unreadCount}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Content */}
          <div className="lg:col-span-2">
            {renderContent()}
          </div>

          {/* Right Column - Stats & Quick Actions */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stats Overview */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Notifications Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total notifications</span>
                  <span className="font-bold text-gray-900">{notifications.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Unread</span>
                  <span className="font-bold text-blue-600">{notifications.filter(n => !n.read).length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Today</span>
                  <span className="font-bold text-gray-900">4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">This week</span>
                  <span className="font-bold text-gray-900">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">High priority</span>
                  <span className="font-bold text-red-600">{notifications.filter(n => n.priority === 'high').length}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Send className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Send bulk message</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
                
                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Calendar className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Schedule reminders</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
                
                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Download className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Export logs</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
                
                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <Settings className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Notification settings</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm text-gray-700">Message sent to 45 members</p>
                    <p className="text-xs text-gray-500">10 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-sm text-gray-700">Reminder scheduled for tomorrow</p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div>
                    <p className="text-sm text-gray-700">New template created</p>
                    <p className="text-xs text-gray-500">3 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <div>
                    <p className="text-sm text-gray-700">WhatsApp API connected</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;