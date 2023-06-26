import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { HotResponse } from "../../interfaces/BoardGameGeekAPI";

export const getHotnessAPI = createApi({
  reducerPath: "getHotnessAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getHotness: builder.query<HotResponse[], void>({
      query: () => `hot`,
    }),
  }),
});

export const { useGetHotnessQuery } = getHotnessAPI;
