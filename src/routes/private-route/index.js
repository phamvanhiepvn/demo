import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { utils } from 'utils';
import { useStateValue } from '../../state';
import {login} from "../../state/auth/actions";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [{ auth }, dispatch] = useStateValue();

    useEffect( () => {
        const tokenIsExpired = utils.isTokenExpired();
        if (!tokenIsExpired){
            dispatch(login());
        }
    }, [dispatch]);
  return (
    <Route
      {...rest}
      render={props =>
          auth.logged ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
