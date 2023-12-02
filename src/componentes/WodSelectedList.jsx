import { useState } from 'react';
import '../css/wodselectedlist.css';


import { NewWodCard } from '../NewWodcard';
import { buscarMov } from '../funcion';

export const WodSelectedList = () => {

  const [userData, setUserData] = useState([]);
  const [answer, setAnswer] = useState('');


  const fetchData = async () => {
    try {
      const data = await buscarMov(answer);

      setUserData(data); // Asumo que el nombre de tu función es setDataSts, ajusta si es diferente
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };



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

  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
    console.log(answer);

  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  const handleTextareaKeyPress = (event) => {
    // Verifica si la tecla presionada es "Enter" (código 13)
    if (event.key === 'Enter') {
      event.preventDefault(); // Evita que se inserte una nueva línea en el textarea
      handleSubmit(event); // Llama a la función de envío del formulario
    }
  };


  return (

    <section className='wod-selected-list'>

      <form className='wsl-form' onSubmit={handleSubmit}>
        <input className='wsl-form-textarea'
          value={answer}
          onChange={handleTextareaChange}
          onKeyPress={handleTextareaKeyPress}
        />
        <br />
        <button className='wsl-form-button' disabled={
          answer.length === 0 }>
          Enviar
        </button>
      </form>



      <div className="wsl-card">
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
    </section>
    


  )
}
