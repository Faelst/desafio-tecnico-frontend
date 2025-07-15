import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import ChallengerView from '@/views/ChallengerView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-view',
      component: MainView,
    },
    {
      path: '/challenge',
      name: 'challenger-view',
      component: ChallengerView,
    },
  ],
});

export default router;
