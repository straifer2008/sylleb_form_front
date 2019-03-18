import {createActions} from 'redux-actions';
import types from './types';

export const {
	getUserStart,
	getUserError,
	getUserReceive,
	clearUser
} = createActions(
	types.GET_USER_START,
	types.GET_USER_ERROR,
	types.GET_USER_RECEIVE,
	types.CLEAR_USER
);
