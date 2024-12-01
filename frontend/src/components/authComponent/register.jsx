import React from 'react';
import './style.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register/',inputs)
      navigate("/auth/login");
    } catch (err) {
      setError(err.response.data);
    }
  };
	return (
	<>
 <div className="flex-container">
        <div className="content-container">
          <div className="form-container">
              <h1>
                Регистрация
              </h1>
              {err && <p className='error-message-register'> <span className='error-title'>Ошибка:</span> {err}</p>}
            <form>
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
            </form>
          </div>
        </div>
      </div>
	</>
    )
}

export default Register
