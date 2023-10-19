/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import WodCard from './WodCard';

export const Prueba = () => {

  const [userData, setUserData] = useState([]);
  const [selectedId, setSelectedId] = useState(1)



  useEffect(function () {
    fetch('src/data.json')
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

        {wodFilter.map(wod => {
          return (
            <WodCard
              key={wod.id}
              partea={wod.parte1.t1}
              parteb={wod.parte2.p2}
              partec={wod.parte3.p3}
              parted={wod.parte4.p4}
            ></WodCard>)
        })}

      </section>
    </div>
  )
}
