import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContextProvider";

const LogoutSuccess = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  auth.logout(() => {
    navigate("/");
  });
  return <div>LogoutSuccess</div>;
};

export default LogoutSuccess;
