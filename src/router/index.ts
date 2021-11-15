import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/pokemons'
  },
  {
    path: '/pokemons',
    name: 'Pokemons',
    component: () => import('@/views/pokemon-list/pokemon-list.vue')
  },
  {
    path: '/pokemons/:id',
    name: 'Pokemon',
    component: () => import('@/views/pokemon/pokemon.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
