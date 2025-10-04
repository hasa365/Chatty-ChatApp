import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" 
    ? `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}` 
    : `${import.meta.env.VITE_API_URL}`,
    withCredentials: true,
});


// frontend/src/lib/axios.js
// import axios from "axios";

// const apiUrl = import.meta.env.VITE_API_URL;

// export const axiosInstance = axios.create({
//     baseURL: apiUrl,  // e.g. https://chatty-backend.fly.dev
//     withCredentials: false, // set to true if using cookies/sessions
// });
