import request from '@/utils/request'

export function fetchMenuList() {
  return request({
    url: '/menu/list',
    method: 'get'
  })
}
