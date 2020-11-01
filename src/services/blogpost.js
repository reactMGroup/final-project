import axios from 'axios';

const rootUrl = 'https://5f99327250d84900163b83ba.mockapi.io';
const endPoint = '/blogpost/';

function getBlogpostAll(){
    const url = rootUrl + endPoint;
    return axios.get(url);
}

export default getBlogpostAll;