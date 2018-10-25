import { getJSON, RSAA } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import Cookies from 'js-cookie';
import { news } from './../utils/schemas.jsx';
export const START_NEWS_LOADING = 'START_NEWS_LOADING';
export const SUCCESS_NEWS_LOADING = 'SUCCESS_NEWS_LOADING';
export const ERROR_NEWS_LOADING = 'ERROR_NEWS_LOADING';
export const START_NEWS_SENDING = 'START_NEWS_SENDING';
export const SUCCESS_NEWS_SENDING = 'SUCCESS_NEWS_SENDING';
export const ERROR_NEWS_SENDING = 'ERROR_NEWS_SENDING';
export const START_NEWS_DELETING = 'START_NEWS_DELETING';
export const SUCCESS_NEWS_DELETING = 'SUCCESS_NEWS_DELETING';
export const ERROR_NEWS_DELETING = 'ERROR_NEWS_DELETING';


export const loadNews = (url) => {
    return {
        [RSAA]: {
            credentials: 'include',
            endpoint: url,
            method: 'GET',
            types: [START_NEWS_LOADING, 
                {
                    type: SUCCESS_NEWS_LOADING,
                    payload: (action, state, res) =>{
                        return getJSON(res).then(
                            (json) => {
                                const normalizedData = normalize(json, [news]);
                                return Object.assign({}, json, normalizedData);
                            },
                        );
                    },
                }, 
                    ERROR_NEWS_LOADING],
        },
    };
};

export const createNews = (url,data) => {
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
                'X-CSRFToken': Cookies.get("csrftoken")
              },
            types: [START_NEWS_SENDING, 
                    SUCCESS_NEWS_SENDING,
                    ERROR_NEWS_SENDING],
        },
    };
};

