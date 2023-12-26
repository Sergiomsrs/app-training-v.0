import { UserForm } from "./UserForm"
import { UserList } from "./UserList"
import '../styles/userpage.css'
import { useUsers } from "../hooks/useUsers"


export const Users = () => {

const {
  users,
  userSelected,
  initialUserForm,
  visible,
  handlerAddUser,
  handlerDeleteUser,
  handlerUpdateUser,
  handlerOpenForm,
  handlerCloseForm
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
