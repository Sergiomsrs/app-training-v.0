import { useState } from 'react'
import './App.css'

function App() {

  const [final, setFinal] = useState({})
  const [sesion, setSesion] = useState({
    sesionDia:'',
    tituloP1:'', 
    p1:'',
    tituloP2:'', 
    p2:'',
    tituloP3:'', 
    p3:'',
    tituloP4:'', 
    p4:'',
  });


const onImputChange = (e) =>{


  const { name, value } = e.target
  setSesion({
        ...sesion,
        [name]: value,
    })
}

const handleClick = ()=>{

}


function enviarDatos() {
  const data = {
    parte1: `${sesion.tituloP1}\n${sesion.p1}`,
    parte2: `${sesion.tituloP2}\n${sesion.p2}`,
    parte3: `${sesion.tituloP3}\n${sesion.p3}`,
    parte4: `${sesion.tituloP4}\n${sesion.p4}`,
  };

  


  

  fetch('http://localhost:8080/api/entrenamiento/guardar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}



  return (
    <div className='app'>

      <div className="contenedor-cabecera">
        <div className="titulos">
          <h1>Training App</h1>
          <h2>Diseña aqui tus entrenamientos</h2>
        </div>
        <div className="selectores">
          <div className="selector" onClick={enviarDatos}>Crear</div>
          <div className="selector">Revisar</div>
          <div className="selector">Diario</div>
        </div>
      </div>

      <div className="contenerdor-componente">
        <div className="componente">

        <form  name='dia' className='formulario'>
          <input type="text" name="dia" id="dia" placeholder='Sesion-Dia'  onChange={onImputChange}/>

          <div name='parte1'>
            <input type="text" name="tituloP1" id="tituloP1" placeholder='Titulo-p1' onChange={onImputChange}/>
            <textarea name="p1" id="" cols="30" rows="10" placeholder='p1' onChange={onImputChange}></textarea>
          </div>

          <div name='parte2'>
            <input type="text" name="tituloP2" id="tituloP2" placeholder='Titulo-p2'onChange={onImputChange}/>
            <textarea name="p2" id="" cols="30" rows="10" placeholder='p2'onChange={onImputChange}></textarea>
          </div>

          <div name='parte3'>
            <input type="text" name="tituloP3" id="tituloP3" placeholder='Titulo-p3' onChange={onImputChange}/>
            <textarea name="p3" id="" cols="30" rows="10" placeholder='p3'onChange={onImputChange}></textarea>
          </div>

          <div name='parte4'>
            <input type="text" name="tituloP4" id="tituloP4" placeholder='Titulo-p4' onChange={onImputChange}/>
            <textarea name="p4" id="" cols="30" rows="10" placeholder='p4' onChange={onImputChange}></textarea>
          </div>

          <button onClick={handleClick}>Enviar</button>
        </form>


        </div>
      </div>

    </div>
  )
}

export default App
