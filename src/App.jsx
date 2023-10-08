import { useState } from 'react'
import './App.css'

function App() {

  const [sesion, setSesion] = useState([
    {
     sesionDia:''
    },
    {
      tituloP1:'',
      p1:''
    },
    {
      tituloP2:'',
      p2:''
    },
    {
      tituloP3:'',
      p3:''
    },
    {
      tituloP4:'',
      p4:''
    }
  ]);



const onImputChange = (e) =>{


  const { name, value } = e.target
  setSesion({
        ...sesion,
        [name]: value,
    })
}

const handleClick = (e) =>{
  e.preventDefault();
  
  const sesionJson = JSON.stringify(sesion);
  setSesion(sesionJson)
  
}



  return (
    <div className='app'>

      <div className="contenedor-cabecera">
        <div className="titulos">
          <h1>Training App</h1>
          <h2>Diseña aqui tus entrenamientos</h2>
        </div>
        <div className="selectores">
          <div className="selector">Crear</div>
          <div className="selector">Revisar</div>
          <div className="selector">Diario</div>
        </div>
      </div>

      <div className="contenerdor-componente">
        <div className="componente">

        <form className='formulario'>
          <input type="text" name="dia" id="dia" placeholder='Sesion-Dia'  onChange={onImputChange}/>

          <div>
            <input type="text" name="titulo-p1" id="titulo-p1" placeholder='Titulo-p1' onChange={onImputChange}/>
            <textarea name="p1" id="" cols="30" rows="10" placeholder='p1' onChange={onImputChange}></textarea>
          </div>

          <div>
            <input type="text" name="titulo-p2" id="titulo-p2" placeholder='Titulo-p2'onChange={onImputChange}/>
            <textarea name="p2" id="" cols="30" rows="10" placeholder='p2'onChange={onImputChange}></textarea>
          </div>

          <div>
            <input type="text" name="titulo-p3" id="titulo-p3" placeholder='Titulo-p3' onChange={onImputChange}/>
            <textarea name="p3" id="" cols="30" rows="10" placeholder='p3'onChange={onImputChange}></textarea>
          </div>

          <div>
            <input type="text" name="titulo-p4" id="titulo-p4" placeholder='Titulo-p4' onChange={onImputChange}/>
            <textarea name="p4" id="" cols="30" rows="10" placeholder='p4' onChange={onImputChange}></textarea>
          </div>

          <button onClick={handleClick}>Enviar</button>
        </form>

        <div>

        </div>

        </div>
      </div>
{JSON.stringify(sesion)}


    </div>
  )
}

export default App
