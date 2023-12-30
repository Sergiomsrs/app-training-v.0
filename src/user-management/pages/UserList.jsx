import { UserRow } from "./UserRow"
import '../styles/userpage.css'

export const UserList = ({handlerDeleteUser, users, handlerUpdateUser}) => {



  return (

    <table className="user-table">
        <thead className="table-head">
            <tr>
            <th className="table-header">Id</th>
            <th className="table-header">Name</th>
            <th className="table-header">Email</th>
            <th className="table-header">update</th>
            <th className="table-header">remove</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <UserRow key={user.id}
                user={user} 
                handlerDeleteUser={handlerDeleteUser}
                handlerUpdateUser={handlerUpdateUser}
                />
            ))}
        </tbody>

    </table>
  
    )
}
