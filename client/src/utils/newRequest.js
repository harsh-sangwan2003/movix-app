import axios from "axios";

const newRequest = axios.create({

    baseURL:"https://movix-app-giym.onrender.com/api/",
    withCredentials:true
})

export default newRequest;