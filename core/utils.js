export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key))
  }
  return localStorage.setItem(key, JSON.stringify(data))
}

export function createCardID() {
  return Date.now().toString()
}

export function toNumber(str) {
  return +`${str}`.replace(/\D/g, '')
}
