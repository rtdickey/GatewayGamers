import { Navigate, useLocation } from "react-router-dom";
import { useAuthenticate } from "../hooks/useAuthenticate";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const [isAuthenticated] = useAuthenticate();
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
