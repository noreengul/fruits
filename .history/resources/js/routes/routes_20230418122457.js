import Example from "../components/ExampleComponent.vue";

export default [
    {
        path: '/',
        name: 'home',
        component: Example,
         
    },
     
    // {
    //     path: "/:pathMatch(.*)*",
    //     name: 'NotFound',
    //     component: () => import("../views/home.vue"),
    // },
];