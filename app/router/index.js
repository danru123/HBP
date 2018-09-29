var babelpolyfill = require("babel-polyfill");

import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)
export default new Router({
<<<<<<< HEAD
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: '首页',
      component: require('../components/index.vue').default
    },
    {
      path: '/description',
      name: '描述',
      component: require('../components/description/description.vue').default
    },
    {
      path: '/vote',
      name: '投票',
      component: require('../components/vote/vote.vue').default,
      // children:[
      //   {
      //     path:"/vote/detail",
      //     name:"详情",
      //     component:require('../components/vote/detail/det.vue').default
      //   }
      // ]
    },
    {
      path:"/detail",
      name:"详情",
      component:require('../components/vote/detail/det.vue').default,
      children:[
        {
          path:"/vote/detail/introduce",
          name:"介绍",
          component:require('../components/vote/detail/introduce/introduce.vue').default
        },
        {
          path:"/vote/detail/production",
          name:"作品",
          component:require('../components/vote/detail/production/production.vue').default
        }
      ]
    },
    {
      path: '/review',
      name: '评审',
      component: require('../components/review/review.vue').default
    },
    // {
    //   path: '*',
    //   redirect: '/index'
    // }
  ]
=======
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    routes: [{
            path: '/',
            name: '首页',
            component: require('../components/index.vue').default
        },
        {
            path: '/description',
            name: '描述',
            component: require('../components/description/description.vue').default
        },
        {
            path: '/vote',
            name: '投票',
            component: require('../components/vote/vote.vue').default
        },
        {
            path: '/review',
            name: '评审',
            component: require('../components/review/review.vue').default
        },
        {
            path: '/verify',
            name: '媒体',
            component: require('../components/vote/verify.vue').default
        },
        {
            path: '/success',
            name: '投票成功',
            component: require('../components/vote/success.vue').default
        },
        {
            path: '/more',
            name: '更多',
            component: require('../components/vote/more.vue').default
        },
        {
            path: '/win',
            name: '中奖',
            component: require('../components/vote/win.vue').default
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
    mode: 'history'
>>>>>>> b09a37bbd7f783337ff803bd057a3da17fd5f378
})
