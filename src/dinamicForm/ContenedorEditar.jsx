
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { ultimoID } from "../funcion";
import Block from "./Block"
import './dinamic.css'


export const ContenedorEditar = () => {

  const {apps, setApps , idEdit} = useContext(FormContext)


  const enviarDatos= async () => {

    try {
      // Espera a que se resuelva la promesa antes de continuar
      const id = await ultimoID();
      fetch('http://localhost:8080/list', {
        method: 'POST', // Puedes usar GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json', // Especifica el tipo de contenido que estás enviando
        },
        body: JSON.stringify({
          id: id + 1,
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

    return (
      <div className="contenerdor-form">
        {apps.map((app) => (
          <div className="contenedor-block" key={app.id}>
            <Block ejercicios={app.ejercicios} 
            handleInputChange={(e, index) => handleInputChange(e, app.id, index)} 
            handleClick={() => handleClick(app.id)} 
            onTitleChange={(e) => handleTitleChange(e, app.id)}
            onDescChange={(e) => handleDescChange(e, app.id)}
            title={app.title} 
            desc={app.desc} 
            />
          </div>
        ))}
  
        <div>
          <button className='boton' type='button' onClick={handleAddApp}>Añadir Bloque</button>
          <button className='boton' type='button' onClick={enviarDatos}>Enviar</button>
        </div>
        <h1>{idEdit}</h1>
      </div>
    );
}
