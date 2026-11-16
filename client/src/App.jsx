import { Routes, Route } from "react-router-dom";

// PUBLIC LAYOUT
import PublicLayout from "./components/public/Layout";

// HOTEL PAGES
import Home from "./pages/hotel/Home";
import About from "./pages/hotel/About";
import Dining from "./pages/hotel/Dining";
import Meetings from "./pages/hotel/Meetings";
import Amenities from "./pages/hotel/Amenities";
import Verify from "./pages/hotel/Verify";

import ScrollToTop from "./components/common/ScrollToTop";

// ADMIN
import AdminLayout from "./components/admin/Layout";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import AddUser from "./pages/admin/AddUser";
import UserDetails from "./pages/admin/UserDetails";
import UserTracking from "./pages/admin/UserTracking";
import Users from "./pages/admin/Users";

// PROTECTED
import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <>
      <ScrollToTop />
      
      <Routes>
        {/* ================= HOTEL PUBLIC ROUTES ================= */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/meetings-events" element={<Meetings />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/verify" element={<Verify />} />
        </Route>

        {/* ================= ADMIN LOGIN ================= */}
        <Route path="/admin/login" element={<Login />} />

        {/* ================= ADMIN PANEL ================= */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="users" element={<Users />} />
            <Route path="user/:id" element={<UserDetails />} />
            <Route path="user/:id/tracking" element={<UserTracking />} />
            {/* Backward-compatible aliases */}
            <Route path="add-policy" element={<AddUser />} />
            <Route path="policies" element={<Users />} />
            <Route path="policy/:id" element={<UserDetails />} />
            <Route path="policy/:id/tracking" element={<UserTracking />} />
          </Route>
        </Route>

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
