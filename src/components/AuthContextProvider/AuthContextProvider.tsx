// based: on https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/
import { ReactNode, createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { User } from "../../interfaces/Authentication";

//Use example from https://stackoverflow.com/questions/65877884/how-to-fetch-data-and-store-in-react-context-api
const AuthContext = createContext(null);

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useLocalStorage("user", null);

  // call this function when you want to authenticate the user
  const login = async (theUser: User) => {
    setUser(theUser);
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
  };

  const value = useMemo(
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

export default AuthProvider;
