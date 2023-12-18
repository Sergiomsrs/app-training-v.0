/* eslint-disable react/prop-types */

import { useContext, useEffect } from 'react';
import './css/WodCardScaled.css'
import { NewWodCard } from './NewWodcard';
import { FormContext } from './context/FormContext';
import { NewWodCardScaled } from './componentes/NewWodcardScaled';

export const WodList = () => {

  const { userData, setUserData, selectedList } = useContext(FormContext)

  


  useEffect(() => {
    fetch('http://localhost:8080/list/listar')

      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error:', error));
  }, [userData]);



  const handleDelete = (idToDelete) => {
    // Realizar la solicitud de eliminación al servidor
    fetch(`http://localhost:8080/list/eliminar/${idToDelete}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Actualizar el estado userData eliminando el elemento con idToDelete
        setUserData(prevUserData => prevUserData.filter(item => item.id !== idToDelete));
      })
      .catch(error => console.error('Error al borrar:', error));
  };




  return (
    <>

      <div className='selected-wod'>

          <h1 className='h1-selected-title'>Wod Seleccionados</h1>
          <div>

        <div className='selected-list-container'>
          {userData &&
            userData
            .filter(item => selectedList.includes(item.id))
            .map(item => (
              <NewWodCardScaled
              key={item.id}
              data={item}
              handleDelete={handleDelete}
              />
              ))}
        </div>
              </div>
      </div>

      <div className="container1">
        {userData && (
          userData.map(item => (
            <NewWodCard
              key={item.id}
              data={item}
              handleDelete={handleDelete}
            />
          ))
        )}
      </div>

    </>


  )
}
