import { Config } from 'config';
import {CHANGE_LOCALE} from './actions';

const DEFAULT_LOCALE = Config.DEFAULT_LOCALE;


export const INITIAL_STATE = {
  locale: DEFAULT_LOCALE,
};


const lang = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return {
        locale: action.locale
      }
    default:
      return state;
  }
};
export default lang