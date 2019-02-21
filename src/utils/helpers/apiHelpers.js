import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

const apiPost = async (url, data) => await axios.post(`${apiUrl}${url}`, data);

const apiGet = async (url) => await axios.get(`${apiUrl}${url}`);

export {
    apiPost,
    apiGet
}