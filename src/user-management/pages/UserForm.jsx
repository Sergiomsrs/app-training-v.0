import { useEffect, useState } from "react"
import '../styles/userpage.css'

export const UserForm = ({ handlerAddUser, initialUserForm, userSelected, handlerCloseForm, errors }) => {
    
    
    
    const [userForm, setUserForm] = useState(initialUserForm)
    const { username, password, email, id } = userForm
    

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: ''
        })
    }, [userSelected]);

    const onImputChange = (event) => {
        const { name, value } = event.target
        setUserForm({ ...userForm, [name]: value })
    }

    const onCLoseForm = () => {
        handlerCloseForm()
        setUserForm(initialUserForm)
    }

    const onSubmit = (event) => {
        event.preventDefault()  
        handlerAddUser(userForm)
    }

    return (

        <form className="componente-form-userpage" >
            <input
                className="input-userpage"
                placeholder="Name"
                name="username"
                value={username}
                onChange={onImputChange}
                
            />
            <p>{errors?.username}</p>
            {id > 0 ||
                <input
                    className="input-userpage"
                    placeholder="Password"
                    name="password"
                    value={password}
                    type="password"
                    onChange={onImputChange}
                />}
                <p>{errors?.password}</p>

            <input
                className="input-userpage"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onImputChange}
            />
            <p>{errors?.email}</p>
            <input type="hidden" name="id" value={id} />
            <div className="button-user-container">

                <button onClick={onSubmit} className="boton-guardar-userpage" >
                    {id === 0 ? 'Crear' : 'Confirmar'}
                </button>

                <button type="button"
                    onClick={() => onCLoseForm()}
                    className="boton-guardar-userpage">
                    Cerrar
                </button>
            </div>


        </form>

    )
}
