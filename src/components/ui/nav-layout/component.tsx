import React, { FC, ReactNode } from 'react';

import styles from './component.module.scss';

interface Props {
  children: ReactNode
}

const NavLayout: FC<Props> = (props) => (
  <nav className={styles.root}>
    {props.children}
  </nav>
);

export default NavLayout;
