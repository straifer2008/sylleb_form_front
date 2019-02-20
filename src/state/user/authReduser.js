import types from './types'

const initialState = {
    loading: false,
    confirmed: false,
    userIsLogged: false,
    token: null,
    message: null,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_AUTH_START: {
            return {
                ...state,
                loading: true
            }
        }
        case types.RECEIVE_AUTH: {
            return {
                ...state,
                loading: false,
                ...action.payload
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
                loading: true
            }
        }
        case types.CONFIRM_EMAIL_RECEIVE: {
            return {
                ...state,
                loading: false,
                confirmed: true,
                ...action.payload
            }
        }
        case types.FETCH_CONFIRM_EMAIL_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case types.USER_LOG_OUT: {
            return {
                ...state,
                userIsLogged: false
            }
        }
        case types.CHECK_USER_IS_AUTH: {
            return {
                ...state,
                userIsLogged: action.payload
            }
        }
        default: {
            return { ...state }
        }
    }
};

export default authReducer;