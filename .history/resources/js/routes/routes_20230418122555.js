import Example from "../components/ExampleComponent.vue";
import FRuits from "../components/AllFruit.vue";

export default [
    {
        path: '/',
        name: 'home',
        component: Example,
         
    },
    {
        path: '/abc',
        name: 'abc',
        component: FRuits,
         
    },
     
];