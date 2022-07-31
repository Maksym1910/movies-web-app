import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'components/home/component';
import MovieDetails from 'features/movie-details';
import MoviesList from 'components/movies-list';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:movieId" element={<MovieDetails />} />
      <Route path="*" element={<Home />} />
    </Routes>
    <MoviesList />
  </BrowserRouter>
);

export default AppRouter;
