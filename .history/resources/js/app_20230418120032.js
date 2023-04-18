/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from "vue";
import App from "./App.vue";
import router from './router'

const app = new Vue({
  router,
  render: h => h(App)
});

import './bootstrap';

 

import { createApp } from 'vue';
import { VueRouter } from 'vue-router';
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

