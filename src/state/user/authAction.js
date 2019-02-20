import types from "./types";
import {createActions} from "redux-actions";

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
    userLogOutError,
    checkUserIsAuth
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
    types.USER_LOG_OUT_ERROR,
    types.CHECK_USER_IS_AUTH
);