import React, { useState } from "react";
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import './style.css'
import axios from "axios";
import moment from "moment"
import { useNavigate } from 'react-router-dom';
const Form = () => {
	const state = useLocation().state;
  const [desc, setValue] = useState("");
  const [Title, setTitle] = useState("");

  const navigate = useNavigate()
  try {
	state
} catch (err) {
	console.log(err);
}
const handleClick = async (e) => {
	e.preventDefault();
	try{
		await axios.post(`http://localhost:3000/api/posts`, 
		{
		Title,
		desc,
		userId:1,
		createdat: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
	});
	navigate("/post")
}catch(er){
console.log(er)
}
	
}
	return (
		<>
<div className="post-container">
<form>
 <span>Заголовок</span>
 <input type="text" name="title" placeholder="введите заголовок" className="input-title" onChange={(e) => setTitle(e.target.value)} />
 <input type="text" name="desc" placeholder="текст" className="input-text" onChange={(e) => setValue(e.target.value)}/>
 <button className="button-submit" onClick={handleClick}>Отправить</button>
</form>
</div>

		</>
	)
}

export default Form