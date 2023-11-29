
import { useContext } from "react";
import { NewWodCard } from "./NewWodcard";
import { FormContext } from "./context/FormContext";

// traer la logica desde newWodCard
export const Revisar = () => {
  const {apps} = useContext(FormContext)


  return (

    <div className="container1">
      <section className='wodcard-container'>

      <NewWodCard
      data={{id: "", bloques: apps}}     
      />

      </section>
    </div>
  )
}