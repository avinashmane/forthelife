export default defineNuxtRouteMiddleware((to) => {
    log(to)
    if (to.params.id === '1') {
      throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    }
  })