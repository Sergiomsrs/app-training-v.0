import { useReducer } from "react"

import Swal from "sweetalert2"
import { loginReducer } from "../reducers/loginReducer"
import { loginUser } from "../services/authService"
import { useNavigate } from "react-router-dom"

const initialLogin= JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    username: undefined,
}

export const useAuth = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin)
    const navigate = useNavigate()
    const handlerLogin = ({username, password}) => {
        const isLogin = loginUser({username, password})

        if (isLogin) {
            const user = {
                username: 'admin',
            }
            dispatch({
                type: 'LOGIN',
                payload: user
            })
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true, 
                user,
            }))
            navigate('/app')
        } else {
            Swal.fire('Error de validacion', 'Username o password incorrectos', 'error')
        }
    }

    const handlerLogout = () => {
        dispatch({
            type: 'LOGOUT',
        })
        sessionStorage.removeItem('login')  
        console.log('hola')
    }

    return {
        login,
        handlerLogin,
        handlerLogout,
    }

}