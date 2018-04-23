import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    permissionCodes: ['admin:index', 'admin:systemManger', 'admin:table', 'admin:tree', 'admin:form', 'admin:charts', 'admin:keyboard', 'admin:line', 'admin:mixchart'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  editor: {
    permissionCodes: ['admin:index', 'admin:form'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  getCaptcha: config => {
    return { imgUrl: Mock.Random.dataImage('50x20', Mock.mock({ 'regexp': /\w{4}/ }).regexp) }
  },
  logout: () => 'success'
}
