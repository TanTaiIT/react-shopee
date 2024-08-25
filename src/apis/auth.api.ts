import http from '../http/http'
const URL_REGISTER = 'register'
const URL_LOGIN = 'login'
const URL_LOGOUT = 'logout`'
const authApi = {
  registerAccount(body: { email: string; password: string }) {
    return http.post(URL_REGISTER, body)
  },

  loginAccount(body: { email: string, password: string }) {
    return http.post(URL_LOGIN, body)
  },

  logoutAccount() {
    return http.post(URL_LOGOUT)
  }
}

export default authApi