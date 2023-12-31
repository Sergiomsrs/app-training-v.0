import { useReducer } from "react"

import Swal from "sweetalert2"
import { loginReducer } from "../reducers/loginReducer"
import { loginUser } from "../services/authService"
import { useNavigate } from "react-router-dom"

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
    username: undefined,
}

export const useAuth = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin)
    const navigate = useNavigate()

    const handlerLogin = async ({ username, password }) => {

        try {
            const response = await loginUser({ username, password })
            const token = response.data.token
            const claims = JSON.parse(window.atob(token.split('.')[1]))
            console.log(claims)
            const user = {
                username: claims.username,
            }
            dispatch({
                type: 'LOGIN',
                payload: { user, isAdmin: claims.isAdmin }
            })
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                isAdmin: claims.isAdmin,
                user,
            }))
            sessionStorage.setItem('token', `Bearer ${token}`)

            if(claims.isAdmin){
                navigate('/app')
            } else {
                navigate('/Blog')
            }
            
        } catch (error) {
            if(error.response.status === 401){
                Swal.fire('Error de validacion', 'Username o password incorrectos', 'error')
            } else if (error.response.status === 403) {
                Swal.fire('Error de Login', 'No tiene acceso al recurso', 'error')
            } else {
                throw error
        }
    }
}

    const handlerLogout = () => {
        dispatch({
            type: 'LOGOUT',
        })
        sessionStorage.removeItem('login')
        sessionStorage.removeItem('token')
        sessionStorage.clear()
    }

    return {
        login,
        handlerLogin,
        handlerLogout,
    }

}