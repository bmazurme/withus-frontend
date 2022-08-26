import React from 'react';
import { NavLink } from 'react-router-dom';
import { ILinkProps } from './ILinkProps';

function Link(props: ILinkProps) {
  const {
    className,
    to,
    label,
    // onHandleClick,
  } = props;
  return (
    <li>
      <NavLink
        // onClick={onHandleClick}
        className={className}
        to={to}
      >
        {label}
      </NavLink>
    </li>
  );
}

export default Link;
