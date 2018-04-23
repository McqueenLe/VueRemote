import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

function hasPermission(permissionCodes, permissionCode) {
  if (!permissionCodes) return true
  return permissionCodes.some(role => permissionCode.indexOf(role) >= 0)
}

const whiteList = ['/login', '/authredirect'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      if (store.getters.permissionCodes.length === 0) {
        store.dispatch('GetInfo').then(res => { // 拉取用户信息
          const permissionCode = res.data.permissionCodes
          router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
          // 记录权限
          store.dispatch('FetchSidebarList', { permissionCode }).then(() => {
            next({ ...to, replace: true }) // hack方法
          })
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            Message.error('验证失败,请重新登录')
            next({ path: '/login' })
          })
        })
      } else {
        // 权限判断 如果没有权限 者跳到401界面
        if (hasPermission(store.getters.permissionCodes, to.meta.permissionCode)) {
          next()//
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true }})
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
