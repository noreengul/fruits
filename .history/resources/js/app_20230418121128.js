Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@noreengul 
irabbi360
/
laravel-vue3-spa-starter
Public
Fork your own copy of irabbi360/laravel-vue3-spa-starter
Code
Issues
Pull requests
Discussions
Actions
Projects
Security
Insights
Beta Try the new code view
laravel-vue3-spa-starter/resources/js/app.js /
@irabbi360
irabbi360 multi language vue i18n added
Latest commit d3bd797 on Feb 12
 History
 1 contributor
35 lines (28 sloc)  922 Bytes
 

import './bootstrap';

import { createApp } from 'vue';
import LaravelVuePagination from 'laravel-vue-pagination';
import store from './store'
import router from './routes/index'
import VueSweetalert2 from "vue-sweetalert2";
import { abilitiesPlugin } from '@casl/vue';
import ability from './services/ability';
import vSelect from "vue-select";
import useAuth from './composables/auth';
import i18n from "./plugins/i18n";

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
 