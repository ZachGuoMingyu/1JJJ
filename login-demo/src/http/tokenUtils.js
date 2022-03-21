//存储token
export function setToken(token) {
  localStorage.setItem('token', token)
}
// 获取token
export function getToken() {
  localStorage.getItem('token')
}
// 删除token
export function delToken() {
  localStorage.removeItem('token')
}