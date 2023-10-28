import request from '@/utils/request'

const userApi = {
  join: '/join'
}

export function addUSer (parameter) {
  return request({
    url: userApi.join,
    method: 'post',
    params: parameter
  })
}