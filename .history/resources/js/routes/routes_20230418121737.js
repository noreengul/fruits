 

const GuestLayout = ()  => import('../components/ExampleComponent.vue');
  

export default [
    {
        path: '/',
        name: 'home',
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