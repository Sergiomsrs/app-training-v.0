/* eslint-disable no-useless-catch */
import usersApi from "../apis/usersApi";

const BASE_URL = ""

export const findAll = async () => {

    try {
        const response = await usersApi.get(BASE_URL)
        return response;
    } catch (error) {
        console.error(error)
        throw error;
    }
    
}

export const findAllPage = async (page=0) => {

    try {
        const response = await usersApi.get(`${BASE_URL}/page/${page}`)
        return response;
    } catch (error) {
        console.error(error)
        throw error;
    }
    
}

// los objetos se pueden declarar asi por que el nombre y el argumento son iguales. 
//{id:id} se puede simplificar a {id}

export const save = async ({ username, email, password, admin }) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await usersApi.post(BASE_URL, { username, email, password, admin })
        return response;
    } catch (error) {
        throw error;
    }
}

export const update = async ({ id, username, email, admin }) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await usersApi.put(`${BASE_URL}/${id}`, { username, email, admin })
        return response;
    } catch (error) {
        throw error;
    }
}

export const remove = async (id) => {
    try {
        await usersApi.delete(`${BASE_URL}/${id}`)
    } catch (error) {
        throw error;
    }
    return undefined;
}