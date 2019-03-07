import types from './types'

const initialState = {
    userData: null,
    loading: false,
    error: null
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_DATA_START: {
            return {
                ...state,
                loading: true
            }
        }
        case types.GET_USER_DATA_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case types.GET_USER_DATA_RECEIVE: {
            return {
                ...state,
                loading: false,
                error: null,
                userData: action.payload
            }
        }
        default: {
            return { ...state }
        }
    }
};

export default homeReducer;
