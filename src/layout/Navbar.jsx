

import { Link } from "react-router-dom"


export const Navbar = ({ handlerLogout, login }) => {


  return (

    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items">

              <div className="block items-center">

              <Link to="/" className="text-blue-800 font-extrabold text-xl" >App-Training</Link>
              <h1 className="text-white">
                {login.user?.username}
              </h1>
              </div>

              {!login.isAdmin ||
                <>
                  <Link to="/buscador" className="text-gray-300 text-lg hover:text-white px-3 py-2  font-medium">
                    Buscador
                  </Link>
                  <Link to="/data" className="text-gray-300 hover:text-white px-3 py-2 text-lg font-medium">
                    Data
                  </Link>
                  <Link to="/users" className="text-gray-300 hover:text-white px-3 py-2 text-lg font-medium">
                    Users
                  </Link>
                </>
              }
              <Link to="/blog" className="text-gray-300 hover:text-white px-3 py-2 text-lg font-medium">
                blog
              </Link>
              <Link to="#" onClick={handlerLogout} className="text-gray-300 hover:text-white px-3 py-2 text-lg font-medium">
                Logout
              </Link>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  )
}
