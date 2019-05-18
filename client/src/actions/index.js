/* 
    Action Types are Referenced on Reducers and Actions Alike
    They Maintain a Map that can easily be changed in one place.
*/
export const actionTypes = {
	USER_AUTH: 'USER_AUTH',
	USER_LOG_OUT: 'USER_LOG_OUT',
	APP_SHORTCUT_ADD: 'APP_SHORTCUT_ADD'
};

/* BEGIN USER ACTIONS */
export const userAuth = (payload) => {
	return {
		type: actionTypes.USER_AUTH,
		payload
	};
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
