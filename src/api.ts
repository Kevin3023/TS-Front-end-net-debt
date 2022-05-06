import axios from "axios";

const API_URL = 'http://localhost:9090';

export function fetchDividas(){
    return axios(`${API_URL}/divida`);
}

