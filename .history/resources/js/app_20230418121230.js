 

import './bootstrap';

import { createApp } from 'vue';
import LaravelVuePagination from 'laravel-vue-pagination'; 
import router from './routes/index'
 

import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-select/dist/vue-select.css';

const app = createApp({
    created() {
        useAuth().getUser()
    }
});

import ExampleComponent from './components/ExampleComponent.vue';

app.component('example-component', ExampleComponent);


app.use(router) 
app.component('Pagination', LaravelVuePagination)
app.component("v-select", vSelect);
app.mount('#app')
 