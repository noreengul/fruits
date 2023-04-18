 

 const GuestLayout = ()  => import('./componenets/ExampleComponent.vue');
  

export default [
    {
        path: '/',
        name: 'NotFound',
        component: GuestLayout,
         
    },
    {
        path: '/admin',
        component: AuthenticatedLayout,
        // redirect: {
        //     name: 'admin.index'
        // },
        beforeEnter: requireLogin,
        
    },
    {
        path: "/:pathMatch(.*)*",
        name: 'NotFound',
        component: () => import("../views/errors/404.vue"),
    },
];