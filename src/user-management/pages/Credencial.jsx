import { LoginPage } from "../auth/LoginPage"
import { UsersApp } from "../../layout/UsersApp"
import { useAuth } from "../hooks/useAuth"



export const Credencial = () => {

const {login, handlerLogin, handlerLogout} = useAuth()
    

    return (

        <>
        {
            login.isAuth? 
            <UsersApp 
            handlerLogout={handlerLogout}
            login={login}
            /> :
            <LoginPage handlerLogin={handlerLogin}/>
        }
    
        </>

        )
}
