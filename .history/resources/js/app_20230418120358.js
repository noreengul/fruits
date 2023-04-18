/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import {Vue } from "vue";
import App from "./App.vue";
import router from './routes'

const app = new Vue({
  router,
  render: h => h(App)
});

 

