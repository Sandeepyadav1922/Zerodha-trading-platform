import axios from "axios";

const api = axios.create({
    baseURL: "https://zerodha-backend-r6zl.onrender.com",
    withCredentials: true,
});

export default api;