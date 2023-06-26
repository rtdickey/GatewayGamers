import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice";
import { gameSearchAPI } from "./services/gameSearch";
import { getHotnessAPI } from "./services/getHotness";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [gameSearchAPI.reducerPath]: gameSearchAPI.reducer,
    [getHotnessAPI.reducerPath]: getHotnessAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(gameSearchAPI.middleware)
      .concat(getHotnessAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
