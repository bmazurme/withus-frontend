import React from 'react';

import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
// import Popup from '../../components/Popup/Popup';

function Main() {
  return (
    <section id="about" className="about">
      <Logo />
      <Navigation />
      <h3 className="tag">Main</h3>
      <div className="about-me__container" />
      {/* <Popup /> */}
    </section>
  );
}

export default Main;
