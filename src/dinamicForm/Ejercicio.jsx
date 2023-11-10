/* eslint-disable react/prop-types */
export const Ejercicio = ({ handleInputChange }) => {

    

    return (
        <>
        <div className="exercice-row">
            <input className="input-rep" type="text" name='rep' onChange={handleInputChange} />
            <input className="input-mov" type="text" name='mov' onChange={handleInputChange} />
        </div>
        </>
    )
}
