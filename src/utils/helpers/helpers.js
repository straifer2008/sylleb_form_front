import axios from 'axios';

const checkJWT = async (getState) => {
	const state = await getState();
	const user = state.authReducer.user;
	if (user) {
		axios.defaults.headers.common.Authorization = `Bearer ${user.token.token}`;
		return console.log('has JWT');
	}
};

export {
	checkJWT
};
