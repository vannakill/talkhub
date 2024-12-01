import React from "react"
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import {PostDetails} from './components/PostComponent/PostDetails.jsx'
import  Header  from './components/HeaderComponent/header.jsx'
import  UserPosts  from './components/PostComponent/userPosts.jsx'
import  Register from './components/authComponent/register.jsx'
import  Form from './components/formComponent/form.jsx'
import  Login  from './components/authComponent/login.jsx'
import Main from "./components/MainComponent/main.jsx"
import './components/MainComponent/main.css'
import './App.css'
import 'moment/locale/ru';

export default function App() {
	return (
<>
	<BrowserRouter>
   <Header/>
	<Routes>
	<Route path='/post' element = {<Main/>}></Route>
	<Route path='/post/:id' element = {<PostDetails/>}></Route>
	<Route
        path="/"
        element={<Navigate to="/post" replace />}
    />
	<Route path='/post/form' element = {<Form/>}></Route>
	<Route path='/auth/register' element = {<Register/>}></Route>
	<Route path='/auth/login' element = {<Login/>}></Route>
	<Route path='/profile/:username' element = {<UserPosts/>}></Route>
	</Routes>
	</BrowserRouter>
</>
  )

}


