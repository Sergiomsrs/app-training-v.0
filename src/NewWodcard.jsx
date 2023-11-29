/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';
import './css/WodCard.css'
import { FormContext } from './context/FormContext';
import { useContext } from 'react';


export function NewWodCard({data, handleDelete, handleUpdate}) {
  
  const { bloques, id } = data; 
  const navigate = useNavigate();
  const {setIdEdit} = useContext(FormContext)

  const handleDeleteClick = () => {
    if (window.confirm('¿Estás seguro de que deseas borrar este WOD?')) {
      handleDelete(id);
    }
  };

  const handleUpdateClick = () => {
    setIdEdit(id);
    handleUpdate(id);
    navigate('/editar');
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
            <button onClick={handleDeleteClick} className='botonCard-borrar'>Borrar</button>
            <button onClick={handleUpdateClick} className='botonCard-actualizar'>Editar</button>
          </footer>
        </article>
      </section>
    </>
  )
}


