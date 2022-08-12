<template>
  <input
    v-if="type === 'input'"
    :id="id"
    :placeholder="placeholder"
    class="form-input"
  >
  <textarea
    v-else-if="type === 'textarea'"
    :id="id"
    :placeholder="placeholder"
    class="form-input form-input--area"
  />
</template>

<script>
export default {
  name: 'PanelFormInput',
  props: {
    type: {
      type: String,
      default: 'input',
      validator(value) {
        return ['input', 'textarea'].includes(value)
      }
    },
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Заполните поле'
    }
  }
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/_colors.scss";
@use "@/assets/styles/_params.scss";

.form-input {
  background: colors.$substrate-fon;
  box-shadow: colors.$input-shadow;
  border-radius: params.$substrate-border-radius;
  padding: 10px 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  outline: none;
  border: none;
  width: calc(100% - 32px);

  &--area {
    max-width: calc(100% - 32px);
    min-width: calc(100% - 32px);
    min-height: calc(108px - 20px);
  }

  &::placeholder {
    color: colors.$placeholder;
  }
}
</style>
