import React, { Component } from 'react';
import webpack from 'react'
import './main.css'
import avatar from '../avatar.jpg'
import Post from '../PostComponent/post';
import { useQuery } from "react-query"
const Main = () => {

	return (
		<>
<main>
{data ? (
		data.map((post) => (
			<Post
			key={post.id}
            id={post.id}
			img={post.img}
			title={post.title}
			username={post.username}
			userAvatar={post.userAvatar}
            timestamp={post.timestamp}
            tag={post.tag}
            postText={post.postText}
			/>
		))
		) : (
		<p>Данные не доступны</p>
	)}
</main>
		</>
	)
}

export default Main
