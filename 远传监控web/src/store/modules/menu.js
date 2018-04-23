import { fetchMenuList } from '@/api/menu'

function hasPermissionCode(menu, permissionCodeList) {
  if (menu.permissionCode && permissionCodeList) {
    return permissionCodeList.some(permissionCode => menu.permissionCode.indexOf(permissionCode) >= 0)
  } else {
    return true
  }
}

function filterSibebarList(menuList, permissionCodeList) {
  const sidebarList = menuList.filter(menu => {
    if (hasPermissionCode(menu, permissionCodeList)) {
      if (menu.children && menu.children.length) {
        menu.children = filterSibebarList(menu.children, permissionCodeList)
      }
      return true
    }
    return false
  })
  return sidebarList
}

const menu = {
  state: {
    sidebarList: [],
    menuList: []
  },
  mutations: {
    SET_SIDEBARLIST: (state, sidebarList) => {
      state.sidebarList = sidebarList
    },
    SET_MENULIST: (state, menuList) => {
      state.menuList = menuList
    }
  },
  actions: {
    SetSidebarList: ({ commit }, data) => {
      commit('TOGGLE_SIDEBAR', data)
    },
    FetchSidebarList: ({ commit }, data) => {
      return new Promise((resolve, reject) => {
        const { permissionCode } = data
        if (this.menuList != null && this.menuList.length > 0) {
          commit('SET_SIDEBARLIST', filterSibebarList(this.menuList, permissionCode))
          resolve()
        } else {
          fetchMenuList().then(response => {
            const menuList = response.data
            commit('SET_MENULIST', menuList)
            commit('SET_SIDEBARLIST', filterSibebarList(menuList, permissionCode))
            resolve()
          }).catch(error => {
            reject(error)
          })
        }
      })
    }
  }
}

export default menu
