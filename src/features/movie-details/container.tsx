import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { moviesApi } from 'services/movies-service';
import { useDefaultPoster } from 'hooks/use-default-poster';
import { currencyFormatter, timeFormatter } from 'shared/utils';

import MovieDetails from './component';

const MovieDetailsContainer = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const {
    data: movieData,
    isLoading,
  } = moviesApi.useFetchMovieByIdQuery({ id: movieId });
  const defaultPosterHandler = useDefaultPoster();
  const movie = {
    ...movieData,
    genres: movieData?.genres.join(', '),
    releaseYear: new Date(movieData?.release_date).getFullYear(),
    budget: currencyFormatter(movieData?.budget, 'USD'),
    revenue: currencyFormatter(movieData?.revenue, 'USD'),
    runtime: timeFormatter(movieData?.runtime),
  };

  return (
    <MovieDetails
      movie={movie}
      isLoading={isLoading}
      navigate={navigate}
      handleDefaultPoster={defaultPosterHandler} />
  );
};

export default MovieDetailsContainer;
