import axios from 'axios'

const api = axios.create({
    baseURL: "http://api.helpin.gabrieldissotti.com"
})

export default api;