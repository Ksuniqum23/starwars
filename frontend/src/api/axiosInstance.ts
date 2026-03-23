import axios from "axios";

const api = axios.create({
    baseURL: 'https://sw-next-api.vercel.app/api/v1/',
    timeout: 1000,
});

export default api;
