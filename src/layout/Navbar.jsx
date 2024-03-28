

import { Link } from "react-router-dom"
import '../css/navbar.css'

export const Navbar = ({handlerLogout, login}) => {
  return (

    <>

<div className="navbar">
  <Link to="/" className="navbar-brand">App-Training</Link>
  <span className="user-title">
            {login.user?.username}
          </span>
  <ul className="navbar-nav">
    {!login.isAdmin ||
    <>
    <li className="nav-item"> <Link to="/buscador">Buscador</Link></li>
    <li className="nav-item"><Link to="/data">Data</Link></li>
    <li className="nav-item"><Link to="/users" className="nav-link">Users</Link></li>
    </>
    }
    <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
    <li className="nav-item"><Link to="#" onClick={handlerLogout}  className="nav-link">Logout</Link></li>
  </ul>
</div>
    </>
  )
}
