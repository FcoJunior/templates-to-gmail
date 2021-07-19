import axios from 'axios';

const api = axios.create({
    baseURL: window._env_.API_URL
});

export default api;