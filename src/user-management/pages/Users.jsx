import { UserForm } from "./UserForm"
import { UserList } from "./UserList"
import '../styles/userpage.css'
import { useUsers } from "../hooks/useUsers"
import { useContext, useEffect } from "react"
import { FormContext } from "../../context/FormContext"
import { useParams } from "react-router-dom"
import { Paginator } from "./Paginator"


export const Users = () => {

  const { users, getUsers } = useContext(FormContext)
  const { page } = useParams()
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
    getUsers(page)
    
  }, [page])




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
          {visible ||
            <button
              className="boton-guardar-userpage"
              onClick={handlerOpenForm}
            >
              Nuevo Usuario
            </button>}
        </div>
        <div>
          {users.length === 0 ? <p>No hay usuarios en el sistema</p> :
            <>
              <UserList
                users={users}
                handlerDeleteUser={handlerDeleteUser}
                handlerUpdateUser={handlerUpdateUser}/>
            <Paginator paginator={users}/>
            </>
          }
        </div>
      </div>
    </div>
  )
}
