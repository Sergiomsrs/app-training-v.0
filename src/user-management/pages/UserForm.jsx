import { useEffect, useState } from "react"
import '../styles/userpage.css'

export const UserForm = ({handlerAddUser, initialUserForm, userSelected}) => {

  

    const [userForm, setUserForm] = useState(initialUserForm)
    
    const onImputChange = (event) => {
        const {name, value} = event.target
        setUserForm({...userForm, [name]: value})
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if(!userForm.name || !userForm.password || !userForm.email) {
            alert('Faltan datos')
            return
        }

        handlerAddUser(userForm)
        setUserForm(initialUserForm)

    }

    const {name, password, email, id} = userForm

    useEffect(() => {
        setUserForm({...userSelected})
    }, [userSelected]);
    
    
    return (

        <form onSubmit={onSubmit} className="componente-form-userpage" >
            <input 
            className="input-userpage"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onImputChange}
            />
            <input 
            className="input-userpage"
            placeholder="Password"
            name="password"
            value={password}
            type="password"
            onChange={onImputChange}
            />
            <input 
            className="input-userpage"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onImputChange}
            />
            <input type="hidden" name="id" value={id} />
            <button type="submit" className="boton-guardar-userpage" > 
            {id === 0 ? 'Crear' : 'Editar'}
            </button> 
            
        </form>

    )
}
