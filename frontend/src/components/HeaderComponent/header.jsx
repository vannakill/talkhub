import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'; 
import './header.css'
import { AuthContext } from '../../authContext.jsx';
const Header = () => {
    const {currentUser, logout} = useContext(AuthContext)
    const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open)
  };
  
    const navigate = useNavigate()
    const logoutButton = ()=>{
       logout()
       navigate("/")
       setOpen(!open)
      }

	return (
		<>
    <header>
      <div>
        <Link to={`/post`}>
          <h2 className="title">ТокХаб</h2>
        </Link>
      </div>
      <div className="reg">
        { currentUser ? <button onClick={handleOpen}> {currentUser?.username} ▼ </button>: <></> }
        {currentUser ? <></> : 
        <Link to={`/auth/login`}>
          <p>войти</p>
            </Link>}
          <div>
            {open ? (
              <ul className="menu">
                <li className="menu-item">
                  <Link to={`/post/form`}><p onClick={handleOpen} className="write">Опубликовать</p></Link>
                </li>
                <li className="menu-item">
                  <Link to={`/profile/posts   `} ><p onClick={handleOpen} className="write">Мои публикации</p></Link>
                </li>
                <li className="menu-item">
                  <button onClick={logoutButton}>выйти</button>
                </li>
              </ul>
              ) : null} 
           </div>
      </div>
    </header>
		</>
	)
}

export default Header
