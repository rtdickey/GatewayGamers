import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContextProvider";

const Success = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const verifyAndRedirect = async () => {
    const response = await fetch("/.auth/me");
    const jsonData = await response.json();
    auth.login(jsonData, () => {
      navigate("/dashboard");
    });
  };
  verifyAndRedirect();
  return <div>Success</div>;
};

export default Success;
