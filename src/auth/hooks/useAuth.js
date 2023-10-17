import { useReducer } from "react"
import Swal from "sweetalert2"
import { loginUser } from "../services/authService"
import { loginReducer } from "../Reducers/loginReducer"

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}

export const useAuth = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin)
    const handlerLogin = (userLogin) => {
        const isLogin = loginUser(userLogin)
        if (isLogin)  {
            const user = { username: 'admin' }
            dispatch({
                type: 'login',
                payload: user,
            })
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user
            }))
        } else {
            Swal.fire('Error de login', 'Username y password invalidos', 'error')
        }

    }

    const handlerLogout = () => {
        dispatch({
            type: 'logout'
        })
        sessionStorage.removeItem('login')
    }

    return {
        login,
        handlerLogin,
        handlerLogout

    }
}