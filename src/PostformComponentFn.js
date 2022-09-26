import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import { createPost } from "./actions/postActions";
import { withRouter } from "react-router-dom";

function PostformComponentFn(props) {
	const [postState, setPostState] = React.useState({
		title: "",
		body: "",
		name: "",
	});

	const dispatch = useDispatch();

	const onChange = (e) => {
		setPostState({ [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const post = {
			title: postState.title,
			body: postState.body,
		};
		createPost(post, dispatch);
		// dispatch(createdata())
		// createPost(post);

		props.history.push("/");
	};

	return (
		<div>
			<h1>Add Post</h1>
			<form onSubmit={onSubmit}>
				<div>
					<label>Name: </label>
					<br />
					<input type='text' name='name' onChange={onChange} value={postState.name} />
				</div>
				<div>
					<label>Title: </label>
					<br />
					<input type='text' name='title' onChange={onChange} value={postState.title} />
				</div>
				<br />
				<div>
					<label>Body: </label>
					<br />
					<textarea name='body' onChange={onChange} value={postState.body} />
				</div>
				<br />
				<button type='submit'>Submit Post</button>
			</form>
		</div>
	);
}

export default withRouter(PostformComponentFn);
