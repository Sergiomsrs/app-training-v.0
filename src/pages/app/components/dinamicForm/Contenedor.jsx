/* eslint-disable react/prop-types */


import { useContext } from "react";
import { FormContext } from "../../../../context/FormContext";
import Block from "./Block"
import './dinamic.css'
//import { movimientosPermitidos } from "../data/mov";


export const Contenedor = () => {

  const {apps, setApps} = useContext(FormContext)

 /* const validarMov = () =>{
    const movimientosNoCoinciden = apps.map((item, index) => {
      const ejerciciosConMovIncorrecto = item.ejercicios.filter(ejercicio => !movimientosPermitidos.includes(ejercicio.mov));
      const movimientosIncorrectos = ejerciciosConMovIncorrecto.map(ejercicio => ejercicio.mov);
      return movimientosIncorrectos.length > 0 ? { index, movimientos: movimientosIncorrectos } : null;
    }).filter(resultado => resultado !== null);
    return movimientosNoCoinciden;
  }
*/

  const enviarDatos= async () => {

    //const movimientosNoCoinciden = validarMov();

    //if (movimientosNoCoinciden.length === 0) {


    if (window.confirm('¿Estás seguro de que deseas enviar este WOD?')) {
      
      try {
        // Espera a que se resuelva la promesa antes de continuar
        fetch('http://localhost:8080/list', {
        method: 'POST', // Puedes usar GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json', // Especifica el tipo de contenido que estás enviando
        },
        body: JSON.stringify({
          bloques: apps,
        }) // El contenido a enviar, transformado a JSON
        
      })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Aquí puedes manejar la respuesta de la API
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
    } catch (error) {
      console.error('Error obteniendo el último ID:', error);
      // Manejar el error según sea necesario
    }
    setApps([{ ejercicios: [], id: 1, title: "", desc: "" }]);
  }
//} else {
  //const movimientosIncorrectos = movimientosNoCoinciden.map(item => item.movimientos.join(', ')).join(', ');
    //alert(`Hay movimientos incorrectos en el cuestionario: ${movimientosIncorrectos}. Por favor, revisa las respuestas.`);
//}



}
    
    
    const handleInputChange = (e, appId, index) => {
      
      const { name, value } = e.target;
      const newApps = [...apps];
      const appIndex = newApps.findIndex(app => app.id === appId);
      newApps[appIndex].ejercicios[index] = {
        ...newApps[appIndex].ejercicios[index],
        [name]: value,
      };
        setApps(newApps);

    };

    const handleResetForm = () => {
      setApps([{ ejercicios: [], id: 1, title: "", desc: "" }])
    }
  
    const handleClick = (appId) => {
      const newApps = [...apps];
      const appIndex = newApps.findIndex(app => app.id === appId);
      newApps[appIndex].ejercicios.push({ id: newApps[appIndex].ejercicios.length + 1});
      setApps(newApps);
    };
  
    const handleAddApp = () => {
      const newId = Math.max(...apps.map(app => app.id)) + 1;
      setApps([...apps, { ejercicios: [], id: newId, title: "", desc: "" }]);
    };


      const handleTitleChange = (e, appId) => {
        const { value } = e.target;
        const newApps = [...apps];
        const appIndex = newApps.findIndex((app) => app.id === appId);
        newApps[appIndex].title = value;
        setApps(newApps);
      };

      const handleDescChange = (e, appId) => {
        const { value } = e.target;
        const newApps = [...apps];
        const appIndex = newApps.findIndex((app) => app.id === appId);
        newApps[appIndex].desc = value;
        setApps(newApps);
      };

      const handleDeleteRow = (appId, index) => {
        const newApps = [...apps];
        const BlockIndex = newApps.findIndex(app => app.id === appId);
        newApps[BlockIndex].ejercicios.splice(index, 1);
        setApps(newApps);
      };

      const handleDeleteBlock = (appId) => {
        const newApps = [...apps];
        const BlockIndex = newApps.findIndex(app => app.id === appId);
        newApps.splice(BlockIndex, 1);
        setApps(newApps);

      }

    return (
      <form className="contenerdor-form">
        {apps.map((app) => (
          <div className="contenedor-block" key={app.id}>
            <button className='boton boton-eliminar-block' type='button' onClick={()=>handleDeleteBlock(app.id)}>-</button>
            <Block ejercicios={app.ejercicios} 
            handleInputChange={(e, index) => handleInputChange(e, app.id, index)} 
            handleClick={() => handleClick(app.id)} 
            handleDeleteRow={(index) => handleDeleteRow(app.id, index)}
            onTitleChange={(e) => handleTitleChange(e, app.id)}
            onDescChange={(e) => handleDescChange(e, app.id)}
            title={app.title} 
            desc={app.desc} 
            />
          </div>
        ))}
  
        <div className="botones-footer-form">
          <button className='boton' type='button' onClick={handleAddApp}>Add Block</button>
          <button className='boton' type='button' onClick={handleResetForm}>Reset</button>
          <button className='boton' type='button' onClick={enviarDatos}>Enviar</button>
        </div>
      </form>
    );
}
