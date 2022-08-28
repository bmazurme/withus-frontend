import { Urls } from '../../utils/constants';
import { IError } from '../../interfaces/interfaces';

export const data: IError = {
  code: 404,
  text: 'Page not found',
  link: {
    url: Urls.MAIN.INDEX,
    label: 'Back',
  },
};
