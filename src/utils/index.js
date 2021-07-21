import * as jwt_decode from 'jwt-decode';
import { sessionServices } from "helpers";

export const utils = {
    isTokenExpired,
    loadExternalScript,
    loadExternalCss,
    stripHtmlDescription,
    format,
    formatFileName,
    getCurrentUserId
}
function getTokenExpirationDate(token) {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined)
        return null;
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
}

function getCurrentUserId() {
    const token = sessionServices.getAccessToken();
    const decoded = jwt_decode(token);
    return decoded.userId;
}

function isTokenExpired() {
    try {
        const token = sessionServices.getAccessToken();
        if (!token)
            return true;
        const date = getTokenExpirationDate(token);
        if (!date)
            return true;

        return !(date.valueOf() > new Date().valueOf());
    } catch (ex) {
        console.log(ex);
    }
    return false;
}
function loadExternalScript(externalScript){
    externalScript.forEach(src => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        document.head.appendChild(script);
    })
}

function loadExternalCss(externalCss){
    externalCss.forEach(href => {
        const link = document.createElement("link");
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = href
        link.media = 'all';
        document.head.appendChild(link);
    })
}
function stripHtmlDescription(text, split = true) {
    text = text.replace(/<\/?[^>]+(>|$)/g, "")
    if (split){
        text = text.substring(0, 82)+"...";
    }
    return text;
}
function format (money, n, x) {
    const re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return money.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
}
function formatFileName(str) {
    str.trim();
    str = str.replace(/\s+/g, '_');
    str = str.replace(/[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ._\s]/gi, '');
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}