/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { IInboxProps } from '../../interfaces/interfaces';

function Inbox(props: IInboxProps) {
  const {
    label,
    pattern,
    name,
    placeholder,
    minLength,
    maxLength,
    required,
    errors = {},
    type,
    id,
    autoComplete,
    value,
    onChange,
  } = props;

  return (
    <div className="inbox">
      <label className="inbox__label">
        {label}
      </label>
      {pattern
        ? (
          <input
            pattern={pattern}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            minLength={minLength || 6}
            maxLength={maxLength || 6}
            required={required}
            className={`inbox__input ${errors[name] ? 'inbox__input_error' : ''}`}
            type={type}
            id={id}
            autoComplete={autoComplete}
            value={value}
          />
        )
        : (
          <input
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            minLength={minLength || 6}
            maxLength={maxLength || 6}
            required={required}
            className={`input inbox__input ${errors[name] ? 'inbox__input_error' : ''}`}
            type={type}
            id={id}
            autoComplete={autoComplete}
            value={value}
          />
        )}
      <span className={`${label}-input-error inbox__label_error`}>
        {errors ? errors[name] : ''}
      </span>
    </div>
  );
}

export default Inbox;
