import { REQUIRED, START_WITH } from 'assets/js/constants'

export default function (context, inject) {
  inject('validate', validate)

  function required(val) {
    if (val) return createResult({ valid: true })

    return createResult({
      valid: false,
      msg: 'Поле является обязательным'
    })
  }

  function startsWith(val, validateField) {
    const validateParams = validateField?.params || {}

    const compareWith = validateParams[START_WITH]
    if (!compareWith)
      throw new Error('validate "startsWith" require params.compareWith')

    const isStartWith = val.startsWith(compareWith)
    if (isStartWith) return createResult({ valid: true })

    return createResult({
      valid: false,
      msg: `Поле должно начинаться с ${compareWith}`
    })
  }

  function validate({ value, type: types }, args) {
    if (typeof types === 'string') types = [types]

    let resValidate = ''
    for (const type of types) {
      if (resValidate) break

      switch (type) {
        case REQUIRED:
          resValidate = required(value)
          break
        case START_WITH:
          resValidate = startsWith(value, args)
          break
      }
    }

    return resValidate
  }
}

function createResult({ valid, msg = '' }) {
  return { valid, msg }
}
