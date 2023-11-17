/* eslint-disable react/prop-types */


import { Ejercicio } from './Ejercicio'


function Block({ ejercicios, handleInputChange, handleClick, title, onTitleChange, desc, onDescChange }) {




  return (
    <>
      <div className='head-form'>
      <input type="text" value={title} onChange={onTitleChange} placeholder="Título" />
      <input type="text" value={desc} onChange={onDescChange} placeholder="Descripcion" />
      </div>
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

    </>
  )
}

export default Block
