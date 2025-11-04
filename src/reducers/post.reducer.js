const initialState = {};

export default function postReducer(state = initialState, action) {
	switch (action.type) {
		// Define your action handlers here
		case "GET_POSTS":
			return {
				...state,
				posts: action.payload,
				error: null
			};
		default:
			return state;
	}
}