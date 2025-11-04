import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const fetchPosts = () => async (dispatch) => {
	try {
		const response = await axios.get("http://localhost:3000/posts");		
		dispatch({ type: "GET_POSTS", payload: response.data });
	} catch (error) {
		dispatch({ type: "GET_POSTS_FAILURE", payload: error.message });
	}
}