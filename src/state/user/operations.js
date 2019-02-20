import {
    fetchAuthStart,
    fetchAuthError,
    receiveAuth,
    fetchConfirmEmailStart,
    fetchConfirmEmailError, confirmEmailReceive, userLogOut, userLogOutError, checkUserIsAuth
} from "./authAction";
import {apiPost} from "../../utils/helpers/apiHelpers";
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

const userAuth = ({ email, password, remember }) => async (dispatch, getState) => {
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

const logOut = () => (dispatch) => {
    dispatch(userLogOut());
    localStorage.removeItem('authToken');
    try {
        console.log('User log out');
        history.push('/login');
    } catch (e) {
        dispatch(userLogOutError())
    }
};

const checkIsUserAuth = () => (dispatch) => {
    if (localStorage.getItem('authToken')) {
        dispatch(checkUserIsAuth(true));
    } else  {
        dispatch(checkUserIsAuth(false));
    }
};

export {
    userRegistration,
    userAuth,
    confirmEmail,
    logOut,
    checkIsUserAuth
}