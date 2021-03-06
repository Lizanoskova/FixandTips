import update from 'react-addons-update';
import {} from './../actions/auth.js';


const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    isLoading: false,
    user: {},
    errors: {},
  };
  
  
  export default function auth(state=initialState, action) {
  
    switch (action.type) {
  
    case 'USER_LOADING':
        return {...state, isLoading: true};
  
    case 'USER_LOADED':
        return {...state, isAuthenticated: true, isLoading: false, user: action.user};
  
    case 'LOGIN_SUCCESSFUL':
        localStorage.setItem("token", action.data.token);
        return {...state, ...action.data, isAuthenticated: true, isLoading: false, errors: null};

    case 'START_USER_UPDATING':{
        return update(state, {
            isLoading: { $set: true },
        });
    }

    case 'SUCCESS_USER_UPDATING':{
        console.log(action.payload.users)
        return update(state, {
            isLoading: { $set: false },
            user: { $set: action.payload.users },
        });
    }

    case 'ERROR_USER_UPDATING':{
        return update(state, {
            isLoading: { $set: false },
        });
    }
    case 'AUTHENTICATION_ERROR':
    case 'LOGIN_FAILED':
    case 'LOGOUT_SUCCESSFUL':
        localStorage.removeItem("token");
        return {...state, errors: action.data, token: null, user: null,
          isAuthenticated: false, isLoading: false};
    case 'LOGIN_SUCCESSFUL':
    case 'REGISTRATION_SUCCESSFUL':
              localStorage.setItem("token", action.data.token);
              return {...state, ...action.data, isAuthenticated: true, isLoading: false, errors: null};
          
    case 'AUTHENTICATION_ERROR':
    case 'LOGIN_FAILED':
    case 'REGISTRATION_FAILED':
    case 'LOGOUT_SUCCESSFUL':
              localStorage.removeItem("token");
              return {...state, errors: action.data, token: null, user: null,
                  isAuthenticated: false, isLoading: false};
  
      default:
        return state;
    }
  }

