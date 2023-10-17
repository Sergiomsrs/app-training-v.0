

export const getWod = async() => {

    const response = await fetch('src/data.json');
    const prod = await response.json();
    return prod;
}


/*export const getWod = async() => {

    const response = await fetch('http://localhost:8080/api/entrenamiento/119');
    const prod = await response.json();
    return prod;

}*/





