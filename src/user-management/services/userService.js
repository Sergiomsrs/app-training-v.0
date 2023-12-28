import axios from "axios"

const BASE_URL = "http://localhost:8081/users"

export const findAll = async () => {

    try {
        const response = await axios.get(BASE_URL)
        return response;
    } catch (error) {
        console.error(error)
    }
    return null;
}

// los objetos se pueden declarar asi por que el nombre y el argumento son iguales. 
//{id:id} se puede simplificar a {id}

export const save = async ({username, email, password}) => {
    try {
        const response = await axios.post(BASE_URL, {username, email, password})
        return response;
    } catch (error) {
        console.error(error)
    }
    return undefined;
}

export const update = async ({id,username, email}) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, {username, email})
        return response;
    } catch (error) {
        console.error(error)
    }
    return undefined;
}

export const remove = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`)
    } catch (error) {
        console.error(error)
    }
    return undefined;
}