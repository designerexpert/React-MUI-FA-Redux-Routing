import {
	authenticateToken,
	getNewToken
} from '../services';
/*
    Action Types are Referenced on Reducers and Actions Alike
    They Maintain a Map that can easily be changed in one place.
*/
export const actionTypes = {
	USER_AUTH: 'USER_AUTH',
	USER_AUTHENTICATING: 'USER_AUTHENTICATING',
	USER_AUTH_FAILURE: 'USER_AUTH_FAILURE',
	USER_LOG_OUT: 'USER_LOG_OUT',
	APP_SHORTCUT_ADD: 'APP_SHORTCUT_ADD'
};

let authCount = 0;

const getToken = async (dispatch) => {
	if (authCount < 3) {
		getNewToken()
			.then((response) => {
				const {
					token
				} = response.data;
				localStorage.setItem('token', token);
				authenticateNewToken(dispatch, token);
			})
			.catch((err) => {
				dispatch({
					type: actionTypes.USER_AUTH_FAILURE
				});
			});
	}

}

const authenticateNewToken = async (dispatch, token) => {
	authCount++;
	authenticateToken(token)
		.then((authResponse) => {
			authCount = 0;
			dispatch({
				type: actionTypes.USER_AUTH,
				payload: authResponse.data
			})
		})
		.catch((authErr) => {
			if (authErr.message.includes("403")) {
				dispatch({
					type: actionTypes.USER_AUTHENTICATING
				});
				getToken(dispatch)
			}
		});
}
/* BEGIN USER ACTIONS */
export const userAuth = () => async dispatch => {
	dispatch({
		type: actionTypes.USER_AUTHENTICATING
	});
	try {
		const token = localStorage.getItem('token');
		if (token) {
			authenticateNewToken(dispatch, token)
		} else {
			getToken(dispatch);
		}
	} catch (err) {
		dispatch({
			type: actionTypes.USER_AUTH_FAILURE
		});
	}
};

export const userLogOut = (payload) => {
	return {
		type: actionTypes.USER_LOG_OUT,
		payload
	};
};
/* END USER ACTIONS */
export const appShortcutAdd = (payload) => {
	return {
		type: actionTypes.APP_SHORTCUT_ADD,
		payload
	};
};