import axios from 'axios';

const apiConfig = axios.create({
  baseURL: 'http://localhost:9999'
});

export default apiConfig;
