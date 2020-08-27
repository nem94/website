import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/services/Services.vue'),
  },
  {
    path: '/services/industrial',
    name: 'Industrial',
    component: () => import('../views/services/Industrial.vue'),
  },
  {
    path: '/services/civil',
    name: 'Civil',
    component: () => import('../views/services/Civil.vue'),
  },
  {
    path: '/services/certifications',
    name: 'Certificate',
    component: () => import('../views/services/Certificate.vue'),
  },
  {
    path: '/contact-us',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
