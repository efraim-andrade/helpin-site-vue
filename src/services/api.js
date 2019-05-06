import axios from 'axios'

const api = axios.create({
    baseURL: "api.helpin.gabrieldissotti.com"
})

export default api;