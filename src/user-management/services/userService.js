import axios from "axios"

export const findAll = async () => {

    try {
        const response = await axios.get("http://localhost:8081/users")
        return response;
    } catch (error) {
        console.log(error)
    }
    return null;
}