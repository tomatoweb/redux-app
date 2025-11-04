import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.js";
import { fetchPosts } from "./actions/post.action.js";

const store = configureStore({
	reducer: rootReducer,
	devTools: true, // Enable Redux DevTools, !! set to false in production !!
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

store.dispatch(fetchPosts());

root.render(
<Provider store={store}>
	<App />
</Provider>
);
