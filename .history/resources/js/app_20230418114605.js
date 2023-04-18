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
            path: '/admin',
            component: AdminLayout,
            children: [
                {
                    path:'',
                    component: AdminDashboard,
                },
                {
                    path:'user',
                    component: UserComponent,
                }
            ]
        }, 
         
    ]
});
 
export default router;
new Vue(Vue.util.extend({ router }, AdminLayout)).$mount('#app');
