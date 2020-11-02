import axios from 'axios';

const rootUrl = 'https://5f99327250d84900163b83ba.mockapi.io';
const endPoint = '/user/';

export default function getUserAll() {
    const url = rootUrl + endPoint;
    return axios.get(url);
}

export function create(newUser) {
    const url = rootUrl + endPoint;
    return axios.post(url, newUser);
}