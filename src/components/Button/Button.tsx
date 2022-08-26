/* eslint-disable react/button-has-type */
import React from 'react';

import { IButtonProps } from './IButtonProps';

function Button({
  isValid,
  className,
  value,
  typeButton,
}: IButtonProps) {
  return (
    <button
      type={typeButton}
      className={`button ${className} ${!isValid ? 'button_inactive' : ''}`}
      disabled={!isValid}
    >
      {value}
    </button>
  );
}

export default Button;
