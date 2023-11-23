/* eslint-disable react/prop-types */

import './css/WodCard.css'


export function NewWodCard({data, handleDelete, }) {



  return (
    <>
      <section className='wodcard-container'>
        <article className='card'>
          <div className='pru'>
            {data?.bloques?.map(bloque => (
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
            <button onClick={handleDelete} className='botonCard-borrar'>Borrar</button>
            <button className='botonCard-actualizar'>Enviar</button>
          </footer>
        </article>
      </section>
    </>
  )
}


