import { UserRow } from "./UserRow"
import '../styles/userpage.css'
import { Paginator } from "./Paginator"
import { useContext, useEffect } from "react"
import { FormContext } from "../../context/FormContext"
import { useParams } from "react-router-dom"
export const UserList = ({ handlerDeleteUser, handlerUpdateUser }) => {
    const { users , getUsers} = useContext(FormContext)
    const { page } = useParams()
    

    useEffect(() => {
        getUsers(page)
        
      }, [page])




    return (
        <>
            {users.length === 0 ? <p>No hay usuarios en el sistema</p> :
                <>
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
                            {users.content.map((user) => (
                                <UserRow key={user.id}
                                    user={user}
                                    handlerDeleteUser={handlerDeleteUser}
                                    handlerUpdateUser={handlerUpdateUser}
                                />
                            ))}
                        </tbody>


                    </table>
                    <Paginator paginator={users} />
                </>}
        </>
    )
}
