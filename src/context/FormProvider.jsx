import { useState } from "react"
import { useAuth } from "../auth/hooks/useAuth"
import { FormContext } from "./FormContext"

export const FormProvider = ({ children }) => {

  const { login, handlerLogin, handlerLogout } = useAuth()
  const [rev, setRev] = useState([])
  const [apps, setApps] = useState([{ ejercicios: [], id: 1, title: "", desc: "" }]);
  const [selector, setSelector] = useState(1)
  const [selectorClassCrear, setSelectorClassCrear] = useState('white')
  const [selectorClassRevisar, setSelectorClassRevisar] = useState('blue')
  const [selectorClassDiario, setSelectorClassDiario] = useState('blue')
  const [userData, setUserData] = useState(null);
  const [idEdit, setIdEdit] = useState(null);

  return (
    <FormContext.Provider value={{
      login, handlerLogin, handlerLogout, rev, setRev, apps, setApps,selector, setSelector,
      selectorClassCrear, setSelectorClassCrear, selectorClassRevisar, setSelectorClassRevisar,
      selectorClassDiario, setSelectorClassDiario,userData, setUserData,idEdit, setIdEdit

    }}>
      {children}
    </FormContext.Provider>
  )
}
