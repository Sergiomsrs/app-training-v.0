/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';

import { NewWodCard } from './NewWodcard';

export const WodList = () => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/list/listar')
           
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error('Error:', error));
    }, []);



    return (

        <div className="container1">
      {userData && (
        userData.map(item => (
          <NewWodCard
            key={item.id}
            data={item}  
          />
        ))
      )}
    </div>



    )
}
