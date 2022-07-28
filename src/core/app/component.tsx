import React from 'react';

import { moviesApi } from 'services/movies-service';

const App = () => {
  const { data: moviesData, isLoading, error } = moviesApi.useFetchMoviesQuery(5);

  console.log(moviesData, isLoading, error);

  return (
    <h1>Hello</h1>
  );
};

export default App;
