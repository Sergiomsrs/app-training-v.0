import { useReducer, useState } from "react"
import Swal from "sweetalert2"
import { userReducer } from "../reducers/usersReducer"
import { findAll, remove, save, update } from "../services/userService"
import { useNavigate } from "react-router-dom"


const initialUsers = []

const initialUserForm = {
    username: '',
    password: '',
    email: '',
    id: 0
}

const initialerrors = {
    username: '',
    password: '',
    email: '',
}



export const useUsers = () => {

    const [users, dispatch] = useReducer(userReducer, initialUsers)
    const [userSelected, setUserSelected] = useState(initialUserForm)
    const [visible, setVisible] = useState(false)
    const [errors, setErrors] = useState(initialerrors)
    
    const navigate = useNavigate();

    const getUsers = async () => {
        const result = await findAll();
        dispatch({ type: 'LOADING_USERS', payload: result.data, })
    }

    const handlerAddUser = async (user) => {

        let response;
        try {

            if (user.id === 0) {
                response = await save(user);
            } else {
                response = await update(user);
            }

            dispatch({
                type: (user.id === 0) ? 'addUser' : 'updateUser',
                payload: response.data,
            });

            Swal.fire(
                (user.id === 0) ?
                    'Usuario Creado' :
                    'Usuario Actualizado',
                (user.id === 0) ?
                    'El usuario ha sido creado con exito!' :
                    'El usuario ha sido actualizado con exito!',
                'success'
            );
            handlerCloseForm();
            navigate('/users');
        } catch (error) {
            if (error.response && error.response.status == 400) {
                setErrors(error.response.data);
            } else if (error.response && error.response.status == 500 &&
                error.response.data?.message?.includes('constraint')) {
            
                if (error.response.data?.message?.includes('UK_username')) {
                    setErrors({username: 'El username ya existe!'})
                }
                if (error.response.data?.message?.includes('UK_email')) {
                    setErrors({email: 'El email ya existe!'})
                }
                
            } else {
                throw error;
            }
        }
        
        
        

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

              remove(id);  

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
        setErrors(initialerrors)
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
        errors,
        handlerAddUser,
        handlerDeleteUser,
        handlerUpdateUser,
        handlerOpenForm,
        handlerCloseForm,
        getUsers
    }
}