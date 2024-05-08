import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import '../MainComponent/main.css'
/*            key={messages.postId}
            id={messages.id}
            username={messages.username} */
const Comment = ({id, postId, username = "", userAvatar = "", text = ""}) => {
	return (
	<>
	 <div className='comment-wrapper'>
        <div className='comment-container'>
            <div className='comment-userinfo'>
                <div className='img-container'>
                        <img src={userAvatar} alt="" />
                </div>
                <div className='text'>
                    <p>
                        {username}
                    </p>
                    <div>
                    	<p className='comment-text'>{text}</p>
                    </div>
                </div>
            </div>
        </div>
	</div>
	</>
    )
}

export default Comment
