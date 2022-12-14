import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/places',
    name: 'places',
    component: function () {
      return import(/* webpackChunkName: "places" */ '../views/PlacesView.vue')
    }

  },
  {
    path: '/accom',
    name: 'accom',
    component: function () {
      return import(/* webpackChunkName: "accom" */ '../views/AccomView.vue')
    }

  },
  {
    path: '/recipes',
    name: 'recipes',
    component: function () {
      return import(/* webpackChunkName: "recipes" */ '../views/RecipesView.vue')
    }

  },
  {
    path: '/singles',
    name: 'singles',
    component: function () {
      return import(/* webpackChunkName: "singles" */ '../views/SinglesView.vue')
    }

  },

  {
    path: '/naija',
    name: 'naija',
    component: function () {
      return import(/* webpackChunkName: "naija" */ '../views/NaijaView.vue')
    }

  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
