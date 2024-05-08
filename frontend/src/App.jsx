import { useState } from 'react'
import  Header  from './components/HeaderComponent/header.jsx'
import  Main  from './components/MainComponent/main.jsx'
import  Post  from './components/PostComponent/post.jsx'
import { useQuery } from "react-query"
import React from "react"
import './App.css'
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import {PostDetails} from './components/PostComponent/PostDetails.jsx'
import  Register from './components/authComponent/register.jsx'
import  Form from './components/formComponent/form.jsx'
import  Login  from './components/authComponent/login.jsx'
import './components/MainComponent/main.css'

export default function App() {


  return (
<>
	<BrowserRouter>
   <Header/>
	<Routes>
	<Route path='/post' element = {<Post/>}></Route>
	<Route path='/post/:id' element = {<PostDetails/>}></Route>
	<Route
        path="/"
        element={<Navigate to="/post" replace />}
    />
	<Route path='/post/form' element = {<Form/>}></Route>
	<Route path='/auth/register' element = {<Register/>}></Route>
	<Route path='/auth/login' element = {<Login/>}></Route>
	</Routes>
	</BrowserRouter>
</>
  )

}


