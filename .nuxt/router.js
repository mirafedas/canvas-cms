import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7487340a = () => interopDefault(import('../pages/builder.vue' /* webpackChunkName: "pages/builder" */))
const _faa76c92 = () => interopDefault(import('../pages/preview.vue' /* webpackChunkName: "pages/preview" */))
const _5fc2119b = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _486ce381 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7487340a,
    name: "builder"
  }, {
    path: "/preview",
    component: _faa76c92,
    name: "preview"
  }, {
    path: "/projects",
    component: _5fc2119b,
    name: "projects"
  }, {
    path: "/",
    component: _486ce381,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
