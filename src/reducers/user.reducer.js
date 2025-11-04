const initialState = {user: "from scratch"};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		// Define your action handlers here
		default:
			return state;
	}
}