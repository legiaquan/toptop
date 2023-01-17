import axios from 'axios';

const http = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (url, options = {}) => {
    const response = await http.get(url, options);
    return response.data;
};

export default http;
