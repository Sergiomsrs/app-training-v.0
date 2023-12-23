import { UserRow } from "./UserRow"

export const UserList = ({users}) => {
  return (

    <table>
        <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>update</th>
            <th>remove</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <UserRow key={user.id} user={user} />
            ))}
        </tbody>

    </table>
  
    )
}
