import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';
import Gallery from './views/Gallery.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/gallery', name: 'Gallery', component: Gallery },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
