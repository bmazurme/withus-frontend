import { Urls } from '../../utils/constants';
import { IError } from './IError';

export const data: IError = {
  code: 404,
  text: 'Страница не найдена',
  link: {
    url: Urls.MAIN,
    label: 'Назад',
  },
};
