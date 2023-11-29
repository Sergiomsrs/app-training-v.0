/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from 'react';

import { NewWodCard } from './NewWodcard';
import { FormContext } from './context/FormContext';

export const WodList = () => {
  
  const {userData, setUserData} = useContext(FormContext)
    
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/list/listar')
           
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error('Error:', error));
    }, [deleted]);

    const handleDelete = (idToDelete) => {
      // Realizar la solicitud de eliminación al servidor
      fetch(`http://localhost:8080/list/eliminar/${idToDelete}`, {
        method: 'DELETE',
      })
        .then(
          setDeleted(prev => !prev)
          
        )
        .catch(error => console.error('Error al borrar:', error));
    };

    const handleUpdate = (idToUpdate) => {
      // Realizar la solicitud de eliminación al servidor
      alert("el id a actualizar es " + idToUpdate);
    };


  
    return (

        <div className="container1">
      {userData && (
        userData.map(item => (
          <NewWodCard
            key={item.id}
            data={item}  
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))
      )}
    </div>



    )
}
