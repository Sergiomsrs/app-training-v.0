import { useState } from "react";

export const Form = () => {

    const initialWod = {
        parte1: '',
        parte2: '',
        parte3: '',
        parte4: '',
    }

    const [wodForm, setWodForm] = useState(initialWod);
    const { parte1, parte2, parte3, parte4 } = wodForm
    const onImputChange = ({ target }) => {
        const { name, value } = target
        setWodForm({
            ...wodForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
    }

    // Si usas fetch
    function enviarDatos() {
        fetch('http://localhost:8080/api/entrenamiento/guardar', {
            method: 'POST', // Puedes usar GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json', // Especifica el tipo de contenido que estás enviando
            },
            body: JSON.stringify(wodForm), // Convierte los datos a formato JSON
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); // Aquí puedes manejar la respuesta de la API
            })
            .catch(error => {
                console.error('Error:', error);
            });
            setWodForm(initialWod)
    }




    return (

        <div className="main-card-form">
            <div className="card-form">
                <form onSubmit={onSubmit}>

                    <div className="cont">
                        <label>Dia</label>
                        <input
                            type="text"
                            name="parte1"
                            value={parte1}
                            onChange={onImputChange}
                        />
                    </div>

                    <div className="cont">
                        <label>WarmUp</label>
                        <textarea
                            type="text"
                            name="parte2"
                            value={parte2}
                            onChange={onImputChange}
                        />
                    </div>
                    <div className="cont">
                        <label>Strength</label>
                        <textarea
                            type="text"
                            name="parte3"
                            value={parte3}
                            onChange={onImputChange}
                        />
                    </div>
                    <div className="cont">
                        <label>Wod</label>
                        <textarea
                            type="text"
                            name="parte4"
                            value={parte4}
                            onChange={onImputChange}
                        />
                    </div>



                </form>
            

            <div className='wodcard-container-form'>
                <div className='card'>
                    <p className='wodcard-dia'>{parte1}</p>
                    <p>{parte2}</p>
                    <p>{parte3}</p>
                    <p>{parte4}</p>
                </div>
            </div>
            </div>


            <div>
                <button
                    onClick={enviarDatos}
                    type="submit"
                    className="boton-guardar"
                >Guardar</button>
            </div>


        </div>





    )
}
