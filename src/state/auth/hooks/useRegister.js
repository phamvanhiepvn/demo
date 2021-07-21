import { useState } from 'react';
import { useStateValue } from '../../index';
import {postRegister} from '../queries';

const useRegister = () => {
  const [{ auth }] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorCode, setErrorCode] = useState("");

  const submitForm = async ({ values, history }) => {
    setIsLoading(true);
    const result = await postRegister({...values});
    const {success, error_code} = result;
    if (!success){
      setIsError(true)
      setErrorCode(error_code)
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    history.push('/login');
  };

  return [auth, submitForm, isLoading, isError, errorCode];
};

export default useRegister;
