 

import './bootstrap';

import { createApp } from 'vue';
import router from './routes/index'
 
const app = createApp({
    
});

import ExampleComponent from './components/ExampleComponent.vue';

app.component('example-component', ExampleComponent);


app.use(router) 
app.mount('#app')
 