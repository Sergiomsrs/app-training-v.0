import axios from "axios";


export const loginUser = async ({username, password}) => {
   // return (userLogin.username === 'admin' && userLogin.password === '12345')
   try {
    return await axios.post('http://localhost:8081/login', {username, password});
   } catch (error) {
    throw error;
   }
}




// import axios from "axios";
// import MockAdapter from "axios-mock-adapter";


// const mock = new MockAdapter(axios);

// // Configura una respuesta simulada para la solicitud POST a '/login'
// mock.onPost('http://localhost:8081/login').reply(200, {
//    // Supongamos que esta es la respuesta que deseas simular
//    message: "Hola admin, has iniciado sesion con exito!",
//    token: "eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpdGllcyI6Ilt7XCJhdXRob3JpdHlcIjpcIlJPTEVfQURNSU5cIn0se1wiYXV0aG9yaXR5XCI6XCJST0xFX1VTRVJcIn1dIiwiaXNBZG1pbiI6dHJ1ZSwidXNlcm5hbWUiOiJhZG1pbiIsInN1YiI6ImFkbWluIiwiaWF0IjoxNzEwNDQyOTg4LCJleHAiOjE3MTA0NDY1ODh9.9tXz1dzHIEVMDOScMotL97x2ZHxjA7HokOv8Oii5rP0",
//    username: "admin"
// });

// export const loginUser = async ({ username, password }) => {
//    try {
//       return await axios.post('http://localhost:8081/login', { username, password });
//    } catch (error) {
//       throw error;
//    }
// };