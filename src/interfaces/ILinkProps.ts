import React from 'react';

export interface ILinkProps {
  className: string,
  to: string,
  label: string,
  onHandleClick: ((e: React.FormEvent) => void)|null,
}
