
import { Navbar } from "./layout/Navbar"
import { useAuth } from "./auth/hooks/useAuth"
import App from "./App"
import { LoginPage } from "./auth/pages/LoginPage"

export const UsersApp = () => {

    const{login, handlerLogin, handlerLogout} = useAuth()

    
    return (
        <>

            {login.isAuth
            
            ? (<> 
            <Navbar
            handlerLogout={handlerLogout}
            login={login}/> 
            <App/> </>): 
            <LoginPage
            handlerLogin={handlerLogin}/>}
        </>
    )
}
