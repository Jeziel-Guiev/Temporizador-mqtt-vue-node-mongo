import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component:()=>import('../views/Error404.vue'),
  },
  
  {
  path: '/dashboard/:name',
  name:'dashboard',
    component:()=>import('../components/Dashboard.vue'),
    children:[
      {
        path:'',
        component:()=>import('../components/Fdashboard/Init.vue'),
      },
      {
        path:'sonoff',
        component:()=>import('../components/Fdashboard/sonoff.vue'),
      },
    ]
  },
  {
    path: '/',
    component:()=>import('../views/Home.vue'),
    children:[
      {
        path:'',
        component:()=>import('../views/Init/home.vue'),
      },
      {
        path:'about',
        component:()=>import('../views/About.vue'),
      },
      {
        path:'signin',
        component:()=>import('../views/Login/Signin.vue'),
      },
      {
        path:'signup',
        component:()=>import('../views/Login/Signup.vue'),
      }  
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
