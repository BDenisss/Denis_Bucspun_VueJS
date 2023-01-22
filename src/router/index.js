import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ClavierView from "@/views/ClavierView";
import AboutView from "@/views/AboutView";
import AddView from "@/views/AddView";

const routes = [
  {
    path: '/',
    name: 'journal',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: AboutView
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierView
  },
  {
    path: '/add',
    name: 'add',
    component: AddView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
