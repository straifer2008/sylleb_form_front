import {
	fetchAuthStart, fetchAuthError, receiveAuth,
	userLogStart, userLogError, userLogReceive,
	fetchConfirmEmailStart, fetchConfirmEmailError, confirmEmailReceive,
	userLogOut, userLogOutError, checkUserIsAuthStart,
	userLogOutReceive, forgotPasswordStart, forgotPasswordReceive,
	forgotPasswordError, resetPasswordStart, resetPasswordError,
	resetPasswordReceive, checkUserIsAuthReceive, checkUserIsAuthError
} from './authAction';
import {getPermissionsReceive} from '../permissions/permissionsAction';
import {history} from '../../store';
import {apiGet, apiPost, getUserIP} from '../../utils/helpers/apiHelpers';
import {checkJWT} from '../../utils/helpers/helpers';

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
	try {
		const postData = await apiPost('/login', authData);
		if (authData.remember) {
			localStorage.setItem('token', JSON.stringify(postData.data.user.token.token));
		}
		dispatch(userLogReceive(postData.data.user));
		dispatch(getPermissionsReceive(postData.data.user.permissions));
	} catch (error) {
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
		localStorage.clear();
		dispatch(userLogOutReceive(logOutRes.data.message));
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

const checkIsUserAuth = () => async (dispatch, getState) => {
	dispatch(checkUserIsAuthStart());
	dispatch(checkUserIsAuthReceive());
	dispatch(checkUserIsAuthError());
};

getUserIP((ip) => {
	console.log('your ip is ----- "', ip, '"');
});

export {
	userRegistration,
	userAuth,
	confirmEmail,
	logOut,
	userForgotPassword,
	userResetPassword,
	checkIsUserAuth
};
