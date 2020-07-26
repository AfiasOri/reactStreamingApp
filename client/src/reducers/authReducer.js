import { SIGN_IN, SIGN_OUT } from 'actions/types';

const initState = { isSignedIn: null, userId: null };

export default (state = initState, action) => {
	if (action && action.type === SIGN_IN)
		return { ...state, isSignedIn: true, userId: action.payload };
	else if (action && action.type === SIGN_OUT)
		return { ...state, isSignedIn: false, userId: null };

	return state;
};
