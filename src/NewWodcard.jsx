/* eslint-disable react/prop-types */

import './css/WodCard.css'


export function NewWodCard({data, handleDelete, }) {
  const { bloques, id } = data; 

  const handleDeleteClick = () => {
    if (window.confirm('¿Estás seguro de que deseas borrar este WOD?')) {
      handleDelete(id);
    }
  };



  return (
    <>
      <section className='wodcard-container'>
        <article className='card'>
          <div className='pru'>
            {bloques?.map(bloque => (
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
            <button onClick={handleDeleteClick} className='botonCard-borrar'>Borrar</button>
            <button className='botonCard-actualizar'>Enviar</button>
          </footer>
        </article>
      </section>
    </>
  )
}


