import Mock from 'mockjs'
import permission from './permission'
import loginAPI from './login'
import table from './table'
import menu from './menu'

Mock.mock(/\/permission\/list/, 'get', permission.getList)
Mock.mock(/\/menu\/list/, 'get', menu.getMenuList)
// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)
Mock.mock(/\/login\/captcha\.*/, 'get', loginAPI.getCaptcha)

// 表格相关
Mock.mock(/\/table\/list\.*/, 'get', table.getList)

export default Mock
