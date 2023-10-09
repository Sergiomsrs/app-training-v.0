import { useState } from 'react'
import './App.css'
import WodCard from './WodCard';

function App() {

  const [selector, setSelector] = useState(1)
  const [selectorClassCrear, setSelectorClassCrear] = useState('white')
  const [selectorClassRevisar, setSelectorClassRevisar] = useState('blue')
  

  const [sesion, setSesion] = useState({
    dia:'',
    tituloP1:'', 
    p1:'',
    tituloP2:'', 
    p2:'',
    tituloP3:'', 
    p3:'',
    tituloP4:'', 
    p4:'',
  });

  const stateCrear = () =>{

    setSelector(1)
    setSelectorClassCrear('white')
    setSelectorClassRevisar('blue')

    

  }

  const stateRevisar = () => {
    setSelector(2)
    setSelectorClassCrear('blue')
    setSelectorClassRevisar('white')
  }


const onImputChange = (e) =>{


  const { name, value } = e.target
  setSesion({
        ...sesion,
        [name]: value,
    })
}



const json = {
  dia: sesion.dia,
  parte1:{
    t1: sesion.tituloP1,
    p1: sesion.p1 
  },
  parte2:{
    t2: sesion.tituloP2,
    p2: sesion.p2 
  },
  parte3:{
    t3: sesion.tituloP3,
    p3: sesion.p3 
  },
  parte4:{
    t4: sesion.tituloP4,
    p4: sesion.p4 
  }

}

const jsonParse = JSON.stringify(json)


function enviarDatos() {
  const data = {
    parte1: '',
    parte2:'',
    parte3:'',
    parte4: jsonParse,
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
          <div className={`selector selector-${selectorClassCrear}`} onClick={stateCrear}>Crear</div>
          <div className={`selector selector-${selectorClassRevisar}`} onClick={stateRevisar}>Revisar</div>
          <div className="selector">Diario</div>
        </div>
      </div>

      <div className="contenerdor-componente">
        <div className="componente">

          {selector ==1 ? 
          <form  name='dia' className='formulario'>
          <input  className= "card" type="text" name="dia" id="dia" placeholder='Sesion-Dia'  onChange={onImputChange}/>

          <div name='parte1'>
            <input className= "card" type="text" name="tituloP1" id="tituloP1" placeholder='Titulo-p1' onChange={onImputChange}/>
            <textarea className= "card" name="p1" id="" cols="30" rows="10" placeholder='p1' onChange={onImputChange}></textarea>
          </div>

          <div name='parte2'>
            <input className= "card" type="text" name="tituloP2" id="tituloP2" placeholder='Titulo-p2'onChange={onImputChange}/>
            <textarea className= "card" name="p2" id="" cols="30" rows="10" placeholder='p2'onChange={onImputChange}></textarea>
          </div>

          <div name='parte3'>
            <input className= "card" type="text" name="tituloP3" id="tituloP3" placeholder='Titulo-p3' onChange={onImputChange}/>
            <textarea className= "card" name="p3" id="" cols="30" rows="10" placeholder='p3'onChange={onImputChange}></textarea>
          </div>

          <div name='parte4'>
            <input className= "card" type="text" name="tituloP4" id="tituloP4" placeholder='Titulo-p4' onChange={onImputChange}/>
            <textarea className= "card" name="p4" id="" cols="30" rows="10" placeholder='p4' onChange={onImputChange}></textarea>
          </div>

          <button onClick={enviarDatos}>Enviar</button>
        </form>
            
           : <WodCard/>}

        

        


        </div>
      </div>

    </div>
  )
}

export default App
