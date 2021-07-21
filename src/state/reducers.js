import authReducer from './auth/reducers';
import langReducer from './lang/reducers';
import homeReducer from './home/reducers';

const reducers = ({ auth, lang, home }, action) => ({
  auth: authReducer(auth, action),
  lang: langReducer(lang, action),
  home: homeReducer(home, action),
});
export default reducers