/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { NewWodCard } from "./NewWodcard";
import { ultimoID } from './funcion';




// traer la logica desde newWodCard
export const Revisar = () => {


  const [userData, setUserData] = useState([]);
  const [id, setId] = useState(null);
  const [idReady, setIdReady] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const obtenerId = async () => {
    try {
      const ultimoIDR = await ultimoID();
      setId(ultimoIDR);
      setIdReady(true); // Marcar que el ID está listo
    } catch (error) {
      console.error('Error obteniendo el último ID:', error);
    }
  };

  useEffect(() => {
    obtenerId();
  }, [deleted]);


  useEffect(() => {
    // Asegúrate de tener el ID antes de hacer la solicitud fetch
    if (idReady) {
      fetch(`http://localhost:8080/list/${id}`)
        .then(res => res.json())
        .then(response => {
          setUserData(response);
        })
        .catch(error => console.error('Error:', error));
    }
  }, [idReady, id, deleted]);

  const handleDelete = () => {
    fetch(`http://localhost:8080/list/eliminar/${id}`, {
      method: 'DELETE',
    })
    .then(res => {
      if (res.status === 204) {
        setDeleted(true); // Aquí se establece el estado para forzar el renderizado
        return { success: true };
      } else {
        // Verificar si la respuesta tiene contenido antes de intentar parsear como JSON
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return res.json();
        } else {
          return null; // Otra opción es devolver un objeto vacío o null, según tu lógica
        }
      }
    })
    .then(response => {
      // Aquí puedes manejar la respuesta según tus necesidades
      if (response && response.success) {
        console.log('Eliminación exitosa');
      } else {
        setDeleted(true);
        setIdReady(false);
        console.log('Error o respuesta no exitosa:', response);
      }
      setUserData([]); // Aquí también puedes actualizar el estado según tus necesidades
    })
    .catch(error => {
      console.error('Error:', error);
      // Puedes manejar errores aquí si es necesario
    });
  };


  

  return (

    <div className="container1">
      <section className='wodcard-container'>

      <NewWodCard
      data={userData}
      handleDelete={handleDelete}
      />

     

      </section>
    </div>
  )
}