import axios from 'axios';

const BASE_URL = "http://localhost:8181" 

const api = axios.create({
    // baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "accept-language": "pt-BR",
    },
    })

class ApiService {

    constructor(apiURL) {
        this.apiURL = apiURL
    }

    get(url) {
        return api.get(`${this.apiURL}${url}`);
    }

    post(url, objeto) {
        return api.post(`${this.apiURL}${url}`+ objeto);
    }
    
    put(url, objeto) {
        return api.put(`${this.apiURL}${url}`, objeto);
    }
    
    delete(url) {
        return api.delete(`${this.apiURL}${url}`);
    }
    
    urlPadrao(url) {
        return this.apiURL + url
    }
}


export default ApiService;
