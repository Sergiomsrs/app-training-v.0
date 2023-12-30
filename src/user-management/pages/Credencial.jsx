import { LoginPage } from "../auth/LoginPage"
import { UsersApp } from "../../layout/UsersApp"
import { useAuth } from "../hooks/useAuth"
import { Navigate, Route, Routes } from "react-router-dom"



export const Credencial = () => {

const {login, handlerLogin, handlerLogout} = useAuth()
    

    return (

        <Routes>
        {
            login.isAuth?(
                <Route path="/*" element={<UsersApp handlerLogout={handlerLogout} login={login} />} />
            ) 
           :
           <>
           <Route path="/login" element={<LoginPage handlerLogin={handlerLogin}/>} />
           <Route path="/*" element={<Navigate to={"/login"} />} />
           </>
            
        }
    
        </Routes>

        )
}