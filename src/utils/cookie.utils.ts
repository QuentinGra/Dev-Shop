export function getCookie(name: string): string | undefined {
  const cookie = document.cookie.split(';').find((cookie) => cookie.trim().startsWith(`${name}=`))

  return cookie ? cookie.split('=')[1] : undefined
}

export function setCookie(name: string, value: string, days: number): void {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`
}

export function deleteCookie(name: string): void {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
}
