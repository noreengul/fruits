import Example from "../components/ExampleComponent.vue";
import Fruits from "../components/AllFruit.vue";
import FavFruits from "../components/FavFruit.vue";

export default [
    {
        path: '/',
        name: 'home',
        component: Fruits,

    },
    {
        path: '/fav-fruits',
        name: 'favfruits',
        component: FavFruits,

    },
];
