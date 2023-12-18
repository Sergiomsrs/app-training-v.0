export const Ejercicio = ({ handleInputChange, values,handleKeyPress }) => {
    const { rep = "", mov = "" } = values; 
    
  
    return (
      <>
        
          <input
            className="input-rep"
            type="text"
            name="rep"
            value={rep !== null && rep !== undefined ? rep : ''}
            onChange={handleInputChange}
          />
          <input
            className="input-mov"
            type="text"
            name="mov"
            value={mov !== null && mov !== undefined ? mov : ''}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        
      </>
    );
  };
  