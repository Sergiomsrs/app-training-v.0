/* eslint-disable react/prop-types */
import './WodCard.css'


export function NewWodCard({ data }) {


  return (
    <>
      <section className='wodcard-container'>
        <article className='card'>
          
          <div className='pru'>
            {
              data.map(bloque => (
                <div key={bloque.id}>
                  <p className='wodcard-dia'>{bloque.title}</p>
                  {bloque.desc ?
                    <>
                      <p className='tit'>{bloque.desc}</p>
                    </> : ''
                    }
                    {
              bloque.ejercicios ?
                <>
                  {
                    bloque.ejercicios.map(ej => (
                      <div className='row-card' key={ej.id}>
                        <p>{ej.mov}</p>
                        <p>{ej.rep}</p>
                      </div>
                    ))
                  }
                </> : ''}
                </div>
              ))
            }
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


