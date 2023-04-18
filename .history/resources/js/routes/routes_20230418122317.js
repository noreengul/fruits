 

const GuestLayout = ()  => import('../components/ExampleComponent.vue');
  

export default [
    {
        path: '/ ',
        name: 'home',
        component: () =>  GuestLayout
         
    },
     
    // {
    //     path: "/:pathMatch(.*)*",
    //     name: 'NotFound',
    //     component: () => import("../views/home.vue"),
    // },
];