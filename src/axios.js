import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-ricky-13.onrender.com'
})

export default instance;