/* eslint-disable no-useless-catch */
import axios from "axios"

const BASE_URL = "http://localhost:8081/users"
const config = ()=>{
    return {
        headers: {
            "Authorization": sessionStorage.getItem("token"),
            "Content-Type": "application/json"
        }
}
}

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

export const save = async ({ username, email, password, admin }) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.post(BASE_URL, { username, email, password, admin }, config())
        return response;
    } catch (error) {
        throw error;
    }
}

export const update = async ({ id, username, email, admin }) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, { username, email, admin }, config())
        return response;
    } catch (error) {
        throw error;
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`, config())
    } catch (error) {
        throw error;
    }
    return undefined;
}