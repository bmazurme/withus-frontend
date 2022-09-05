/* eslint-disable react/no-array-index-key */
import React from 'react';
import Star from './Star';

function Rating() {
  const [stars, setStars] = React.useState([
    { clicked: false, active: false },
    { clicked: false, active: false },
    { clicked: false, active: false },
    { clicked: false, active: false },
    { clicked: false, active: false },
  ]);

  const handleClick = (id: number) => {
    const arr: Array<{ clicked: boolean, active: boolean }> = [];
    let i = 0;
    stars.forEach((item) => {
      if (item.clicked) {
        i += 1;
      }
    });

    const val = (id - i >= -1) ? !stars[id].clicked : true;

    stars.map(
      (star, index) => {
        if (id >= index) {
          return arr.push({
            clicked: val,
            active: star.active,
          });
        }
        return arr.push({
          clicked: false,
          active: star.active,
        });
      },
    );
    setStars(arr);
  };

  const handleFocus = (id: number) => {
    const arr: Array<{ clicked: boolean, active: boolean }> = [];
    stars.map(
      (star, index) => {
        if (id >= index) {
          return arr.push({
            clicked: star.clicked,
            active: true,
          });
        }
        return arr.push({
          clicked: star.clicked,
          active: false,
        });
      },
    );
    setStars(arr);
  };

  const handleUnFocus = () => {
    const arr: Array<{ clicked: boolean, active: boolean }> = [];
    stars.map(
      (star) => arr.push({
        clicked: star.clicked,
        active: star.clicked,
      }),
    );
    setStars(arr);
  };

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <Star
          key={index.toString()}
          id={index}
          active={star.active}
          handleClick={handleClick}
          handleFocus={handleFocus}
          handleUnFocus={handleUnFocus}
        />
      ))}
    </div>
  );
}

export default Rating;
