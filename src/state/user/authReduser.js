import types from './types'

const initialState = {
    loading: false,
    loaded: false,
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
        default: {
            return { ...state }
        }
    }
};

export default authReducer;