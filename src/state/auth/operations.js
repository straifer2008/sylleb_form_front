import {
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
	userLogOutReceive,
	forgotPasswordStart,
	forgotPasswordReceive,
	forgotPasswordError,
	resetPasswordStart,
	resetPasswordError,
	resetPasswordReceive
} from './authAction';
import {clearUser, getUserError, getUserReceive, getUserStart} from '../user/userActions';
import { add, clear  } from 'react-redux-permissions';
import {history} from '../../store';
import {apiGet, apiPost} from '../../utils/helpers/apiHelpers';
import {checkJWT} from '../../utils/helpers/helpers';
import {Cookies} from 'react-cookie';

const cookies = new Cookies();

const userRegistration = (registerData) => async (dispatch) => {
	dispatch(fetchAuthStart());
	try {
		const postData = await apiPost('/register', registerData);
		if (postData && postData.data && postData.data.message) {
			dispatch(receiveAuth(postData.data.message));
		} else if (postData && postData.data && !postData.data.message) {
			dispatch(receiveAuth(postData.data));
		}
	} catch (error) {
		dispatch(fetchAuthError(error));
		if (error.response && error.response.data) {
			dispatch(fetchAuthError(error.response.data));
		} else {
			dispatch(fetchAuthError(error));
		}
	}
};

const confirmEmail = ({token}) => async (dispatch) => {
	dispatch(fetchConfirmEmailStart());
	try {
		const postData = await apiPost('/confirm-register', {token});
		if (postData.data && postData.data.message) {
			dispatch(confirmEmailReceive(postData.data.message));
			history.push('/login');
		}
	} catch (error) {
		dispatch(fetchConfirmEmailError(error.response.data.error))
	}
};

const userAuth = (authData) => async (dispatch) => {
	dispatch(userLogStart());
	dispatch(getUserStart());
	try {
		const postData = await apiPost('/login', authData);
		if (authData.remember) {
			cookies.set('token', postData.data.token.token, { path: '/' });
			cookies.set('user', JSON.stringify(postData.data.user), { path: '/' });
		}
		dispatch(add(postData.data.permissions));
		dispatch(userLogReceive(postData.data.token.token));
		dispatch(getUserReceive(postData.data.user));
	} catch (error) {
		dispatch(getUserError());
		if (error.response && error.response.data) {
			dispatch(userLogError(error.response.data));
		} else {
			dispatch(userLogError(error));
		}
	}
};

const logOut = () => async (dispatch, getState) => {
	dispatch(userLogOut());
	try {
		await checkJWT(getState);
		const logOutRes = await apiGet('/logout');
		cookies.remove('token');
		cookies.remove('user');
		dispatch(userLogOutReceive(logOutRes.data.message));
		dispatch(clear());
		dispatch(clearUser());
	} catch (e) {
		dispatch(userLogOutError(e))
	}
};

const userForgotPassword = (email) => async (dispatch) => {
	dispatch(forgotPasswordStart());
	try {
		const res = await apiPost('/forgot-password', email);
		dispatch(forgotPasswordReceive(res.data.message));
		history.push('/login');
	} catch (e) {
		dispatch(forgotPasswordError(e));
	}
};

const userResetPassword = (resetPasswordData) => async (dispatch) => {
	dispatch(resetPasswordStart());
	try {
		const res = await apiPost('/password-reset', resetPasswordData);
		if (res.data.message) {
			dispatch(resetPasswordReceive(res.data.message));
		} else if (res.data) {
			dispatch(resetPasswordReceive(res.data));
		}
		history.push('/login');
	} catch (e) {
		dispatch(resetPasswordError(e));
	}
};

// getUserIP((ip) => {
// 	console.log('your ip is ----- "', ip, '"');
// });

export {
	userRegistration,
	userAuth,
	confirmEmail,
	logOut,
	userForgotPassword,
	userResetPassword,
};
