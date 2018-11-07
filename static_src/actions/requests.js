import { getJSON, RSAA } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { request } from './../utils/schemas.jsx';
import Cookies from 'js-cookie';
export const START_REQUEST_LOADING = 'START_REQUEST_LOADING';
export const SUCCESS_REQUEST_LOADING = 'SUCCESS_REQUEST_LOADING';
export const ERROR_REQUEST_LOADING = 'ERROR_REQUEST_LOADING';
export const START_REQUEST_SENDING = 'START_REQUEST_SENDING';
export const SUCCESS_REQUEST_SENDING = 'SUCCESS_REQUEST_SENDING';
export const ERROR_REQUEST_SENDING = 'ERROR_REQUEST_SENDING';
export const START_REQUEST_DELETING = 'START_REQUEST_DELETING';
export const SUCCESS_REQUEST_DELETING = 'SUCCESS_REQUEST_DELETING';
export const ERROR_REQUEST_DELETING = 'ERROR_REQUEST_DELETING';
export const START_REQUEST_FILTERING = 'START_REQUEST_FILTERING';
export const SUCCESS_REQUEST_FILTERING = 'SUCCESS_REQUEST_FILTERING';
export const ERROR_REQUEST_FILTERING = 'ERROR_REQUEST_FILTERING';

export const loadRequests = (url, token) => {
    return {
        [RSAA]: {
            credentials: 'include',
            endpoint: url,
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`,
            },
            types: [START_REQUEST_LOADING, 
                {
                    type: SUCCESS_REQUEST_LOADING,
                    payload: (action, state, res) =>{
                        return getJSON(res).then(
                            (json) => {
                                const normalizedData = normalize(json, [request]);
                                return Object.assign({}, json, normalizedData);
                            },
                        );
                    },
                }, 
                    ERROR_REQUEST_LOADING],
        },
    };
};


export const deleteRequest = (url, data, token) => {
    console.log('Delete')
    return {
        [RSAA]: {
            credentials: 'include',
            endpoint: url,
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get("csrftoken"),
                'Authorization': `Token ${token}`,
              },
            types: [START_REQUEST_DELETING, 
                    {
                        type: SUCCESS_REQUEST_DELETING,
                        payload: (action, state, res) =>{
                            return getJSON(res).then(
                                (json) => {
                                    json = {requests: json};
                                    const normalizedData = normalize(json, [request]);
                                    delete json.results;
                                    return Object.assign({}, json, normalizedData);
                                },
                            );
                        },
                       
                    },

                ERROR_REQUEST_DELETING],
        },
    };
};

export const createRequest = (url,data, token) => {
    console.log('SEND')
    return {
        [RSAA]: {
            credentials: 'include',
            endpoint: url,
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get("csrftoken"),
                'Authorization': `Token ${token}`,
              },
            types: [START_REQUEST_SENDING, 
                    {
                        type:SUCCESS_REQUEST_SENDING,
                        payload: (action, state, res) => {
                            return getJSON(res).then(
                                (json) => {
                                    json = {requests: json};
                                    const normalizedData = normalize(json, [request]);
                                    delete json.results;
                                    return Object.assign({}, json, normalizedData);
                                },
                            );
                        },
                    },
            ERROR_REQUEST_SENDING]
        },
    };
};

export const filterRequest = (url, token) => {
    console.log('FILTER')
    return {
        [RSAA]: {
            credentials: 'include',
            endpoint: url,
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`,
            },
            types: [START_REQUEST_FILTERING, 
                {
                    type: SUCCESS_REQUEST_FILTERING,
                    payload: (action, state, res) =>{
                        return getJSON(res).then(
                            (json) => {
                                const normalizedData = normalize(json, [request]);
                                return Object.assign({}, json, normalizedData);
                            },
                        );
                    },
                }, 
                    ERROR_REQUEST_FILTERING],
        },
    };
};