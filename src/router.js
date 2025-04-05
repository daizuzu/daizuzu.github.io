import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Project from "@/views/Project.vue";
import Illustration from "@/views/Illustration.vue";
import VirtualExhibition from "@/views/VirtualExhibition.vue";
import ArtPractices from "@/views/ArtPractices.vue";
import About from "@/views/About.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/project', name: 'Project', component: Project },
    { path: '/illustration', name: 'Illustration', component: Illustration },
    { path: '/virtual_exhibition', name: 'Virtual Exhibition', component: VirtualExhibition },
    { path: '/art_practices', name: 'Art Practices', component: ArtPractices },
    { path: '/about', name: 'About', component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
