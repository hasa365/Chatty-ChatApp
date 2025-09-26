// import axios from "axios";
// export const axiosInstance = axios.create({
//     baseURL: import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api",
//     withCredentials: true,
// });


// frontend/src/lib/axios.js
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
    baseURL: apiUrl,  // e.g. https://chatty-backend.fly.dev
    withCredentials: false, // set to true if using cookies/sessions
});
