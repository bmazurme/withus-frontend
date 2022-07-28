import React from 'react';
import { NavLink } from 'react-router-dom';

function Link(props) {
  const {
    className,
    to,
    label,
    onHandleClick,
  } = props;
  return (
    <li>
      <NavLink
        onClick={onHandleClick}
        className={className}
        to={to}
      >
        {label}
      </NavLink>
    </li>
  );
}

export default Link;
