import { defineNuxtRouteMiddleware, navigateTo } from '#imports'

export default defineNuxtRouteMiddleware((to) => {
  if (to.path !== '/redirect') {
    return navigateTo('/redirect?callback=%2Fother')
  }
})
