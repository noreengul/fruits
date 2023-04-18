 

import './bootstrap';

import { createApp } from 'vue';
import router from './routes/index'
 
const app = createApp({
    created() {
         
    }
}); 

app.use(router) 
app.mount('#app')
 