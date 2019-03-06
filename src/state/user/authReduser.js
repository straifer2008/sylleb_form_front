import types from './types'

const initialState = {
    loading: false,
    confirmed: false,
    userIsLogged: !!localStorage.getItem('authToken'),
    token: null,
    message: null,
    error: null,
    notifications: null,
    user: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_AUTH_START: {
            return {
                ...state,
                error: null,
                loading: true
            }
        }
        case types.RECEIVE_AUTH: {
            return {
                ...state,
                loading: false,
                error: null,
                message: action.payload
            }
        }
        case types.FETCH_AUTH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case types.FETCH_CONFIRM_EMAIL_START: {
            return {
                ...state,
                error: null,
                loading: true
            }
        }
        case types.CONFIRM_EMAIL_RECEIVE: {
            return {
                ...state,
                loading: false,
                confirmed: true,
                message: action.payload
            }
        }
        case types.FETCH_CONFIRM_EMAIL_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case types.USER_LOG_START: {
            return {
                ...state,
                error: null,
                loading: true,
            }
        }
        case types.USER_LOG_RECEIVE: {
            return {
                ...state,
                loading: false,
                userIsLogged: true,
                token: action.payload
            }
        }
        case types.USER_LOG_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case types.USER_LOG_OUT: {
            return {
                ...state,
                error: null,
                loading: true,
                userIsLogged: true
            }
        }
        case types.USER_LOG_OUT_RECEIVE: {
            return {
                ...state,
                loading: false,
                userIsLogged: false,
                notifications: action.payload
            }
        }
        case types.USER_LOG_OUT_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case types.CHECK_USER_IS_AUTH: {
            return {
                ...state,
                userIsLogged: action.payload
            }
        }
        case types.RESET_PASSWORD_START: {
            return {
                ...state,
                loading: true
            }
        }
        case types.RESET_PASSWORD_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case types.RESET_PASSWORD_RECEIVE: {
            return {
                ...state,
                loading: false,
                notifications: action.payload
            }
        }
        case types.FORGOT_PASSWORD_START: {
            return {
                ...state,
                loading: true
            }
        }
        case types.FORGOT_PASSWORD_RECEIVE: {
            return {
                ...state,
                loading: false,
                notifications: action.payload,
                error: null
            }
        }
        case types.FORGOT_PASSWORD_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default: {
            return { ...state }
        }
    }
};

export default authReducer;
