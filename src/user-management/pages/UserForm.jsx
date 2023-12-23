import { useState } from "react"

export const UserForm = ({handlerAddUser}) => {

    const initialUserForm = {
        name: '',
        password: '',
        email: ''
    }

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

    const {name, password, email} = userForm
    
    
    return (

        <form onSubmit={onSubmit} style={{display:"flex", flexDirection:"column", width:'400px'}}>
            <input 
            placeholder="Name"
            name="name"
            value={name}
            onChange={onImputChange}
            />
            <input 
            placeholder="Password"
            name="password"
            value={password}
            type="password"
            onChange={onImputChange}
            />
            <input 
            placeholder="Email"
            name="email"
            value={email}
            onChange={onImputChange}
            />
            <button type="submit" > 
            Crear
            </button> 
            
        </form>

    )
}
