import {createActions} from 'redux-actions';
import types from './types';

export const {
    getUserDataStart,
    getUserDataError,
    getUserDataReceive,
} = createActions(
    types.GET_USER_DATA_START,
    types.GET_USER_DATA_ERROR,
    types.GET_USER_DATA_RECEIVE,
);
