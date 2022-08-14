<template>
  <button :class="{ enable }" class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'PanelFormButton',
  props: {
    enable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/styles/_colors.scss";
@use "@/assets/styles/_params.scss";
@use "@/assets/styles/_mixins.scss";

.button {
  font-family: 'Inter', sans-serif;
  background-color: colors.$btn-disabled;
  border-radius: params.$substrate-border-radius;
  color: colors.$placeholder;
  padding: 10px;
  font-size: 12px;
  line-height: 1.1;
  text-align: center;
  width: 100%;
  border: none;
  outline: none;
  transition: 0.3s ease-out;

  &.enable {
    background-color: colors.$btn-success;
    color: colors.$text-active;
    cursor: pointer;

    @include mixins.events-btn-bg(colors.$btn-success, 10%, 5%);
  }
}
</style>
