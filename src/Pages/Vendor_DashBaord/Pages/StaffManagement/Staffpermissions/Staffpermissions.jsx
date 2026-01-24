import React, { useState, useEffect } from 'react';
import { 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Search,
  Save,
  Lock,
  User,
  Shield,
  Eye,
  Edit,
  Trash2,
  Filter,
  Menu,
  ChevronLeft
} from 'lucide-react';

const Staffpermissions = () => {
  // Mock data for staff members
  const initialStaff = [
    { id: 1, name: 'Amit Sharma', email: 'amit.sharma@company.in', role: 'Admin', avatar: 'AS', status: 'active' },
    { id: 2, name: 'Priya Verma', email: 'priya.verma@company.in', role: 'Manager', avatar: 'PV', status: 'active' },
    { id: 3, name: 'Rahul Mehta', email: 'rahul.mehta@company.in', role: 'Editor', avatar: 'RM', status: 'inactive' },
    { id: 4, name: 'Neha Singh', email: 'neha.singh@company.in', role: 'Viewer', avatar: 'NS', status: 'active' },
    { id: 5, name: 'Vikram Patel', email: 'vikram.patel@company.in', role: 'Contributor', avatar: 'VP', status: 'active' },
    { id: 6, name: 'Anjali Iyer', email: 'anjali.iyer@company.in', role: 'Viewer', avatar: 'AI', status: 'inactive' },
  ];

  // Permission categories and individual permissions
  const permissionCategories = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      description: 'Access to dashboard and analytics',
      permissions: [
        { id: 'view_dashboard', name: 'View Dashboard', description: 'Can view main dashboard' },
        { id: 'export_data', name: 'Export Data', description: 'Can export dashboard data' },
      ]
    },
    {
      id: 'content',
      name: 'Content Management',
      description: 'Manage website content',
      permissions: [
        { id: 'create_content', name: 'Create Content', description: 'Can create new content' },
        { id: 'edit_content', name: 'Edit Content', description: 'Can edit existing content' },
        { id: 'delete_content', name: 'Delete Content', description: 'Can delete content' },
        { id: 'publish_content', name: 'Publish Content', description: 'Can publish content' },
      ]
    },
    {
      id: 'users',
      name: 'User Management',
      description: 'Manage system users',
      permissions: [
        { id: 'view_users', name: 'View Users', description: 'Can view user list' },
        { id: 'edit_users', name: 'Edit Users', description: 'Can edit user details' },
        { id: 'delete_users', name: 'Delete Users', description: 'Can delete users' },
      ]
    },
    {
      id: 'settings',
      name: 'System Settings',
      description: 'Configure system settings',
      permissions: [
        { id: 'view_settings', name: 'View Settings', description: 'Can view system settings' },
        { id: 'edit_settings', name: 'Edit Settings', description: 'Can modify system settings' },
      ]
    },
    {
      id: 'reports',
      name: 'Reports',
      description: 'Generate and view reports',
      permissions: [
        { id: 'view_reports', name: 'View Reports', description: 'Can view all reports' },
        { id: 'generate_reports', name: 'Generate Reports', description: 'Can generate new reports' },
      ]
    }
  ];

  // Predefined roles with permissions
  const predefinedRoles = {
    admin: ['view_dashboard', 'export_data', 'create_content', 'edit_content', 'delete_content', 'publish_content', 'view_users', 'edit_users', 'delete_users', 'view_settings', 'edit_settings', 'view_reports', 'generate_reports'],
    manager: ['view_dashboard', 'export_data', 'create_content', 'edit_content', 'publish_content', 'view_users', 'view_settings', 'view_reports', 'generate_reports'],
    editor: ['view_dashboard', 'create_content', 'edit_content', 'publish_content', 'view_reports'],
    contributor: ['view_dashboard', 'create_content', 'edit_content'],
    viewer: ['view_dashboard', 'view_reports']
  };

  const [staff, setStaff] = useState(initialStaff);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [permissions, setPermissions] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isSaving, setIsSaving] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [customRoleName, setCustomRoleName] = useState('');
  const [isMobileView, setIsMobileView] = useState(false);
  const [showStaffList, setShowStaffList] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Check mobile view
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileView(mobile);
      if (mobile) {
        setShowStaffList(true);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize permissions for each staff member
  useEffect(() => {
    const initialPermissions = {};
    initialStaff.forEach(member => {
      initialPermissions[member.id] = predefinedRoles[member.role.toLowerCase()] || [];
    });
    setPermissions(initialPermissions);
  }, []);

  // Filter staff based on search and filters
  const filteredStaff = staff.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || member.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || member.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // Toggle permission for selected staff
  const togglePermission = (permissionId) => {
    if (!selectedStaff) return;
    
    setPermissions(prev => {
      const currentPermissions = prev[selectedStaff.id] || [];
      const updatedPermissions = currentPermissions.includes(permissionId)
        ? currentPermissions.filter(p => p !== permissionId)
        : [...currentPermissions, permissionId];
      
      return {
        ...prev,
        [selectedStaff.id]: updatedPermissions
      };
    });
  };

  // Apply predefined role to selected staff
  const applyRole = (role) => {
    if (!selectedStaff) return;
    
    setPermissions(prev => ({
      ...prev,
      [selectedStaff.id]: predefinedRoles[role] || []
    }));
    
    // Update staff role
    setStaff(prev => prev.map(member => 
      member.id === selectedStaff.id ? { ...member, role: role.charAt(0).toUpperCase() + role.slice(1) } : member
    ));
  };

  // Save permissions
  const handleSave = () => {
    if (!selectedStaff) return;
    
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      alert(`Permissions saved for ${selectedStaff.name}`);
    }, 1000);
  };

  // Toggle staff status
  const toggleStaffStatus = (staffId) => {
    setStaff(prev => prev.map(member => 
      member.id === staffId 
        ? { ...member, status: member.status === 'active' ? 'inactive' : 'active' }
        : member
    ));
    
    // If the toggled staff is selected, update selection
    if (selectedStaff?.id === staffId) {
      setSelectedStaff(prev => ({
        ...prev,
        status: prev.status === 'active' ? 'inactive' : 'active'
      }));
    }
  };

  // Calculate permission statistics
  const getPermissionStats = () => {
    if (!selectedStaff) return { total: 0, granted: 0 };
    const totalPermissions = permissionCategories.flatMap(cat => cat.permissions).length;
    const grantedPermissions = permissions[selectedStaff.id]?.length || 0;
    return { total: totalPermissions, granted: grantedPermissions };
  };

  const stats = getPermissionStats();

  // Mobile Staff List Component
  const MobileStaffList = () => (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Search and Filters */}
      <div className="p-3 border-b">
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search staff..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="w-full text-sm border border-gray-300 rounded-lg px-2 py-2"
          >
            <option value="all">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Editor">Editor</option>
            <option value="Contributor">Contributor</option>
            <option value="Viewer">Viewer</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full text-sm border border-gray-300 rounded-lg px-2 py-2"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Staff List */}
      <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
        {filteredStaff.map(member => (
          <div
            key={member.id}
            onClick={() => {
              setSelectedStaff(member);
              setShowStaffList(false);
            }}
            className={`p-3 cursor-pointer transition-all ${
              selectedStaff?.id === member.id ? 'bg-blue-50' : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  member.status === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {member.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-gray-900">{member.name}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      member.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {member.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{member.email}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-0.5 text-xs rounded ${
                      member.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
                      member.role === 'Manager' ? 'bg-blue-100 text-blue-800' :
                      member.role === 'Editor' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {member.role}
                    </span>
                    <span className="text-xs text-gray-500">
                      {permissions[member.id]?.length || 0} permissions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Mobile Staff Details Component
  const MobileStaffDetails = () => (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Back Button */}
      <div className="p-3 border-b flex items-center">
        <button
          onClick={() => setShowStaffList(true)}
          className="flex items-center text-blue-600"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span className="font-medium">Back to List</span>
        </button>
      </div>

      {/* Staff Header */}
      <div className="p-4 border-b">
        <div className="flex items-start gap-3">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center font-semibold text-lg ${
            selectedStaff.status === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            {selectedStaff.avatar}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-bold text-gray-900">{selectedStaff.name}</h2>
                <p className="text-sm text-gray-600">{selectedStaff.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                    selectedStaff.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
                    selectedStaff.role === 'Manager' ? 'bg-blue-100 text-blue-800' :
                    selectedStaff.role === 'Editor' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {selectedStaff.role}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    selectedStaff.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {selectedStaff.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">
                  <span className="font-bold">{stats.granted}</span> of {stats.total} permissions
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${(stats.granted / stats.total) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Role Assignment */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <h3 className="font-medium text-gray-700 mb-2">Quick Roles</h3>
        <p className="text-sm text-gray-500 mb-3">Apply predefined permission sets</p>
        <div className="flex flex-wrap gap-2">
          {Object.keys(predefinedRoles).map(role => (
            <button
              key={role}
              onClick={() => applyRole(role)}
              className={`px-3 py-1.5 rounded text-sm font-medium ${
                selectedStaff.role.toLowerCase() === role
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700'
              }`}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="p-4 border-b">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className={`w-full py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 ${
            isSaving 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white'
          }`}
        >
          <Save className="w-4 h-4" />
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      {/* Permissions List */}
      <div className="p-4">
        <div className="space-y-4">
          {permissionCategories.map(category => (
            <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div 
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 cursor-pointer"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded ${
                    permissions[selectedStaff.id]?.some(p => 
                      category.permissions.map(perm => perm.id).includes(p)
                    ) ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'
                  }`}>
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{category.name}</h3>
                    <p className="text-xs text-gray-600">{category.description}</p>
                  </div>
                </div>
                {expandedCategories[category.id] ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </div>
              
              {expandedCategories[category.id] && (
                <div className="p-3 bg-white border-t border-gray-200">
                  <div className="space-y-3">
                    {category.permissions.map(permission => {
                      const isGranted = permissions[selectedStaff.id]?.includes(permission.id);
                      return (
                        <div
                          key={permission.id}
                          onClick={() => togglePermission(permission.id)}
                          className={`p-3 border rounded-lg cursor-pointer ${
                            isGranted
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                                isGranted
                                  ? 'bg-blue-600 border-blue-600'
                                  : 'border-gray-300'
                              }`}>
                                {isGranted && <Check className="w-3 h-3 text-white" />}
                              </div>
                              <div>
                                <h4 className={`font-medium ${
                                  isGranted ? 'text-blue-600' : 'text-gray-900'
                                }`}>
                                  {permission.name}
                                </h4>
                                <p className="text-xs text-gray-600 mt-1">
                                  {permission.description}
                                </p>
                              </div>
                            </div>
                            {isGranted ? (
                              <div className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded">
                                Granted
                              </div>
                            ) : (
                              <div className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                                Not Granted
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile View */}
      {isMobileView ? (
        <div className="p-3">
          {/* Mobile Header */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-600" />
                <div>
                  <h1 className="font-bold text-xl text-gray-900">Staff Permissions</h1>
                  <p className="text-sm text-gray-600">Manage staff access controls</p>
                </div>
              </div>
              <button 
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-2 bg-gray-100 rounded-lg"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {showMobileMenu && (
              <div className="bg-white rounded-lg shadow-sm p-3 mb-3">
                <div className="space-y-2">
                  <button
                    onClick={() => setShowRoleModal(true)}
                    className="w-full flex items-center justify-center gap-2 bg-white border border-blue-600 text-blue-600 px-3 py-2 rounded-lg"
                  >
                    <Edit className="w-4 h-4" />
                    <span className="text-sm font-medium">Create Role</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Main Content - Toggle between list and details */}
          {showStaffList ? (
            <MobileStaffList />
          ) : (
            <MobileStaffDetails />
          )}

          {/* Empty State for Mobile */}
          {!selectedStaff && !showStaffList && (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            
              <h3 className="text-lg font-bold text-gray-700 mb-2">No Staff Selected</h3>
              <p className="text-gray-500 mb-4">Select a staff member to manage permissions</p>
            </div>
          )}
        </div>
      ) : (
        /* Desktop View - Original Code (unchanged) */
        <div className="p-6">
          {/* Desktop Header */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Manage Permissions</h1>
                    <p className="text-gray-600">Manage your gym staff permissions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Staff List Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {/* Filters */}
                <div className="p-4 border-b border-gray-200">
                  <div className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search staff members..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                        <select
                          value={roleFilter}
                          onChange={(e) => setRoleFilter(e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        >
                          <option value="all">All Roles</option>
                          <option value="Admin">Admin</option>
                          <option value="Manager">Manager</option>
                          <option value="Editor">Editor</option>
                          <option value="Contributor">Contributor</option>
                          <option value="Viewer">Viewer</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select
                          value={statusFilter}
                          onChange={(e) => setStatusFilter(e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        >
                          <option value="all">All Status</option>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Staff List */}
                <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
                  {filteredStaff.map(member => (
                    <div
                      key={member.id}
                      onClick={() => setSelectedStaff(member)}
                      className={`p-4 cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
                        selectedStaff?.id === member.id ? 'bg-blue-50 border-r-4 border-blue-600' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                            member.status === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                          }`}>
                            {member.avatar}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium text-gray-900">{member.name}</h3>
                              <span className={`px-2 py-0.5 text-xs rounded-full ${
                                member.status === 'active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {member.status}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">{member.email}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`px-2 py-0.5 text-xs rounded ${
                                member.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
                                member.role === 'Manager' ? 'bg-blue-100 text-blue-800' :
                                member.role === 'Editor' ? 'bg-green-100 text-green-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {member.role}
                              </span>
                              <span className="text-xs text-gray-500">
                                {permissions[member.id]?.length || 0} permissions
                              </span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleStaffStatus(member.id);
                          }}
                          className={`p-2 rounded-lg ${
                            member.status === 'active' 
                              ? 'text-green-600 hover:bg-green-50' 
                              : 'text-gray-400 hover:bg-gray-50'
                          }`}
                        >
                          {member.status === 'active' ? (
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-xs">Active</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="text-xs">Inactive</span>
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Permissions Panel */}
            <div className="lg:col-span-2">
              {selectedStaff ? (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full">
                  {/* Selected Staff Header */}
                  <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-white to-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center font-semibold text-lg ${
                          selectedStaff.status === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {selectedStaff.avatar}
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <h2 className="text-2xl font-bold text-gray-900">{selectedStaff.name}</h2>
                            <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                              selectedStaff.role === 'Admin' ? 'bg-purple-100 text-purple-800 border border-purple-200' :
                              selectedStaff.role === 'Manager' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                              selectedStaff.role === 'Editor' ? 'bg-green-100 text-green-800 border border-green-200' :
                              'bg-gray-100 text-gray-800 border border-gray-200'
                            }`}>
                              {selectedStaff.role}
                            </span>
                          </div>
                          <p className="text-gray-600 mt-1">{selectedStaff.email}</p>
                          <div className="flex items-center gap-4 mt-3">
                            <div className="flex items-center gap-2">
                              <Shield className="w-4 h-4 text-blue-600" />
                              <span className="text-sm text-gray-700">
                                <span className="font-bold text-gray-900">{stats.granted}</span> of {stats.total} permissions granted
                              </span>
                            </div>
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${(stats.granted / stats.total) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={handleSave}
                          disabled={isSaving}
                          className={`px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 ${
                            isSaving 
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                        >
                          <Save className="w-4 h-4" />
                          {isSaving ? 'Saving...' : 'Save Changes'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Quick Role Assignment */}
                  <div className="p-4 border-b border-gray-200 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-700">Quick Role Assignment</h3>
                        <p className="text-sm text-gray-500">Apply predefined permission sets</p>
                      </div>
                      <div className="flex gap-2">
                        {Object.keys(predefinedRoles).map(role => (
                          <button
                            key={role}
                            onClick={() => applyRole(role)}
                            className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                              selectedStaff.role.toLowerCase() === role
                                ? 'bg-blue-600 text-white'
                                : 'bg-white border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                            }`}
                          >
                            {role.charAt(0).toUpperCase() + role.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Permissions List */}
                  <div className="p-6 max-h-[600px] overflow-y-auto">
                    <div className="space-y-6">
                      {permissionCategories.map(category => (
                        <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
                          <div 
                            className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                            onClick={() => toggleCategory(category.id)}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded ${
                                permissions[selectedStaff.id]?.some(p => 
                                  category.permissions.map(perm => perm.id).includes(p)
                                ) ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'
                              }`}>
                                <Lock className="w-4 h-4" />
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900">{category.name}</h3>
                                <p className="text-sm text-gray-600">{category.description}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-gray-500">
                                {category.permissions.filter(p => 
                                  permissions[selectedStaff.id]?.includes(p.id)
                                ).length} of {category.permissions.length} granted
                              </span>
                              {expandedCategories[category.id] ? (
                                <ChevronUp className="w-5 h-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                              )}
                            </div>
                          </div>
                          
                          {expandedCategories[category.id] && (
                            <div className="p-4 bg-white border-t border-gray-200">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {category.permissions.map(permission => {
                                  const isGranted = permissions[selectedStaff.id]?.includes(permission.id);
                                  return (
                                    <div
                                      key={permission.id}
                                      onClick={() => togglePermission(permission.id)}
                                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                                        isGranted
                                          ? 'border-blue-600 bg-blue-50'
                                          : 'border-gray-200 hover:border-gray-300'
                                      }`}
                                    >
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                          <div className={`w-6 h-6 rounded border flex items-center justify-center ${
                                            isGranted
                                              ? 'bg-blue-600 border-blue-600'
                                              : 'border-gray-300'
                                          }`}>
                                            {isGranted && <Check className="w-4 h-4 text-white" />}
                                          </div>
                                          <div>
                                            <h4 className={`font-medium ${
                                              isGranted ? 'text-blue-600' : 'text-gray-900'
                                            }`}>
                                              {permission.name}
                                            </h4>
                                            <p className="text-sm text-gray-600 mt-1">
                                              {permission.description}
                                            </p>
                                          </div>
                                        </div>
                                        {isGranted ? (
                                          <div className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded">
                                            Granted
                                          </div>
                                        ) : (
                                          <div className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                                            Not Granted
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // Empty State
                <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 shadow-sm h-full flex flex-col items-center justify-center p-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <User className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">No Staff Selected</h3>
                    <p className="text-gray-500 mb-6">Select a staff member from the list to view and manage their permissions</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Shield className="w-4 h-4" />
                      <span>Click on any staff member to begin</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Role Creation Modal */}
      {showRoleModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Create New Role</h3>
              <button
                onClick={() => setShowRoleModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role Name
                </label>
                <input
                  type="text"
                  value={customRoleName}
                  onChange={(e) => setCustomRoleName(e.target.value)}
                  placeholder="e.g., Moderator"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Base Permissions On
                </label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option value="editor">Editor Role</option>
                  <option value="viewer">Viewer Role</option>
                  <option value="contributor">Contributor Role</option>
                  <option value="none">Custom (Start from scratch)</option>
                </select>
              </div>
            </div>
            
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowRoleModal(false)}
                className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(`Role "${customRoleName}" created!`);
                  setShowRoleModal(false);
                  setCustomRoleName('');
                }}
                className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create Role
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staffpermissions;