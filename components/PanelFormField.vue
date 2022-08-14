<template>
  <div class="field">
    <label class="field-label" :for="inputId" :class="{ required }">
      <slot name="label" />
    </label>
    <slot name="input" />
  </div>
</template>

<script>
export default {
  name: 'PanelFormField',
  props: {
    inputId: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/_colors.scss";

.field {
  &-label {
    position: relative;
    display: inline-block;
    font-weight: 400;
    font-size: 10px;
    line-height: 1.3;
    color: colors.$label;
    margin-bottom: 4px;

    &.required {
      &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: colors.$important;
        transform: translate(100%, -10%);
      }
    }
  }
}
</style>
