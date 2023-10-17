


// eslint-disable-next-line react/prop-types
export const NewForm = ({ onImputChange, enviarDatos }) => {
    return (
<div className="componente-form">
        
        <div>
                <input className="carda-dia" type="text" name="dia" id="dia" placeholder='Sesion-Dia' onChange={onImputChange} />
            </div>
                <form name='dia' className='formulario'>
            <div name='parte1'>
                <input className="carda" type="text" name="tituloP1" id="tituloP1" placeholder='Titulo-p1' onChange={onImputChange} />
                <textarea className="carda" name="p1" id="" cols="30" rows="10" placeholder='p1' onChange={onImputChange}></textarea>
            </div>

            <div name='parte2'>
                <input className="carda" type="text" name="tituloP2" id="tituloP2" placeholder='Titulo-p2' onChange={onImputChange} />
                <textarea className="carda" name="p2" id="" cols="30" rows="10" placeholder='p2' onChange={onImputChange}></textarea>
            </div>

            <div name='parte3'>
                <input className="carda" type="text" name="tituloP3" id="tituloP3" placeholder='Titulo-p3' onChange={onImputChange} />
                <textarea className="carda" name="p3" id="" cols="30" rows="10" placeholder='p3' onChange={onImputChange}></textarea>
            </div>

            <div name='parte4'>
                <input className="carda" type="text" name="tituloP4" id="tituloP4" placeholder='Titulo-p4' onChange={onImputChange} />
                <textarea className="carda" name="p4" id="" cols="30" rows="10" placeholder='p4' onChange={onImputChange}></textarea>
            </div>

        </form>
            <button className="boton-guardar" onClick={enviarDatos}>Enviar</button>
        </div>
    )
}
