import types from './types';

const initialState = {};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_USER_START: {
			return {
				...state,
			}
		}
		case types.GET_USER_ERROR: {
			return {
				...state,
			}
		}
		case types.GET_USER_RECEIVE: {
			return {
				...state,
				...action.payload
			}
		}
		case types.CLEAR_USER: {
			return {}
		}
		default: {
			return {...state}
		}
	}
};

export default userReducer;
