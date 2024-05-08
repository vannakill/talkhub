import React, { useContext } from "react";
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import './header.css'
import { AuthContext } from '../../../backend/context/authContext.jsx';
const Header = () => {
    const {currentUser, logout} = useContext(AuthContext)
    const FormNavigate = <Navigate to="post/form" replace/>
	return (
		<>
    <header>
        <div>
        <Link to={`/post`}>
            <h2 className="title">ТокХаб</h2>
            </Link>
        </div>
        <div className="reg">
            <a href="/post/form" className="write">+</a>
            <span className="username">{currentUser?.username}</span>
            {currentUser ? <button onClick={logout}>выйти</button> : 
            <Link to={`/auth/login`}>
            <p>войти</p>
            </Link>}
        </div>
    </header>
		</>
	)
}

export default Header
