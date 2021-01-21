import axios from 'axios';

//新建了一个axios的实例
const ajax = axios.create({
    
});

//增加了响应数据的拦截，当请求响应登录超时的时候，给提醒
ajax.interceptors.response.use(function(response){
    
    return response;

}, function(){
    return Promise.reject(error);
});

export default ajax;