 

const GuestLayout = ()  => import('../components/ExampleComponent.vue');
  

export default [
    {
        path: '/home',
        name: 'hometest',
        component: () =>  GuestLayout
         
    },
     
    // {
    //     path: "/:pathMatch(.*)*",
    //     name: 'NotFound',
    //     component: () => import("../views/home.vue"),
    // },
];