//import { getAsync } from "helpers/request";
//import { Config } from '../../config';
import { Response as ResponseModel } from "model";

export const fetchDataHome = async (credential = {}) => {
  try {
    const {urlApi = 'photos'} = credential;
    const url = `https://jsonplaceholder.typicode.com/${urlApi}`
    const response =  await fetch(url)
    const result = await response.json()
    console.log(result)
    return {
      success: true,
      data: result
    }
  }
   catch (ex) {
    console.log(ex);
  }
  return new ResponseModel().Error(404, "exception");
}
