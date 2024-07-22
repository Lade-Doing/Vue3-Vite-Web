import axios from '@/axios'

export function login(body){
    console.log(body)
    return axios.post("/v1/auth/getToken",body)
}

export function getinfo(){
    return axios.post("/v1/auth/getUserInfo")
}

export function logout(){
    return new Promise((resolve,reject)=>{
        resolve({
            "msg": "ok",
            "data": "退出登录成功"
        })
        reject({
            "msg": "非法token，请先登录！",
            "errorCode": 20000
        })
    })
}

export function updatepassword(data){
    return new Promise((resolve,reject)=>{
        resolve({
            "msg": "ok",
            "data": true
        })
        reject({
            "msg": "非法token，请先登录！",
            "errorCode": 20000
        })
    })
}
