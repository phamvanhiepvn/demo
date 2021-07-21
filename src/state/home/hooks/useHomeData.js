import { useState } from 'react';
import { fetchDataHome as fetchDataAction } from '../actions';
import { fetchDataHome } from '../queries';
import {useStateValue} from "../../index";

const useHomeData = (history) => {
  const [{ home }, dispatch] = useStateValue()
  const [isLoading, setIsLoading] = useState(false)
  const [errorCode, setErrorCode] = useState([])


  const fetchData = async () => {
    setIsLoading(true);
    const result = await fetchDataHome({})
    const {data = [], success} = result;
    if (!success){
      setErrorCode(["something wrong"])
      setIsLoading(false);
      return;
    }
    dispatch(fetchDataAction(data));
    setIsLoading(false);
  };

  return [home, fetchData, isLoading, errorCode];
};

export default useHomeData;
