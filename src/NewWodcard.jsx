/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './css/WodCard.css'


export function NewWodCard() {

  const [userData, setUserData] = useState([]);

  useEffect(function () {
    fetch('http://localhost:8080/list/1')
      .then(res => res.json())
      .then(response => {
        setUserData(response)
      })
      console.log(userData)

  }, []);


    

  return (
    <>
      <section className='wodcard-container'>
        <article className='card'>
          <div className='pru'>
            {userData?.bloques?.map(bloque => (
              <div key={bloque.id}>
                <p className='wodcard-dia'>{bloque.title}</p>
                {bloque.desc ? <p className='tit'>{bloque.desc}</p> : ''}
                {bloque.ejercicios ? (
                  <>
                    {bloque.ejercicios.map(ej => (
                      <div className='row-card' key={ej.id}>
                        <p>{ej.rep}</p>
                        <p>{ej.mov}</p>
                      </div>
                    ))}
                  </>
                ) : ''}
              </div>
            ))}
          </div>

          <footer className='botones-card'>
            <button className='botonCard-borrar'>Borrar</button>
            <button className='botonCard-actualizar'>Enviar</button>
          </footer>
        </article>
      </section>
    </>
  )
}


