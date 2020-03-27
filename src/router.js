import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './pages/Home.vue'
import NewsPage from './pages/News.vue'
import DiscussionsPage from './pages/Discussions.vue'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: "Home", 
            path: '/',
            component: HomePage
        },
        {
            name: "News",
            path: '/news',
            component: NewsPage
        },
        {
            name: "Home",
            path: '/discussions',
            component: DiscussionsPage
        }
    ]
})

export default router;