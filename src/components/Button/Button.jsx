import React from 'react';

function Button(props) {
  const { isValid, className, value } = props;
  return (
    <button
      type="submit"
      className={`button ${className} ${!isValid ? 'button_inactive' : ''}`}
      disabled={!isValid}
    >
      {value}
    </button>
  );
}

export default Button;
