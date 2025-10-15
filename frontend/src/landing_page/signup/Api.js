import axios from "axios";

const api = axios.create({
    baseURL: "https://zerodha-trading-platform-backend.onrender.com",
    withCredentials: true,
});

export default api;