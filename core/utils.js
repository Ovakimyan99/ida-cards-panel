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
