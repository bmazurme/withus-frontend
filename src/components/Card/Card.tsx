import React from 'react';
import Rating from '../Rating/Rating';

function Card() {
  return (
    <div className="card">
      <img className="card__image" src="/" alt="123" />
      <h5 className="card__title">123</h5>
      <Rating />
      <p className="card__description">
        Ми Лань Сян Дань Цун AA (Одинокий куст с ароматом медовой орхидеи) AA
      </p>
    </div>
  );
}

export default Card;
