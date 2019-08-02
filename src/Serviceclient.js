import axios from 'axios'

/**
 * Axios funktiot REST-apiin.
 */
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

export function getTracks() {
    return axios.get('http://localhost:8080/api/tracks/')
        .then((response) => response.data)
}

export function haeSivu(s) {
    return axios.get('http://localhost:8080/api/frisbee/frisbeeascending?page=' + s + '&param=name')
        .then( (response) => response.data)
}