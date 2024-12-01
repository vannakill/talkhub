import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../MainComponent/main.css'
import { AuthContext } from "../../authContext"
import { PostComponent } from './PostComponent';

const UserPosts = () => {
    const [data,setPosts] = useState([])
    const [query, setQuery] = useState("");
    const { currentUser } = useContext(AuthContext);
        const fetchData = async () =>{
            try{
                const res = await axios.get(`/api/posts/profile/${currentUser.id}`)
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
        <h2 className='page-title'>Ваши публикации</h2>
        <input type="search" name="search-form" id="search-form" className="search-input" onChange={(e) => setQuery(e.target.value)} placeholder="Поиск"/>
        {search(data).map((post) => ( 
        
		<PostComponent
		key={post.id}
        id={post.id}
		img={post.img}
		Title={post.Title}
        createdat={post.createdat}
        desc={post.desc}
		/>
    
		))}
    </div>
	</>
    )
}

export default UserPosts
