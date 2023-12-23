export const UserRow = ({ user }) => {
    return (

        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><button>update</button></td>
            <td><button>remove</button></td>
        </tr>


    )
}
