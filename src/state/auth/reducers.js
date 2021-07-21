import { LOGIN, LOGOUT, REGISTER } from './actions';

export const INITIAL_STATE = {
  logged: true,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        logged: true,
      };
    case REGISTER:
      return {
        logged: true
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
export default auth