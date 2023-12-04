import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import '../css/WodCardScaled.css'
import { FormContext } from '../context/FormContext';

export function NewWodCardScaled({data, handleDelete}) {
  
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
      <section className='wodcard-container-scaled'>
        <article onClick={handleSelectedCard} className={!selected? 'card-scaled':'cardSelected-scaled'}>
          <div className='pru-scaled'>
            {bloques?.map(bloque => (
              <div key={bloque.id}>
                <p className='wodcard-dia-scaled'>{bloque.title}</p>
                {bloque.desc ? <p className='tit-scaled'>{bloque.desc}</p> : ''}
                {bloque.ejercicios ? (
                  <>
                    {bloque.ejercicios.map(ej => (
                      <div className='row-card-scaled' key={ej.id}>
                        <p>{ej.rep}</p>
                        <p>{ej.mov}</p>
                      </div>
                    ))}
                  </>
                ) : ''}
              </div>
            ))}
          </div>

         
        </article>
      </section>
    </>
  )
}


