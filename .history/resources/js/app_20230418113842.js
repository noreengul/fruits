/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
 import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes';
    
Vue.use('VueRouter');
    
const router = new VueRouter({
  routes: Routes,
});
    
new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
});
