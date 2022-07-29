import React, { useState } from 'react';

import { moviesApi } from 'services/movies-service';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: moviesData, isLoading, error } = moviesApi.useFetchMoviesQuery(searchQuery);

  console.log(moviesData, isLoading, error);

  return (
    <input type="text" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
  );
};

export default App;
