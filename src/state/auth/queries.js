import axios from 'axios';
import { postAsync } from "helpers/request";
import { Config } from '../../config';
import { Response as ResponseModel } from "model";
export const loadBox = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.data)
    .catch(err => err.response.data);
};
export const postLogin = async (credential = {}) => {
  try {
    const {urlApi = 'login'} = credential;
    const url = `${Config.SERVER_API}user/${urlApi}`
    const response =  await postAsync(url, credential);
    return response;
    //return dataResponse;
  } catch (ex) {
    console.log(ex);
  }
  return new ResponseModel().Error(404, "exception");
}
export const postRegister = async (credential = {}) => {
  try {
    const response =  await postAsync(Config.SERVER_API + 'user/register', credential);
    return response;
  } catch (ex) {
    console.log(ex);
  }
  return new ResponseModel().Error(404, "exception");
}
