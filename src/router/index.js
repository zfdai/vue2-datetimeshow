import Vue from 'vue'
import Router from 'vue-router'
import childRouterView from '@src/pages/common/childRouterView'

Vue.use(Router)

// 子路由配置
let _childRouterConfig = [
        {
          path:'/index',
          name:'index',
          component: resolve => require(['../pages/index'],resolve),
        },
        {
          path:'/datetimeshow',
          name:'datetimeshow',
          component: resolve => require(['../pages/datetimeshow'],resolve),
        },
        {
          path:'',
          redirect:'/index'
        }
];
// 命名路由
(function(){
  _childRouterConfig.map(function (route) {
      route.components = route.components || {};
      route.components.headerRouterView = route.components.headerRouterView || (resolve => require(['../pages/common/routerSnippet/baseHeader'], resolve));
      route.components.default = route.component;
      route.components.footerRouterView = route.components.footerRouterView || (resolve => require(['../pages/common/routerSnippet/baseFooter'], resolve));
    });
})();
export default new Router({
  routes: [
    {
      path: '/',
      component: childRouterView,
      children:_childRouterConfig
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
