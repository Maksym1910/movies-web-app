import React, { FC } from 'react';

import { IMovie } from 'models/movies';
import Movie from 'components/movie';

import styles from './component.module.scss';

interface Props {
  movies: IMovie[]
}

const MoviesList: FC<Props> = (props) => (
  <ul className={styles.root}>
    {
      props.movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))
    }
  </ul>
);

export default MoviesList;
