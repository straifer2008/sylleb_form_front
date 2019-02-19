import { fetchAuthStart, fetchAuthError, receiveAuth } from "./authAction";
import {apiPost} from "../../utils/helpers/apiHelpers";

const userRegistration = ({ username, email, password }) => async (dispatch, getState) => {
    dispatch(fetchAuthStart());
    try {
       const {data} = await apiPost('/register', {username, email, password} );
       dispatch(receiveAuth({...data}));
    } catch (error) {
        dispatch(fetchAuthError(error.response.data));
    }
};

const userAuth = ({ email, password }) => async (dispatch, getState) => {
    dispatch(fetchAuthStart());
    try {
        const {data} = await apiPost('/login', {email, password} );
        dispatch(receiveAuth({...data}));
    } catch (error) {
        dispatch(fetchAuthError(error.response.data));
    }
};

export {
    userRegistration,
    userAuth,
}