/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import WodCard from './WodCard';

export const WodList = () => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('src/data/datosCompleto.json')
            // fetch('http://localhost:8080/api/entrenamientos')
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleDelete = (id) => {
        setUserData((prevUserData) => {
            return prevUserData.filter((user) => user.id !== id);
        });
    };

    return (

        <div className="container1">
            {userData && (

                userData.map(({ parte1, parte2, parte3, parte4, id }) => (
                    <WodCard
                        key={id}
                        partea={parte1}
                        parteb={parte2}
                        partec={parte3}
                        parted={parte4}
                        handleDelete={()=>handleDelete(id)}
                        userData={userData}
                    ></WodCard>
                )

                )

            )}
        </div>



    )
}
