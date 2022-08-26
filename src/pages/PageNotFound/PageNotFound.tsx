import React from 'react';
import { data } from './data';

const { code, text, link } = data;

function PageNotFound() {
  return (
    <section className="error">
      <h2 className="error__code">{code}</h2>
      <p className="error__text">{text}</p>
      <a className="error__link" href={link.url}>
        {link.label}
      </a>
    </section>
  );
}

export default PageNotFound;
