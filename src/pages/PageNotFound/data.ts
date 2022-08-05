/* eslint-disable import/prefer-default-export */
import { MAIN_URL } from '../../utils/constants';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { IError } from './IError';

export const data: IError = {
  code: 404,
  text: 'Страница не найдена',
  link: {
    url: MAIN_URL,
    label: 'Назад',
  },
};
