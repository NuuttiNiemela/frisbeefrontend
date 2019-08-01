import axios from 'axios'

export function getAll() {
    return axios.get('http://localhost:8080/api/frisbee/')
        .then((response) => response.data)
}

export function deleteId(id) {
    return axios.delete('http://localhost:8080/api/frisbee/' + id)
}

export function postNew(frisbee) {
    return axios.post('http://localhost:8080/api/frisbee/', frisbee)
        .then((response) => response)
}

export function updateId(id, frisbee) {
    return axios.put('http://localhost:8080/api/frisbee/' + id, frisbee)
}

export function getByName(f) {
    return axios.get('http://localhost:8080/api/frisbee/' + f)
}