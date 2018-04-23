const List = [{
  id: 1,
  menuName: '首页',
  path: '/dashboard',
  permissionCode: 'admin:index',
  icon: 'home',
  children: []
}, {
  id: 2,
  menuName: '系统管理',
  path: '/example',
  permissionCode: 'admin:systemManger',
  icon: 'example',
  children: [{
    id: 3,
    menuName: '普通表格',
    path: '/example/table',
    permissionCode: 'admin:table',
    icon: 'table',
    children: []
  }, {
    id: 4,
    menuName: '树形',
    path: '/example/tree',
    permissionCode: 'admin:tree',
    icon: 'tree',
    children: []
  }]
}, {
  id: 5,
  menuName: '表单',
  path: '/form/index',
  permissionCode: 'admin:form',
  icon: 'form',
  children: []
}, {
  id: 6,
  menuName: '图表',
  path: '/charts',
  permissionCode: 'admin:charts',
  icon: 'chart',
  children: [{
    id: 7,
    menuName: '钢琴图',
    path: '/charts/keyboard',
    permissionCode: 'admin:keyboard',
    icon: 'chart',
    children: []
  }, {
    id: 8,
    menuName: '折线图',
    path: '/charts/line',
    permissionCode: 'admin:line',
    icon: 'chart',
    children: []
  }, {
    id: 9,
    menuName: '综合图表',
    path: '/charts/mixchart',
    permissionCode: 'admin:mixchart',
    icon: 'chart',
    children: []
  }]
}]

export default {
  getMenuList: config => {
    return List
  }
}
