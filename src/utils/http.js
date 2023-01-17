import axios from 'axios';

const http = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (url, options = {}) => {
    const response = await http.get(url, options);
    return response.data;
};

export default http;
