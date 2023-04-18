/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// import { createApp } from "vue";
// import App from "./App.vue";
// import router from './routes'

// const app = new createApp({
//   router,
//   render: h => h(App)
// });

import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import axios from 'axios'
import vueAxios from 'vue-axios'

const app = createApp(App)
app.use(axios)
app.use(vueAxios)
app.mount('#app')

 

