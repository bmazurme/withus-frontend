import React from 'react';

function Field({ label, value }: Record<string, string>) {
  return (
    <div className="field field_border">
      <div className="field__label">{label}</div>
      <div className="field__value">{value}</div>
    </div>
  );
}

export default Field;
