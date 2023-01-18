import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ClavierView from "@/views/ClavierView";
import AboutView from "@/views/AboutView"

const routes = [
  {
    path: '/journal',
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
