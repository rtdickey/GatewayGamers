import { useEffect, useState } from "react";

interface ClaimData {
  typ: string;
  val: string;
}

interface ClientPrincipalData {
  identityProvider: string;
  userId: string;
  userDetails: string;
  userRoles: string[];
  claims: ClaimData[];
}

export function useAuthenticate() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<ClientPrincipalData | null>(null);
  useEffect(() => {
    async function fetchUserAuthentication() {
      const response = await fetch("/.auth/me");
      const payload = await response.json();
      const { clientPrincipal } = payload;
      setUser(clientPrincipal);
      setIsAuthenticated(!!clientPrincipal);
    }

    fetchUserAuthentication();
  }, []);

  return [isAuthenticated, user];
}
