/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';

import { NewWodCard } from './NewWodcard';

export const WodList = () => {

    const [userData, setUserData] = useState(null);
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
        .then(response => response.json())
        .then(data => {
          setDeleted(!deleted)
          setUserData(data.filter(item => item.id !== idToDelete));
        })
        .catch(error => console.error('Error al borrar:', error));
        setDeleted(!deleted)
    };


  
    return (

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



    )
}
