import axios from "axios";

const api = axios.create({
    baseURL: "https://zerodhabackend-zc52.onrender.com",
    withCredentials: true,
});

export default api;