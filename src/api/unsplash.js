import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com'
    ,headers: {
        Authorization: 'Client-ID cf91636f1db5459c4799abc1ef42eb23a3d733f608542bc6ddf887fbe4bf8a68'
    }
});
