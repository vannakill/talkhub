import React, { Component, useState } from 'react';
import { PostComponent } from '../PostComponent/PostComponent';
import './main.css'
import axios from 'axios';	
const Main = () => {
	const [data,setPosts] = useState([])
	const [copied, setCopied] = useState(false);
	const [query, setQuery] = useState("");
	const fetchData = async () =>{
		try{
			const res = await axios.get("/api/posts/")
			setPosts(res.data)
		}catch(err){
			console.log(err)
		 }} 
		fetchData()

	const search_params = Object.keys(Object.assign({}, ...data));
	
	function search(data) {
		return data.filter((data) =>
			search_params.some((param) =>
			data[param].toString().toLowerCase().includes(query)
		))}


	return (
		<>
		<div className='wrapper'>
		<h2 className='page-title'>Главная</h2>
		<input type="search" name="search-form" id="search-form" className="search-input" onChange={(e) => setQuery(e.target.value)} placeholder="Поиск"/>

	{search(data).map((post) => ( 
		<PostComponent
		key={post.id}
        id={post.id}
		img={post.img}
		Title={post.Title}
        createdat={post.createdat}
        desc={post.desc}
		username={post.username}
		/>
		))}
</div>
		</>
	)
}

export default Main
