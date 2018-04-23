const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  permissionCodes: state => state.user.permissionCodes,
  addRouters: state => state.permission.addRouters,
  sidebarList: state => state.menu.sidebarList,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews
}
export default getters
