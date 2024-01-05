import { UserForm } from "./UserForm"
import { UserList } from "./UserList"
import '../styles/userpage.css'
import { useUsers } from "../hooks/useUsers"


export const Users = () => {

  
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
            <>
              <UserList
                handlerDeleteUser={handlerDeleteUser}
                handlerUpdateUser={handlerUpdateUser}/>
            </>
        </div>
      </div>
    </div>
  )
}
