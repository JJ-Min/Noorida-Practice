import Vue from 'vue';
import Vuesax from 'vuesax';
import Router from 'vue-router';

import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';
import LoginPage from './../pages/LoginPage';
import FindIdPage from './../pages/FindIdPage';
import FindPasswordPage from './../pages/FindPasswordPage';
Vue.use(Router);
Vue.use(Vuesax);

export default new Router({
  routes: [
    {
      path: '',
      redirect: LoginPage,
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/find-id',
      name: 'FindIdPage',
      component: FindIdPage,
    },
    {
      path: '/find-password',
      name: 'FindPasswordPage',
      component: FindPasswordPage,
    }
  ],
});
