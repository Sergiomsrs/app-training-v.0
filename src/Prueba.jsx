/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from "react";
import WodCard from './WodCard';

export const Prueba = () => {

  const [userData, setUserData] = useState([]);
  const [id, setid] = useState(1)
  const [selectedId, setSelectedId] = useState(1) 
 


  useEffect(function () {
    fetch('src/data.json')
      .then(res => res.json())
      .then(response => {
        setUserData(response)
      })

  }, []);

  const wodFilter = userData.filter( wod => wod.id == selectedId)

  const onImputChange = (e) => {


    const {value } = e.target
    setid(value)
  }
  
  const onClick = () =>{
    setSelectedId(id)
  }
  
  console.log(selectedId)

  return (

    <div className="container1">

      <>
        <section className='wodcard-container'>

          <input type="text" name="id" onChange={onImputChange} />
          <button onClick={onClick}>Click</button>

          {
            wodFilter.map(wod =>{
              return(
                <WodCard
                key={wod.id}
                partea={wod.parte1.t1}
                parteb={wod.parte2.p2}
                partec={wod.parte3.p3}
                parted={wod.parte4.p4}
              ></WodCard>

              )
            })
          }
  
  
        </section>
      </>



    </div>



  )
}
