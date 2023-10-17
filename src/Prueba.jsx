/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from "react";
import WodCard from './WodCard';

export const Prueba = () => {

  const [userData, setUserData] = useState([]);
  const [wod, setWod] = useState({
    "id": '',
    "parte1": {
      "t1": "",
      "p1": ""
    },
    "parte2": {
      "t2": "",
      "p2": "",
    },
    "parte3": {
      "t3": "",
      "p3": "",
    },
    "parte4": {
      "t4": "",
      "p4": "",
    }
  });


  useEffect(function () {
    fetch('src/data.json')
      .then(res => res.json())
      .then(response => {
        setUserData(response)
      })

  }, []);


  useEffect(() => {
    const wods = userData.find(e => e.id == 2)
    const { id, parte1, parte2, parte3, parte4 } = wod

    console.log(id)






  }, [userData]);

  console.log(wod)



  return (

    <div className="container1">


      <>
        <section className='wodcard-container'>
  

            <WodCard
              partea={'parte1'}
              parteb={'parte2'}
              partec={'parte3'}
              parted={'parte4'}
            ></WodCard>
  
        </section>
      </>



    </div>



  )
}
