import axios from "axios"
axios.defaults.withCredentials = true;

export const API_URL:string=`/api`

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})
export default api;

export const imgUrl:string = "http://localhost:3001/";