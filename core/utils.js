export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key))
  }
  return localStorage.setItem(key, JSON.stringify(data))
}

export function clearStorage(key, all = false) {
  if (all) {
    localStorage.clear()
    return
  }
  localStorage.removeItem(key)
}

export function createCardID() {
  return Date.now().toString()
}

export function toNumber(str) {
  return +`${str}`.replace(/\D/g, '')
}
