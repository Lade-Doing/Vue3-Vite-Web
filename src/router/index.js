import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

//基本路由组件
// import Admin from '~/layouts/Admin.vue'
import Login from '@/pages/back/Login.vue'
import NotFound from '@/pages//404.vue'

//动态路由组件


//默认路由,由所有用户共享
const routes = [
    // {
    //     path: '/',
    //     name: 'admin',
    //     component: Admin
    // },
    {
        path: '/login',
        component: Login,
        meta: {
            title: '登录页'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

//异步添加路由
const asyncRoutes = [

]


//动态将组件添加到路由中去(注意菜单显示是在FMenu组件中调用了$store.state.menu然后才显示出菜单左侧)
export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//动态添加路由方法
/**
 * 将本来全部可以动态添加的路由和返回回来的路由数据对比,如果返回回来的数据有在本来的动态路由中,则添加到routes中去.
 * @param {Array} menus - 菜单数组
 * @returns {boolean}  是否有新的路由
 */
export function addRoutes(menus){
    // 是否有新的路由
    let hasNewRoutes = false
    const findAndAddRoutesByMenus = (arr) =>{
        arr.forEach(e=>{
            let item = asyncRoutes.find(o=>o.path === e.path)
            if(item && !router.hasRoute(item.path)){
                router.addRoute("admin",item)
                // console.log(item)
                hasNewRoutes = true
            }
            if(e.children && e.children.length > 0){
                findAndAddRoutesByMenus(e.children)
            }
        })
    }

    findAndAddRoutesByMenus(menus)

    return hasNewRoutes
}
