import {
  request
} from 'network/request'

export function getHomeMulidata() {
  return request({
    url: '/home/multidata'
  });
}

export function getHomeGoods(type, page) {
  return request({
    url: 'http://152.136.185.210:8000/api/w6/home/data',
    params: {
      type,
      page
    }
  })
}