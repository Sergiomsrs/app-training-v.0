export const Ejercicio = ({ handleInputChange, values }) => {
    const { rep = "", mov = "" } = values; // Asegurar que siempre haya un valor definido
  
    return (
      <>
        <div className="exercise-row">
          <input
            className="input-rep"
            type="text"
            name="rep"
            value={rep}
            onChange={handleInputChange}
          />
          <input
            className="input-mov"
            type="text"
            name="mov"
            value={mov}
            onChange={handleInputChange}
          />
        </div>
      </>
    );
  };
  