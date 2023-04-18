 

import { createApp } from 'vue';
import VueRouter from 'vue-router';
import Example from './components/ExampleComponent.vue';
 

createApp.use(VueRouter);
  
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
new Vue(createApp.util.extend({ router }, Example)).$mount('#app');

