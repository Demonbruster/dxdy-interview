import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import { fetchPosts } from "../actions/postActions";

//TODO
// 1. Convert file into function component
// 2 To access data from redux use redux hooks

export default function PostsFnComponent() {
	const postItems = useSelector((state) => state.posts.items);
  
	return (
		<div>
			<h1>Posts</h1>
			{postItems.map((post, index) => (
				<PostItems post={post} key={index} />
			))}
		</div>
	);
}

const PostItems = ({post}) => {
	console.log('post',post)
	return(
	<div key={post.id}>
		<h3>{post.title}</h3>
		<p>{post.body}</p>
	</div>
)};
