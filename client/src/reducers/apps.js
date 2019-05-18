import { actionTypes } from '../actions';

const defaultState = {
	shortcuts: []
};

const localShortcuts = localStorage.getItem('shortcuts');
if (localShortcuts && localShortcuts !== '') {
	const shortcuts = JSON.parse(localShortcuts);
	defaultState.shortcuts = shortcuts;
}

export default (state = defaultState, action) => {
	const { payload, type } = action;
	const stateCopy = JSON.parse(JSON.stringify(state));

	switch (type) {
		case actionTypes.APP_SHORTCUT_ADD:
			stateCopy.shortcuts.push(payload);
			localStorage.setItem('shortcuts', JSON.stringify(stateCopy.shortcuts));
			return stateCopy;
		default:
			return state;
	}
};
