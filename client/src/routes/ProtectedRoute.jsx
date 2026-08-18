import { useContext } from "react";
import AuthContext from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute(params) {
  const { user } = useContext(AuthContext);
  console.log("protected User:", user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
