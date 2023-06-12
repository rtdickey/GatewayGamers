import { ReactNode, createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { UserContext, User } from "../../interfaces/Authentication";
const AuthContext = createContext<UserContext>(null);

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (theUser: User) => {
    setUser(theUser);
    navigate("/dashboard");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value: UserContext = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
