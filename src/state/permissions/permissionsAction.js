import {createActions} from 'redux-actions';
import types from './types';

export const {
    getPermissionsStart,
    getPermissionsError,
    getPermissionsReceive,

} = createActions(
    types.GET_PERMISSIONS_START,
    types.GET_PERMISSIONS_ERROR,
    types.GET_PERMISSIONS_RECEIVE,
);
