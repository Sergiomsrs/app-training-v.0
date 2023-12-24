import { useReducer, useState } from "react"
import { UserForm } from "./UserForm"
import { UserList } from "./UserList"
import { userReducer } from "../reducers/usersReducer"
import '../styles/userpage.css'

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

export const Users = () => {

  const [users, dispatch] = useReducer(userReducer, initialUsers)
  const [userSelected, setUserSelected] = useState(initialUserForm)

  const handlerAddUser = (user) => {

    let type;

    if (user.id === 0) {
      type = 'ADD_USER'
    } else {
      type = 'UPDATE_USER'
    }

    dispatch({ type: type, payload: user })
  }

  const handlerDeleteUser = (id) => {
    dispatch({ type: 'DELETE_USER', payload: id });
  }

  const handlerUpdateUser = (user) => {
    console.log(user)
    setUserSelected({ ...user })
    // dispatch({type: 'UPDATE_USER', payload: user});
  }


  return (
    <div className="componente-user-page">
      <h2>Users Manager</h2>
      <div className="contenedor-user-page">
        <div>
          <UserForm
            handlerAddUser={handlerAddUser}
            initialUserForm={initialUserForm}
            userSelected={userSelected}
          />
        </div>
        <div>

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
