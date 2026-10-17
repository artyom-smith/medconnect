import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ isAuth }) {
  const token = localStorage.getItem("access-token");

  if (!isAuth && !token) {
    return <Navigate to="/auth" replace />
  }

  return <Outlet />
}