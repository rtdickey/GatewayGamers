import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContextProvider";

const Success = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleOnClick = async () => {
    const response = await fetch("/.auth/me");
    const jsonData = await response.json();
    auth.login(jsonData, () => {
      navigate("/dashboard");
    });
  };
  return (
    <>
      <Button variant="primary" onClick={handleOnClick}>
        Get User
      </Button>
    </>
  );
};

export default Success;
