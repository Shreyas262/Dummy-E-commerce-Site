import axios from "axios";

// creating an api client for basic api calling
const apiClient = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json",
    }
})

export default apiClient