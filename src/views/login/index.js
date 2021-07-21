import React, { useEffect } from 'react';
import useLogin from '../../state/auth/hooks/useLogin';
import Container from './containers/container';
import Form from './containers/form';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
import {Helmet} from "react-helmet";

const Login = (props) => {
  const {location, history, intl} = props;
  const { from } = location.state || { from: { pathname: '/home' } };
  const [auth, setLogin] = useLogin();

  useEffect(() => {
    //document.title = "Login page"
    if (auth.logged) {
      history.push(from);
    }
  }, [auth, from, history]);

  return (
    <Container>
      <Helmet>
        <title>{intl.formatMessage({ id: 'login_title' })}</title>
        <meta name="description" content={intl.formatMessage({ id: 'login_description' })} />
      </Helmet>
      <Form onSubmit={(values, actions) => setLogin({ values, actions })} setLogin={setLogin} intl={intl}/>
    </Container>
  );
};

//export default injectIntl(Login);
export default compose(
    injectIntl
)(Login)
