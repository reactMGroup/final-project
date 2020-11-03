import axios from 'axios';
import { rootUrl } from './props';
import { getUser } from './users';

const endPoint = '/blogpost/';

export default function getBlogpostAll() {
    const url = rootUrl + endPoint;
    // const posts = axios.get(url).then();
    const result = axios.get(url)
        .then((result) => result.data.map(blogpost => {
            return getUser(blogpost.userID).then(userResult => {
                const user = userResult.data;
                blogpost.userFullname = `${user.name.title} ${user.name.first} ${user.name.last}`;
                blogpost.userPicture = user.picture.thumbnail;
                return blogpost;
            });
        }));
    return result.then(array => Promise.all(array));
}

export function getBlogpost(ID) {
    const promise = axios.get(rootUrl + endPoint + ID);
    const full = promise.then(result => {
        const blogpost = result.data;
        return getUser(blogpost.userID)
            .then(userResult => {
                const user = userResult.data;
                blogpost.userFullname = `${user.name.title} ${user.name.first} ${user.name.last}`;
                blogpost.userPicture = user.picture.thumbnail;
                return blogpost;
            });
    });

    return full;
}

export function create(newPost) {
    const url = rootUrl + endPoint;
    return axios.post(url, newPost);
}