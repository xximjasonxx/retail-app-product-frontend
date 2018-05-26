
import { ajax } from 'rxjs/observable/dom/ajax';
const defaultHeaders = {
    'Content-Type': 'application/json'
};

export const post = (url, body, additionalHeaders = {}) => {
    const headers = Object.assign({}, defaultHeaders, additionalHeaders);

    return ajax({
        url,
        body,
        method: 'POST',
        responseType: 'json',
        headers,
        crossDomain: true
    });
};

export const get = (url, additionalHeaders = {}) => {
    const headers = Object.assign({}, defaultHeaders, additionalHeaders);

    return ajax({
        url,
        method: 'GET',
        responseType: 'json',
        headers,
        crossDomain: true
    });
};

export const put = (url, body, additionalHeaders = {}) => {
    const headers = Object.assign({}, defaultHeaders, additionalHeaders);

    return ajax({
        url,
        body,
        method: 'PUT',
        responseType: 'json',
        headers,
        crossDomain: true
    });
};

export const del = (url, additionalHeaders = {}) => {
    const headers = Object.assign({}, defaultHeaders, additionalHeaders);

    return ajax({
        url,
        method: 'DELETE',
        responseType: 'json',
        headers,
        crossDomain: true
    });
};