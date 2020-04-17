import Login from '../page/Login.vue';
import Vue from 'vue';
import Home from '../page/Home.vue';
import Feature from '../page/Feature.vue';
import Center from '../page/Center.vue';
import VueRouter from "vue-router";
Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",//
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/', component: Login
        },
        { path: '/home', component: Home },
        { path: '/feature', component: Feature },
        { path: '/center', component: Center }

    ]
});