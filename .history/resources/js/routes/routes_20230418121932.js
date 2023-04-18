 

const GuestLayout = ()  => import('../components/ExampleComponent.vue');
  

export default [
    {
        path: '/',
        name: 'home',
        component: () => import("../views/home.vue"),
         
    },
     
    {
        path: "/:pathMatch(.*)*",
        name: 'NotFound',
        component: () => import("../views/home.vue"),
    },
];