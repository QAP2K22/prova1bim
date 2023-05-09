import axios from "axios";

const apiAnimes = axios.create({
    baseURL: "https://api.jikan.moe/v4" /*endpoint*/,
})

export default apiAnimes