import axios, { type AxiosInstance } from 'axios'
import config from '../constant/config'
import { setAccessTokenToLS, setRefreshTokenToLS, setProfileToLS } from '../utils/local'
const getAccessTokenFromLS = () => {
  try {
    return localStorage.getItem('access_token') || ''
  } catch (error) {
    return ''
  }
}
const getRefreshTokenFromLS = () => {
  try {
    return localStorage.getItem('refresh_token') || ''
  } catch (error) {
    return ''
  }
}
export class Http {
  instance: AxiosInstance
  private accessToken: string
  private refreshToken: string
  private refreshTokenRequest: Promise<string> | null
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.refreshToken = getRefreshTokenFromLS()
    this.refreshTokenRequest = null
    this.instance = axios.create({
      baseURL: config.baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'expire-access-token': 60 * 60 * 24, // 1 ngày
        'expire-refresh-token': 60 * 60 * 24 * 160 // 160 ngày
      }
    })

    this.instance.interceptors.response.use((response) => {
      const { url } = response?.config
      if (url === 'login' || url === 'register') {
        this.accessToken = response?.data?.data?.access_token
        this.refreshToken = response?.data?.data?.refresh_token
        setAccessTokenToLS(this.accessToken)
        setRefreshTokenToLS(this.refreshToken)
        setProfileToLS(response?.data?.data?.user)
      }

      return response
    })
  }
}

const http = new Http().instance
export default http