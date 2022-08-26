import React from 'react';
import { NavLink } from 'react-router-dom';

interface IProps {
  text: string,
  link: Record<string, string>,
}

function SignFooter({ text, link }: IProps) {
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
