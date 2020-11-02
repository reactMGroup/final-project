import axios from 'axios';

const rootUrl = 'https://5f99327250d84900163b83ba.mockapi.io';
const endPoint = '/blogpost/';

export default function getBlogpostAll(){
    const url = rootUrl + endPoint;
    return axios.get(url);
}

export function create(newPost){
    const url = rootUrl + endPoint;
    axios.post(url, newPost);
}