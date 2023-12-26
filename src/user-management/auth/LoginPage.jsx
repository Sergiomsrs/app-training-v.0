import { useState } from "react";
import Swal from "sweetalert2";

const initialLoginForm = {
    username: '',
    password: '',
}


export const LoginPage = ({handlerLogin}) => {


    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { username, password } = loginForm
    
    const onImputChange = ({target}) =>{
        const {name, value} = target
        setLoginForm({
            ...loginForm,
            [name]:value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if(!username || !password){
            Swal.fire('Error de validacion', 'Username y password requeridos', 'error')
        }

        // implementacion del login

        handlerLogin({username, password})
    
    

        setLoginForm(initialLoginForm)
         
    }




    return (
        <aside className="login-page">
       
                    <header className="login-header">
                        <h5 className="modal-title">Login Page</h5>
                    </header>

                    <form onSubmit={onSubmit}>
                        <div className="login-body">
                            <input
                                className="form-control my-3 w-75"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={onImputChange}
                            />

                            <input
                                className="form-control my-3 w-75"
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={password} 
                                onChange={onImputChange}
                                />
                        </div>

                        <footer>
                        <div className="login-footer">
                            <button type="submit"  className="btn">Login</button>
                        </div>
                    </footer>
                    </form>

                    




        </aside>
    )
}
