import axios from '@utils/axios';

export const fetchDemo1Pre = (params) => {
    return new Promise((resolve, reject)=>{
        axios.get(`${BASE_URL}/demo1/pre`, params).then((res)=>{
            //返回值处理代码
            resolve(res.data);
        }).catch(err=>{
            reject(err);
        })
    })
}