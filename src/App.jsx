import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Pages & Components (your existing imports)
import Login from "./Pages/Login/Login";
import VendorDashboard from "./Pages/Vendor_DashBaord/Vendor_DashBaord";
import AllMembers from "./Pages/Vendor_DashBaord/Pages/AllMembers/AllMembers";
import NewMembers from "./Pages/Vendor_DashBaord/Pages/NewMembers/NewMembers";
import AllPayments from "./Pages/Vendor_DashBaord/Pages/AllPayments/AllPayments";
import Settings from "./Pages/Vendor_DashBaord/Pages/Settings/Settings";
import MainVendordahbaord from "./Pages/Vendor_DashBaord/Pages/Vendordahbaord/MainVendordahbaord";
import DataBase from "./Pages/Vendor_DashBaord/Pages/DataBase/DataBase";
import Security from "./Pages/Vendor_DashBaord/Pages/Security/Security";
import Help from "./Pages/Vendor_DashBaord/Pages/Help/Help";
import ClassSchedule from "./Pages/Vendor_DashBaord/Pages/ClassSchedule/ClassSchedule";
import Financialtrakking from "./Pages/Vendor_DashBaord/Pages/Financialtrakking/Financialtrakking";
import Attendance from "./Pages/Vendor_DashBaord/Pages/Attendance/Attendance";
import Performance from "./Pages/Vendor_DashBaord/Pages/Performance/Performance";
import Membergrowth from "./Pages/Vendor_DashBaord/Pages/Membergrowth/Membergrowth";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import BookDemo from "./Pages/BookDemo/BookDemo";
import Subscriptions from "./Pages/Vendor_DashBaord/Pages/Subscriptions/Subscriptions";
import Trainers from "./Pages/Vendor_DashBaord/Pages/Trainers/Trainers";
import Workouts from "./Pages/Vendor_DashBaord/Pages/Workouts/Workouts";
import ScrollToTop from "./Components/ScrollToTop";
import FitOrbitChatbot from "./Pages/HomePages/FitOrbitChatbot/FitOrbitChatbot";
import SimpleCookieConsent from "./Pages/HomePages/SimpleCookieConsent/SimpleCookieConsent";

// ── Helper component to use useLocation ──
function AppContent() {
  const location = useLocation();
  
  // Hide normal Header/Footer on dashboard routes
  const isDashboard = location.pathname.startsWith("/ultimate-control") ||  location.pathname.startsWith("/login");

  return (
    <>
      {!isDashboard && <Header />}
      <ScrollToTop
      />
      {!isDashboard && <FitOrbitChatbot/>}
      {!isDashboard && <SimpleCookieConsent/>}
      
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-demo" element={<BookDemo />} />

        {/* Dashboard with its own layout */}
        <Route path="/ultimate-control" element={<VendorDashboard />}>
          <Route index element={<MainVendordahbaord />} />
          <Route path="members" element={<AllMembers />} />
          <Route path="members/new" element={<NewMembers />} />
          <Route path="finance/payments" element={<AllPayments />} />
          <Route path="finance/subscriptions" element={<Subscriptions />} />
          <Route path="operations/schedule" element={<ClassSchedule />} />
          <Route path="operations/trainers" element={<Trainers />} />
          <Route path="operations/workouts" element={<Workouts />} />
          <Route path="reports/financial" element={<Financialtrakking />} />
          <Route path="reports/attendance" element={<Attendance />} />
          <Route path="reports/performance" element={<Performance />} />
          <Route path="reports/member-growth" element={<Membergrowth />} />
          <Route path="settings" element={<Settings />} />
          <Route path="database" element={<DataBase />} />
          <Route path="security" element={<Security />} />
          <Route path="help" element={<Help />} />
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={<div className="p-10 text-2xl">404 - Page Not Found</div>}
        />
      </Routes>

      {!isDashboard && <Footer />}
    </>
  );
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;