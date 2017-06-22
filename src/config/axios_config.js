import globalConfig from 'inMindConfig'
import axios from 'axios'
import Vue from 'vue'
let axiosConfig = {
    init() { 
        // Vue.prototype.axios = axios;
        axios.defaults.baseURL = globalConfig.apiConfig.originUrl;
        axios.interceptors.request.use(function (config) {
            // console.log('config',config);
            config.headers.common['Authorization'] = 'Token 32fa3e092e54590d8a762577516bcfd6923c7f24';
            // Do something before request is sent
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });
        // Add a response interceptor
        axios.interceptors.response.use(function (response) {
            // Do something with response data
            return response.data;
        }, function (error) {
            // Do something with response error
            return Promise.reject(error);
        });
    }
}
export default axiosConfig
