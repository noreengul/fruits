import Vue from 'vue';
import VueRouter from 'vue-router';
import Example from './components/ExampleComponent.vue';
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './components/AdminDashboard'; 
import UserComponent from './components/UserComponent'; 

Vue.use(VueRouter);
  
const router = new VueRouter({
    mode:"history",
    routes: [
        {
            path: '/',
            component: Example,
            
        }, 
         
    ]
});
 
export default router;
new Vue(Vue.util.extend({ router }, AdminLayout)).$mount('#app');
//new Vue(Vue.util.extend({ router }, App)).$mount('#app');