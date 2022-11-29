import { REGISTER_PENDING, REGISTER_FULFILED, REGISTER_FAILED, LOGIN_PENDING, LOGIN_FULFILED, LOGIN_FAILED, LOGOUT_PENDING, LOGOUT_FULFILED, LOGOUT_FAILED, CLEAR_LOCALSTORAGE } from '../actions/auth'

const authInitialState = {
    isAuthChecked: false,

    userData: null,
  
    registerUserError: null,
    registerUserPending: false,
  
    loginUserError: null,
    loginUserPending: false,
  
    updateUserError: null,
    updateUserPending: false,
  
    getUserError: null,
    getUserPending: false,

    logoutError: null,
    logoutPending: false,
}

export const authReducer = (state = authInitialState, action) => {
    switch (action.type) {
        case REGISTER_PENDING: {
            return {
                ...state,
                registerUserPending: true,
            }
        }
        case REGISTER_FULFILED: {
            return {
                ...state,
                userData: action.payload,
                registerUserPending: false,
            }
        }
        case REGISTER_FAILED: {
            return {
                ...state,
                registerUserPending: false,
                registerUserError: action.payload
            }
        }
        case LOGIN_PENDING: {
            return {
                ...state,
                loginUserPending: true,
            }
        }
        case LOGIN_FULFILED: {
            return {
                ...state,
                userData: action.payload,
                loginUserPending: false
            }
        }
        case LOGIN_FAILED: {
            return {
                ...state,
                loginUserPending: false,
                loginUserError: action.payload
            }
        }
        case LOGOUT_PENDING: {
            return {
                ...state,
                logoutPending: true
            }
        }
        case LOGOUT_FULFILED: {
            return {
                ...state,
                logoutPending: false,
                userData: null
            }
        }
        case LOGOUT_FAILED: {
            return {
                ...state,
                logoutError: action.payload,
                logoutPending: false
            }
        }
        case CLEAR_LOCALSTORAGE: {
            localStorage.clear();
            break;
        }
        default: {
            return state
        }
    }
}