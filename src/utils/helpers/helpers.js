import axios from 'axios';

const checkJWT = async (getState) => {
	const state = await getState();
	const token = state.auth.token;
	if (token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
		return console.log('has JWT');
	}
};

export {
	checkJWT
};
