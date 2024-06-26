import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/NewPage',
    name: 'NewPage',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../views/ComponentA.vue'),
      },
      {
        path: 'b',
        component: () => import('../views/ComponentB.vue'),
      },
      {
        path: 'dynamicRouter/:id',
        component: () => import('../views/DynamicRouter.vue'),
      },
      {
        path: 'ByProps/:id',
        component: () => import('../views/ByProps.vue'),
        props: (route) => {
          console.log('route', route);
          return {
            id: route.params.id,
          };
        },
      },
      {
        path: 'NameView',
        component: () => import('../views/NameView.vue'),
        children: [
          {
            path: 'c2a',
            components: {
              left: () => import('../views/ComponentC.vue'),
              right: () => import('../views/ComponentA.vue'),
            },
          },
          {
            path: 'a2b',
            components: {
              left: () => import('../views/ComponentA.vue'),
              right: () => import('../views/ComponentB.vue'),
            },
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
