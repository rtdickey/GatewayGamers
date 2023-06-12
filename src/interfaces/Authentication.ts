export interface User {
  identityProvider: string;
  userId: string;
  userDetails: string;
  userRoles: string[];
}

export interface UserContext {
  user: User;
  login: (theUser: User) => void;
  logout: () => void;
}
