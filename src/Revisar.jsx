
import { useContext } from "react";
import { FormContext } from "./context/FormContext";
import { RevisarCard } from "./RevisarCard";

// traer la logica desde newWodCard
export const Revisar = () => {
  const {apps} = useContext(FormContext)


  return (

    <div className="container1">
      <section className='wodcard-container'>

      <RevisarCard
        key={apps.id}
      data={{id: "", bloques: apps}}     
      />

      </section>
    </div>
  )
}