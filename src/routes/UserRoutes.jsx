/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../layout/Navbar"
import App from "../layout/App"
import { Blog } from "../componentes/Blog"
import { FormProvider } from "../context/FormProvider"
import { ContenedorEditar } from "../dinamicForm/ContenedorEditar"
import { Statistics } from "../componentes/Statistics"
import { Footer } from "../layout/Footer"
import { WodSelectedList } from "../componentes/WodSelectedList"
import { Users } from "../user-management/pages/Users"


export const UserRoutes = ({ handlerLogout, login }) => {
  return (
    <>
      <FormProvider>

        <Navbar handlerLogout={handlerLogout} login={login} />

        <Routes>
          {
            login.isAdmin ? (
              <>
                <Route path="app" element={<App />} />
                <Route path="/" element={<Navigate to={"/app"} />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/editar" element={<ContenedorEditar />} />
                <Route path="/data" element={<Statistics />} />
                <Route path="/buscador" element={<WodSelectedList />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/page/:page" element={<Users />} />
              </>
            )
              :
              <>
                <Route path="/" element={<Navigate to={"/Blog"} />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="*" element={<Navigate to={"/Blog"} replace />} />
              </>

          }


        </Routes>

        <Footer />

      </FormProvider>
    </>
  )
}
