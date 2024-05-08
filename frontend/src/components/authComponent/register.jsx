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
      await axios.post('http://localhost:3000/api/auth/register/',inputs)
      navigate("/login");
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
                Регистрация
              </h1>
              {err && <p>Ошибка: {err}</p>}
              <br/>
              <br/>
              <span className="subtitle"> Логин:</span>
              <br/>
              <input type="text" name="username" onChange={handleChange} required />
              <br/>
              <span className="subtitle"> Email:</span>
              <br/>
              <input type="text" name="email" onChange={handleChange} required/>
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
