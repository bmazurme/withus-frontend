import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__bottom">
        <p className="footer__copyright">&copy; 2022 Withus</p>
        <p className="footer__text">
          Этот сайт защищен reCAPTCHA и Google
          <a className="footer__link" href="/">Политика конфиденциальности</a>
          <a className="footer__link" href="/">Условия использования</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
