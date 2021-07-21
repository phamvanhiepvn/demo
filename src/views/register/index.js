import React  from 'react';
import Container from './containers/container';
import Form from './containers/form';
import {Helmet} from "react-helmet";
import {compose} from "redux";
import {injectIntl} from "react-intl";
const Register = ({ history, intl}) => {
  return (
    <Container>
      <Helmet>
        <title>{intl.formatMessage({ id: 'register_title' })}</title>
        <meta name="description" content={intl.formatMessage({ id: 'register_description' })} />
      </Helmet>
      <Form  intl={intl} history={history} />
    </Container>
  );
};

//export default Register;
export default compose(
    injectIntl
)(Register)
