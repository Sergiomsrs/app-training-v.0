/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';
import './css/WodCard.css'
import { FormContext } from './context/FormContext';
import { useContext, useState } from 'react';


export function NewWodCard({data, handleDelete}) {
  
  const { bloques, id } = data; 
  const navigate = useNavigate();
  const {setIdEdit, setApps, selectedList, setSelectedList} = useContext(FormContext)
  const [selected, setSelected] = useState(false)

  const handleDeleteClick = () => {
    if (window.confirm('¿Estás seguro de que deseas borrar este WOD?')) {
      handleDelete(id);
    }
  };

  const handleUpdateClick = () => {
    setIdEdit(id);
    setApps(bloques);
    navigate('/editar');
  }

  const handleSelectedCard = () => {
    setSelected(!selected);
    if (selected) {
      // Si ya está seleccionado, lo eliminamos de selectedList
      setSelectedList(selectedList.filter(selectedId => selectedId !== id));
    } else {
      // Si no está seleccionado, lo agregamos a selectedList
      setSelectedList([...selectedList, id]);
    }
    console.log(selectedList);
  };



  return (
    <>
      <section className='wodcard-container'>
        <article onClick={handleSelectedCard} className={!selected? 'card':'cardSelected'}>
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


