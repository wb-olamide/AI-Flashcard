import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Navbar from "./components/Navbar";
import DashboardLayout from "./Layouts/DashboardLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes  */}
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Routes  */}

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
