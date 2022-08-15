<template>
  <form class="form" @submit.prevent>
    <fieldset class="form-fieldset">
      <panel-form-field
        v-for="([id, {type = 'input', placeholder, label, required = true}], idx) of fieldsEntries"
        :key="id"
        class="form-field"
        :class="{ 'form-field--last': idx + 1 === fieldsEntries.length}"
        :input-id="id"
        :required="required"
      >
        <template #label>{{ label }}</template>
        <template #input>
          <panel-form-input
            :id="id"
            v-model="formFields[id].value"
            :type="type"
            :error="getValidateField(id) || ''"
            :placeholder="placeholder"
            @input="changeInput(id)"
            @blur="validateInput(id)"
          >
            <template #error>
              {{ getValidateField(id) }}
            </template>
          </panel-form-input>
        </template>
      </panel-form-field>
    </fieldset>

    <panel-form-button :enable="formReady" class="form-button" @click="submitForm">
      Добавить товар
    </panel-form-button>
  </form>
</template>

<script>
import { REQUIRED, START_WITH, FORM_FOR_CARD } from 'static/constants'
import { storage } from '@/core/utils'

export default {
  name: 'PanelForm',
  fieldNames: {
    NAME: 'name-of-product',
    DESCRIPTION: 'product-description',
    PRICE: 'production-cost',
    IMG_LINK: 'img-link'
  },
  data() {
    return {
      validate: {
        [this.$options.fieldNames.NAME]: {
          type: REQUIRED,
          error: '',
          valid: false
        },
        [this.$options.fieldNames.IMG_LINK]: {
          type: [REQUIRED, START_WITH],
          params: {
            [START_WITH]: 'http'
          },
          error: '',
          valid: false
        },
        [this.$options.fieldNames.PRICE]: {
          type: REQUIRED,
          error: '',
          valid: false
        }
      },

      formFields: {
        [this.$options.fieldNames.NAME]: {
          label: 'Наименование товара',
          placeholder: 'Введите наименование товара',
          value: ''
        },
        [this.$options.fieldNames.DESCRIPTION]: {
          type: 'textarea',
          label: 'Описание товара',
          placeholder: 'Введите описание товара',
          required: false,
          value: ''
        },
        [this.$options.fieldNames.IMG_LINK]: {
          label: 'Ссылка на изображение товара',
          placeholder: 'Введите ссылку',
          value: ''
        },
        [this.$options.fieldNames.PRICE]: {
          id: 'production-cost',
          label: 'Цена товара',
          placeholder: 'Введите цену',
          value: ''
        }
      }
    }
  },
  computed: {
    fieldsEntries() {
      return Object.entries(this.formFields)
    },
    validateValues() {
      return Object.values(this.validate)
    },
    formReady() {
      return this.validateValues.every(field => field.valid === true)
    }
  },
  watch: {
    formFields: {
      handler() {
        this.setStorageFormValues()
      },
      deep: true
    }
  },
  mounted () {
    this.fillFromStorage()
    this.validationOfFilledFields()
  },
  methods: {
    submitForm() {
      if (!this.formReady) return

      const fieldNames = this.$options.fieldNames
      this.$emit('submit', {
        name: this.formFields[fieldNames.NAME].value,
        description: this.formFields[fieldNames.DESCRIPTION].value,
        imgLink: this.formFields[fieldNames.IMG_LINK].value,
        price: this.formFields[fieldNames.PRICE].value
      })

      this.clearFormFields()
      this.resetValidate()
    },
    changeInput(id) {
      const field = this.findFormField(id)

      if (id === 'production-cost') {
        field.value = this.$number.crushing(field.value)
      }
    },
    validateInput(id) {
      const validate = this.validate[id]
      if (!validate) return

      const field = this.findFormField(id)

      const { valid, msg } = this.$validate({
        value: field.value
      }, { ...validate })

      validate.error = msg
      validate.valid = valid
    },
    findFormField(id) {
      return this.formFields[id] || {}
    },
    getValidateField(id) {
      return this.validate[id]?.error || ''
    },
    clearFormFields() {
      this.fieldsEntries.forEach(([_, field]) => {
        field.value = ''
      })
    },
    fillFromStorage() {
      const fields = storage(FORM_FOR_CARD) || []
      fields.forEach(({ id, value }) => {
        this.formFields[id].value = value
      })
    },
    resetValidate() {
      this.validateValues.forEach(field => { field.valid = false })
    },
    validationOfFilledFields() {
      Object.entries(this.formFields).forEach(([fieldId, field]) => {
        if (field.value && this.validate[fieldId]) {
          this.validateInput(fieldId)
        }
      })
    },
    setStorageFormValues() {
      storage(FORM_FOR_CARD,
        this.fieldsEntries.map(field => ({
          id: field[0],
          value: field[1].value
        }))
      )
    }
  }
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/_colors.scss";
@use "@/assets/styles/_params.scss";

.form {
  padding: 24px;
  box-shadow: colors.$substrate-shadow;
  background-color: colors.$substrate-fon;
  border-radius: params.$substrate-border-radius;

  &-fieldset {
    padding: 0;
    margin: 0;
    border: none;
    min-inline-size: auto;
  }

  &-field {
    margin-bottom: 16px;

    &--last {
      margin-bottom: 0;
    }
  }

  &-button {
    margin-top: 24px;
  }
}
</style>
