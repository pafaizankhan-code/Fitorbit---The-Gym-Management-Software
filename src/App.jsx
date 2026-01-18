import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// ── Pages ────────────────────────────────────────────────────────────────
import Login from "./Pages/Login/Login";
import VendorDashboard from "./Pages/Vendor_DashBaord/Vendor_DashBaord";
import AllMembers from "./Pages/Vendor_DashBaord/Pages/AllMembers/AllMembers";
import Settings from "./Pages/Vendor_DashBaord/Pages/Settings/Settings";
import MainVendordahbaord from "./Pages/Vendor_DashBaord/Pages/Vendordahbaord/MainVendordahbaord";
import Help from "./Pages/Vendor_DashBaord/Pages/Help/Help";

import BookDemo from "./Pages/BookDemo/BookDemo";

import AddNewmember from "./Pages/Vendor_DashBaord/Pages/AllMembers/AddNewmember/AddNewmember";

// ── Layout & Shared Components ───────────────────────────────────────────
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import FitOrbitChatbot from "./Pages/HomePages/FitOrbitChatbot/FitOrbitChatbot";
import SimpleCookieConsent from "./Pages/HomePages/SimpleCookieConsent/SimpleCookieConsent";
import AdminControl from "./Pages/AdminControl/AdminControl";
import MembrshipPlans from "./Pages/Vendor_DashBaord/Pages/MembrshipPlans/MembrshipPlans";
import AddPlans from "./Pages/Vendor_DashBaord/Pages/MembrshipPlans/AddPlans/AddPlans";
import TodayAttendece from "./Pages/Vendor_DashBaord/Pages/TodayAttendece/TodayAttendece";
import StaffManagement from "./Pages/Vendor_DashBaord/Pages/StaffManagement/StaffManagement";
import AddStaffManagement from "./Pages/Vendor_DashBaord/Pages/StaffManagement/AddStaffManagement/AddStaffManagement";
import Staffpermissions from "./Pages/Vendor_DashBaord/Pages/StaffManagement/Staffpermissions/Staffpermissions";
import SalarySetup from "./Pages/Vendor_DashBaord/Pages/StaffManagement/SalarySetup/SalarySetup";
import Manage_expense from "./Pages/Vendor_DashBaord/Pages/Manage_expense/Manage_expense";
import AddManage_expense from "./Pages/Vendor_DashBaord/Pages/Manage_expense/AddManage_expense/AddManage_expense";
import MamageTypesOfExpense from "./Pages/Vendor_DashBaord/Pages/Manage_expense/MamageTypesOfExpense/MamageTypesOfExpense";
import Notifications from "./Pages/Vendor_DashBaord/Pages/Notifications/Notifications";
import Usermaster from "./Pages/AdminControl/Component/AllMembers/Usermaster";
import AllGyms from "./Pages/AdminControl/Component/AllGyms/AllGyms";
import GymPlans from "./Pages/AdminControl/Component/GymPlans/GymPlans";
import AddNewGymPlans from "./Pages/AdminControl/Component/GymPlans/AddNewGymPlans/AddNewGymPlans";
import AddNewGyms from "./Pages/AdminControl/Component/AllGyms/AddNewGyms/AddNewGyms";
import AllLeads from "./Pages/Vendor_DashBaord/Pages/AllLeads/AllLeads";
import AddNewLeads from "./Pages/Vendor_DashBaord/Pages/AllLeads/AddNewLeads/AddNewLeads";
import DietPlans from "./Pages/Vendor_DashBaord/Pages/DietPlans/DietPlans";
import AddDietPlans from "./Pages/Vendor_DashBaord/Pages/DietPlans/AddDietPlans/AddDietPlans";
import Workoutplans from "./Pages/Vendor_DashBaord/Pages/Workoutplans/Workoutplans";
import AddWorkoutplans from "./Pages/Vendor_DashBaord/Pages/Workoutplans/AddWorkoutplans/AddWorkoutplans";
import ManageInvoice from "./Pages/Vendor_DashBaord/Pages/ManageInvoice/ManageInvoice";
import Addinvoices from "./Pages/Vendor_DashBaord/Pages/ManageInvoice/Addinvoices/Addinvoices";

function AppContent() {
  const location = useLocation();

  // Hide normal Header + Footer + Cookie banner on these routes
  const isDashboardRoute =
    location.pathname.startsWith("/ultimate-control") ||
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/admin-control");

  return (
    <>
      {/* Only show public layout elements outside dashboard areas */}
      {!isDashboardRoute && <Header />}

      <ScrollToTop />

      {/* You can uncomment when you're ready to show chatbot on public pages */}
      {/* {!isDashboardRoute && <FitOrbitChatbot />} */}

      {!isDashboardRoute && <SimpleCookieConsent />}

      <Routes>
        {/* ── Public Routes ──────────────────────────────────────────────── */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-demo" element={<BookDemo />} />

        {/* ── Vendor Dashboard (Nested Routes) ───────────────────────────── */}
        <Route path="/ultimate-control" element={<VendorDashboard />}>
          {/* Default / index route when entering /ultimate-control */}
          <Route index element={<MainVendordahbaord />} />

          {/* Members */}
          <Route path="members" element={<AllMembers />} />
          <Route path="members/add" element={<AddNewmember />} />

          {/* Membership  */}

          <Route path="memberships/plans" element={<MembrshipPlans />} />
          <Route path="memberships/create" element={<AddPlans />} />

          <Route path="attendance/today" element={<TodayAttendece />} />

          <Route path="staff/all" element={<StaffManagement />} />
          <Route path="staff/add" element={<AddStaffManagement />} />
          <Route path="staff/permissions" element={<Staffpermissions />} />
          <Route path="staff/salary" element={<SalarySetup />} />

          <Route path="expenses/manage_expense" element={<Manage_expense />} />
          <Route path="expenses/add" element={<AddManage_expense />} />
          <Route path="expenses/types" element={<MamageTypesOfExpense />} />

          <Route path="notifications/all" element={<Notifications />} />

          
          <Route path="leads/all" element={<AllLeads />} />
          <Route path="leads/add" element={<AddNewLeads />} />


          <Route path="diet-workout/diet-plans" element={<DietPlans />} />
          <Route path="diet-workout/add-diet" element={<AddDietPlans />} />
          <Route path="diet-workout/workout-plans" element={<Workoutplans />} />
          <Route path="diet-workout/add-workout" element={<AddWorkoutplans />} />


          <Route path="finance/invoices" element={<ManageInvoice />} />
          <Route path="finance/add-invoices" element={<Addinvoices />} />


          {/* Settings & Others */}
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
        </Route>

        {/* ── Admin Area ─────────────────────────────────────────────────── */}
        <Route path="/admin-control" element={<AdminControl />}>
          {/* Default child route */}
          <Route index element={<AdminControl />} />

          {/* Child routes */}
          <Route path="members" element={<Usermaster />} />
          <Route path="gyms" element={<AllGyms />} />
          <Route path="gyms/new" element={<AddNewGyms />} />
          <Route path="plans" element={<GymPlans />} />
          <Route path="plans/new" element={<AddNewGymPlans />} />
          <Route path="plans/edit/:id" element={<AddNewGymPlans />} />
          <Route path="plans/view/:id" element={<AddNewGymPlans />} />
        </Route>

        {/* ── Catch-all (404) ────────────────────────────────────────────── */}
        <Route
          path="*"
          element={
            <div className="p-10 text-2xl font-medium text-center">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>

      {!isDashboardRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
