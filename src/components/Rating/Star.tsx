/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

interface IProps {
  id: number,
  active: boolean,
  handleClick: (id: number) => void,
  handleFocus: (id: number) => void,
  handleUnFocus: () => void,
}

function Star(props: IProps) {
  const {
    id,
    handleClick,
    handleFocus,
    handleUnFocus,
    active,
  } = props;
  return (
    <div
      onClick={() => handleClick(id)}
      onPointerEnter={() => handleFocus(id)}
      onPointerLeave={handleUnFocus}
      className={`rating__star${active ? ' rating__star_active' : ''}`}
    />
  );
}

export default Star;
