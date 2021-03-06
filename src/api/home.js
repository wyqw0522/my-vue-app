import request from '@/utils/request'

let url = window.location.hostname;
if (url.indexOf('hdu')>-1) {
  var baseURL = 'http://jsjdj.hdu.edu.cn'
} else {
  var baseURL = 'http://101.34.237.153:7000'
}

export function getnotices(data) {
    return request({
        url: baseURL + '/v1/api/notices/me',
        method: 'get',
        params: data
    })
}

export function getfeedbacks(data) {
    return request({
        url: baseURL + '/v1/api/feedback/me',
        method: 'get',
        params: data
    })
}