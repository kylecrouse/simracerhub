// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const simracerhubApi = createApi({
  reducerPath: 'simracerhubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.simracerhub.com/' }),
  endpoints: (builder) => ({
    getLeagueById: builder.query({
      query: (id) => `leagues/${id}`,
    }),
    getSeasonById: builder.query({
      query: (id) => `seasons/${id}`,
    }),
    getSeasonsBySeriesId: builder.query({
      query: (id) => `series/${id}/seasons`,
    }),
    getScheduleById: builder.query({
      query: (id) => `seasons/${id}/schedule`,
    }),
    getStandingsById: builder.query({
      query: (id) => `seasons/${id}/standings`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetLeagueByIdQuery,
  useGetSeasonByIdQuery,
  useGetSeasonsBySeriesIdQuery,
  useGetScheduleByIdQuery,
  useGetStandingsByIdQuery,
} = simracerhubApi;