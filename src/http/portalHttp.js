import axios from 'axios';
import {authController} from '@Utils/authController';

const httpService = axios.create({
    baseURL: '/portal'
});

//请求拦截器
httpService.interceptors.request.use(config => {
    if (authController.getToken()) {
        config.headers.common['Authorization'] = 'Bearer ' + authController.getToken();
    }

    return config;
}, error => {
    return Promise.reject(error);
});

//响应拦截器
httpService.interceptors.response.use(res => {
    if(res.data.code !== '0') {
        return Promise.reject(new Error(res.msg));
    } 

    return res.data;

}, err => {
    return Promise.reject(err);
});

export default httpService;