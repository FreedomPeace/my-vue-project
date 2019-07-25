import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TabView from '@/components/TabView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWord',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'TabView',
      component: TabView
    }
  ]
})
