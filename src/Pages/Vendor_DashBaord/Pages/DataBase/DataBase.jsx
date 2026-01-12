import React, { useState } from 'react';
import { 
  Database,
  Server,
  HardDrive,
  Shield,
  Download,
  Upload,
  RefreshCw,
  Trash2,
  Search,
  Filter,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  Edit,
  Copy,
  MoreVertical,
  Plus,
  ChevronDown,
  BarChart3,
  Activity,
  TrendingUp,
  TrendingDown,
  IndianRupee,
  Users,
  Calendar,
  FileText,
  ShieldCheck,
  Key,
  Lock,
  Unlock,
  Archive,
  ArchiveRestore,
  Cloud,
  Network,
  Cpu,
  MemoryStick,
  DatabaseBackup,
  FileLock,
  UserCheck,
  UserX,
  Building,
  Target,
  Award,
  Zap,
  Settings,
  HelpCircle,
  Printer,
  Mail,
  Phone,
  MapPin,
  Star,
  ShoppingCart,
  Package
} from 'lucide-react';

const DataBase = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedBackups, setSelectedBackups] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [backupProgress, setBackupProgress] = useState(0);

  // Database Statistics
  const dbStats = {
    totalSize: '4.2 GB',
    tables: 42,
    membersData: '2.8 GB',
    transactions: '1.1 GB',
    mediaFiles: '0.3 GB',
    backupFrequency: 'Daily',
    lastBackup: '2 hours ago',
    uptime: '99.9%'
  };

  // Recent Backups
  const recentBackups = [
    {
      id: 1,
      name: 'Full Database Backup',
      type: 'Full',
      size: '4.2 GB',
      date: '2024-03-15 02:00',
      status: 'completed',
      location: 'Local Server'
    },
    {
      id: 2,
      name: 'Incremental Backup',
      type: 'Incremental',
      size: '0.8 GB',
      date: '2024-03-14 02:00',
      status: 'completed',
      location: 'Cloud Storage'
    },
    {
      id: 3,
      name: 'Members Data Only',
      type: 'Partial',
      size: '2.8 GB',
      date: '2024-03-13 02:00',
      status: 'completed',
      location: 'Local Server'
    },
    {
      id: 4,
      name: 'Transaction Logs',
      type: 'Log',
      size: '0.4 GB',
      date: '2024-03-12 02:00',
      status: 'failed',
      location: 'Cloud Storage'
    },
    {
      id: 5,
      name: 'Full Database Backup',
      type: 'Full',
      size: '4.1 GB',
      date: '2024-03-11 02:00',
      status: 'completed',
      location: 'Local Server'
    }
  ];

  // Database Tables
  const databaseTables = [
    {
      name: 'members',
      rows: 487,
      size: '1.8 GB',
      lastUpdated: '2024-03-15 10:30',
      growth: '+12%',
      status: 'healthy'
    },
    {
      name: 'transactions',
      rows: 12560,
      size: '0.9 GB',
      lastUpdated: '2024-03-15 10:15',
      growth: '+8%',
      status: 'healthy'
    },
    {
      name: 'attendance',
      rows: 89245,
      size: '0.7 GB',
      lastUpdated: '2024-03-15 09:45',
      growth: '+15%',
      status: 'healthy'
    },
    {
      name: 'inventory',
      rows: 245,
      size: '0.2 GB',
      lastUpdated: '2024-03-14 16:20',
      growth: '+3%',
      status: 'warning'
    },
    {
      name: 'staff',
      rows: 42,
      size: '0.1 GB',
      lastUpdated: '2024-03-14 14:10',
      growth: '+0%',
      status: 'healthy'
    },
    {
      name: 'equipment',
      rows: 156,
      size: '0.1 GB',
      lastUpdated: '2024-03-13 11:30',
      growth: '+2%',
      status: 'healthy'
    }
  ];

  // Maintenance Tasks
  const maintenanceTasks = [
    {
      id: 1,
      task: 'Optimize Tables',
      frequency: 'Weekly',
      lastRun: '2024-03-14',
      nextRun: '2024-03-21',
      status: 'scheduled'
    },
    {
      id: 2,
      task: 'Clean Old Logs',
      frequency: 'Daily',
      lastRun: '2024-03-15',
      nextRun: '2024-03-16',
      status: 'completed'
    },
    {
      id: 3,
      task: 'Update Indexes',
      frequency: 'Monthly',
      lastRun: '2024-03-01',
      nextRun: '2024-04-01',
      status: 'pending'
    },
    {
      id: 4,
      task: 'Check Integrity',
      frequency: 'Weekly',
      lastRun: '2024-03-14',
      nextRun: '2024-03-21',
      status: 'scheduled'
    }
  ];

  const statusColors = {
    completed: 'bg-green-100 text-green-800 border-green-200',
    failed: 'bg-red-100 text-red-800 border-red-200',
    healthy: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    scheduled: 'bg-blue-100 text-blue-800 border-blue-200',
    pending: 'bg-gray-100 text-gray-800 border-gray-200'
  };

  const statusIcons = {
    completed: CheckCircle,
    failed: XCircle,
    healthy: CheckCircle,
    warning: AlertCircle,
    scheduled: Clock,
    pending: Clock
  };

  const toggleBackupSelection = (id) => {
    setSelectedBackups(prev => 
      prev.includes(id) 
        ? prev.filter(backupId => backupId !== id)
        : [...prev, id]
    );
  };

  const selectAllBackups = () => {
    if (selectedBackups.length === recentBackups.length) {
      setSelectedBackups([]);
    } else {
      setSelectedBackups(recentBackups.map(backup => backup.id));
    }
  };

  const startBackup = () => {
    setBackupProgress(0);
    const interval = setInterval(() => {
      setBackupProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gray-50  text-sm sm:text-base">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 sm:mb-6">
          <div>
            <div className="flex items-center mb-2">
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Database Management</h1>
                <p className="text-xs sm:text-sm text-gray-600">Manage and monitor your gym database system</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4 lg:mt-0">
            <button 
              onClick={startBackup}
              className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm w-full sm:w-auto justify-center"
            >
              <DatabaseBackup className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Backup Now</span>
            </button>
            <button className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm w-full sm:w-auto justify-center">
              <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Optimize</span>
            </button>
            <button className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm w-full sm:w-auto justify-center">
              <Printer className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Report</span>
            </button>
          </div>
        </div>

        {/* Database Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Total Size</div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-black">{dbStats.totalSize}</div>
                <div className="text-xs text-gray-500">42 tables</div>
              </div>
              <HardDrive className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Last Backup</div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-black">{dbStats.lastBackup}</div>
                <div className="text-xs text-green-600">Daily backup</div>
              </div>
              <DatabaseBackup className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Uptime</div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-black">{dbStats.uptime}</div>
                <div className="text-xs text-gray-500">System stability</div>
              </div>
              <Server className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Members Data</div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-black">{dbStats.membersData}</div>
                <div className="text-xs text-gray-500">487 records</div>
              </div>
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Search and Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search backups, tables..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            {['overview', 'backups', 'tables', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 text-sm font-medium capitalize ${
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

      {/* Backup Progress */}
      {backupProgress > 0 && backupProgress < 100 && (
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <DatabaseBackup className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <h3 className="text-sm sm:text-base font-bold text-black">Creating Backup...</h3>
            </div>
            <span className="text-xs sm:text-sm text-gray-600">{backupProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
            <div 
              className="bg-blue-600 h-1.5 sm:h-2 rounded-full transition-all duration-300"
              style={{ width: `${backupProgress}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            Do not close this window during backup process
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Backups Table */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-4 sm:mb-6">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <DatabaseBackup className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-black">Recent Backups</h2>
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
                          checked={selectedBackups.length === recentBackups.length}
                          onChange={selectAllBackups}
                          className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
                        />
                      </th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Backup Name</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Type</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Size</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Date</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Status</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBackups.map(backup => {
                      const StatusIcon = statusIcons[backup.status];
                      return (
                        <tr key={backup.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                          <td className="py-2 px-3 sm:py-3 sm:px-4">
                            <input
                              type="checkbox"
                              checked={selectedBackups.includes(backup.id)}
                              onChange={() => toggleBackupSelection(backup.id)}
                              className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
                            />
                          </td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4">
                            <div className="font-medium text-black text-xs sm:text-sm">{backup.name}</div>
                            <div className="text-xs text-gray-500">{backup.location}</div>
                          </td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4">
                            <span className={`px-2 py-0.5 sm:py-1 rounded text-xs font-medium ${
                              backup.type === 'Full' ? 'bg-blue-100 text-blue-800' :
                              backup.type === 'Incremental' ? 'bg-green-100 text-green-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {backup.type}
                            </span>
                          </td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm text-gray-700">{backup.size}</td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm text-gray-700">{backup.date}</td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4">
                            <span className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium border ${statusColors[backup.status]}`}>
                              <StatusIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                              {backup.status}
                            </span>
                          </td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4">
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <button className="p-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded text-xs">
                                <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                              <button className="p-1 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded text-xs">
                                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                              <button className="p-1 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded text-xs">
                                <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Database Tables */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Server className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-black">Database Tables</h2>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium">
                Optimize All
              </button>
            </div>

            <div className="overflow-x-auto -mx-2 sm:mx-0">
              <div className="min-w-[640px] sm:min-w-full">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Table Name</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Rows</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Size</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Last Updated</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Growth</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {databaseTables.map(table => {
                      const StatusIcon = statusIcons[table.status];
                      return (
                        <tr key={table.name} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                          <td className="py-2 px-3 sm:py-3 sm:px-4">
                            <div className="font-medium text-black text-xs sm:text-sm capitalize">{table.name}</div>
                          </td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm text-gray-700">{table.rows.toLocaleString()}</td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm text-gray-700">{table.size}</td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm text-gray-700">{table.lastUpdated}</td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4">
                            <div className="flex items-center text-xs sm:text-sm">
                              {table.growth.startsWith('+') ? (
                                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-1" />
                              ) : (
                                <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 mr-1" />
                              )}
                              <span className={table.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                                {table.growth}
                              </span>
                            </div>
                          </td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4">
                            <span className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium border ${statusColors[table.status]}`}>
                              <StatusIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                              {table.status}
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
        </div>

        {/* Right Column */}
        <div className="space-y-4 sm:space-y-6">
          {/* Maintenance Tasks */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-black">Maintenance Tasks</h2>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium">
                Run All
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {maintenanceTasks.map(task => {
                const StatusIcon = statusIcons[task.status];
                return (
                  <div key={task.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-black text-sm sm:text-base">{task.task}</div>
                      <span className={`inline-flex items-center px-2 py-0.5 sm:px-2 sm:py-1 rounded text-xs font-medium ${statusColors[task.status]}`}>
                        <StatusIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                        {task.status}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Frequency: {task.frequency}</div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Last: {task.lastRun}</span>
                      <span>Next: {task.nextRun}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Storage Breakdown */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <HardDrive className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-black">Storage Breakdown</h2>
              </div>
              <div className="text-xs sm:text-sm text-gray-600">{dbStats.totalSize}</div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-1">
                  <span className="text-gray-700">Members Data</span>
                  <span className="text-black font-medium">{dbStats.membersData}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                  <div className="bg-blue-600 h-1.5 sm:h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-1">
                  <span className="text-gray-700">Transactions</span>
                  <span className="text-black font-medium">{dbStats.transactions}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                  <div className="bg-green-600 h-1.5 sm:h-2 rounded-full" style={{ width: '26%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-1">
                  <span className="text-gray-700">Media Files</span>
                  <span className="text-black font-medium">{dbStats.mediaFiles}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                  <div className="bg-yellow-600 h-1.5 sm:h-2 rounded-full" style={{ width: '7%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-black mb-4 sm:mb-6">Database Actions</h2>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button className="flex flex-col items-center justify-center p-3 sm:p-4 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50">
                <DatabaseBackup className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-black">Backup</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 sm:p-4 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50">
                <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-black">Optimize</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 sm:p-4 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-black">Integrity</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 sm:p-4 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50">
                <FileLock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-black">Security</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBase;