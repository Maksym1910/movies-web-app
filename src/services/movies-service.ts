import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import env from 'core/env';
import { IMoviesQueryOptions, IMoviesResponse } from 'models/movies';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: env.apiHost,
  }),
  endpoints: (build) => ({
    fetchMovies: build.query<IMoviesResponse, IMoviesQueryOptions>({
      query: (queryParams) => ({
        url: '/movies',
        params: {
          searchBy: queryParams.searchBy,
          search: queryParams.search,
          limit: queryParams.limit,
        },
      }),
    }),
  }),
});
