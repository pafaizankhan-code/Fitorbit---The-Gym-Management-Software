import React, { useState } from 'react';
import { 
  HelpCircle,
  MessageSquare,
  Phone,
  Mail,
  Video,
  FileText,
  BookOpen,
  Search,
  Filter,
  Download,
  Printer,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Clock,
  AlertCircle,
  User,
  Users,
  Settings,
  Globe,
  Smartphone,
  Tablet,
  Monitor,
  Wifi,
  Database,
  Server,
  RefreshCw,
  Shield,
  Key,
  Lock,
  BarChart3,
  Calendar,
  IndianRupee,
  Package,
  Truck,
  ShoppingCart,
  Award,
  Target,
  Heart,
  Dumbbell,
  Building
} from 'lucide-react';

const Help = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [expandedItems, setExpandedItems] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  // Help Categories
  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      items: [
        { id: 'gs1', question: 'How to set up my FitOrbitfile?', answer: 'Navigate to Settings > FitOrbitfile. Fill in your gym details, upload logo, and set business hours.' },
        { id: 'gs2', question: 'How to add my first member?', answer: 'Go to Members > Add Member. Enter personal details, choose membership plan, and process payment.' },
        { id: 'gs3', question: 'Setting up payment methods?', answer: 'Visit Settings > Payment Methods. Connect UPI, card processing, or configure cash payments.' }
      ]
    },
    {
      id: 'members',
      title: 'Member Management',
      icon: Users,
      items: [
        { id: 'm1', question: 'How to manage member attendance?', answer: 'Use the Attendance module. Members can check-in via Mobile Version or reception QR code.' },
        { id: 'm2', question: 'Processing member renewals?', answer: 'Go to Members > Renewals. Set up auto-renewal or manual renewal notifications.' },
        { id: 'm3', question: 'Managing member payments?', answer: 'Use the Payments module to track dues, send reminders, and process payments.' }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Payments',
      icon: IndianRupee,
      items: [
        { id: 'b1', question: 'How to generate invoices?', answer: 'Navigate to Payments > Generate Invoice. Select member, plan, and payment method.' },
        { id: 'b2', question: 'Managing GST and taxes?', answer: 'Go to Settings > Tax Configuration. Set up GST rates for different services.' },
        { id: 'b3', question: 'Exporting financial reports?', answer: 'Visit Reports > Financial. Generate monthly/yearly reports and export to Excel/PDF.' }
      ]
    },
    {
      id: 'equipment',
      title: 'Equipment & Inventory',
      icon: Dumbbell,
      items: [
        { id: 'e1', question: 'Tracking equipment maintenance?', answer: 'Use Equipment > Maintenance Log. Schedule regular checks and track service history.' },
        { id: 'e2', question: 'Managing inventory supplies?', answer: 'Navigate to Inventory > Supplies. Track protein, towels, cleaning supplies stock.' }
      ]
    }
  ];

  // Support Channels
  const supportChannels = [
    {
      id: 'phone',
      title: 'Phone Support',
      description: '24/7 dedicated support line',
      icon: Phone,
      contact: '+91 1800 123 4567',
      availability: 'Available 24/7',
      responseTime: 'Immediate'
    },
    {
      id: 'email',
      title: 'Email Support',
      description: 'Detailed issue resolution',
      icon: Mail,
      contact: 'support@fitorbit.com',
      availability: 'Mon-Sun, 9AM-9PM',
      responseTime: 'Within 4 hours'
    },
    {
      id: 'chat',
      title: 'Live Chat',
      description: 'Instant messaging support',
      icon: MessageSquare,
      contact: 'Chat Now',
      availability: 'Mon-Sat, 8AM-8PM',
      responseTime: 'Within 2 minutes'
    },
    {
      id: 'video',
      title: 'Video Call',
      description: 'Screen sharing assistance',
      icon: Video,
      contact: 'Schedule Call',
      availability: 'By appointment',
      responseTime: 'Scheduled'
    }
  ];

  // Quick Links
  const quickLinks = [
    { id: 1, title: 'System Requirements', icon: Monitor },
    { id: 2, title: 'Mobile Version Setup', icon: Smartphone },
    { id: 3, title: 'Data Backup Guide', icon: Database },
    { id: 4, title: 'Security Settings', icon: Shield },
    { id: 5, title: 'API Documentation', icon: Server },
    { id: 6, title: 'Training Videos', icon: Video }
  ];

  // Recent Tickets
  const recentTickets = [
    {
      id: 'TKT001',
      subject: 'Payment gateway integration issue',
      status: 'resolved',
      date: '2024-03-15',
      priority: 'high'
    },
    {
      id: 'TKT002',
      subject: 'Member attendance not syncing',
      status: 'in-progress',
      date: '2024-03-14',
      priority: 'medium'
    },
    {
      id: 'TKT003',
      subject: 'Report generation error',
      status: 'open',
      date: '2024-03-13',
      priority: 'low'
    },
    {
      id: 'TKT004',
      subject: 'Mobile Version login problem',
      status: 'resolved',
      date: '2024-03-12',
      priority: 'high'
    }
  ];

  // System Status
  const systemStatus = [
    { service: 'Web Dashboard', status: 'operational', icon: Monitor },
    { service: 'Mobile Versions', status: 'operational', icon: Smartphone },
    { service: 'Payment Processing', status: 'operational', icon: IndianRupee },
    { service: 'Database Servers', status: 'maintenance', icon: Database },
    { service: 'API Services', status: 'operational', icon: Server },
    { service: 'SMS Gateway', status: 'degraded', icon: MessageSquare }
  ];

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'resolved':
      case 'operational':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'open':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'maintenance':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'degraded':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'resolved':
      case 'operational':
        return CheckCircle;
      case 'in-progress':
        return RefreshCw;
      case 'open':
        return AlertCircle;
      case 'maintenance':
      case 'degraded':
        return Clock;
      default:
        return AlertCircle;
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
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
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Help & Support</h1>
                <p className="text-xs sm:text-sm text-gray-600">Find answers, guides, and contact support</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4 lg:mt-0">
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm w-full sm:w-auto justify-center">
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">New Ticket</span>
            </button>
            <button className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm w-full sm:w-auto justify-center">
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Docs</span>
            </button>
            <button className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm w-full sm:w-auto justify-center">
              <Printer className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Print</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4 sm:mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search help articles, guides, or ask a question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base text-black"
          />
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {supportChannels.map(channel => {
            const Icon = channel.icon;
            return (
              <div key={channel.id} className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-sm sm:text-base">{channel.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{channel.description}</p>
                  </div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Contact:</span>
                    <span className="font-medium text-black">{channel.contact}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Availability:</span>
                    <span className="font-medium text-black">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Response:</span>
                    <span className="font-medium text-black">{channel.responseTime}</span>
                  </div>
                </div>
                <button className="w-full mt-3 sm:mt-4 bg-blue-600 text-white py-2 text-sm rounded-lg font-medium hover:bg-blue-700">
                  Contact Now
                </button>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {['faq', 'tickets', 'status'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-2.5 sm:py-3 font-medium capitalize border-b-2 -mb-px whitespace-nowrap text-xs sm:text-sm ${
                activeTab === tab
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab === 'faq' ? 'FAQ' : 
               tab === 'guides' ? 'Guides' :
               tab === 'tickets' ? 'My Tickets' : 'System Status'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* FAQ Section */}
          {activeTab === 'faq' && (
            <div className="space-y-4 sm:space-y-6">
              {helpCategories.map(category => {
                const Icon = category.icon;
                return (
                  <div key={category.id} className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <h2 className="text-base sm:text-lg md:text-xl font-bold text-black">{category.title}</h2>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4">
                      {category.items.map(item => (
                        <div key={item.id} className="border border-gray-200 rounded-lg">
                          <button
                            onClick={() => toggleExpanded(item.id)}
                            className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50"
                          >
                            <div className="font-medium text-black text-sm sm:text-base pr-2">{item.question}</div>
                            {expandedItems[item.id] ? (
                              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                            ) : (
                              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                            )}
                          </button>
                          
                          {expandedItems[item.id] && (
                            <div className="p-3 sm:p-4 border-t border-gray-200 bg-gray-50">
                              <p className="text-sm sm:text-base text-gray-700">{item.answer}</p>
                              <div className="flex justify-end mt-2 sm:mt-3">
                                <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium">
                                  Was this helpful?
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Tickets Section */}
          {activeTab === 'tickets' && (
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-black">My Support Tickets</h2>
                <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium">
                  View All
                </button>
              </div>

              <div className="overflow-x-auto -mx-2 sm:mx-0">
                <div className="min-w-[640px] sm:min-w-full">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Ticket ID</th>
                        <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Subject</th>
                        <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Status</th>
                        <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Date</th>
                        <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Priority</th>
                        <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTickets.map(ticket => {
                        const StatusIcon = getStatusIcon(ticket.status);
                        const statusColor = getStatusColor(ticket.status);
                        const priorityColor = getPriorityColor(ticket.priority);
                        
                        return (
                          <tr key={ticket.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                            <td className="py-2 px-3 sm:py-3 sm:px-4 font-medium text-black text-xs sm:text-sm">{ticket.id}</td>
                            <td className="py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm text-gray-700">{ticket.subject}</td>
                            <td className="py-2 px-3 sm:py-3 sm:px-4">
                              <span className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium border ${statusColor}`}>
                                <StatusIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                                {ticket.status}
                              </span>
                            </td>
                            <td className="py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm text-gray-700">{ticket.date}</td>
                            <td className="py-2 px-3 sm:py-3 sm:px-4">
                              <span className={`inline-flex items-center px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs font-medium ${priorityColor}`}>
                                {ticket.priority}
                              </span>
                            </td>
                            <td className="py-2 px-3 sm:py-3 sm:px-4">
                              <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm">
                                View
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* System Status */}
          {activeTab === 'status' && (
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-0">
                  <Server className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-black">System Status</h2>
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Last updated: 5 minutes ago
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {systemStatus.map((service, index) => {
                  const Icon = service.icon;
                  const StatusIcon = getStatusIcon(service.status);
                  const statusColor = getStatusColor(service.status);
                  
                  return (
                    <div key={index} className="flex items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                        <div>
                          <div className="font-medium text-black text-sm sm:text-base">{service.service}</div>
                          <div className="text-xs sm:text-sm text-gray-500">Service status</div>
                        </div>
                      </div>
                      <span className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium border ${statusColor}`}>
                        <StatusIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                        {service.status}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-blue-900 text-sm sm:text-base">Scheduled Maintenance</div>
                    <div className="text-xs sm:text-sm text-blue-700">
                      Database servers will be undergoing maintenance on March 20, 2024 from 2:00 AM to 4:00 AM IST.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4 sm:space-y-6">
          {/* Quick Links */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-black mb-4 sm:mb-6">Quick Links</h2>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {quickLinks.map(link => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.id}
                    className="flex flex-col items-center justify-center p-3 sm:p-4 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mb-1 sm:mb-2" />
                    <span className="text-xs sm:text-sm font-medium text-black text-center">{link.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Emergency Support */}
          <div className="bg-white rounded-2xl border border-red-200 p-4 sm:p-6">
            <div className="flex items-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              <div>
                <h3 className="font-bold text-red-700 text-sm sm:text-base mb-1">Emergency Support</h3>
                <p className="text-xs sm:text-sm text-red-600">
                  For critical system outages or security incidents
                </p>
              </div>
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between p-2 sm:p-3 bg-red-50 rounded-lg">
                <div className="font-medium text-red-800 text-xs sm:text-sm">Emergency Hotline</div>
                <div className="font-bold text-red-700 text-sm sm:text-base">+91 98765 43210</div>
              </div>
              <button className="w-full bg-red-600 text-white py-2 sm:py-3 text-sm rounded-lg font-medium hover:bg-red-700">
                Report Emergency
              </button>
            </div>
          </div>

          {/* Documentation */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-black mb-4 sm:mb-6">Documentation</h2>
            <div className="space-y-2 sm:space-y-3">
              <button className="w-full flex items-center justify-between p-2 sm:p-3 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <span className="font-medium text-black text-sm sm:text-base">User Manual</span>
                </div>
                <Download className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              </button>
              
              <button className="w-full flex items-center justify-between p-2 sm:p-3 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <span className="font-medium text-black text-sm sm:text-base">API Guide</span>
                </div>
                <Download className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              </button>
              
              <button className="w-full flex items-center justify-between p-2 sm:p-3 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <span className="font-medium text-black text-sm sm:text-base">Setup Guide</span>
                </div>
                <Download className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Support Hours */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-black mb-3 sm:mb-4">Support Hours</h2>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 text-xs sm:text-sm">Monday - Friday</span>
                <span className="font-medium text-black text-xs sm:text-sm">9:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-xs sm:text-sm">Saturday</span>
                <span className="font-medium text-black text-xs sm:text-sm">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-xs sm:text-sm">Sunday</span>
                <span className="font-medium text-black text-xs sm:text-sm">Emergency Only</span>
              </div>
              <div className="pt-3 sm:pt-4 border-t border-gray-200">
                <div className="text-xs sm:text-sm text-gray-600">
                  All times are in IST (Indian Standard Time)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;