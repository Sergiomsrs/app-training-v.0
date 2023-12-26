

import { Route, Routes } from "react-router"
import { UserRoutes } from "../routes/UserRoutes"

export const UsersApp = ({handlerLogout, login}) => {


    return (
        <Routes>
            <Route path="/*" element={
            <UserRoutes 
            login={login} 
            handlerLogout={handlerLogout} 
            />} />
        </Routes>
    )
}
