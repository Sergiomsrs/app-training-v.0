import { UserForm } from "./UserForm"
import { UserList } from "./UserList"
import '../styles/userpage.css'
import { useUsers } from "../hooks/useUsers"
import { useContext, useEffect } from "react"
import { FormContext } from "../../context/FormContext"


export const Users = () => {

  const {users, getUsers} = useContext(FormContext) 

const {
  userSelected,
  initialUserForm,
  visible,
  errors,
  handlerAddUser,
  handlerDeleteUser,
  handlerUpdateUser,
  handlerOpenForm,
  handlerCloseForm,
} = useUsers()

useEffect(() => {
  getUsers()
}, [])




  return (
    <div className="componente-user-page">
      <h2>Users Manager</h2>
      <div className="contenedor-user-page">
        <div>
          {!visible ||
          <UserForm
            handlerAddUser={handlerAddUser}
            initialUserForm={initialUserForm}
            userSelected={userSelected}
            handlerCloseForm={handlerCloseForm}
            errors={errors}
          />}
        </div>
        <div>
        {visible ||
          <button 
          className="boton-guardar-userpage"
          onClick={handlerOpenForm}
          >
            Nuevo Usuario
          </button>}
          {users.length === 0 ? <p>No hay usuarios en el sistema</p> :
            <UserList
              users={users}
              handlerDeleteUser={handlerDeleteUser}
              handlerUpdateUser={handlerUpdateUser}
            />}
        </div>
      </div>
    </div>
  )
}
