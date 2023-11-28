/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../layout/Navbar"
import App from "../layout/App"
import { Blog } from "../componentes/Blog"


export const UserRoutes = ({ handlerLogout, login }) => {
  return (
    <>

      <Navbar handlerLogout={handlerLogout} login={login} />
      <Routes>
        <Route path="app" element={<App />} />
        <Route path="/" element={<Navigate to={"/app"} />} />
        <Route path="/Blog" element={<Blog/>} />
      </Routes>
    </>
  )
}
