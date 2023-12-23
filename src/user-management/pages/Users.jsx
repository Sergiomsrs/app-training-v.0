import { UserForm } from "./UserForm"
import { UserList } from "./UserList"

const initialUsers = [
  {
    id: 1,
    name: 'John',
    password: '1234',
    email:'Jhon@email.com'
  }]

export const Users = () => {

  const handlerAddUser = (user) => {
    console.log(user);
  }


  return (
    <div >
      <h2>Users Manager</h2>
      <div>
        <div>
          <UserForm handlerAddUser={handlerAddUser} />
        </div>
        <div>
          <UserList users={initialUsers}/>
        </div>
      </div>
    </div>
  )
}
