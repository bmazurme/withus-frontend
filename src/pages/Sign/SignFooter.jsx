import React from 'react';
import { NavLink } from 'react-router-dom';

function SignFooter(props) {
  const { text, link } = props;
  return (
    <div className="sign__footer">
      <p className="sign__help">
        {text}
      </p>
      <NavLink
        className="sign__link"
        to={link?.url}
      >
        {link?.label}
      </NavLink>
    </div>
  );
}

export default SignFooter;
