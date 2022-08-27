import React from 'react';

export interface IInboxProps {
  label: string,
  pattern: string,
  name: string,
  placeholder: string,
  minLength: number,
  maxLength: number,
  required: boolean,
  errors: Record<string, string>,
  type: string,
  id: string,
  autoComplete: string,
  value: string,
  onChange: (e: React.ChangeEvent) => void,
}
