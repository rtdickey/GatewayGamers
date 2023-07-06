import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GameSearchResponse } from "../../interfaces/BoardGameGeekAPI";

export const gameSearchAPI = createApi({
  reducerPath: "gameSearchAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    searchGamesByName: builder.query<GameSearchResponse[], string>({
      query: (search: string) => `search?search=${search}`,
    }),
    searchGames: builder.mutation({
      query: (search: string) => `search?search=${search}`,
    }),
  }),
});

export const { useSearchGamesByNameQuery, useSearchGamesMutation } =
  gameSearchAPI;
