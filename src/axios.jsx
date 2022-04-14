import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-clone-91b56.cloudfunctions.net/api' //The API (clound function) URL
});


export default instance;