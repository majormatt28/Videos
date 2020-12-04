import axios from 'axios';

const KEY = 'AIzaSyD5I2Uh88ECMST42mrAECoFGoevoBRL8Dw';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY 
    }
});


