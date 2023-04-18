import AllFruit from './components/AllFruit';
 
 
export const routes = [
    {
        name: '/',
        path: '/',
        component: AllFruit
    },
   
];


import Game from './components/Game.vue';
import Login from './components/Login.vue';
    
export default [
  { path: '/', component: Game, name: "Game" },
  { path: '/login', component: Login, name: "Login" },
]