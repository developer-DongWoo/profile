import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue'
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
import Mypage from './views/Mypage';
import OAuth from './views/OAuth2.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/signup',
        component: Signup,
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/mypage',
        component: Mypage
    },
    {
        path: '/oauth',
        component: OAuth
    }
];

const router = new VueRouter({
    mode: 'history', // 히스토리 모드 활성화
    routes
  });
  
export default router;
