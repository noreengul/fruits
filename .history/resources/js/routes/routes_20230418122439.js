 

 import('../components/ExampleComponent.vue');
  
 import Example from "./views/Login.vue";

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