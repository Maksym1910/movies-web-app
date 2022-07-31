import React, { FC, SyntheticEvent } from 'react';

import Header from 'components/header';
import Logo from 'components/logo';
import SearchButton from 'components/ui/search-button';
import NavLayout from 'components/ui/nav-layout';

import { IMovieFormatted } from 'models/movies';
import styles from './component.module.scss';

interface Props {
  movie: IMovieFormatted,
  isLoading: boolean,
  handleDefaultPoster: (event: SyntheticEvent) => void,
  navigate: (path: string) => void,
}

const MovieDetails: FC<Props> = (props) => (
  <Header className={styles.root}>
    <NavLayout>
      <Logo />
      <SearchButton
        className={styles.search}
        handleClick={() => props.navigate('/')} />
    </NavLayout>
    {
      props.isLoading
        ? <div>Loading...</div>
        : (
          <section className={styles.detailsContainer}>
            <div>
              <img
                src={props.movie.poster_path}
                alt={props.movie.title}
                onError={props.handleDefaultPoster} />
            </div>
            <section className={styles.details}>
              <section className={styles.titleContainer}>
                <h2 className={styles.title}>{props.movie.title}</h2>
                <p className={styles.vote}>{props.movie.vote_average}</p>
              </section>
              <span className={styles.tagline}>{props.movie.tagline}</span>
              <span className={styles.genres}>{props.movie.genres}</span>
              <section className={styles.metaInfo}>
                <span className={styles.year}>{props.movie.releaseYear}</span>
                <span className={styles.runtime}>{props.movie.runtime}</span>
              </section>
              <span className={styles.meta}>
                <span className={styles.budget}>Budget:</span>
                {props.movie.budget}
              </span>
              <span className={styles.meta}>
                <span className={styles.budget}>Revenue:</span>
                {props.movie.revenue}
              </span>
              <p className={styles.overview}>{props.movie.overview}</p>
            </section>
          </section>
        )
      }
  </Header>
);

export default MovieDetails;
