import request from '@/utils/request'

export function getMenuPermissionList() {
  return request({
    url: '/permission/list',
    method: 'post'
  })
}
