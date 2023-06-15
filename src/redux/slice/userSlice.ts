import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  ClaimData,
  ClientPrincipalData,
} from "../../interfaces/Authentication";

interface UserState {
  clientPrincipal: {
    identityProvider: string;
    userId: string;
    userDetails: string;
    userRoles: string[];
    claims: ClaimData[];
  };
  isAuthenticated: boolean;
}

const initialState: UserState = {
  clientPrincipal: {
    identityProvider: "",
    userId: "",
    userDetails: "",
    userRoles: [],
    claims: [],
  },
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<ClientPrincipalData>) => {
      state.clientPrincipal = action.payload;
      state.isAuthenticated = !!action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
