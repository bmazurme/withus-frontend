import { Urls } from '../../utils/constants';
import { IError } from '../../interfaces/interfaces';

export const data: IError = {
  code: 404,
  text: 'Страница не найдена',
  link: {
    url: Urls.MAIN.INDEX,
    label: 'Назад',
  },
};
