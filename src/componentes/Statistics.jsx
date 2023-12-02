import { useEffect, useState } from 'react'
import './statistics.css'
import {  mostRepMov,movList,numeroRegistros } from '../funcion';

export const Statistics = () => {

    const [ dataSts, SetDataSts ] = useState({
        numeroRegistros: "",
    })

 
    useEffect(() => {
        const fetchData = async () => {
          try {
              const data = await numeroRegistros();
              const datar = await mostRepMov();
              const datarm = await movList();
            
            SetDataSts( {
                numeroRegistros: data,
                movimientoMasRepetido: datar,
                movimientos: datarm
            }); // Asumo que el nombre de tu función es setDataSts, ajusta si es diferente
          } catch (error) {
            console.error("Error al obtener datos:", error);
          }
        };
      
        fetchData(); // Llama a la función asíncrona para que se ejecute
      }, []);


      const ejerciciosFiltrados = dataSts?.movimientos?.filter(ejercicio => ejercicio !== null).sort();


    return (
        <div className='sts-body'>


            <div className='sts-card'>
               <h1>Numero de Wods Registrados</h1>
               <h2>{dataSts.numeroRegistros}</h2>
               <h1>Movimiento Mas Repetido</h1>
               <h2>{dataSts.movimientoMasRepetido}</h2>
            </div>

            <div className='sts-card'> 
                <h1>Lista de Movimientos</h1>
                <ul>
        {ejerciciosFiltrados?.map((ejercicio, index) => (
          <li key={index}>{ejercicio}</li>
        ))}
      </ul>
        </div>
        </div>
    )
}
