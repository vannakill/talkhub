import React from 'react';
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../authContext"
import axios from 'axios';
import moment from 'moment'
import 'moment/dist/locale/ru'
import '../MainComponent/main.css'
const Comment = (postId) => {
   
    postId = location.pathname.split("/")[2]
    const [data,setData] = useState([])
    const [desc, setDesc] = useState("");
    const { currentUser } = useContext(AuthContext);

      const fetchData = async () =>{
          try{
              const res = await axios.get(`/api/comments?postId=${postId}`)
              setData(res.data)
          }catch(err){
              console.log(err)
           }} 
          fetchData()
  
      const handleClick = async (e) => {
        e.preventDefault();
        try{
          await axios.post(`/api/comments`, 
          {
          postId,
          desc,
          createdat: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        });
      }catch(er){
        console.log(er)
        }}

  const handleDelete = async (comment)=>{
    try {
      await axios.delete(`/api/comments/delete/${comment}`);
    } catch (err) {
      console.log(err);
    }
  }
	return (
        
	<>
    <div className='wrapper' >
    <h2 className='comment-title'>Комментарии</h2>
    {currentUser ?  
	    <div className="post">
            <div className="user-info">
                <p className="post-nickname">{currentUser.username}</p>
            </div>
            <div className="comment-text">
               <input type="text" placeholder='Введите текст:' value={desc} onChange={(e)=> setDesc(e.target.value)}/>
            </div>
                <button className='comment-submit' onClick={handleClick}> Отправить</button>
        </div>
        : <></> 
      }
           
        { 
         data.map((comment)=>
          (
          
            <div className="post" key={comment.id}>
            <div className="user-info">
                <p className="post-nickname">{comment.username}</p>
                <p>{moment(comment.createdat).fromNow()}</p>
            </div>
          
            <div className="comment-text" id='comment'>
                <p>{comment.desc}</p>
                { currentUser &&  (currentUser.username === comment.username || currentUser.id === 1)  &&(
              <button className='delete-button' onClick={(e) => handleDelete(comment.id)}>Удалить</button>)}
            </div>
        </div> 
         ))}
    </div>
	</>
    )
}

export default Comment
