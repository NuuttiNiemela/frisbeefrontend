import axios from 'axios'

export function getAll() {
    return axios.get('http://localhost:8080/api/frisbee/')
        .then((response) => response.data)
}