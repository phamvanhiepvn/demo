// @ts-nocheck
import { sessionServices } from "./session";
const failFetch = `TypeError: Failed to fetch`


function logout(status, errorCode) {
    if (status === 401 || status === 403 || errorCode === 401 || errorCode === 403){
        sessionServices.removeAccessToken();
    }
}

/**
 *
 * @param {*} url
 * @param {*} method
 */
export async function getAsync(url, method = 'GET') {
    try {
        const token = await sessionServices.getAccessToken();
        const response = await fetch(url, {
            method: method,
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });
        const { status} = response;
        const responseJson = await response.json();
        const {error_code = 200} = responseJson;
        logout(status, error_code)
        return Promise.resolve(responseJson);
    } catch (ex) {
        const json = JSON.parse(ex.message);
        if (json.status && json.statusText)
            return Promise.resolve(json);
    }
    return Promise.reject(new Error('get async is exception'))
}

/**
 *
 * @param {*} url
 * @param {*} body
 * @param {*} method
 */
export async function postAsync(url, body = {}, method = 'POST') {
    try {
        const token = await sessionServices.getAccessToken();
        const response = await fetch(url, {
            method: method,
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(body),
        });
        const { status } = response;
        const responseJson = await response.json();
        const {error_code = 200} = responseJson;
        logout(status, error_code)
        return Promise.resolve(responseJson);
    } catch (ex) {
        //console.log('ex', ex);
        if (ex === failFetch ){
            return Promise.resolve({
                error_code: "404",
                success:false,
                message: "Can not fetch"
            });
        }


        const json = JSON.parse(ex.message);
        if (json.status && json.statusText)
            return Promise.resolve(json);
    }
    return Promise.reject(new Error("post async is exception"));
}
export async function postUploadAsync(url, method = 'POST', files = [],  params = {}, keyFileName = 'file_uploads', isCustomFileName = false) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        if (isCustomFileName){
            const {name, fileId} = files[i];
            const customFileName = `${fileId}_${name}`
            formData.append(`${keyFileName}`, files[i], customFileName);
        }
        else
            formData.append(`${keyFileName}`, files[i]);
        //console.log(files[i])
    }
    if (params && Object.keys(params).length){
        Object.keys(params).forEach(key => {
            formData.append(key, params[key])
        })
    }
    console.log(formData)
    try {
        const token = await sessionServices.getAccessToken();
        const response = await fetch(url, {
            method: method,
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: formData,
        });
        const { status} = response;
        const responseJson = await response.json();

        const {error_code = 200} = responseJson;
        logout(status, error_code)

        if (status === 500) {
            return Promise.reject(new Error('exception code 500'))
        }
        if (status === 403) {
            return Promise.reject(new Error('not login'))
        }
        return Promise.resolve(responseJson);
    } catch (ex) {
        console.log(ex);
    }
    return Promise.reject(new Error("post async is exception"));
}


