import React from "react";
import PostForm from "./components/PostForm";
import User from "./components/User";
import Post from "./components/Post";
import { useSelector } from "react-redux";

const App = () => {

	const posts = useSelector((state) => state.postReducer.posts);

  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
					{posts && posts.map((post, index) => (
						<div className="post-card" key={post.id}>
							<Post key={index} post={post} />
						</div>
					))}
				</div>
        <User />
      </div>
    </div>
  );
};

export default App;
