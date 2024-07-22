
import { createStore, createLogger } from 'vuex';
import menus from './modules/menus.js';
import roles from './modules/roles.js';
import users from './modules/users.js';
import { login, getinfo } from '@/api/manage'
import { useRouter } from "vue-router"
import { toast } from "@/composables/util"
import {
    setToken,
    removeToken
} from '@/composables/auth'


const router = useRouter()

const state = () => ({
    name: '我是主模块',
    // 侧边宽度
    asideWidth: "250px",

})
const mutations = {
    // 展开/缩起侧边
    handleAsideWidth(state) {
        state.asideWidth = state.asideWidth == "250px" ? "64px" : "250px"
    }
}

const actions = {
    // 登录
    login({ commit }, form) {
        return new Promise((resolve, reject) => {
            login(form).then(res => {
                const token = res.data.data.token
                setToken(token)
                resolve(token)
            }).catch(err => reject(err))
        })
    },
    // 获取当前登录用户信息
    getinfo({ commit }) {
        return new Promise((resolve, reject) => {
            getinfo().then(res => {
                //其他原因（未分配角色）等导致
                if(res.data.code === 1){
                    //删除掉用户相关的用户信息
                    removeToken();
                    toast(res.data.msg,'info');
                }
                // commit("SET_USERINFO", res) 获取用户信息用于修改操作,之后提供不同的api获取
                commit("SET_MENUS", res.data.data.menus)
                commit("SET_RULENAMES", res.data.data.permissions)
                resolve(res.data.data)
            }).catch(err => reject(err))
        })
    },
    // 退出登录
    logout({ commit }) {
        // 移除cookie里的token
        removeToken()
        // 清除当前用户状态 vuex
        commit("SET_USERINFO", {})
    }
}


const debug = process.env.NODE_ENV !== 'production';

export default createStore({
    state,
    mutations,
    actions,

    modules: {
        menus,
        roles,
        users,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})