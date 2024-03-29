import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWord',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/Main',
      name: 'Main',
      component:Main
    }
  ]
})
