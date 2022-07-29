import React from 'react';

import styles from './component.module.scss';

const Search = () => (
  <section className={styles.root}>
    <h1 className={styles.title}>FIND YOUR MOVIE</h1>
    <div className={styles.inputContainer}>
      <input
        type="text"
        className={styles.input}
        placeholder="What do you want to watch?" />
      <button type="button" className={styles.button}>SEARCH</button>
    </div>
  </section>
);

export default Search;
