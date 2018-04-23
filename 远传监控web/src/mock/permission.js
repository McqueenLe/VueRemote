import Mock from 'mockjs'

const List = [{
  id: 1,
  timestamp: +Mock.Random.date('T'),
  menuName: '系统管理',
  role: [],
  url: '',
  child: [{
    id: 2,
    timestamp: +Mock.Random.date('T'),
    menuName: '用户管理',
    role: ['admin'],
    url: '/userManager',
    child: []
  }]
}, {
  id: 3,
  timestamp: +Mock.Random.date('T'),
  menuName: '营业厅',
  role: ['admin', 'yingyeyuan'],
  child: [{
    id: 4,
    timestamp: +Mock.Random.date('T'),
    menuName: '用户服务',
    url: '/userServer',
    role: ['admin', 'yingyeyuan'],
    child: []
  }]
}]

export default {
  getList: config => {
    return List
  }
}
