import {
    getUserDataError,
    getUserDataReceive,
    getUserDataStart
} from './homeActions';
import {apiPost} from '../../utils/helpers/apiHelpers';


const getUserData = (data) => async (dispatch) => {
    dispatch(getUserDataStart());
    try {
        const postData = await apiPost('/getUser', {token: data});
        dispatch(getUserDataReceive(postData.data.user));
    } catch (e) {
        if (e.response && e.response.data) {
            dispatch(getUserDataError(e.response.data));
        } else {
            dispatch(getUserDataError(e));
        }
    }
};

export {
    getUserData
};
