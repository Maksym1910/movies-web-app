import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode
  className: string,
}

const Header: FC<Props> = (props) => (
  <header className={props.className}>
    {props.children}
  </header>
);

export default Header;
