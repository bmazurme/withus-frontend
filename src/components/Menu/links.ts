/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Urls } from '../../utils/constants';

export const links = [
  {
    className: 'profile__link',
    to: Urls.PROFILE.EDIT,
    label: 'Edit profile',
    handler: (e: React.FormEvent) => {},
  },
  {
    className: 'profile__link',
    to: Urls.PASSWORD.EDIT,
    label: 'Edit password',
    handler: (e: React.FormEvent) => {},
  },
  {
    className: 'profile__link profile__link_red',
    to: Urls.MAIN.INDEX,
    label: 'Sign out',
    handler: (e: React.FormEvent) => {},
  },
];
