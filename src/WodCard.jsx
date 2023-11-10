import './WodCard.css'


function wodCard({ partea, parteb, partec, parted, handleDelete}) {


  return (
    <>
      <section className='wodcard-container'>
        <article className='card'>

          <div className='pru'>
            <p className='wodcard-dia'>{partea}</p>

            {parteb ?
              <>
                <p className='tit'>{'Warm Up'}</p>
                <p>{parteb}</p>
              </> : ''}
            {
              partec ?
                <>
                  <p className='tit'>{'Strength'}</p>
                  <p>{partec}</p>
                </> : ''}
            {parted ?
              <>
                <p className='tit'>{'Wod'}</p>
                <p>{parted}</p>
              </> : ''}
          </div>


          <footer className='botones-card'>
            <button className='botonCard-borrar' onClick={handleDelete}>Borrar</button>
            <button className='botonCard-actualizar'>Actualizar</button>
          </footer>

        </article>
      </section>
    </>
  )
}

export default wodCard

