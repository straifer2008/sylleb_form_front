import {createActions} from 'redux-actions';
import types from './types';

export const {
	fetchAuthStart,
	fetchAuthError,
	receiveAuth,
	userLogStart,
	userLogError,
	userLogReceive,
	fetchConfirmEmailStart,
	fetchConfirmEmailError,
	confirmEmailReceive,
	userLogOut,
	userLogOutReceive,
	userLogOutError,
	forgotPasswordStart,
	forgotPasswordReceive,
	forgotPasswordError,
	resetPasswordStart,
	resetPasswordReceive,
	resetPasswordError
} = createActions(
	types.FETCH_AUTH_START,
	types.FETCH_AUTH_ERROR,
	types.RECEIVE_AUTH,
	types.USER_LOG_START,
	types.USER_LOG_ERROR,
	types.USER_LOG_RECEIVE,
	types.FETCH_CONFIRM_EMAIL_START,
	types.FETCH_CONFIRM_EMAIL_ERROR,
	types.CONFIRM_EMAIL_RECEIVE,
	types.USER_LOG_OUT,
	types.USER_LOG_OUT_RECEIVE,
	types.USER_LOG_OUT_ERROR,
	types.FORGOT_PASSWORD_START,
	types.FORGOT_PASSWORD_RECEIVE,
	types.FORGOT_PASSWORD_ERROR,
	types.RESET_PASSWORD_START,
	types.RESET_PASSWORD_RECEIVE,
	types.RESET_PASSWORD_ERROR
);
