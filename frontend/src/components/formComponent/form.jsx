import React, { useState, useRef } from "react";
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import './style.css'
import ReactQuill from "react-quill";
import axios from "axios";
import moment from "moment"
import { useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';

const Form = () => {
	const state = useLocation().state;
  const [desc, setValue] = useState("");
  const [Title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [err, setError] = useState(null);
  let toolbarOptions = ['bold', 'italic', 'link', 'underline', 'video']
  const module ={
    toolbar:toolbarOptions,
  }

  const navigate = useNavigate()
  try {
	state
} catch (err) {
	console.log(err);
}

const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/api/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

const handleClick = async (e) => {
	e.preventDefault();
  const imgUrl = await upload();
	try{
		await axios.post(`/api/posts`, 
		{
		Title,
		desc,
    img: file ? imgUrl : "",
		createdat: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
	});
	navigate("/post")
}catch(er){
  setError(er.response.data);
}}
	return (
		<>
<div className="wrapper">
  <h2 className="page-title">Опубликовать информацию</h2>
  {err && <p>Ошибка: {err}</p>}
<form>
  <div className="post-container">
 <input type="text" name="title" placeholder="введите заголовок" className="input-title" onChange={(e) => setTitle(e.target.value)} autocomplete="off"/>
 <ReactQuill
            className="editor"
            theme="snow"
            value={desc}
            onChange={setValue}
            modules={module}
          />
<p> загрузить изображение</p>
 <input type="file" 
 className="image-picker"
id="file"
name=""
accept="image/*"
onChange={(e) => setFile(e.target.files[0])}

/>
 <button className="button-submit" onClick={handleClick}>Отправить</button>

  </div>
</form>
</div>

		</>
	)
}

export default Form