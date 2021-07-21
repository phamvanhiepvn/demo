import { FETCH_DATA_HOME} from './actions';

export const INITIAL_STATE = {
  data: [],
};

const home = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA_HOME:
      return {
        data: action.data,
      }
    default:
      return state;
  }
};
export default home