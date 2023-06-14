import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContextProvider";

const Success = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogin = async () => {
    const response = await fetch("/.auth/me");
    const jsonData = await response.json();
    if (jsonData.clientPrincipal) {
      auth.login(jsonData);
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };
  handleLogin();
  return <></>;
};

export default Success;
