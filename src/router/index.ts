import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import TopStories from '../views/TopStories.vue';
import CodeExamples from '../views/CodeExamples.vue';
import MyFavorites from '../views/MyFavorites.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'top-stories',
    component: TopStories,
  },
  {
    path: '/code-examples',
    name: 'code-examples',
    component: CodeExamples,
  },
  {
    path: '/my-favorites',
    name: 'my-favorites',
    component: MyFavorites,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
