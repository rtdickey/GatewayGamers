import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContextProvider";

const SuccessLogout = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleClickLogout = async () => {
    auth.logout();
    navigate("/");
  };
  handleClickLogout();
  return <></>;
};

export default SuccessLogout;
