import { useState } from 'react'
import '../css/App.css'
import { WodList } from '../WodList';
import { Revisar } from '../Revisar';
import { Contenedor } from '../dinamicForm/Contenedor';

function App() {

  const [selector, setSelector] = useState(1)
  const [selectorClassCrear, setSelectorClassCrear] = useState('white')
  const [selectorClassRevisar, setSelectorClassRevisar] = useState('blue')
  const [selectorClassDiario, setSelectorClassDiario] = useState('blue')


  const stateCrear = () => {

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



  return (


    <div className='app'>

      <header className="contenedor-cabecera">
        <div className="titulos">
          <h1>Training App</h1>
          <h2>Diseña aqui tus entrenamientos</h2>
        </div>
        <div className="selectores">
          <div className={`selector selector-${selectorClassCrear}`} onClick={stateCrear}>Crear</div>
          <div className={`selector selector-${selectorClassRevisar}`} onClick={stateRevisar}>Revisar</div>
          <div className={`selector selector-${selectorClassDiario}`} onClick={stateDiario}>Diario</div>
        </div>
      </header>


      <main className="contenerdor-componente">
        <div className="componente">
          {
            selector === 1 ? <>  <Contenedor /> </>
              : selector === 2 ? <Revisar  />
                : selector === 3 ? <WodList />
                  : null
          }
        </div>
      </main>
    </div>
  )
}

export default App

//<NewForm onImputChange={onImputChange} enviarDatos={enviarDatos} /> <Prueba/> <Form />
