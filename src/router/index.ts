import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import store from '../store'

const router = createRouter({
  // https://vitejs.dev/config/#base
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

const ALLOW_LIST = ['/login']

router.beforeEach(async (to, from) => {
  if (ALLOW_LIST.includes(to.path)) {
    return true
  } else {
    const token = store.getters.token
    if (token) {
      const roles = store.getters.roles
      if (roles && roles.length > 0) {
        return true
      } else {
        try {
          await store.dispatch('getUserInfo')
          return true
        } catch (error) {
          // router.replace('/login')
          return false
        }
      }
    } else {
      router.replace('/login')
      return false
    }
  }
})
