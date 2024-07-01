import { useState } from "react"
import { FormContext } from "./FormContext"
import { useUsers } from "../user-management/hooks/useUsers";

export const FormProvider = ({ children }) => {
  

  const [rev, setRev] = useState([])
  const [apps, setApps] = useState([{ ejercicios: [], id: 1, title: "", desc: "", tipo:"" }]);
  const [selector, setSelector] = useState(1)
  const [selectorClassCrear, setSelectorClassCrear] = useState('white')
  const [selectorClassRevisar, setSelectorClassRevisar] = useState('blue')
  const [selectorClassDiario, setSelectorClassDiario] = useState('blue')
  const [userData, setUserData] = useState(null);
  const [idEdit, setIdEdit] = useState(null);
  const [selectedList, setSelectedList] = useState([])
  const {users, getUsers} = useUsers()

  return (
    <FormContext.Provider value={{
      rev, setRev, apps, setApps, selector, setSelector,
      selectorClassCrear, setSelectorClassCrear, selectorClassRevisar, setSelectorClassRevisar,
      selectorClassDiario, setSelectorClassDiario, userData, setUserData, idEdit, setIdEdit,
      selectedList, setSelectedList, users, getUsers

    }}>
      {children}
    </FormContext.Provider>
  )
}
