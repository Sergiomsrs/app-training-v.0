/* eslint-disable react/prop-types */


import { Ejercicio } from './Ejercicio'


function Appi({ejercicios, handleInputChange, handleClick,title , onTitleChange, desc, onDescChange}) {


  

  return (
    <>
      <input type="text" value={title} onChange={onTitleChange} placeholder="Título" />
      <form>
        {
          ejercicios.map((ej, index) => {
            return (
              <div key={ej.id}>
                <Ejercicio handleInputChange={(e) => handleInputChange(e, index)} />
              </div>
            )
          })
        }
        <button className='boton' type='button' onClick={handleClick}>+</button>
      </form>
        <input type="text" value={desc} onChange={onDescChange} placeholder="Descripcion" />

    </>
  )
}

export default Appi
