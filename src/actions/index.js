import axios from 'axios';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const FETCH_SINGLE_POST = 'fetch_sigle_post';
export const DELETE_POST = 'delete_post';

const API_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = "?key=PAPPERCLIP1234"

// Get post Bulk
export function fetchsPosts() {
    const request = axios.get(`${API_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

// Create New Post
export function createPost(values, callback) {
    const request = axios.post(`${API_URL}/posts${API_KEY}`, values).then(() => callback());

    return {
        type: CREATE_POST,
        payload: request //for bulk data
    };
}

// Get Single Post Data By Id.
export function fetchSinglePost(id) {
    const request = axios.get(`${API_URL}/posts/${id}${API_KEY}`);
    return {
        type: FETCH_SINGLE_POST,
        payload: request
    };
}

// Delete Post by Id.
export function deletePost(id, callback) {
    const request = axios.delete(`${API_URL}/posts/${id}${API_KEY}`).then(() => callback());
    return {
        type: DELETE_POST,
        payload: id
    };
}