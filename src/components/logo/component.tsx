import React from 'react';

import { Link } from 'react-router-dom';
import styles from './component.module.scss';

const Logo = () => (
  <Link to="/" className={styles.root}>
    <h1 className={styles.title}>
      <strong>netflix</strong>
      roulette
    </h1>
  </Link>
);

export default Logo;
