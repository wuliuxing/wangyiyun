import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import detail from '@/views/detail.vue'
import Playmusic from '@/views/playmusic.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    { path: '/music/:id',
      name: 'music',
      component: detail
    },
    { path: '/playmusic/:id',
      name: 'playmusic',
      component: Playmusic
    },
    {
      //  路由/域名都不匹配进入index
      path: '/*',
      redirect: '/index'
    }
  ]
})