import { useState } from "react"
import Block from "./Block"
import './dinamic.css'


export const Contenedor = () => {
    const [apps, setApps] = useState([{ ejercicios: [], id: 1, title: "", desc: "" }]);
    
    
  
  
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

    const handleGuardar = () => {
        console.log(apps);
        
       
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
          <button className='boton' type='button' onClick={handleGuardar}>Guardar</button>
        </div>
      </div>
    );
}
