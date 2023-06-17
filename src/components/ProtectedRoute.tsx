import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useAppSelector } from "../hooks/redux";
import Loader from "./Loader";

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const isFetching = useAppSelector((state) => state.user.isFetching);
  const location = useLocation();
  if (isFetching) {
    return <Loader />;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
