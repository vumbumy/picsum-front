import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/HelloWorld'), // 동적 import
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
