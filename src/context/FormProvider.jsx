import { FormContext } from "./FormContext"

export const FormProvider = ({children}) => {
  return (
    <FormContext.Provider value={{
        
    }}>
        {children}
    </FormContext.Provider>
  )
}
