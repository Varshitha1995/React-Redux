import axios from 'axios';

export default axios.create({
    headers:{
        Authorization: "Client-ID DnMWUHHxsqJ--W1npTKprE-neei9nJxOxxTbGrq7ydM"
    },
    baseURL :"https://api.unsplash.com"
})