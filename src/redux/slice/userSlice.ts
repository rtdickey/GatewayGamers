import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ClientPrincipalData } from "../../interfaces/Authentication";

interface UserState {
  isFetching: boolean;
  clientPrincipal?: ClientPrincipalData;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  isFetching: true,
  clientPrincipal: null,
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
    setIsFetching: (state) => {
      state.isFetching = false;
    },
  },
});

export const { setUser, setIsFetching } = userSlice.actions;

export default userSlice.reducer;
