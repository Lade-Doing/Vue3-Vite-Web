### 改进Vue3的代码

页面
- 前端页面front
    - front.vue
        - FHeader.vue
        - FContent.vue
        - FSider.vue
    - blogDetail.vue
    - person.vue
- 后端页面back
    - back.vue
        - FHeader.vue
        - FContent.vue
        - FSider.vue
    - Article.vue
    - Category.vue
    - Tag.vue
    - User.vue

Vue-Router路由
(使用动态路由进行搭建)
- Admin
-



### 日志

搭建一个Vue+Vite项目:`pnpm create vite@latest my-vue-app -- --template vue`
安装Vue-Router:`pnpm install vue-router@4 --save`
安装`pnpm install @vitejs/plugin-vue`解决引入插件问题，然后在Vue.config.js中使用:
~~~javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

export default defineConfig({
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src")
    }
  },
  server:{
    proxy:{
      '/api': {
        target: 'http://127.0.0.1:9090',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  plugins: [vue()]  //这里必须要使用，才能让vite识别vue文件
})
~~~
安装`pnpm install universal-cookie@4.0.4 @vueuse/core@8.4.2 @vueuse/integrations@8.4.1`
安装`pnpm install crypto-js (加密工具) pnpm install gsap(动画库)`
安装`pnpm install axios --save`
安装`pnpm install vuex@4.* --save`,并在`main.js`中配置vuex
安装element-plus：`pnpm install @element-plus/icons-vue` 和 `pnpm install element-plus` ,没有自动加上--save默认放在生产模式下。
main.js引进去

安装`nprogress`，然后main.js中引进去。
