import React, { useContext } from 'react';
import './style.css'
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext.jsx';
import { Link } from 'react-router-dom'
const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const { login } = useContext(AuthContext);

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
              {err && <p className='error-message'> <span className='error-title'>Ошибка:</span> {err}</p>}
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
              <Link to={"/auth/register"} className='register'> зарегестрироваться </Link>
            </form>
          </div>
        </div>
      </div>
	</>
    )
}

export default Login
