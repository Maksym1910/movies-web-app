import React from 'react';

import Logo from 'components/logo';
import NavLayout from 'components/ui/nav-layout';
import Header from 'components/header';

import AddMovie from 'features/add-movie';
import Search from 'features/search';

import styles from './component.module.scss';

const Home = () => (
  <Header className={styles.root}>
    <NavLayout>
      <Logo />
      <AddMovie />
    </NavLayout>
    <Search />
  </Header>
);

export default Home;
