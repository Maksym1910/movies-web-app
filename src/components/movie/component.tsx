import React, { FC } from 'react';
import { IMovie } from 'models/movies';

import { Link } from 'react-router-dom';
import styles from './component.module.scss';
import { useDefaultPoster } from '../../hooks/use-default-poster';

interface Props {
  movie: IMovie,
}

const Movie: FC<Props> = (props) => {
  const releaseYear = new Date(props.movie.release_date).getFullYear();
  const genres = props.movie.genres.join(', ');
  const defaultPosterHandler = useDefaultPoster();

  const handleOnMovieClick = () => {
    document.body.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <li className={styles.item}>
      <Link
        to={`/movie/${props.movie.id}`}
        onClick={handleOnMovieClick}
        className={styles.poster}>
        <img
          src={props.movie.poster_path}
          alt={props.movie.title}
          onError={defaultPosterHandler} />
      </Link>
      <div className={styles.description}>
        <div>
          <h3 className={styles.title}>{props.movie.title}</h3>
          <p className={styles.genres}>{genres}</p>
        </div>
        <p className={styles.year}>{releaseYear}</p>
      </div>
    </li>
  );
};

export default Movie;
