import request from '@/utils/request'

const api = {
  announcement: '/user/announcement',
  trafficDetails: '/user/trafficDetails',
  inviteCode: '/user/inviteCode'
}

export default api

/**
 * 获取公告
 * @returns {AxiosPromise}
 */
export function getAnnouncement () {
  return request({
    url: api.announcement,
    method: 'get'
  })
}

/**
 * 获取流量详情
 * @returns {AxiosPromise}
 */
export function getTrafficDetails () {
  return request({
    url: api.trafficDetails,
    method: 'get'
  })
}

/**
 * 重置邀请码
 */
export function resetInviteCode () {
  return request({
    url: api.inviteCode,
    method: 'put'
  })
}
