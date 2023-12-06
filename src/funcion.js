import {movimientosPermitidos} from "../src/data/mov"

export const ultimoID = async () => {
    try {
        const response = await fetch('http://localhost:8080/list/ultimoId');
        const data = await response.json();
        
        // Manejar la respuesta JSON, por ejemplo, imprimir el resultado
        console.log(data);
        
        return data; // Puedes retornar data o realizar otras operaciones según tus necesidades
    } catch (error) {
        console.error('Error:', error);
        throw error; // Puedes manejar el error o propagarlo según tus necesidades
    }
};


export const numeroRegistros = async () => {
    try {
        const response = await fetch('http://localhost:8080/list/total');
        const data = await response.json();
        
        // Manejar la respuesta JSON, por ejemplo, imprimir el resultado
        console.log(data);
        
        return data; // Puedes retornar data o realizar otras operaciones según tus necesidades
    } catch (error) {
        console.error('Error:', error);
        throw error; // Puedes manejar el error o propagarlo según tus necesidades
    }
};

export const mostRepMov = async () => {
    try {
        const response = await fetch('http://localhost:8080/list/mostrepeat');
        const data = await response.text();
        
        // Manejar la respuesta JSON, por ejemplo, imprimir el resultado
        console.log(data);
        
        return data; // Puedes retornar data o realizar otras operaciones según tus necesidades
    } catch (error) {
        console.error('Error:', error);
        throw error; // Puedes manejar el error o propagarlo según tus necesidades
    }
};

export const movList = async () => {
    try {
        const response = await fetch('http://localhost:8080/list/listarMov');
        const data = await response.json();
        
        // Manejar la respuesta JSON, por ejemplo, imprimir el resultado
      //  console.log(data);
        
        return data; // Puedes retornar data o realizar otras operaciones según tus necesidades
    } catch (error) {
        console.error('Error:', error);
        throw error; // Puedes manejar el error o propagarlo según tus necesidades
    }

};

export const buscarMov = async (mov) => {
    try {
        const response = await fetch(`http://localhost:8080/list/buscar/${mov}`);
        const data = await response.json();
        
        // Manejar la respuesta JSON, por ejemplo, imprimir el resultado
      //  console.log(data);
        
        return data; // Puedes retornar data o realizar otras operaciones según tus necesidades
    } catch (error) {
        console.error('Error:', error);
        throw error; // Puedes manejar el error o propagarlo según tus necesidades
    }
};

export const obtenerIndicesMovimientosInvalidos = (bloque) => {
    const ejercicios = bloque.ejercicios || [];
  
    return ejercicios.reduce((indicesInvalidos, ejercicio, index) => {
      if (!movimientosPermitidos.includes(ejercicio.mov)) {
        indicesInvalidos.push(index);
      }
      return indicesInvalidos;
    }, []);
  };
  
  // Función para obtener los índices de movimientos no permitidos en el objeto
 export const obtenerIndicesMovimientosInvalidosEnObjeto = (objeto) => {
    const bloques = objeto.bloques || [];
  
    return bloques.reduce((indicesTotales, bloque, bloqueIndex) => {
      const indicesInvalidos = obtenerIndicesMovimientosInvalidos(bloque);
      if (indicesInvalidos.length > 0) {
        indicesTotales[bloqueIndex] = indicesInvalidos;
      }
      return indicesTotales;
    }, {});
  };
