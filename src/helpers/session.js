const CONSTANTS = {
    ACCESS_TOKEN: 'ACCESS_TOKEN'
}
export const sessionServices = {
    getAccessToken,
    saveAccessToken,
    removeAccessToken
}

function getAccessToken() {
    return localStorage.getItem(CONSTANTS.ACCESS_TOKEN);
}

function saveAccessToken(token) {
    localStorage.setItem(CONSTANTS.ACCESS_TOKEN, token);
}

function removeAccessToken() {
    localStorage.removeItem(CONSTANTS.ACCESS_TOKEN);
}