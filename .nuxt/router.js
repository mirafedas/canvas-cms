import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1ba2cef2 = () => interopDefault(import('../pages/builder.vue' /* webpackChunkName: "pages/builder" */))
const _0053ae34 = () => interopDefault(import('../pages/preview.vue' /* webpackChunkName: "pages/preview" */))
const _d1f18684 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _56a57984 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/builder",
    component: _1ba2cef2,
    name: "builder"
  }, {
    path: "/preview",
    component: _0053ae34,
    name: "preview"
  }, {
    path: "/projects",
    component: _d1f18684,
    name: "projects"
  }, {
    path: "/",
    component: _56a57984,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
