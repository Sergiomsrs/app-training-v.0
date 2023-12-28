import { useEffect, useState } from "react"
import '../styles/userpage.css'
import Swal from "sweetalert2"

export const UserForm = ({ handlerAddUser, initialUserForm, userSelected, handlerCloseForm }) => {



    const [userForm, setUserForm] = useState(initialUserForm)

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
        if (!userForm.username || (!userForm.password && userForm.id === 0) || !userForm.email) {
            Swal.fire({
                title: "Error de Validación",
                text: "Debe completar todos los campos",
                icon: "error",
                background: "#3a3838",
                color: "#fff"
            });
            return
        }

        handlerAddUser(userForm)
        setUserForm(initialUserForm)

    }

    const { username, password, email, id } = userForm

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: ''
        })
    }, [userSelected]);


    return (

        <form className="componente-form-userpage" >
            <input
                className="input-userpage"
                placeholder="Name"
                name="username"
                value={username}
                onChange={onImputChange}
            />
            {id > 0 ||
                <input
                    className="input-userpage"
                    placeholder="Password"
                    name="password"
                    value={password}
                    type="password"
                    onChange={onImputChange}
                />}

            <input
                className="input-userpage"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onImputChange}
            />
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
