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

export function ascendingFiltering(array, param = '') {
  if (param) {
    return array.sort((a, b) => toNumber(b[param]) - toNumber(a[param]))
  }
  return array.sort((a, b) => toNumber(b) - toNumber(a))
}

export function descendingFiltering(array, param = '') {
  if (param) {
    return array.sort((a, b) => toNumber(a[param]) - toNumber(b[param]))
  }
  return array.sort((a, b) => toNumber(a) - toNumber(b))
}

export function nameFiltering(array, param = '') {
  return array.sort((a, b) => {
    let nameA
    let nameB

    if (param) {
      nameA = a[param].toLowerCase()
      nameB = b[param].toLowerCase()
    } else {
      nameA = a.toLowerCase()
      nameB = b.toLowerCase()
    }

    if (nameA < nameB)
      return -1
    if (nameA > nameB)
      return 1
    return 0
  })
}

export function createCardID() {
  return Date.now().toString()
}

export function toNumber(str) {
  return +`${str}`.replace(/\D/g, '')
}
