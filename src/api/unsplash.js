import axios from 'axios'; 

//customization of axios// interesting for later
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers :{
        //search key
        Authorization: 
        'Client-ID db1abb2c0152b4fb4e2370dbba0229c0facd57eb66784a982406b191ce50901e'
    }
});