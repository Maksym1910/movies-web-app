import React from 'react';
import { moviesApi } from 'services/movies-service';

import MoviesList from './component';

const MoviesListContainer = () => {
  const { data: moviesData, isLoading } = moviesApi.useFetchMoviesQuery({});

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <MoviesList movies={moviesData.data} />
  );
};

export default MoviesListContainer;
