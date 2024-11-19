
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Recipes from '../pages/Recipes.vue';
import Contact from '../pages/Contact.vue';
import CookingTips from '../pages/CookingTips.vue';  

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: Recipes,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/cookingtips',
    name: 'CookingTips', 
    component: CookingTips,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
