import React, { useContext } from 'react';
import './style.css'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../backend/context/authContext.jsx';
const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
	return (
    <>
 <div className="flex-container">
        <div className="content-container">
          <div className="form-container">
            <form>
              <h1>
                Вход
              </h1>
              {err && <p>Ошибка: {err}</p>}
              <br/>
              <br/>
              <span className="subtitle"> Логин:</span>
              <br/>
              <input type="text" name="username" onChange={handleChange} required />
              <br/>
              <span className="subtitle">Пароль:</span>
              <br/>
              <input type="password" name="password" onChange={handleChange} required/>
              <br/><br/>
              <button type="submit" className="submit-btn" onClick={handleSubmit}> Отправить </button>
             <a href="/auth/register" className='register'>зарегестрироваться</a>
            </form>
          </div>
        </div>
      </div>
	</>
    )
}

export default Login
