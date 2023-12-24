/* eslint-disable react/prop-types */

export const Navbar = () => {
  return (

    <>

<div className="navbar">
  <a href="/" className="navbar-brand">App-Training</a>
  <span className="user-title">
            
          </span>
  <ul className="navbar-nav">
    <li className="nav-item"> <a href="/buscador">Buscador</a></li>
    <li className="nav-item"><a href="/data">Data</a></li>
    <li className="nav-item"><a href="/blog" className="nav-link">Blog</a></li>
    <li className="nav-item"><a href="/users" className="nav-link">Users</a></li>
    <li className="nav-item"><a href="#"  className="nav-link">Logout</a></li>
  </ul>
</div>
    </>
  )
}
