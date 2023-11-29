import { useState, useEffect } from "react";
import { Ejercicio } from './Ejercicio';

function Block({
  ejercicios,
  handleInputChange,
  handleClick,
  title,
  onTitleChange,
  desc,
  onDescChange
}) {
  // Estado local para retener los valores de rep y mov
  const [ejercicioValues, setEjercicioValues] = useState([]);

  // Cargar valores iniciales al montar el componente
  useEffect(() => {
    const initialValues = ejercicios.map(() => ({ rep: "", mov: "" }));
    setEjercicioValues(initialValues);
  }, [ejercicios]);

  // Manejador de cambio para los inputs de Ejercicio
  const handleEjercicioChange = (e, index) => {
    const { name, value } = e.target;
    const newValues = [...ejercicioValues];
    newValues[index] = { ...newValues[index], [name]: value };
    setEjercicioValues(newValues);
    handleInputChange(e, index);
  };

  return (
    <>
      <div className='head-form'>
        <input
          type="text"
          value={title}
          onChange={onTitleChange}
          placeholder="Título"
        />
        <input
          type="text"
          value={desc}
          onChange={onDescChange}
          placeholder="Descripcion"
        />
      </div>
      <form>
        
      {ejercicios.map((ej, index) => {
  const values = ej || { rep: "", mov: "" };
  return (
    <div key={ej.id}>
      <Ejercicio
        handleInputChange={(e) => handleEjercicioChange(e, index)}
        values={values}
      />
    </div>
  );
})}
        <button className='boton' type='button' onClick={handleClick}>+</button>
      </form>
    </>
  );
}

export default Block
