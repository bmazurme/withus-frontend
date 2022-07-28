import React from 'react';

function Field(props) {
  const { label, value } = props;
  return (
    <div className="field field_border">
      <div className="field__label">{label}</div>
      <div className="field__value">{value}</div>
    </div>
  );
}

export default Field;
