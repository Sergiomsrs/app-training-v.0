import { useEffect, useState } from 'react'
import './statistics.css'
import {  mostRepMov,numeroRegistros } from '../funcion';

export const Statistics = () => {

    const [ dataSts, SetDataSts ] = useState({
        numeroRegistros: "",
    })

 
    useEffect(() => {
        const fetchData = async () => {
          try {
              const data = await numeroRegistros();
            const datar = await mostRepMov();
            
            SetDataSts( {
                numeroRegistros: data,
                movimientoMasRepetido: datar,
            }); // Asumo que el nombre de tu función es setDataSts, ajusta si es diferente
          } catch (error) {
            console.error("Error al obtener datos:", error);
          }
        };
      
        fetchData(); // Llama a la función asíncrona para que se ejecute
      }, []);





    return (
        <div className='sts-body'>


            <div className='sts-card'>
               <h1>Numero de Wods Registrados</h1>
               <h2>{dataSts.numeroRegistros}</h2>
               <h1>Movimiento Mas Repetido</h1>
               <h2>{dataSts.movimientoMasRepetido}</h2>
            </div>




        </div>
    )
}
