import { toNumber } from '@/core/utils'

export default function (_, inject) {
  inject('number', {
    crushing
  })

  function crushing(val) {
    const numbers = `${toNumber(val)}`.split('')
    if (numbers.length <= 3) return numbers.join('')

    let res = ''
    const remainder = numbers.length % 3
    const integer = Math.floor(numbers.length / 3)

    res = [...numbers.splice(0, remainder)].join('')

    for (let i = 0; i < integer; i++) {
      res = res + ' ' + numbers.splice(0, 3).join('')
    }

    return res.trim()
  }
}
