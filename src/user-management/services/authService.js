/* eslint-disable no-useless-catch */
import axios from "axios";

export const loginUser = async ({username, password}) => {
   // return (userLogin.username === 'admin' && userLogin.password === '12345')
   try {
    return await axios.post('http://localhost:8081/login', {username, password});
   } catch (error) {
    throw error;
   }
}