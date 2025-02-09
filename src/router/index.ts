import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AboutView from '@/views/AboutView.vue'
import { loadTranslationsFromLocalStorage } from '@/plugins/i18n'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: DefaultLayout },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { layout: DefaultLayout },
    },
  ],
})

router.beforeEach((to, from, next) => {
  loadTranslationsFromLocalStorage()
  next()
})

export default router
