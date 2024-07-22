const state = () => ({
    name: '我是menu模块'
})
const getters = {
    text: (state, getters, rootState) => {

    }
}
const mutations = {
    getInfo (state, params){

        
    }
}

const actions = {
    async text({ commit,state }, params){
        //变量
        try{
            //执行promise函数(api)
        } catch (e){

        }
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    //嵌套模块
    // modules:{
    //     nested
    // }
}
