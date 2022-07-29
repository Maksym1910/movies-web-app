import React, { FC } from 'react';

import Logo from 'components/logo';
import Search from 'features/search';
import AddMovie from 'features/add-movie';
import styles from './component.module.scss';

const Header: FC = () => (
  <header className={styles.root}>
    <div className={styles.container}>
      <Logo />
      <AddMovie />
    </div>
    <Search />
  </header>
);

export default Header;
