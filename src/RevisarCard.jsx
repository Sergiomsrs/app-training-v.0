import './css/WodCard.css'
import { useContext } from 'react';
import { FormContext } from './context/FormContext';



export function RevisarCard({data}) {
  
  const { bloques } = data; 
  const {setApps, setSelector, setSelectorClassCrear, setSelectorClassRevisar, setSelectorClassDiario} = useContext(FormContext)
  


  const handleResetClick = () => {
    if (window.confirm('¿Estás seguro de que deseas resetear este WOD?')) {
 
      setApps([{ ejercicios: [], id: 1, title: "", desc: "" }]);
      setSelector(1)
      setSelectorClassCrear('white')
      setSelectorClassRevisar('blue')
      setSelectorClassDiario('blue')
    }
      
  }

  const handleOkClick = () => {
    setSelector(1)
    setSelectorClassCrear('white')
    setSelectorClassRevisar('blue')
    setSelectorClassDiario('blue')

  }



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
            <button onClick={handleResetClick} className='botonCard-borrar'>Reset</button>
            <button onClick={handleOkClick} className='botonCard-actualizar'>Volver</button>
          </footer>
        </article>
      </section>
    </>
  )
}


