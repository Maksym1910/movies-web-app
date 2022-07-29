import React, { FC, SyntheticEvent } from 'react';
import { IMovie } from 'models/movies';

import styles from './component.module.scss';

interface Props {
  movie: IMovie,
}

const Movie: FC<Props> = (props) => {
  const releaseYear = new Date(props.movie.release_date).getFullYear();
  const genres = props.movie.genres.join(', ');
  const defaultPoster = 'https://www.thecivic.com.au/template_1/img/default-movie-portrait.jpg';

  const handleImagePosterError = (event: SyntheticEvent) => {
    const target = event.target as HTMLImageElement;
    target.src = defaultPoster;
    target.onerror = null;
  };

  return (
    <li className={styles.item}>
      <a
        href="https://www.google.com.ua/"
        className={styles.poster}
        target="_blank"
        rel="noreferrer">
        <img
          src={props.movie.poster_path}
          alt={props.movie.title}
          onError={handleImagePosterError} />
      </a>
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
