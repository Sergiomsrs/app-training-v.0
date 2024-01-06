import { useState, useEffect } from 'react';
import '../css/wodselectedlist.css';
import { NewWodCard } from '../NewWodcard';
import { buscarMov, movList } from '../funcion';

export const WodSelectedList = () => {
  const [userData, setUserData] = useState([]);
  const [answer, setAnswer] = useState('');
  const [answerDef, setAnswerDef] = useState('');
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [dataSts, setDataSts] = useState({
    numeroRegistros: '',
  });


  const ejerciciosFiltrados = dataSts?.movimientos
    ?.filter(ejercicio => ejercicio !== null)
    .sort();

  useEffect(() => {
    fetchDataMov();
    setSearchAttempted(false);
  }, [answerDef]); // Llamada a fetchDataMov al montar el componente

  const fetchDataMov = async () => {
    try {
      const datarm = await movList();
      setDataSts({
        movimientos: datarm,
      });
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  const fetchData = async () => {
    try {
      const data = await buscarMov(answer);
      setUserData(data);
      setSearchAttempted(true);
    } catch (error) {
      fetchDataMov();
      console.error('Error al buscar datos:', error);
      setSearchAttempted(true);
    }
  };

  const handleDelete = (idToDelete) => {
    fetch(`http://localhost:8080/list/eliminar/${idToDelete}`, {
      method: 'DELETE',
    })
      .then(() => {
        setUserData((prevUserData) =>
          prevUserData.filter((item) => item.id !== idToDelete)
        );
      })
      .catch((error) => console.error('Error al borrar:', error));
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
    setAnswerDef(answer);
    console.log(answer);
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  const handleTextareaKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <section className='wod-selected-list'>
      <form className='wsl-form' onSubmit={handleSubmit}>
        <input
          className='wsl-form-textarea'
          value={answer}
          onChange={handleTextareaChange}
          onKeyPress={handleTextareaKeyPress}
        />
        <br />
        <button
          className='wsl-form-button'
          disabled={answer.length === 0}
        >
          Enviar
        </button>
      </form>

      <div className='wsl-card'>
        {searchAttempted ? (
          answerDef && userData && userData.length > 0 ? (
            userData.map((item) => (
              <div key={item.id}>
                <NewWodCard
                  data={item}
                  handleDelete={handleDelete}
                />
                
              </div>
            ))
          ) : (
            <>
            <div className='no-result-container'>
              <p className='p-no-result'>No se encontraron resultados</p>
              <p>Prueba con alguno de estos movimientos</p>
            </div>
              {/* Llamar a fetchDataMov y renderizar el resultado */}
              <div className='sts-card-busqueda'>
                <div className='movimientos-container-busqueda'>
                {ejerciciosFiltrados?.map((ejercicio, index) => (
              <div key={index} className='movimiento-item-busqueda'>
                {ejercicio}
              </div>
            ))}
                
                </div>
              </div>
            </>
          )
        ) : null}
      </div>
    </section>
  );
};
