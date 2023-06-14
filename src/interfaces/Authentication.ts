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
