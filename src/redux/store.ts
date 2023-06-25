import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice";
import { gameSearchAPI } from "./services/gameSearch";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [gameSearchAPI.reducerPath]: gameSearchAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gameSearchAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
