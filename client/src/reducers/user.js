import { actionTypes } from '../actions';

const defaultState = {
	valid: false,
	name: null,
	sub: null,
	roles: [],
	adGroups: []
};

export default (state = defaultState, action) => {
	const { payload, type } = action;
	const stateCopy = JSON.parse(JSON.stringify(state));

	switch (type) {
		case actionTypes.USER_AUTH:
			if (payload.decodedToken) {
				stateCopy.valid = true;
				return { ...stateCopy, ...payload.decodedToken };
			}
		default:
			return state;
	}
};
