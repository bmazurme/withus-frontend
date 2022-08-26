export const EMAIL_REGEXP = '[a-z0-9._%+-]+@[a-z0-9.-]+[\\.{0}][a-z]{2,3}$';

export const Urls = {
  AUTH: 'http://localhost:3001',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  PROFILE: {
    INDEX: '/profile',
    EDIT: '/profile/edit',
  },
  PASSWORD: {
    EDIT: '/password/edit',
    RESET: '/password/reset',
    NEW: '/password/new/:token',
  },
  MAIN: '/',
  CONFIRM: {
    TOKEN: '/confirm/:token',
  },
};

export const STORE_TOKEN_NAME = 'jwt';
export const ERROR_TITLE_DEFAULT = 'Произошла ошибка';
