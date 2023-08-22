import http from "./httpService.js";


export function getCharacters() {
    return http.get('/character').then((data) => data.data)
}

export function getLocation() {
    return http.get('/location').then((data) => data.data)
}

export function getEpisode() {
    return http.get('/episode').then((data) => data.data)
}
