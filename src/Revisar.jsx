/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { NewWodCard } from "./newWodcard";


export const Revisar = () => {

  const [userData, setUserData] = useState([]);

  useEffect(function () {
    fetch('src/data/newData.json')
      .then(res => res.json())
      .then(response => {
        setUserData(response)
      })

  }, []);


  return (

    <div className="container1">
      <section className='wodcard-container'>

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
