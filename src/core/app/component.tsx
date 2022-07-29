import React, { useState } from 'react';

import { moviesApi } from 'services/movies-service';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    data: moviesData,
  } = moviesApi.useFetchMoviesQuery({ search: searchQuery, searchBy: 'title' });

  console.log(moviesData?.data);

  return (
    <input type="text" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
  );
};

export default App;
