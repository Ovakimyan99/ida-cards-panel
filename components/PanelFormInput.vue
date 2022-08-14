<template>
  <div class="form-input-wrapper">
    <input
      v-if="type === 'input'"
      :id="id"
      :placeholder="placeholder"
      :class="{ error }"
      class="form-input"
    >
    <textarea
      v-else-if="type === 'textarea'"
      :id="id"
      :placeholder="placeholder"
      class="form-input form-input--area"
    />
    <span class="form-input-error">
      {{ error }}
    </span>
  </div>
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
    },
    error: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
@use "sass:color";
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
  width: calc(100% - 34px);
  border: 1px solid transparent;
  transition: background-color 0.1s ease-in;

  &:focus {
    background-color: color.scale(colors.$substrate-fon, $blackness: 2%);
  }

  &.error {
    border: 1px solid colors.$important;
  }

  &-wrapper {
    position: relative;
  }

  &--area {
    width: 252px;
    min-width: calc(100% - 32px);
    max-width: calc(100% - 32px);
    min-height: calc(108px - 20px);

    @media (min-width: 1256px) {
      max-width: 252px;
    }
  }

  &-error {
    font-weight: 400;
    font-size: 8px;
    line-height: 1.25;
    color: colors.$important;
    position: absolute;
    left: 0;
    bottom: -4px;
    transform: translateY(100%);
  }

  &::placeholder {
    color: colors.$placeholder;
  }
}
</style>
