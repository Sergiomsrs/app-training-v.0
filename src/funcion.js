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
