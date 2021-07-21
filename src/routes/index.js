import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { StateProvider } from '../state';
import { INITIAL_STATE as AUTH_INITIAL_STATE } from '../state/auth/reducers';
import { INITIAL_STATE as LANG_INITIAL_STATE } from '../state/lang/reducers';
import reducers from '../state/reducers';
import BaseStyles from './base-styles';
import PrivateRoute from './private-route';
import BackendRouter from './BackendRouter';
import Login from '../views/login';
import Register from "../views/register";
import Spinner from 'components/common/Spinner';
import LanguageProvider from '../state/languageProvider';
import { translationMessages } from './i18n';


const Root = () => {
  const initialState = {
    auth: AUTH_INITIAL_STATE,
  };
  return (
      <LanguageProvider messages={translationMessages} language={LANG_INITIAL_STATE}>
        <StateProvider initialState={initialState} reducer={reducers}>
              <BaseStyles />
              <Router>
                <Suspense fallback={<Spinner/>}>
                      <Switch>
                          <Route path='/auth/login' component={Login} />
                          <Route path='/auth/register' component={Register} />
                          <PrivateRoute path="/" component={BackendRouter} />
                          <Redirect to='/auth/login' />
                      </Switch>
                    </Suspense>
              </Router>
        </StateProvider>
      </LanguageProvider>
  );
};

export default Root;
