import { User } from "../types/user"
export function setRefreshTokenToLS(accessToken: string): void {
  localStorage.setItem('access_token', accessToken)
}

export function setAccessTokenToLS(refreshToken: string): void {
  localStorage.setItem('refresh_token', refreshToken)
}

export function setProfileToLS(profile: User): void {
  try {
    localStorage.setItem('profile', JSON.stringify(profile))
  } catch (error) {
    console.log('error')
  }
}

export function getProfileFromLS() {
  try {
    const profile = (localStorage.getItem('profile')) || null
    return profile ? JSON.parse(profile) : null
  } catch (error) {
    return null
  }
}