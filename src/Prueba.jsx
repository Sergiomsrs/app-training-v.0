/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { NewWodCard } from "./newWodcard";


export const Prueba = () => {

  const [userData, setUserData] = useState([]);
  const [selectedId, setSelectedId] = useState(1)



  useEffect(function () {
    fetch('src/newData.json')
      .then(res => res.json())
      .then(response => {
        setUserData(response)
      })

  }, []);

  const wodFilter = userData.filter(wod => wod.id == selectedId)

  const handleSeleccion = (event) => {
    setSelectedId(event.target.value);
  }


  return (

    <div className="container1">
      <section className='wodcard-container'>

        <select onChange={handleSeleccion}>
          {userData.map(
            user => <option key={user.id} value={user.id}>{user.id}</option>
          )}

        </select>

        {userData.map(wod => {
          return (
            <NewWodCard
              key={wod.id}
              data={wod.data}
            
            />
          )
        })}

      </section>
    </div>
  )
}
