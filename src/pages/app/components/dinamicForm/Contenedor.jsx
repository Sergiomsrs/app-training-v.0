/* eslint-disable react/prop-types */



import Block from "./Block"
import './dinamic.css'
import { useDimanicForm } from "./Hooks/useDinamicForm";
//import { movimientosPermitidos } from "../data/mov";


export const Contenedor = () => {

  const {
    apps,
    enviarDatos,
        handleInputChange,
        handleResetForm,
        handleClick,
        handleAddApp,
        handleDeleteRow,
        handleDeleteBlock,
        handleHeaderChange

  } = useDimanicForm();



    return (
      <form className="contenerdor-form">
        {apps.map((app) => (
          <div className="contenedor-block" key={app.id}>
            <button className='boton boton-eliminar-block' type='button' onClick={()=>handleDeleteBlock(app.id)}>-</button>
            <Block ejercicios={app.ejercicios} 
            handleInputChange={(e, index) => handleInputChange(e, app.id, index)} 
            handleClick={() => handleClick(app.id)} 
            handleDeleteRow={(index) => handleDeleteRow(app.id, index)}
            title={app.title} 
            desc={app.desc} 
            handleTipoChange={(e) => handleTipoChange(e, app.id)}
            tipo={app.tipo}
            handleHeaderChange={(e) => handleHeaderChange(e, app.id)}
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
