import Vue from 'vue';
import VueRouter from 'vue-router';
import Example from './components/ExampleComponent.vue';
 

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
