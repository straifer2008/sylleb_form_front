import types from './types';

const permissionsReducer = (state, action) => {
	switch (action.type) {
		case types.GET_PERMISSIONS_START: {
			return []
		}
		case types.GET_PERMISSIONS_ERROR: {
			return []
		}
		case types.GET_PERMISSIONS_RECEIVE: {
			return [...action.payload]
		}
		default: {
			return {...state}
		}
	}
};

export default permissionsReducer;
