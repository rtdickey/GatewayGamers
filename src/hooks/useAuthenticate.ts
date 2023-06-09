import { useEffect, useState } from "react";
import { ClientPrincipalData } from "../interfaces/Authentication";

export function useAuthenticate() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<ClientPrincipalData | null>(null);
  const [hasFetchedUser, setHasFetchedUser] = useState(false);

  useEffect(() => {
    async function fetchUserAuthentication() {
      try {
        const response = await fetch("/.auth/me");
        const payload = await response.json();
        const { clientPrincipal } = payload;
        setUser(clientPrincipal);
        setIsAuthenticated(!!clientPrincipal);
      } catch (ex) {}
      setHasFetchedUser(true);
    }

    fetchUserAuthentication();
  }, []);

  return { isAuthenticated, user, hasFetchedUser };
}
