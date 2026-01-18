import React, { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard,
  Users,
  CreditCard,
  FileText,
  Calendar,
  Dumbbell,
  TrendingUp,
  Settings,
  Database,
  Shield,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Building2,
  Activity,
  BarChart3,
  Wallet,
  Clock,
  Target,
  PieChart,
  Award,
  Bell,
  Search,
  LogOut,
  Cpu,
  Globe,
  ShieldCheck,
  ChevronLeft,
  UserCheck,
  Receipt,
  Building2Icon,
  List,
  PlusCircle
} from 'lucide-react';
import { CardMembership, CreateNewFolder } from '@mui/icons-material';

const AdminControl = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState(['Dashboard', 'Gym Network']);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleMenu = (menu) => {
    if (expandedMenus.includes(menu)) {
      setExpandedMenus(expandedMenus.filter(item => item !== menu));
    } else {
      setExpandedMenus([...expandedMenus, menu]);
    }
  };

  // Compute active menu based on current route
  const getActiveMenu = () => {
    const path = location.pathname;
    if (path === '/admin-control' || path === '/') return 'Dashboard';
    if (path.startsWith('/admin-control/members')) return 'Members';
    if (path.startsWith('/admin-control/gyms')) return 'Gym Network';
    if (path.startsWith('/admin-control/plans')) return 'Subscriptions';
    if (path.startsWith('/admin-control/system')) return 'System';
    return 'Dashboard';
  };

  const activeMenu = getActiveMenu();

 const menuItems = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={16} />,
    path: "/admin-control",
    subItems: []
  },
  {
    name: "Members",
    icon: <Users size={16} />,
    badge: "427",
    path: "/admin-control/members",
    subItems: [
      { 
        name: "All Members", 
        path: "/admin-control/members", 
        icon: <UserCheck size={14} /> 
      },
    ]
  },
  {
    name: "Gym Master",                    // ← NEW SECTION
    icon: <Building2 size={16} />,          // or <Dumbbell />, <Home />, <Building />, etc.
    path: "/admin-control/gyms",            // main link (can be first sub-item or overview)
    subItems: [
      { 
        name: "Manage Gym", 
        path: "/admin-control/gyms", 
        icon: <List size={14} />               // or <Building />, <Settings />
      },
      { 
        name: "Add New Gym", 
        path: "/admin-control/gyms/new", 
        icon: <PlusCircle size={14} />         // or <Plus />, <BuildingPlus />
      }
    ]
  },
  {
    name: "Subscriptions",
    icon: <FileText size={16} />,
    badge: "412",
    path: "/admin-control/plans",
    subItems: [
      { 
        name: "Manage Plans", 
        path: "/admin-control/plans", 
        icon: <CardMembership size={14} /> 
      },
      { 
        name: "Add New Plans", 
        path: "/admin-control/plans/new", 
        icon: <CreateNewFolder size={14} /> 
      }
    ]
  },
  {
    name: "System",
    icon: <Settings size={16} />,
    path: "/admin-control/system",
    subItems: [
      { name: "Database", path: "/admin-control/system/database", icon: <Database size={14} /> },
      { name: "Security", path: "/admin-control/system/security", icon: <ShieldCheck size={14} /> },
      { name: "Support", path: "/admin-control/system/support", icon: <HelpCircle size={14} /> }
    ]
  }
];
  const gyms = [
    { name: "FitOrbit Central", status: "active", city: "Mumbai" },
    { name: "FitOrbit Elite", status: "active", city: "Delhi" },
    { name: "FitOrbit Pro", status: "maintenance", city: "Bangalore" },
    { name: "FitOrbit Plus", status: "active", city: "Chennai" }
  ];

  // Helper to check if sub-item is active
  const isSubActive = (subPath) => location.pathname === subPath;

  return (
    <div className="min-h-screen ">
      {/* Sidebar */}
      <div className={`bg-white h-screen fixed left-0 top-0 border-r border-gray-200 flex flex-col transition-all duration-300 ${
        sidebarCollapsed ? 'w-16' : 'w-64'
      }`}>
        
        {/* Header */}
        <div className={`border-b border-gray-200 ${sidebarCollapsed ? 'p-3' : 'px-5 py-4'}`}>
          {!sidebarCollapsed ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                
                <div className="">
                  <h1 className="text-base font-semibold text-gray-900">FitOrbit</h1>
                  <div className="flex items-center mt-0.5">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1"></div>
                    <span className="text-xs font-medium text-blue-600">Super Admin</span>
                  </div>
                </div>
              </div>
              
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded flex items-center justify-center">
                <Target size={16} className="text-white" />
              </div>
            </div>
          )}

          {/* Search - Expanded only */}
          {!sidebarCollapsed && (
            <div className="relative mt-4">
              <Search size={14} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
        </div>

    

        {/* Navigation Menu */}
        <div className={`flex-1 overflow-y-auto ${sidebarCollapsed ? 'py-3' : 'py-4'}`}>
          <div className={`space-y-0.5 ${sidebarCollapsed ? 'px-2' : 'px-3'}`}>
            {menuItems.map((item) => (
              <div key={item.name}>
                {sidebarCollapsed ? (
                  // Collapsed View
                  <div className="relative">
                    <div
                      className={`w-10 h-10 mx-auto flex items-center justify-center rounded cursor-pointer transition-colors ${
                        activeMenu === item.name 
                          ? 'bg-blue-600 text-white' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      onClick={() => navigate(item.path)}
                    >
                      {item.icon}
                      
                    </div>
                  </div>
                ) : (
                  // Expanded View
                  <div className="mb-0.5">
                    <div
                      className={`flex items-center justify-between p-2.5 rounded cursor-pointer transition-colors ${
                        activeMenu === item.name 
                          ? 'bg-blue-600 text-white' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => {
                        navigate(item.path);
                        if (item.subItems.length > 0) {
                          toggleMenu(item.name);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <div className={`w-6 h-6 flex items-center justify-center mr-3 ${
                          activeMenu === item.name ? 'text-white' : 'text-gray-600'
                        }`}>
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium">{item.name}</span>
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                       
                        {item.subItems.length > 0 && (
                          <span className={activeMenu === item.name ? 'text-white/80' : 'text-gray-400'}>
                            {expandedMenus.includes(item.name) ? 
                              <ChevronDown size={14} /> : 
                              <ChevronRight size={14} />
                            }
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Sub-items */}
                    {item.subItems.length > 0 && expandedMenus.includes(item.name) && (
                      <div className="ml-9 mt-0.5 mb-1 space-y-0.5 border-l border-gray-200">
                        {item.subItems.map((subItem) => (
                          <div
                            key={subItem.name}
                            className={`flex items-center p-2 pl-3 text-sm cursor-pointer rounded transition-colors ${
                              isSubActive(subItem.path)
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                            }`}
                            onClick={() => navigate(subItem.path)}
                          >
                            <span className="mr-2 text-gray-400">{subItem.icon}</span>
                            <span className="flex-1">{subItem.name}</span>
                            {subItem.city && (
                              <span className="text-xs text-gray-400 ml-2">({subItem.city})</span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

         
        </div>

        {/* Admin Profile */}
        <div className="border-t border-gray-200">
          {sidebarCollapsed ? (
            <div className="p-2">
              <button className="w-10 h-10 mx-auto flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                <Bell size={16} />
              </button>
            </div>
          ) : (
            <>
              <div className="px-3 py-3">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">SA</span>
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="text-sm font-semibold text-gray-900">Super Admin</div>
                    <div className="text-xs text-gray-500">System Manager</div>
                  </div>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Bell size={16} />
                  </button>
                </div>
              </div>
              <div className="px-3 py-2 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center text-gray-500">
                    <Cpu size={12} className="mr-1" />
                    <span>v2.4.1</span>
                  </div>
                  <button className="flex items-center text-red-600 hover:text-red-700">
                    <LogOut size={12} className="mr-1" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </>
          )}
          
          {!sidebarCollapsed && (
            <div className="px-3 py-1.5 border-t border-gray-100 bg-gray-50">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></div>
                  <span className="text-gray-600">System Online</span>
                </div>
                <ShieldCheck size={12} className="text-green-500" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Collapse Toggle - Only when collapsed */}
      {sidebarCollapsed && (
        <button 
          onClick={() => setSidebarCollapsed(false)}
          className="fixed left-16 top-4 w-6 h-6 bg-white border border-gray-200 rounded-r flex items-center justify-center text-gray-500 hover:text-gray-700 shadow-sm z-10"
        >
          <ChevronRight size={12} />
        </button>
      )}

      {/* Main Content Area */}
     <div className="m-3">
       <div className={sidebarCollapsed ? 'ml-16' : 'ml-64 '}>
        <Outlet />
      </div>
     </div>
    </div>
  );
};

export default AdminControl;