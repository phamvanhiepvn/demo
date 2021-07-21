import { useState } from 'react';
import { useStateValue } from '../../index';
import { login } from '../actions';
import { postLogin } from '../queries';
import { sessionServices } from "helpers";
const useLogin = (history) => {
  const [{ auth }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorCode, setErrorCode] = useState("");


  const submitForm = async ({ values, actions }) => {
    setIsLoading(true);
    setIsError(false)
    const result = await postLogin({...values});
    const {data = {}, success, error_code} = result;
    if (!success){
      setIsError(true)
      setErrorCode(error_code)
      setIsLoading(false);
      return;
    }
    const {token} = data
    if (token){
      sessionServices.saveAccessToken(token);
      dispatch(login());
    }
    setIsLoading(false);
  };

  return [auth, submitForm, isLoading, isError, errorCode];
};

export default useLogin;
