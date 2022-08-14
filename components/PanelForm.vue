<template>
  <form class="form" @submit.prevent>
    <fieldset class="form-fieldset">
      <panel-form-field
        v-for="({id, type = 'input', placeholder, label, required = true, error = ''}, idx) of formFields"
        :key="id"
        class="form-field"
        :class="{ 'form-field--last': idx + 1 === formFields.length}"
        :input-id="id"
        :required="required"
      >
        <template #label>{{ label }}</template>
        <template #input>
          <panel-form-input :id="id" :type="type" :error="error" :placeholder="placeholder" />
        </template>
      </panel-form-field>
    </fieldset>

    <panel-form-button enable class="form-button">
      Добавить товар
    </panel-form-button>
  </form>
</template>

<script>
export default {
  name: 'PanelForm',
  data() {
    return {
      formFields: [
        {
          id: 'name-of-product',
          label: 'Наименование товара',
          placeholder: 'Введите наименование товара',
          error: 'ОШибка'
        },
        {
          id: 'product-description',
          type: 'textarea',
          label: 'Описание товара',
          placeholder: 'Введите описание товара',
          required: false
        },
        {
          id: 'img-link',
          label: 'Ссылка на изображение товара',
          placeholder: 'Введите ссылку'
        },
        {
          id: 'production-cost',
          label: 'Цена товара',
          placeholder: 'Введите цену'
        }
      ]
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
