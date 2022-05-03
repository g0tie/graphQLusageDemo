import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import List from './components/list.vue'

const routes = [
    {
      path: "/locations", 
      component:List,
    },
    {
      path: "/characters", 
      component:List,
    }
];
  
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

App.use(router)
createApp(App).mount('#app')
