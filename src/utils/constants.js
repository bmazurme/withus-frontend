export const EMAIL_REGEXP = '[a-z0-9._%+-]+@[a-z0-9.-]+[\\.{0}][a-z]{2,3}$';

export const Urls = {
  AUTH: 'http://localhost:3001',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  PROFILE: '/profile',
  PROFILE_EDIT: '/profile/edit',
  PROFILE_EDIT_PASS: '/profile/edit/password',
  PROFILE_RESET_PASS: '/profile/reset/password',
  PROFILE_NEW_PASS: '/profile/new/password/:token',
  MAIN: '/',
};

export const STORE_TOKEN_NAME = 'jwt';
export const ERROR_TITLE_DEFAULT = 'Произошла ошибка';
