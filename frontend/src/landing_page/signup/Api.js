import axios from "axios";

const api = axios.create({
    // baseURL: "https://zerodha-backend-r6zl.onrender.com",
    baseURL: "http://localhost:3002",
    withCredentials: true,
});

export default api;