import React from 'react';
import Rating from '../Rating/Rating';

const img = {
  url: 'https://chairai.ru/image/cache/catalog/dhpeko1-350x350.jpg',
  alt: 'Улун',
};

function Card() {
  return (
    <div className="card">
      <div className="card__container">
        <img className="card__image" src={img.url} alt={img.alt} />
      </div>

      <h5 className="card__title">70 &#8381;</h5>
      <Rating />
      <p className="card__description">
        Ми Лань Сян Дань Цун AA (Одинокий куст с ароматом медовой орхидеи) AA
      </p>
    </div>
  );
}

export default Card;
