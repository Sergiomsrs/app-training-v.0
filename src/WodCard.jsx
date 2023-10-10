import './WodCard.css'


function wodCard({partea, parteb, partec, parted}) {
  
  
  return (
    <>
      <div className='wodcard-container'>
        <div className='card'>
          <p className='wodcard-dia'>{partea}</p>
            {parteb?
            <>
              <p className='tit'>{'Warm Up'}</p>
              <p>{parteb}</p> 
              </> : ''}
        
        {
          partec? <>
          <p className='tit'>{'Strength'}</p>
          <p>{partec}</p> 
          </> : ''}
          
          {parted? <>
            <p className='tit'>{'Wod'}</p>
            <p>{parted}</p>
          </> : ''}
          <div className='botones-card'>
            <button className='botonCard-borrar'>Borrar</button>
            <button className='botonCard-actualizar'>Actualizar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default wodCard

