<template>
  <form class="form" @submit.prevent>
    <fieldset class="form-fieldset">
      <panel-form-field
        v-for="({id, type = 'input', placeholder, label, required = true}, idx) of formFields"
        :key="id"
        class="form-field"
        :class="{ 'form-field--last': idx + 1 === formFields.length}"
        :input-id="id"
        :required="required"
      >
        <template #label>{{ label }}</template>
        <template #input>
          <panel-form-input
            :id="id"
            v-model="formFields[idx].value"
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

    <panel-form-button :enable="formValid" class="form-button">
      Добавить товар
    </panel-form-button>
  </form>
</template>

<script>
import { REQUIRED, START_WITH } from 'assets/js/constants'

export default {
  name: 'PanelForm',
  data() {
    return {
      validate: {
        'name-of-product': {
          type: REQUIRED,
          error: '',
          validate: false
        },
        'img-link': {
          type: [REQUIRED, START_WITH],
          params: {
            [START_WITH]: 'http'
          },
          error: '',
          validate: false
        },
        'production-cost': {
          type: REQUIRED,
          error: '',
          validate: false
        }
      },
      formValid: false,

      formFields: [
        {
          id: 'name-of-product',
          label: 'Наименование товара',
          placeholder: 'Введите наименование товара',
          value: ''
        },
        {
          id: 'product-description',
          type: 'textarea',
          label: 'Описание товара',
          placeholder: 'Введите описание товара',
          required: false,
          value: ''
        },
        {
          id: 'img-link',
          label: 'Ссылка на изображение товара',
          placeholder: 'Введите ссылку',
          value: ''
        },
        {
          id: 'production-cost',
          label: 'Цена товара',
          placeholder: 'Введите цену',
          value: ''
        }
      ]
    }
  },
  methods: {
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
        type: validate.type,
        value: field.value
      }, { ...validate })

      validate.error = msg
      validate.valid = valid

      this.defineValidForm()
    },
    findFormField(id) {
      return this.formFields.find(field => field.id === id)
    },
    getValidateField(id) {
      return this.validate[id]?.error || ''
    },
    defineValidForm() {
      this.formValid = Object.values(this.validate).every(field => field.valid === true)
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
