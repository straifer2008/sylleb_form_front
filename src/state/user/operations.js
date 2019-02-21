import {
    fetchAuthStart,
    fetchAuthError,
    receiveAuth,
    fetchConfirmEmailStart,
    fetchConfirmEmailError,
    confirmEmailReceive,
    userLogOut,
    userLogOutError,
    checkUserIsAuth,
    userLogOutReceive,
    forgotPasswordStart,
    forgotPasswordReceive,
    forgotPasswordError,
    resetPasswordStart,
    resetPasswordError,
    resetPasswordReceive
} from "./authAction";
import {apiGet, apiPost} from "../../utils/helpers/apiHelpers";
import { history } from '../../store';

const userRegistration = ({ username, email, password }) => async (dispatch, getState) => {
    dispatch(fetchAuthStart());
    try {
       const {data} = await apiPost('/register', {username, email, password} );
       dispatch(receiveAuth({...data}));
        history.push('/login');
    } catch (error) {
        dispatch(fetchAuthError(error.response.data));
    }
};

const userAuth = ({ email, password, remember }) => async (dispatch) => {
    dispatch(fetchAuthStart());
    try {
        const {data} = await apiPost('/login', {email, password, remember} );
        history.push('/home');
        dispatch(receiveAuth({...data, userIsLogged: true}));
        localStorage.setItem('authToken', data.userToken);
    } catch (error) {
        dispatch(fetchAuthError(error.response.data));
    }
};

const confirmEmail = ({token}) => async (dispatch) => {
    dispatch(fetchConfirmEmailStart());
    try {
        const data = await apiPost('/confirm-register', {token});
        dispatch(confirmEmailReceive(data));
        history.push('/login');
    } catch (error) {
        dispatch(fetchConfirmEmailError(error.response.data.error))
    }
};

const logOut = () => async (dispatch) => {
    dispatch(userLogOut());
    try {
        const logOutRes = await apiGet('/logout');
        localStorage.removeItem('authToken');
        history.push('/login');
        dispatch(userLogOutReceive(logOutRes.data.message));
    } catch (e) {
        dispatch(userLogOutError(e))
    }
};

const checkIsUserAuth = () => (dispatch) => {
    if (localStorage.getItem('authToken')) {
        dispatch(checkUserIsAuth(true));
    } else  {
        dispatch(checkUserIsAuth(false));
    }
};

const userForgotPassword = ({email}) => async (dispatch) => {
    dispatch(forgotPasswordStart());
    try {
        const res = await apiPost('/forgot-password', {email});
        dispatch(forgotPasswordReceive(res.data.message));
    } catch (e) {
        dispatch(forgotPasswordError(e));
    }
};

const userResetPassword = ({email, password, password_confirmation, token}) => async (dispatch) => {
    dispatch(resetPasswordStart());
    try {
        const res = await apiPost('/password-reset', {token, email, password, password_confirmation});
        dispatch(resetPasswordReceive(res.data));
    } catch (e) {
        dispatch(resetPasswordError(e));
    }
};

export {
    userRegistration,
    userAuth,
    confirmEmail,
    logOut,
    checkIsUserAuth,
    userForgotPassword,
    userResetPassword
}