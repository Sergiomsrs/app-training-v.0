import { useReducer, useState } from "react"

import Swal from "sweetalert2"
import { userReducer } from "../reducers/usersReducer"

const initialUsers = [
    {
        id: 1,
        name: 'John',
        password: '1234',
        email: 'Jhon@email.com'
    }]

const initialUserForm = {
    name: '',
    password: '',
    email: '',
    id: 0
}



export const useUsers = () => {

    const [users, dispatch] = useReducer(userReducer, initialUsers)
    const [userSelected, setUserSelected] = useState(initialUserForm)
    const [visible, setVisible] = useState(false)

    const handlerAddUser = (user) => {

        dispatch({
            type: (user.id === 0) ? 'ADD_USER' : 'UPDATE_USER',
            payload: user
        })

        Swal.fire({
            title: (user.id === 0) ? "Usuario Creado" : "Usuario Actualizado",
            text: (user.id === 0) ? "El usuario se ha creado correctamente" : "El usuario se ha actualizado correctamente",
            icon: "success",
            background: "#3a3838",
            color: "#fff"
        });
        
        handlerCloseForm()

    }

    const handlerDeleteUser = (id) => {

        Swal.fire({
            title: "Estas seguro que quieres eliminar el usuario?",
            text: "El usuario se eliminara de forma definitiva",
            icon: "warning",
            background: "#3a3838",
            color: "#fff",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({ type: 'DELETE_USER', payload: id });
                Swal.fire({
                    title: "Eliminado!",
                    text: "El usuario ha sido eliminado con exito.",
                    icon: "success",
                    background: "#3a3838",
                    color: "#fff"
                });
            }
        });
    }

    const handlerUpdateUser = (user) => {
        console.log(user)
        setUserSelected({ ...user })
        setVisible(true)
    }

    const handlerOpenForm = () => {
        setVisible(true)
    }

    const handlerCloseForm = () => {
        setVisible(false)
        setUserSelected(initialUserForm)
    }


    return {
        users,
        userSelected,
        initialUserForm,
        visible,
        handlerAddUser,
        handlerDeleteUser,
        handlerUpdateUser,
        handlerOpenForm,
        handlerCloseForm
    }
}