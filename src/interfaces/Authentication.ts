export interface User {
  identityProvider: string;
  userId: string;
  userDetails: string;
  userRoles: string[];
}

export interface AuthContextType {
  user: User;
  login: (userInfo: any, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
}
