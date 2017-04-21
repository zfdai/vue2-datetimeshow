import Vue from 'vue'
import Router from 'vue-router'
import childRouterView from '@src/pages/common/childRouterView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: childRouterView,
      children:[
      	{
      		path:'/home',
      		name:'home',
      		component: resolve => require(['../pages/hello'],resolve),
      	},
        {
          path:'/datetimeshow',
          name:'datetimeshow',
          component: resolve => require(['../pages/datetimeshow'],resolve),
        },
      	{
      		path:'',
      		redirect:'/home'
      	}
      ]
    },
    {
      path: '/page404',
      component: resolve => require(['../pages/common/error/page404'],resolve),
      name:'page404'
    },
    //空路由跳转
    {
      path: '*',
      redirect:'/page404'
    }
  ]
})
