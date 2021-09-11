import axios from 'axios';
const KEY = 'AIzaSyB8Y6TblNUqy9we3naAC4BRBbQZG-VRQDU';


export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});