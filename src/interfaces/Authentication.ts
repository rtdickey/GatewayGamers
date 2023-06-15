export interface User {
  identityProvider: string;
  userId: string;
  userDetails: string;
  userRoles: string[];
}

export interface AuthContextType {
  user: User;
  login: (userInfo: any) => void;
  logout: () => void;
}

export interface ClaimData {
  typ: string;
  val: string;
}

export interface ClientPrincipalData {
  identityProvider: string;
  userId: string;
  userDetails: string;
  userRoles: string[];
  claims: ClaimData[];
}
