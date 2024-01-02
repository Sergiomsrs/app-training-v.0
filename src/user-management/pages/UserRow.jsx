import '../styles/userpage.css'

export const UserRow = ({ user, handlerDeleteUser, handlerUpdateUser }) => {




    return (

        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td><button
                className='user-table-updatebutton'
                onClick={() => handlerUpdateUser(
                    {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        admin: user.admin
                    }
                )}>update</button></td>
            <td><button 
            className='user-table-deletebutton'
            onClick={() => handlerDeleteUser(user.id)}>remove</button></td>
        </tr>


    )
}
