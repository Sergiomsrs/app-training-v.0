import { useState } from "react"
import { useAuth } from "../auth/hooks/useAuth"
import { FormContext } from "./FormContext"

export const FormProvider = ({ children }) => {

  const { login, handlerLogin, handlerLogout } = useAuth()
  const [rev, setRev] = useState([])
  const [apps, setApps] = useState([{ ejercicios: [], id: 1, title: "", desc: "" }]);

  return (
    <FormContext.Provider value={{
      login, handlerLogin, handlerLogout, rev, setRev, apps, setApps

    }}>
      {children}
    </FormContext.Provider>
  )
}
