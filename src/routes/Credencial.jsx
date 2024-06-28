
import { UsersApp } from "./UsersApp"
import { LoginPage } from "../login/LoginPage"
import { useAuth } from "../login/hooks/useAuth"
import { Navigate, Route, Routes } from "react-router-dom"



export const Credencial = () => {

    const { login, handlerLogin, handlerLogout } = useAuth()


    return (

        <div className="bg-customDark text-gray-900 min-h-screen">
        <div className="container mx-auto px-16 max-w-full py-8" >
        <Routes>
            {

                login.isAuth ? (
                    <Route path="/*" element={<UsersApp handlerLogout={handlerLogout} login={login} />} />
                )
                    :
                    <>
                        <Route path="/login" element={<LoginPage handlerLogin={handlerLogin} />} />
                        <Route path="/*" element={<Navigate to={"/login"} />} />
                    </>

            }

        </Routes>
                </div>
                </div>

    )
}
