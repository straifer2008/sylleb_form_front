import types from "./types";
import {createActions} from "redux-actions";

export const {
    fetchAuthStart,
    fetchAuthError,
    receiveAuth
} = createActions(
    types.FETCH_AUTH_START,
    types.FETCH_AUTH_ERROR,
    types.RECEIVE_AUTH
);