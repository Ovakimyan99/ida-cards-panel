<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'PanelFormButton'
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/_colors.scss";
@use "@/assets/styles/_params.scss";

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
}
</style>
