export const EMAIL_REGEXP = '[a-z0-9._%+-]+@[a-z0-9.-]+[\\.{0}][a-z]{2,3}$';

export const Urls = {
  AUTH: 'http://localhost:3001',
  MAIN: {
    INDEX: '/',
    ABOUT: '/about',
    PRIVATE: '/private',
  },
  OAUTH: {
    INDEX: '/verification_code',
    YANDEX: 'https://oauth.yandex.ru/',
  },
  SIGN: {
    IN: '/signin',
    UP: '/signup',
    CONFIRM: '/confirm/:token',
  },
  PROFILE: {
    INDEX: '/profile',
    EDIT: '/profile/edit',
  },
  PASSWORD: {
    INDEX: '/password',
    EDIT: '/password/edit',
    RESET: '/password/reset',
    NEW: '/password/new/:token',
  },
  ADMIN: {
    INDEX: '/admin',
    USERS: '/admin-users',
  },
};

export const STORE_TOKEN_NAME = 'jwt';
export const ERROR_TITLE_DEFAULT = 'Произошла ошибка';
