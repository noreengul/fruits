/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';

 

import { createApp } from 'vue';
import { VueRouter } from 'routers';
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

