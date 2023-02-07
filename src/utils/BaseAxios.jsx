import axios from "axios"

const BaseAxios = axios.create({
    baseURL : "http://10.80.161.153:8080"
})

export default BaseAxios;