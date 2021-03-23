import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FormTest from '@/components/formtest'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/formtest',
      name:'formtest',
      component:FormTest,
      meta:{
        isFlas:false,
        iskeepalive:true
      }
    },{
      path:'/test',
      name:'test',
      component:Test
    }

  ]
})
