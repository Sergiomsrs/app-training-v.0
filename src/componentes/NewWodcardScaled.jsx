import '../css/WodCardScaled.css'

export function NewWodCardScaled({data}) {
  
  const { bloques } = data; 

  return (
    <>
      <section className='wodcard-container-scaled'>
        <article className='card-scaled'>
          <div className='pru-scaled'>
            {bloques?.map(bloque => (
              <div key={bloque.id}>
                <p className='wodcard-dia-scaled'>{bloque.title}</p>
                {bloque.desc ? <p className='tit-scaled'>{bloque.desc}</p> : ''}
                {bloque.ejercicios ? (
                  <>
                    {bloque.ejercicios.map(ej => (
                      <div className='row-card-scaled' key={ej.id}>
                        <p>{ej.rep}</p>
                        <p>{ej.mov}</p>
                      </div>
                    ))}
                  </>
                ) : ''}
              </div>
            ))}
          </div>

         
        </article>
      </section>
    </>
  )
}


