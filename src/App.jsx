import { useState } from 'react'
import './App.css'
import { NewForm } from './NewForm';
import { Form } from './Form';
import { WodList } from './WodList';

function App() {

  const [selector, setSelector] = useState(1)
  const [selectorClassCrear, setSelectorClassCrear] = useState('white')
  const [selectorClassRevisar, setSelectorClassRevisar] = useState('blue')
  const [selectorClassDiario, setSelectorClassDiario] = useState('blue')
  

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
    setSelectorClassDiario('blue')

    

  }

  const stateRevisar = () => {
    setSelector(2)
    setSelectorClassCrear('blue')
    setSelectorClassRevisar('white')
    setSelectorClassDiario('blue')
  }

  const stateDiario = () => {
    setSelector(3)
    setSelectorClassCrear('blue')
    setSelectorClassRevisar('blue')
    setSelectorClassDiario('white')
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




function enviarDatos() {
  const data = {
    parte1: 'Hola',
    parte2:'',
    parte3:'',
    parte4:"",
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
          <div className={`selector selector-${selectorClassDiario}`} onClick={stateDiario}>Diario</div>
        </div>
      </div>
      <div className='contenedor-bajo'>
      <div className="contenerdor-componente">
        <div className="componente">

        { 
            selector === 1 ? <NewForm onImputChange={onImputChange} enviarDatos={enviarDatos} />
            : selector === 2 ? <Form />
            : selector === 3 ? <WodList />
            : null 
          }
          
          </div>
          



        </div>
      </div>

    </div>
  )
}

export default App
