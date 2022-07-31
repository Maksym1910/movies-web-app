import React, { FC } from 'react';

interface Props {
  handleClick: () => void,
  className: string,
}

const SearchButton: FC<Props> = (props) => (
  <svg
    className={props.className}
    onClick={props.handleClick}
    width="29"
    height="30"
    viewBox="0 0 29 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="18.5" cy="10.5" r="9.5" stroke="#F65261" strokeWidth="2" />
    <path d="M10.5 19.5L1.5 28.5" stroke="#F65261" strokeWidth="2" strokeLinecap="square" />
  </svg>
);

export default SearchButton;
