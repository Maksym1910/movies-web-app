import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import env from '../core/env';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: env.apiHost,
  }),
  endpoints: (build) => ({
    fetchMovies: build.query({
      query: (search: string = '', limit: number = 10, searchBy: string = 'title') => ({
        url: '/movies',
        params: {
          searchBy,
          search,
          limit,
        },
      }),
    }),
  }),
});
