/* eslint-disable react/prop-types */


import { useContext } from "react";

import '../pages/app/components/dinamicForm/dinamic.css'
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import Block from "./app/components/dinamicForm/Block";


export const ContenedorEditar = () => {

  const { apps, setApps, idEdit, setSelector } = useContext(FormContext)
  const navigate = useNavigate();

  const enviarDatos = () => {

    try {

      fetch('http://localhost:8080/list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: idEdit,
          bloques: apps,
        })

      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });

    } catch (error) {
      console.error('Error obteniendo el último ID:', error);
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
    newApps[appIndex].ejercicios.push({ id: newApps[appIndex].ejercicios.length + 1 });
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

  const handleSendClick = () => {
    if (window.confirm('¿Estás seguro de que deseas enviar este WOD?')) {
      enviarDatos();
      setApps([{ ejercicios: [], id: 1, title: "", desc: "" }]);
      setSelector(3);
      navigate('/app')
    }
  }
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
    <div className="contenerdor-form-edit">

      <div className="form-edit">
        {apps.map((app) => (
          <div className="contenedor-block" key={app.id}>
            <button className='boton boton-eliminar-block' type='button' onClick={() => handleDeleteBlock(app.id)}>-</button>
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

        <div className="form-edit-buton">
          <button className='boton' type='button' onClick={handleAddApp}>Add Block</button>
          <button className='boton' type='button' onClick={handleSendClick}>Enviar</button>
        </div>
      </div>
    </div>

  );
}
